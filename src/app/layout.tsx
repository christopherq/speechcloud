import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
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
    title: "SpeechCloud — AI Voice Ordering voor Restaurants",
    description: "Elke oproep beantwoord. Elke bestelling binnen. De AI-telefoonagent voor restaurants.",
    url: "https://speechcloud.nl",
    siteName: "SpeechCloud",
    type: "website",
    locale: "nl_NL",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl" className="scroll-smooth">
      <body className={inter.className}>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
