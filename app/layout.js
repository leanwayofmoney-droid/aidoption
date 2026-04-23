import "./globals.css";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const BASE = "https://ai-doption.nl";

export const metadata = {
  metadataBase: new URL(BASE),
  title: {
    default: "AIdoption — AI voor je dagelijkse leven",
    template: "%s — AIdoption",
  },
  description:
    "Praktische AI-fixes voor je dagelijkse leven. Kopieer de prompt en bespaar direct tijd. Geen technische kennis nodig.",
  keywords: [
    "AI tips", "ChatGPT gebruiken", "Claude AI", "AI productiviteit",
    "AI voor beginners", "AI dagelijks leven", "AI tijdsbesparing",
    "AI prompts Nederlands", "kunstmatige intelligentie tips",
  ],
  authors: [{ name: "Stefan", url: BASE }],
  creator: "AIdoption",
  publisher: "AIdoption",
  openGraph: {
    type: "website",
    locale: "nl_NL",
    url: BASE,
    siteName: "AIdoption",
    title: "AIdoption — AI voor je dagelijkse leven",
    description:
      "Praktische AI-fixes voor je dagelijkse leven. Kopieer de prompt en bespaar direct tijd.",
    images: [
      {
        url: "/og-default.png",
        width: 1200,
        height: 630,
        alt: "AIdoption — Praktische AI-fixes",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AIdoption — AI voor je dagelijkse leven",
    description:
      "Praktische AI-fixes voor je dagelijkse leven. Kopieer de prompt en bespaar direct tijd.",
    images: ["/og-default.png"],
  },
  alternates: {
    canonical: BASE,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Voeg hier je Google Search Console verificatiecode toe:
    // google: "JOUW_VERIFICATIE_CODE",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="nl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,400;0,9..144,600;1,9..144,300;1,9..144,400&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen flex flex-col">
        {/* Organization schema — eenmalig sitebreed voor Google rich snippets */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "AIdoption",
              url: BASE,
              logo: `${BASE}/og-default.png`,
              description: "Praktische AI-fixes voor je dagelijkse leven. Kopieer de prompt en bespaar direct tijd. Geen technische kennis nodig.",
              inLanguage: "nl-NL",
              founder: { "@type": "Person", name: "Stefan" },
              sameAs: [],
            }),
          }}
        />
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
