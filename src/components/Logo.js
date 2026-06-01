export function Mark({ className = "", size = 28 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 28 28"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      {/* frame */}
      <rect
        x="2.5"
        y="2.5"
        width="23"
        height="23"
        rx="5.5"
        stroke="currentColor"
        strokeWidth="1.6"
        opacity="0.9"
      />
      {/* control bus */}
      <line x1="2.5" y1="14" x2="25.5" y2="14" stroke="currentColor" strokeWidth="1.6" opacity="0.55" />
      {/* tapped signal node */}
      <line x1="17.5" y1="14" x2="17.5" y2="8.5" stroke="#EFA73C" strokeWidth="1.6" />
      <circle cx="17.5" cy="8.5" r="2.4" fill="#EFA73C" />
      {/* secondary point */}
      <circle cx="9.5" cy="14" r="1.6" fill="currentColor" opacity="0.6" />
    </svg>
  );
}

export default function Logo({ className = "", markSize = 26, withWordmark = true }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <Mark size={markSize} className="text-fg" />
      {withWordmark && (
        <span className="font-display font-semibold tracking-tightest text-[1.06rem] leading-none text-fg">
          servomatrix<span className="text-signal">.</span>
        </span>
      )}
    </span>
  );
}
