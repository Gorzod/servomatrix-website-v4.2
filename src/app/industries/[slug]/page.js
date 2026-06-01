import { notFound } from "next/navigation";
import { Container, LightSection, DarkSection, TechnicalLabel, Button, CTAGroup, Breadcrumbs } from "@/components/ui";
import { CTABanner } from "@/components/sections";
import { industries, getIndustry } from "@/lib/industries";
import { primaryCta, secondaryCta } from "@/lib/site";
import { pageMeta, breadcrumbLd, JsonLd } from "@/lib/seo";

export function generateStaticParams() {
  return industries.map((i) => ({ slug: i.slug }));
}

export function generateMetadata({ params }) {
  const ind = getIndustry(params.slug);
  if (!ind) return {};
  return pageMeta({ title: `${ind.title} — BMS & controls`, description: ind.summary, path: `/industries/${ind.slug}` });
}

export default function IndustryPage({ params }) {
  const ind = getIndustry(params.slug);
  if (!ind) notFound();
  const crumbs = [{ label: "Home", href: "/" }, { label: "Industries", href: "/industries" }, { label: ind.title }];

  return (
    <>
      <JsonLd data={breadcrumbLd(crumbs)} />
      <DarkSection className="overflow-hidden border-b border-line pt-28 pb-14 sm:pt-36 sm:pb-18">
        <div className="pointer-events-none absolute inset-0 bg-grid bg-vignette opacity-50" aria-hidden="true" />
        <Container className="relative">
          <Breadcrumbs items={crumbs} tone="dark" className="mb-7" />
          <span className="font-mono text-xs uppercase tracking-[0.18em] text-signal">Sector</span>
          <h1 className="mt-5 max-w-4xl font-display text-4xl font-semibold leading-[1.05] tracking-tightest sm:text-5xl">{ind.title}</h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-fg-dim">{ind.summary}</p>
          <CTAGroup className="mt-8">
            <Button href={primaryCta.href}>{primaryCta.label}</Button>
            <Button href={secondaryCta.href} variant="secondary">{secondaryCta.label}</Button>
          </CTAGroup>
        </Container>
      </DarkSection>

      <LightSection className="py-20 sm:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7 space-y-10">
              <Block title="Key operational priorities">
                <ul className="mt-4 space-y-2.5">
                  {ind.priorities.map((p) => (
                    <li key={p} className="flex gap-3 text-[0.92rem] leading-relaxed text-graphite-dim">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rotate-45 bg-signal" aria-hidden="true" />{p}
                    </li>
                  ))}
                </ul>
              </Block>
              <Block title="Typical integration or commissioning concern">
                <p className="mt-3 leading-relaxed text-graphite-dim">{ind.concern}</p>
                {ind.note && (
                  <div className="mt-4 rounded-lg border border-mute bg-canvas-2 px-4 py-3">
                    <TechnicalLabel tone="light">{ind.note}</TechnicalLabel>
                  </div>
                )}
              </Block>
            </div>
            <aside className="lg:col-span-5 space-y-5">
              <div className="rounded-xl border border-mute bg-paper p-6">
                <TechnicalLabel tone="light">Typical systems controlled</TechnicalLabel>
                <ul className="mt-3 space-y-2">
                  {ind.systems.map((s) => (
                    <li key={s} className="flex gap-2.5 text-sm text-graphite-dim"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-steel" aria-hidden="true" />{s}</li>
                  ))}
                </ul>
              </div>
              <div className="rounded-xl border border-mute bg-paper p-6">
                <TechnicalLabel tone="light">Typical BMS deliverables</TechnicalLabel>
                <ul className="mt-3 space-y-2">
                  {ind.deliverables.map((s) => (
                    <li key={s} className="flex gap-2.5 text-sm text-graphite-dim"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rotate-45 bg-signal" aria-hidden="true" />{s}</li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </Container>
      </LightSection>

      <CTABanner title={`Planning a ${ind.title.toLowerCase()} controls scope?`} />
    </>
  );
}

function Block({ title, children }) {
  return (
    <div>
      <h2 className="font-display text-xl font-semibold tracking-tight text-graphite">{title}</h2>
      {children}
    </div>
  );
}
