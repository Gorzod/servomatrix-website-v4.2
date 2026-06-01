import { notFound } from "next/navigation";
import { Container, LightSection, Button, Breadcrumbs, TechnicalLabel } from "@/components/ui";
import { resources, getResource } from "@/lib/resources";
import { pageMeta, articleLd, breadcrumbLd, JsonLd } from "@/lib/seo";

export function generateStaticParams() {
  return resources.map((r) => ({ slug: r.slug }));
}

export function generateMetadata({ params }) {
  const r = getResource(params.slug);
  if (!r) return {};
  return pageMeta({ title: r.title, description: r.summary, path: `/resources/${r.slug}` });
}

function slug(s) {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

export default function ResourcePage({ params }) {
  const r = getResource(params.slug);
  if (!r) notFound();
  const crumbs = [{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: r.shortTitle }];

  return (
    <>
      <JsonLd data={articleLd({ headline: r.title, description: r.summary, path: `/resources/${r.slug}` })} />
      <JsonLd data={breadcrumbLd(crumbs)} />
      <LightSection className="min-h-screen pt-28 pb-20 sm:pt-32">
        <Container>
          <Breadcrumbs items={crumbs} tone="light" className="mb-8 no-print" />
          <div className="grid gap-12 lg:grid-cols-12">
            {/* TOC */}
            <aside className="no-print lg:col-span-3 lg:order-last">
              <div className="sticky top-24 rounded-xl border border-mute bg-paper p-5">
                <TechnicalLabel tone="light">On this page</TechnicalLabel>
                <nav aria-label="Table of contents" className="mt-3">
                  <ol className="space-y-2">
                    {r.sections.map((s) => (
                      <li key={s.h}>
                        <a href={`#${slug(s.h)}`} className="text-sm text-graphite-dim transition-colors hover:text-signal-ink">{s.h}</a>
                      </li>
                    ))}
                  </ol>
                </nav>
              </div>
            </aside>

            {/* Article */}
            <article className="lg:col-span-9 max-w-prose">
              <div className="flex items-center gap-3 font-mono text-[0.66rem] uppercase tracking-[0.12em] text-graphite-faint">
                <span className="rounded border border-mute bg-canvas px-2 py-0.5">{r.type}</span>
                <span>{r.readingTime}</span>
              </div>
              <h1 className="mt-5 font-display text-3xl font-semibold leading-tight tracking-tightest text-graphite sm:text-4xl">{r.title}</h1>
              <p className="mt-5 text-lg leading-relaxed text-graphite-dim">{r.intro}</p>
              <div className="prose-tech mt-10 space-y-9">
                {r.sections.map((s) => (
                  <section key={s.h} id={slug(s.h)} className="scroll-mt-24">
                    <h2 className="font-display text-xl font-semibold tracking-tight">{s.h}</h2>
                    <p className="mt-3">{s.p}</p>
                  </section>
                ))}
              </div>
              <div className="mt-12 rounded-xl border border-mute bg-paper p-7 no-print">
                <h2 className="font-display text-lg font-semibold tracking-tight text-graphite">Working through this on a live project?</h2>
                <p className="mt-2 text-sm leading-relaxed text-graphite-dim">Send the project details and we will review the controls scope with you.</p>
                <Button href={r.cta.href} tone="light" className="mt-5">{r.cta.label}</Button>
              </div>
            </article>
          </div>
        </Container>
      </LightSection>
    </>
  );
}
