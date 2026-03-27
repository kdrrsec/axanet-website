/**
 * Single source of truth voor alle teksten en labels – Axanet website.
 * Nuchter Nederlands, zakelijk, geen marketingclichés.
 */

export const site = {
  name: "Axanet",
  tagline: "IT Beheer & Support",
} as const;

// ——— HOME ———
export const home = {
  hero: {
    title: "IT beheer & support",
    subtitle: [
      "Betrouwbare IT-ondersteuning en werkplekbeheer voor organisaties die continuïteit verwachten.",
      "Duidelijke afspraken en een stabiele IT-omgeving.",
    ],
    ctaPrimary: "Plan kennismaking",
    ctaSecondary: "Bekijk diensten",
    bullets: [
      "Snelle responstijd",
      "Afgesproken reactietijden (SLA)",
      "Duidelijke afspraken over beheer",
      "Microsoft 365-beheer",
    ],
  },
  sectionNoRuis: {
    title: "Duidelijke IT-ondersteuning",
    body: [
      "Axanet ondersteunt organisaties met servicedesk, werkplekbeheer en Microsoft 365-beheer.",
      "Geen overbodige complexiteit, maar duidelijke afspraken en vaste aanspreekpunten.",
    ],
  },
  dienstenPreview: {
    title: "Diensten",
    servicedesk: {
      title: "Servicedesk",
      subtitle: "Directe ondersteuning voor gebruikers",
      description:
        "Snelle en duidelijke ondersteuning voor uw medewerkers. Meldingen worden geregistreerd, opgevolgd en opgelost binnen afgesproken termijnen.",
    },
    werkplek: {
      title: "Werkplekbeheer",
      subtitle: "Stabiele en veilige werkplekken",
      description:
        "Beheer en onderhoud van werkplekken zodat uw organisatie stabiel en veilig kan doorwerken.",
    },
    m365: {
      title: "Microsoft 365",
      subtitle: "Overzichtelijk en beheersbaar",
      description:
        "Beheer van accounts, licenties en basisbeveiliging — overzichtelijk en zonder onnodige complexiteit.",
    },
    linkText: "Alle diensten",
  },
  ctaBlock: {
    title: "Op zoek naar een betrouwbare IT-partner?",
    body: "Wij bespreken graag wat uw organisatie nodig heeft en hoe wij daarin kunnen ondersteunen.",
    button: "Plan kennismaking",
  },
} as const;

// ——— DIENSTEN ———
export const diensten = {
  intro: {
    title: "Diensten",
    lead:
      "Axanet ondersteunt organisaties met servicedesk, werkplekbeheer en Microsoft 365-beheer. Voor organisaties die hun IT betrouwbaar en overzichtelijk willen organiseren. Hieronder per dienst wat u concreet kunt verwachten.",
  },
  servicedesk: {
    title: "Servicedesk",
    description:
      "Snelle en duidelijke ondersteuning voor uw medewerkers. Meldingen worden geregistreerd, opgevolgd en opgelost binnen afgesproken termijnen.",
    bullets: [
      "Registratie en afhandeling van meldingen",
      "Afgesproken reactie- en doorlooptijden (SLA)",
      "Eén of meer vaste aanspreekpunten die uw omgeving kennen",
    ],
  },
  werkplek: {
    title: "Werkplekbeheer",
    description:
      "Beheer en onderhoud van werkplekken zodat uw organisatie stabiel en veilig kan doorwerken.",
    bullets: [
      "Installatie en configuratie van werkplekken",
      "Onderhoud en reparatie",
      "Inventaris en licentie-overzicht (hardware en software)",
    ],
  },
  m365: {
    title: "Microsoft 365",
    description:
      "Beheer van accounts, licenties en basisbeveiliging — overzichtelijk en zonder onnodige complexiteit.",
    bullets: [
      "Gebruikers- en licentiebeheer volgens afspraak",
      "E-mail en OneDrive inrichting",
      "Basisbeveiliging en beleid afgestemd op uw organisatie",
      "Geen complexe migraties, wel stabiel dagelijks beheer",
    ],
  },
  cta: "Plan een kennismaking om te bespreken welke ondersteuning bij uw organisatie past.",
  ctaButton: "Plan kennismaking",
} as const;

