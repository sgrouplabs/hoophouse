/**
 * ============================================================================
 * Footer (Server Component)
 * ============================================================================
 *
 * Minimalist footer: copyright, basic contact placeholder, and a link to
 * the liability waiver page.
 *
 * DESIGN RULES: Flat black background, white text, no emojis, no basketball
 * imagery. Gold accent on section headers only.
 * ============================================================================
 */

import Link from "next/link";
import { SITE } from "@/lib/data";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-400 bg-black text-white">
      <div className="mx-auto max-w-7xl px-6 py-8 md:px-12">
        {/* ---- Simple row: brand + contact + links ---- */}
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row md:items-start">
          {/* Brand */}
          <div>
            <span className="text-lg font-bold text-white">{SITE.name}</span>
            <p className="mt-1 text-sm text-white/60">{SITE.tagline}</p>
          </div>

          {/* Contact */}
          <div className="text-center md:text-left">
            <h3 className="mb-2 text-xs font-semibold uppercase tracking-wide text-[#F2C311]">
              Contact
            </h3>
            <ul className="space-y-1 text-sm text-white/70">
              <li>{SITE.address}</li>
              <li>
                <Link
                  href={SITE.phoneHref}
                  className="transition-colors hover:text-white"
                >
                  {SITE.phoneDisplay}
                </Link>
              </li>
              <li>
                <Link
                  href={`mailto:${SITE.email}`}
                  className="transition-colors hover:text-white"
                >
                  {SITE.email}
                </Link>
              </li>
            </ul>
          </div>

          {/* Links */}
          <div className="text-center md:text-left">
            <h3 className="mb-2 text-xs font-semibold uppercase tracking-wide text-[#F2C311]">
              Links
            </h3>
            <ul className="space-y-1 text-sm text-white/70">
              <li>
                <Link
                  href={SITE.calcomLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-white"
                >
                  Book a Court
                </Link>
              </li>
              <li>
                <Link
                  href={SITE.waiverLink}
                  className="transition-colors hover:text-white"
                >
                  Liability Waiver
                </Link>
              </li>
              <li>
                <Link
                  href={SITE.privacyLink}
                  className="transition-colors hover:text-white"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href={SITE.instagram}
                  className="transition-colors hover:text-white"
                >
                  Instagram
                </Link>
              </li>
              <li>
                <Link
                  href="/admin/login"
                  className="transition-colors hover:text-white"
                >
                  Admin Login
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* ---- Copyright bar ---- */}
        <div className="mt-8 border-t border-white/10 pt-4 text-center text-xs text-white/50">
          &copy; {year} {SITE.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
