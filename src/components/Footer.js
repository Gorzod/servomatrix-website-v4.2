import Link from "next/link";
import Logo from "./Logo";
import { Container } from "./ui";
import { nav, site, footerCatalogue, primaryCta } from "@/lib/site";
import { solutions } from "@/lib/solutions";

export default function Footer() {
  return (
    <footer className="relative border-t border-line bg-ink-2">
      <Container className="py-16">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Logo />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-fg-dim">
              Specialist building management systems and controls integration — design support,
              programming, commissioning and lifecycle support across the Middle East and Africa.
            </p>
            <p className="mt-6 text-sm text-fg">{site.location}</p>
            <p className="text-sm text-fg-dim">Serving {site.serves}</p>
            <a href={`mailto:${site.email}`} className="mt-3 block text-sm text-fg-dim transition-colors hover:text-signal">{site.email}</a>
            <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="mt-1 block text-sm text-fg-dim transition-colors hover:text-signal">{site.phone}</a>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 lg:col-span-8">
            <div>
              <h3 className="kicker mb-4">Solutions</h3>
              <ul className="space-y-2.5">
                {solutions.map((s) => (
                  <li key={s.slug}>
                    <Link href={`/solutions/${s.slug}`} className="text-sm text-fg-dim transition-colors hover:text-fg">{s.title}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="kicker mb-4">Services</h3>
              <ul className="space-y-2.5">
                {footerCatalogue.map((s) => (
                  <li key={s.href}>
                    <Link href={s.href} className="text-sm text-fg-dim transition-colors hover:text-fg">{s.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="kicker mb-4">Company</h3>
              <ul className="space-y-2.5">
                {nav.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="text-sm text-fg-dim transition-colors hover:text-fg">{item.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="kicker mb-4">Connect</h3>
              <ul className="space-y-2.5">
                <li>
                  <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="text-sm text-fg-dim transition-colors hover:text-fg">LinkedIn</a>
                </li>
                <li>
                  <Link href={primaryCta.href} className="text-sm text-fg-dim transition-colors hover:text-fg">{primaryCta.label}</Link>
                </li>
                <li>
                  <Link href="/privacy" className="text-sm text-fg-dim transition-colors hover:text-fg">Privacy</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-line pt-7 text-xs text-fg-faint sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <p className="font-mono tracking-wider">BMS &middot; CONTROLS &middot; INTEGRATION &middot; COMMISSIONING</p>
        </div>
      </Container>
    </footer>
  );
}
