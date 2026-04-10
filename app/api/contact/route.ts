import { NextRequest, NextResponse } from "next/server";

/**
 * Contact form handler (server-side Formspree).
 *
 * Zet in .env.local / Vercel:
 *   FORMSPREE_ENDPOINT=https://formspree.io/f/YOUR_FORM_ID
 */
const FORMSPREE_ENDPOINT = process.env.FORMSPREE_ENDPOINT;

type Body = {
  naam?: string;
  organisatie?: string;
  email?: string;
  bericht?: string;
};

export async function POST(request: NextRequest) {
  let body: Body = {};
  try {
    body = (await request.json()) as Body;
  } catch {
    return NextResponse.json(
      { error: "Ongeldige body" },
      { status: 400 }
    );
  }

  const { naam, email, bericht, organisatie } = body;
  if (!naam?.trim() || !organisatie?.trim() || !email?.trim()) {
    return NextResponse.json(
      { error: "Naam, organisatie en e-mail zijn verplicht" },
      { status: 400 }
    );
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return NextResponse.json(
      { error: "Ongeldig e-mailadres" },
      { status: 400 }
    );
  }

  if (FORMSPREE_ENDPOINT) {
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          naam: naam.trim(),
          organisatie: organisatie.trim(),
          email: email.trim(),
          bericht: bericht?.trim() ?? "",
          _subject: `Contactformulier Axanet: ${naam.trim()}`,
        }),
      });

      if (!res.ok) {
        const raw = await res.text();
        let message = "Versturen mislukt";
        try {
          const payload = JSON.parse(raw) as {
            error?: string;
            errors?: Array<{ message?: string }>;
          };
          message =
            payload.error ||
            payload.errors?.[0]?.message ||
            raw.trim().slice(0, 240) ||
            message;
        } catch {
          message = raw.trim().slice(0, 240) || message;
        }

        console.error("Formspree error:", res.status, message);
        return NextResponse.json({ error: message }, { status: 502 });
      }
    } catch (err) {
      console.error("Formspree fetch error:", err);
      return NextResponse.json(
        { error: "Versturen mislukt" },
        { status: 502 }
      );
    }
  }

  return NextResponse.json({ ok: true });
}
