"use client";

/**
 * ============================================================================
 * CheckoutForm (Client Component)
 * ============================================================================
 *
 * Payment UI Prototype — this is a FRONT-END ONLY mock for the MVP.
 *
 * What it does:
 *   - Displays a booking summary (selected court, time, price)
 *   - Captures name, email, and phone
 *   - Shows a "Pay & Confirm" button
 *   - Simulates a payment submission with a loading state
 *
 * What it DOESN'T do (yet):
 *   - Process real payments
 *   - Validate against a real payment gateway
 *
 * NEXT STEPS — Connect to Stripe or Square:
 *   1. Install Stripe SDK:   npm install @stripe/stripe-js
 *   2. Create Stripe account → get publishable + secret keys
 *   3. Add keys to .env.local:  STRIPE_PUBLISHABLE_KEY=..., STRIPE_SECRET_KEY=...
 *   4. Replace handleSubmit() with a call to your /api/create-payment-intent
 *      route handler, then use Stripe Elements to capture card details
 *   5. Alternatively, use Stripe Checkout (redirect-based, simplest for MVP+)
 *
 *   Square alternative:
 *     npm install @square/web-sdk
 *     Replace handleSubmit() with Square Web Payments SDK integration
 *
 * DESIGN RULES: No emojis, flat design, Inter font.
 * ============================================================================
 */

import { useState } from "react";
import { PRICING_TIERS, SITE } from "@/lib/data";

// --- Types -----------------------------------------------------------------

interface CheckoutFormProps {
  /** Pre-selected tier ID (from URL param or default selection). */
  selectedTierId?: string;
}

// --- Component -------------------------------------------------------------

