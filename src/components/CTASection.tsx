/**
 * ============================================================================
 * CTA Section (Server Component)
 * ============================================================================
 *
 * Bottom call-to-action band on the landing page. Gold background, bold
 * headline, and a prominent "Book Court" button.
 *
 * DESIGN RULES: Flat gold background, black text, no emojis.
 * ============================================================================ */

import Link from "next/link";
import { SITE } from "@/lib/data";

export default function CTASection() {
  return (
    <section className="bg-brand-gold">
      <div className="mx-auto max-w-4xl px-6 py-16 text-center md:px-12 md:py-20">
        <h2 className="text-3xl font-extrabold text-black md:text-4xl">
          Ready to play?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-black/80">
          Pick your time slot, reserve online, and get your confirmation
          instantly. The court will be ready when you walk in.
        </p>
        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link
            href={SITE.calcomLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-xl bg-black px-8 py-4 text-lg font-bold text-brand-gold transition-all hover:bg-brand-gray-dark"
          >
            Book Court
          </Link>
        </div>
      </div>
    </section>
  );
}
