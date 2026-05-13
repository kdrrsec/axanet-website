import type { Metadata } from "next";
import { diensten as content } from "@/lib/content";
import { Section } from "@/components/Section";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";

export const metadata: Metadata = {
  title: "Diensten – Axanet",
  description:
    "Servicedesk, werkplekbeheer en Microsoft 365-beheer in Nederland. Duidelijke afspraken, vaste aanspreekpunten.",
  alternates: { canonical: "/diensten" },
  openGraph: {
    title: "Diensten – Axanet",
    description:
      "Servicedesk, werkplekbeheer en Microsoft 365-beheer.",
  },
};

function DienstBlok({
  id,
  title,
  description,
  bullets,
}: {
  id: string;
  title: string;
  description: string;
  bullets: readonly string[];
}) {
  return (
    <section id={id} className="scroll-mt-24">
      <Card className="mb-8">
        <h2 className="text-xl font-semibold text-primary">{title}</h2>
        <p className="mt-3 text-text-muted">{description}</p>
        <h3 className="mt-6 text-sm font-semibold text-primary">Wat u krijgt</h3>
        <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-text-muted">
          {bullets.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>
      </Card>
    </section>
  );
}

export default function DienstenPage() {
  return (
    <>
      <Section large>
        <div className="max-w-2xl">
          <h1 className="text-3xl font-bold text-primary">
            {content.intro.title}
          </h1>
          <p className="mt-4 text-text-muted">{content.intro.lead}</p>
          <ul className="mt-4 list-inside list-disc space-y-1 text-sm text-text-muted">
            <li>Geschikt voor organisaties die hun IT betrouwbaar willen organiseren</li>
            <li>Focus op continuïteit en duidelijke afspraken</li>
            <li>Geschikt als verlengstuk van uw interne IT of als complete IT-partner</li>
          </ul>
        </div>

        <div className="mt-8 space-y-8">
          <DienstBlok
            id="servicedesk"
            title={content.servicedesk.title}
            description={content.servicedesk.description}
            bullets={[...content.servicedesk.bullets]}
          />
          <DienstBlok
            id="werkplek"
            title={content.werkplek.title}
            description={content.werkplek.description}
            bullets={[...content.werkplek.bullets]}
          />
          <DienstBlok
            id="m365"
            title={content.m365.title}
            description={content.m365.description}
            bullets={[...content.m365.bullets]}
          />
        </div>

        <div className="mt-6">
          <Button href="/contact" variant="primary">
            {content.ctaButton}
          </Button>
          <p className="mt-2 text-sm text-text-muted">
            Liever eerst mailen of bellen? Bekijk de contactgegevens op de contactpagina.
          </p>
        </div>
      </Section>
    </>
  );
}
