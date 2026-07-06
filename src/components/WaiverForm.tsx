"use client";

/**
 * ============================================================================
 * WaiverForm (Client Component)
 * ============================================================================
 *
 * Digital acceptance form for the liability waiver. Captures:
 *   - Full name
 *   - Email
 *   - Date of birth (age verification — must be 18+)
 *   - Checkbox agreement
 *   - Digital signature (typed)
 *
 * On submit: shows a success confirmation with the participant's name and
 * a reference ID. This is a front-end-only mock for the MVP — no data is
 * persisted server-side yet.
 *
 * NEXT STEPS — Persist waiver acceptance:
 *   1. Create an API route: POST /api/waiver
 *   2. Store acceptance record in a database (name, email, IP, timestamp, waiver version)
 *   3. Optionally email a copy to the participant
 *
 * DESIGN RULES: No emojis, flat design, Inter font.
 * ============================================================================
 */

import { useState } from "react";
import { SITE } from "@/lib/data";

export default function WaiverForm() {
  // Form state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [dob, setDob] = useState("");
  const [signature, setSignature] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [error, setError] = useState("");

  // Submission state: "idle" | "loading" | "success"
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  // Reference ID for the accepted waiver (generated on success)
  const [refId, setRefId] = useState("");

  // --- Validation helpers --------------------------------------------------

  /** Calculate age from a date-of-birth string (YYYY-MM-DD). */
  const calculateAge = (dobString: string): number => {
    const today = new Date();
    const birthDate = new Date(dobString);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };

  // --- Handle form submit (MOCK — no server persistence yet) ---------------

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    // Basic validation
    if (!name || !email || !dob || !signature) {
      setError("Please fill in all fields.");
      return;
    }
    if (!agreed) {
      setError("You must check the box to accept the waiver.");
      return;
    }

    // Age verification
    const age = calculateAge(dob);
    if (age < 18) {
      setError(
        "You must be at least 18 years old to sign this waiver. A parent or legal guardian must sign on behalf of minors."
      );
      return;
    }

    // --- MOCK submission ---
    setStatus("loading");

    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Generate a mock reference ID
    const id = `HH-${Date.now().toString(36).toUpperCase()}-${Math.random()
      .toString(36)
      .substring(2, 6)
      .toUpperCase()}`;
    setRefId(id);
    setStatus("success");
  };

  // --- Success screen ------------------------------------------------------

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
            Waiver Accepted
          </h2>
          <p className="mt-2 text-brand-gray-mid">
            Thank you, {name.split(" ")[0]}. Your liability waiver has been
            accepted.
          </p>
          <div className="mt-6 rounded-xl bg-brand-gray-dark p-4 text-left text-sm">
            <div className="flex justify-between border-b border-brand-gray-border pb-2">
              <span className="text-brand-gray-mid">Name:</span>
              <span className="font-semibold">{name}</span>
            </div>
            <div className="flex justify-between border-b border-brand-gray-border py-2">
              <span className="text-brand-gray-mid">Email:</span>
              <span className="font-semibold">{email}</span>
            </div>
            <div className="flex justify-between pt-2">
              <span className="text-brand-gray-mid">Reference ID:</span>
              <span className="font-mono font-semibold text-brand-gold">
                {refId}
              </span>
            </div>
          </div>
          <p className="mt-4 text-xs text-brand-gray-mid">
            Please save your Reference ID. You may be asked to provide it
            when booking a court.
          </p>
        </div>
        <button
          onClick={() => {
            setStatus("idle");
            setName("");
            setEmail("");
            setDob("");
            setSignature("");
            setAgreed(false);
          }}
          className="btn-outline mt-6"
        >
          &larr; Back to waiver
        </button>
      </div>
    );
  }

  // --- Main form -----------------------------------------------------------

  return (
    <form onSubmit={handleSubmit} className="mx-auto max-w-lg space-y-5">
      {/* --- Full Name --- */}
      <div>
        <label className="mb-1 block text-sm font-medium text-white">
          Full Legal Name
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

      {/* --- Date of Birth --- */}
      <div>
        <label className="mb-1 block text-sm font-medium text-white">
          Date of Birth
        </label>
        <input
          type="date"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
          className="w-full rounded-xl border border-brand-gray-border bg-brand-gray-dark px-4 py-3 text-white focus:border-brand-gold focus:outline-none focus:ring-2 focus:ring-brand-gold/20"
        />
        <p className="mt-1 text-xs text-brand-gray-mid">
          You must be 18 or older to sign. Minors require a parent or guardian signature.
        </p>
      </div>

      {/* --- Digital Signature --- */}
      <div>
        <label className="mb-1 block text-sm font-medium text-white">
          Digital Signature
        </label>
        <input
          type="text"
          value={signature}
          onChange={(e) => setSignature(e.target.value)}
          placeholder="Type your full legal name as your signature"
          className="w-full rounded-xl border border-brand-gray-border bg-brand-gray-dark px-4 py-3 text-white placeholder:text-brand-gray-mid focus:border-brand-gold focus:outline-none focus:ring-2 focus:ring-brand-gold/20"
        />
      </div>

      {/* --- Agreement Checkbox --- */}
      <div className="flex items-start gap-3">
        <input
          type="checkbox"
          id="agreement"
          checked={agreed}
          onChange={(e) => setAgreed(e.target.checked)}
          className="mt-1 h-5 w-5 rounded border-brand-gray-border text-brand-gold focus:ring-brand-gold/20"
        />
        <label htmlFor="agreement" className="text-sm text-white">
          I have read, understand, and voluntarily agree to all terms of
          this liability waiver. I understand that by checking this box and
          typing my name above, I am providing a legally binding digital
          signature.
        </label>
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
            Processing…
          </span>
        ) : (
          <>Accept &amp; Sign Waiver</>
        )}
      </button>

      <p className="text-center text-xs text-brand-gray-mid">
        This is a digital acceptance form. No payment is required. Your
        signature is legally binding under the Kentucky Uniform Electronic
        Transactions Act (KRS 369.001 et seq.).
      </p>
    </form>
  );
}