# Axanet – Website

Multi-page Next.js website voor Axanet (IT support, servicedesk, werkplekbeheer, Microsoft 365).

## Lokaal draaien

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Formulier endpoint (contact)

Het contactformulier wordt verwerkt door de API-route `app/api/contact/route.ts`.

### Optie A: Formspree

1. Ga naar [formspree.io](https://formspree.io) en maak een formulier aan.
2. Kopieer de form URL (bijv. `https://formspree.io/f/abcde`).
3. Maak in de projectroot een bestand `.env.local` aan met:
   ```
   FORM_ENDPOINT=https://formspree.io/f/JOUW_FORM_ID
   ```
4. Herstart `npm run dev`. Inkomende berichten komen nu in je Formspree-inbox.

### Optie B: Geen endpoint

Als `FORM_ENDPOINT` niet is gezet, geeft de API altijd `200 OK` terug. Geschikt voor lokaal testen; berichten worden nergens opgeslagen. Later kun je in `app/api/contact/route.ts` eigen e-mail of een andere provider toevoegen.

## Build & productie

```bash
npm run build
npm start
```

## Structuur

- `app/` – App Router pagina’s en API
- `components/` – Header, Footer, Container, Section, Button, Card
- `lib/content.ts` – Alle teksten (single source of truth)

Oude bestanden `index.html`, `styles.css`, `script.js` (van de eerdere statische site) kunnen worden verwijderd als je alleen de Next.js-site gebruikt.
