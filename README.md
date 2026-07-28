# Zeta One — Website

Official website for the Zeta One Android application. Built with Next.js (App Router), TypeScript, Tailwind CSS and Framer Motion, following the Zeta One Website Documentation (V26.1.8) across all 4 build phases.

## Status: All 4 phases complete

- **Phase 1** — Homepage, design system, folder architecture, brand assets
- **Phase 2** — Download page ecosystem, full Documentation system, Troubleshooting
- **Phase 3** — Articles ecosystem, Releases/Changelog, About, Credits, Contact, Contribute, Privacy/Terms, FAQ search
- **Phase 4** — Security headers, environment variables, structured data (JSON-LD), error handling (404/500/offline), GitHub readiness, final hardening

## Tech stack

- Next.js 14 (App Router) + TypeScript (strict mode, no `any`)
- Tailwind CSS (custom emerald/mint/cyan glass design tokens)
- Framer Motion (scroll reveals, floating cards, accordions)
- next/font (Inter + Plus Jakarta Sans, only the weights actually used)
- next/image everywhere, with a `SafeImage` fallback for missing assets

## Getting started

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

```bash
npm run build
npm start
```

This environment could not run `npm install` (no network access in the sandbox), so please verify the build locally or on Vercel before deploying.

## Environment variables

Copy `.env.example` to `.env.local` and fill in real values:

```bash
cp .env.example .env.local
```

Analytics stays fully disabled until `NEXT_PUBLIC_ANALYTICS_ID` and `NEXT_PUBLIC_ANALYTICS_PROVIDER` are both set.

## Project structure

```
app/                  Routes (App Router)
components/
  ui/                 Generic primitives (Button, GlassCard, Icon, Reveal...)
  layout/             Navbar, Footer, SearchModal, MobileMenu, JsonLd
  sections/           Feature-grouped sections (hero, features, articles, docs...)
config/               Central, editable configuration (site, theme, download, nav...)
constants/            Static app-wide constants (app.ts)
content/              Editable content data (articles, releases, docs, FAQ...)
lib/                  Framework-facing helpers (seo, search, env, structuredData)
types/                Shared TypeScript types
public/assets/        Canonical images (backgrounds, logo, tutorial, docs)
public/logos/         Logo mirror (spec-required path)
public/screenshots/   Real app screenshots go here once available
public/videos/        Future demo videos go here once available
.github/              Issue templates, PR template, CI workflow
```

## Before deploying

- Replace placeholder APK URLs in `config/download.config.ts` (`url: null`) — download buttons and cards auto-hide "Coming Soon" until a URL is set.
- Replace the device mockup placeholder in `components/sections/hero/DeviceMockup.tsx` with a real screenshot from `public/screenshots/`.
- Replace placeholder tutorial screenshots in `public/assets/tutorial/` with real ones.
- Fill in real copy for `/privacy`, `/terms`, `/about` sections as needed (currently accurate but general-purpose).
- Add real community links in `config/social.config.ts` and `content/credits.ts` once channels exist.
- Set `NEXT_PUBLIC_SITE_URL` and other values in `.env.local`.

## Security

Security headers (CSP, X-Frame-Options, Referrer-Policy, Permissions-Policy) are configured in `next.config.mjs`. Review and tighten the CSP before production if you add third-party scripts.

## License

The website source code is MIT licensed — see `LICENSE`. The Zeta One name, logo and Android app are not covered by this license.
