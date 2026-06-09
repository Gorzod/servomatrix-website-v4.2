import Link from "next/link";

// Theme-aware button. tone="dark" (on dark bg) | "light" (on light bg).
export function Button({ href, children, variant = "primary", tone = "dark", className = "", ...rest }) {
  const base =
    "group relative inline-flex items-center justify-center gap-2 text-sm font-medium tracking-tight transition-all duration-300 ease-premium select-none rounded-md px-5 py-3 overflow-hidden";
  const styles = {
    primary:
      "bg-signal text-ink shadow-elev-1 hover:-translate-y-[2px] hover:shadow-signal-glow active:translate-y-0 before:absolute before:inset-0 before:bg-signal-sheen before:opacity-60 before:transition-opacity hover:before:opacity-90",
    secondary:
      tone === "light"
        ? "border border-mute-strong text-graphite hover:border-signal-ink hover:text-signal-ink hover:-translate-y-[2px] hover:shadow-card-light active:translate-y-0"
        : "border border-line-strong text-fg hover:border-signal/70 hover:text-signal hover:-translate-y-[2px] hover:bg-fg/[0.03] active:translate-y-0",
    ghost:
      tone === "light"
        ? "px-1 py-1 text-graphite-dim hover:text-graphite"
        : "px-1 py-1 text-fg-dim hover:text-fg",
  };
  const cls = `${base} ${styles[variant]} ${className}`;
  const arrow = (
    <span className="transition-transform duration-300 ease-premium group-hover:translate-x-1" aria-hidden="true">
      &rarr;
    </span>
  );
  const content = (
    <span className="relative z-10 inline-flex items-center gap-2">
      {children}
      {variant !== "ghost" && arrow}
    </span>
  );
  if (href) {
    return (
      <Link href={href} className={cls} {...rest}>
        {content}
      </Link>
    );
  }
  return (
    <button className={cls} {...rest}>
      {content}
    </button>
  );
}

export function CTAGroup({ children, className = "" }) {
  return <div className={`flex flex-wrap items-center gap-3 ${className}`}>{children}</div>;
}

// Mono micro-label. tone-aware.
export function Kicker({ children, tone = "dark", className = "" }) {
  return (
    <span className={`kicker inline-flex items-center gap-2.5 ${tone === "light" ? "kicker-dark" : ""} ${className}`}>
      <span className="inline-flex items-center gap-1" aria-hidden="true">
        <span className="h-1.5 w-1.5 rounded-full bg-signal shadow-signal-glow" />
        <span className="h-px w-6 bg-gradient-to-r from-signal/80 to-signal/0" />
      </span>
      {children}
    </span>
  );
}

export function TechnicalLabel({ children, tone = "dark", className = "" }) {
  return (
    <span
      className={`font-mono text-[0.68rem] uppercase tracking-[0.18em] ${
        tone === "light" ? "text-graphite-faint" : "text-fg-faint"
      } ${className}`}
    >
      {children}
    </span>
  );
}

export function Container({ children, className = "" }) {
  return <div className={`mx-auto w-full max-w-site px-5 sm:px-8 ${className}`}>{children}</div>;
}

// Light page band.
export function LightSection({ children, className = "", id, recessed = false }) {
  return (
    <section
      id={id}
      className={`relative ${recessed ? "bg-canvas-2" : "bg-canvas"} text-graphite ${className}`}
    >
      {children}
    </section>
  );
}

// Dark page band.
export function DarkSection({ children, className = "", id, raised = false }) {
  return (
    <section id={id} className={`relative ${raised ? "bg-ink-2" : "bg-ink"} text-fg ${className}`}>
      {children}
    </section>
  );
}

export function Section({ children, className = "", id }) {
  return (
    <section id={id} className={`relative ${className}`}>
      {children}
    </section>
  );
}

// Section heading block.
export function SectionHeader({ kicker, title, lead, tone = "dark", align = "left", className = "" }) {
  const dim = tone === "light" ? "text-graphite-dim" : "text-fg-dim";
  return (
    <div className={`${align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"} ${className}`}>
      {kicker && <Kicker tone={tone}>{kicker}</Kicker>}
      {title && (
        <h2 className="mt-5 font-display text-[1.7rem] font-semibold leading-[1.08] tracking-tightest sm:text-4xl md:text-[2.55rem]">
          {title}
        </h2>
      )}
      {lead && <p className={`mt-5 text-base leading-relaxed [text-wrap:pretty] sm:text-lg ${dim}`}>{lead}</p>}
    </div>
  );
}

// Breadcrumbs with schema-friendly markup. tone-aware.
export function Breadcrumbs({ items, tone = "light", className = "" }) {
  const dim = tone === "light" ? "text-graphite-faint" : "text-fg-faint";
  const link = tone === "light" ? "hover:text-graphite" : "hover:text-fg";
  return (
    <nav aria-label="Breadcrumb" className={`font-mono text-xs ${dim} ${className}`}>
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((it, i) => (
          <li key={it.href || it.label} className="flex items-center gap-2">
            {i > 0 && <span aria-hidden="true">/</span>}
            {it.href ? (
              <Link href={it.href} className={`transition-colors ${link}`}>
                {it.label}
              </Link>
            ) : (
              <span aria-current="page" className={tone === "light" ? "text-graphite-dim" : "text-fg-dim"}>
                {it.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
