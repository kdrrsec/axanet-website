import type { Metadata } from "next";
import { over as content } from "@/lib/content";
import { Section } from "@/components/Section";
import { Card } from "@/components/Card";
import { Button } from "@/components/Button";

export const metadata: Metadata = {
  title: "Over Axanet – Axanet",
  description:
    "Wie is Axanet: IT support, servicedesk en werkplekbeheer voor bedrijven en organisaties. Werkwijze in drie stappen.",
  openGraph: {
    title: "Over Axanet – Axanet",
    description: "Werkwijze en wat u kunt verwachten van Axanet.",
  },
};

export default function OverPage() {
  return (
    <>
      <Section large>
        <div className="max-w-2xl">
          <h1 className="text-3xl font-bold text-primary">
            {content.intro.title}
          </h1>
          <div className="mt-4 space-y-4 text-text-muted">
            {content.intro.lead.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </div>

        <h2 className="mt-12 text-xl font-semibold text-primary">
          {content.werkwijze.title}
        </h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-3">
          {content.werkwijze.steps.map((step, i) => (
            <Card key={i}>
              <span className="text-sm font-medium text-accent">
                Stap {i + 1}
              </span>
              <h3 className="mt-2 font-semibold text-primary">{step.title}</h3>
              <p className="mt-2 text-sm text-text-muted">{step.text}</p>
            </Card>
          ))}
        </div>

        <h2 className="mt-12 text-xl font-semibold text-primary">
          {content.verwachten.title}
        </h2>
        <ul className="mt-4 list-inside list-disc space-y-2 text-text-muted">
          {content.verwachten.bullets.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>

        <div className="mt-10">
          <Button href="/contact" variant="primary">
            Plan kennismaking
          </Button>
          <p className="mt-2 text-sm text-text-muted">
            Liever eerst mailen of bellen? Gebruik de contactgegevens op de contactpagina.
          </p>
        </div>
      </Section>
    </>
  );
}
