/**
 * ============================================================================
 * Booking Page (Server Component → wraps client BookingEmbed)
 * ============================================================================
 *
 * Route: /booking
 *
 * Renders the Cal.com scheduling embed. The page-level component is a Server
 * Component (good for SEO/metadata), while the interactive embed is a Client
 * Component imported below.
 *
 * DESIGN RULES: No emojis, flat design, Inter font.
 * ============================================================================ */

import type { Metadata } from "next";
import BookingEmbed from "@/components/BookingEmbed";
import { SITE } from "@/lib/data";

export const metadata: Metadata = {
  title: `Book Court Time — ${SITE.name}`,
  description:
    "Reserve a court online at Hoophouse502. Pick your date and time — powered by Cal.com. Get your confirmation instantly.",
};

export default function BookingPage() {
  return (
    <section className="section-padding bg-brand-black">
      <div className="mx-auto max-w-4xl">
        {/* ---- Header ---- */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-white md:text-4xl">
            Book Your <span className="text-brand-gold">Court Time</span>
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-brand-gray-mid">
            Select a date and time below. You&apos;ll receive a confirmation
            email immediately after booking.
          </p>
        </div>

        {/* ---- Cal.com Embed ---- */}
        <BookingEmbed />

        {/* ---- How it works ---- */}
        <div className="mt-16 grid gap-6 sm:grid-cols-3">
          <div className="text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border-2 border-brand-gold text-lg font-bold text-brand-gold">
              1
            </div>
            <h3 className="mt-3 font-semibold text-white">
              Book Online
            </h3>
            <p className="mt-1 text-sm text-brand-gray-mid">
              Choose your date, time, and court type. Pay securely online.
            </p>
          </div>
          <div className="text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border-2 border-brand-gold text-lg font-bold text-brand-gold">
              2
            </div>
            <h3 className="mt-3 font-semibold text-white">
              Get Confirmation
            </h3>
            <p className="mt-1 text-sm text-brand-gray-mid">
              Receive your booking confirmation via email instantly.
            </p>
          </div>
          <div className="text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border-2 border-brand-gold text-lg font-bold text-brand-gold">
              3
            </div>
            <h3 className="mt-3 font-semibold text-white">
              Arrive & Play
            </h3>
            <p className="mt-1 text-sm text-brand-gray-mid">
              Show your confirmation at the door and start playing.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
