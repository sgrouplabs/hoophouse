/**
 * ============================================================================
 * Hoophouse502 — SEO Configuration
 * ============================================================================
 *
 * Centralized SEO metadata, JSON-LD structured data, and AEO (Answer Engine
 * Optimization) schema. Every page with special SEO needs imports from here
 * so we maintain a single source of truth.
 *
 * Key targets:
 *   - Primary keyword: "Youth Basketball & Community in West Louisville"
 *   - Secondary: "Louisville basketball community", "community basketball court KY"
 *   - Schema type: Organization + LocalBusiness hybrid
 * ============================================================================ */

import type { Metadata } from "next";

// ---------------------------------------------------------------------------
// JSON-LD Structured Data (AEO — Answer Engine Optimization)
// ---------------------------------------------------------------------------
//
// This data is injected into <head> by the root layout as a <script> tag.
// It tells search engines about the organization, founder, location, and
// mission — enabling rich results, knowledge panels, and AEO answers.

export const hoophouseJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://hoophouse502.com/#organization",
      "name": "Flaget Hoop House 502",
      "alternateName": ["Hoophouse502", "Hoop House 502"],
      "founder": {
        "@type": "Person",
        "name": "Paul White",
        "jobTitle": "Founder & Community Director",
        "description":
          "Louisville native who inherited the Flaget Avenue building from his grandfather and transformed it into a youth community hub.",
      },
      "foundingDate": "2023",
      "description":
        "Safe space, tutoring, and youth basketball community in Louisville's Shawnee neighborhood honoring the legacy of the late owner's grandfather.",
      "url": "https://hoophouse502.com",
      "logo": "https://hoophouse502.com/logo.png",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+1-502-555-0100",
        "contactType": "customer service",
        "availableLanguage": ["English"],
      },
      "sameAs": [
        "https://www.instagram.com/hoophouse502",
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Basketball Court Rentals",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Half Court Rental",
              "description": "Half-court access for up to 6 players",
            },
            "price": "30.00",
            "priceCurrency": "USD",
            "availability": "https://schema.org/InStock",
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Full Court Rental",
              "description": "Full-court access for up to 14 players",
            },
            "price": "50.00",
            "priceCurrency": "USD",
            "availability": "https://schema.org/InStock",
          },
        ],
      },
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://hoophouse502.com/#localbusiness",
      "name": "Flaget Hoop House 502",
      "image": "https://hoophouse502.com/logo.png",
      "url": "https://hoophouse502.com",
      "telephone": "+1-502-555-0100",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "604 S 44th St",
        "addressLocality": "Louisville",
        "addressRegion": "KY",
        "postalCode": "40214",
        "addressCountry": "US",
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 38.2129,
        "longitude": -85.7045,
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday", "Tuesday", "Wednesday", "Thursday",
          "Friday", "Saturday", "Sunday",
        ],
        "opens": "00:00",
        "closes": "23:59",
      },
      "priceRange": "$$",
      "currenciesAccepted": "USD",
    },
    {
      "@type": "FAQPage",
      "@id": "https://hoophouse502.com/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How do I book a basketball court at Hoophouse 502?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Visit hoophouse502.com/booking and pick your date and time slot. You'll receive a unique access code via email instantly after booking.",
          },
        },
        {
          "@type": "Question",
          "name": "What services does Flaget Hoop House 502 offer?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Flaget Hoop House 502 offers self-service basketball court rentals, youth basketball programs, tutoring, and mental health support in Louisville's Shawnee neighborhood. The facility is open 24/7.",
          },
        },
        {
          "@type": "Question",
          "name": "Where is Hoophouse 502 located in Louisville?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Flaget Hoop House 502 is located at 604 S 44th St, Louisville, KY 40214, in the Shawnee neighborhood of West Louisville.",
          },
        },
      ],
    },
  ],
} as const;

// ---------------------------------------------------------------------------
// Root Meta Tags (Home Page)
// ---------------------------------------------------------------------------

export const rootMetadata: Metadata = {
  title: "Flaget Hoop House 502 — Youth Basketball & Community",
  description:
    "Louisville's community hub for youth basketball, tutoring, and mental health support in the Shawnee neighborhood. Book a court or donate today.",
  keywords: [
    "youth basketball Louisville",
    "community basketball court West Louisville",
    "Shawnee neighborhood Louisville KY",
    "Flaget Hoop House 502",
    "self-service basketball court rental",
    "Louisville youth programs",
    "basketball community KY",
  ],
  robots: "index, follow, max-snippet:-1, max-image-preview:large",
  openGraph: {
    title: "Flaget Hoop House 502 — Youth Basketball & Community",
    description:
      "Safe space, tutoring, and youth basketball in Louisville's Shawnee neighborhood. Founded by Paul White to honor his grandfather's legacy.",
    type: "website",
    locale: "en_US",
    siteName: "Flaget Hoop House 502",
    url: "https://hoophouse502.com",
  },
  verification: {
    // Placeholder — fill in when you verify with Google/Bing
    google: "your-google-verification-code",
  },
};
