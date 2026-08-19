# Velocity Auto Werks — Premium Automotive Workshop Website

A premium, dark-themed, 3D-animated marketing site for a luxury car workshop / automotive service center. Built with Next.js 14 (App Router), TypeScript, Tailwind CSS, Framer Motion and Three.js.

## Sections

Hero (with a Three.js particle/wireframe animation) → Services → Paint & Body (before/after slider) → Mechanical → Why Choose Us (animated stats) → Gallery (lightbox) → Reviews → Booking (WhatsApp-powered form) → Contact & Footer. Floating WhatsApp/Call buttons are present site-wide.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Configuration

All business info — phone number, WhatsApp number, address, hours, email and social links — lives in one place: **`lib/config.ts`**. Update the placeholder values there before going live; every button and link on the site reads from this file.

Service list, gallery images, testimonials and stats live in **`lib/data.ts`**.

## Tech

- Next.js 14 (App Router) + TypeScript
- Tailwind CSS (custom dark/gold "premium automotive" theme)
- Framer Motion for scroll/interaction animation
- Three.js for the hero's lightweight 3D particle/wireframe background
- lucide-react icons
- No backend — the booking form hands off to a pre-filled WhatsApp message

## Build & Deploy

```bash
npm run build
npm run start
```

Deploys cleanly to Vercel with zero configuration (`next build` auto-detected).
