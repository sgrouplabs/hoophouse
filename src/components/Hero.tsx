/**
 * ============================================================================
 * Hero Section (Server Component)
 * ============================================================================
 *
 * Flat white background. Bold headline "Your Court. Your Time." with
 * "Your Time" in orange. Sub-headline explains the 24/7 self-service model.
 * Primary orange CTA button links to the booking section.
 *
 * DESIGN RULES: No basketball imagery, no gradients, no emojis. Pure flat
 * design — white background, black text, orange accent.
 * ============================================================================
 */

import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24 md:px-12 md:py-32">
        <div className="max-w-3xl">
          {/* Headline */}
          <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-brand-black md:text-6xl">
            Your Court. <span className="text-brand-orange">Your Time.</span>
          </h1>

          {/* Sub-headline */}
          <p className="mt-6 text-lg text-brand-gray-mid md:text-xl">
            Hoophouse502 is a <strong className="font-semibold text-brand-black">24/7 self-service</strong> court rental
            in Louisville, KY. Book online, get your access code, and play —
            no staff, no waiting, no hassle.
          </p>

          {/* CTA */}
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link href="/booking" className="btn-cta text-lg">
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