export default function CheckoutForm({
  selectedTierId,
}: CheckoutFormProps) {
  // Form state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [selectedTier, setSelectedTier] = useState(
    selectedTierId || PRICING_TIERS[1].id // default to "most popular"
  );
  const [bookingDate, setBookingDate] = useState("");
  const [bookingTime, setBookingTime] = useState("");

  // Submission state: "idle" | "loading" | "success"
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");
  const [error, setError] = useState("");

  // Look up the selected tier for the summary panel
  const tier = PRICING_TIERS.find((t) => t.id === selectedTier) || PRICING_TIERS[1];

  // --- Handle form submit (MOCK — no real payment processed) ----------------

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    // Basic validation
    if (!name || !email || !phone) {
      setError("Please fill in all fields.");
      return;
    }
    if (!bookingDate || !bookingTime) {
      setError("Please select your preferred date and time.");
      return;
    }

    // --- MOCK payment processing ---
    // In production, this is where you'd:
    //   1. POST to /api/create-payment-intent with { amount: tier.price, ... }
    //   2. Receive a client_secret back
    //   3. Confirm the payment with Stripe.js confirmCardPayment()
    //   4. On success, create the booking record in your DB
    setStatus("loading");

    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1800));

    setStatus("success");
  };

  // --- Success screen (shown after "payment" completes) --------------------

  if (status === "success") {
    return (
      <div className="mx-auto max-w-lg text-center">
        <div className="card border-2 border-green-500 bg-green-50">
          {/* Flat checkmark icon */}
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-500">
            <svg
              className="h-8 w-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={3}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h2 className="mt-4 text-2xl font-bold text-white">
            Booking Confirmed!
          </h2>
          <p className="mt-2 text-brand-gray-mid">
            Thanks, {name.split(" ")[0]}! Your court rental is reserved.
          </p>
          <div className="mt-6 rounded-xl bg-brand-gray-dark p-4 text-left text-sm">
            <div className="flex justify-between border-b border-brand-gray-border pb-2">
              <span className="text-brand-gray-mid">Court:</span>
              <span className="font-semibold">{tier.name}</span>
            </div>
            <div className="flex justify-between border-b border-brand-gray-border py-2">
              <span className="text-brand-gray-mid">Date:</span>
              <span className="font-semibold">{bookingDate}</span>
            </div>
            <div className="flex justify-between border-b border-brand-gray-border py-2">
              <span className="text-brand-gray-mid">Time:</span>
              <span className="font-semibold">{bookingTime}</span>
            </div>
            <div className="flex justify-between pt-2">
              <span className="text-brand-gray-mid">Total Paid:</span>
              <span className="font-bold text-brand-gold">
                {tier.priceLabel}
              </span>
            </div>
          </div>
          <p className="mt-4 text-xs text-brand-gray-mid">
            A confirmation email has been sent to {email}.
          </p>
          <p className="mt-2 text-xs text-brand-gray-mid">
            Questions? Call us at{" "}
            <a href={SITE.phoneHref} className="text-brand-gold">
              {SITE.phoneDisplay}
            </a>
          </p>
        </div>
        <button
          onClick={() => {
            setStatus("idle");
            setName("");
            setEmail("");
            setPhone("");
            setBookingDate("");
            setBookingTime("");
          }}
          className="btn-outline mt-6"
        >
          &larr; Book another session
        </button>
      </div>
    );
  }

  // --- Main checkout form --------------------------------------------------

  return (
    <div className="mx-auto max-w-4xl">
      <div className="grid gap-8 md:grid-cols-5">
        {/* ---- Left: Form fields (3 cols) ---- */}
        <div className="md:col-span-3">
          <h2 className="mb-6 text-2xl font-bold text-white">
            Your Information
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* --- Court selection --- */}
            <div>
              <label className="mb-1 block text-sm font-medium text-white">
                Court / Time Slot
              </label>
              <select
                value={selectedTier}
                onChange={(e) => setSelectedTier(e.target.value)}
                className="w-full rounded-xl border border-brand-gray-border bg-brand-gray-dark px-4 py-3 text-white focus:border-brand-gold focus:outline-none focus:ring-2 focus:ring-brand-gold/20"
              >
                {PRICING_TIERS.map((t) => (
                  <option key={t.id} value={t.id}>
                    {t.name} — {t.priceLabel}
                  </option>
                ))}
              </select>
            </div>

            {/* --- Date --- */}
            <div>
              <label className="mb-1 block text-sm font-medium text-white">
                Preferred Date
              </label>
              <input
                type="date"
                value={bookingDate}
                onChange={(e) => setBookingDate(e.target.value)}
                className="w-full rounded-xl border border-brand-gray-border bg-brand-gray-dark px-4 py-3 text-white focus:border-brand-gold focus:outline-none focus:ring-2 focus:ring-brand-gold/20"
              />
            </div>

            {/* --- Time --- */}
            <div>
              <label className="mb-1 block text-sm font-medium text-white">
                Preferred Time
              </label>
              <input
                type="time"
                value={bookingTime}
                onChange={(e) => setBookingTime(e.target.value)}
                className="w-full rounded-xl border border-brand-gray-border bg-brand-gray-dark px-4 py-3 text-white focus:border-brand-gold focus:outline-none focus:ring-2 focus:ring-brand-gold/20"
              />
            </div>

            {/* --- Name --- */}
            <div>
              <label className="mb-1 block text-sm font-medium text-white">
                Full Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="John Doe"
                className="w-full rounded-xl border border-brand-gray-border bg-brand-gray-dark px-4 py-3 text-white placeholder:text-brand-gray-mid focus:border-brand-gold focus:outline-none focus:ring-2 focus:ring-brand-gold/20"
              />
            </div>

            {/* --- Email --- */}
            <div>
              <label className="mb-1 block text-sm font-medium text-white">
                Email Address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="john@example.com"
                className="w-full rounded-xl border border-brand-gray-border bg-brand-gray-dark px-4 py-3 text-white placeholder:text-brand-gray-mid focus:border-brand-gold focus:outline-none focus:ring-2 focus:ring-brand-gold/20"
              />
            </div>

            {/* --- Phone --- */}
            <div>
              <label className="mb-1 block text-sm font-medium text-white">
                Phone Number
              </label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="502-550-6954"
                className="w-full rounded-xl border border-brand-gray-border bg-brand-gray-dark px-4 py-3 text-white placeholder:text-brand-gray-mid focus:border-brand-gold focus:outline-none focus:ring-2 focus:ring-brand-gold/20"
              />
            </div>

            {/* --- Error message --- */}
            {error && (
              <div className="flex items-center gap-2 rounded-xl bg-red-50 px-4 py-3 text-sm text-red-600">
                {/* Flat alert icon */}
                <svg
                  className="h-4 w-4 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                {error}
              </div>
            )}

            {/* --- Submit button --- */}
            <button
              type="submit"
              disabled={status === "loading"}
              className="btn-cta w-full text-lg disabled:cursor-not-allowed disabled:opacity-50"
            >
              {status === "loading" ? (
                <span className="flex items-center gap-2">
                  <svg
                    className="h-5 w-5 animate-spin"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                    />
                  </svg>
                  Processing payment…
                </span>
              ) : (
                <>Pay &amp; Confirm — {tier.priceLabel}</>
              )}
            </button>

            {/* --- Security note --- */}
            <p className="text-center text-xs text-brand-gray-mid">
              This is a demo checkout. No real payment is processed.
              <br />
              Stripe / Square integration will be added in the next iteration.
            </p>
          </form>
        </div>

        {/* ---- Right: Order summary (2 cols) ---- */}
        <div className="md:col-span-2">
          <div className="card sticky top-24 bg-brand-gray-dark">
            <h3 className="mb-4 text-lg font-bold text-white">
              Order Summary
            </h3>

            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-brand-gray-mid">Court:</span>
                <span className="font-medium">{tier.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-brand-gray-mid">Duration:</span>
                <span className="font-medium">{tier.duration}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-brand-gray-mid">Date:</span>
                <span className="font-medium">
                  {bookingDate || "— Not selected —"}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-brand-gray-mid">Time:</span>
                <span className="font-medium">
                  {bookingTime || "— Not selected —"}
                </span>
              </div>
            </div>

            {/* Included features */}
            <div className="mt-4 border-t border-brand-gray-border pt-4">
              <p className="mb-2 text-xs font-semibold uppercase text-brand-gray-mid">
                Included
              </p>
              <ul className="space-y-1 text-xs text-white">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-center gap-1.5">
                    <span className="text-brand-gold">&check;</span> {f}
                  </li>
                ))}
              </ul>
            </div>

            {/* Total */}
            <div className="mt-4 border-t border-brand-gray-border pt-4">
              <div className="flex items-baseline justify-between">
                <span className="text-base font-bold text-white">
                  Total
                </span>
                <span className="text-2xl font-extrabold text-brand-gold">
                  {tier.priceLabel}
                </span>
              </div>
            </div>

            {/* Location */}
            <div className="mt-4 rounded-lg bg-brand-gray-dark p-3 text-xs text-brand-gray-mid">
              {SITE.address}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}