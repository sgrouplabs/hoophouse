/**
 * ============================================================================
 * Landing Page (Server Component)
 * ============================================================================
 *
 * Home route ("/"). Composes: Hero → How It Works → Scheduling → Pricing → CTA.
 *
 * Layout inspired by Liberty Hill Athletics:
 *   1. Hero — flat white, bold headline, 24/7 self-service value prop
 *   2. How It Works — 3-column flat grid (Book Online → Get Code → Play)
 *   3. Scheduling — embedded Cal.com widget for instant booking
 *   4. Pricing — hourly court rental tiers
 *   5. CTA — orange band with final conversion push
 *
 * All sections are separate components for maintainability.
 * ============================================================================
 */

import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import SchedulingSection from "@/components/SchedulingSection";
import PricingSection from "@/components/PricingSection";
import FAQ from "@/components/FAQ";
import CTASection from "@/components/CTASection";

export default function HomePage() {
  return (
    <>
      {/* Hero — flat white background with value prop + CTA */}
      <Hero />

      {/* How It Works — 3-step flat grid: Book Online → Get Code → Play */}
      <HowItWorks />

      {/* Scheduling — embedded Cal.com widget */}
      <SchedulingSection />

      {/* Pricing — court rental tiers */}
      <PricingSection />

      {/* FAQ — accordion with common questions */}
      <FAQ />

      {/* Final CTA band — orange, bold, converts */}
      <CTASection />
    </>
  );
}