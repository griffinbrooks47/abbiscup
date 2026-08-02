# Abbi's Cup

The official website for **Abbi's Cup**, an annual charity soccer tournament in Houston, TX, held in loving memory of Abigail "Abbi" Agosta. The tournament raises awareness for mental health — OCD in particular — and celebrates Abbi's core values of courage, kindness, and inclusivity.

**#PlayLikeAbbi**

## Pages

- `/` — Abbi's story, ways to help, mental-health resources, and a donation link (International OCD Foundation)
- `/events` — current tournament details: date, venue, and schedule

## Running locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Production build: `npm run build`.

## Tech

Next.js 14 (App Router) · TypeScript · Tailwind CSS · Mantine

## Deployment

Hosted on Vercel — pushes to `main` deploy automatically.

## Yearly updates

Each year's tournament details live in the `EVENT` and `SCHEDULE` constants at the top of `app/events/page.tsx`. See the "Annual update runbook" in `app/CLAUDE.md` for the full checklist.
