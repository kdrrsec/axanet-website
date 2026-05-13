/**
 * Basis-URL voor canonicals, sitemap en Open Graph.
 * Zet in Vercel: NEXT_PUBLIC_SITE_URL=https://www.axanet.nl
 */
export function getSiteUrl(): string {
  const raw = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (raw) return raw.replace(/\/$/, "");
  return "https://www.axanet.nl";
}

export const seoKeywords = [
  "Axanet",
  "Axanet ICT",
  "Axanet IT",
  "IT beheer Nederland",
  "IT support Nederland",
  "werkplekbeheer",
  "servicedesk",
  "Microsoft 365 beheer",
  "IT-partner MKB",
] as const;
