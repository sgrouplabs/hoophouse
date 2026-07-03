"use client";

/**
 * ============================================================================
 * Admin Login Page (Client Component)
 * ============================================================================
 *
 * Route: /admin/login
 *
 * Mock authentication for the admin dashboard. No database or backend —
 * this is a client-side placeholder that stores a sessionStorage flag.
 *
 * SECURITY WARNING: This is NOT real authentication. It exists solely for
 * development and UI preview purposes. Before going live, replace with:
 *   - NextAuth.js, Clerk, or Supabase Auth
 *   - Hashed passwords in a database
 *   - HTTP-only cookies with signed JWTs
 *   - Rate limiting on login attempts
 *
 * Default credentials (change in data.ts → ADMIN_CONFIG):
 *   Username: admin
 *   Password: hoophouse502
 *
 * DESIGN RULES: Flat design, Inter font, no emojis. Centered card layout
 * matching the rest of the site.
 * ============================================================================
 */

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { ADMIN_CONFIG, SITE } from "@/lib/data";

export default function AdminLoginPage() {
  const router = useRouter();

  // Form state
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // If already logged in, redirect to dashboard
  useEffect(() => {
    if (typeof window !== "undefined") {
      const session = sessionStorage.getItem(ADMIN_CONFIG.sessionKey);
      if (session === "authenticated") {
        router.replace("/admin");
      }
    }
  }, [router]);

  // --- Handle login submit (MOCK) ---

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!username || !password) {
      setError("Please enter both username and password.");
      return;
    }

    setLoading(true);

    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 800));

    // Check credentials against mock config
    if (
      username === ADMIN_CONFIG.username &&
      password === ADMIN_CONFIG.password
    ) {
      // Set sessionStorage flag (NOT secure — replace with real auth)
      sessionStorage.setItem(ADMIN_CONFIG.sessionKey, "authenticated");
      router.push("/admin");
    } else {
      setError("Invalid username or password.");
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
            {/* --- Username --- */}
            <div>
              <label className="mb-1 block text-sm font-medium text-brand-black">
                Username
              </label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="admin"
                autoComplete="username"
                className="w-full rounded-xl border border-brand-gray-border bg-white px-4 py-3 text-brand-black placeholder:text-brand-gray-mid focus:border-brand-orange focus:outline-none focus:ring-2 focus:ring-brand-orange/20"
              />
            </div>

            {/* --- Password --- */}
            <div>
              <label className="mb-1 block text-sm font-medium text-brand-black">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                autoComplete="current-password"
                className="w-full rounded-xl border border-brand-gray-border bg-white px-4 py-3 text-brand-black placeholder:text-brand-gray-mid focus:border-brand-orange focus:outline-none focus:ring-2 focus:ring-brand-orange/20"
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
                  <svg className="h-5 w-5 animate-spin" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                  Authenticating…
                </span>
              ) : (
                "Log In"
              )}
            </button>
          </form>

          {/* --- Demo credentials hint --- */}
          <div className="mt-6 rounded-xl bg-brand-gray-light p-3 text-center text-xs text-brand-gray-mid">
            Demo credentials — Username:{" "}
            <span className="font-mono font-semibold text-brand-black">admin</span>
            {"  "}Password:{" "}
            <span className="font-mono font-semibold text-brand-black">hoophouse502</span>
          </div>
        </div>

        {/* --- Back to site --- */}
        <p className="mt-6 text-center text-sm text-brand-gray-mid">
          <a href="/" className="text-brand-orange hover:underline">
            &larr; Back to site
          </a>
        </p>
      </div>
    </section>
  );
}