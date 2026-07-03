"use client";

/**
 * ============================================================================
 * BookingEmbed (Client Component)
 * ============================================================================
 *
 * Embeds a Cal.com scheduling widget inline on the page.
 *
 * How Cal.com embedding works:
 *   1. Cal.com provides an embed script: https://app.cal.com/embed/embed.js
 *   2. You add `data-cal-link="your-username/event-type"` to a div
 *   3. The script transforms that div into a full booking widget
 *
 * Alternative (simpler MVP): Just link out to the Cal.com URL directly.
 * This component supports both — the embed loads inline, and there's also
 * a "Open in new tab" fallback button below it.
 *
 * SETUP STEPS:
 *   1. Create a free account at https://cal.com
 *   2. Create an event type (e.g. "Court Rental — 1 Hour")
 *   3. Copy your event link (e.g. https://cal.com/hoophouse502/court-rental)
 *   4. Paste it into SITE.calcomLink in src/lib/data.ts
 *
 * DESIGN RULES: No emojis. Flat design with bordered container.
 * ============================================================================
 */

import { useEffect, useRef } from "react";
import { SITE } from "@/lib/data";

// Extract the cal.com path from the full URL.
// e.g. "https://cal.com/hoophouse502/court-rental" → "hoophouse502/court-rental"
const calLinkPath = SITE.calcomLink
  .replace(/^https?:\/\/(www\.)?cal\.com\//, "")
  .replace(/^cal\.com\//, "");

export default function BookingEmbed() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Dynamically inject the Cal.com embed script on mount
  useEffect(() => {
    // Prevent double-injection in StrictMode / React 19 dev
    if (document.getElementById("cal-embed-script")) return;

    const script = document.createElement("script");
    script.id = "cal-embed-script";
    script.src = "https://app.cal.com/embed/embed.js";
    script.async = true;

    // Cal.com's embed script reads these init attributes
    script.innerHTML = `
      (function(){
        window.Cal = window.Cal || function(){
          (Cal.q = Cal.q || []).push(arguments);
        };
      })();
    `;

    document.body.appendChild(script);
  }, []);

  return (
    <div className="mx-auto max-w-3xl">
      {/* ---- Inline Embed ---- */}
      {/* The data-cal-link attribute is what Cal.com's script looks for */}
      <div
        ref={containerRef}
        data-cal-link={calLinkPath}
        data-cal-config='{"layout":"month_view","theme":"light"}'
        className="min-h-[600px] w-full rounded-2xl border border-brand-gray-border bg-white p-4"
      >
        {/* Fallback content shown before the script loads */}
        <div className="flex h-[600px] items-center justify-center text-center">
          <div>
            {/* Flat calendar icon */}
            <svg
              className="mx-auto h-12 w-12 text-brand-gray-border"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <rect x="3" y="4" width="18" height="18" rx="2" strokeWidth={1.5} />
              <path d="M16 2v4M8 2v4M3 10h18" strokeWidth={1.5} />
            </svg>
            <p className="mt-4 text-brand-gray-mid">Loading booking calendar…</p>
            <p className="mt-2 text-sm text-brand-gray-mid">
              If it doesn&apos;t load, use the button below.
            </p>
          </div>
        </div>
      </div>

      {/* ---- Fallback: direct link button ---- */}
      <div className="mt-6 text-center">
        <a
          href={SITE.calcomLink}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-cta"
        >
          Open booking in new tab &rarr;
        </a>
        <p className="mt-2 text-xs text-brand-gray-mid">
          Powered by Cal.com — free scheduling for small businesses
        </p>
      </div>
    </div>
  );
}