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
        display: ["Archivo", "system-ui", "sans-serif"],
        sans: ["\"IBM Plex Sans\"", "system-ui", "sans-serif"],
        mono: ["\"IBM Plex Mono\"", "ui-monospace", "monospace"],
      },
      letterSpacing: { tightest: "-0.04em", kicker: "0.22em" },
      maxWidth: { site: "1280px", prose: "44rem" },
      borderRadius: { xl2: "1.25rem" },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        dash: { to: { strokeDashoffset: "0" } },
      },
    },
  },
  plugins: [],
};
