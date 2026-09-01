/**
 * ============================================================================
 * Thank You Page (Server Component) — Post-donation redirect target
 * ============================================================================
 *
 * Route: "/thankyou"
 *
 * PayPal redirects donors here after their payment processes (set as the
 * return URL on the hosted button). Confirms the gift, tells them what it
 * supports, and gives next steps (Instagram, booking).
 *
 * Design: Flat black background, Bebas Neue headings, Manrope body,
 * gold accents. Matches the rest of the site.
 * ============================================================================
 */

import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/data";

export const metadata: Metadata = {
  title: "Thank You — Flaget Hoop House 502",
  description:
    "Thank you for supporting Flaget Hoop House 502. Your donation keeps Louisville's community court open for young people in the Shawnee neighborhood.",
  robots: { index: false }, // Transaction confirmation page — keep out of search
  openGraph: {
    title: "Thank You — Flaget Hoop House 502",
    description: "Your donation keeps the doors open. Thank you.",
    type: "website",
  },
};

export default function ThankYouPage() {
  return (
    <section className="section-padding bg-brand-black text-white">
      <div className="mx-auto max-w-2xl px-6 text-center">
        {/* ---- Headline ---- */}
        <span className="text-xs font-semibold uppercase tracking-widest text-[#F2C311]">
          Donation Received
        </span>
        <h1 className="mt-4 text-4xl text-white md:text-5xl">
          Thank You for Supporting HoopHouse502
        </h1>

        <p className="mt-6 text-lg leading-relaxed text-white/70">
          Your donation just went through — and it matters. Every dollar goes
          directly back into the facility: keeping the HVAC running, the court
          tournament-ready, and the doors open 24/7 for young people in
          Louisville&apos;s Shawnee neighborhood.
        </p>

        <p className="mt-4 text-base leading-relaxed text-white/70">
          You&apos;ll receive a confirmation email from PayPal with your
          receipt for your records.
        </p>

        {/* ---- Divider ---- */}
        <div className="mx-auto my-10 h-px w-24 bg-[#F2C311]" />

        {/* ---- Next steps ---- */}
        <h2 className="text-2xl text-white md:text-3xl">
          Stay in the Game
        </h2>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href={SITE.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-cta inline-flex"
          >
            Follow Us on Instagram
          </Link>
          <Link
            href={SITE.calcomLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline inline-flex text-white"
          >
            Book a Court
          </Link>
        </div>

        <p className="mt-10 text-sm text-white/50">
          Questions about your donation? Reach us at{" "}
          <a
            href={`mailto:${SITE.email}`}
            className="text-[#F2C311] underline decoration-2 underline-offset-2 hover:opacity-80"
          >
            {SITE.email}
          </a>{" "}
          or {SITE.phoneDisplay}.
        </p>
      </div>
    </section>
  );
}
