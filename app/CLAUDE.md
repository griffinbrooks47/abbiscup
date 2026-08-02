# app/ — Routes, layout, global stylesheet

Two routes only: `/` (`page.tsx`) and `/events` (`events/page.tsx`). No loading/error/not-found files, no API routes, no middleware, no nested layouts.

## layout.tsx (server component)
- Wraps the app in `MantineProvider`; imports `@mantine/core/styles.css` BEFORE `./globals.css` — the order matters for the cascade.
- Renders `<Navbar />` globally; the navbar hides itself on `/events` (logic lives in `components/nav.tsx`).
- Fonts: Jost, Lato, Asap_Condensed, and a localFont are imported but UNUSED — only Inter 500 is applied (`inter.className` on `<html>`). Don't assume the others render.
- `metadata.description` is placeholder junk ("I have followed setup instructions carefully"). LEFTOVER — fix only on request. Favicon is `app/favicon.ico` via metadata.

## page.tsx — home (`'use client'`)
- Vertical stack: Landing, About, JaneCambell, then `Element name="resources"` wrapping Resources, then an inline Seize-the-Awkward CTA section.
- `Element name="resources"` is the navbar's react-scroll target — renaming it silently breaks the nav "Links" button.
- Sections deliberately overlap — read "Section overlap" in components/CLAUDE.md before touching any section spacing.
- Dead code: local `ShadowCard`/`ImageCard` components and several unused imports. LEFTOVER. Its wrapper classes `bg-div`/`content-div` are undefined in CSS (no-ops).

## globals.css — READ THIS BEFORE EDITING
- THE HACK (top of file): `@tailwind base` is commented out and re-declared inside `@layer tailwind {}`. INTENTIONAL — DO NOT FIX. It demotes Tailwind preflight below Mantine's styles; restoring the stock three-directive form subtly breaks Mantine components site-wide.
- Responsive contract: ALL responsive behavior lives in two hand-written media queries — `max-width: 600px` (phone) and `min-width: 601px` (desktop) — defining the SAME ~16 class names with different values (`.section-container` is mobile-only). Every class has two definitions; edit BOTH or the viewports diverge.
- Tailwind breakpoints are NOT the system here. Sporadic `md:` (768px) usage exists, so 601–767px is a known inconsistency zone — ask before "fixing".
- Signature classes: `.shadow-div` (the hard offset shadow) and `.blue-gradient` (the REAL site gradient). Values live under "Design tokens" in components/CLAUDE.md.
- `body { background-color: aquamarine }` — LEFTOVER debug color, normally hidden behind sections. Don't build on it.
- Dead classes (defined, never used in markup): `.landing-title`, `.section-border-bottom`.
- Referenced-but-UNDEFINED classes (no-ops in markup today): `.bg-div`, `.content-div` (page.tsx), `.resource-col` (resources.tsx). Defining them WOULD change appearance — don't "complete" them casually.

## events/page.tsx (`'use client'`) — the annual-update file
- ALL yearly facts live in the `EVENT` and `SCHEDULE` constants at the top of the file — the JSX below reads from them and should not need editing. Stale between tournaments BY DESIGN; never treat current values as truth about the next event.
- `MAPS_URL` is DERIVED from `EVENT.address`, and both the venue-name link and the Directions button use it. Don't reintroduce a hardcoded maps URL — the two links drifting apart was the bug this replaced.
- Schedule rows are uniform time ranges (e.g. `"7:00 – 7:40 pm"`) so the time column aligns without any CSS. Keep that format; bare start times render ragged.
- The global navbar is hidden here; the page renders its own "Home" button.
- Contains one of the live `ShadowCard` copies (see "Copy-paste inventory" in components/CLAUDE.md).

## Annual update runbook
Canonical example: `git show 0512b7f` (the 2024-to-2025 refresh commit).
1. In `events/page.tsx`: update the `EVENT` constant (date, venue, address). The maps link updates itself.
2. Rewrite the `SCHEDULE` array. Concurrent games go in a session entry's `details`; keep every `time` a range.
3. Check the `components/landing.tsx` tagline/CTA for stale references.
4. Verify: `npm run build`, then eyeball `/` and `/events` at ≤600px and desktop widths.
- Blocks can be retired between years (Uniforms and the Parking Map link were dropped for 2026). If one returns, re-add it as a constant, not inline markup.
