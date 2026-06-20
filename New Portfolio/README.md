# Eyitayo Portfolio — Next.js

## Setup

```bash
npm install
npm run dev
```

## Assets you need to add

These are referenced in the code but not generated here — drop them into `public/`:

- `public/favicon.ico`
- `public/og-image.png` (1200×630) — used for Open Graph + Twitter cards
- `public/resume.pdf` — linked from the Hero "Resume" button

## Structure

```
app/
  layout.tsx        — root layout, fonts, metadata, JSON-LD
  page.tsx           — assembles all sections
  globals.css        — design tokens, reveal animation, focus styles
  sitemap.ts          — auto-generated sitemap.xml
  robots.ts           — auto-generated robots.txt
  api/contact/route.ts — placeholder POST endpoint for the contact form

components/
  navbar.tsx, hero.tsx, terminal-intro.tsx,
  about.tsx, experience.tsx, projects.tsx, contact.tsx, footer.tsx
  theme-provider.tsx, theme-toggle.tsx, reveal.tsx

lib/
  data.ts             — all site content (bio, skills, experience, projects)
```

## Wiring the contact form to a real backend

`app/api/contact/route.ts` currently just logs the submission. Replace the
`TODO` with a call to an email provider (Resend, SendGrid) or persist to a
database — the frontend (`components/contact.tsx`) won't need to change.

## Theming

Uses `next-themes` with `class` strategy. Toggle lives in the navbar and
respects system preference by default, persisting the user's choice in
`localStorage` automatically.
