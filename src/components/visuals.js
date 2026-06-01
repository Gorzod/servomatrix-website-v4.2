import { TechnicalLabel } from "./ui";

/* ----------------------------------------------------------------
   Operator interface visual — restrained, believable supervisory tile.
   Clearly labelled ILLUSTRATIVE OPERATOR VIEW.
----------------------------------------------------------------- */
export function OperatorInterfaceVisual() {
  return (
    <div className="relative overflow-hidden rounded-xl border border-line bg-ink-2/90 shadow-[0_30px_80px_-40px_rgba(0,0,0,0.8)]">
      {/* title bar */}
      <div className="flex items-center justify-between border-b border-line px-4 py-2.5">
        <div className="flex items-center gap-2 font-mono text-[0.68rem] tracking-wide text-fg-dim">
          <span className="h-2 w-2 rounded-full bg-signal" aria-hidden="true" />
          AHU-03 · LEVEL 4 SUPPLY
        </div>
        <span className="font-mono text-[0.62rem] uppercase tracking-[0.16em] text-fg-faint">BACnet/IP</span>
      </div>

      {/* body */}
      <div className="grid grid-cols-3 gap-px bg-line">
        {[
          { l: "Supply air", v: "13.4", u: "°C", s: "ok" },
          { l: "Setpoint", v: "13.0", u: "°C", s: "ok" },
          { l: "Fan speed", v: "62", u: "%", s: "ok" },
          { l: "Return air", v: "22.1", u: "°C", s: "ok" },
          { l: "CHW valve", v: "48", u: "%", s: "ok" },
          { l: "Filter ΔP", v: "118", u: "Pa", s: "warn" },
        ].map((m) => (
          <div key={m.l} className="bg-ink-2 px-4 py-3.5">
            <div className="font-mono text-[0.6rem] uppercase tracking-[0.14em] text-fg-faint">{m.l}</div>
            <div className="mt-1 flex items-baseline gap-1">
              <span className="font-display text-xl font-semibold text-fg tabular-nums">{m.v}</span>
              <span className="text-[0.7rem] text-fg-dim">{m.u}</span>
              <span
                className={`ml-auto h-1.5 w-1.5 rounded-full ${m.s === "warn" ? "bg-signal" : "bg-steel"}`}
                aria-hidden="true"
              />
            </div>
          </div>
        ))}
      </div>

      {/* trend strip */}
      <div className="border-t border-line px-4 py-3">
        <div className="mb-2 flex items-center justify-between">
          <span className="font-mono text-[0.6rem] uppercase tracking-[0.14em] text-fg-faint">Supply air · 24h</span>
          <span className="font-mono text-[0.6rem] text-steel">trend</span>
        </div>
        <MiniTrend />
      </div>

      {/* status row */}
      <div className="flex items-center justify-between border-t border-line px-4 py-2.5">
        <span className="flex items-center gap-2 font-mono text-[0.62rem] text-fg-dim">
          <span className="h-1.5 w-1.5 rounded-full bg-steel" aria-hidden="true" /> Occupied · running
        </span>
        <span className="font-mono text-[0.62rem] text-signal">1 alarm</span>
      </div>

      <div className="border-t border-line bg-ink px-4 py-2 text-center">
        <TechnicalLabel>Illustrative operator view</TechnicalLabel>
      </div>
    </div>
  );
}

function MiniTrend() {
  const pts = [18, 16, 15, 14, 14, 13.5, 13.8, 14.2, 13.6, 13.2, 13.4, 13.4];
  const w = 280, h = 44, max = 19, min = 12;
  const path = pts
    .map((p, i) => {
      const x = (i / (pts.length - 1)) * w;
      const y = h - ((p - min) / (max - min)) * h;
      return `${i === 0 ? "M" : "L"}${x.toFixed(1)},${y.toFixed(1)}`;
    })
    .join(" ");
  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="h-11 w-full" preserveAspectRatio="none" aria-hidden="true">
      <path d={path} fill="none" stroke="#6E8BA8" strokeWidth="1.5" />
      <path d={`${path} L${w},${h} L0,${h} Z`} fill="rgba(110,139,168,0.10)" />
    </svg>
  );
}

/* ----------------------------------------------------------------
   Document preview — generic engineering document fragment.
   tone: "light" | "dark"
----------------------------------------------------------------- */
export function DocumentPreviewVisual({ tone = "light", lines = 5 }) {
  const dark = tone === "dark";
  const bar = dark ? "bg-line-strong" : "bg-mute-strong";
  const barDim = dark ? "bg-line" : "bg-mute";
  return (
    <div
      className={`rounded-lg border p-4 ${
        dark ? "border-line bg-ink" : "border-mute bg-paper"
      }`}
      aria-hidden="true"
    >
      <div className="mb-3 flex items-center justify-between">
        <span className={`h-2 w-20 rounded ${bar}`} />
        <span className={`h-2 w-8 rounded ${barDim}`} />
      </div>
      <div className="space-y-2">
        {Array.from({ length: lines }).map((_, i) => (
          <div key={i} className="flex gap-2">
            <span className={`h-1.5 w-6 rounded ${barDim}`} />
            <span className={`h-1.5 rounded ${bar}`} style={{ width: `${60 - i * 7}%` }} />
            <span className={`ml-auto h-1.5 w-8 rounded ${barDim}`} />
          </div>
        ))}
      </div>
    </div>
  );
}

