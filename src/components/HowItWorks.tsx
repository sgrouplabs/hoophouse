/**
 * ============================================================================
 * How It Works (Server Component)
 * ============================================================================
 *
 * 3-column flat-design grid outlining the automated process:
 *   1. Book Online  (calendar icon)
 *   2. Get Your Code (lock icon)
 *   3. Play (user icon)
 *
 * Uses inline SVG flat icons in black/orange — no emojis, no basketball
 * imagery. Data comes from the HOW_IT_WORKS array in @/lib/data.
 * ============================================================================
 */

import { HOW_IT_WORKS, type HowItWorksStep } from "@/lib/data";

// --- Flat SVG Icon Renderer -------------------------------------------------
//
// Simple, generic line-art icons rendered inline. Each is a 24×24 viewBox
// stroke icon matching the flat design system.

function StepIcon({ icon }: { icon: HowItWorksStep["icon"] }) {
  const icons: Record<HowItWorksStep["icon"], React.ReactNode> = {
    calendar: (
      <>
        <rect x="3" y="4" width="18" height="18" rx="2" strokeWidth={1.5} />
        <path d="M16 2v4M8 2v4M3 10h18" strokeWidth={1.5} />
      </>
    ),
    lock: (
      <>
        <rect x="5" y="11" width="14" height="10" rx="2" strokeWidth={1.5} />
        <path d="M8 11V7a4 4 0 018 0v4" strokeWidth={1.5} />
      </>
    ),
    user: (
      <>
        <circle cx="12" cy="8" r="4" strokeWidth={1.5} />
        <path d="M4 20a8 8 0 0116 0" strokeWidth={1.5} />
      </>
    ),
  };

  return (
    <svg
      className="h-10 w-10 text-brand-black"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      {icons[icon]}
    </svg>
  );
}

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="section-padding bg-white">
      <div className="mx-auto max-w-7xl">
        {/* ---- Section header ---- */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold text-brand-black md:text-4xl">
            How It <span className="text-brand-orange">Works</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-brand-gray-mid">
            Three simple steps. No phone calls, no front desk, no waiting.
          </p>
        </div>

        {/* ---- 3-column grid ---- */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {HOW_IT_WORKS.map((step) => (
            <div key={step.id} className="text-center">
              {/* Step number badge */}
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full border-2 border-brand-orange text-xl font-bold text-brand-orange">
                {step.step}
              </div>

              {/* Flat icon */}
              <div className="mb-4 flex justify-center">
                <StepIcon icon={step.icon} />
              </div>

              {/* Title */}
              <h3 className="mb-2 text-lg font-semibold text-brand-black">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-sm leading-relaxed text-brand-gray-mid">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}