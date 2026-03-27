import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Axanet - IT Beheer & Support",
  description:
    "Betrouwbare IT-ondersteuning, servicedesk, werkplekbeheer en Microsoft 365 voor bedrijven en organisaties.",
  openGraph: {
    title: "Axanet - IT Beheer & Support",
    description:
      "Betrouwbare IT-ondersteuning, servicedesk, werkplekbeheer en Microsoft 365 voor bedrijven en organisaties.",
    type: "website",
  },
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl" className={inter.variable}>
      <body className="min-h-screen flex flex-col font-sans bg-bg-light">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
