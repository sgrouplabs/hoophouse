/**
 * ============================================================================
 * Scheduling Section (Client Component — Cal.com modal buttons)
 * ============================================================================
 *
 * Full-width section on the landing page with three buttons that open Cal.com
 * modal popups for different court rental types.
 *
 * DESIGN RULES: Flat black background, minimalist header, no basketball
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

import { useEffect, useRef } from "react";

export default function SchedulingSection() {
  const containerRef = useRef<HTMLDivElement>(null);

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

    /* ---- Initialise all three namespaces ---- */
    window.Cal("init", "courtrental", { origin: "https://app.cal.com" });
    window.Cal("init", "full-court-rental", { origin: "https://app.cal.com" });
    window.Cal("init", "half-court-rental", { origin: "https://app.cal.com" });

    /* ---- Apply UI config for each namespace ---- */
    window.Cal.ns.courtrental("ui", { hideEventTypeDetails: false, layout: "month_view" });
    window.Cal.ns["full-court-rental"]("ui", { hideEventTypeDetails: false, layout: "month_view" });
    window.Cal.ns["half-court-rental"]("ui", { hideEventTypeDetails: false, layout: "month_view" });
  }, []);

  return (
    <section id="scheduling" className="section-padding bg-brand-gray-dark">
      <div className="mx-auto max-w-4xl">
        {/* ---- Section header ---- */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-white md:text-4xl">
            Book Your <span className="text-brand-gold">Court</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-brand-gray-mid">
            Choose a booking type below. A calendar will open so you can
            pick your date, time, and confirm instantly.
          </p>
        </div>

        {/* ---- Three booking buttons ---- */}
        <div ref={containerRef} className="grid gap-6 sm:grid-cols-3">
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
            data-cal-link="hoophouse/full-court-rental"
            data-cal-namespace="full-court-rental"
            data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
          >
            Full Court Rental
          </button>
          <button
            className="btn-cta min-h-[60px] text-lg"
            data-cal-link="hoophouse/half-court-rental"
            data-cal-namespace="half-court-rental"
            data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
          >
            Half Court Rental
          </button>
        </div>
      </div>
    </section>
  );
}
