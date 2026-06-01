import Link from "next/link";

// Theme-aware button. tone="dark" (on dark bg) | "light" (on light bg).
export function Button({ href, children, variant = "primary", tone = "dark", className = "", ...rest }) {
  const base =
    "group inline-flex items-center justify-center gap-2 text-sm font-medium tracking-tight transition-all duration-200 select-none rounded-md px-5 py-3";
  const styles = {
    primary:
      "bg-signal text-ink hover:bg-[#f6b658] hover:-translate-y-[1px] shadow-[0_1px_0_rgba(255,255,255,0.18)_inset]",
    secondary:
      tone === "light"
        ? "border border-mute-strong text-graphite hover:border-signal-ink hover:text-signal-ink hover:-translate-y-[1px]"
        : "border border-line-strong text-fg hover:border-signal hover:text-signal hover:-translate-y-[1px]",
    ghost:
      tone === "light"
        ? "px-1 py-1 text-graphite-dim hover:text-graphite"
        : "px-1 py-1 text-fg-dim hover:text-fg",
  };
  const cls = `${base} ${styles[variant]} ${className}`;
  const arrow = (
    <span className="transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden="true">
      &rarr;
    </span>
  );
  const content = (
    <>
      {children}
      {variant !== "ghost" && arrow}
    </>
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
    <span className={`kicker inline-flex items-center gap-2 ${tone === "light" ? "kicker-dark" : ""} ${className}`}>
      <span className="h-px w-6 bg-signal/70" aria-hidden="true" />
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
        <h2 className="mt-5 font-display text-3xl font-semibold leading-[1.08] tracking-tightest sm:text-4xl">
          {title}
        </h2>
      )}
      {lead && <p className={`mt-5 text-base leading-relaxed sm:text-lg ${dim}`}>{lead}</p>}
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
