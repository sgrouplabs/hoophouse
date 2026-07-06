/**
 * ============================================================================
 * Pricing Section (Server Component)
 * ============================================================================
 *
 * Displays the rental pricing tiers in a responsive card layout.
 * The "popular" tier gets a gold highlight border and badge.
 * Each tier has a "Book This" button that links to /booking.
 *
 * DESIGN RULES: Flat design, no emojis. Dark cards on dark gray
 * background, gold accents on the popular tier.
 * ============================================================================ */

import Link from "next/link";
import { SITE, PRICING_TIERS } from "@/lib/data";

export default function PricingSection() {
  return (
    <section id="pricing" className="section-padding bg-brand-black">
      <div className="mx-auto max-w-7xl">
        {/* ---- Header ---- */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-white md:text-4xl">
            Simple, hourly <span className="text-brand-gold">pricing</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-brand-gray-mid">
            No memberships. No hidden fees. Just book the time you need and
            hit the court.
          </p>
        </div>

        {/* ---- Pricing cards ---- */}
        <div className="grid gap-6 md:grid-cols-3">
          {PRICING_TIERS.map((tier) => (
            <div
              key={tier.id}
              className={`card relative ${
                tier.popular
                  ? "border-2 border-brand-gold"
                  : ""
              }`}
            >
              {/* Popular badge */}
              {tier.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-brand-gold px-4 py-1 text-xs font-bold uppercase tracking-wide text-black">
                  Most Popular
                </span>
              )}

              {/* Tier name */}
              <h3 className="text-lg font-bold text-white">
                {tier.name}
              </h3>

              {/* Price */}
              <div className="mt-2 flex items-baseline gap-1">
                <span className="text-4xl font-extrabold text-white">
                  {tier.priceLabel}
                </span>
                <span className="text-sm text-brand-gray-mid">
                  / {tier.duration}
                </span>
              </div>

              {/* Feature list */}
              <ul className="mt-6 space-y-3">
                {tier.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-2 text-sm text-white"
                  >
                    {/* Flat checkmark icon */}
                    <svg
                      className="h-4 w-4 flex-shrink-0 text-brand-gold"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA button */}
              <Link
                href={SITE.calcomLink}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-8 w-full ${
                  tier.popular ? "btn-cta" : "btn-outline"
                }`}
              >
                Book This
              </Link>
            </div>
          ))}
        </div>

        {/* ---- Note ---- */}
        <p className="mt-8 text-center text-sm text-brand-gray-mid">
          Need recurring team practice time?{" "}
          <Link
            href={SITE.calcomLink}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-brand-gold hover:underline"
          >
            Contact us for bulk discounts
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
