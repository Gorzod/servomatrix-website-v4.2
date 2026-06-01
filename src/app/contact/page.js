import { Container, LightSection, TechnicalLabel } from "@/components/ui";
import { PageHero } from "@/components/sections";
import ContactForm from "@/components/ContactForm";
import { site } from "@/lib/site";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Contact — discuss a building controls project",
  description:
    "Discuss a BMS package, controls upgrade or commissioning scope with servomatrix. Send the available drawings, specifications, points schedule or project brief and we will identify the appropriate next step.",
  path: "/contact",
});

const channels = [
  { k: "Email", v: site.email, href: `mailto:${site.email}` },
  { k: "Phone / WhatsApp", v: site.phone, href: `tel:${site.phone.replace(/\s/g, "")}` },
  { k: "LinkedIn", v: "servomatrix", href: site.linkedin },
  { k: "Service region", v: `${site.location} · ${site.serves}` },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        kicker="Contact"
        title="Tell us about the building, the controls scope or the problem that needs resolving."
        lead="Send the available drawings, specifications, points schedule or project brief. We will review the control requirements and identify the most practical next step."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
      />
      <LightSection className="py-20 sm:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <ContactForm />
            </div>
            <aside className="lg:col-span-5">
              <div className="sticky top-24 space-y-5">
                <div className="rounded-xl border border-mute bg-paper p-6">
                  <TechnicalLabel tone="light">Direct channels</TechnicalLabel>
                  <dl className="mt-4 space-y-4">
                    {channels.map((c) => (
                      <div key={c.k}>
                        <dt className="font-mono text-[0.62rem] uppercase tracking-[0.12em] text-graphite-faint">{c.k}</dt>
                        <dd className="mt-0.5">
                          {c.href ? (
                            <a href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined} className="text-graphite transition-colors hover:text-signal-ink">{c.v}</a>
                          ) : (
                            <span className="text-graphite">{c.v}</span>
                          )}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
                <div className="rounded-xl border border-mute bg-canvas-2 p-6">
                  <TechnicalLabel tone="light">Documents</TechnicalLabel>
                  <p className="mt-3 text-sm leading-relaxed text-graphite-dim">
                    Have drawings, specifications or a points schedule? Mention them in the project
                    summary and we will arrange the appropriate document submission method.
                  </p>
                </div>
              </div>
            </aside>
          </div>
        </Container>
      </LightSection>
    </>
  );
}
