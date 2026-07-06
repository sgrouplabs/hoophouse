/**
 * ============================================================================
 * Landing Page (Server Component)
 * ============================================================================
 *
 * Home route ("/"). Composes: Hero → How It Works → Scheduling → FAQ → CTA.
 * PricingSection removed.
 *
 * Layout inspired by Liberty Hill Athletics.
 * ============================================================================
 */

import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import SchedulingSection from "@/components/SchedulingSection";
import FAQ from "@/components/FAQ";
import CTASection from "@/components/CTASection";

export default function HomePage() {
  return (
    <>
      {/* Hero — flat grey background with value prop + CTA */}
      <Hero />

      {/* How It Works — 3-step flat grid: Book Online → Get Code → Play */}
      <HowItWorks />

      {/* Scheduling — embedded Cal.com widget */}
      <SchedulingSection />

      {/* FAQ — accordion with common questions */}
      <FAQ />

      {/* Final CTA band — orange, bold, converts */}
      <CTASection />
    </>
  );
}
