/**
 * ============================================================================
 * Scheduling Section (Server Component → wraps client BookingEmbed)
 * ============================================================================
 *
 * Full-width section on the landing page with an embedded Cal.com widget
 * to handle the free automated booking and calendar sync.
 *
 * DESIGN RULES: Flat white background, minimalist header, no basketball
 * imagery. The Cal.com embed sits inside a bordered container.
 * ============================================================================
 */

import BookingEmbed from "@/components/BookingEmbed";

export default function SchedulingSection() {
  return (
    <section id="scheduling" className="section-padding bg-brand-gray-light">
      <div className="mx-auto max-w-4xl">
        {/* ---- Section header ---- */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-brand-black md:text-4xl">
            Book Your <span className="text-brand-orange">Court</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-brand-gray-mid">
            Select a date and time below. You&apos;ll receive a confirmation
            email with your unique access code instantly after booking.
          </p>
        </div>

        {/* ---- Cal.com Embed ---- */}
        <BookingEmbed />
      </div>
    </section>
  );
}