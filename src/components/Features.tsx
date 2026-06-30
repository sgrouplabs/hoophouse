/**
 * ============================================================================
 * Features Grid (Server Component)
 * ============================================================================
 *
 * Displays the gym amenities/features in a responsive 3-column grid.
 * Data comes from the FEATURES array in @/lib/data.
 * ============================================================================
 */

import { FEATURES } from "@/lib/data";

export default function Features() {
  return (
    <section className="section-padding bg-white">
      <div className="mx-auto max-w-7xl">
        {/* ---- Section header ---- */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-brand-black md:text-4xl">
            Everything you need to <span className="text-brand-orange">play</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-brand-gray-mid">
            Hoophouse502 is built for players, teams, and trainers who want
            a clean, professional court without the hassle.
          </p>
        </div>

        {/* ---- Feature cards grid ---- */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature) => (
            <div key={feature.title} className="card group">
              {/* Icon */}
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-orange-light text-2xl transition-transform group-hover:scale-110">
                {feature.icon}
              </div>

              {/* Title */}
              <h3 className="mb-2 text-lg font-semibold text-brand-black">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-sm leading-relaxed text-brand-gray-mid">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}