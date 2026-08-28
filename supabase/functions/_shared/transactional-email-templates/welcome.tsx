import * as React from 'npm:react@18.3.1'
import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Section,
  Text,
} from 'npm:@react-email/components@0.0.22'
import type { TemplateEntry } from './registry.ts'

const Email = () => (
  <Html lang="en" dir="ltr">
    <Head>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Archivo+Black&family=DM+Mono:wght@400;500&family=DM+Sans:opsz,wght@9..40,400;9..40,500&display=swap');
      `}</style>
    </Head>
    <Preview>you're on the roinamis list.</Preview>
    <Body style={main}>
      <Container style={container}>
        <Text style={metaRow}>
          <span style={metaLeft}>roinamis</span>
          <span style={metaRight}>wear the story</span>
        </Text>

        <Section style={ruleTop} />

        <Text style={eyebrow}>studio note</Text>

        <Heading style={h1}>welcome in.</Heading>

        <Text style={text}>
          Thanks for joining the list. roinamis is a brand built to have lasting detail
          and impact that hold up over time.
        </Text>

        <Text style={text}>
          We won't crowd your inbox. You'll hear from us now and then when
          there's a new piece, a restock, or something worth knowing about
          before it goes out.
        </Text>

        <Text style={text}>That's it. Glad to have you here.</Text>

        <Section style={rule} />

        <Text style={footer}>
          <span>founded 2022 · roinamis</span>
          <span style={footerSign}>wear the story</span>
        </Text>

        <Text style={noReply}>
          Please do not reply to this email. For questions, reach out to roinamis directly.
        </Text>
      </Container>
    </Body>
  </Html>
)

export const template = {
  component: Email,
  subject: 'Welcome to roinamis',
  displayName: 'Welcome email',
  previewData: {},
} satisfies TemplateEntry

const main = {
  backgroundColor: '#e9e7e0',
  fontFamily: "'DM Sans', Arial, sans-serif",
  color: '#0a0a0a',
  padding: '32px 0',
}

const container = {
  margin: '0 auto',
  maxWidth: '560px',
  padding: '40px 32px 48px',
}

const metaRow = {
  margin: '0 0 12px',
  fontFamily: "'DM Mono', 'Courier New', monospace",
  fontSize: '10px',
  letterSpacing: '0.15em',
  textTransform: 'lowercase' as const,
  color: 'rgba(10,10,10,0.6)',
}

const metaLeft = {
  float: 'left' as const,
}

const metaRight = {
  float: 'right' as const,
}

const ruleTop = {
  borderTop: '1px solid rgba(10,10,10,0.85)',
  margin: '26px 0 56px',
}

const eyebrow = {
  margin: '0 0 14px',
  fontFamily: "'DM Mono', 'Courier New', monospace",
  fontSize: '10px',
  letterSpacing: '0.15em',
  textTransform: 'uppercase' as const,
  color: 'rgba(10,10,10,0.54)',
}

const h1 = {
  margin: '0 0 28px',
  fontFamily: "'Archivo Black', 'Arial Black', Arial, sans-serif",
  fontSize: '44px',
  fontWeight: 400 as const,
  lineHeight: '0.95',
  letterSpacing: '-0.06em',
  textTransform: 'lowercase' as const,
  color: '#0a0a0a',
}

const text = {
  margin: '0 0 18px',
  fontSize: '15px',
  lineHeight: '1.7',
  letterSpacing: '-0.01em',
  color: 'rgba(10,10,10,0.72)',
}

const rule = {
  borderTop: '1px solid rgba(10,10,10,0.2)',
  margin: '40px 0 18px',
}

const footer = {
  margin: '0',
  fontFamily: "'DM Mono', 'Courier New', monospace",
  fontSize: '9px',
  letterSpacing: '0.1em',
  textTransform: 'lowercase' as const,
  color: 'rgba(10,10,10,0.52)',
}

const footerSign = {
  float: 'right' as const,
}
