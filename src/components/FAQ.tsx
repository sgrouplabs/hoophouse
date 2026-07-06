"use client";

/**
 * ============================================================================
 * Conversational FAQ Section (Client Component) — AEO Optimized
 * ============================================================================
 *
 * Route: Landing page (<FAQ />)
 *
 * Interactive accordion FAQ section with conversational, long-tail voice-search
 * questions designed to match natural speech patterns and Google AI Overviews.
 *
 * Features:
 *   - Voice-search optimized Q&As (how, where, who, what, can)
 *   - Internal linking from answers to /, /about, /booking
 *   - FAQPage JSON-LD schema injected at render time for AEO crawlers
 *   - Full keyboard accessibility (Enter/Space to toggle, Escape to close)
 *
 * DESIGN RULES: Flat design, white background, Anton headings, Epilogue body,
 * orange accent on headings and expand indicators.
 * ============================================================================ */

import { useState, useRef, useEffect } from "react";
import { AEO_FAQ_ITEMS, buildFAQJSONLDFragment } from "@/lib/faq-aeo";

// --- Single FAQ Item (accordion row) ---------------------------------------

function FAQRow({
  item,
  isOpen,
  onToggle,
}: {
  item: (typeof AEO_FAQ_ITEMS)[number];
  isOpen: boolean;
  onToggle: () => void;
}) {
  const rowRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={rowRef}
      className="border-b border-brand-gray-border last:border-0"
    >
      {/* Question button */}
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between py-5 text-left transition-colors hover:text-brand-orange focus:outline-none focus-visible:rounded-lg focus-visible:ring-2 focus-visible:ring-brand-orange/40"
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${item.id}`}
        id={`faq-question-${item.id}`}
      >
        <span className="pr-4 text-base font-medium text-brand-black">
          {item.question}
        </span>
        {/* Plus/minus indicator */}
        <span
          className={`flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full border-2 transition-all duration-200 ${
            isOpen
              ? "border-brand-orange bg-brand-orange text-white rotate-45"
              : "border-brand-gray-border text-brand-gray-mid"
          }`}
        >
          <svg
            className="h-3 w-3"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.5}
              d="M12 4v16m8-8H4"
            />
          </svg>
        </span>
      </button>

      {/* Answer (animated expand) */}
      <div
        id={`faq-answer-${item.id}`}
        role="region"
        aria-labelledby={`faq-question-${item.id}`}
        className={`overflow-hidden transition-all duration-200 ${
          isOpen ? "max-h-screen pb-5" : "max-h-0"
        }`}
      >
        <p className="text-sm leading-relaxed text-brand-black/80">
          {item.answer}
        </p>

        {/* Keyword tags (hidden from screen readers, visible for crawlers) */}
        <div className="mt-3 flex flex-wrap gap-2" aria-hidden="true">
          {item.keywords.map((kw) => (
            <span
              key={kw}
              className="inline-block rounded-full bg-brand-gray-light px-2.5 py-0.5 text-xs text-brand-gray-mid"
            >
              {kw}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

// --- Main Component ---------------------------------------------------------

export default function FAQ() {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());
  const [activeQuestion, setActiveQuestion] = useState<string | null>(null);

  // Keyboard accessibility: Enter/Space to toggle, Escape to close all
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && openItems.size > 0) {
        setOpenItems(new Set());
        setActiveQuestion(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [openItems]);

  const toggleItem = (id: string) => {
    setOpenItems((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
        setActiveQuestion(null);
      } else {
        next.add(id);
        setActiveQuestion(id);
      }
      return next;
    });
  };

  return (
    <section id="faq" className="section-padding bg-brand-gray-light">
      <div className="mx-auto max-w-4xl">
        {/* ---- Section header ---- */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-brand-black md:text-4xl">
            Frequently Asked{" "}
            <span className="text-brand-orange">Questions</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-brand-black/70">
            Ask it like you&apos;d say it — we&apos;ve got you covered.
          </p>
        </div>

        {/* ---- Two-column layout: FAQ + Links ---- */}
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Left: FAQ Accordion */}
          <div className="rounded-2xl border border-brand-gray-border bg-white px-6">
            {AEO_FAQ_ITEMS.map((item) => (
              <FAQRow
                key={item.id}
                item={item}
                isOpen={openItems.has(item.id)}
                onToggle={() => toggleItem(item.id)}
              />
            ))}
          </div>

          {/* Right: Community Links & Contact */}
          <div className="space-y-6">
            {/* Quick Links */}
            <div className="card">
              <h3 className="mb-3 text-lg font-semibold text-brand-black">
                Quick Links
              </h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="https://cal.com/hoophouse"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-brand-orange hover:underline"
                  >
                    <svg
                      className="h-4 w-4 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-4 0a1 1 0 01-1-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 01-1 1h-2z"
                      />
                    </svg>
                    Book a Court → Homepage
                  </a>
                </li>
                <li>
                  <a
                    href="/about"
                    className="flex items-center gap-2 text-sm text-brand-orange hover:underline"
                  >
                    <svg
                      className="h-4 w-4 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    Our Story &amp; Mission → About Page
                  </a>
                </li>
                <li>
                  <a
                    href="https://gofund.me/8072dffdc"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-brand-orange hover:underline"
                  >
                    <svg
                      className="h-4 w-4 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      />
                    </svg>
                    Support Us → GoFundMe
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Card */}
            <div className="card">
              <h3 className="mb-2 text-lg font-semibold text-brand-black">
                Still Have Questions?
              </h3>
              <p className="text-sm text-brand-black/70">
                Call or text us at{" "}
                <a
                  href="tel:+15025506954"
                  className="font-semibold text-brand-orange hover:underline"
                >
                  502-550-6954
                </a>
                , or email{" "}
                <a
                  href="mailto:info@hoophouse502.com"
                  className="font-semibold text-brand-orange hover:underline"
                >
                  info@hoophouse502.com
                </a>
                .
              </p>
            </div>
          </div>
        </div>

        {/* ---- FAQ Schema (injected as script) ---- */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: buildFAQJSONLDFragment() }}
        />
      </div>
    </section>
  );
}
