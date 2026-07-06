/**
 * ============================================================================
 * HOOPHOUSE502 — AEO & Conversational FAQ (Phase 4)
 * ============================================================================
 *
 * Long-tail, voice-search-optimized FAQ data and structured data.
 * Every question is written in natural-conversation style (how, where, who,
 * can, what) to match voice-query patterns and Google's AI Overviews.
 *
 * Schema: FAQPage JSON-LD is injected at render-time by the <FAQ> component
 * so the markup travels with the component on both server and client.
 * ============================================================================ */

import { ReactNode } from "react";

// ---------------------------------------------------------------------------
// Conversational FAQ Data — Voice Search Optimized
// ---------------------------------------------------------------------------

export interface AEOFAQItem {
  id: string;
  /** Voice-search long-tail question (matches natural speech). */
  question: string;
  /** Conversational answer as React JSX for rendering in the FAQ accordion. */
  answer: ReactNode;
  /** Plain-text version of the answer — used exclusively for JSON-LD/SEO schema. */
  plainTextAnswer: string;
  /** Keyword tags for SEO. */
  keywords: string[];
}

export const AEO_FAQ_ITEMS: AEOFAQItem[] = [
  {
    id: "where-is-hoop-house-502-located",
    question: "Where is Hoop House 502 located in Louisville, KY?",
    answer: (
      <>
        Flaget Hoop House 502 is located at{" "}
        <strong>604 S 44th St in the Shawnee neighborhood of West Louisville</strong>{" "}
        (zip 40214). We have a free parking lot directly in front of the facility,
        making it easy to find whether you&apos;re coming from St. Matthews, Portland,
        or anywhere else in the metro.{" "}
        <a href="/about" className="text-brand-orange hover:underline">
          Learn more about our story
        </a>{" "}
        and community mission, or{" "}
        <a href="/" className="text-brand-orange hover:underline">
          book a court session
        </a>{" "}
        today.
      </>
    ),
    plainTextAnswer:
      "Flaget Hoop House 502 is located at 604 S 44th St in the Shawnee neighborhood of West Louisville (zip 40214). We have a free parking lot directly in front of the facility, making it easy to find whether you're coming from St. Matthews, Portland, or anywhere else in the metro. Learn more about our story and community mission, or book a court session today.",
    keywords: [
      "Hoop House 502 location",
      "Louisville basketball court address",
      "Shawnee neighborhood Louisville",
      "604 S 44th St Louisville",
    ],
  },
  {
    id: "how-donate-gofundme",
    question: "How can I donate to the Flaget Hoop House 502 GoFundMe?",
    answer: (
      <>
        You can support Flaget Hoop House 502 through our GoFundMe campaign by visiting{" "}
        <a
          href="https://gofund.me/8072dffdc"
          target="_blank"
          rel="noopener noreferrer"
          className="text-brand-orange hover:underline"
        >
          gofund.me/8072dffdc
        </a>
        . Every dollar goes directly back into the facility — covering HVAC repairs,
        court resurfacing, and ongoing costs that keep this community space open for
        young people in Louisville. Even small contributions make a real difference.{" "}
        <a href="/about" className="text-brand-orange hover:underline">
          Read about our mission
        </a>{" "}
        to learn why this project matters.
      </>
    ),
    plainTextAnswer:
      "You can support Flaget Hoop House 502 through our GoFundMe campaign by visiting gofund.me/8072dffdc. Every dollar goes directly back into the facility — covering HVAC repairs, court resurfacing, and ongoing costs that keep this community space open for young people in Louisville. Even small contributions make a real difference. Read about our mission to learn why this project matters.",
    keywords: [
      "Hoop House 502 donate",
      "Flaget Hoop House GoFundMe",
      "support Louisville basketball",
      "donate to youth basketball Louisville",
    ],
  },
  {
    id: "who-founded-hoop-house-502",
    question: "Who founded Hoop House 502 and what is the story behind it?",
    answer: (
      <>
        Flaget Hoop House 502 was founded by{" "}
        <strong>Paul White</strong>, a Louisville native who inherited the building from
        his grandfather. Paul transformed his grandfather&apos;s legacy into a safe,
        24/7 community hub in the Shawnee neighborhood — offering youth basketball,
        tutoring, and mental health support.{" "}
        <a href="/about" className="text-brand-orange hover:underline">
          Read the full founder story
        </a>{" "}
        to learn how a family building became a neighborhood cornerstone.
      </>
    ),
    plainTextAnswer:
      "Flaget Hoop House 502 was founded by Paul White, a Louisville native who inherited the building from his grandfather. Paul transformed his grandfather's legacy into a safe, 24/7 community hub in the Shawnee neighborhood — offering youth basketball, tutoring, and mental health support. Read the full founder story to learn how a family building became a neighborhood cornerstone.",
    keywords: [
      "Hoop House 502 founder",
      "Paul White Hoop House Louisville",
      "Flaget Hoop House founder story",
      "Louisville basketball community founder",
    ],
  },
  {
    id: "what-programs-offered",
    question: "What programs and services does Hoop House 502 offer for youth in Louisville?",
    answer: (
      <>
        Flaget Hoop House 502 offers three core programs for the Louisville community:{' '}
        <strong>
          (1) Youth Basketball
        </strong>{' '}
        — 24/7 self-service court access for players of all ages and skill levels,{' '}
        <strong>(2) Tutoring &amp; Education</strong> — free homework help and college
        prep for Shawnee neighborhood students, and{' '}
        <strong>(3) Mental Health Support</strong> — partnerships with local counselors
        offering sliding-scale sessions. We also host youth tournaments, adult leagues,
        skills clinics, and pickup games.{' '}
        <a href="/booking" className="text-brand-orange hover:underline">
          Book a court now
        </a>{' '}
        or{' '}
        <a href="/about" className="text-brand-orange hover:underline">
          learn more about our programs
        </a>
        .
      </>
    ),
    plainTextAnswer:
      "Flaget Hoop House 502 offers three core programs for the Louisville community: (1) Youth Basketball — 24/7 self-service court access for players of all ages and skill levels, (2) Tutoring & Education — free homework help and college prep for Shawnee neighborhood students, and (3) Mental Health Support — partnerships with local counselors offering sliding-scale sessions. We also host youth tournaments, adult leagues, skills clinics, and pickup games. Book a court now or learn more about our programs.",
    keywords: [
      "Hoop House 502 youth programs",
      "Louisville basketball tutoring",
      "Shawnee neighborhood programs Louisville",
      "youth mental health Louisville KY",
      "community basketball programs Louisville",
    ],
  },
  {
    id: "how-book-court",
    question: "How do I book a basketball court at Hoop House 502 and what does it cost?",
    answer: (
      <>
        Booking a court at Flaget Hoop House 502 is quick and easy — just visit{' '}
        <a href="/booking" className="text-brand-orange hover:underline">
          our booking page
        </a>
        , pick your date and time, and pay online. Half-court rentals start at{' '}
        <strong>$30/hour</strong> (up to 6 players) and full-court rentals are{' '}
        <strong>$50/hour</strong> (up to 14 players). After booking, you&apos;ll receive
        a unique access code via email instantly. No phone calls, no front desk, no
        waiting.
      </>
    ),
    plainTextAnswer:
      "Booking a court at Flaget Hoop House 502 is quick and easy — just visit our booking page, pick your date and time, and pay online. Half-court rentals start at $30/hour (up to 6 players) and full-court rentals are $50/hour (up to 14 players). After booking, you'll receive a unique access code via email instantly. No phone calls, no front desk, no waiting.",
    keywords: [
      "book basketball court Louisville",
      "Hoop House 502 pricing",
      "self-service basketball court Louisville",
      "how much to rent basketball court Louisville",
    ],
  },
  {
    id: "what-are-hours",
    question: "What are the hours of operation for Hoop House 502 in Louisville?",
    answer: (
      <>
        Flaget Hoop House 502 is open{' '}
        <strong>24 hours a day, 7 days a week, 365 days a year</strong>. There&apos;s no
        check-in time or closing time — you book your own window and use your access
        code whenever you need. Whether you want an early-morning shootaround at 5 AM
        or a late-night session after 11 PM, the court is yours.
      </>
    ),
    plainTextAnswer:
      "Flaget Hoop House 502 is open 24 hours a day, 7 days a week, 365 days a year. There's no check-in time or closing time — you book your own window and use your access code whenever you need. Whether you want an early-morning shootaround at 5 AM or a late-night session after 11 PM, the court is yours.",
    keywords: [
      "Hoop House 502 hours",
      "24/7 basketball court Louisville",
      "Hoophouse 502 open late",
      "when is Hoop House 502 open",
    ],
  },
  {
    id: "what-should-bring",
    question: "What should I bring when I book a court at Hoop House 502?",
    answer: (
      <>
        Just bring your{' '}
        <strong>basketball shoes, water bottle, and your team</strong> — we provide the
        court, the balls (for half-court rentals), the scoreboard, and the Bluetooth
        sound system. For full-court rentals, a Gatorade cooler is included. We&apos;re
        located at 604 S 44th St with free parking out front, so arrive early to grab a
        spot.{' '}
        <a href="/booking" className="text-brand-orange hover:underline">
          Book your time slot
        </a>{' '}
        and we&apos;ll email you the access code.
      </>
    ),
    plainTextAnswer:
      "Just bring your basketball shoes, water bottle, and your team — we provide the court, the balls (for half-court rentals), the scoreboard, and the Bluetooth sound system. For full-court rentals, a Gatorade cooler is included. We're located at 604 S 44th St with free parking out front, so arrive early to grab a spot. Book your time slot and we'll email you the access code.",
    keywords: [
      "what to bring basketball court Louisville",
      "Hoophouse 502 what to bring",
      "self-service gym Louisville",
    ],
  },
  {
    id: "is-hoop-house-family-friendly",
    question: "Is Hoop House 502 safe and family-friendly for kids to play basketball?",
    answer: (
      <>
        Absolutely. Flaget Hoop House 502 was created as a{' '}
        <strong>safe space for young people</strong> in West Louisville. The facility
        features security cameras monitored remotely, keyless entry via personal access
        codes (so only booked guests can enter), and a mission centered on keeping youth
        engaged through sports, tutoring, and mentorship. Parents feel comfortable
        letting their kids use the facility, and our programming — including free
        tutoring and mental health support — shows we take that trust seriously.{' '}
        <a href="/about" className="text-brand-orange hover:underline">
          Read about our community mission
        </a>
        .
      </>
    ),
    plainTextAnswer:
      "Absolutely. Flaget Hoop House 502 was created as a safe space for young people in West Louisville. The facility features security cameras monitored remotely, keyless entry via personal access codes (so only booked guests can enter), and a mission centered on keeping youth engaged through sports, tutoring, and mentorship. Parents feel comfortable letting their kids use the facility, and our programming — including free tutoring and mental health support — shows we take that trust seriously. Read about our community mission.",
    keywords: [
      "Hoop House 502 safe for kids",
      "family friendly basketball Louisville",
      "youth safe basketball Louisville KY",
      "is Hoop House 502 safe",
    ],
  },
];

// ---------------------------------------------------------------------------
// FAQPage JSON-LD Schema (AEO — Answer Engine Optimization)
// ---------------------------------------------------------------------------
//
// This is injected as a <script type="application/ld+json"> by the FAQ
// component so the markup lives right next to the rendered content.
// AI crawlers (Google, Bing, ChatGPT) can extract these Q&A pairs for
// featured snippets, AI Overviews, and voice search answers.

export function buildFAQJSONLDFragment(): string {
  const mainEntity = AEO_FAQ_ITEMS.map((item) => ({
    "@type": "Question" as const,
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer" as const,
      text: item.plainTextAnswer,
    },
  }));

  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": "FAQPage" as const,
    "@id": "https://hoophouse502.com/#faq-aeo",
    mainEntity,
  });
}
