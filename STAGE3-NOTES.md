# Stage 3 — Forms Backend, Transitions, SEO Finishing

Builds on Stage 1 + Stage 2 without altering existing pages or design.

## New: working form backend
- `app/api/join/route.ts` — validates and accepts registration submissions
- `app/api/contact/route.ts` — validates and accepts contact messages
- Both currently `console.log` the submission and return success. Each file has
  commented example code for wiring in a real email service (Resend shown as the
  example) — install the package, set the API key in `.env.local`, and uncomment.
- `.env.example` — documents the optional `RESEND_API_KEY`

## Updated: forms now call the real endpoints
- `components/join/JoinForm.tsx` — posts to `/api/join`, shows a dismissible error
  banner on failure instead of silently succeeding
- `components/contact/ContactForm.tsx` — posts to `/api/contact`, same error handling

## New: page transitions + loading state
- `app/template.tsx` — fade/slide transition on every route change (Next.js App
  Router convention — re-mounts per navigation automatically, no extra wiring needed)
- `components/ui/PageLoader.tsx` — brief branded loading animation on first load,
  mounted once in `app/layout.tsx`

## New: SEO finishing touches
- `app/sitemap.ts` — dynamic sitemap covering all 8 routes
- `app/robots.ts` — robots rules + sitemap reference, disallows `/api/`
- `app/not-found.tsx` — custom, on-brand 404 page (previously the Next.js default)

## Files changed from Stage 1/2 (not just added)
- `app/layout.tsx` — mounts `<PageLoader />`
- `components/join/JoinForm.tsx` — real API call + error state
- `components/contact/ContactForm.tsx` — real API call + error state

## How to apply
Unzip and copy these files into your repo, preserving folder paths. Then:

```bash
npm install
npm run dev
```

## Before launch
- Update `baseUrl` in `app/sitemap.ts` and `app/robots.ts` if the production domain changes
- Wire the two API routes to a real email/CRM service (see TODO comments in each route)
- Everything else flagged in the Stage 1/2 notes (team bios, testimonials, office address, etc.) still applies
