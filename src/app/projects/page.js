import { Container, LightSection, TechnicalLabel } from "@/components/ui";
import { PageHero, CTABanner } from "@/components/sections";
import { ProjectEvidenceCard } from "@/components/cards";
import { ImagePlaceholder } from "@/components/visuals";
import { projects, projectsIntro } from "@/lib/projects";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Projects — engineering evidence, presented clearly",
  description:
    "Representative BMS delivery scopes across commercial, healthcare and hospitality buildings — the controls approach, systems integrated, protocols and deliverables. Verified project case studies are published following delivery and client approval.",
  path: "/projects",
});

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        kicker={projectsIntro.kicker}
        title={projectsIntro.title}
        lead={projectsIntro.lead}
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Projects" }]}
      />
      <LightSection className="py-20 sm:py-24">
        <Container>
          <div className="max-w-2xl rounded-lg border border-mute bg-canvas-2 px-4 py-3">
            <TechnicalLabel tone="light">{projectsIntro.note}</TechnicalLabel>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((p, i) => (
              <ProjectEvidenceCard key={p.slug} project={p} index={i} />
            ))}
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-3">
            <ImagePlaceholder tone="light" caption="Plant room — AHUs and pumps" />
            <ImagePlaceholder tone="light" caption="DDC panel internal layout" />
            <ImagePlaceholder tone="light" caption="Operator supervisory graphics" />
          </div>
        </Container>
      </LightSection>
      <CTABanner title="Have a project we should be discussing?" />
    </>
  );
}
