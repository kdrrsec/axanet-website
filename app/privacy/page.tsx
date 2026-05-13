import type { Metadata } from "next";
import Link from "next/link";
import { privacy as content } from "@/lib/content";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "Privacy – Axanet",
  description: "Hoe Axanet omgaat met uw persoonsgegevens.",
  alternates: { canonical: "/privacy" },
  openGraph: {
    title: "Privacy – Axanet",
    description: "Privacy-informatie van Axanet.",
  },
};

export default function PrivacyPage() {
  return (
    <Section large>
      <div className="max-w-2xl">
        <h1 className="text-3xl font-bold text-primary">{content.title}</h1>
        <p className="mt-4 text-text-muted">{content.lead}</p>
        <div className="mt-8 whitespace-pre-line text-text-muted">
          {content.content}
        </div>
        <p className="mt-8 text-text-muted">
          {content.contactVerwijzing}{" "}
          <Link
            href="/contact"
            className="text-accent hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 rounded"
          >
            contactpagina
          </Link>
          .
        </p>
      </div>
    </Section>
  );
}
