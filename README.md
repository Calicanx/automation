# Advior Automation

Marketing site for **automation.advior.top** — custom AI agents, LLM integrations, and workflow automation for growing companies.

- Production domain: https://automation.advior.top/
- Sibling site: https://website.advior.top/ (websites for local businesses)
- Stack: React 19, Vite, Tailwind CSS v4, React Router, Playwright
- Sales skills copied from the website project and live in `.agents/skills/`

## Run locally

```bash
npm install
npm run dev
```

## Build and verify

```bash
npm run build
npm run lint
npx playwright install chromium   # first run only
npx playwright test
```

## Content map

| Section | Component |
| --- | --- |
| Hero | `src/components/Hero.tsx` |
| About | `src/components/About.tsx` |
| Problem (handoff tax) | `src/components/Problem.tsx` |
| What you get | `src/components/WhatYouGet.tsx` |
| Pricing (Sprint / System) | `src/components/Pricing.tsx` |
| Featured work | `src/components/Work.tsx` |
| How it works | `src/components/HowItWorks.tsx` |
| Integration part | `src/components/GooglePart.tsx` (class names are shared with the website project) |
| Who it is for | `src/components/WhoFor.tsx` |
| Testimonials | `src/components/Testimonials.tsx` |
| FAQ | `src/components/FAQ.tsx` |
| CTA + Footer | `src/components/CTA.tsx`, `src/components/Footer.tsx` |

Case studies live in `src/data/projects.ts`; blog posts in `src/data/posts.ts`.

## SEO

The canonical origin is `https://automation.advior.top`. Pages are prerendered to
static HTML at build time: every route ships real markup, a unique title,
description, canonical, Open Graph/Twitter tags, and JSON-LD (blog posts get an
`Article` schema). Bots and AI agents never need to run JavaScript.

- Routes and per-page meta live in `src/seo.ts` (SEO_MANIFEST). Add new pages
  there and in `src/App.tsx` — `npm run build` prerenders them and regenerates
  `dist/sitemap.xml` from the manifest, so the sitemap cannot drift.
- `scripts/prerender.mjs` injects per-route `<head>` into the client build and
  emits `404.html` (served for unknown paths on Cloudflare Pages).
- `usePageMeta()` applies the same manifest client-side on navigation.
- `public/llms.txt` summarises the site for AI agents; `public/robots.txt`
  allows AI crawlers explicitly; `404` routes render a noindex page.
- `index.html`, `usePageMeta`, and the prerender script all point at
  `public/og.png` for social cards.

When adding pages, update `src/seo.ts`, `index.html` only if the default head
changes, and the page title via `usePageMeta`.
Cross-link to the website sibling at `https://website.advior.top`; never use the
bare `advior.top` origin for canonical URLs.
