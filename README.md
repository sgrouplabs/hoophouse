# 🏀 Hoophouse502

> Louisville's premier basketball gym rental — book court time online.

Built with **Next.js 16**, **React 19**, **Tailwind CSS v4**, and **Docker**.

---

## 📁 Project Structure

```
hoophouse502/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout (fonts, navbar, footer)
│   │   ├── page.tsx            # Landing page (Hero → Features → Pricing → CTA)
│   │   ├── booking/page.tsx    # Cal.com scheduling embed
│   │   ├── checkout/page.tsx   # Payment UI prototype
│   │   └── globals.css         # Tailwind v4 theme (white / black / orange)
│   ├── components/
│   │   ├── Navbar.tsx          # Sticky nav with logo placeholder
│   │   ├── Footer.tsx          # Contact + social links
│   │   ├── Hero.tsx            # Full-bleed hero section
│   │   ├── Features.tsx        # Gym amenities grid
│   │   ├── PricingSection.tsx  # Court rental pricing tiers
│   │   ├── CTASection.tsx      # Orange CTA band
│   │   ├── BookingEmbed.tsx    # Cal.com inline scheduling widget
│   │   └── CheckoutForm.tsx    # Payment UI prototype (Stripe-ready)
│   └── lib/
│       └── data.ts             # Single source of truth (business data)
├── public/                     # Static assets (logo, images)
├── Dockerfile                  # Multi-stage production build
├── docker-compose.yml          # One-command local deployment
├── .dockerignore
├── package.json
├── tsconfig.json               # @/* alias → ./src/*
├── postcss.config.mjs
└── next.config.ts
```

## 🚀 Quick Start

### Option A: Docker (recommended)

```bash
# Build + start the container
docker compose up --build

# App is live at http://localhost:3000
```

To stop:
```bash
docker compose down
```

### Option B: Local dev (no Docker)

```bash
npm install          # Install dependencies
npm run dev          # Start dev server at http://localhost:3000
```

For production build:
```bash
npm run build
npm run start
```

## 🎨 Design System

| Color   | Hex       | Usage                          |
|---------|-----------|--------------------------------|
| White   | `#FFFFFF` | Background, surfaces           |
| Black   | `#0A0A0A` | Text, headers, dark sections   |
| Orange  | `#FF6B1A` | CTAs, highlights, brand accent |

Tailwind utility classes: `bg-brand-orange`, `text-brand-black`, `bg-brand-orange-light`, etc.

## 📅 Cal.com Scheduling Integration

1. Create a free account at [cal.com](https://cal.com)
2. Set up an event type (e.g. "Court Rental — 1 Hour")
3. Copy your event link
4. Paste it into `SITE.calcomLink` in `src/lib/data.ts`

The booking page (`/booking`) will automatically embed the Cal.com widget.

## 💳 Payment Integration (Next Steps)

The checkout page (`/checkout`) is a **front-end prototype** that simulates
a payment flow. To connect a real gateway:

### Stripe
```bash
npm install @stripe/stripe-js
```
1. Create a Stripe account → get API keys
2. Add to `.env.local`: `STRIPE_PUBLISHABLE_KEY=...`, `STRIPE_SECRET_KEY=...`
3. Replace `handleSubmit()` in `CheckoutForm.tsx` with a call to your
   `/api/create-payment-intent` route handler
4. Use Stripe Elements or Stripe Checkout for card capture

### Square
```bash
npm install @square/web-sdk
```
Follow the [Square Web Payments SDK docs](https://developer.squareup.com/docs/web-payments/overview).

## 🖼️ Adding a Logo

Replace the emoji placeholder in `src/components/Navbar.tsx`:

```tsx
// Replace this:
<div className="logo-placeholder ...">🏀</div>

// With this:
<Image src="/logo.svg" alt="Hoophouse502" width={40} height={40} />
```

Drop your logo file in `public/logo.svg`.

## 🛠️ Tech Stack

- **Framework:** Next.js 16 (App Router)
- **UI:** React 19, Tailwind CSS v4
- **Language:** TypeScript 5
- **Container:** Docker (Node 22 Alpine)
- **Scheduling:** Cal.com (free tier)
- **Payments:** Stripe/Square-ready (prototype included)

## 📄 License

MIT — Built for Hoophouse502.
