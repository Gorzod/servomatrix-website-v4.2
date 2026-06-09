import { Container, Kicker, Button, CTAGroup, Breadcrumbs } from "./ui";
import Reveal from "./Reveal";
import { processSteps, assuranceBar } from "@/lib/content";
import { primaryCta, secondaryCta, site } from "@/lib/site";

// ---- Inner-page hero (dark) ----
export function PageHero({ kicker, title, lead, breadcrumbs, children }) {
  return (
    <section className="grain relative overflow-hidden border-b border-line bg-ink pt-28 pb-14 sm:pt-36 sm:pb-18">
      <div className="pointer-events-none absolute inset-0 bg-hero-mesh" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-0 bg-grid bg-vignette opacity-50" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px hairline-gradient" aria-hidden="true" />
      <Container className="relative">
        {breadcrumbs && (
          <Reveal className="mb-7">
            <Breadcrumbs items={breadcrumbs} tone="dark" />
          </Reveal>
        )}
        <Reveal>
          <Kicker>{kicker}</Kicker>
        </Reveal>
        <Reveal delay={80}>
          <h1 className="mt-6 max-w-4xl font-display text-4xl font-semibold leading-[1.04] tracking-tightest sm:text-5xl md:text-[3.4rem]">
            {title}
          </h1>
        </Reveal>
        {lead && (
          <Reveal delay={160}>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-fg-dim">{lead}</p>
          </Reveal>
        )}
        {children && <Reveal delay={220}>{children}</Reveal>}
      </Container>
    </section>
  );
}

// ---- Closing CTA ----
export function CTABanner({
  title = "Planning a BMS package, controls upgrade or commissioning scope?",
  body = "Send the available drawings, specifications, points schedule or project brief. We will review the control requirements and identify the most practical next step.",
}) {
  return (
    <section className="grain relative overflow-hidden border-y border-line bg-ink-2 py-20 sm:py-24">
      <div className="pointer-events-none absolute inset-0 bg-dots opacity-[0.4]" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px hairline-signal" aria-hidden="true" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-64 w-[36rem] -translate-x-1/2 glow-signal opacity-70" aria-hidden="true" />
      <Container className="relative text-center">
        <Reveal>
          <h2 className="mx-auto max-w-3xl font-display text-3xl font-semibold leading-tight tracking-tightest sm:text-4xl md:text-[2.7rem]">
            {title}
          </h2>
        </Reveal>
        <Reveal delay={100}>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-fg-dim">{body}</p>
        </Reveal>
        <Reveal delay={180}>
          <CTAGroup className="mt-9 justify-center">
            <Button href={primaryCta.href}>{primaryCta.label}</Button>
            <Button href={secondaryCta.href} variant="secondary">{secondaryCta.label}</Button>
          </CTAGroup>
        </Reveal>
        <Reveal delay={240}>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 font-mono text-[0.72rem] text-fg-faint">
            <a href={`mailto:${site.email}`} className="transition-colors hover:text-signal">{site.email}</a>
            <span aria-hidden="true">·</span>
            <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="transition-colors hover:text-signal">{site.phone}</a>
            <span aria-hidden="true">·</span>
            <span>{site.location}</span>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

// ---- Looping protocol / capability marquee ----
export function AssuranceBar({ tone = "dark" }) {
  const dark = tone === "dark";
  const text = dark ? "text-fg-dim" : "text-graphite-dim";
  return (
    <div className={`border-y ${dark ? "border-line bg-ink-2" : "border-mute bg-canvas-2"}`}>
      {/* Static, ordered list for assistive technology */}
      <ul className="sr-only" aria-label="Supported protocols and capabilities">
        {assuranceBar.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      {/* Visual marquee — decorative duplicate, paused on hover and for reduced motion */}
      <div aria-hidden="true" className="group marquee-mask relative flex overflow-hidden py-4">
        <ul className="flex w-max shrink-0 items-center animate-marquee group-hover:[animation-play-state:paused] motion-reduce:animate-none">
          {[...assuranceBar, ...assuranceBar].map((item, i) => (
            <li key={i} className="flex items-center gap-9 pr-9">
              <span className={`whitespace-nowrap font-mono text-[0.78rem] tracking-wide ${text}`}>{item}</span>
              <span className="h-1 w-1 shrink-0 rounded-full bg-signal/70" />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

// ---- Process timeline (dark) ----
export function ProcessTimeline({ steps = processSteps }) {
  return (
    <ol className="relative">
      <span className="absolute left-[15px] top-2 bottom-2 w-px bg-line md:left-1/2 md:-translate-x-px" aria-hidden="true" />
      {steps.map((step, i) => (
        <Reveal
          as="li"
          key={step.n}
          delay={(i % 2) * 60}
          className={`relative mb-10 flex gap-6 md:mb-12 md:w-1/2 ${i % 2 === 0 ? "md:pr-12" : "md:ml-auto md:flex-row-reverse md:pl-12"}`}
        >
          <span className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-line-strong bg-ink font-mono text-xs text-signal">
            {step.n}
          </span>
          <div className={`${i % 2 === 0 ? "" : "md:text-right"}`}>
            <h3 className="font-display text-lg font-semibold tracking-tight text-fg">{step.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-fg-dim">{step.body}</p>
          </div>
        </Reveal>
      ))}
    </ol>
  );
}
