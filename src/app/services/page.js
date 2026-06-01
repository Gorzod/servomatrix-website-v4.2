import Link from "next/link";
import { Container, LightSection, TechnicalLabel, Button } from "@/components/ui";
import { PageHero, CTABanner } from "@/components/sections";
import { services, serviceStages } from "@/lib/services";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Services — the technical controls work we perform",
  description:
    "The servomatrix technical service catalogue across four engineering stages: design and engineering, delivery and integration, verification and handover, and performance and lifecycle. BMS design support, DDC panel engineering, HVAC control strategy, programming, integration, commissioning, energy monitoring and retrofit.",
  path: "/services",
});

function ServiceBlock({ service }) {
  return (
    <article id={service.id} className="scroll-mt-24 rounded-xl border border-mute bg-paper p-7">
      <div className="flex items-baseline justify-between">
        <h3 className="font-display text-xl font-semibold tracking-tight text-graphite">{service.title}</h3>
        <span className="font-mono text-xs tracking-widest text-graphite-faint">{service.index}</span>
      </div>
      <p className="mt-2 text-sm leading-relaxed text-graphite-dim">{service.short}</p>

      <div className="mt-6 grid gap-6 sm:grid-cols-2">
        <Field label="What it solves" text={service.problem} />
        <Field label="When it is required" text={service.when} />
        <Field label="What we deliver" text={service.scope} className="sm:col-span-2" />
      </div>

      <div className="mt-6 grid gap-6 border-t border-mute pt-6 sm:grid-cols-2">
        <div>
          <TechnicalLabel tone="light">Typical deliverables</TechnicalLabel>
          <ul className="mt-2.5 space-y-1.5">
            {service.deliverables.map((d) => (
              <li key={d} className="flex gap-2.5 text-[0.84rem] text-graphite-dim">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rotate-45 bg-signal" aria-hidden="true" />{d}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <TechnicalLabel tone="light">Inputs required from the client</TechnicalLabel>
          <ul className="mt-2.5 space-y-1.5">
            {service.inputs.map((d) => (
              <li key={d} className="flex gap-2.5 text-[0.84rem] text-graphite-dim">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-steel" aria-hidden="true" />{d}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-mute pt-5">
        <div className="flex flex-wrap items-center gap-2">
          <TechnicalLabel tone="light">Related</TechnicalLabel>
          {service.related.map((r) => (
            <span key={r} className="rounded border border-mute bg-canvas px-2 py-0.5 font-mono text-[0.66rem] text-graphite-dim">{r}</span>
          ))}
        </div>
        <div className="flex items-center gap-4">
          <Link href={`/solutions/${service.solution}`} className="text-sm text-graphite-dim transition-colors hover:text-signal-ink">Related solution &rarr;</Link>
          <Link href="/contact" className="text-sm font-medium text-signal-ink transition-colors hover:text-signal-deep">{service.cta} &rarr;</Link>
        </div>
      </div>
    </article>
  );
}

function Field({ label, text, className = "" }) {
  return (
    <div className={className}>
      <TechnicalLabel tone="light">{label}</TechnicalLabel>
      <p className="mt-1.5 text-[0.88rem] leading-relaxed text-graphite-dim">{text}</p>
    </div>
  );
}

export default function ServicesPage() {
  return (
    <>
      <PageHero
        kicker="Services"
        title="The technical work behind every controls package."
        lead="Eleven services across four engineering stages. Solutions describe the outcome; these are the disciplines that deliver it."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Services" }]}
      >
        <div className="mt-8 flex flex-wrap gap-2">
          {serviceStages.map((st) => (
            <a key={st.id} href={`#stage-${st.id}`} className="rounded-md border border-line-strong px-3 py-1.5 text-sm text-fg-dim transition-colors hover:border-signal hover:text-signal">{st.label}</a>
          ))}
        </div>
      </PageHero>

      <LightSection className="py-20 sm:py-24">
        <Container>
          <div className="space-y-20">
            {serviceStages.map((stage) => {
              const list = services.filter((s) => s.stage === stage.id);
              return (
                <section key={stage.id} id={`stage-${stage.id}`} className="scroll-mt-24">
                  <div className="flex items-baseline gap-4 border-b border-mute pb-5">
                    <h2 className="font-display text-2xl font-semibold tracking-tight text-graphite">{stage.label}</h2>
                    <span className="hidden text-sm text-graphite-faint sm:block">{stage.intro}</span>
                  </div>
                  <div className="mt-8 grid gap-5">
                    {list.map((s) => <ServiceBlock key={s.id} service={s} />)}
                  </div>
                </section>
              );
            })}
          </div>
        </Container>
      </LightSection>

      <CTABanner />
    </>
  );
}
