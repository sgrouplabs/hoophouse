/**
 * ============================================================================
 * CTA Section (Server Component)
 * ============================================================================
 *
 * Bottom call-to-action band on the landing page. Orange background, bold
 * headline, and a prominent "Book Court" button.
 *
 * DESIGN RULES: Flat orange background, white text, no emojis.
 * ============================================================================
 */

import Link from "next/link";

export default function CTASection() {
  return (
    <section className="bg-brand-orange">
      <div className="mx-auto max-w-4xl px-6 py-16 text-center md:px-12 md:py-20">
        <h2 className="text-3xl font-extrabold text-white md:text-4xl">
          Ready to play?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-white/90">
          Pick your time slot, reserve online, and get your access code
          instantly. The court will be ready when you walk in.
        </p>
        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link
            href="/booking"
            className="inline-flex items-center justify-center rounded-xl bg-white px-8 py-4 text-lg font-bold text-brand-orange transition-all hover:bg-brand-orange-light"
          >
            Book Court
          </Link>
          <Link
            href="/#pricing"
            className="inline-flex items-center justify-center rounded-xl border-2 border-white px-8 py-4 text-lg font-bold text-white transition-all hover:bg-white hover:text-brand-orange"
          >
            View Pricing
          </Link>
        </div>
      </div>
    </section>
  );
}