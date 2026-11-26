import type { Metadata } from "next";
import { Hanken_Grotesk, Newsreader } from "next/font/google";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import "./globals.css";

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
});

const hanken = Hanken_Grotesk({
  variable: "--font-hanken",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: { default: "BrightPath · Tutors across the Philippines", template: "%s · BrightPath" },
  description: "Find tutors for academics, languages, coding and test prep, online or near you in the Philippines.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${newsreader.variable} ${hanken.variable} antialiased`}>
      <body className="flex min-h-svh flex-col font-sans">
        <SiteHeader />
        <main id="main" className="flex-1">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
