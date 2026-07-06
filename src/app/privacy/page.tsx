/**
 * ============================================================================
 * Privacy Policy Page (Server Component)
 * ============================================================================
 *
 * Route: /privacy
 *
 * Full privacy policy for Hoophouse502 self-service court rental. Covers
 * what data is collected, how it's used, third-party services, cookies,
 * user rights, and contact information.
 *
 * DESIGN RULES: Flat design, Inter font, no emojis. Legal content uses
 * a centered prose layout matching the waiver page.
 * ============================================================================ */

import type { Metadata } from "next";
import { SITE } from "@/lib/data";

export const metadata: Metadata = {
  title: `Privacy Policy — ${SITE.name}`,
  description:
    "Privacy policy for Hoophouse502. Learn how we collect, use, and protect your personal information.",
};

export default function PrivacyPage() {
  return (
    <section className="section-padding bg-brand-black">
      <div className="mx-auto max-w-3xl">
        {/* ---- Header ---- */}
        <div className="mb-12">
          <h1 className="text-3xl font-bold text-white md:text-4xl">
            Privacy <span className="text-brand-gold">Policy</span>
          </h1>
          <p className="mt-4 text-brand-gray-mid">
            Last updated:{" "}
            {new Date().toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        </div>

        {/* ---- Policy Body ---- */}
        <div className="space-y-8">
          {/* Introduction */}
          <div>
            <h2 className="mb-3 text-xl font-bold text-white">
              1. Overview
            </h2>
            <p className="text-sm leading-relaxed text-white">
              {SITE.name} (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or
              &ldquo;our&rdquo;) operates the website at{" "}
              <a
                href="https://hoophouse502.com"
                className="text-brand-gold hover:underline"
              >
                hoophouse502.com
              </a>{" "}
              and provides self-service court rental services at{" "}
              {SITE.address}. This Privacy Policy explains how we collect,
              use, disclose, and protect your personal information when you
              visit our website, book a court, or use our facilities. By
              using our services, you consent to the practices described in
              this policy.
            </p>
          </div>

          {/* Section 2: Information We Collect */}
          <div>
            <h2 className="mb-3 text-xl font-bold text-white">
              2. Information We Collect
            </h2>

            <h3 className="mb-2 text-base font-semibold text-white">
              2.1 Information You Provide
            </h3>
            <p className="mb-3 text-sm leading-relaxed text-white">
              When you create a booking, accept our liability waiver, or
              contact us, we collect the following information:
            </p>
            <ul className="mb-4 list-inside list-disc space-y-1 text-sm text-white">
              <li>Full name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Date of birth (for waiver age verification)</li>
              <li>Booking details (date, time, court selection)</li>
              <li>Payment information (processed by our payment provider; we do not store card numbers)</li>
              <li>Digital waiver signature and acceptance record</li>
            </ul>

            <h3 className="mb-2 text-base font-semibold text-white">
              2.2 Information Collected Automatically
            </h3>
            <p className="mb-3 text-sm leading-relaxed text-white">
              When you visit our website, we automatically collect:
            </p>
            <ul className="mb-4 list-inside list-disc space-y-1 text-sm text-white">
              <li>IP address and browser type</li>
              <li>Pages visited and time spent on pages</li>
              <li>Device type and operating system</li>
              <li>Referring website (how you found us)</li>
              <li>Approximate location based on IP address</li>
            </ul>

            <h3 className="mb-2 text-base font-semibold text-white">
              2.3 Facility Data
            </h3>
            <p className="text-sm leading-relaxed text-white">
              Our facility may be equipped with security cameras. Video
              footage is used solely for security and safety purposes and
              is retained for a limited period. We do not use surveillance
              footage for marketing or analytics.
            </p>
          </div>

          {/* Section 3: How We Use Your Information */}
          <div>
            <h2 className="mb-3 text-xl font-bold text-white">
              3. How We Use Your Information
            </h2>
            <p className="mb-3 text-sm leading-relaxed text-white">
              We use your personal information for the following purposes:
            </p>
            <ul className="list-inside list-disc space-y-1 text-sm text-white">
              <li>To process and confirm your court bookings</li>
              <li>To deliver your booking confirmation for facility entry</li>
              <li>To send booking confirmations and reminders</li>
              <li>To maintain records of liability waiver acceptance</li>
              <li>To process payments and issue receipts</li>
              <li>To respond to your inquiries and provide customer support</li>
              <li>To prevent fraud, abuse, and unauthorized access to the facility</li>
              <li>To improve our website, services, and user experience</li>
              <li>To comply with legal obligations</li>
            </ul>
          </div>

          {/* Section 4: Third-Party Services */}
          <div>
            <h2 className="mb-3 text-xl font-bold text-white">
              4. Third-Party Services
            </h2>
            <p className="mb-3 text-sm leading-relaxed text-white">
              We rely on the following third-party service providers to
              operate our business. Each provider has its own privacy
              policy governing how they handle your data:
            </p>
            <ul className="mb-4 list-inside list-disc space-y-2 text-sm text-white">
              <li>
                <strong className="font-semibold">Cal.com</strong> —
                Handles our online booking and scheduling. Your name and
                email are shared with Cal.com to process bookings and send
                confirmations.
              </li>
              <li>
                <strong className="font-semibold">Payment Provider (Stripe or Square)</strong> —
                Processes all payments. Your card information is handled
                directly by the payment provider and never touches our
                servers.
              </li>
              <li>
                <strong className="font-semibold">Email Service Provider</strong> —
                Sends booking confirmations, access codes, and reminders on
                our behalf.
              </li>
              <li>
                <strong className="font-semibold">Analytics Provider</strong> —
                Collects anonymous usage data to help us understand how
                visitors use our website.
              </li>
              <li>
                <strong className="font-semibold">Hosting Provider</strong> —
                Hosts our website and may collect server logs for security
                and operational purposes.
              </li>
            </ul>
            <p className="text-sm leading-relaxed text-white">
              We do not sell, rent, or trade your personal information to
              any third party for marketing purposes.
            </p>
          </div>

          {/* Section 5: Cookies */}
          <div>
            <h2 className="mb-3 text-xl font-bold text-white">
              5. Cookies &amp; Tracking Technologies
            </h2>
            <p className="mb-3 text-sm leading-relaxed text-white">
              Our website uses cookies and similar tracking technologies
              for the following purposes:
            </p>
            <ul className="mb-4 list-inside list-disc space-y-2 text-sm text-white">
              <li>
                <strong className="font-semibold">Essential cookies</strong> —
                Required for the website to function properly (e.g.,
                remembering your booking selection as you navigate between
                pages).
              </li>
              <li>
                <strong className="font-semibold">Analytics cookies</strong> —
                Help us understand how visitors use the site so we can
                improve it.
              </li>
              <li>
                <strong className="font-semibold">Third-party cookies</strong> —
                Set by Cal.com, our payment provider, and analytics
                provider as part of their embedded services.
              </li>
            </ul>
            <p className="text-sm leading-relaxed text-white">
              You can control and delete cookies through your browser
              settings. Disabling essential cookies may affect the
              functionality of the booking system.
            </p>
          </div>

          {/* Section 6: Data Retention */}
          <div>
            <h2 className="mb-3 text-xl font-bold text-white">
              6. Data Retention
            </h2>
            <p className="text-sm leading-relaxed text-white">
              We retain your personal information for as long as necessary
              to fulfill the purposes outlined in this policy. Booking
              records and waiver acceptance records are retained for a
              minimum of seven (7) years for legal and liability purposes.
              Usage data collected by analytics is retained in aggregate
              form indefinitely. If you request deletion of your data, we
              will remove it from our active systems within 30 days,
              subject to legal retention requirements.
            </p>
          </div>

          {/* Section 7: Data Security */}
          <div>
            <h2 className="mb-3 text-xl font-bold text-white">
              7. Data Security
            </h2>
            <p className="text-sm leading-relaxed text-white">
              We implement appropriate technical and organizational measures
              to protect your personal information, including: encrypted
              connections (HTTPS/TLS) for all data transmission; secure
              payment processing via certified providers (we never store
              card numbers); access controls limiting internal access to
              personal data; and regular security reviews. However, no
              method of transmission or storage is 100% secure, and we
              cannot guarantee absolute security.
            </p>
          </div>

          {/* Section 8: Your Rights */}
          <div>
            <h2 className="mb-3 text-xl font-bold text-white">
              8. Your Rights
            </h2>
            <p className="mb-3 text-sm leading-relaxed text-white">
              Depending on your location, you may have the following rights
              regarding your personal information:
            </p>
            <ul className="mb-4 list-inside list-disc space-y-1 text-sm text-white">
              <li><strong className="font-semibold">Access</strong> — Request a copy of the personal data we hold about you</li>
              <li><strong className="font-semibold">Correction</strong> — Request that we correct inaccurate or incomplete data</li>
              <li><strong className="font-semibold">Deletion</strong> — Request that we delete your personal data (subject to legal retention requirements)</li>
              <li><strong className="font-semibold">Opt-out</strong> — Unsubscribe from marketing emails at any time</li>
              <li><strong className="font-semibold">Data portability</strong> — Request your data in a machine-readable format</li>
              <li><strong className="font-semibold">Withdraw consent</strong> — Withdraw consent for data processing at any time</li>
            </ul>
            <p className="text-sm leading-relaxed text-white">
              To exercise any of these rights, contact us at{" "}
              <a
                href={`mailto:${SITE.email}`}
                className="text-brand-gold hover:underline"
              >
                {SITE.email}
              </a>
              .
            </p>
          </div>

          {/* Section 9: Children's Privacy */}
          <div>
            <h2 className="mb-3 text-xl font-bold text-white">
              9. Children&rsquo;s Privacy
            </h2>
            <p className="text-sm leading-relaxed text-white">
              Our services are available to minors only when a parent or
              legal guardian signs the liability waiver on their behalf. We
              do not knowingly collect personal information directly from
              children under 13. If you believe a child has provided us
              with personal information without parental consent, please
              contact us immediately at{" "}
              <a
                href={`mailto:${SITE.email}`}
                className="text-brand-gold hover:underline"
              >
                {SITE.email}
              </a>{" "}
              and we will promptly delete it.
            </p>
          </div>

          {/* Section 10: Updates */}
          <div>
            <h2 className="mb-3 text-xl font-bold text-white">
              10. Updates to This Policy
            </h2>
            <p className="text-sm leading-relaxed text-white">
              We may update this Privacy Policy from time to time to
              reflect changes in our practices, technology, or legal
              requirements. When we make material changes, we will update
              the &ldquo;Last updated&rdquo; date at the top of this page
              and, where appropriate, notify you by email. We encourage
              you to review this policy periodically.
            </p>
          </div>

          {/* Section 11: Contact */}
          <div>
            <h2 className="mb-3 text-xl font-bold text-white">
              11. Contact Us
            </h2>
            <p className="text-sm leading-relaxed text-white">
              If you have any questions, concerns, or requests regarding
              this Privacy Policy or your personal information, please
              contact us:
            </p>
            <div className="mt-4 rounded-xl bg-brand-gray-dark p-4 text-sm text-white">
              <p className="font-semibold">{SITE.name}</p>
              <p className="mt-1 text-brand-gray-mid">{SITE.address}</p>
              <p className="mt-1">
                Email:{" "}
                <a
                  href={`mailto:${SITE.email}`}
                  className="text-brand-gold hover:underline"
                >
                  {SITE.email}
                </a>
              </p>
              <p className="mt-1">
                Phone:{" "}
                <a
                  href={SITE.phoneHref}
                  className="text-brand-gold hover:underline"
                >
                  {SITE.phoneDisplay}
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
