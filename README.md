# Quran Academy

A marketing site for an online Quran teaching service — a single-page Next.js
site (App Router, TypeScript, Tailwind CSS) with all contact/CTAs routed to
WhatsApp. No backend, database, or login; static content only.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it.

## Content to update before launch

- **Placeholder name/branding**: "Quran Academy" is a placeholder — update in
  `src/app/layout.tsx` (metadata) and `src/components/Header.tsx` / `Footer.tsx`.
- **Teacher bio placeholders**: `[X years teaching experience]` and
  `[countries taught]` in `src/components/About.tsx`.
- **Testimonials**: `src/components/Testimonials.tsx` contains clearly marked
  placeholder quotes — replace with real feedback.
- **WhatsApp number**: set in `src/lib/whatsapp.ts`.
- **metadataBase**: placeholder domain in `src/app/layout.tsx` — update once a
  production URL exists.

## Build

```bash
npx tsc --noEmit
npx next build
```

## Deploy

Deploys to [Vercel](https://vercel.com/new) with no extra configuration.
