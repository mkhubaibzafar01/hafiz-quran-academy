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
- **Site URL**: placeholder domain in `src/lib/site.ts` (`SITE_URL`) — update
  once a production URL exists. This single constant drives canonical tags,
  Open Graph URLs, and `sitemap.xml`/`robots.txt`.

## Blog

Blog posts are plain Markdown files with frontmatter — no database, no CMS.
Adding a post is just adding a file.

### Adding a new post

1. Create a new `.md` file in `content/blog/`, e.g.
   `content/blog/my-new-post.md`.
2. Add frontmatter (see fields below) followed by the post body in Markdown.
3. Add a featured image to `public/blog/` (see below) and point
   `featuredImage` at it.
4. Run `npm run build` (or just `npm run dev`) — the post is picked up
   automatically. No route, registry, or import needs to be touched.

### Frontmatter fields

```md
---
title: "Post Title"
description: "One or two sentences — used as the meta description and card excerpt."
slug: "post-title"                # must match the filename (without .md)
date: "2026-07-06"                # publish date, YYYY-MM-DD
lastModified: "2026-07-06"        # bump this whenever you edit the post
author: "Quran Academy Team"
category: "Tajweed"               # one of: Tajweed, Hifz, Kids Learning, Parent Guides
tags: ["tag one", "tag two"]
featuredImage: "/blog/my-image.jpg"
featuredImageAlt: "Descriptive alt text for the featured image"
---

Post content in Markdown starts here. Use `##`/`###` for headings — the
page's `<h1>` is generated automatically from `title`, so don't add a `#`
heading in the body. Posts with 3+ headings automatically get a table of
contents.
```

- `category` must exactly match one of the four categories defined in
  `CATEGORIES` in `src/lib/blog.ts`. To add a new category, add it there —
  category pages and filter pills are generated from that list automatically.
- Related posts (shown at the bottom of each post) are pulled automatically
  from other posts in the same `category`.

### Where images go

- Put blog images in `public/blog/` and reference them as `/blog/filename.jpg`.
- The two sample posts currently reuse existing course images
  (`/courses/...`) as placeholders — replace `featuredImage` with a real,
  dedicated image before publishing.
- Only the featured image (card + post header) is optimized through
  `next/image`. If you add inline images inside a post body, they'll render
  as plain `<img>` tags without automatic optimization.

### Routes this creates

- `/blog` — all posts, newest first, with category filter pills.
- `/blog/category/[category]` — posts filtered by category (slugified, e.g.
  `/blog/category/kids-learning`).
- `/blog/[slug]` — individual post, statically generated at build time.

All blog pages are statically generated (SSG) — there's no client-side data
fetching for content, and `sitemap.xml` regenerates automatically to include
every post and category page on each build.

## Build

```bash
npx tsc --noEmit
npx next build
```

## Deploy

Deploys to [Vercel](https://vercel.com/new) with no extra configuration.
