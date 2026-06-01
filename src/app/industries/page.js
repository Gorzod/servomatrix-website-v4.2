import { Container, LightSection, SectionHeader } from "@/components/ui";
import { PageHero, CTABanner } from "@/components/sections";
import { SectorCard } from "@/components/cards";
import { featuredIndustries, secondaryIndustries } from "@/lib/industries";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Industries — sector experience where controls carry risk",
  description:
    "BMS and controls experience across commercial and mixed-use, healthcare, hotels and hospitality, industrial and institutional, residential towers, retail and government buildings in the Middle East and Africa.",
  path: "/industries",
});

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        kicker="Industries"
        title="Sector experience where controls carry operational risk."
        lead="The control requirements of a hospital are not those of a hotel. We engineer to each sector's operational priorities, systems and commissioning expectations."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Industries" }]}
      />
      <LightSection className="py-20 sm:py-24">
        <Container>
          <SectionHeader tone="light" kicker="Primary sectors" title="Where we work most closely." />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {featuredIndustries.map((ind, i) => (
              <SectorCard key={ind.slug} industry={ind} index={i} tone="light" />
            ))}
          </div>
        </Container>
      </LightSection>
      <LightSection recessed className="border-t border-mute py-20 sm:py-24">
        <Container>
          <SectionHeader tone="light" kicker="Additional sectors" title="Further building types we support." />
          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            {secondaryIndustries.map((ind, i) => (
              <SectorCard key={ind.slug} industry={ind} index={i} tone="light" />
            ))}
          </div>
        </Container>
      </LightSection>
      <CTABanner />
    </>
  );
}
