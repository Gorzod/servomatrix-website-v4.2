import { notFound } from "next/navigation";
import Link from "next/link";
import { Container, LightSection, DarkSection, TechnicalLabel, Button, CTAGroup, Breadcrumbs } from "@/components/ui";
import { CTABanner } from "@/components/sections";
import { ImagePlaceholder } from "@/components/visuals";
import { projects, getProject, projectStatusLabels } from "@/lib/projects";
import { services } from "@/lib/services";
import { primaryCta, secondaryCta } from "@/lib/site";
import { pageMeta, breadcrumbLd, JsonLd } from "@/lib/seo";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }) {
  const p = getProject(params.slug);
  if (!p) return {};
  return pageMeta({ title: `${p.title} — ${projectStatusLabels[p.status]}`, description: p.challenge, path: `/projects/${p.slug}` });
}

export default function ProjectPage({ params }) {
  const project = getProject(params.slug);
  if (!project) notFound();
  const isRep = project.status === "representative";
  const related = project.relatedServices.map((id) => services.find((s) => s.id === id)).filter(Boolean);
  const crumbs = [{ label: "Home", href: "/" }, { label: "Projects", href: "/projects" }, { label: project.title }];

  return (
    <>
      <JsonLd data={breadcrumbLd(crumbs)} />
      <DarkSection className="overflow-hidden border-b border-line pt-28 pb-14 sm:pt-36 sm:pb-18">
        <div className="pointer-events-none absolute inset-0 bg-grid bg-vignette opacity-50" aria-hidden="true" />
        <Container className="relative">
          <Breadcrumbs items={crumbs} tone="dark" className="mb-7" />
          <span className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 font-mono text-[0.6rem] uppercase tracking-[0.12em] ${isRep ? "border-steel/40 bg-steel/10 text-steel" : "border-signal/40 bg-signal-soft text-signal"}`}>
            <span className={`h-1.5 w-1.5 rounded-full ${isRep ? "bg-steel" : "bg-signal"}`} aria-hidden="true" />
            {projectStatusLabels[project.status]}
          </span>
          <h1 className="mt-5 max-w-4xl font-display text-4xl font-semibold leading-[1.05] tracking-tightest sm:text-5xl">{project.title}</h1>
          <div className="mt-5 flex flex-wrap gap-x-5 gap-y-1 font-mono text-[0.7rem] uppercase tracking-[0.1em] text-fg-faint">
            <span>{project.sector}</span><span aria-hidden="true">·</span>
            <span>{project.buildingType}</span><span aria-hidden="true">·</span>
            <span>{project.location}</span><span aria-hidden="true">·</span>
            <span>{project.stage}</span>
          </div>
        </Container>
      </DarkSection>

      <LightSection className="py-20 sm:py-24">
        <Container>
          {isRep && (
            <div className="mb-10 rounded-lg border border-mute bg-canvas-2 px-4 py-3">
              <TechnicalLabel tone="light">This is a representative delivery scope describing the engineering approach for this building category. It is not presented as a completed servomatrix project.</TechnicalLabel>
            </div>
          )}
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7 space-y-10">
              <Block title="Challenge"><p className="mt-3 leading-relaxed text-graphite-dim">{project.challenge}</p></Block>
              <Block title="Controls approach"><p className="mt-3 leading-relaxed text-graphite-dim">{project.approach}</p></Block>
              <Block title="Systems integrated">
                <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
                  {project.systems.map((s) => (
                    <li key={s} className="flex gap-3 rounded-lg border border-mute bg-paper px-4 py-3 text-sm text-graphite-dim"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rotate-45 bg-signal" aria-hidden="true" />{s}</li>
                  ))}
                </ul>
              </Block>
              {project.note && (
                <div className="rounded-lg border border-mute bg-canvas-2 px-4 py-3"><TechnicalLabel tone="light">{project.note}</TechnicalLabel></div>
              )}
            </div>
            <aside className="lg:col-span-5 space-y-5">
              <ImagePlaceholder tone="light" caption={`${project.buildingType} — illustrative`} />
              <div className="rounded-xl border border-mute bg-paper p-6">
                <TechnicalLabel tone="light">Protocols</TechnicalLabel>
                <ul className="mt-3 flex flex-wrap gap-1.5">
                  {project.protocols.map((p) => <li key={p} className="rounded border border-mute bg-canvas px-2 py-1 font-mono text-[0.66rem] text-graphite-dim">{p}</li>)}
                </ul>
              </div>
              <div className="rounded-xl border border-mute bg-paper p-6">
                <TechnicalLabel tone="light">Deliverables</TechnicalLabel>
                <ul className="mt-3 space-y-2">
                  {project.deliverables.map((d) => <li key={d} className="flex gap-2.5 text-sm text-graphite-dim"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-steel" aria-hidden="true" />{d}</li>)}
                </ul>
              </div>
              {related.length > 0 && (
                <div className="rounded-xl border border-mute bg-paper p-6">
                  <TechnicalLabel tone="light">Related services</TechnicalLabel>
                  <ul className="mt-3 space-y-2">
                    {related.map((s) => <li key={s.id}><Link href={`/services#${s.id}`} className="text-sm text-graphite-dim transition-colors hover:text-signal-ink">{s.title}</Link></li>)}
                  </ul>
                </div>
              )}
            </aside>
          </div>
        </Container>
      </LightSection>

      <CTABanner title="Discuss a similar scope on your building" />
    </>
  );
}

function Block({ title, children }) {
  return <div><h2 className="font-display text-xl font-semibold tracking-tight text-graphite">{title}</h2>{children}</div>;
}
