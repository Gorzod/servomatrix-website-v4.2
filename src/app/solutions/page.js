import { Container, LightSection } from "@/components/ui";
import { PageHero, CTABanner } from "@/components/sections";
import { SolutionCard } from "@/components/cards";
import { solutions, solutionsIntro } from "@/lib/solutions";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Solutions — BMS delivery, retrofit, commissioning, energy & support",
  description:
    "Building controls solutions aligned to the building's stage and risk: new-build BMS delivery, retrofit and modernisation, commissioning support, energy monitoring and remote lifecycle support across the Middle East and Africa.",
  path: "/solutions",
});

export default function SolutionsPage() {
  return (
    <>
      <PageHero
        kicker={solutionsIntro.kicker}
        title={solutionsIntro.title}
        lead={solutionsIntro.lead}
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Solutions" }]}
      />
      <LightSection className="py-20 sm:py-28">
        <Container>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {solutions.map((s, i) => (
              <SolutionCard key={s.slug} solution={s} index={i} />
            ))}
          </div>
        </Container>
      </LightSection>
      <CTABanner />
    </>
  );
}
