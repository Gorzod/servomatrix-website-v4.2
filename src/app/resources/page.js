import { Container, LightSection } from "@/components/ui";
import { PageHero, CTABanner } from "@/components/sections";
import { ResourceCard } from "@/components/cards";
import { resources, resourcesIntro } from "@/lib/resources";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Resources — technical references for BMS projects",
  description:
    "Technical references for consultants, developers and contractors: a BMS tender review checklist, a third-party integration checklist, and a guide to the BMS documentation stack from design intent to operable controls.",
  path: "/resources",
});

export default function ResourcesPage() {
  return (
    <>
      <PageHero
        kicker={resourcesIntro.kicker}
        title={resourcesIntro.title}
        lead={resourcesIntro.lead}
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Resources" }]}
      />
      <LightSection className="py-20 sm:py-24">
        <Container>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {resources.map((r, i) => <ResourceCard key={r.slug} resource={r} index={i} />)}
          </div>
        </Container>
      </LightSection>
      <CTABanner />
    </>
  );
}
