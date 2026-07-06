/**
 * ============================================================================
 * Hero Section (Server Component)
 * ============================================================================
 *
 * Flat grey background. Bold headline "Your Court. Your Time." with
 * "Your Time" in gold. Sub-headline simplified per brand update.
 * Primary gold CTA button links to the booking section.
 *
 * DESIGN RULES: No basketball imagery, no gradients, no emojis. Pure flat
 * design — grey background, black text, gold accent.
 * ============================================================================ */

import Link from "next/link";
import { SITE } from "@/lib/data";

export default function Hero() {
  return (
    <section className="bg-gray-300">
      <div className="mx-auto max-w-7xl px-6 py-24 md:px-12 md:py-32">
        <div className="max-w-3xl">
          {/* Headline */}
          <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-black md:text-6xl">
            Your Court. <span className="text-brand-gold">Your Time.</span>
          </h1>

          {/* Sub-headline */}
          <p className="mt-6 text-lg text-black md:text-xl">
            <strong className="font-semibold text-black">HOOPHOUSE502</strong> is a basketball court rental in Louisville, KY.
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
