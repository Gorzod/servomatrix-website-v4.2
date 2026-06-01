import Link from "next/link";
import Reveal from "./Reveal";
import { TechnicalLabel } from "./ui";
import { projectStatusLabels } from "@/lib/projects";

/* Solution pathway card — light surface. */
export function SolutionCard({ solution, index = 0 }) {
  return (
    <Reveal
      delay={(index % 3) * 70}
      className="group flex h-full flex-col rounded-xl border border-mute bg-paper p-6 transition-all duration-300 hover:border-mute-strong hover:shadow-[0_18px_50px_-30px_rgba(15,22,32,0.35)]"
    >
      <div className="flex items-center justify-between">
        <span className="font-mono text-xs tracking-widest text-graphite-faint">{solution.index}</span>
        <span className="h-2 w-2 rounded-full bg-graphite-faint/50 transition-colors duration-300 group-hover:bg-signal" />
      </div>
      <h3 className="mt-5 font-display text-xl font-semibold tracking-tight text-graphite">{solution.title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-graphite-dim">{solution.summary}</p>
      <dl className="mt-5 space-y-2 border-t border-mute pt-4">
        <Row k="Situation" v={solution.situation} />
        <Row k="Scope" v={solution.scope} />
      </dl>
      <div className="mt-4">
        <TechnicalLabel tone="light">Typical deliverables</TechnicalLabel>
        <ul className="mt-2 flex flex-wrap gap-1.5">
          {solution.deliverablesShort.map((d) => (
            <li key={d} className="rounded border border-mute bg-canvas px-2 py-1 text-[0.7rem] text-graphite-dim">
              {d}
            </li>
          ))}
        </ul>
      </div>
      <Link
        href={`/solutions/${solution.slug}`}
        className="mt-6 inline-flex items-center gap-1.5 text-sm text-graphite-dim transition-colors group-hover:text-signal-ink"
      >
        Explore this solution
        <span className="transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden="true">&rarr;</span>
      </Link>
    </Reveal>
  );
}

function Row({ k, v }) {
  return (
    <div>
      <dt className="font-mono text-[0.6rem] uppercase tracking-[0.14em] text-graphite-faint">{k}</dt>
      <dd className="mt-0.5 text-[0.82rem] leading-relaxed text-graphite-dim">{v}</dd>
    </div>
  );
}

/* Sector card — light or dark via tone. */
export function SectorCard({ industry, index = 0, tone = "light" }) {
  const dark = tone === "dark";
  return (
    <Reveal
      delay={(index % 2) * 80}
      className={`group flex h-full flex-col rounded-xl border p-6 transition-all duration-300 ${
        dark
          ? "border-line bg-surface/50 hover:border-line-strong hover:bg-surface"
          : "border-mute bg-paper hover:border-mute-strong hover:shadow-[0_18px_50px_-30px_rgba(15,22,32,0.35)]"
      }`}
    >
      <h3 className={`font-display text-lg font-semibold tracking-tight ${dark ? "text-fg" : "text-graphite"}`}>
        {industry.title}
      </h3>
      <p className={`mt-2 text-sm leading-relaxed ${dark ? "text-fg-dim" : "text-graphite-dim"}`}>{industry.summary}</p>
      <div className="mt-5">
        <TechnicalLabel tone={dark ? "dark" : "light"}>Operational priority</TechnicalLabel>
        <p className={`mt-1.5 text-[0.82rem] leading-relaxed ${dark ? "text-fg-dim" : "text-graphite-dim"}`}>
          {industry.priorities[0]}
        </p>
      </div>
      <div className="mt-4">
        <TechnicalLabel tone={dark ? "dark" : "light"}>Typical systems</TechnicalLabel>
        <ul className="mt-2 flex flex-wrap gap-1.5">
          {industry.systems.slice(0, 3).map((s) => (
            <li
              key={s}
              className={`rounded border px-2 py-1 text-[0.68rem] ${
                dark ? "border-line bg-ink/60 text-fg-dim" : "border-mute bg-canvas text-graphite-dim"
              }`}
            >
              {s}
            </li>
          ))}
        </ul>
      </div>
      <Link
        href={`/industries/${industry.slug}`}
        className={`mt-6 inline-flex items-center gap-1.5 text-sm transition-colors ${
          dark ? "text-fg-dim hover:text-signal" : "text-graphite-dim hover:text-signal-ink"
        }`}
      >
        Sector detail
        <span className="transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden="true">&rarr;</span>
      </Link>
    </Reveal>
  );
}

/* Project evidence / representative scope card. */
export function ProjectEvidenceCard({ project, index = 0 }) {
  const statusLabel = projectStatusLabels[project.status];
  const isRep = project.status === "representative";
  return (
    <Reveal
      delay={(index % 3) * 70}
      className="group flex h-full flex-col rounded-xl border border-mute bg-paper p-6 transition-all duration-300 hover:border-mute-strong hover:shadow-[0_18px_50px_-30px_rgba(15,22,32,0.35)]"
    >
      <div className="flex items-center gap-2">
        <span
          className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 font-mono text-[0.58rem] uppercase tracking-[0.12em] ${
            isRep ? "border-steel/40 bg-steel/10 text-steel-light" : "border-signal/40 bg-signal-soft text-signal-ink"
          }`}
        >
          <span className={`h-1.5 w-1.5 rounded-full ${isRep ? "bg-steel" : "bg-signal"}`} aria-hidden="true" />
          {statusLabel}
        </span>
      </div>
      <h3 className="mt-4 font-display text-lg font-semibold tracking-tight text-graphite">{project.title}</h3>
      <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 font-mono text-[0.62rem] uppercase tracking-[0.1em] text-graphite-faint">
        <span>{project.buildingType}</span>
        <span>·</span>
        <span>{project.location}</span>
      </div>
      <p className="mt-4 text-sm leading-relaxed text-graphite-dim">{project.challenge}</p>
      <div className="mt-5">
        <TechnicalLabel tone="light">Protocols</TechnicalLabel>
        <ul className="mt-2 flex flex-wrap gap-1.5">
          {project.protocols.map((p) => (
            <li key={p} className="rounded border border-mute bg-canvas px-2 py-1 font-mono text-[0.66rem] text-graphite-dim">
              {p}
            </li>
          ))}
        </ul>
      </div>
      <Link
        href={`/projects/${project.slug}`}
        className="mt-6 inline-flex items-center gap-1.5 text-sm text-graphite-dim transition-colors group-hover:text-signal-ink"
      >
        Scope detail
        <span className="transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden="true">&rarr;</span>
      </Link>
    </Reveal>
  );
}

/* Deliverable tile with small technical visual. */
export function DeliverableCard({ deliverable, visual, index = 0, tone = "light" }) {
  const dark = tone === "dark";
  return (
    <Reveal
      delay={(index % 3) * 60}
      className={`flex h-full flex-col rounded-xl border p-5 ${
        dark ? "border-line bg-ink-2" : "border-mute bg-paper"
      }`}
    >
      {visual && <div className="mb-4">{visual}</div>}
      <h3 className={`font-display text-base font-semibold tracking-tight ${dark ? "text-fg" : "text-graphite"}`}>
        {deliverable.title}
      </h3>
      <p className={`mt-1.5 text-[0.82rem] leading-relaxed ${dark ? "text-fg-dim" : "text-graphite-dim"}`}>
        {deliverable.body}
      </p>
    </Reveal>
  );
}

/* Trust / assurance block. */
export function TrustAssuranceBlock({ block, index = 0, tone = "dark" }) {
  const dark = tone === "dark";
  return (
    <Reveal
      delay={(index % 2) * 70}
      className={`relative rounded-xl border p-6 ${dark ? "border-line bg-ink-2" : "border-mute bg-paper"}`}
    >
      <span className="absolute left-0 top-6 h-8 w-px bg-signal" aria-hidden="true" />
      <h3 className={`pl-4 font-display text-lg font-semibold tracking-tight ${dark ? "text-fg" : "text-graphite"}`}>
        {block.title}
      </h3>
      <p className={`mt-2.5 pl-4 text-sm leading-relaxed ${dark ? "text-fg-dim" : "text-graphite-dim"}`}>
        {block.body}
      </p>
    </Reveal>
  );
}

/* Resource card. */
export function ResourceCard({ resource, index = 0 }) {
  return (
    <Reveal
      delay={(index % 3) * 70}
      className="group flex h-full flex-col rounded-xl border border-mute bg-paper p-6 transition-all duration-300 hover:border-mute-strong hover:shadow-[0_18px_50px_-30px_rgba(15,22,32,0.35)]"
    >
      <div className="flex items-center justify-between">
        <span className="rounded border border-mute bg-canvas px-2 py-0.5 font-mono text-[0.6rem] uppercase tracking-[0.12em] text-graphite-faint">
          {resource.type}
        </span>
        <span className="font-mono text-[0.62rem] text-graphite-faint">{resource.readingTime}</span>
      </div>
      <h3 className="mt-4 font-display text-lg font-semibold leading-snug tracking-tight text-graphite">
        {resource.shortTitle}
      </h3>
      <p className="mt-2.5 flex-1 text-sm leading-relaxed text-graphite-dim">{resource.summary}</p>
      <Link
        href={`/resources/${resource.slug}`}
        className="mt-6 inline-flex items-center gap-1.5 text-sm text-graphite-dim transition-colors group-hover:text-signal-ink"
      >
        Read reference
        <span className="transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden="true">&rarr;</span>
      </Link>
    </Reveal>
  );
}
