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
    <Head />
    <Preview>You're on the roinamis list.</Preview>
    <Body style={main}>
      <Container style={container}>
        <Text style={mark}>roinamis</Text>

        <Heading style={h1}>Welcome in.</Heading>

        <Text style={text}>
          Thanks for joining the list. We're a small brand making heavyweight,
          everyday pieces, and we'd rather make fewer of them and get them right.
        </Text>

        <Text style={text}>
          We won't crowd your inbox. You'll hear from us now and then when
          there's a new piece, a restock, or something worth knowing about
          before it goes out.
        </Text>

        <Text style={text}>That's it. Glad to have you here.</Text>

        <Section style={rule} />

        <Text style={signoff}>wear the story</Text>
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
  backgroundColor: '#ffffff',
  fontFamily:
    "'Epilogue', 'Helvetica Neue', Helvetica, Arial, sans-serif",
  color: '#141414',
}

const container = {
  margin: '0 auto',
  maxWidth: '520px',
  padding: '48px 32px 56px',
}

const mark = {
  margin: '0 0 40px',
  fontSize: '13px',
  letterSpacing: '0.32em',
  textTransform: 'uppercase' as const,
  color: '#141414',
}

const h1 = {
  margin: '0 0 24px',
  fontSize: '26px',
  fontWeight: 500 as const,
  lineHeight: '1.25',
  color: '#141414',
}

const text = {
  margin: '0 0 18px',
  fontSize: '15px',
  lineHeight: '1.7',
  color: '#4a4a4a',
}

const rule = {
  borderTop: '1px solid #e2ded8',
  margin: '36px 0 20px',
}

const signoff = {
  margin: '0',
  fontSize: '11px',
  letterSpacing: '0.28em',
  textTransform: 'lowercase' as const,
  color: '#6b6b6b',
}
