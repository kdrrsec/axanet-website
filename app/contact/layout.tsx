import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact – Axanet",
  description:
    "Neem contact op met Axanet voor IT support, servicedesk of werkplekbeheer.",
  openGraph: {
    title: "Contact – Axanet",
    description: "Contact opnemen met Axanet.",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
