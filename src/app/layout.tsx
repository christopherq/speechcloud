import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Script from "next/script";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SpeechCloud — AI Voice Ordering voor Restaurants",
  description: "De AI-telefoonagent die klinkt als uw beste medewerker. Neemt 24/7 op, plaatst bestellingen direct in uw systeem.",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "SpeechCloud — Elke oproep beantwoord. Elke bestelling binnen.",
    description: "De AI-telefoonagent voor restaurants. Neemt 24/7 op in vloeiend Nederlands, plaatst bestellingen direct in uw systeem.",
    url: "https://speechcloud.nl",
    siteName: "SpeechCloud",
    type: "website",
    locale: "nl_NL",
    images: [
      {
        url: "https://speechcloud.nl/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "SpeechCloud - Elke oproep beantwoord. Elke bestelling binnen.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SpeechCloud — Elke oproep beantwoord. Elke bestelling binnen.",
    description: "De AI-telefoonagent voor restaurants. Neemt 24/7 op in vloeiend Nederlands.",
    images: ["https://speechcloud.nl/og-image.jpg"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl" className="scroll-smooth">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-L1ND38KJVP"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-L1ND38KJVP');
          `}
        </Script>
      </head>
      <body className={inter.className}>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
