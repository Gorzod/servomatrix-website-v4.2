/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,jsx}",
    "./src/components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        // ---- Dark control-room environment ----
        ink: { DEFAULT: "#0B0E13", 2: "#0E131A", 3: "#121922" },
        surface: { DEFAULT: "#141C26", raised: "#18212C" },
        line: { DEFAULT: "rgba(233,237,242,0.10)", strong: "rgba(233,237,242,0.20)" },
        fg: { DEFAULT: "#E9EDF2", dim: "#9BA7B4", faint: "#5F6B78" },
        // ---- Light technical environment ----
        canvas: { DEFAULT: "#F3F5F7", 2: "#EAEEF1" },
        paper: { DEFAULT: "#FFFFFF", raised: "#FBFCFD" },
        graphite: { DEFAULT: "#0F1620", dim: "#465261", faint: "#7B8694" },
        mute: { DEFAULT: "rgba(15,22,32,0.10)", strong: "rgba(15,22,32,0.18)" },
        // ---- Shared accents ----
        signal: { DEFAULT: "#EFA73C", soft: "rgba(239,167,60,0.14)", deep: "#C9842A", ink: "#A86A1E" },
        steel: { DEFAULT: "#6E8BA8", dim: "#48586a", light: "#5A6B7E" },
      },
      fontFamily: {
        display: ["Inter", "system-ui", "sans-serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["\"JetBrains Mono\"", "ui-monospace", "monospace"],
      },
      letterSpacing: { tightest: "-0.04em", tighter2: "-0.025em", kicker: "0.22em" },
      maxWidth: { site: "1280px", prose: "44rem" },
      borderRadius: { xl2: "1.25rem" },
      boxShadow: {
        // ---- Dark control-room elevation ----
        "elev-1": "0 1px 2px rgba(0,0,0,0.35), 0 1px 1px rgba(0,0,0,0.22)",
        "elev-2": "0 18px 40px -20px rgba(0,0,0,0.65), 0 4px 12px -6px rgba(0,0,0,0.5)",
        "elev-dark-hover": "0 28px 60px -28px rgba(0,0,0,0.75), inset 0 1px 0 rgba(233,237,242,0.06)",
        // ---- Light technical elevation ----
        "card-light": "0 1px 2px rgba(15,22,32,0.05), 0 1px 3px rgba(15,22,32,0.04)",
        "card-light-hover": "0 24px 60px -34px rgba(15,22,32,0.40), 0 4px 12px -8px rgba(15,22,32,0.10)",
        // ---- Signal accent glow ----
        "signal-glow": "0 10px 36px -12px rgba(239,167,60,0.40)",
        "signal-ring": "0 0 0 1px rgba(239,167,60,0.35), 0 8px 24px -10px rgba(239,167,60,0.30)",
      },
      backgroundImage: {
        "hero-mesh":
          "radial-gradient(60% 80% at 78% 18%, rgba(239,167,60,0.10), transparent 60%), radial-gradient(55% 70% at 8% 12%, rgba(110,139,168,0.16), transparent 58%), radial-gradient(80% 90% at 50% 120%, rgba(110,139,168,0.10), transparent 60%)",
        "signal-sheen":
          "linear-gradient(180deg, rgba(255,255,255,0.22) 0%, rgba(255,255,255,0) 55%)",
      },
      transitionTimingFunction: {
        premium: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        dash: { to: { strokeDashoffset: "0" } },
        "pulse-node": {
          "0%, 100%": { opacity: "0.5", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.18)" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "pulse-node": "pulse-node 3.4s ease-in-out infinite",
        marquee: "marquee 48s linear infinite",
      },
    },
  },
  plugins: [],
};
