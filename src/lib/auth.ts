/**
 * ============================================================================
 * Auth Utility — Authentication Skeleton
 * ============================================================================
 *
 * Placeholder auth module for Phase 1. All credential checking is deferred
 * to a real backend (API route / auth provider) in Phase 2.
 *
 * SECURITY NOTES:
 *   - NO passwords stored or compared here.
 *   - Session is currently sessionStorage-only (client-side, NOT secure).
 *   - Replace with NextAuth.js / Clerk / Supabase Auth before production.
 *   - Replace login() with a fetch() to an API endpoint that verifies
 *     credentials server-side and returns a session token.
 * ============================================================================ */

// --- Session helpers ---

const SESSION_KEY = "hh502_session";

export function isAuthenticated(): boolean {
  if (typeof window === "undefined") return false;
  return sessionStorage.getItem(SESSION_KEY) === "authenticated";
}

export function getSessionToken(): string | null {
  if (typeof window === "undefined") return null;
  return sessionStorage.getItem(SESSION_KEY);
}

// --- Auth operations ---

/**
 * Attempt to authenticate a user with email + password.
 *
 * TODO: Replace with a real API call (e.g. fetch("/api/auth/login", ...)).
 *       The server should verify credentials against a database, hash passwords,
 *       and return a session token (JWT, cookie, etc.).
 *
 * @param email    - User's email address
 * @param password - User's password
 * @returns Promise resolving to { success: true } or { success: false, error: string }
 */
export async function login(
  email: string,
  password: string
): Promise<{ success: boolean; error?: string }> {
  if (!email || !password) {
    return { success: false, error: "Email and password are required." };
  }

  // TODO: Replace this stub with a real server-side credential check.
  // Example:
  //   const res = await fetch("/api/auth/login", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify({ email, password }),
  //   });
  //   const data = await res.json();
  //   if (!res.ok) return { success: false, error: data.message };
  //   sessionStorage.setItem(SESSION_KEY, data.token);
  //   return { success: true };

  // --- Development stub (NO credentials here — just for UI flow) ---
  await new Promise((r) => setTimeout(r, 500));
  sessionStorage.setItem(SESSION_KEY, "authenticated");
  return { success: true };
}

/**
 * Log the current user out and clear the session.
 *
 * TODO: Optionally call a server-side logout endpoint to invalidate the
 *       session token / revoke the JWT before clearing the client flag.
 */
export function logout(): void {
  sessionStorage.removeItem(SESSION_KEY);
}
