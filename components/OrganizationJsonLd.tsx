import { getSiteUrl } from "@/lib/seo";

export function OrganizationJsonLd() {
  const url = getSiteUrl();
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Axanet",
    url,
    description:
      "IT-beheer, servicedesk, werkplekbeheer en Microsoft 365-ondersteuning voor organisaties in Nederland.",
    areaServed: {
      "@type": "Country",
      name: "Nederland",
    },
    sameAs: [] as string[],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
