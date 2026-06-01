import { Container, LightSection, DarkSection, SectionHeader, TechnicalLabel, Button } from "@/components/ui";
import { PageHero, CTABanner } from "@/components/sections";
import Reveal from "@/components/Reveal";
import { site } from "@/lib/site";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "About — a specialist building controls integrator",
  description:
    "servomatrix is a specialist building management systems and controls integrator based in Beirut, serving the Middle East and Africa with a protocol-led, documentation-driven approach from design support through commissioning and lifecycle support.",
  path: "/about",
});

const profile = [
  ["Based in", "Beirut, Lebanon"],
  ["Serving", "Middle East & Africa"],
  ["Focus", "BMS and building controls integration"],
  ["Engagement range", "Design support through commissioning and lifecycle support"],
  ["Integration approach", "Protocol-led and documentation-driven"],
];

const teams = [
  { t: "Consultants", b: "We resolve the controls package against your design intent — architecture, points, sequences and integration boundaries — so the specification is buildable and the system is commissionable." },
  { t: "Developers and owners", b: "We protect the operational asset: a documented, maintainable control system that performs after handover and can be supported through its life." },
  { t: "Main and MEP contractors", b: "We deliver a defined controls scope with clear interfaces and disciplined documentation, and support installation and commissioning on site." },
  { t: "Facility operators", b: "We hand over a system you can run — operator graphics built around your workflow, trained staff, and a support model for what comes after." },
];

const principles = [
  { t: "Clarity over cleverness", b: "Logic and documentation are written to be read and maintained by the next engineer, not to impress." },
  { t: "Integration-first", b: "Interfaces and responsibilities are defined early, so systems work together rather than being forced together on site." },
  { t: "Commissioning discipline", b: "Sequences are proven against intent and recorded, so the building is accepted on evidence, not assumption." },
  { t: "Support after handover", b: "The relationship continues under a defined scope, so performance is maintained rather than left to drift." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        kicker="About"
        title="Controls are not an add-on discipline."
        lead="They are the layer that determines whether building systems operate coherently after handover. servomatrix engineers that layer with the discipline a serious building deserves."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
      />

      <LightSection className="py-20 sm:py-24">
        <Container>
          <SectionHeader tone="light" kicker="Company profile" title="A specialist, not a generalist." lead="servomatrix works only on building controls. That focus is the point: the discipline carries operational risk that a general contractor is not set up to own." />
          <div className="mt-10 overflow-hidden rounded-xl border border-mute">
            <dl className="divide-y divide-mute">
              {profile.map(([k, v]) => (
                <div key={k} className="grid grid-cols-1 gap-1 bg-paper px-6 py-4 sm:grid-cols-3">
                  <dt className="font-mono text-[0.7rem] uppercase tracking-[0.12em] text-graphite-faint">{k}</dt>
                  <dd className="text-graphite sm:col-span-2">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Container>
      </LightSection>

      {/* Leadership placeholder — not published until verified */}
      <LightSection recessed className="border-t border-mute py-20 sm:py-24">
        <Container>
          <SectionHeader tone="light" kicker="Leadership" title="Technical background." />
          <Reveal className="mt-10 rounded-xl border border-dashed border-mute-strong bg-paper p-8">
            <TechnicalLabel tone="light">Content placeholder — to be published once verified</TechnicalLabel>
            <p className="mt-4 max-w-2xl leading-relaxed text-graphite-dim">
              A leadership and technical-background section will be published here once verified
              biography, qualifications and professional details are provided. This space is
              intentionally left as a structured placeholder rather than populated with unverified
              claims.
            </p>
            <ul className="mt-6 grid gap-2 sm:grid-cols-2">
              {["Name", "Title", "Professional background", "Qualifications / certifications", "Markets served", "LinkedIn profile"].map((f) => (
                <li key={f} className="flex items-center gap-2.5 text-sm text-graphite-faint">
                  <span className="h-1.5 w-1.5 rounded-full border border-mute-strong" aria-hidden="true" />{f}
                </li>
              ))}
            </ul>
          </Reveal>
        </Container>
      </LightSection>

      <DarkSection raised className="border-y border-line py-20 sm:py-24">
        <Container>
          <SectionHeader kicker="Working together" title="How servomatrix works with project teams." />
          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {teams.map((t, i) => (
              <Reveal key={t.t} delay={(i % 2) * 70} className="rounded-xl border border-line bg-ink-2 p-6">
                <h3 className="font-display text-lg font-semibold tracking-tight text-fg">{t.t}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-fg-dim">{t.b}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </DarkSection>

      <LightSection className="py-20 sm:py-24">
        <Container>
          <SectionHeader tone="light" kicker="Engineering principles" title="How the work is actually done." />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {principles.map((p, i) => (
              <Reveal key={p.t} delay={(i % 4) * 60} className="rounded-xl border border-mute bg-paper p-6">
                <span className="font-mono text-xs tracking-widest text-graphite-faint">0{i + 1}</span>
                <h3 className="mt-3 font-display text-base font-semibold tracking-tight text-graphite">{p.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-graphite-dim">{p.b}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </LightSection>

      <CTABanner />
    </>
  );
}
