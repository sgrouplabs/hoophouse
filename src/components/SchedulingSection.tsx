/**
 * ============================================================================
 * Scheduling Section (Client Component — Cal.com inline embed)
 * ============================================================================
 *
 * Full-width section on the landing page with an embedded Cal.com widget
 * to handle the free automated booking and calendar sync.
 *
 * DESIGN RULES: Flat white background, minimalist header, no basketball
 * imagery. The Cal.com embed sits inside a bordered container.
 * ============================================================================
 */

"use client";

import { useEffect, useRef } from "react";

export default function SchedulingSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    /* ---- Cal.com IIFE — creates the Cal namespace & queues the inline call ---- */
    const setupCal = () => {
      (function (C, A, L) {
        let p = function (a: any, ar: any[]) { a.q.push(ar); };
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

      /* Initialise the namespace — embed.js is loaded asynchronously. */
      (window as any).Cal("init", "courtrental", { origin: "https://app.cal.com" });
      (window as any).Cal.config = (window as any).Cal.config || {};
      (window as any).Cal.config.forwardQueryParams = true;

      /* Render the inline widget once the container div is mounted.
         The Cal.com SDK will queue this call and execute it after embed.js loads. */
      if (containerRef.current) {
        (window as any).Cal.ns.courtrental("inline", {
          elementOrSelector: "#my-cal-inline-courtrental",
          config: { layout: "month_view", useSlotsViewOnSmallScreen: "true" },
          calLink: "hoophouse/courtrental",
        });
        (window as any).Cal.ns.courtrental("ui", {
          hideEventTypeDetails: false,
          layout: "month_view",
        });
      }
    };

    setupCal();
  }, []);

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

        {/* ---- Cal.com Inline Embed ---- */}
        <div
          ref={containerRef}
          style={{ width: "100%", height: "100%", overflow: "scroll" }}
          id="my-cal-inline-courtrental"
        />
      </div>
    </section>
  );
}