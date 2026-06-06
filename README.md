# servomatrix — website v4.2

Specialist building management systems (BMS), building automation and controls
integrator. Beirut-based, serving the Middle East and Africa.

Static **Next.js 14 (App Router)** site, React 18, Tailwind CSS 3.4. No runtime
backend; the enquiry form posts to a third-party form handler (Web3Forms).

---

## What changed in v4.2

v4.2 elevates the v4.1 dark conceptual microsite into a credible, commercially
mature B2B industrial site, per the review audit.

- **Light + dark design system.** A new light technical palette (`canvas`,
  `paper`, `graphite`, `mute`, `steel.light`, `signal.ink`) sits alongside the
  existing dark control-room tokens. Pages alternate dark hero → light proof →
  dark capability → light service/sector → dark CTA. Amber is reserved for
  actions, live states and key metrics.
- **New architecture.** Added `/solutions` (+5 buyer-intent pages), `/projects`
  (+representative-scope detail pages), `/resources` (+3 technical articles),
  `/industries/[slug]` sector pages, and `/privacy`. `/services` retained and
  reorganised into four engineering stages.
- **Restructured navigation:** Solutions · Capabilities · Industries · Projects ·
  Resources · About · Contact, with a *Discuss a project* primary CTA and a
  *Send project documents* secondary CTA.
- **Rebuilt homepage** in the ten-section commercial sequence.
- **Data-driven content.** `src/lib/content.js` is now a barrel that re-exports
  focused modules: `site`, `services`, `solutions`, `industries`, `projects`,
  `resources`, `standards`. Content lives in data, not in page markup.
- **Upgraded components:** interactive, responsive, single-fire architecture
  diagram; rebuilt accessible contact form with enquiry-path selector; new
  light/dark section primitives, breadcrumbs, cards and engineering-work-product
  visuals.
- **Honest language throughout** — no fabricated projects, clients, energy
  figures, partnerships, certifications, testimonials or response guarantees.

---

## Project structure

```
src/
  app/
    layout.js            Root layout, metadata, ProfessionalService JSON-LD, fonts
    page.js              Homepage (10 sections)
    solutions/           Hub + [slug] (5 solutions)
    services/            4-stage technical catalogue (11 services)
    capabilities/        Protocols, systems, operator layer, commissioning
    industries/          Hub + [slug] (7 sectors)
    projects/            Hub + [slug] (representative scopes)
    resources/           Hub + [slug] (3 technical articles)
    about/ contact/ process/ privacy/ not-found.js
    sitemap.js  robots.js  globals.css
  components/
    ui.js                LightSection, DarkSection, SectionHeader, TechnicalLabel,
                         CTAGroup, Breadcrumbs, Button, Kicker, Container
    sections.js          PageHero, CTABanner, AssuranceBar, ProcessTimeline
    cards.js             SolutionCard, SectorCard, ProjectEvidenceCard,
                         DeliverableCard, TrustAssuranceBlock, ResourceCard
    visuals.js           OperatorInterfaceVisual, DocumentPreviewVisual,
                         CommissioningChecklistVisual, IntegrationMatrixVisual,
                         TrendVisual, ImagePlaceholder
    ArchitectureDiagram.js   Interactive, responsive, single-fire flow
    ContactForm.js       Enquiry-path selector + validated fields + honeypot
    Nav.js  Footer.js  Logo.js  Reveal.js
  lib/
    site.js services.js solutions.js industries.js projects.js
    resources.js standards.js seo.js content.js (barrel)
public/  favicon.svg  og.svg  site.webmanifest
```

---

## Running locally

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build (all routes prerender statically)
npm start        # serve the production build
```

Node 18.17+ required (Next.js 14).

---

## Configuration

### Enquiry form

The form posts to **Web3Forms**. The access key is public by design (it only
routes to the configured inbox). Override the committed default with an
environment variable:

```
NEXT_PUBLIC_WEB3FORMS_KEY=your-web3forms-access-key
```

There is no file upload. The form asks the sender to mention documents in the
project summary, and a document submission method is arranged after contact.

---

## Known item — fonts (performance)

Fonts are loaded via `<link>` to Google Fonts in `src/app/layout.js`, with
`preconnect`. The audit recommends `next/font` for render-blocking elimination.
`next/font/google` downloads font files at build time and so requires network
access to Google Fonts during the build; this build environment blocks that
domain, so the `<link>` approach is retained to keep the build reproducible
here. In an unrestricted build environment, migrate to `next/font/google`
(Inter, JetBrains Mono) for the final performance gain — this is
the single outstanding performance item.

---

## Content placeholders (require verified information)

These are structured and clearly labelled in the UI, ready to be populated:

- **Projects** — currently *representative delivery scopes*, not completed
  projects. Replace with `status: "verified"` entries once delivered and approved.
- **Leadership / about** — placeholder block; do not publish unverified bios.
- **Project photography** — `ImagePlaceholder` modules throughout.
- **Certifications, partnerships, client names, testimonials** — none claimed;
  add only when verified.

---

## Deployment

Any static-capable Next.js host (Vercel recommended). Set
`NEXT_PUBLIC_WEB3FORMS_KEY` in the host environment. Confirm the production
domain matches `site.url` in `src/lib/site.js` so canonicals, sitemap and OG
URLs resolve correctly.
