/**
 * ============================================================================
 * Hero Section (Server Component)
 * ============================================================================
 *
 * Full-width hero at the top of the landing page. Big headline, subheadline,
 * and two CTAs: "Book Court Time" (primary) and "View Pricing" (secondary).
 *
 * The background uses a gradient + emoji placeholder. When a real hero photo
 * is available, replace the gradient div with an <Image> component.
 * ============================================================================
 */

import Link from "next/link";
import { SITE } from "@/lib/data";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-brand-black">
      {/* ---- Background gradient (replace with real photo later) ---- */}
      {/* TODO: Swap for <Image src="/hero-court.jpg" fill className="object-cover" /> */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-black via-brand-black to-brand-orange/20" />

      {/* ---- Decorative basketball emoji (subtle, top-right) ---- */}
      <div className="pointer-events-none absolute right-4 top-4 text-[8rem] opacity-10 md:right-12 md:text-[12rem]">
        🏀
      </div>

      {/* ---- Content ---- */}
      <div className="relative mx-auto max-w-7xl px-6 py-24 md:px-12 md:py-32">
        <div className="max-w-2xl">
          {/* Badge */}
          <span className="mb-4 inline-block rounded-full bg-brand-orange/20 px-4 py-1.5 text-sm font-medium text-brand-orange">
            Now booking in Louisville, KY 📍
          </span>

          {/* Headline */}
          <h1 className="text-4xl font-extrabold leading-tight text-white md:text-6xl">
            Your court. <span className="text-brand-orange">Your time.</span>
            <br />
            Book Hoophouse502.
          </h1>

          {/* Subheadline */}
          <p className="mt-6 text-lg text-white/80 md:text-xl">
            Full-size NBA hardwood court available by the hour. Pro lighting,
            locker rooms, scoreboard, and sound system. Reserve online in
            seconds — show up and ball.
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link href="/booking" className="btn-cta">
              🏀 Book Court Time
            </Link>
            <Link href="/#pricing" className="btn-outline border-white text-white hover:bg-white hover:text-brand-black">
              View Pricing
            </Link>
          </div>

          {/* Quick stats */}
          <div className="mt-12 flex flex-wrap gap-8 text-white/70">
            <div>
              <div className="text-2xl font-bold text-white">94×50</div>
              <div className="text-sm">Full-size court</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white">$30+</div>
              <div className="text-sm">Starting hourly</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white">7 days</div>
              <div className="text-sm">Open weekly</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}