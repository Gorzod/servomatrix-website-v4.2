import { Container, LightSection, DarkSection, SectionHeader } from "@/components/ui";
import { PageHero, CTABanner, ProcessTimeline } from "@/components/sections";
import { processSteps } from "@/lib/standards";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Process — from design review to lifecycle support",
  description:
    "The servomatrix ten-step delivery process: discovery and technical review, system architecture, points and I/O mapping, panel design, programming and graphics, factory checks, installation support, testing and commissioning, handover and training, and ongoing support.",
  path: "/process",
});

export default function ProcessPage() {
  return (
    <>
      <PageHero
        kicker="Process"
        title="A defined route from design review to lifecycle support."
        lead="Ten steps, each with a clear owner and a documented output. Discipline at each stage is what makes the system commissionable and maintainable."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Process" }]}
      />
      <DarkSection className="py-20 sm:py-28">
        <Container>
          <ProcessTimeline steps={processSteps} />
        </Container>
      </DarkSection>
      <CTABanner />
    </>
  );
}
