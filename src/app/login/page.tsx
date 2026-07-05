"use client";

/**
 * ============================================================================
 * Login Page
 * ============================================================================
 *
 * Route: /login
 *
 * Responsive, centered login form for admin access. Uses the auth() utility
 * from @/lib/auth for credential submission. On success, redirects to /admin.
 *
 * DESIGN RULES: Flat design, white background, black text, orange accents.
 * Centered card layout matching the rest of the site.
 * ============================================================================ */

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { login, isAuthenticated } from "@/lib/auth";
import { SITE } from "@/lib/data";

export default function LoginPage() {
  const router = useRouter();

  // Form state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // If already logged in, redirect to dashboard
  if (isAuthenticated()) {
    router.replace("/admin");
  }

  // --- Handle login submit ---

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!email.trim() || !password.trim()) {
      setError("Please enter both email and password.");
      return;
    }

    setLoading(true);

    const result = await login(email, password);

    if (result.success) {
      router.push("/admin");
    } else {
      setError(result.error ?? "Login failed. Please try again.");
      setLoading(false);
    }
  };

  return (
    <section className="section-padding bg-white">
      <div className="mx-auto max-w-md">
        {/* ---- Header ---- */}
        <div className="mb-8 text-center">
          <h1 className="text-2xl font-bold text-brand-black">
            Admin <span className="text-brand-orange">Login</span>
          </h1>
          <p className="mt-2 text-sm text-brand-gray-mid">
            {SITE.name} staff access only.
          </p>
        </div>

        {/* ---- Login Card ---- */}
        <div className="card">
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* --- Email --- */}
            <div>
              <label
                htmlFor="login-email"
                className="mb-1 block text-sm font-medium text-brand-black"
              >
                Email
              </label>
              <input
                id="login-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@hoophouse502.com"
                autoComplete="email"
                disabled={loading}
                className="w-full rounded-xl border border-brand-gray-border bg-white px-4 py-3 text-brand-black placeholder:text-brand-gray-mid focus:border-brand-orange focus:outline-none focus:ring-2 focus:ring-brand-orange/20 disabled:cursor-not-allowed disabled:opacity-50"
              />
            </div>

            {/* --- Password --- */}
            <div>
              <label
                htmlFor="login-password"
                className="mb-1 block text-sm font-medium text-brand-black"
              >
                Password
              </label>
              <input
                id="login-password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                autoComplete="current-password"
                disabled={loading}
                className="w-full rounded-xl border border-brand-gray-border bg-white px-4 py-3 text-brand-black placeholder:text-brand-gray-mid focus:border-brand-orange focus:outline-none focus:ring-2 focus:ring-brand-orange/20 disabled:cursor-not-allowed disabled:opacity-50"
              />
            </div>

            {/* --- Error message --- */}
            {error && (
              <div className="flex items-center gap-2 rounded-xl bg-red-50 px-4 py-3 text-sm text-red-600">
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
              disabled={loading}
              className="btn-cta w-full disabled:cursor-not-allowed disabled:opacity-50"
            >
              {loading ? (
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
                  Authenticating…
                </span>
              ) : (
                "Log In"
              )}
            </button>
          </form>

          {/* --- Development notice --- */}
          <div className="mt-6 rounded-xl bg-brand-orange-light p-3 text-center text-xs text-brand-orange-dark">
            <strong>Development Mode:</strong> Auth is a client-side stub.
            Replace with a real API call in src/lib/auth.ts before going live.
          </div>
        </div>

        {/* --- Back to site --- */}
        <p className="mt-6 text-center text-sm text-brand-gray-mid">
          <Link href="/" className="text-brand-orange hover:underline">
            &larr; Back to site
          </Link>
        </p>
      </div>
    </section>
  );
}
