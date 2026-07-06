"use client";

/**
 * ============================================================================
 * Navbar (Client Component)
 * ============================================================================
 *
 * Minimalist header: text logo on the left, "Book Court" gold CTA on the
 * right. Mobile menu uses a hamburger toggle (requires "use client").
 *
 * DESIGN RULES: No basketball imagery. Flat grey background, black text,
 * gold accent on the CTA button only.
 * ============================================================================ */

import Link from "next/link";
import { useState } from "react";
import { SITE, NAV_LINKS } from "@/lib/data";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-brand-gray-border bg-gray-300">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-12">
        {/* ---- Logo (image) ---- */}
        <Link href="/" aria-label={SITE.name}>
          <img
            src="/logo.png"
            alt={SITE.name}
            className="h-10 w-auto"
          />
        </Link>

        {/* ---- Desktop Nav Links ---- */}
        <div className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) =>
            "cta" in link ? (
              <Link
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-cta"
              >
                {link.label}
              </Link>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-black transition-colors hover:text-brand-gold"
              >
                {link.label}
              </Link>
            )
          )}
        </div>

        {/* ---- Mobile Hamburger Button ---- */}
        <button
          className="md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          <svg
            className="h-7 w-7 text-black"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {mobileOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </nav>

      {/* ---- Mobile Menu Drawer ---- */}
      {mobileOpen && (
        <div className="border-t border-brand-gray-border bg-gray-300 px-6 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={
                  "cta" in link
                    ? "btn-cta w-full"
                    : "text-base font-medium text-black hover:text-brand-gold"
                }
                target={"cta" in link ? "_blank" : undefined}
                rel={"cta" in link ? "noopener noreferrer" : undefined}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
