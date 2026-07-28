# Stage 2 — Remaining Pages

Adds the six remaining pages to the Stage 1 foundation. Everything reuses the Stage 1
layout, tokens, and shared components — no visual or structural drift.

## New pages
- `/about` — story timeline, vision, mission, core values
- `/programmes` — full listing of all 7 programmes with expandable "what you'll learn" detail
- `/projects` — Student Projects portfolio with client-side filter by programme
- `/team` — Meet Our Team, clearly labelled placeholder profiles with social icons
- `/testimonials` — full testimonial grid
- `/join` — registration form (validated) with in-place confirmation state, plus FAQ accordion
- `/contact` — contact form, contact details, Google Maps embed, social links

## New shared components
- `components/ui/PageHero.tsx` — reusable interior-page banner
- `components/ui/Accordion.tsx` — accessible FAQ accordion
- `lib/icon-map.ts` — shared lucide icon lookup (dedupes what was previously inline in `Programmes.tsx`)

## Files changed from Stage 1 (not just added)
- `next.config.mjs` — swapped unused image domains for `picsum.photos` (used by project thumbnails)
- `types/index.ts` — added `CoreValue` and `StoryMilestone` types
- `lib/data.ts` — added `coreValues` and `storyMilestones` data
- `components/home/Programmes.tsx` — now imports the shared `icon-map` instead of a local copy
- `components/providers/ThemeProvider.tsx` — fixed the `next-themes` type import to use the package's public export

## How to apply

Unzip and copy these files into your existing repo, preserving the folder paths (they
overlay directly onto the Stage 1 structure — nothing needs to be renamed or moved).
Then:

```bash
npm install
npm run dev
```

## Still placeholder, pending real content
- Team member names/roles/bios/photos (`lib/data.ts` → `team`)
- Testimonials (`lib/data.ts` → `testimonials`)
- Project thumbnails (currently `picsum.photos` placeholder images — swap for real screenshots)
- Office address and Google Maps embed on `/contact`
- Both registration (`/join`) and contact (`/contact`) forms currently simulate submission
  client-side. Wire them to a real endpoint (an API route, Formspree, etc.) before launch.
