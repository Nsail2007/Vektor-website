import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import PlausibleScript from "./plausible-script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://vektor.ai"),
  title: "Vektor Voice Assistant — Control Your PC with Voice | Premium AI for Windows",
  description:
    "Vektor Voice Assistant: Premium AI for Windows PC. Launch apps, automate workflows, and control professional tools using natural voice commands. Fast, secure, and privacy-first. Download for Windows 10/11.",
  icons: {
    icon: [
      { url: "/logo.png", sizes: "32x32", type: "image/png" },
      { url: "/logo.png", sizes: "16x16", type: "image/png" },
    ],
    shortcut: [
      { url: "/logo.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/logo.png", sizes: "180x180", type: "image/png" },
    ],
  },
  openGraph: {
    title: "Vektor Voice Assistant — Control Your PC with Voice | Premium AI for Windows",
    description:
      "Vektor Voice Assistant: Premium AI for Windows PC. Launch apps, automate workflows, and control professional tools using natural voice commands. Fast, secure, and privacy-first. Download for Windows 10/11.",
    url: "https://vektor.ai/",
    siteName: "Vektor Voice Assistant",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Vektor Voice Assistant — Control Your PC with Voice",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vektor Voice Assistant — Control Your PC with Voice | Premium AI for Windows",
    description:
      "Vektor Voice Assistant: Premium AI for Windows PC. Launch apps, automate workflows, and control professional tools using natural voice commands. Fast, secure, and privacy-first. Download for Windows 10/11.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://vektor.ai/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  other: {
    "og:locale": "en_US",
    "og:locale:alternate": "en_CA",
    "geo.region": "US;CA",
    "geo.placename": "United States, Canada",
    "geo.position": "45;-100",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <PlausibleScript />
        {children}
      </body>
    </html>
  );
}
