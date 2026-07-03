/**
 * ============================================================================
 * Root Layout (Server Component)
 * ============================================================================
 *
 * Wraps every page. Loads Inter font via next/font/google, sets global
 * metadata, and renders the Navbar + Footer around page content.
 *
 * In Next.js 16 App Router, the root layout MUST export a default component
 * that returns <html><body>…</body></html>. Only one root layout per app.
 * ============================================================================
 */

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SITE } from "@/lib/data";

// --- Fonts -----------------------------------------------------------------
// Inter — modern, highly legible sans-serif. Matches the flat, minimalist
// design system. The `variable` prop injects a CSS custom property
// (--font-inter) that globals.css maps to the Tailwind --font-sans token.

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

// --- Metadata (SEO) --------------------------------------------------------
// @see https://nextjs.org/docs/app/api-reference/functions/generate-metadata
export const metadata: Metadata = {
  title: `${SITE.name} — ${SITE.tagline}`,
  description:
    "Self-service court rental in Louisville, KY. Book online 24/7, get your access code, and play. No staff, no hassle — just book and ball.",
  keywords: [
    "court rental",
    "Louisville gym rental",
    "Hoophouse502",
    "self-service court",
    "court booking Louisville KY",
  ],
  openGraph: {
    title: `${SITE.name} — ${SITE.tagline}`,
    description:
      "Self-service court rental in Louisville, KY. Book online 24/7 and play on your schedule.",
    type: "website",
  },
};

// --- Component -------------------------------------------------------------

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white">
        {/* Navbar — client component (mobile menu toggle needs useState) */}
        <Navbar />

        {/* Page content injected by the router */}
        <main className="flex-1">{children}</main>

        {/* Footer — server component (static content) */}
        <Footer />
      </body>
    </html>
  );
}