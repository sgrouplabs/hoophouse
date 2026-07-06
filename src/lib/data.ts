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
 *   - Deep black background, white text, gold accents
 *   - Anton headings, Epilogue body, flat design, ultra-minimalist
 * ============================================================================ */

// -----------------------------------------------------------------------------
// Site / Business Identity
// -----------------------------------------------------------------------------

export const SITE = {
  /** Short brand name shown in the nav and footer. */
  name: "HOOPHOUSE502",

  /** Longer tagline used in hero and meta descriptions. */
  tagline: "Louisville's premier self-service court rental",

  /** Full street address — displayed on the landing page and footer. */
  address: "1000 Flaget Ave, Louisville, KY 40203",

  /** Clickable phone link (tel: format). */
  phoneDisplay: "502-550-6954",
  phoneHref: "tel:+150****6954",

  /** Contact email. */
  email: "info@hoophouse502.com",

  /**
   * Cal.com scheduling link (root namespace).
   * Replace `hoophouse` with your actual Cal.com username once the
   * account is created.
   * @see https://cal.com  →  Sign up  →  Copy your event link
   */
  calcomLink: "https://cal.com/hoophouse",

  /** Instagram handle (used for social link in footer). */
  instagram: "https://www.instagram.com/hoophouse502?igsh=d2ZnYzU5ZG9zYzV3",

  /** Privacy policy page. */
  privacyLink: "/privacy",

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
  { label: "About", href: "/about" },
  { label: "How It Works", href: "/#how-it-works" },
  { label: "Book Court", href: "https://cal.com/hoophouse", cta: true },
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
  icon: "calendar" | "mail" | "user";
}

export const HOW_IT_WORKS: HowItWorksStep[] = [
  {
    id: "book-online",
    step: 1,
    title: "Book Online",
    description: "Choose your date, time slot, and court type.",
    icon: "calendar",
  },
  {
    id: "get-confirmation",
    step: 2,
    title: "Get Confirmation",
    description:
      "Receive your booking receipt via email instantly. Save it for easy check-in.",
    icon: "mail",
  },
  {
    id: "play",
    step: 3,
    title: "Arrive & Play",
    description:
      "Show your confirmation at the door and start playing. Courts are yours on your schedule.",
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
// FAQ (Frequently Asked Questions)
// -----------------------------------------------------------------------------

export interface FAQItem {
  /** Unique identifier. */
  id: string;
  /** The question. */
  question: string;
  /** The answer. */
  answer: string;
}

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: "how-do-i-get-in",
    question: "How do I get into the facility?",
    answer:
      "After you book online, you'll receive a unique access code via email instantly. Simply enter the code at the door keypad when you arrive for your session. The code is active only during your booked time slot.",
  },
  {
    id: "what-should-i-bring",
    question: "What should I bring?",
    answer:
      "Bring your basketball shoes, water bottle, and any personal gear you need. Basketballs are provided for half-court rentals. You're welcome to bring your own ball as well. A valid ID may be required for verification.",
  },
  {
    id: "do-you-provide-basketballs",
    question: "Do you provide basketballs?",
    answer:
      "Yes, basketballs are included with all half-court rentals. For full-court rentals, basketballs are available on request. You're always welcome to bring your own.",
  },
  {
    id: "is-there-staff-on-site",
    question: "Is there staff on site?",
    answer:
      "No — <strong>HOOPHOUSE502</strong> is a fully self-service facility. There is no front desk or on-site staff. Everything from booking to entry is automated. Security cameras are monitored remotely for safety. If you need assistance, call or text us at 502-550-6954.",
  },
  {
    id: "cancellation-policy",
    question: "What is your cancellation policy?",
    answer:
      "Cancellations made at least 24 hours before your booking receive a full refund. Cancellations within 24 hours of the booking are non-refundable. To cancel, use the link in your confirmation email or contact us at info@hoophouse502.com.",
  },
  {
    id: "can-i-book-recurring",
    question: "Can I book recurring sessions for my team?",
    answer:
      "Yes. We offer bulk discounts for teams that need weekly practice slots. Contact us at info@hoophouse502.com with your preferred day, time, and frequency, and we'll set up a recurring booking at a discounted rate.",
  },
  {
    id: "age-requirements",
    question: "Are there age requirements?",
    answer:
      "Participants under 18 must have a parent or legal guardian sign the liability waiver on their behalf before booking. Minors must be supervised by a responsible adult at all times while on the premises.",
  },
  {
    id: "hours-of-operation",
    question: "What are your hours?",
    answer:
      "<strong>HOOPHOUSE502</strong> is open 24/7. You can book a court at any time, day or night, including holidays. The self-service access system means you can play at 2 AM if that's your schedule.",
  },
];

