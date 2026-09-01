/**
 * ============================================================================
 * Donate Page (Server Component)
 * ============================================================================
 *
 * Route: "/donate"
 *
 * Two ways to support Flaget Hoop House 502:
 *   1. GoFundMe campaign — helps cover HVAC repair and court resurfacing.
 *   2. PayPal (hosted donate button) — accepts PayPal, Venmo, and debit/credit.
 *
 * Design: Flat black background, Anton headings, Epilogue body, gold accents.
 * Matches the rest of the site (no emojis, no basketball imagery).
 * ============================================================================
 */

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SITE } from "@/lib/data";

export const metadata: Metadata = {
  title: "Donate — Support Flaget Hoop House 502",
  description:
    "Support Flaget Hoop House 502. Donate through our GoFundMe campaign or via PayPal (Venmo, debit, and credit cards accepted). Every dollar keeps Louisville's community court open.",
  openGraph: {
    title: "Donate — Support Flaget Hoop House 502",
    description:
      "Donate through GoFundMe or PayPal. Every dollar goes directly back into the facility.",
    type: "website",
  },
};

export default function DonatePage() {
  return (
    <>
      {/* ---- Page Header ---- */}
      <section className="section-padding bg-brand-black text-white">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h1 className="text-4xl md:text-5xl text-white">
            Support HoopHouse502
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-white/70">
            HoopHouse502 is a self-sustaining community court in Louisville&apos;s
            Shawnee neighborhood. Donations help cover HVAC repairs, court
            resurfacing, equipment, and the everyday costs that keep the doors
            open for young people in the community.
          </p>
        </div>
      </section>

      {/* ---- Option 1: GoFundMe ---- */}
      <section className="section-padding border-t border-white/10 bg-black text-white">
        <div className="mx-auto grid max-w-5xl items-center gap-10 px-6 md:grid-cols-2 md:px-12">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wide text-[#F2C311]">
              Option 1
            </span>
            <h2 className="mt-2 text-3xl text-white md:text-4xl">
              Donate on GoFundMe
            </h2>
            <p className="mt-4 leading-relaxed text-white/70">
              Our GoFundMe campaign is funding a critical HVAC repair and a
              full court resurface ahead of the busy fall season. Every dollar
              goes directly back into the facility so the Louisville community
              has a reliable, high-quality place to play, learn, and grow.
            </p>
            <Link
              href={SITE.gofundmeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-cta mt-8 inline-flex"
            >
              Donate on GoFundMe →
            </Link>
            <p className="mt-3 text-sm text-white/50">
              gofund.me/8072dffdc
            </p>
          </div>
          <div className="rounded-2xl border border-gray-400 bg-brand-black p-8 text-center">
            <p className="text-5xl font-bold text-[#F2C311]">HVAC</p>
            <p className="mt-2 text-lg font-semibold text-white">
              Repair &amp; Resurfacing
            </p>
            <p className="mt-3 text-sm leading-relaxed text-white/60">
              The current campaign&apos;s focus — keeping the court comfortable
              and tournament-ready year-round.
            </p>
          </div>
        </div>
      </section>

      {/* ---- Option 2: PayPal ---- */}
      <section className="section-padding border-t border-white/10 bg-brand-black text-white">
        <div className="mx-auto grid max-w-5xl items-center gap-10 px-6 md:grid-cols-2 md:px-12">
          <div className="order-2 rounded-2xl border border-gray-400 bg-black p-8 text-center md:order-1">
            <Image
              src={SITE.donateQrImage}
              alt="QR code — scan to donate via PayPal"
              width={240}
              height={240}
              className="mx-auto rounded-lg bg-white p-2"
            />
            <p className="mt-4 text-sm text-white/60">
              Scan to donate from your phone
            </p>
          </div>
          <div className="order-1 md:order-2">
            <span className="text-xs font-semibold uppercase tracking-wide text-[#F2C311]">
              Option 2
            </span>
            <h2 className="mt-2 text-3xl text-white md:text-4xl">
              Donate via PayPal
            </h2>
            <p className="mt-4 leading-relaxed text-white/70">
              Prefer to give directly? Use our secure PayPal donate button.
              Donations go straight to the facility — no platform fees from a
              fundraiser middleman.
            </p>
            <Link
              href={SITE.paypalDonateLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-cta mt-8 inline-flex"
            >
              Donate with PayPal →
            </Link>
            <p className="mt-3 text-sm text-white/50">
              or scan the QR code
            </p>
          </div>
        </div>
      </section>

      {/* ---- Venmo / Card Note ---- */}
      <section className="border-t border-white/10 bg-black text-white">
        <div className="mx-auto max-w-3xl px-6 py-12 text-center md:px-12">
          <p className="text-base leading-relaxed text-white/70">
            <span className="font-semibold text-white">Want to give with
            Venmo or a debit/credit card?</span>{" "}
            Use the PayPal link above — it accepts PayPal, Venmo, and all major
            debit and credit cards. No PayPal account required for card
            payments.
          </p>
        </div>
      </section>

      {/* ---- CTA to Book ---- */}
      <section className="section-padding bg-[#F2C311]">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <h2 className="mb-6 text-3xl text-black md:text-4xl">
            Rather Play Than Pay?
          </h2>
          <p className="mb-8 text-lg text-black/70">
            Book your session in under 60 seconds. No calls, no waiting — just
            you and the court.
          </p>
          <Link
            href={SITE.calcomLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-xl bg-black px-6 py-3 text-base font-semibold text-[#F2C311] transition-all duration-200 hover:bg-gray-900 active:scale-95"
          >
            Book a Court Now
          </Link>
        </div>
      </section>
    </>
  );
}
