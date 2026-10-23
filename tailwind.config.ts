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
          DEFAULT: "#0F172A",
          soft: "#1E293B",
          mute: "#334155",
        },
        paper: {
          DEFAULT: "#FFFFFF",
          soft: "#F8FAFC",
          mute: "#E2E8F0",
        },
        accent: {
          DEFAULT: "#059669", // Emerald 600
          hover: "#047857",   // Emerald 700
          glow: "#34D399",    // Emerald 400 (vibrant glow for dark mode)
          subtle: "rgba(5, 150, 105, 0.08)",
        },
      },
      fontFamily: {
        sans: ["'Instrument Sans'", "system-ui", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
        mono: ["'IBM Plex Mono'", "ui-monospace", "monospace"],
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.4s ease-out forwards",
      },
    },
  },
  plugins: [],
};

export default config;
