import { Container, LightSection } from "@/components/ui";
import { PageHero } from "@/components/sections";
import { site } from "@/lib/site";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Privacy notice",
  description: "How servomatrix handles the information submitted through enquiries and the website.",
  path: "/privacy",
});

const sections = [
  { h: "What this notice covers", p: "This notice explains how servomatrix handles information submitted through the enquiry form and other contact channels on this website." },
  { h: "Information we collect", p: "We collect the details you provide in an enquiry — such as name, company, work email, phone number, project location and the project information you choose to share. We do not ask for sensitive financial or identity information through this site." },
  { h: "How we use it", p: "Enquiry information is used to respond to your enquiry, to understand the controls scope and to identify the appropriate next step. We do not sell enquiry information." },
  { h: "Form processing", p: "Enquiries submitted through the form are transmitted to our inbox via a third-party form-handling service. The information in the enquiry is processed for the purpose of delivering it to us." },
  { h: "Retention", p: "Enquiry information is retained for as long as needed to respond and to maintain a record of the discussion, and is removed when no longer required." },
  { h: "Your choices", p: "You can ask us what enquiry information we hold about you, and request its correction or deletion, by contacting us using the details below." },
  { h: "Contact", p: `For any question about this notice or your information, contact ${site.email}.` },
];

export default function PrivacyPage() {
  return (
    <>
      <PageHero kicker="Privacy" title="Privacy notice" breadcrumbs={[{ label: "Home", href: "/" }, { label: "Privacy" }]} />
      <LightSection className="py-20 sm:py-24">
        <Container>
          <div className="prose-tech max-w-prose space-y-9">
            {sections.map((s) => (
              <section key={s.h}>
                <h2 className="font-display text-xl font-semibold tracking-tight">{s.h}</h2>
                <p className="mt-3">{s.p}</p>
              </section>
            ))}
            <p className="text-sm text-graphite-faint">This notice is provided for transparency and will be updated as the business formalises its data-handling arrangements.</p>
          </div>
        </Container>
      </LightSection>
    </>
  );
}
