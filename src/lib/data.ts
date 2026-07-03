/**
 * ============================================================================
 * HOOPHOUSE502 — Centralized Business Data
 * ============================================================================
 *
 * Single source of truth for all gym info, navigation links, pricing, and
 * "how it works" steps. Every component imports from here so that changing
 * a phone number, Cal.com link, or court rate happens in ONE place.
 *
 * Design rules enforced across the app:
 *   - No basketball imagery, emojis, or court vectors
 *   - Pure white background, black text, orange accents
 *   - Inter font, flat design, ultra-minimalist
 * ============================================================================ */

// -----------------------------------------------------------------------------
// Site / Business Identity
// -----------------------------------------------------------------------------

export const SITE = {
  /** Short brand name shown in the nav and footer. */
  name: "Hoophouse502",

  /** Longer tagline used in hero and meta descriptions. */
  tagline: "Louisville's premier self-service court rental",

  /** Full street address — displayed on the landing page and footer. */
  address: "1000 Flaget Ave, Louisville, KY 40203",

  /** Clickable phone link (tel: format). */
  phoneDisplay: "(502) 555-0100",
  phoneHref: "tel:+15025550100",

  /** Contact email. */
  email: "book@hoophouse502.com",

  /**
   * Cal.com scheduling link.
   * Replace `hoophouse502` with your actual Cal.com username once the
   * account is created.
   * @see https://cal.com  →  Sign up  →  Copy your event link
   */
  calcomLink: "https://cal.com/hoophouse502/court-rental",

  /** Instagram handle (used for social link in footer). */
  instagram: "https://instagram.com/hoophouse502",

  /** Liability waiver page (placeholder — create later). */
  waiverLink: "/waiver",
} as const;

// -----------------------------------------------------------------------------
// Navigation Links
// -----------------------------------------------------------------------------
//
// Minimalist nav: logo left, single CTA right.
// The `cta` flag marks the orange button variant.

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "How It Works", href: "/#how-it-works" },
  { label: "Pricing", href: "/#pricing" },
  { label: "Book Court", href: "/booking", cta: true },
] as const;

// -----------------------------------------------------------------------------
// How It Works (3-step process shown on landing page)
// -----------------------------------------------------------------------------

export interface HowItWorksStep {
  /** Unique identifier for the step. */
  id: string;
  /** Step number displayed in the UI. */
  step: number;
  /** Short title. */
  title: string;
  /** Description copy. */
  description: string;
  /** Icon key — maps to inline SVG in the component. */
  icon: "calendar" | "lock" | "user";
}

export const HOW_IT_WORKS: HowItWorksStep[] = [
  {
    id: "book-online",
    step: 1,
    title: "Book Online",
    description:
      "Pick your date and time slot from the calendar. Reservation confirmed instantly — no calls, no waiting.",
    icon: "calendar",
  },
  {
    id: "get-your-code",
    step: 2,
    title: "Get Your Code",
    description:
      "Receive a unique access code via email instantly after booking. Use it at the door to unlock the facility.",
    icon: "lock",
  },
  {
    id: "play",
    step: 3,
    title: "Play",
    description:
      "Show up, enter your code, and the court is yours. 24/7 self-service access means you play on your schedule.",
    icon: "user",
  },
];

// -----------------------------------------------------------------------------
// Pricing Tiers (Court Rental Options)
// -----------------------------------------------------------------------------

export interface PricingTier {
  id: string;
  name: string;
  duration: string;
  price: number;
  priceLabel: string;
  features: string[];
  popular?: boolean;
}

export const PRICING_TIERS: PricingTier[] = [
  {
    id: "half-court-60",
    name: "Half Court — 1 Hour",
    duration: "60 min",
    price: 30,
    priceLabel: "$30",
    features: ["Half-court access", "Up to 6 players", "Basketballs provided"],
  },
  {
    id: "full-court-60",
    name: "Full Court — 1 Hour",
    duration: "60 min",
    price: 50,
    priceLabel: "$50",
    features: [
      "Full-court access",
      "Up to 14 players",
      "Scoreboard & shot clock",
      "Bluetooth sound system",
    ],
    popular: true,
  },
  {
    id: "full-court-90",
    name: "Full Court — 90 min",
    duration: "90 min",
    price: 65,
    priceLabel: "$65",
    features: [
      "Full-court access",
      "Up to 14 players",
      "Scoreboard & shot clock",
      "Bluetooth sound system",
      "Free Gatorade cooler",
    ],
  },
];

// -----------------------------------------------------------------------------
// Social Links
// -----------------------------------------------------------------------------

export const SOCIAL_LINKS = [
  { label: "Instagram", href: SITE.instagram },
  { label: "Cal.com", href: SITE.calcomLink },
] as const;