/**
 * ============================================================================
 * HOOPHOUSE502 — Centralized Business Data
 * ============================================================================
 *
 * Single source of truth for all gym info, navigation links, pricing, and
 * feature copy. Every component imports from here so that changing a phone
 * number, Cal.com link, or court rate happens in ONE place.
 *
 * NOTE: `as const` gives us literal types so TypeScript can catch typos in
 * component code (e.g. `SITE.name` is typed as `"Hoophouse502"`, not `string`).
 * ============================================================================
 */

// -----------------------------------------------------------------------------
// Site / Business Identity
// -----------------------------------------------------------------------------

export const SITE = {
  /** Short brand name shown in the nav and footer. */
  name: "Hoophouse502",

  /** Longer tagline used in hero and meta descriptions. */
  tagline: "Louisville's premier basketball gym rental",

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
   * account is created. The free tier supports a single event type which
   * is perfect for an MVP court-booking flow.
   * @see https://cal.com  →  Sign up  →  Copy your event link
   */
  calcomLink: "https://cal.com/hoophouse502/court-rental",

  /**
   * Instagram handle (used for social link in footer).
   * Update once the business IG is created.
   */
  instagram: "https://instagram.com/hoophouse502",
} as const;

// -----------------------------------------------------------------------------
// Navigation Links
// -----------------------------------------------------------------------------
//
// The `cta` flag marks links that should render as prominent orange buttons
// in the navbar. TypeScript note: because only some entries have `cta`,
// `NAV_LINKS` becomes a discriminated union — use the `"cta" in link` pattern
// when filtering (see Navbar.tsx).

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Courts & Pricing", href: "/#pricing" },
  { label: "Book Court", href: "/booking" },
  { label: "Checkout", href: "/checkout", cta: true },
] as const;

// -----------------------------------------------------------------------------
// Gym Features (shown on landing page)
// -----------------------------------------------------------------------------

export interface Feature {
  icon: string; // Emoji placeholder — swap for SVG/icon library later
  title: string;
  description: string;
}

export const FEATURES: Feature[] = [
  {
    icon: "🏀",
    title: "Full-Size NBA Court",
    description:
      "Regulation 94×50 ft hardwood court with professional-grade backboards and breakaway rims.",
  },
  {
    icon: "💡",
    title: "Pro Lighting & Sound",
    description:
      "LED stadium lighting and Bluetooth-connected sound system for warmups, drills, or pickup games.",
  },
  {
    icon: "🅿️",
    title: "Free On-Site Parking",
    description:
      "Ample, well-lit parking right outside the door. No circling the block with gear.",
  },
  {
    icon: "🚿",
    title: "Locker Rooms & Showers",
    description:
      "Clean, private changing rooms and hot showers so you leave fresh after every session.",
  },
  {
    icon: "📺",
    title: "Scoreboard & Shot Clocks",
    description:
      "Electronic scoreboard and visible shot clocks for competitive scrimmages and team practice.",
  },
  {
    icon: "🏠",
    title: "Climate Controlled",
    description:
      "Heated and air-conditioned year-round so the court is always game-ready, rain or snow.",
  },
];

// -----------------------------------------------------------------------------
// Pricing Tiers (Court Rental Options)
// -----------------------------------------------------------------------------

export interface PricingTier {
  id: string; // Used in checkout flow for booking selection
  name: string;
  duration: string;
  price: number; // USD
  priceLabel: string; // Display string e.g. "$40"
  features: string[];
  popular?: boolean; // Highlight one tier
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