// -----------------------------------------------------------------------------
// Social Links
// -----------------------------------------------------------------------------

export const SOCIAL_LINKS = [
  { label: "Instagram", href: SITE.instagram },
  { label: "Cal.com", href: SITE.calcomLink },
] as const;

// -----------------------------------------------------------------------------
// Admin Configuration (MOCK — replace with real auth + database later)
// -----------------------------------------------------------------------------
//
// This is a placeholder for development. In production:
//   1. Move ADMIN_PASSWORD to an environment variable (never commit secrets)
//   2. Use a proper auth provider (NextAuth.js, Clerk, Supabase Auth, etc.)
//   3. Store user records in a database with hashed passwords (bcrypt/argon2)
//   4. Use HTTP-only cookies with signed JWTs for session management
//
// For now, the admin login is a simple client-side mock that stores a
// sessionStorage flag. This is NOT secure and should not be used in production.

export const ADMIN_CONFIG = {
  /** Admin username for the mock login. Change this. */
  username: "admin",
  /** Admin password for the mock login. Move to env var in production. */
  password: "hoophouse502",
  /** Session storage key for the mock auth flag. */
  sessionKey: "hh502_admin_session",
} as const;

// -----------------------------------------------------------------------------
// Mock Dashboard Data (replace with real database queries later)
// -----------------------------------------------------------------------------
//
// These are placeholder values for the admin dashboard UI. When the database
// is connected, replace these with real queries from your bookings table.

export const MOCK_DASHBOARD_DATA = {
  stats: {
    totalBookings: 147,
    totalRevenue: 6285,
    activeMembers: 89,
    courtUtilization: 68, // percentage
  },
  recentBookings: [
    {
      id: "BK-001",
      customer: "Marcus Johnson",
      email: "marcus.j@example.com",
      court: "Full Court — 1 Hour",
      date: "2026-07-03",
      time: "18:00",
      price: 50,
      status: "confirmed" as const,
    },
    {
      id: "BK-002",
      customer: "Sarah Williams",
      email: "sarah.w@example.com",
      court: "Half Court — 1 Hour",
      date: "2026-07-03",
      time: "20:00",
      price: 30,
      status: "confirmed" as const,
    },
    {
      id: "BK-003",
      customer: "Derek Thompson",
      email: "derek.t@example.com",
      court: "Full Court — 90 min",
      date: "2026-07-04",
      time: "09:00",
      price: 65,
      status: "confirmed" as const,
    },
    {
      id: "BK-004",
      customer: "Aisha Brown",
      email: "aisha.b@example.com",
      court: "Full Court — 1 Hour",
      date: "2026-07-04",
      time: "15:00",
      price: 50,
      status: "pending" as const,
    },
    {
      id: "BK-005",
      customer: "Kevin Martinez",
      email: "kevin.m@example.com",
      court: "Half Court — 1 Hour",
      date: "2026-07-05",
      time: "17:00",
      price: 30,
      status: "confirmed" as const,
    },
  ],
  revenueByDay: [
    { day: "Mon", revenue: 180 },
    { day: "Tue", revenue: 240 },
    { day: "Wed", revenue: 310 },
    { day: "Thu", revenue: 280 },
    { day: "Fri", revenue: 520 },
    { day: "Sat", revenue: 680 },
    { day: "Sun", revenue: 445 },
  ],
} as const;
