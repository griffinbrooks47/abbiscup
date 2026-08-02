# Abbi's Cup

Static memorial/charity site for an annual soccer tournament in Houston honoring Abigail "Abbi" Agosta, raising OCD/mental-health awareness. Memorial content — edit copy respectfully; never invent biographical facts.

- **Stack:** Next.js 14 App Router · TypeScript strict · Tailwind 3 + Mantine 7. Two routes: `/` and `/events`.
- **No** backend, API routes, env vars, tests, or CI. All content is hardcoded JSX.
- **Deploy:** Vercel, auto-deploys on push (no committed config).
- `package.json` name "client" is boilerplate. `README.md` is the human-facing doc (run + deploy basics).

## Commands
- `npm run dev` / `npm run build` / `npm run lint`. Run `npm install` first in fresh worktrees.
- No test suite — verification = `npm run build` + visual check at ≤600px AND desktop.

## File map
| File | What it is |
|---|---|
| `app/layout.tsx` | Root layout: MantineProvider + global Navbar (font/metadata quirks → app/CLAUDE.md) |
| `app/page.tsx` | Home: stacks the section components; contains dead local components |
| `app/globals.css` | ALL responsive behavior + signature styles — read app/CLAUDE.md before touching |
| `app/events/page.tsx` | Event details; THE annual-update file (runbook → app/CLAUDE.md) |
| `components/nav.tsx` | Navbar; self-hides on `/events` |
| `components/landing.tsx` | Hero: logo, tagline, Schedule CTA |
| `components/about.tsx` | Abbi biography sections (memorial copy) |
| `components/sectiondiv.tsx` | Shared image+text section layout (only typed-props component) |
| `components/janecambell.tsx` + `.css` | Jane Campbell tribute (spelling trap, see below) |
| `components/opacityCarousel.tsx` + `embla.css` | Drag-only photo carousel |
| `components/resources.tsx` | Resource cards + donation (duplication trap → components/CLAUDE.md) |
| `public/` | Assets — most files are dead weight; live manifest → public/CLAUDE.md |

## Conventions
- Named exports, all-lowercase filenames. Sole exception both ways: `opacityCarousel.tsx` (camelCase, default export).
- Styling is a deliberate 3-way hybrid: Tailwind utilities (heavy arbitrary values) + hand-written global CSS classes + inline `style={{}}` on Mantine components. Don't unify or refactor it without asking.
- Responsiveness = hand-written 600px/601px media queries in `app/globals.css` (+ `janecambell.css`), NOT Tailwind breakpoints. Sporadic `md:` (768px) usage makes 601–767px a known bug zone; ask before "fixing".
- Repeated UI (`ShadowCard`, blue CTA button) is copy-pasted, never shared — grep for sibling copies before editing one ("Copy-paste inventory" in components/CLAUDE.md).
- Path alias: `@/*` maps to the repo root.

## Critical traps
- `app/globals.css` demotes `@tailwind base` into `@layer tailwind {}` ON PURPOSE (Mantine must beat Tailwind preflight). INTENTIONAL — never restore the stock directives. Detail in app/CLAUDE.md.
- Spelling: code and asset paths say "Cambell" (`janecambell.tsx`, `public/images/JaneCambell/`); the real person is Jane **Campbell**. Grep BOTH spellings.
- `tailwind.config.ts` custom theme is mostly dead: only `h-vp-nav` is used, and its `blue-gradient` backgroundColor entry is broken — the real gradient is the `.blue-gradient` class in globals.css.
- Dead code is pervasive (unused imports/components/deps, ~14MB of unused assets). Presence ≠ use — grep before trusting or extending anything. Sub-docs label issues INTENTIONAL (do not fix) vs LEFTOVER (fix only on request).
- Deps: `@mantine/hooks`, `embla-carousel-autoplay`, `postcss-preset-mantine`, `postcss-simple-vars` are installed but unused/unwired. Conversely `embla-carousel` is imported (types only) but NOT declared — transitive dep only.

## Recurring task
- Annual event refresh: all event facts are hardcoded in `app/events/page.tsx` and go stale every year by design — follow "Annual update runbook" in app/CLAUDE.md.

Deeper docs: `app/CLAUDE.md` · `components/CLAUDE.md` · `public/CLAUDE.md`
