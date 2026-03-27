import { NextRequest, NextResponse } from "next/server";

/**
 * Contact form handler.
 *
 * OPTIE A – Web3Forms:
 * Zet in .env.local:
 *   WEB3FORMS_ACCESS_KEY=YOUR_ACCESS_KEY
 * Vervang YOUR_ACCESS_KEY door je key (na aanmelden op web3forms.com).
 *
 * OPTIE B – Geen WEB3FORMS_ACCESS_KEY:
 * Dan retourneert deze route altijd 200 (geschikt voor test; je kunt later
 * e-mail sturen of een andere provider koppelen).
 */
const WEB3FORMS_ACCESS_KEY = process.env.WEB3FORMS_ACCESS_KEY;

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

  if (WEB3FORMS_ACCESS_KEY) {
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `Contactformulier Axanet: ${naam.trim()}`,
          name: naam.trim(),
          message: `Organisatie: ${organisatie.trim()}\n\nBericht:\n${bericht?.trim() ?? ""}`,
          from_name: naam.trim(),
          naam: naam.trim(),
          organisatie: organisatie.trim(),
          email: email.trim(),
          bericht: bericht?.trim() ?? "",
        }),
      });

      if (!res.ok) {
        const text = await res.text();
        console.error("Web3Forms error:", res.status, text);
        return NextResponse.json(
          { error: "Versturen mislukt" },
          { status: 502 }
        );
      }

      const data = (await res.json()) as { success?: boolean; message?: string };
      if (!data.success) {
        console.error("Web3Forms API failure:", data);
        return NextResponse.json(
          { error: data.message ?? "Versturen mislukt" },
          { status: 502 }
        );
      }
    } catch (err) {
      console.error("Web3Forms fetch error:", err);
      return NextResponse.json(
        { error: "Versturen mislukt" },
        { status: 502 }
      );
    }
  }

  return NextResponse.json({ ok: true });
}
