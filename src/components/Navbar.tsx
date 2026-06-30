"use client";

/**
 * ============================================================================
 * Navbar (Client Component)
 * ============================================================================
 *
 * Why client?  The mobile hamburger menu toggles with useState — that requires
 * the "use client" directive. The desktop nav is static but lives in the same
 * component for simplicity.
 *
 * LOGO PLACEHOLDER: The <div className="logo-placeholder"> below is where a
 * custom SVG/PNG logo should go. Replace the inline text with an <Image> or
 * <img> tag once the logo asset is ready.
 * ============================================================================
 */

import Link from "next/link";
import { useState } from "react";
import { SITE, NAV_LINKS } from "@/lib/data";

export default function Navbar() {
  // Mobile menu open/close state
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-brand-gray-border bg-white/90 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-12">
        {/* ---- Logo Placeholder ---- */}
        {/* TODO: Replace with <Image src="/logo.svg" …/> when logo asset is ready */}
        <Link href="/" className="flex items-center gap-2" aria-label={SITE.name}>
          <div className="logo-placeholder flex h-10 w-10 items-center justify-center rounded-xl bg-brand-orange text-xl font-bold text-white">
            🏀
          </div>
          <span className="text-xl font-bold tracking-tight text-brand-black">
            {SITE.name}
          </span>
        </Link>

        {/* ---- Desktop Nav Links ---- */}
        <div className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) =>
            // Discriminated union: check "cta" in link for type narrowing
            "cta" in link ? (
              <Link key={link.href} href={link.href} className="btn-cta">
                {link.label}
              </Link>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-brand-black transition-colors hover:text-brand-orange"
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
          {/* Simple inline SVG icon — no icon library dependency for MVP */}
          <svg
            className="h-7 w-7 text-brand-black"
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
        <div className="border-t border-brand-gray-border bg-white px-6 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={
                  "cta" in link
                    ? "btn-cta w-full"
                    : "text-base font-medium text-brand-black hover:text-brand-orange"
                }
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