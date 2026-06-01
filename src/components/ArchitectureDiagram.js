"use client";

import { useEffect, useRef, useState } from "react";
import { architectureLayers, protocolLegend } from "@/lib/standards";

const ICONS = {
  field: "M4 18h3l2-9 3 13 2-9h6",
  ddc: "M5 5h14v14H5z M9 9h6v6H9z",
  network: "M12 4v6m0 4v6 M6 7l6 3 6-3 M6 17l6-3 6 3",
  supervisor: "M4 5h16v11H4z M9 20h6 M12 16v4",
  remote: "M12 3a9 9 0 0 1 9 9 M12 7a5 5 0 0 1 5 5 M12 12h.01",
};

export default function ArchitectureDiagram() {
  const ref = useRef(null);
  const [active, setActive] = useState("ddc");
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setAnimated(true);
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.25 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const activeLayer = architectureLayers.find((l) => l.id === active);

  return (
    <div ref={ref} className="rounded-xl border border-line bg-ink-2/60 p-5 sm:p-7">
      {/* Desktop: horizontal flow */}
      <div className="hidden lg:block">
        <div className="relative">
          <svg
            viewBox="0 0 1000 8"
            preserveAspectRatio="none"
            className="absolute left-0 right-0 top-[34px] h-2 w-full"
            aria-hidden="true"
          >
            <line x1="0" y1="4" x2="1000" y2="4" stroke="rgba(233,237,242,0.12)" strokeWidth="2" />
            <line
              x1="0" y1="4" x2="1000" y2="4"
              stroke="#EFA73C" strokeWidth="2"
              className={`flow-line ${animated ? "is-active" : ""}`}
            />
          </svg>
          <div className="relative grid grid-cols-5 gap-3">
            {architectureLayers.map((layer, i) => {
              const isActive = layer.id === active;
              return (
                <button
                  key={layer.id}
                  onMouseEnter={() => setActive(layer.id)}
                  onFocus={() => setActive(layer.id)}
                  onClick={() => setActive(layer.id)}
                  aria-pressed={isActive}
                  className="group flex flex-col items-center text-center focus:outline-none"
                >
                  <span
                    className={`relative z-10 flex h-[68px] w-[68px] items-center justify-center rounded-xl border bg-ink transition-all ${
                      isActive ? "border-signal" : "border-line group-hover:border-line-strong"
                    }`}
                  >
                    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path d={ICONS[layer.id]} stroke={isActive ? "#EFA73C" : "#9BA7B4"} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span className="mt-3 font-mono text-[0.62rem] uppercase tracking-[0.12em] text-fg-faint">0{i + 1}</span>
                  <span className={`mt-1 text-[0.82rem] font-medium leading-tight transition-colors ${isActive ? "text-fg" : "text-fg-dim"}`}>
                    {layer.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
        <div className="mt-6 rounded-lg border border-line bg-ink/60 px-5 py-4">
          <p className="text-sm leading-relaxed text-fg-dim" aria-live="polite">
            <span className="font-medium text-fg">{activeLayer.label}.</span> {activeLayer.blurb}
          </p>
        </div>
      </div>

      {/* Mobile / tablet: vertical stack */}
      <ol className="space-y-3 lg:hidden">
        {architectureLayers.map((layer, i) => (
          <li key={layer.id} className="relative flex gap-4">
            <div className="flex flex-col items-center">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-line bg-ink">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d={ICONS[layer.id]} stroke="#EFA73C" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              {i < architectureLayers.length - 1 && <span className="my-1 w-px flex-1 bg-line" aria-hidden="true" />}
            </div>
            <div className="pb-2">
              <span className="font-mono text-[0.6rem] uppercase tracking-[0.12em] text-fg-faint">0{i + 1}</span>
              <h4 className="text-[0.92rem] font-medium text-fg">{layer.label}</h4>
              <p className="mt-1 text-[0.82rem] leading-relaxed text-fg-dim">{layer.blurb}</p>
            </div>
          </li>
        ))}
      </ol>

      {/* Protocol legend */}
      <div className="mt-6 flex flex-wrap items-center gap-2 border-t border-line pt-5">
        <span className="font-mono text-[0.6rem] uppercase tracking-[0.14em] text-fg-faint">Protocols</span>
        {protocolLegend.map((p) => (
          <span key={p} className="rounded border border-line bg-ink/50 px-2 py-1 font-mono text-[0.66rem] text-fg-dim">{p}</span>
        ))}
      </div>
    </div>
  );
}
