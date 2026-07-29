# Stage 5 — Programme Detail Pages

Builds on Stages 1–4 without altering existing page content, design, or the API/loading/SEO work already in place.

## New: dynamic programme detail pages
- `app/programmes/[slug]/page.tsx` — a full detail page per programme (statically
  generated via `generateStaticParams`): overview, "what you'll walk away with",
  at-a-glance duration/level/skills, a curriculum module timeline, and an "Apply
  for This Programme" CTA that deep-links to `/join?programme=<title>`
- `app/programmes/[slug]/loading.tsx` — matching route loading state
- Each detail page emits its own `Course` structured data (JSON-LD) and its own
  page title/description via `generateMetadata`

## Updated: richer programme data
- `types/index.ts` — `Programme` now includes `overview`, `outcomes`, and `curriculum`
- `lib/data.ts` — all 7 programmes now carry that detail content

## Updated: cards now link to real detail pages
- `components/programmes/ProgrammeCard.tsx` — kept the existing inline "what
  you'll learn" accordion, and added a "View full details" link to the new
  `/programmes/[slug]` page
- `components/home/Programmes.tsx` — featured cards on the homepage now link
  directly to their matching detail page instead of the general `/programmes` listing

## Updated: Join form pre-fill
- `components/join/JoinForm.tsx` — reads an optional `?programme=` query param
  (set automatically by the new "Apply for This Programme" buttons) and
  pre-selects that programme in the dropdown
- `app/join/page.tsx` — wraps `<JoinForm />` in `<Suspense>`, required by Next.js
  whenever a client component reads `useSearchParams()`; also fixed a unicode
  escape that wasn't rendering in the hero description

## Updated: sitemap
- `app/sitemap.ts` — now includes all 7 new `/programmes/[slug]` URLs

## How to apply
Unzip and copy these files into your repo, preserving folder paths — note the new
`app/programmes/[slug]/` folder (square brackets are literal in the folder name;
most zip/unzip tools and git handle this fine). Then:

```bash
npm install
npm run dev
```

Visit `/programmes/web-development` (or any other slug from `lib/data.ts`) to see
the new detail pages.
