# Site online op axanet.nl

Zo zet je de site live op je eigen domein. Geen eigen server nodig.

---

## Optie: Vercel (aanbevolen)

Vercel is gemaakt voor Next.js. Gratis tier, automatisch HTTPS, en je koppelt eenvoudig axanet.nl.

### Stap 1: GitHub aan dit project koppelen

**A. GitHub-account en repository**

1. Ga naar [github.com](https://github.com) en log in (of maak een gratis account).
2. Klik rechtsboven op **+** → **New repository**.
3. Bij "Repository name" vul je bijv. **axanet-website** in.
4. Laat "Public" staan, vink **Add a README** niet aan.
5. Klik **Create repository**. Je ziet nu een lege repo met een URL zoals `https://github.com/jouw-username/axanet-website`.

**B. Git op je PC (als je het nog niet hebt)**

- Download **Git voor Windows** van [git-scm.com](https://git-scm.com/download/win) en installeer. Cursor gebruikt daarna deze Git. Bij de installatie: standaardopties zijn prima; "Git Credential Manager" laat je aanstaan (daarmee log je later in op GitHub).

**C. Project koppelen en eerste push**

1. In **Cursor**: open de terminal (Terminal → New Terminal) of open **PowerShell** en ga naar je project:
   ```powershell
   cd C:\Users\kgoga\Desktop\AxaNet
   ```
2. Voer deze commando’s één voor één uit (vervang `JOUW-GEBRUIKERSNAAM` en `axanet-website` door je echte GitHub-gebruikersnaam en repo-naam):

   ```powershell
   git init
   git add .
   git commit -m "Eerste versie"
   git branch -M main
   git remote add origin https://github.com/JOUW-GEBRUIKERSNAAM/axanet-website.git
   git push -u origin main
   ```

3. Bij **`git push`** wordt de eerste keer om inloggen gevraagd:
   - Er opent een **browser** om in te loggen op GitHub, of
   - Je moet een **Personal Access Token** gebruiken (GitHub → Settings → Developer settings → Personal access tokens → nieuw token met o.a. `repo` rechten; dat token gebruik je in plaats van je wachtwoord).
4. Na een geslaagde push staat je code op GitHub. Daarna kun je gewoon "push naar GitHub" zeggen en voert de AI de git-commando’s uit (zonder opnieuw inloggen).

### Stap 2: Site op Vercel laten draaien

1. Ga naar [vercel.com](https://vercel.com) en log in met je **GitHub**-account.
2. Klik **Add New…** → **Project**.
3. Kies de repository **axanet-website** (of hoe je die noemde) en klik **Import**.
4. Laat de instellingen staan (Framework: Next.js) en klik **Deploy**.
5. Na 1–2 minuten krijg je een link zoals `axanet-website.vercel.app`. Die werkt al; daarna koppel je je eigen domein.

### Stap 3: Domein axanet.nl koppelen

1. In Vercel: open je project → tab **Settings** → **Domains**.
2. Klik **Add** en vul in: **axanet.nl**
3. Vercel toont wat je bij je domeinprovider moet instellen, bijvoorbeeld:
   - **A-record**: `76.76.21.21` (of het IP dat Vercel aangeeft)
   - Of **CNAME**: `cname.vercel-dns.com` (als je een subdomein gebruikt)
4. Bij de partij waar je axanet.nl hebt gekocht (TransIP, Hostnet, One.com, etc.):
   - Ga naar **DNS** / **Domeinbeheer** voor axanet.nl.
   - Voeg het A-record of CNAME toe zoals Vercel aangeeft.
5. In Vercel kun je eventueel ook **www.axanet.nl** toevoegen; Vercel regelt de redirect naar axanet.nl.

Na een kwartier tot een paar uur (DNS verspreiding) is **https://axanet.nl** live.

---

## Aanpassingen doen daarna

1. Wijzig je code lokaal in Cursor (zoals nu) – of laat de AI de wijzigingen doen.
2. Push naar GitHub (zodat Vercel opnieuw bouwt):
   - **Zelf:** in de terminal: `git add .` → `git commit -m "Tekst/design update"` → `git push`
   - **Via Cursor/AI:** zeg bijvoorbeeld “push dit naar GitHub” of “zet dit online”; de AI voert dan `git add`, `git commit` en `git push` voor je uit. Zorg dat GitHub op je PC eenmalig is gekoppeld (inloggen via browser of SSH), anders faalt `git push`.
3. Vercel bouwt en zet de site automatisch opnieuw online. Binnen 1–2 minuten staat de nieuwe versie op axanet.nl.

Geen bestanden handmatig kopiëren; push naar GitHub is genoeg.

---

## Samenvatting

| Wat              | Hoe |
|------------------|-----|
| Code bewaren     | GitHub (één keer koppelen) |
| Site hosten      | Vercel (gratis, Next.js) |
| Domein           | axanet.nl bij Vercel toevoegen + DNS bij je provider instellen |
| Iets aanpassen   | Lokaal wijzigen → `git add .` → `git commit -m "..."` → `git push` → Vercel werkt automatisch |

Geen Windows-server nodig; alles draait bij Vercel. Je hebt alleen je domein (axanet.nl) en de DNS-instellingen bij je domeinprovider nodig.
