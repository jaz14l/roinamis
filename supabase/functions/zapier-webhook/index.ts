import { createClient } from 'npm:@supabase/supabase-js@2';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { ...corsHeaders, 'Content-Type': 'application/json' },
  });

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  const webhookUrl = Deno.env.get('ZAPIER_WEBHOOK_URL');
  if (!webhookUrl) {
    return json({ error: 'Webhook URL not configured' }, 500);
  }

  try {
    const body = await req.json().catch(() => null);
    const email = typeof body?.email === 'string' ? body.email.trim().toLowerCase() : '';
    const rawPhone = typeof body?.phone === 'string' ? body.phone.trim() : '';

    if (!email || email.length > 254 || !EMAIL_RE.test(email)) {
      return json({ error: 'A valid email is required' }, 400);
    }

    if (rawPhone && (rawPhone.length > 32 || !/^[0-9+()\-.\s]+$/.test(rawPhone))) {
      return json({ error: 'Invalid phone number' }, 400);
    }

    const supabase = createClient(
      Deno.env.get('SUPABASE_URL')!,
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
    );

    // Only forward addresses that actually completed a signup.
    const { data: signup, error } = await supabase
      .from('email_signups')
      .select('id, email, phone')
      .ilike('email', email)
      .maybeSingle();

    if (error) {
      console.error('Signup lookup failed:', error.message);
      return json({ error: 'Lookup failed' }, 500);
    }

    if (!signup) {
      return json({ error: 'No signup found for this address' }, 404);
    }

    await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: signup.email,
        phone: signup.phone ?? null,
        signed_up_at: new Date().toISOString(),
      }),
    });

    return json({ success: true }, 200);
  } catch (error) {
    console.error('Zapier webhook error:', error);
    return json({ error: 'Failed to trigger webhook' }, 500);
  }
});
