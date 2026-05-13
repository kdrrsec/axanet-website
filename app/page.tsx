import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { home } from "@/lib/content";
import { Section } from "@/components/Section";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

function Checkmark() {
  return (
    <svg
      className="h-5 w-5 flex-shrink-0 text-accent"
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden
    >
      <path
        fillRule="evenodd"
        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default function HomePage() {
  return (
    <>
      {/* Hero – links light block, rechts afbeelding met diagonale rand */}
      <section className="relative flex min-h-[460px] flex-row lg:min-h-[480px]">
        <div className="relative z-10 flex w-[52%] flex-col justify-center bg-bg-light px-4 py-12 sm:px-6 sm:py-20 lg:w-[45%] lg:pl-[max(1rem,calc((100%-72rem)/2+1rem))] lg:pr-12">
          <div className="mx-auto w-full max-w-2xl lg:mx-0">
            <h1 className="text-2xl font-bold tracking-tight text-primary sm:text-4xl">
              {home.hero.title}
            </h1>
            <div className="mt-3 space-y-2 text-sm text-text-muted sm:mt-4 sm:text-lg">
              {home.hero.subtitle.map((line, i) => (
                <p key={i}>{line}</p>
              ))}
            </div>
            <div className="mt-6 flex flex-col gap-2 sm:mt-8 sm:flex-row sm:flex-wrap sm:gap-4">
              <Link
                href="/contact"
                className="inline-flex w-full items-center justify-center gap-1.5 rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-primary/90 hover:translate-y-0.5 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 sm:w-auto"
              >
                {home.hero.ctaPrimary}
                <span aria-hidden="true">→</span>
              </Link>
              <Button href="/diensten" variant="secondary" className="w-full sm:w-auto">
                {home.hero.ctaSecondary}
              </Button>
            </div>
            <ul className="mt-6 hidden flex-wrap gap-x-8 gap-y-2 text-text-muted sm:mt-8 sm:flex" role="list">
              {home.hero.bullets.map((label, i) => (
                <li key={i} className="flex items-center gap-2">
                  <Checkmark />
                  <span>{label}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="relative min-h-[460px] w-[48%] lg:min-h-[520px] lg:w-[55%]">
          <Image
            src="/hero.png"
            alt=""
            fill
            className="object-cover object-[85%_center] lg:object-center [clip-path:polygon(12%_0,100%_0,100%_100%,0_100%)]"
            priority
            sizes="(max-width: 640px) 48vw, (max-width: 1024px) 50vw, 55vw"
          />
        </div>
      </section>

      {/* IT zonder ruis */}
      <Section alt>
        <div className="max-w-2xl">
          <h2 className="text-2xl font-semibold text-primary">
            {home.sectionNoRuis.title}
          </h2>
          <div className="mt-3 space-y-2 text-text-muted">
            {home.sectionNoRuis.body.map((line, i) => (
              <p key={i}>{line}</p>
            ))}
          </div>
        </div>
      </Section>

      {/* Diensten preview – scrollbare cards */}
      <Section>
        <h2 className="text-2xl font-semibold text-primary">
          {home.dienstenPreview.title}
        </h2>
        <div className="mt-8 -mx-4 px-4 sm:-mx-6 sm:px-6 overflow-x-auto scroll-smooth">
          <div className="flex gap-6 pb-2 min-w-0">
            <Link href="/diensten#servicedesk" className="flex-shrink-0 w-[280px] sm:w-[320px] focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 rounded-xl">
              <Card className="h-full">
                <h3 className="font-semibold text-primary">
                  {home.dienstenPreview.servicedesk.title}
                </h3>
                <p className="mt-1 text-xs font-medium text-accent">
                  {home.dienstenPreview.servicedesk.subtitle}
                </p>
                <p className="mt-2 text-sm text-text-muted">
                  {home.dienstenPreview.servicedesk.description}
                </p>
              </Card>
            </Link>
            <Link href="/diensten#werkplek" className="flex-shrink-0 w-[280px] sm:w-[320px] focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 rounded-xl">
              <Card className="h-full">
                <h3 className="font-semibold text-primary">
                  {home.dienstenPreview.werkplek.title}
                </h3>
                <p className="mt-1 text-xs font-medium text-accent">
                  {home.dienstenPreview.werkplek.subtitle}
                </p>
                <p className="mt-2 text-sm text-text-muted">
                  {home.dienstenPreview.werkplek.description}
                </p>
              </Card>
            </Link>
            <Link href="/diensten#m365" className="flex-shrink-0 w-[280px] sm:w-[320px] focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 rounded-xl">
              <Card className="h-full">
                <h3 className="font-semibold text-primary">
                  {home.dienstenPreview.m365.title}
                </h3>
                <p className="mt-1 text-xs font-medium text-accent">
                  {home.dienstenPreview.m365.subtitle}
                </p>
                <p className="mt-2 text-sm text-text-muted">
                  {home.dienstenPreview.m365.description}
                </p>
              </Card>
            </Link>
          </div>
        </div>
        <p className="mt-6">
          <Link
            href="/diensten"
            className="font-medium text-accent hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 rounded"
          >
            {home.dienstenPreview.linkText} →
          </Link>
        </p>
      </Section>

      {/* Dark CTA block */}
      <section className="bg-primary py-16 text-white">
        <Container>
          <div className="max-w-xl">
            <h2 className="text-2xl font-semibold">
              {home.ctaBlock.title}
            </h2>
            <p className="mt-3 text-white/90">
              {home.ctaBlock.body}
            </p>
            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl bg-accent px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-accent/90 hover:translate-y-0.5 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
              >
                {home.ctaBlock.button}
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
