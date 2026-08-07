import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { site } from "@/lib/site";
import { jsonLd } from "@/lib/json-ld";

const manrope = localFont({
  src: [
    { path: "../public/fonts/manrope-wght--extralight.ttf", weight: "200" },
    { path: "../public/fonts/manrope-wght--light.ttf", weight: "300" },
    { path: "../public/fonts/manrope-wght--regular.ttf", weight: "400" },
    { path: "../public/fonts/manrope-wght--medium.ttf", weight: "500" },
    { path: "../public/fonts/manrope-wght--semibold.ttf", weight: "600" },
    { path: "../public/fonts/manrope-wght--bold.ttf", weight: "700" },
    { path: "../public/fonts/manrope-wght--extrabold.ttf", weight: "800" },
  ],
  variable: "--font-manrope",
  display: "swap",
});

const sora = localFont({
  src: [
    { path: "../public/fonts/sora-wght--thin.ttf", weight: "100" },
    { path: "../public/fonts/sora-wght--extralight.ttf", weight: "200" },
    { path: "../public/fonts/sora-wght--light.ttf", weight: "300" },
    { path: "../public/fonts/sora-wght--regular.ttf", weight: "400" },
    { path: "../public/fonts/sora-wght--medium.ttf", weight: "500" },
    { path: "../public/fonts/sora-wght--semibold.ttf", weight: "600" },
    { path: "../public/fonts/sora-wght--bold.ttf", weight: "700" },
    { path: "../public/fonts/sora-wght--extrabold.ttf", weight: "800" },
  ],
  variable: "--font-sora",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Toplixa — Top Up Game Instan, Aman & Murah",
    template: "%s — Toplixa",
  },
  description: site.description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    siteName: site.name,
    locale: site.locale,
    title: "Toplixa — Top Up Game Instan, Aman & Murah",
    description: "Top up UC, diamond, dan CP untuk PUBG Mobile, Mobile Legends, Free Fire, Magic Chess Go Go, dan Call of Duty Mobile. Proses otomatis 24 jam.",
    url: site.url,
    images: [{ url: site.ogImage, width: 1200, height: 624, alt: "Toplixa — Top Up Game Instan, Aman & Murah" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Toplixa — Top Up Game Instan, Aman & Murah",
    description: "Top up UC, diamond, dan CP untuk 5 game populer. Proses otomatis 24 jam.",
    images: [site.ogImage],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="id"
      className={`${manrope.variable} ${sora.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <meta name="theme-color" content={site.themeColor} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
