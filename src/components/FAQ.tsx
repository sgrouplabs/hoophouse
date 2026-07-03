"use client";

/**
 * ============================================================================
 * FAQ Section (Client Component)
 * ============================================================================
 *
 * Accordion-style FAQ section. Questions expand/collapse on click.
 * Data comes from FAQ_ITEMS in @/lib/data.
 *
 * DESIGN RULES: Flat design, Inter font, no emojis. Orange accent on
 * the section heading and expand indicators only.
 * ============================================================================
 */

import { useState } from "react";
import { FAQ_ITEMS, type FAQItem } from "@/lib/data";

// --- Single FAQ Item (accordion row) ---------------------------------------

function FAQRow({ item, isOpen, onToggle }: { item: FAQItem; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className="border-b border-brand-gray-border">
      {/* Question button */}
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between py-5 text-left transition-colors hover:text-brand-orange"
        aria-expanded={isOpen}
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
          <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
          </svg>
        </span>
      </button>

      {/* Answer (animated expand) */}
      <div
        className={`overflow-hidden transition-all duration-200 ${
          isOpen ? "max-h-96 pb-5" : "max-h-0"
        }`}
      >
        <p className="text-sm leading-relaxed text-brand-gray-mid">
          {item.answer}
        </p>
      </div>
    </div>
  );
}

// --- Main Component ---------------------------------------------------------

export default function FAQ() {
  // Track which items are open. Allow multiple to be open simultaneously.
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());

  const toggleItem = (id: string) => {
    setOpenItems((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  return (
    <section id="faq" className="section-padding bg-white">
      <div className="mx-auto max-w-3xl">
        {/* ---- Section header ---- */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-brand-black md:text-4xl">
            Frequently Asked <span className="text-brand-orange">Questions</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-brand-gray-mid">
            Everything you need to know about booking and using Hoophouse502.
          </p>
        </div>

        {/* ---- FAQ accordion ---- */}
        <div className="rounded-2xl border border-brand-gray-border bg-white px-6">
          {FAQ_ITEMS.map((item) => (
            <FAQRow
              key={item.id}
              item={item}
              isOpen={openItems.has(item.id)}
              onToggle={() => toggleItem(item.id)}
            />
          ))}
        </div>

        {/* ---- Still have questions? ---- */}
        <p className="mt-8 text-center text-sm text-brand-gray-mid">
          Still have questions?{" "}
          <a
            href="mailto:book@hoophouse502.com"
            className="font-semibold text-brand-orange hover:underline"
          >
            Contact us
          </a>{" "}
          and we&apos;ll get back to you.
        </p>
      </div>
    </section>
  );
}