import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "SpeechCloud — AI Voice Ordering voor Restaurants",
  description: "AI neemt de telefoon op. Uw klant bestelt. U draait omzet.",
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl" className="dark scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
