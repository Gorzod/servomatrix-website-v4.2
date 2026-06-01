import Link from "next/link";
import { Container, Button, CTAGroup, Kicker, SectionHeader, LightSection, DarkSection, TechnicalLabel } from "@/components/ui";
import Reveal from "@/components/Reveal";
import { CTABanner, AssuranceBar } from "@/components/sections";
import ArchitectureDiagram from "@/components/ArchitectureDiagram";
import { OperatorInterfaceVisual, DocumentPreviewVisual, CommissioningChecklistVisual, IntegrationMatrixVisual, TrendVisual } from "@/components/visuals";
import { SolutionCard, ProjectEvidenceCard, DeliverableCard, SectorCard, TrustAssuranceBlock } from "@/components/cards";
import { solutions } from "@/lib/solutions";
import { projects, featuredProjectSlugs, projectsIntro } from "@/lib/projects";
import { deliverables, homeProcess, assuranceBlocks, standards, standardsStatement } from "@/lib/standards";
import { featuredIndustries } from "@/lib/industries";
import { site, primaryCta } from "@/lib/site";

const problems = [
  { t: "Fragmented systems", b: "Mechanical equipment, meters and third-party systems operate in isolation without disciplined integration." },
  { t: "Unstable operation", b: "Poor control logic causes comfort complaints, unnecessary runtime, hunting and recurring call-backs." },
  { t: "Weak handover", b: "Incomplete documentation and untested sequences leave operators with a system they cannot confidently maintain." },
];

const deliverableVisuals = [
  <IntegrationMatrixVisual key="a" tone="light" />,
  <DocumentPreviewVisual key="b" tone="light" lines={4} />,
  <DocumentPreviewVisual key="c" tone="light" lines={5} />,
  <DocumentPreviewVisual key="d" tone="light" lines={4} />,
  <CommissioningChecklistVisual key="e" tone="light" />,
  <DocumentPreviewVisual key="f" tone="light" lines={5} />,
];

