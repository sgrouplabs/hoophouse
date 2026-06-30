/**
 * ============================================================================
 * Footer (Server Component)
 * ============================================================================
 *
 * Static footer with business contact info and social links. No interactivity
 * needed, so it stays a Server Component (no "use client" directive).
 * ============================================================================
 */

import Link from "next/link";
import { SITE, SOCIAL_LINKS } from "@/lib/data";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-brand-gray-border bg-brand-black text-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 py-12 md:grid-cols-3 md:px-12">
        {/* ---- Brand column ---- */}
        <div>
          <div className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-orange text-lg">
              🏀
            </span>
            <span className="text-lg font-bold">{SITE.name}</span>
          </div>
          <p className="mt-3 text-sm text-white/70">{SITE.tagline}</p>
        </div>

        {/* ---- Contact column ---- */}
        <div>
          <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-brand-orange">
            Contact
          </h3>
          <ul className="space-y-2 text-sm text-white/80">
            <li>{SITE.address}</li>
            <li>
              <Link
                href={SITE.phoneHref}
                className="hover:text-brand-orange"
              >
                {SITE.phoneDisplay}
              </Link>
            </li>
            <li>
              <Link
                href={`mailto:${SITE.email}`}
                className="hover:text-brand-orange"
              >
                {SITE.email}
              </Link>
            </li>
          </ul>
        </div>

        {/* ---- Social / Links column ---- */}
        <div>
          <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-brand-orange">
            Follow
          </h3>
          <ul className="space-y-2 text-sm text-white/80">
            {SOCIAL_LINKS.map((social) => (
              <li key={social.label}>
                <Link
                  href={social.href}
                  className="hover:text-brand-orange"
                >
                  {social.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/booking" className="hover:text-brand-orange">
                Book a Court →
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* ---- Copyright bar ---- */}
      <div className="border-t border-white/10 px-6 py-4 text-center text-xs text-white/50 md:px-12">
        © {year} {SITE.name}. All rights reserved. — Powered by Next.js & Docker
      </div>
    </footer>
  );
}