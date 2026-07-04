/**
 * ============================================================================
 * Root Layout (Server Component)
 * ============================================================================
 *
 * Wraps every page. Loads Anton + Epilogue via next/font/google, sets global
 * metadata, and renders the Navbar + Footer around page content.
 *
 * Typography (matching AmeriSports):
 *   Anton    → Headings (h1, h2, h3) — bold condensed sans-serif, uppercase
 *   Epilogue → Body text, nav, buttons — modern sans-serif (400/700)
 *
 * In Next.js 16 App Router, the root layout MUST export a default component
 * that returns <html><body>…</body></html>. Only one root layout per app.
 * ============================================================================
 */

import type { Metadata } from "next";
import { Anton, Epilogue } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SITE } from "@/lib/data";

// --- Fonts -----------------------------------------------------------------
// Anton — bold condensed display font for headings. Matches AmeriSports.
const anton = Anton({
  variable: "--font-anton",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

// Epilogue — modern sans-serif for body, nav, buttons. Matches AmeriSports.
const epilogue = Epilogue({
  variable: "--font-epilogue",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
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
      className={`${anton.variable} ${epilogue.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white">
        {/* GoFundMe Donation Banner — Full-width animated ticker at very top */}
        <div className="donation-banner" role="region" aria-label="Donation announcement">
          <div className="donation-banner__track" aria-hidden="true">
            <a
              href="https://gofund.me/8072dffdc"
              target="_blank"
              rel="noopener noreferrer"
              className="donation-banner__link"
            >
              We are accepting donations. Click here to donate to our GoFundMe!
            </a>
          </div>
        </div>

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