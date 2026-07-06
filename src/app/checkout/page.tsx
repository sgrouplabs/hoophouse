/**
 * ============================================================================
 * Checkout Page (Server Component → wraps client CheckoutForm)
 * ============================================================================
 *
 * Route: /checkout
 *
 * Renders the payment UI prototype. This is a front-end-only mock — it
 * displays a booking summary, captures customer info, and simulates a payment
 * with a loading state and success confirmation.
 *
 * To connect a real payment gateway, see the comments in CheckoutForm.tsx.
 * ============================================================================
 */

import type { Metadata } from "next";
import CheckoutForm from "@/components/CheckoutForm";
import { SITE } from "@/lib/data";

export const metadata: Metadata = {
  title: `Checkout — ${SITE.name}`,
  description:
    "Complete your court rental reservation at Hoophouse502. Secure checkout powered by Cal.com + Stripe (coming soon).",
};

export default function CheckoutPage() {
  return (
    <section className="section-padding bg-brand-black">
      <div className="mx-auto max-w-4xl">
        {/* ---- Header ---- */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-white md:text-4xl">
            Reserve &amp; <span className="text-brand-gold">Pay</span>
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-brand-gray-mid">
            Select your court, pick your time, and confirm your reservation.
          </p>
        </div>

        {/* ---- Checkout Form (client component) ---- */}
        <CheckoutForm />
      </div>
    </section>
  );
}