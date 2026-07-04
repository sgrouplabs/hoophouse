/**
 * ============================================================================
 * About Page (Server Component)
 * ============================================================================
 *
 * Route: "/about"
 * Tells the story of Hoophouse502 — founded by local basketball players
 * who wanted 24/7 court access without the hassle.
 *
 * Design: Flat white background, Anton headings, Epilogue body,
 * orange accents. Matches the rest of the site.
 * ============================================================================
 */

import { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/data";

export const metadata: Metadata = {
  title: `About ${SITE.name} — Our Story`,
  description:
    "Learn about Hoophouse502's history: founded by Louisville basketball players who wanted 24/7 self-service court access. No staff, no waiting — just book and play.",
  openGraph: {
    title: `About ${SITE.name} — Our Story`,
    description:
      "Founded by local players for local players. 24/7 self-service court rental in Louisville, KY.",
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="section-padding bg-white">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            About {SITE.name}
          </h1>
          <p className="mt-6 text-lg md:text-xl text-white/70">
            Built by players, for players. No front desk. No waiting. Just basketball.
          </p>
        </div>
      </section>

      {/* Origin Story */}
      <section className="section-padding bg-brand-gray-light">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-3xl md:text-4xl text-center mb-12">
            How It Started
          </h2>

          <div className="space-y-8 text-lg leading-relaxed text-white/80">
            <p>
              In 2022, a group of Louisville basketball players — former college
              athletes, weekend warriors, and youth coaches — found themselves
              facing the same problem over and over: <strong>there was nowhere
              to play on their schedule.</strong>
            </p>

            <p>
              Rec centers closed early. School gyms required permits months in
              advance. Private clubs had waitlists and monthly dues. Pickup
              games at outdoor courts were at the mercy of weather and
              double-booked hoops.
            </p>

            <p>
              So they pooled their resources, leased a 12,000-square-foot
              warehouse on Flaget Avenue, and built the facility they wished
              existed: a clean, climate-controlled, full-size court with
              professional-grade flooring, adjustable goals, a shot clock, and a
              sound system — accessible 24 hours a day, 7 days a week, with no
              staff required.
            </p>

            <p>
              The name <strong>"Hoophouse502"</strong> is a nod to
              Louisville's 502 area code and the greenhouse concept: a protected
              space where basketball grows year-round, regardless of season or
              schedule.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding bg-white">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-3xl md:text-4xl text-center mb-12">
            What We Stand For
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Self-Service First",
                description:
                  "No front desk, no check-in lines, no staff schedules to work around. Book online, get your code, and play. Your time is for basketball, not bureaucracy.",
              },
              {
                title: "24/7 Access",
                description:
                  "Early morning shootaround before work. Late-night run after the kids are asleep. Sunday afternoon pickup. The court is yours whenever your schedule allows.",
              },
              {
                title: "Community Built",
                description:
                  "Founded by Louisville players who live here, coach here, and play here. Every decision — from floor quality to pricing — is made with the local basketball community in mind.",
              },
            ].map((value, index) => (
              <div
                key={index}
                className="card text-center p-8 hover:shadow-lg transition-shadow duration-300"
              >
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-white/70 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facility Highlights */}
      <section className="section-padding bg-brand-gray-light">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-3xl md:text-4xl text-center mb-12">
            The Facility
          </h2>

          <div className="space-y-6">
            {[
              "Full-size regulation court (94' × 50') with premium maple hardwood",
              "Six adjustable-height goals (regulation 10' + youth heights)",
              "Daktronics shot clock & scoreboard — real game feel",
              "Bluetooth sound system — bring your own playlist",
              "Climate-controlled year-round — no sweat on the floor",
              "LED lighting — bright, even, no glare",
              "Keyless entry via unique access code — secure & instant",
              "Security cameras monitored remotely for safety",
              "Free parking lot directly in front",
              "Water fountain & Gatorade cooler (full-court rentals)",
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-4 bg-white rounded-xl border border-brand-gray-border"
              >
                <span className="mt-1 flex-shrink-0 text-brand-orange text-2xl">•</span>
                <p className="text-white/80 leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Note / Community Impact */}
      <section className="section-padding bg-white">
        <div className="mx-auto max-w-3xl px-6">
          <div className="border-t border-brand-gray-border pt-12">
            <h2 className="text-3xl md:text-4xl text-center mb-8">
              More Than a Court
            </h2>
            <div className="space-y-6 text-lg leading-relaxed text-white/80">
              <p>
                Since opening in early 2023, Hoophouse502 has hosted youth
                tournaments, adult leagues, skills clinics, college prospect
                workouts, and countless pickup games. We've seen first-time
                players hit their first three-pointer and former D1 athletes
                relive their glory days.
              </p>
              <p>
                But like any independent facility, the overhead is real:
                rent, insurance, equipment maintenance, utilities, and the
                ongoing investment to keep the floor tournament-ready and the
                tech running smoothly.
              </p>
              <p>
                That's why we launched a <strong>GoFundMe campaign</strong> — to
                help cover a critical HVAC repair and resurface the court ahead
                of the busy fall season. Every dollar goes directly back into
                the facility so the Louisville basketball community has a
                reliable, high-quality place to play.
              </p>
              <div className="text-center pt-4">
                <Link
                  href="https://gofund.me/8072dffdc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-cta inline-flex"
                >
                  Support the Court →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA to Book */}
      <section className="section-padding bg-brand-black text-white">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <h2 className="text-3xl md:text-4xl mb-6">
            Ready to Play?
          </h2>
          <p className="text-white/70 mb-8 text-lg">
            Book your session in under 60 seconds. No calls, no waiting — just
            you and the court.
          </p>
          <Link href="/booking" className="btn-cta inline-flex">
            Book a Court Now
          </Link>
        </div>
      </section>
    </>
  );
}