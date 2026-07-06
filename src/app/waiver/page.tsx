/**
 * ============================================================================
 * Liability Waiver Page (Server Component → wraps client WaiverForm)
 * ============================================================================
 *
 * Route: /waiver
 *
 * Displays the full liability waiver and release of liability for
 * Hoophouse502 self-service court rental. Includes a digital acceptance
 * form at the bottom that captures name, email, date, and checkbox
 * agreement.
 *
 * DESIGN RULES: Flat design, Inter font, no emojis. Legal content uses
 * a centered prose layout with clear section headings.
 * ============================================================================ */

import type { Metadata } from "next";
import WaiverForm from "@/components/WaiverForm";
import { SITE } from "@/lib/data";

export const metadata: Metadata = {
  title: `Liability Waiver — ${SITE.name}`,
  description:
    "Liability waiver and release of liability for Hoophouse502 court rental. All participants must review and accept before booking.",
};

export default function WaiverPage() {
  return (
    <section className="section-padding bg-brand-black">
      <div className="mx-auto max-w-3xl">
        {/* ---- Header ---- */}
        <div className="mb-12">
          <h1 className="text-3xl font-bold text-white md:text-4xl">
            Liability <span className="text-brand-gold">Waiver</span>
          </h1>
          <p className="mt-4 text-brand-gray-mid">
            All participants must review and accept this waiver before
            booking or using the court at {SITE.name}. Last updated:{" "}
            {new Date().toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        </div>

        {/* ---- Waiver Body ---- */}
        <div className="space-y-8">
          {/* Introduction */}
          <div className="rounded-2xl border border-brand-gray-border bg-brand-gray-dark p-6">
            <p className="text-sm leading-relaxed text-white">
              <strong className="font-semibold">
                This is a legally binding document.
              </strong>{" "}
              By signing this waiver, you acknowledge that you have read,
              understood, and voluntarily agree to all terms below. If you do
              not agree, do not sign this waiver or use the facilities at{" "}
              {SITE.name}.
            </p>
          </div>

          {/* Section 1: Assumption of Risk */}
          <div>
            <h2 className="mb-3 text-xl font-bold text-white">
              1. Assumption of Risk
            </h2>
            <p className="text-sm leading-relaxed text-white">
              I understand and acknowledge that playing basketball and using
              the athletic facilities at {SITE.name} (located at{" "}
              {SITE.address}) involves inherent risks of physical injury,
              including but not limited to: sprains, strains, fractures,
              concussions, joint damage, cardiac events, and other serious
              or catastrophic injuries. These risks may arise from my own
              actions, the actions of others, the condition of the
              facilities, or the nature of the sport itself. I voluntarily
              and knowingly accept and assume all such risks, both known and
              unknown, and assume full responsibility for my participation.
            </p>
          </div>

          {/* Section 2: Release of Liability */}
          <div>
            <h2 className="mb-3 text-xl font-bold text-white">
              2. Release of Liability
            </h2>
            <p className="text-sm leading-relaxed text-white">
              In consideration of being permitted to use the facilities and
              services at {SITE.name}, I, on behalf of myself, my heirs,
              assigns, personal representatives, and estate, hereby
              release, waive, discharge, and covenant not to sue{" "}
              {SITE.name}, its owners, operators, employees, agents,
              volunteers, contractors, and affiliates (collectively, the
              &ldquo;Released Parties&rdquo;) from any and all claims,
              demands, causes of action, damages, losses, or liabilities of
              any kind, whether known or unknown, arising out of or in any
              way connected with my use of the facilities, including any
              injury, damage, or death that may occur. This release applies
              regardless of whether such claims are based on negligence,
              strict liability, or any other legal theory.
            </p>
          </div>

          {/* Section 3: Medical Emergency */}
          <div>
            <h2 className="mb-3 text-xl font-bold text-white">
              3. Medical Emergency
            </h2>
            <p className="text-sm leading-relaxed text-white">
              I authorize {SITE.name} and its agents to seek and obtain
              emergency medical treatment for me in the event of injury or
              illness during my use of the facilities. I agree to be
              financially responsible for any medical treatment received and
              agree to hold the Released Parties harmless for any costs
              incurred. I represent that I am in good physical condition and
              have no medical condition that would prevent me from safely
              participating in basketball or athletic activities.
            </p>
          </div>

          {/* Section 4: Personal Property */}
          <div>
            <h2 className="mb-3 text-xl font-bold text-white">
              4. Personal Property
            </h2>
            <p className="text-sm leading-relaxed text-white">
              {SITE.name} is not responsible for any personal property that
              is lost, stolen, or damaged while on the premises, including
              items stored in lockers or changing rooms. I acknowledge that
              I use the facilities at my own risk with respect to all
              personal belongings and that no storage area is guaranteed to
              be secure.
            </p>
          </div>

          {/* Section 5: Code of Conduct */}
          <div>
            <h2 className="mb-3 text-xl font-bold text-white">
              5. Code of Conduct
            </h2>
            <p className="text-sm leading-relaxed text-white">
              I agree to conduct myself in a safe and respectful manner
              while using the facilities. I will not engage in fighting,
              reckless play, harassment, or any behavior that endangers
              myself or others. {SITE.name} is a self-service facility with
              no on-site staff; I acknowledge that surveillance cameras may
              be present and that {SITE.name} reserves the right to revoke
              access and ban any individual who violates this code of
              conduct without refund.
            </p>
          </div>

          {/* Section 6: Indemnification */}
          <div>
            <h2 className="mb-3 text-xl font-bold text-white">
              6. Indemnification
            </h2>
            <p className="text-sm leading-relaxed text-white">
              I agree to indemnify and hold harmless the Released Parties
              from any and all claims, damages, losses, or expenses
              (including reasonable attorney&rsquo;s fees) arising out of my
              use of the facilities or my violation of this waiver,
              including claims brought by third parties as a result of my
              actions during my rental period.
            </p>
          </div>

          {/* Section 7: Access Code & Security */}
          <div>
            <h2 className="mb-3 text-xl font-bold text-white">
              7. Access Code &amp; Security
            </h2>
            <p className="text-sm leading-relaxed text-white">
              I understand that upon booking I will receive a unique access
              code to enter the facility. I agree not to share this code
              with any unauthorized individual. I am responsible for all
              activity that occurs under my access code during my rental
              period and agree to report any lost or compromised codes to{" "}
              {SITE.name} immediately.
            </p>
          </div>

          {/* Section 8: Minors */}
          <div>
            <h2 className="mb-3 text-xl font-bold text-white">
              8. Minors
            </h2>
            <p className="text-sm leading-relaxed text-white">
              If I am signing on behalf of a minor (under 18 years of age),
              I represent that I am the parent or legal guardian of said
              minor. I consent to the minor&rsquo;s use of the facilities and
              agree to be bound by all terms of this waiver on their behalf.
              I accept full responsibility for the minor&rsquo;s safety and
              conduct during their use of the facilities. I understand that
              minors must be supervised by a responsible adult at all times
              while on the premises.
            </p>
          </div>

          {/* Section 9: Governing Law */}
          <div>
            <h2 className="mb-3 text-xl font-bold text-white">
              9. Governing Law &amp; Severability
            </h2>
            <p className="text-sm leading-relaxed text-white">
              This waiver shall be governed by and construed in accordance
              with the laws of the Commonwealth of Kentucky. Any legal
              action arising under this waiver shall be brought exclusively
              in the courts of Jefferson County, Kentucky. If any provision
              of this waiver is found to be unenforceable or invalid, the
              remaining provisions shall remain in full force and effect.
            </p>
          </div>

          {/* Section 10: Acknowledgment */}
          <div>
            <h2 className="mb-3 text-xl font-bold text-white">
              10. Acknowledgment
            </h2>
            <p className="text-sm leading-relaxed text-white">
              I acknowledge that I have read this waiver in its entirety,
              that I understand its contents, and that I am signing it
              voluntarily. I understand that by signing this waiver I am
              giving up certain legal rights, including the right to sue. I
              confirm that I am at least 18 years of age and of sound mind,
              or that I am the parent or legal guardian signing on behalf of
              a minor participant.
            </p>
          </div>
        </div>

        {/* ---- Digital Acceptance Form ---- */}
        <div className="mt-16 border-t border-brand-gray-border pt-12">
          <h2 className="mb-2 text-2xl font-bold text-white">
            Accept &amp; <span className="text-brand-gold">Sign</span>
          </h2>
          <p className="mb-8 text-brand-gray-mid">
            Complete the form below to digitally accept this waiver. You
            must accept the waiver before booking a court.
          </p>
          <WaiverForm />
        </div>
      </div>
    </section>
  );
}
