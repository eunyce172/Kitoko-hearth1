# Stage 4 — Loading States, Dynamic SEO Assets, Breadcrumbs

Builds on Stages 1–3 without altering existing page content or design.

## New: per-route loading states
- `components/ui/RouteLoading.tsx` — shared branded loading indicator
- `app/loading.tsx` + one `loading.tsx` in each of the 7 interior route folders
  (`about`, `programmes`, `projects`, `team`, `testimonials`, `join`, `contact`).
  These use Next.js's built-in `loading.tsx` convention — React Suspense shows
  this instantly while a route segment loads, no extra wiring required.

## New: dynamic, on-brand SEO/social assets (generated at request time, no static image files to maintain)
- `app/opengraph-image.tsx` — Open Graph share image
- `app/twitter-image.tsx` — Twitter/X card image
- `app/icon.tsx` — favicon
- `app/apple-icon.tsx` — Apple touch icon
- `app/manifest.ts` — web app manifest (installable, themed browser UI)

## New: breadcrumbs
- `components/ui/Breadcrumbs.tsx` — accessible breadcrumb trail with matching
  `BreadcrumbList` structured data (`<script type="application/ld+json">`),
  helping both users and search engines understand the site hierarchy.
- Added to the top of all 7 interior pages (Home has none, as it's the root).

## Files changed from earlier stages (not just added)
- `app/layout.tsx` —
  - Removed the static `/og-image.jpg` references now that `opengraph-image.tsx`
    / `twitter-image.tsx` generate these automatically
  - Added a `viewport` export with light/dark `theme-color`
  - Linked the new web manifest
  - Populated the `Organization` JSON-LD `sameAs` with the site's social links
- `app/about/page.tsx`, `app/programmes/page.tsx`, `app/projects/page.tsx`,
  `app/team/page.tsx`, `app/testimonials/page.tsx`, `app/join/page.tsx`,
  `app/contact/page.tsx` — each now renders `<Breadcrumbs />` above its `PageHero`

## How to apply
Unzip and copy these files into your repo, preserving folder paths — the loading.tsx
files go inside their matching existing route folders (e.g. `app/about/loading.tsx`
sits next to your existing `app/about/page.tsx`). Then:

```bash
npm install
npm run dev
```

## Notes
- The dynamic image routes (`opengraph-image.tsx`, `twitter-image.tsx`, `icon.tsx`,
  `apple-icon.tsx`) run on the Edge runtime via `next/og` — no extra dependency
  needed, it ships with Next.js 14.
- Update the social URLs in `app/layout.tsx` (`sameAs`) and `components/layout/Footer.tsx`
  once real social accounts exist.
