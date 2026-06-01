import { Container, LightSection, DarkSection, SectionHeader, TechnicalLabel } from "@/components/ui";
import { PageHero, CTABanner } from "@/components/sections";
import Reveal from "@/components/Reveal";
import ArchitectureDiagram from "@/components/ArchitectureDiagram";
import { protocols, controlledSystems, thirdPartySystems, integrationCaveat, operatorLayer, commissioningCapability } from "@/lib/standards";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Capabilities — protocols, systems and engineering competence",
  description:
    "servomatrix engineering capability: BACnet/IP, BACnet MS/TP, Modbus TCP and Modbus RTU integration; controlled mechanical systems; third-party system integration; operator layer; and documentation and commissioning across the Middle East and Africa.",
  path: "/capabilities",
});

export default function CapabilitiesPage() {
  return (
    <>
      <PageHero
        kicker="Capabilities"
        title="Protocols, systems and the engineering competence behind them."
        lead="What servomatrix connects, controls and documents — and the disciplined approach that holds it together from field device to operator interface."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Capabilities" }]}
      />

      <DarkSection raised className="border-b border-line py-18 sm:py-24">
        <Container>
          <SectionHeader kicker="Architecture" title="One documented control architecture." lead="Hover or select a layer to see what it covers." />
          <div className="mt-10"><ArchitectureDiagram /></div>
        </Container>
      </DarkSection>

      {/* Protocols */}
      <LightSection className="py-20 sm:py-24">
        <Container>
          <SectionHeader tone="light" kicker="01 · Protocols & communication" title="Open-protocol integration across specified building systems." />
          <div className="mt-10 overflow-hidden rounded-xl border border-mute">
            <div className="hidden grid-cols-12 gap-px bg-mute font-mono text-[0.6rem] uppercase tracking-[0.12em] text-graphite-faint lg:grid">
              <div className="col-span-2 bg-canvas-2 px-4 py-3">Protocol</div>
              <div className="col-span-3 bg-canvas-2 px-4 py-3">Application</div>
              <div className="col-span-3 bg-canvas-2 px-4 py-3">Connects</div>
              <div className="col-span-2 bg-canvas-2 px-4 py-3">Why it matters</div>
              <div className="col-span-2 bg-canvas-2 px-4 py-3">Documentation</div>
            </div>
            <div className="divide-y divide-mute">
              {protocols.map((p) => (
                <div key={p.name} className="grid gap-2 bg-paper px-4 py-5 lg:grid-cols-12 lg:gap-px lg:px-0 lg:py-0">
                  <div className="lg:col-span-2 lg:px-4 lg:py-4"><span className="font-mono text-sm font-medium text-graphite">{p.name}</span></div>
                  <Cell className="lg:col-span-3" label="Application" text={p.application} />
                  <Cell className="lg:col-span-3" label="Connects" text={p.connects} />
                  <Cell className="lg:col-span-2" label="Why it matters" text={p.matters} />
                  <Cell className="lg:col-span-2" label="Documentation" text={p.docs} />
                </div>
              ))}
            </div>
          </div>
        </Container>
      </LightSection>

      {/* Controlled + third-party systems */}
      <LightSection recessed className="border-t border-mute py-20 sm:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <SectionHeader tone="light" kicker="02 · Controlled mechanical systems" title="Mechanical plant we control directly." />
              <ul className="mt-8 grid gap-2.5 sm:grid-cols-2">
                {controlledSystems.map((s) => (
                  <li key={s} className="flex items-center gap-3 rounded-lg border border-mute bg-paper px-4 py-3 text-sm text-graphite-dim">
                    <span className="h-1.5 w-1.5 shrink-0 rotate-45 bg-signal" aria-hidden="true" />{s}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <SectionHeader tone="light" kicker="03 · Integrated third-party systems" title="Equipment we bring under the supervisory layer." />
              <ul className="mt-8 grid gap-2.5">
                {thirdPartySystems.map((s) => (
                  <li key={s} className="flex items-center gap-3 rounded-lg border border-mute bg-paper px-4 py-3 text-sm text-graphite-dim">
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-steel" aria-hidden="true" />{s}
                  </li>
                ))}
              </ul>
              <Reveal className="mt-5 rounded-lg border border-mute bg-canvas-2 px-4 py-3">
                <TechnicalLabel tone="light">{integrationCaveat}</TechnicalLabel>
              </Reveal>
            </div>
          </div>
        </Container>
      </LightSection>

      {/* Operator + commissioning */}
      <DarkSection raised className="border-y border-line py-20 sm:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <SectionHeader kicker="04 · Operator layer" title="The interface operators run the building from." />
              <ul className="mt-8 space-y-2.5">
                {operatorLayer.map((s) => (
                  <li key={s} className="flex items-center gap-3 text-[0.95rem] text-fg-dim">
                    <span className="h-1.5 w-1.5 shrink-0 rotate-45 bg-signal" aria-hidden="true" />{s}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <SectionHeader kicker="05 · Documentation & commissioning" title="The records that make a system maintainable." />
              <ul className="mt-8 space-y-2.5">
                {commissioningCapability.map((s) => (
                  <li key={s} className="flex items-center gap-3 text-[0.95rem] text-fg-dim">
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-steel" aria-hidden="true" />{s}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </DarkSection>

      <CTABanner />
    </>
  );
}

function Cell({ label, text, className = "" }) {
  return (
    <div className={`lg:bg-paper lg:px-4 lg:py-4 ${className}`}>
      <span className="font-mono text-[0.58rem] uppercase tracking-[0.12em] text-graphite-faint lg:hidden">{label}</span>
      <p className="text-[0.82rem] leading-relaxed text-graphite-dim">{text}</p>
    </div>
  );
}
