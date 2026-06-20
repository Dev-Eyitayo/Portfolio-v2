import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#0B0E14",
          soft: "#10131A",
          mute: "#1A1F2B",
        },
        paper: {
          DEFAULT: "#FAFAF8",
          soft: "#F3F1EB",
          mute: "#E8E5DC",
        },
        rust: {
          DEFAULT: "#D97B3F",
          dim: "#B8632E",
          glow: "#F2A368",
        },
      },
      fontFamily: {
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "monospace"],
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "grid-light":
          "linear-gradient(to right, rgba(11,14,20,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(11,14,20,0.04) 1px, transparent 1px)",
        "grid-dark":
          "linear-gradient(to right, rgba(250,250,248,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(250,250,248,0.04) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "32px 32px",
      },
      keyframes: {
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "scan-line": {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100%)" },
        },
      },
      animation: {
        blink: "blink 1s step-end infinite",
        "fade-up": "fade-up 0.6s ease-out forwards",
      },
    },
  },
  plugins: [],
};

export default config;
