/**
 * ============================================================================
 * Hero Section (Server Component)
 * ============================================================================
 *
 * Flat black background. Bold headline "Your Court. Your Time." with
 * "Your Time" in gold. Sub-headline explains the 24/7 self-service model.
 * Primary gold CTA button links to the booking section.
 *
 * DESIGN RULES: No basketball imagery, no gradients, no emojis. Pure flat
 * design — black background, white text, gold accent.
 * ============================================================================ */

import Link from "next/link";
import { SITE } from "@/lib/data";

export default function Hero() {
  return (
    <section className="bg-brand-black">
      <div className="mx-auto max-w-7xl px-6 py-24 md:px-12 md:py-32">
        <div className="max-w-3xl">
          {/* Headline */}
          <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-white md:text-6xl">
            Your Court. <span className="text-brand-gold">Your Time.</span>
          </h1>

          {/* Sub-headline */}
          <p className="mt-6 text-lg text-brand-gray-mid md:text-xl">
            <strong className="font-semibold text-white">HOOPHOUSE502</strong> is a <strong className="font-semibold text-white">24/7 self-service</strong> court rental
            in Louisville, KY. Book online, get your confirmation, and play —
            no staff, no waiting, no hassle.
          </p>

          {/* CTA */}
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              href={SITE.calcomLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-cta text-lg"
            >
              Book Court
            </Link>
            <Link
              href="/#how-it-works"
              className="btn-outline text-lg"
            >
              How It Works
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
