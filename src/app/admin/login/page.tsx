"use client";

/**
 * ============================================================================
 * Admin Login — Redirector
 * ============================================================================
 *
 * Route: /admin/login
 *
 * All authentication now flows through /login. This page simply redirects
 * users to the canonical login page. Kept as a redirect to avoid breaking
 * any existing bookmarks or links to /admin/login.
 * ============================================================================ */

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function AdminLoginRedirectPage() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/login");
  }, [router]);

  // Show nothing — user is being redirected
  return null;
}
