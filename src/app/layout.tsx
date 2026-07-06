/**
 * ============================================================================
 * Root Layout (Server Component)
 * ============================================================================
 *
 * Wraps every page. Loads Anton + Epilogue + Bebas Neue via next/font/google,
 * sets global metadata, injects JSON-LD structured data for AEO,
 * and renders the Navbar + Footer around page content.
 *
 * Typography (matching AmeriSports):
 *   Bebas Neue   → Headings (h1, h2, h3) — bold condensed sans-serif, uppercase
 *   Epilogue     → Body text, nav, buttons — modern sans-serif (400/700)
 *
 * In Next.js 16 App Router, the root layout MUST export a default component
 * that returns <html><body>…</body></html>. Only one root layout per app.
 * ============================================================================ */

import type { Metadata } from "next";
import { Anton, Epilogue, Bebas_Neue } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SITE } from "@/lib/data";
import { rootMetadata, hoophouseJsonLd } from "@/lib/seo";

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

// Bebas Neue — athletic condensed display font for global headings.
const bebasNeue = Bebas_Neue({
  variable: "--font-bebas-neue",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

// --- Metadata (SEO) --------------------------------------------------------
export const metadata: Metadata = rootMetadata;

// --- JSON-LD Structured Data (AEO) -----------------------------------------
// Injected into <head> for search engine rich results and answer engines.
// Uses serialize-javascript to safely embed the object as a JSON string.
const jsonLdString = JSON.stringify(hoophouseJsonLd);

// --- Component -------------------------------------------------------------

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${anton.variable} ${epilogue.variable} ${bebasNeue.variable} h-full antialiased`}
    >
      <head>
        {/* JSON-LD Structured Data — Organization + LocalBusiness + FAQPage */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLdString }}
        />
      </head>

      <body className="min-h-full flex flex-col bg-black">
        {/* GoFundMe Donation Banner — black bg, gold text, static */}
        <div
          className="flex w-full items-center justify-center bg-black py-2.5"
          role="region"
          aria-label="Donation announcement"
        >
          <a
            href="https://gofund.me/8072dffdc"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-[#F2C311] underline decoration-2 underline-offset-2 transition-opacity hover:opacity-80"
          >
            We are accepting donations. Click here to donate to our GoFundMe!
          </a>
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
