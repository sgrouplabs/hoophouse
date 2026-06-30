/**
 * ============================================================================
 * Landing Page (Server Component)
 * ============================================================================
 *
 * Home route ("/"). Composes: Hero → Features → Pricing → CTA band.
 * All sections are separate components for maintainability.
 * ============================================================================
 */

import Hero from "@/components/Hero";
import Features from "@/components/Features";
import PricingSection from "@/components/PricingSection";
import CTASection from "@/components/CTASection";

export default function HomePage() {
  return (
    <>
      {/* Hero — full-bleed dark background with value prop + CTAs */}
      <Hero />

      {/* Features grid — what makes the gym great */}
      <Features />

      {/* Pricing — court rental tiers */}
      <PricingSection />

      {/* Final CTA band — orange, bold, converts */}
      <CTASection />
    </>
  );
}