import type { Metadata, Viewport } from "next";
import { Fraunces, Manrope, JetBrains_Mono } from "next/font/google";
import { personal } from "@/data/personal";
import "./globals.css";

/* ─────────────────────────────────────────
 *  Fonts
 * ───────────────────────────────────────── */
const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  axes: ["SOFT", "opsz"],
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

/* ─────────────────────────────────────────
 *  SEO + social metadata
 * ───────────────────────────────────────── */
export const metadata: Metadata = {
  title: `${personal.name} — ${personal.title} · Faisalabad`,
  description: `${personal.title} with 2 years of experience building responsive, scalable web apps with React.js, Next.js, and Tailwind. Currently at BixoSoft, ${personal.location}.`,
  keywords: [
    "Muhammad Umar",
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "Faisalabad",
    "Pakistan",
    "BixoSoft",
    "Web Developer",
    "TypeScript",
    "Tailwind CSS",
  ],
  authors: [{ name: personal.name, url: personal.social.github.url }],
  creator: personal.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: `${personal.name} — Portfolio`,
    title: `${personal.name} — ${personal.title}`,
    description: personal.tagline,
  },
  twitter: {
    card: "summary_large_image",
    title: `${personal.name} — ${personal.title}`,
    description: personal.tagline,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#F1EBDC",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${manrope.variable} ${jetbrainsMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
