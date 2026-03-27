"use client";

import { useState, FormEvent } from "react";
import { contact as content } from "@/lib/content";
import { Section } from "@/components/Section";
import { Button } from "@/components/Button";

type FieldErrors = {
  naam?: string;
  organisatie?: string;
  email?: string;
};

const validatie = {
  naam: "Vul uw naam in",
  organisatie: "Vul uw organisatie in",
  emailLeeg: "Vul uw e-mailadres in",
  emailOngeldig: "Vul een geldig e-mailadres in",
};

const WEB3FORMS_SUBMIT_URL = "https://api.web3forms.com/submit";

function parseWeb3FormsResponse(
  raw: string,
  httpStatus: number
): { ok: true } | { ok: false; message: string } {
  if (
    raw.includes("<!DOCTYPE") ||
    raw.includes("<html") ||
    /just a moment/i.test(raw)
  ) {
    return {
      ok: false,
      message:
        "Het formulier kon niet worden verstuurd (beveiligingscontrole). Probeer het opnieuw, of neem contact op via e-mail of telefoon.",
    };
  }

  try {
    const payload = JSON.parse(raw) as { success?: boolean; message?: string };
    if (!payload.success) {
      return {
        ok: false,
        message: payload.message ?? "Versturen mislukt.",
      };
    }
    return { ok: true };
  } catch {
    return {
      ok: false,
      message:
        raw.trim().slice(0, 160) ||
        `Versturen mislukt (HTTP ${httpStatus}).`,
    };
  }
}

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [submitError, setSubmitError] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    const naam = (data.get("naam") as string)?.trim();
    const organisatie = (data.get("organisatie") as string)?.trim();
    const email = (data.get("email") as string)?.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const errors: FieldErrors = {};
    if (!naam) errors.naam = validatie.naam;
    if (!organisatie) errors.organisatie = validatie.organisatie;
    if (!email) errors.email = validatie.emailLeeg;
    else if (!emailRegex.test(email)) errors.email = validatie.emailOngeldig;

    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      setStatus("error");
      return;
    }
    setFieldErrors({});
    setSubmitError("");

    setStatus("sending");

    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY?.trim();
    if (!accessKey) {
      setStatus("error");
      setSubmitError(
        "Het contactformulier is nog niet geconfigureerd. Neem contact op via e-mail of telefoon."
      );
      return;
    }

    const bericht = (data.get("bericht") as string)?.trim() || "";

    try {
      const res = await fetch(WEB3FORMS_SUBMIT_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: accessKey,
          subject: `Contactformulier Axanet: ${naam}`,
          name: naam,
          email,
          message: `Organisatie: ${organisatie}\n\nBericht:\n${bericht}`,
          from_name: naam,
          replyto: email,
          naam,
          organisatie,
          bericht,
        }),
      });

      const raw = await res.text();
      const parsed = parseWeb3FormsResponse(raw, res.status);
      if (!parsed.ok) {
        throw new Error(parsed.message);
      }

      setStatus("success");
      setSubmitError("");
      form.reset();
    } catch (error) {
      setStatus("error");
      setFieldErrors({});
      if (error instanceof Error && error.message) {
        setSubmitError(error.message);
      } else {
        setSubmitError(content.form.error);
      }
    }
  }

  function clearError(field: keyof FieldErrors) {
    setFieldErrors((prev) => {
      const next = { ...prev };
      delete next[field];
      return next;
    });
  }

  return (
    <>
      <Section large>
        <div className="max-w-2xl">
          <h1 className="text-3xl font-bold text-primary">{content.intro.title}</h1>
          <p className="mt-4 text-text-muted">{content.intro.lead}</p>

          <div className="mt-10 border-t border-border pt-10">
            <h2 className="text-lg font-semibold text-primary">
              {content.gegevens.title}
            </h2>
            <p className="mt-2 text-text-muted">
              E-mail:{" "}
              <a
                href={`mailto:${content.gegevens.email}`}
                className="text-accent hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 rounded"
              >
                {content.gegevens.email}
              </a>
            </p>
            <p className="mt-1 text-text-muted">
              Telefoon: {content.gegevens.phone}
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="mt-10 border-t border-border pt-10"
            noValidate
          >
            <div className="space-y-6">
              <div>
                <label htmlFor="naam" className="block text-sm font-medium text-primary">
                  {content.form.naam} <span className="text-red-600">*</span>
                </label>
                <input
                  id="naam"
                  name="naam"
                  type="text"
                  required
                  autoComplete="name"
                  className={`mt-1 block w-full max-w-md rounded-xl border px-4 py-2.5 text-text-main focus:outline-none focus:ring-1 focus:ring-accent disabled:opacity-70 ${fieldErrors.naam ? "border-red-500 bg-red-50 focus:border-accent" : "border-border bg-white focus:border-accent"}`}
                  disabled={status === "sending"}
                  onFocus={() => clearError("naam")}
                  aria-invalid={!!fieldErrors.naam}
                  aria-describedby={fieldErrors.naam ? "naam-fout" : undefined}
                />
                {fieldErrors.naam && (
                  <p id="naam-fout" className="mt-1 text-sm text-red-600" role="alert">
                    {fieldErrors.naam}
                  </p>
                )}
              </div>
              <div>
                <label htmlFor="organisatie" className="block text-sm font-medium text-primary">
                  {content.form.organisatie} <span className="text-red-600">*</span>
                </label>
                <input
                  id="organisatie"
                  name="organisatie"
                  type="text"
                  required
                  autoComplete="organization"
                  className={`mt-1 block w-full max-w-md rounded-xl border px-4 py-2.5 text-text-main focus:outline-none focus:ring-1 focus:ring-accent disabled:opacity-70 ${fieldErrors.organisatie ? "border-red-500 bg-red-50 focus:border-accent" : "border-border bg-white focus:border-accent"}`}
                  disabled={status === "sending"}
                  onFocus={() => clearError("organisatie")}
                  aria-invalid={!!fieldErrors.organisatie}
                  aria-describedby={fieldErrors.organisatie ? "organisatie-fout" : undefined}
                />
                {fieldErrors.organisatie && (
                  <p id="organisatie-fout" className="mt-1 text-sm text-red-600" role="alert">
                    {fieldErrors.organisatie}
                  </p>
                )}
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-primary">
                  {content.form.email} <span className="text-red-600">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className={`mt-1 block w-full max-w-md rounded-xl border px-4 py-2.5 text-text-main focus:outline-none focus:ring-1 focus:ring-accent disabled:opacity-70 ${fieldErrors.email ? "border-red-500 bg-red-50 focus:border-accent" : "border-border bg-white focus:border-accent"}`}
                  disabled={status === "sending"}
                  onFocus={() => clearError("email")}
                  aria-invalid={!!fieldErrors.email}
                  aria-describedby={fieldErrors.email ? "email-fout" : undefined}
                />
                {fieldErrors.email && (
                  <p id="email-fout" className="mt-1 text-sm text-red-600" role="alert">
                    {fieldErrors.email}
                  </p>
                )}
              </div>
              <div>
                <label htmlFor="bericht" className="block text-sm font-medium text-primary">
                  {content.form.bericht}
                </label>
                <textarea
                  id="bericht"
                  name="bericht"
                  rows={4}
                  className="mt-1 block w-full max-w-md rounded-xl border border-border bg-white px-4 py-2.5 text-text-main focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                  disabled={status === "sending"}
                />
              </div>
            </div>

            {status === "success" && (
              <p
                role="status"
                className="mt-4 text-sm text-green-700"
                aria-live="polite"
              >
                {content.form.success}
              </p>
            )}
            {status === "error" && Object.keys(fieldErrors).length === 0 && (
              <p
                role="alert"
                className="mt-4 text-sm text-red-700"
                aria-live="assertive"
              >
                {!submitError || submitError.includes("<")
                  ? content.form.error
                  : submitError}
              </p>
            )}
            {status === "error" && Object.keys(fieldErrors).length > 0 && (
              <p role="alert" className="mt-4 text-sm font-medium text-red-700" aria-live="assertive">
                Controleer de velden hierboven.
              </p>
            )}

            <div className="mt-6">
              <Button
                type="submit"
                variant="primary"
                disabled={status === "sending"}
              >
                {status === "sending"
                  ? content.form.sending
                  : content.form.submit}
              </Button>
            </div>
            <p className="mt-4 text-xs text-text-muted">
              Uw gegevens gebruiken we alleen om contact op te nemen over uw vraag of kennismaking.
            </p>
          </form>
        </div>
      </Section>
    </>
  );
}
