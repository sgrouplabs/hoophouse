/**
 * ============================================================================
 * Scheduling Section (Client Component — Cal.com modal buttons)
 * ============================================================================
 *
 * Full-width section on the landing page with two buttons:
 *   1. Open Gym → triggers Cal.com modal directly
 *   2. Full Court Rental → opens a duration-selection modal
 *
 * Duration modal: 1hr / 2hr / 3hr / 4hr → each maps to a distinct Cal.com
 * namespace with its own data-cal-link and data-cal-namespace.
 *
 * DESIGN RULES: Flat grey background, minimalist header, no basketball
 * imagery. Solid brand-gold buttons with hover states.
 * ============================================================================ */

/*
 * ============================================================================
 * NOTE: @ts-nocheck is applied here because this file contains a raw
 * Cal.com SDK IIFE that is not TypeScript-compliant. We avoid
 * line-by-line type declarations for this third-party code.
 * ============================================================================
 */
// @ts-nocheck

"use client";

import { useEffect, useRef, useState } from "react";

export default function SchedulingSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    /* ---- Cal.com element-click base script (modal trigger) ---- */
    (function (C, A, L) {
      let p = function (a, ar) { a.q.push(ar); };
      let d = C.document;
      C.Cal =
        C.Cal ||
        function () {
          let cal = C.Cal;
          let ar = arguments;
          if (!cal.loaded) {
            cal.ns = {};
            cal.q = cal.q || [];
            d.head.appendChild(d.createElement("script")).src = A;
            cal.loaded = true;
          }
          if (ar[0] === L) {
            const api = function () { p(api, arguments); };
            const namespace = ar[1];
            api.q = api.q || [];
            if (typeof namespace === "string") {
              cal.ns[namespace] = cal.ns[namespace] || api;
              p(cal.ns[namespace], ar);
              p(cal, ["initNamespace", namespace]);
            } else p(cal, ar);
            return;
          }
          p(cal, ar);
        };
    })(window, "https://app.cal.com/embed/embed.js", "init");

    /* ---- Initialise all namespaces ---- */
    window.Cal("init", "courtrental", { origin: "https://app.cal.com" });
    window.Cal("init", "full-court-rental", { origin: "https://app.cal.com" });
    window.Cal("init", "full-court-rental-2hr", { origin: "https://app.cal.com" });
    window.Cal("init", "full-court-rental-3hr", { origin: "https://app.cal.com" });
    window.Cal("init", "full-court-rental-4hr", { origin: "https://app.cal.com" });

    /* ---- Apply UI config for each namespace ---- */
    window.Cal.ns.courtrental("ui", { hideEventTypeDetails: false, layout: "month_view" });
    window.Cal.ns["full-court-rental"]("ui", { hideEventTypeDetails: false, layout: "month_view" });
    window.Cal.ns["full-court-rental-2hr"]("ui", { hideEventTypeDetails: false, layout: "month_view" });
    window.Cal.ns["full-court-rental-3hr"]("ui", { hideEventTypeDetails: false, layout: "month_view" });
    window.Cal.ns["full-court-rental-4hr"]("ui", { hideEventTypeDetails: false, layout: "month_view" });
  }, []);

  return (
    <>
      <section id="scheduling" className="section-padding bg-gray-300">
        <div className="mx-auto max-w-4xl">
          {/* ---- Section header ---- */}
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-black md:text-4xl">
              Book Your <span className="text-brand-gold">Court</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-black">
              Choose a booking type below. A calendar will open so you can
              pick your date, time, and confirm instantly.
            </p>
          </div>

          {/* ---- Two booking buttons ---- */}
          <div ref={containerRef} className="grid gap-6 sm:grid-cols-2">
            <button
              className="btn-cta min-h-[60px] text-lg"
              data-cal-link="hoophouse/courtrental"
              data-cal-namespace="courtrental"
              data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
            >
              Open Gym
            </button>
            <button
              className="btn-cta min-h-[60px] text-lg"
              onClick={() => setModalOpen(true)}
            >
              Full Court Rental
            </button>
          </div>
        </div>
      </section>

      {/* ---- Duration Modal ---- */}
      {modalOpen && (
        <dialog
          open
          className="fixed inset-0 z-[9999] mx-auto w-full max-w-lg rounded-2xl border border-brand-gray-border bg-gray-300 text-black shadow-2xl backdrop:bg-black/60"
          onClose={() => setModalOpen(false)}
        >
          {/* Modal header */}
          <div className="flex items-center justify-between border-b border-brand-gray-border px-6 pt-6 pb-4">
            <h3 className="text-xl font-bold text-black">Select Duration</h3>
            <button
              onClick={() => setModalOpen(false)}
              className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-400 text-black/70 transition-colors hover:border-brand-gold hover:text-brand-gold"
              aria-label="Close"
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Duration buttons */}
          <div className="grid gap-4 p-6">
            <button
              className="btn-cta min-h-[56px] text-lg"
              data-cal-link="hoophouse/full-court-rental"
              data-cal-namespace="full-court-rental"
              data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
            >
              1 Hour
            </button>
            <button
              className="btn-cta min-h-[56px] text-lg"
              data-cal-link="hoophouse/full-court-rental-2hr"
              data-cal-namespace="full-court-rental-2hr"
              data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
            >
              2 Hours
            </button>
            <button
              className="btn-cta min-h-[56px] text-lg"
              data-cal-link="hoophouse/full-court-rental-3hr"
              data-cal-namespace="full-court-rental-3hr"
              data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
            >
              3 Hours
            </button>
            <button
              className="btn-cta min-h-[56px] text-lg"
              data-cal-link="hoophouse/full-court-rental-4hr"
              data-cal-namespace="full-court-rental-4hr"
              data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
            >
              4 Hours
            </button>
          </div>
        </dialog>
      )}
    </>
  );
}
