# Provenance — Aurove Motors

## Origin

- Reference: `landing/next/apex-roadster`, a v0-generated Next.js project built from a third-party template brief (`TASK_SPEC.txt`, brand "Apex Roadster" / "HorizonX").
- The folder had no git history, no GitHub repository and no deployment. The original template archives were deleted by the project owner before this pass, so the v0 output is the only baseline.
- Used for: section map, GSAP motion patterns, CSS class structure and stack baseline.
- Not used: the name Apex/HorizonX, all copy, colour tokens, logo, metadata, and the template's placeholder icon set.

This is a change pass, not a clean-room rebuild: component structure and several CSS class names are inherited from the v0 output. Copy, identity, palette, typography, routing, SEO and documentation are original to this repository.

## Assets

| Asset | Source | Status |
| --- | --- | --- |
| `public/assets/*.webp` (13) | Studio-style renders supplied with the v0 scaffold | Placeholder imagery; authorship unverified |
| `public/video/r1-film.mp4` | Supplied with the v0 scaffold (14.9 MB) | Placeholder footage; authorship unverified |
| `public/brand/aurove-mark.svg`, `src/app/icon.svg` | Drawn for this project | Original |
| Instrument Serif, Manrope | Google Fonts via `next/font` | SIL Open Font License 1.1 |
| Next.js, React, GSAP, Lenis, `@vercel/analytics` | npm | See each package |

The media was kept by explicit owner decision: assets are not replaced during this pass. No external media URLs remain in the codebase. Placeholder icons (`placeholder-*.svg/png/jpg`), the v0 favicon and the unused `lucide-react`, `tw-animate-css`, `@base-ui/react`, `class-variance-authority`, `shadcn` and Tailwind dependencies were removed.

Before any commercial use, replace the imagery and film with assets whose rights are known.

## Changes from the reference

- New brand: Aurove Motors and the Aurove R1, a fictional electric roadster (US market, USD).
- New palette: `--ink #0B0E0D`, `--ink-deep #070A09`, `--bone #EDEAE2`, `--surface #F7F5F0`, `--copper #B86B3F`.
- New type pairing: Instrument Serif for display, Manrope for body, self-hosted through `next/font`.
- Rewrote every visible string in `en` and `es`; both dictionaries are typed against one `Dictionary` shape.
- Added `[locale]` routing (`/en`, `/es`), locale detection in `src/proxy.ts` with a `aurove.locale` cookie, and a locale switcher in the header, mobile menu and footer.
- Moved the app to `src/`, removed shadcn scaffolding, `components/ui`, `lib/utils.ts`, `components.json`, `pnpm-workspace.yaml` and the PostCSS/Tailwind setup (the site uses plain CSS).
- Removed `typescript.ignoreBuildErrors`; `pnpm build` now typechecks.
- Added per-locale metadata, canonical URLs, `hreflang`, JSON-LD, `sitemap.xml`, `robots.txt` and a dynamic OG image.
- Made the reservation action functional as a `mailto:` link; removed the non-functional "read more" buttons from the systems cards.
- Replaced the header/footer wordmark with a drawn monogram and removed the fake social destinations from the footer links (labels retained, anchored to the page).

## Residual risk

- The code derives from the v0 scaffold; layout composition and motion vocabulary are not independent of it. The MIT license covers this repository's code, not the underlying template's design.
- The imagery and film are placeholders of unknown authorship. They ship because the owner asked to keep assets; this is the main legal risk.
- The footer's Contact and Legal links and the Instagram/X/YouTube labels are inert anchors. They look like real destinations but lead to `#top`.
- Copy mentions a `$500` refundable deposit while the site takes no payment and has no reservation backend; the text states this explicitly.
- Journal dates run into 2027. They are editorial fiction, not events.
- Aurove is a fictional brand. No trademark search was performed; domain and handle availability were not verified.

## Deployment

- Repository: <https://github.com/JORDANROBERTO74/aurove-motors> (public, MIT).
- Live: <https://aurove-motors.vercel.app>
- Vercel project linked to `main`; no environment variables required (`NEXT_PUBLIC_SITE_URL` optional).
- Release: `v1.0.0`.
