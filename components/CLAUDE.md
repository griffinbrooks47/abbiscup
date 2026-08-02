# components/ — All UI sections + 2 global CSS files

## Conventions
- Named exports, all-lowercase filenames. Sole exception both ways: `opacityCarousel.tsx` (camelCase, DEFAULT export).
- Only `nav.tsx` and `landing.tsx` declare `'use client'`. The others use hooks/interactivity WITHOUT the directive and compile only because their current ancestor (`app/page.tsx`) is a client component. Importing one from a server context breaks — add the directive first.
- `embla.css` and `janecambell.css` are imported as global side-effect stylesheets, NOT CSS modules — their class names are globally scoped.

## Per-component notes

### nav.tsx — global navbar (`'use client'`)
- Self-hides when pathname is `/events` (that page renders its own Home button instead).
- "Links" button runs `router.push('/')` then react-scroll `scroller.scrollTo('resources')` back-to-back — KNOWN RACE when coming from `/events`. Scroll target is `Element name="resources"` in `app/page.tsx`.
- `import { Router } from "next/router"` is an unused Pages-Router vestige. LEFTOVER — don't imitate.

### landing.tsx — hero (`'use client'`)
- Logo `/images/logofull.png`; site tagline lives inside its `ShadowCard` copy; "Schedule" CTA routes to `/events`.
- Logo is wrapped in an `<a>` with onClick and no href (keyboard-inaccessible); alt text is placeholder "Description of image". LEFTOVER.

### about.tsx — Abbi's biography
- Two `SectionDiv` sections (`/images/AbbiNew1.jpeg`, `/images/AbbiNew2.png`). Memorial copy — edit respectfully; never invent biographical facts.

### sectiondiv.tsx — shared image+text section (the only typed-props component)
- `SectionDivProps`: `title?`, `orientation: boolean` (**true = image LEFT of text**), `imgSrc`, `imgHeight`, `imgWidth`, `children`.
- Quirks: alt is hardcoded to "Caption Photo" for every instance (no alt prop); `paddingBottom: '4'` is unitless, a silent no-op. LEFTOVER.

### janecambell.tsx — Jane Campbell tribute
- SPELLING TRAP: file/folder/component names say "Cambell"; the real person is Jane **Campbell**. Grep BOTH spellings.
- Uses deprecated `next/image` `layout="fill"` + `objectFit` props (legacy API; warns under Next 14) — migrate only deliberately.
- Wraps itself in an orphan react-scroll `Element name="JaneCambell"` that nothing targets.
- Renders the carousel (default import of `opacityCarousel.tsx`).

### opacityCarousel.tsx — drag-only photo carousel
- DEFAULT export; NO `'use client'` despite useEffect/useRef/useCallback (see Conventions above).
- Imports types from `embla-carousel`, which is NOT declared in package.json — resolves only as a transitive dep of `embla-carousel-react`. Declare it before any dependency surgery.
- Three slides hardcoded as literal JSX (`/images/JaneCambell/slide1.png` through `slide3.png`).
- No prev/next buttons, dots, or autoplay are rendered (`embla-carousel-autoplay` is installed but never imported) — swipe/drag only.
- Internal dead code: `SLIDE_COUNT`, `slides`, `slideImage`. LEFTOVER.

### resources.tsx — resource cards + donation
- THE DUPLICATION TRAP: the four cards (Be Kind / Be Present / Be Courageous / Be Inclusive) exist TWICE, byte-for-byte — a `.resources-big` section (desktop) and a `.resources-small` section (mobile), toggled via CSS display. Every copy/link/style edit must be made in BOTH sections; the intro paragraphs also differ slightly between them.
- Donation button links to `http://support.iocdf.org/agosta` (plain http — confirm with the user before changing).
- References class `.resource-col`, which is undefined in any stylesheet (currently a no-op).

## CSS files
- `embla.css` — ~70% dead: stock button/dot styles for controls the carousel never renders, plus undefined CSS vars. The live part is container/slide layout only.
- `janecambell.css` — same 600px/601px dual media-query pattern as `app/globals.css`; contains an empty `.title` rule.

## Copy-paste inventory
- `ShadowCard` is defined 3×: `components/landing.tsx` (live), `app/events/page.tsx` (live), `app/page.tsx` (DEAD copy). There is no shared source — edit all live copies together, or extract deliberately.
- The blue CTA button pattern (`#4169E1` + `IconArrowBigRight` + hard-shadow inline style) appears 4× across landing / home / events. Same rule: grep for siblings before editing one.

## Design tokens (de facto — match these for any new UI)
- Accent: `#4169E1` (royal blue; passed as Mantine Button `color`).
- Gradient: use the `.blue-gradient` class in `app/globals.css` — NOT the broken `blue-gradient` token in `tailwind.config.ts`.
- Card shadow: `11px 11px 0px -4px #000000ce` · button shadow: `7px 8px 0px -4px #000000ce`.
- Radius: `11px` · border: `1.25px solid black` · section off-white: `#F5F5F5` · font: Inter 500 (the only font actually loaded).

## Section overlap (how the curved "blob" transitions work)
- Each home-page section renders its own `<main>` (nested `<main>`s — known a11y smell, INTENTIONAL for now) with a `section-border-top` rounded blob, a large negative bottom margin (`-mb-[9rem]`), and z-index stacking so the next section overlaps it.
- Changing one section's padding/margins shifts everything below it — visually verify adjacent sections at BOTH breakpoints (≤600px and desktop) after any spacing change.
