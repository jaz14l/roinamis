import { corsHeaders } from 'npm:@supabase/supabase-js@2/cors'
import { createClient } from 'npm:@supabase/supabase-js@2'
import { EmailAPIError } from 'npm:@lovable.dev/email-js@0.1.0'
import { sendTemplateEmail } from '../_shared/transactional-email-templates/send-email.ts'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function json(body: unknown, status: number) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...corsHeaders, 'Content-Type': 'application/json' },
  })
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const body = await req.json().catch(() => null)
    const email = typeof body?.email === 'string' ? body.email.trim().toLowerCase() : ''

    if (!email || email.length > 254 || !EMAIL_RE.test(email)) {
      return json({ error: 'A valid email is required' }, 400)
    }

    const supabase = createClient(
      Deno.env.get('SUPABASE_URL')!,
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
    )

    // Only send to addresses that actually completed a signup.
    // Exact match: emails are normalized on insert; ilike would treat _ and % as wildcards.
    const { data: signup, error } = await supabase
      .from('email_signups')
      .select('id, email')
      .eq('email', email)
      .maybeSingle()

    if (error) {
      console.error('Signup lookup failed:', error.message)
      return json({ error: 'Lookup failed' }, 500)
    }
    if (!signup) {
      return json({ error: 'No signup found for this address' }, 404)
    }

    const result = await sendTemplateEmail('welcome', signup.email, {
      idempotencyKey: `welcome-${signup.id}`,
    })
    if (!result.sent) {
      console.warn(`Welcome email skipped for signup ${signup.id}: ${result.reason}`)
    }
    return json(result, 200)
  } catch (err) {
    if (err instanceof EmailAPIError) {
      // domain_not_verified, emails_disabled, rate limits, etc.
      console.error(`Welcome email API error: code=${err.code} status=${err.status}`)
      return json({ error: 'Email provider refused the send', code: err.code }, err.status === 429 ? 429 : 503)
    }
    console.error('send-welcome-email failed:', err)
    return json({ error: 'Failed to send welcome email' }, 500)
  }
})
