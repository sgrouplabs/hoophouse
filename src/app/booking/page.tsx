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
 * ============================================================================
 */

import type { Metadata } from "next";
import BookingEmbed from "@/components/BookingEmbed";
import { SITE } from "@/lib/data";

export const metadata: Metadata = {
  title: `Book Court Time — ${SITE.name}`,
  description:
    "Reserve a basketball court online at Hoophouse502. Pick your date, time, and court type — powered by Cal.com.",
};

export default function BookingPage() {
  return (
    <section className="section-padding bg-white">
      <div className="mx-auto max-w-4xl">
        {/* ---- Header ---- */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-brand-black md:text-4xl">
            Book Your <span className="text-brand-orange">Court Time</span>
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
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-brand-orange-light text-xl">
              1
            </div>
            <h3 className="mt-3 font-semibold text-brand-black">
              Pick a time slot
            </h3>
            <p className="mt-1 text-sm text-brand-gray-mid">
              Choose from available dates and times on the calendar.
            </p>
          </div>
          <div className="text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-brand-orange-light text-xl">
              2
            </div>
            <h3 className="mt-3 font-semibold text-brand-black">
              Confirm &amp; pay
            </h3>
            <p className="mt-1 text-sm text-brand-gray-mid">
              Quick checkout — card or cash at the door options available.
            </p>
          </div>
          <div className="text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-brand-orange-light text-xl">
              3
            </div>
            <h3 className="mt-3 font-semibold text-brand-black">
              Show up &amp; ball
            </h3>
            <p className="mt-1 text-sm text-brand-gray-mid">
              The court will be ready. Just bring your game.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}