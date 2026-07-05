/**
 * ============================================================================
 * About Page (Server Component) — E-E-A-T Optimized
 * ============================================================================
 *
 * Route: "/about"
 *
 * Tells the story of Flaget Hoop House 502 — founded by Paul White, who
 * inherited the building and transformed it into a
 * community hub offering basketball, tutoring, and mental health support
 * in Louisville's Shawnee neighborhood.
 *
 * E-E-A-T Signals:
 *   - Experience: First-hand account of inheriting the building
 *   - Expertise: Community development, youth programming
 *   - Authoritativeness: Named founder, named location, named programs
 *   - Trustworthiness: Clear mission, legacy connection, transparent history
 *
 * Design: Flat white background, Anton headings, Epilogue body,
 * orange accents. Matches the rest of the site.
 * ============================================================================ */

import { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/data";

export const metadata: Metadata = {
  title: "About Flaget Hoop House 502 — Our Story",
  description:
    "Flaget Hoop House 502 is a Louisville community hub for youth basketball, tutoring, and mental health support in the Shawnee neighborhood.",
  openGraph: {
    title: "About Flaget Hoop House 502 — Our Story",
    description:
      "Paul White inherited a building and turned it into a safe space for youth basketball, tutoring, and mental health support in Louisville's Shawnee neighborhood.",
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <>
      {/* ---- Hero ---- */}
      <section className="section-padding bg-white">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            About Flaget Hoop House 502
          </h1>
          <p className="mt-6 text-lg md:text-xl text-brand-gray-mid">
            A safe space. A tutoring center. A youth basketball community.
            <br />
            In honor of a legacy of giving back.
          </p>
        </div>
      </section>

      {/* ---- The Inheritance ---- */}
      <section className="section-padding bg-brand-gray-light">
        <article className="mx-auto max-w-4xl px-6">
          <h2 className="text-3xl md:text-4xl text-center mb-10">
            How It Began
          </h2>

          <div className="space-y-6 text-lg leading-relaxed text-brand-black/80">
            <p>
              With help from family, friends, and the Louisville basketball community,
              Paul began renovating the space — installing a regulation basketball court
              with premium maple hardwood, upgrading the HVAC system, adding proper
              lighting, and equipping the facility with everything needed to make it a
              world-class practice space. But more importantly, he envisioned it as
              something bigger than a gym.
            </p>

            <p>
              <strong>Flaget Hoop House 502</strong> was born — a self-service basketball
              court rental facility by day, and a youth community hub by design. The
              mission was clear: create a safe, welcoming space in the Shawnee
              neighborhood where young people could play basketball, get academic
              support, and find mentorship — all under one roof.
            </p>
          </div>
        </article>
      </section>

      {/* ---- The Mission ---- */}
      <section className="section-padding bg-white">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-3xl md:text-4xl text-center mb-10">
            Our Mission
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Youth Basketball",
                icon: "🏀",
                description:
                  "24/7 self-service court access so young players can practice on their schedule — early morning shootarounds, after-school sessions, weekend games. No bureaucracy, no waitlists. Just basketball.",
              },
              {
                title: "Tutoring & Education",
                icon: "📚",
                description:
                  "A dedicated tutoring program for students in the Shawnee neighborhood. Homework help, college prep, and academic mentoring — because success on the court starts with success in the classroom.",
              },
              {
                title: "Mental Health Support",
                icon: "💚",
                description:
                  "Partnerships with local counselors and mental health professionals offering free or sliding-scale sessions. We believe caring for your mind is just as important as caring for your body.",
              },
            ].map((pillar, index) => (
              <div
                key={index}
                className="card text-center p-8 hover:shadow-lg transition-shadow duration-300"
              >
                <span className="text-4xl mb-4 block">{pillar.icon}</span>
                <h3 className="text-xl font-semibold mb-3">{pillar.title}</h3>
                <p className="text-brand-black/70 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center max-w-2xl mx-auto">
            <p className="text-lg text-brand-black/80 leading-relaxed">
              Flaget Hoop House 502 is not just a basketball court. It's a
              <strong> safe space</strong> for young people in West Louisville — a place
              where they can find mentorship, build confidence, and discover their
              potential, both on and off the court.
            </p>
          </div>
        </div>
      </section>

      {/* ---- Paul's Story ---- */}
      <section className="section-padding bg-brand-gray-light">
        <article className="mx-auto max-w-3xl px-6">
          <h2 className="text-3xl md:text-4xl text-center mb-10">
            The Founder
          </h2>

          <div className="card p-8 md:p-12">
            <blockquote className="space-y-4 text-lg leading-relaxed text-brand-black/80">
              <p>
                "Young people don't need more restrictions — they need more opportunities. This building was his way of giving back to the neighborhood he loved. When I inherited it, I knew I had to honor that spirit."
              </p>
              <footer className="text-brand-orange font-semibold">
                — Paul White, Founder
              </footer>
            </blockquote>
          </div>

          <div className="mt-8 text-center text-brand-black/70">
            <p className="text-base leading-relaxed">
              Paul White is a Louisville native with a deep love for his city and its
              communities. As Founder and Community Director of Flaget Hoop House 502,
              he oversees basketball programming, tutoring partnerships, and mental
              health initiatives — ensuring the space fulfills the original vision
              for the next generation.
            </p>
          </div>
        </article>
      </section>

      {/* ---- Facility Highlights ---- */}
      <section className="section-padding bg-white">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-3xl md:text-4xl text-center mb-10">
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
                className="flex items-start gap-4 p-4 bg-brand-gray-light rounded-xl border border-brand-gray-border"
              >
                <span className="mt-1 flex-shrink-0 text-brand-orange text-2xl">•</span>
                <p className="text-brand-black/80 leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---- Support the Mission ---- */}
      <section className="section-padding bg-brand-black text-white">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl md:text-4xl mb-6">
            Help Us Keep the Doors Open
          </h2>
          <p className="text-white/70 mb-8 text-lg leading-relaxed">
            Like any independent facility, the overhead is real. Rent, insurance,
            equipment maintenance, utilities — and the ongoing investment to keep the
            court tournament-ready and the programming growing.
          </p>
          <p className="text-white/70 mb-8 text-lg leading-relaxed">
            That's why we launched a <strong>GoFundMe campaign</strong> — to help
            cover a critical HVAC repair and resurface the court ahead of the busy
            fall season. Every dollar goes directly back into the facility so the
            Louisville community has a reliable, high-quality place to play, learn,
            and grow.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="https://gofund.me/8072dffdc"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-cta inline-flex"
            >
              Donate on GoFundMe →
            </Link>
            <Link
              href={SITE.calcomLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline inline-flex text-brand-black"
            >
              Book a Court
            </Link>
          </div>
        </div>
      </section>

      {/* ---- CTA to Book ---- */}
      <section className="section-padding bg-brand-gray-light">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <h2 className="text-3xl md:text-4xl mb-6">
            Ready to Play?
          </h2>
          <p className="text-brand-black/70 mb-8 text-lg">
            Book your session in under 60 seconds. No calls, no waiting — just
            you and the court.
          </p>
          <Link
            href={SITE.calcomLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-cta inline-flex"
          >
            Book a Court Now
          </Link>
        </div>
      </section>
    </>
  );
}