export default function Home() {
  const featuredProjects = featuredProjectSlugs.map((s) => projects.find((p) => p.slug === s));

  return (
    <>
      {/* 1 — HERO */}
      <DarkSection className="overflow-hidden border-b border-line pt-28 pb-16 sm:pt-36 sm:pb-20">
        <div className="pointer-events-none absolute inset-0 bg-grid bg-vignette opacity-50" aria-hidden="true" />
        <Container className="relative">
          <div className="grid items-center gap-14 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <Reveal><Kicker>Building management systems · controls integration</Kicker></Reveal>
              <Reveal delay={80}>
                <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.05] tracking-tightest sm:text-5xl md:text-[3.3rem]">
                  Building controls engineered for performance, clarity and long-term operation.
                </h1>
              </Reveal>
              <Reveal delay={150}>
                <p className="mt-6 max-w-xl text-lg leading-relaxed text-fg-dim">
                  servomatrix designs, integrates, programs and commissions building management
                  systems for commercial, healthcare, hospitality and industrial facilities across
                  the Middle East and Africa.
                </p>
              </Reveal>
              <Reveal delay={220}>
                <CTAGroup className="mt-8">
                  <Button href={primaryCta.href}>{primaryCta.label}</Button>
                  <Button href="/capabilities" variant="secondary">Explore capabilities</Button>
                </CTAGroup>
              </Reveal>
              <Reveal delay={300}>
                <p className="mt-8 font-mono text-[0.74rem] leading-relaxed text-fg-faint">
                  BMS architecture · HVAC controls · BACnet &amp; Modbus integration · commissioning · lifecycle support
                </p>
              </Reveal>
            </div>
            <div className="lg:col-span-6">
              <Reveal delay={180} className="relative">
                <div className="pointer-events-none absolute -inset-6 glow-signal opacity-40" aria-hidden="true" />
                <div className="relative">
                  <OperatorInterfaceVisual />
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </DarkSection>

      <AssuranceBar tone="dark" />

      {/* 2 — PROBLEM / VALUE */}
      <LightSection className="py-20 sm:py-28">
        <Container>
          <SectionHeader
            tone="light"
            kicker="The problem"
            title="The control system determines how the building actually performs."
            lead="Most building performance problems are control problems. servomatrix closes the gap between mechanical design intent and day-to-day building operation."
          />
          <div className="mt-12 grid gap-px overflow-hidden rounded-xl border border-mute bg-mute md:grid-cols-3">
            {problems.map((p, i) => (
              <Reveal key={p.t} delay={(i % 3) * 70} className="bg-paper p-7">
                <span className="font-mono text-xs tracking-widest text-graphite-faint">0{i + 1}</span>
                <h3 className="mt-4 font-display text-lg font-semibold tracking-tight text-graphite">{p.t}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-graphite-dim">{p.b}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </LightSection>

      {/* 3 — SOLUTION PATHWAYS */}
      <LightSection recessed className="border-t border-mute py-20 sm:py-28">
        <Container>
          <SectionHeader
            tone="light"
            kicker="Solutions"
            title="Five ways we engage, mapped to what the building needs."
            lead="Solutions describe what you are trying to achieve. Each maps to a defined scope, a set of deliverables and the engineering behind it."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {solutions.map((s, i) => (
              <SolutionCard key={s.slug} solution={s} index={i} />
            ))}
            <Reveal delay={140} className="flex flex-col justify-center rounded-xl border border-dashed border-mute-strong bg-canvas p-6">
              <h3 className="font-display text-lg font-semibold tracking-tight text-graphite">Not sure which applies?</h3>
              <p className="mt-2 text-sm leading-relaxed text-graphite-dim">Send the project details and we will identify the most practical next step.</p>
              <Button href={primaryCta.href} tone="light" variant="secondary" className="mt-5 self-start">{primaryCta.label}</Button>
            </Reveal>
          </div>
        </Container>
      </LightSection>

      {/* 4 — PROJECT EVIDENCE */}
      <LightSection className="border-t border-mute py-20 sm:py-28">
        <Container>
          <SectionHeader tone="light" kicker="Projects" title={projectsIntro.title} lead={projectsIntro.lead} />
          <Reveal className="mt-5 max-w-2xl rounded-lg border border-mute bg-canvas-2 px-4 py-3">
            <TechnicalLabel tone="light">{projectsIntro.note}</TechnicalLabel>
          </Reveal>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((p, i) => (
              <ProjectEvidenceCard key={p.slug} project={p} index={i} />
            ))}
          </div>
          <div className="mt-10">
            <Button href="/projects" tone="light" variant="secondary">View project framework</Button>
          </div>
        </Container>
      </LightSection>

      {/* 5 — ARCHITECTURE DIAGRAM */}
      <DarkSection raised className="border-y border-line py-20 sm:py-28">
        <div className="pointer-events-none absolute inset-0 bg-dots opacity-[0.25]" aria-hidden="true" />
        <Container className="relative">
          <SectionHeader
            kicker="Architecture"
            title="From field device to operator interface — one documented architecture."
            lead="Every project is built on a single, documented control architecture, from the field devices in the plant room to the operator interface and remote support layer."
          />
          <Reveal className="mt-12"><ArchitectureDiagram /></Reveal>
        </Container>
      </DarkSection>

      {/* 6 — DELIVERABLES */}
      <LightSection className="py-20 sm:py-28">
        <Container>
          <SectionHeader
            tone="light"
            kicker="Deliverables"
            title="Documentation that contractors, consultants and operators can work with."
            lead="Engineering buyers trust outputs, not adjectives. These are the deliverables a servomatrix package produces."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {deliverables.map((d, i) => (
              <DeliverableCard key={d.title} deliverable={d} visual={deliverableVisuals[i]} index={i} tone="light" />
            ))}
          </div>
        </Container>
      </LightSection>

      {/* 7 — INDUSTRIES */}
      <LightSection recessed className="border-t border-mute py-20 sm:py-28">
        <Container>
          <SectionHeader
            tone="light"
            kicker="Industries"
            title="Sector experience where controls carry operational risk."
            lead="The control requirements of a hospital are not those of a hotel. We engineer to each sector's operational priorities."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {featuredIndustries.map((ind, i) => (
              <SectorCard key={ind.slug} industry={ind} index={i} tone="light" />
            ))}
          </div>
          <div className="mt-10">
            <Button href="/industries" tone="light" variant="secondary">View all industries</Button>
          </div>
        </Container>
      </LightSection>

      {/* 8 — PROCESS */}
      <DarkSection raised className="border-y border-line py-20 sm:py-28">
        <Container>
          <SectionHeader
            kicker="Delivery process"
            title="A defined route from design review to lifecycle support."
            lead="Six consolidated phases on every project. The full ten-step engineering process is set out in detail."
          />
          <div className="mt-12 grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
            {homeProcess.map((step, i) => (
              <Reveal key={step.n} delay={(i % 3) * 60} className="bg-ink-2 p-6">
                <span className="font-mono text-xs tracking-widest text-signal">{step.n}</span>
                <h3 className="mt-3 font-display text-base font-semibold tracking-tight text-fg">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-fg-dim">{step.body}</p>
              </Reveal>
            ))}
          </div>
          <div className="mt-10">
            <Button href="/process" variant="secondary">See the full process</Button>
          </div>
        </Container>
      </DarkSection>

      {/* 9 — TRUST & ASSURANCE */}
      <LightSection className="py-20 sm:py-28">
        <Container>
          <SectionHeader
            tone="light"
            kicker="Assurance"
            title="What a serious controls partner is accountable for."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {assuranceBlocks.map((b, i) => (
              <TrustAssuranceBlock key={b.title} block={b} index={i} tone="light" />
            ))}
          </div>
          <Reveal className="mt-10 rounded-xl border border-mute bg-canvas-2 p-7">
            <TechnicalLabel tone="light">Standards reference</TechnicalLabel>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-graphite-dim">{standardsStatement}</p>
            <ul className="mt-5 flex flex-wrap gap-2">
              {standards.map((s) => (
                <li key={s} className="rounded border border-mute bg-paper px-2.5 py-1 font-mono text-[0.7rem] text-graphite-dim">{s}</li>
              ))}
            </ul>
          </Reveal>
        </Container>
      </LightSection>

      {/* 10 — CTA */}
      <CTABanner />
    </>
  );
}