// ——— OVER ———
export const over = {
  intro: {
    title: "Over Axanet",
    lead: [
      "Axanet is gespecialiseerd in IT Beheer & Support voor organisaties die stabiliteit en duidelijke afspraken verwachten. Wij ondersteunen met servicedesk, werkplekbeheer en Microsoft 365-beheer — praktisch, overzichtelijk en zonder onnodige complexiteit.",
      "IT moet ondersteunen, niet vertragen. Daarom werkt Axanet met korte lijnen, vaste contactmomenten en duidelijke reactietijden. Geen ingewikkelde trajecten of vage beloftes, maar heldere afspraken en een aanspreekpunt dat uw omgeving kent.",
      "Wij richten ons op bedrijven en organisaties die hun IT betrouwbaar willen organiseren en continuïteit belangrijk vinden. Of het nu gaat om dagelijkse ondersteuning of structureel beheer, Axanet zorgt voor overzicht en stabiliteit.",
    ],
  },
  werkwijze: {
    title: "Werkwijze",
    steps: [
      {
        title: "Kennismaking",
        text: "We bespreken uw situatie, wensen en pijnpunten. Geen verkooppraatje – wel een helder beeld van wat we kunnen doen en of we bij elkaar passen.",
      },
      {
        title: "Inventarisatie & afspraken",
        text: "We brengen uw huidige IT in kaart en maken concrete afspraken over reactietijden, prioriteit en communicatie. U krijgt een helder overzicht en voorstel.",
      },
      {
        title: "Support & beheer",
        text: "Daarna leveren we support en beheer volgens die afspraken. Met vaste contactpersonen en duidelijke rapportage, zodat u grip houdt op uw IT-omgeving.",
      },
    ],
  },
  verwachten: {
    title: "Wat u kunt verwachten",
    bullets: [
      "Een vast aanspreekpunt dat uw IT-omgeving kent",
      "Duidelijke afspraken over reactietijden en opvolging",
      "Transparante communicatie over voortgang en status",
      "Overzichtelijke rapportage en heldere facturatie",
      "Geen onnodige complexiteit of onverwachte kosten",
      "Geen langdurige contracten verplicht (in overleg af te stemmen)",
    ],
  },
} as const;

// ——— CONTACT ———
export const contact = {
  intro: {
    title: "Plan kennismaking",
    lead:
      "Wilt u bespreken wat Axanet voor uw organisatie kan betekenen? Plan een kennismaking of stel uw vraag via het formulier hieronder. We reageren in de regel binnen één werkdag.",
  },
  gegevens: {
    title: "Contactgegevens",
    email: "contact@axanet.nl",
    phone: "+31 6 29127575",
  },
  form: {
    naam: "Naam",
    organisatie: "Organisatie",
    email: "E-mailadres",
    bericht: "Waarmee kunnen we u helpen? (bijv. aantal werkplekken, huidige situatie, waar u ondersteuning zoekt)",
    submit: "Plan kennismaking",
    sending: "Kennismakingsverzoek wordt verstuurd…",
    success: "Bedankt. Uw bericht is ontvangen. We nemen zo snel mogelijk contact op.",
    error: "Er ging iets mis bij het versturen. Probeer het later opnieuw of neem contact op via e-mail of telefoon.",
  },
} as const;

// ——— PRIVACY ———
export const privacy = {
  title: "Privacyverklaring",
  lead:
    "Axanet hecht waarde aan uw privacy. In deze privacyverklaring leest u welke gegevens wij verwerken, waarom we dat doen en welke rechten u heeft.",
  content: `
1. Wie zijn wij
Axanet verwerkt alleen persoonsgegevens die nodig zijn voor onze dienstverlening en communicatie.

2. Welke gegevens verwerken wij
- Naam en organisatie
- E-mailadres en telefoonnummer
- Inhoud van uw bericht of aanvraag

3. Waarvoor gebruiken wij deze gegevens
- Reageren op vragen en verzoeken
- Inplannen en uitvoeren van dienstverlening
- Verbeteren van onze dienstverlening en communicatie

4. Hoe lang bewaren wij gegevens
Wij bewaren gegevens niet langer dan nodig is voor bovenstaande doelen, of zolang wij daar wettelijk toe verplicht zijn.

5. Delen wij gegevens met derden
Wij delen persoonsgegevens niet voor commerciële doeleinden. Alleen wanneer dat nodig is voor onze dienstverlening of om te voldoen aan een wettelijke verplichting, kunnen gegevens met relevante verwerkers worden gedeeld.

6. Uw rechten
U heeft recht op inzage, correctie en verwijdering van uw gegevens, en in sommige gevallen op beperking of bezwaar tegen verwerking.

7. Beveiliging
Wij nemen passende technische en organisatorische maatregelen om persoonsgegevens te beschermen tegen verlies of onrechtmatige verwerking.

8. Vragen of verzoeken
Voor vragen over privacy of het uitoefenen van uw rechten kunt u contact opnemen via de contactpagina.

9. Wijzigingen
Deze privacyverklaring kan worden aangepast. Laatste wijziging: 2026.
  `.trim(),
  contactVerwijzing: "Voor vragen over privacy kunt u contact met ons opnemen via de contactpagina.",
} as const;

// ——— NAV & FOOTER ———
export const nav = {
  home: "Home",
  diensten: "Diensten",
  over: "Over",
  contact: "Contact",
  privacy: "Privacy",
  offerteAanvragen: "Offerte aanvragen",
} as const;

export const footer = {
  tagline: "Axanet ondersteunt organisaties met structureel IT-beheer, servicedesk en Microsoft 365-ondersteuning.",
  navigatie: "Navigatie",
  contact: "Contact",
  copyright: "© 2026 Axanet. Alle rechten voorbehouden.",
  kvk: "[nummer]",
  btw: "[nummer]",
  links: {
    privacy: "Privacyverklaring",
  },
} as const;
