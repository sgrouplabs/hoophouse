/**
 * ============================================================================
 * Root Layout (Server Component)
 * ============================================================================
 *
 * Wraps every page. Loads Google fonts (Geist), sets global metadata, and
 * renders the Navbar + Footer around page content.
 *
 * In Next.js 16 App Router, the root layout MUST export a default component
 * that returns <html><body>…</body></html>. Only one root layout per app.
 * ============================================================================
 */

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SITE } from "@/lib/data";

// --- Fonts -----------------------------------------------------------------
// Geist is the default Next.js font — clean and modern. The `variable` prop
// injects a CSS custom property (--font-geist-sans) that globals.css maps to
// the Tailwind `--font-sans` token.

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// --- Metadata (SEO) --------------------------------------------------------
// @see https://nextjs.org/docs/app/api-reference/functions/generate-metadata
export const metadata: Metadata = {
  title: `${SITE.name} — ${SITE.tagline}`,
  description:
    "Rent a full-size basketball court by the hour in Louisville, KY. NBA-grade hardwood, pro lighting, locker rooms. Book online in seconds.",
  keywords: [
    "basketball court rental",
    "Louisville gym rental",
    "Hoophouse502",
    "basketball Louisville KY",
    "court booking",
  ],
  openGraph: {
    title: `${SITE.name} — ${SITE.tagline}`,
    description:
      "Rent a full-size basketball court by the hour in Louisville, KY. Book online in seconds.",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
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