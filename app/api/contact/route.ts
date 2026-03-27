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
          replyto: email.trim(),
          naam: naam.trim(),
          organisatie: organisatie.trim(),
          email: email.trim(),
          bericht: bericht?.trim() ?? "",
        }),
      });

      const raw = await res.text();
      let payload: { success?: boolean; message?: string } = {};
      try {
        payload = JSON.parse(raw) as { success?: boolean; message?: string };
      } catch {
        console.error("Web3Forms non-JSON response:", res.status, raw);
        return NextResponse.json(
          {
            error:
              raw.trim().slice(0, 400) ||
              `E-maildienst reageerde onverwacht (HTTP ${res.status}).`,
          },
          { status: 502 }
        );
      }

      if (!res.ok) {
        console.error("Web3Forms HTTP error:", res.status, payload, raw);
        return NextResponse.json(
          {
            error:
              payload.message ||
              raw.trim().slice(0, 400) ||
              `Versturen mislukt (HTTP ${res.status}).`,
          },
          { status: 502 }
        );
      }

      if (!payload.success) {
        console.error("Web3Forms API failure:", payload);
        return NextResponse.json(
          { error: payload.message ?? "Versturen mislukt" },
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
