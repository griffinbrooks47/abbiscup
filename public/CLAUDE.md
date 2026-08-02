# public/ — Static assets

## Live assets (complete list — everything else in this folder is unreferenced)
| Asset | Used by |
|---|---|
| `images/logofull.png` | `components/landing.tsx` hero logo |
| `images/AbbiNew1.jpeg` (~1.3MB) | `components/about.tsx` first biography section |
| `images/AbbiNew2.png` (~2.8MB) | `components/about.tsx` second biography section |
| `images/JaneCambell/profile.jpg` | `components/janecambell.tsx` circular portrait |
| `images/JaneCambell/slide1.png`, `slide2.png`, `slide3.png` | `components/opacityCarousel.tsx` hardcoded slides |
| `parking.pdf` | `app/events/page.tsx`, via a RELATIVE href; replaced yearly — see "Annual update runbook" in app/CLAUDE.md |

- Favicon is `app/favicon.ico` (wired via layout metadata), not in this folder.
- Folder spelling `JaneCambell` is legacy-intentional (the person is Jane **Campbell**) — renaming requires coordinated code changes in `components/`.
- The Abbi photos are oversized multi-MB originals. LEFTOVER — compress only on request.

## Dead weight — plausible names lie
- ~14 unreferenced files (~14MB total): `logo.bmp` (7.3MB!), `logo-bw.png`, `next.svg`/`vercel.svg` (create-next-app boilerplate), `images/AbbisCupLogo.png`, `images/portrait.jpg`, `images/caption.jpg`, `images/dynamic-1.PNG`, `IMG_*` photos, and jpg/png near-duplicate slide pairs under `images/JaneCambell/`.
- Before reusing OR deleting any asset here: grep `app/` and `components/` for its filename. Delete on request only.

## Adding assets
- Reference from code as `/<path-under-public>`; put images in `images/`.
- Prefer compressed web formats — the existing multi-MB images are precedent, not endorsement.
