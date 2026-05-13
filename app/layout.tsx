import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { OrganizationJsonLd } from "@/components/OrganizationJsonLd";
import { getSiteUrl, seoKeywords } from "@/lib/seo";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const siteUrl = getSiteUrl();
const defaultTitle = "Axanet | IT-beheer, ICT-support en werkplekbeheer in Nederland";
const defaultDescription =
  "Axanet levert IT-beheer, servicedesk, werkplekbeheer en Microsoft 365 voor organisaties in Nederland. Zoek je Axanet ICT of Axanet IT? Dit is de officiële site.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: defaultTitle,
  description: defaultDescription,
  keywords: [...seoKeywords],
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    title: defaultTitle,
    description: defaultDescription,
    type: "website",
    locale: "nl_NL",
    url: siteUrl,
    siteName: "Axanet",
    images: [{ url: "/hero.png", width: 1200, height: 630, alt: "Axanet" }],
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: defaultDescription,
    images: ["/hero.png"],
  },
  icons: {
    icon: "/favicon.png",
  },
  ...(process.env.GOOGLE_SITE_VERIFICATION
    ? { verification: { google: process.env.GOOGLE_SITE_VERIFICATION } }
    : {}),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl" className={inter.variable}>
      <body className="min-h-screen flex flex-col font-sans bg-bg-light">
        <OrganizationJsonLd />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
