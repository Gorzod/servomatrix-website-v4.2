import { notFound } from "next/navigation";
import Link from "next/link";
import { Container, LightSection, DarkSection, SectionHeader, TechnicalLabel, Button, CTAGroup, Breadcrumbs } from "@/components/ui";
import { CTABanner } from "@/components/sections";
import ArchitectureDiagram from "@/components/ArchitectureDiagram";
import { solutions, getSolution } from "@/lib/solutions";
import { services } from "@/lib/services";
import { site, secondaryCta, primaryCta } from "@/lib/site";
import { pageMeta, serviceLd, breadcrumbLd, JsonLd } from "@/lib/seo";

export function generateStaticParams() {
  return solutions.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }) {
  const s = getSolution(params.slug);
  if (!s) return {};
  return pageMeta({
    title: s.title,
    description: s.summary,
    path: `/solutions/${s.slug}`,
  });
}

export default function SolutionPage({ params }) {
  const solution = getSolution(params.slug);
  if (!solution) notFound();

  const related = solution.relatedServices
    .map((id) => services.find((sv) => sv.id === id))
    .filter(Boolean);

  const crumbs = [{ label: "Home", href: "/" }, { label: "Solutions", href: "/solutions" }, { label: solution.title }];

  return (
    <>
      <JsonLd data={serviceLd({ name: solution.title, description: solution.summary, path: `/solutions/${solution.slug}` })} />
      <JsonLd data={breadcrumbLd(crumbs)} />

      <DarkSection className="overflow-hidden border-b border-line pt-28 pb-14 sm:pt-36 sm:pb-18">
        <div className="pointer-events-none absolute inset-0 bg-grid bg-vignette opacity-50" aria-hidden="true" />
        <Container className="relative">
          <Breadcrumbs items={crumbs} tone="dark" className="mb-7" />
          <span className="font-mono text-xs uppercase tracking-[0.18em] text-signal">Solution {solution.index}</span>
          <h1 className="mt-5 max-w-4xl font-display text-4xl font-semibold leading-[1.05] tracking-tightest sm:text-5xl">{solution.title}</h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-fg-dim">{solution.summary}</p>
          <div className="mt-7 flex flex-wrap gap-2">
            {solution.audience.map((a) => (
              <span key={a} className="rounded border border-line bg-ink/60 px-2.5 py-1 font-mono text-[0.68rem] uppercase tracking-[0.1em] text-fg-dim">{a}</span>
            ))}
          </div>
          <CTAGroup className="mt-8">
            <Button href={primaryCta.href}>{solution.cta}</Button>
            <Button href={secondaryCta.href} variant="secondary">{secondaryCta.label}</Button>
          </CTAGroup>
        </Container>
      </DarkSection>

      <LightSection className="py-20 sm:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <div className="space-y-10">
                {solution.sections.map((sec) => (
                  <div key={sec.h}>
                    <h2 className="font-display text-xl font-semibold tracking-tight text-graphite">{sec.h}</h2>
                    {sec.p && <p className="mt-3 leading-relaxed text-graphite-dim">{sec.p}</p>}
                    {sec.list && (
                      <ul className="mt-4 space-y-2.5">
                        {sec.list.map((li) => (
                          <li key={li} className="flex gap-3 text-[0.92rem] leading-relaxed text-graphite-dim">
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rotate-45 bg-signal" aria-hidden="true" />
                            {li}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </div>
            <aside className="lg:col-span-5">
              <div className="sticky top-24 space-y-5">
                <div className="rounded-xl border border-mute bg-paper p-6">
                  <TechnicalLabel tone="light">Typical deliverables</TechnicalLabel>
                  <ul className="mt-3 space-y-2">
                    {solution.deliverablesShort.map((d) => (
                      <li key={d} className="flex gap-2.5 text-sm text-graphite-dim">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-steel" aria-hidden="true" />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
                {related.length > 0 && (
                  <div className="rounded-xl border border-mute bg-paper p-6">
                    <TechnicalLabel tone="light">Related services</TechnicalLabel>
                    <ul className="mt-3 space-y-2">
                      {related.map((sv) => (
                        <li key={sv.id}>
                          <Link href={`/services#${sv.id}`} className="text-sm text-graphite-dim transition-colors hover:text-signal-ink">{sv.title}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </aside>
          </div>
        </Container>
      </LightSection>

      {solution.slug === "new-build-bms" && (
        <DarkSection raised className="border-y border-line py-20 sm:py-24">
          <Container>
            <SectionHeader kicker="Architecture" title="One documented architecture, field device to operator interface." />
            <div className="mt-10"><ArchitectureDiagram /></div>
          </Container>
        </DarkSection>
      )}

      <CTABanner title="Discuss this scope on your project" />
    </>
  );
}