/* ----------------------------------------------------------------
   Commissioning checklist preview.
----------------------------------------------------------------- */
export function CommissioningChecklistVisual({ tone = "light" }) {
  const dark = tone === "dark";
  const rows = [
    { l: "AHU-03 supply temp", done: true },
    { l: "CHW valve stroke", done: true },
    { l: "Fan VSD command", done: true },
    { l: "Filter ΔP alarm", done: false },
    { l: "Occupancy schedule", done: false },
  ];
  return (
    <div className={`rounded-lg border p-4 ${dark ? "border-line bg-ink" : "border-mute bg-paper"}`} aria-hidden="true">
      <ul className="space-y-2.5">
        {rows.map((r) => (
          <li key={r.l} className="flex items-center gap-3">
            <span
              className={`flex h-4 w-4 items-center justify-center rounded-sm border text-[9px] ${
                r.done
                  ? "border-steel bg-steel/15 text-steel"
                  : dark
                  ? "border-line-strong text-transparent"
                  : "border-mute-strong text-transparent"
              }`}
            >
              {r.done ? "✓" : ""}
            </span>
            <span className={`text-xs ${dark ? "text-fg-dim" : "text-graphite-dim"}`}>{r.l}</span>
            <span className={`ml-auto font-mono text-[0.6rem] ${r.done ? "text-steel" : dark ? "text-fg-faint" : "text-graphite-faint"}`}>
              {r.done ? "PASS" : "—"}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ----------------------------------------------------------------
   Integration responsibility matrix preview.
----------------------------------------------------------------- */
export function IntegrationMatrixVisual({ tone = "light" }) {
  const dark = tone === "dark";
  const head = dark ? "text-fg-faint" : "text-graphite-faint";
  const cell = dark ? "text-fg-dim border-line" : "text-graphite-dim border-mute";
  const rows = [
    ["Chiller plant", "BACnet/IP", "Vendor"],
    ["Energy meters", "Modbus TCP", "BMS"],
    ["Generator", "Modbus RTU", "Vendor"],
    ["Fire alarm", "Interface", "Coord."],
  ];
  return (
    <div className={`overflow-hidden rounded-lg border ${dark ? "border-line bg-ink" : "border-mute bg-paper"}`} aria-hidden="true">
      <div className={`grid grid-cols-3 gap-px border-b px-3 py-2 font-mono text-[0.58rem] uppercase tracking-[0.12em] ${head} ${dark ? "border-line" : "border-mute"}`}>
        <span>System</span><span>Protocol</span><span>Owner</span>
      </div>
      {rows.map((r, i) => (
        <div key={i} className={`grid grid-cols-3 border-b px-3 py-2 text-[0.7rem] last:border-0 ${cell}`}>
          <span>{r[0]}</span>
          <span className="font-mono text-[0.66rem]">{r[1]}</span>
          <span>{r[2]}</span>
        </div>
      ))}
    </div>
  );
}

/* ----------------------------------------------------------------
   Trend graph preview.
----------------------------------------------------------------- */
export function TrendVisual({ tone = "light" }) {
  const dark = tone === "dark";
  const w = 300, h = 90;
  const series = (seed, amp) =>
    Array.from({ length: 24 }, (_, i) => 45 + Math.sin(i / 2.5 + seed) * amp + Math.sin(i / 1.3 + seed) * (amp / 3));
  const line = (data, color) => {
    const d = data
      .map((v, i) => `${i === 0 ? "M" : "L"}${((i / 23) * w).toFixed(1)},${(h - v).toFixed(1)}`)
      .join(" ");
    return <path d={d} fill="none" stroke={color} strokeWidth="1.5" />;
  };
  return (
    <div className={`rounded-lg border p-3 ${dark ? "border-line bg-ink" : "border-mute bg-paper"}`} aria-hidden="true">
      <svg viewBox={`0 0 ${w} ${h}`} className="h-24 w-full" preserveAspectRatio="none">
        {[0.25, 0.5, 0.75].map((g) => (
          <line key={g} x1="0" y1={h * g} x2={w} y2={h * g} stroke={dark ? "rgba(233,237,242,0.08)" : "rgba(15,22,32,0.07)"} strokeWidth="1" />
        ))}
        {line(series(0, 22), "#6E8BA8")}
        {line(series(2, 14), "#EFA73C")}
      </svg>
    </div>
  );
}

/* ----------------------------------------------------------------
   Image placeholder — for future verified project photography.
   Renders a labelled container, never fake stock evidence.
----------------------------------------------------------------- */
export function ImagePlaceholder({ caption, label = "Project photography to be added following verified delivery approval", tone = "light", aspect = "4/3" }) {
  const dark = tone === "dark";
  return (
    <figure className={`overflow-hidden rounded-lg border ${dark ? "border-line bg-ink-2" : "border-mute bg-canvas-2"}`}>
      <div
        className={`relative flex items-center justify-center ${dark ? "bg-grid" : "bg-grid-light"}`}
        style={{ aspectRatio: aspect }}
      >
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" aria-hidden="true" className={dark ? "text-fg-faint" : "text-graphite-faint"}>
          <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.4" />
          <circle cx="8.5" cy="10" r="1.6" stroke="currentColor" strokeWidth="1.4" />
          <path d="M5 17l4.5-4 3 2.5L16 11l3 3.5" stroke="currentColor" strokeWidth="1.4" />
        </svg>
      </div>
      <figcaption className={`border-t px-3 py-2 ${dark ? "border-line" : "border-mute"}`}>
        {caption && (
          <span className={`block text-xs ${dark ? "text-fg-dim" : "text-graphite-dim"}`}>{caption}</span>
        )}
        <TechnicalLabel tone={dark ? "dark" : "light"} className="mt-0.5 block">{label}</TechnicalLabel>
      </figcaption>
    </figure>
  );
}
