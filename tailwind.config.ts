import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: "#F1EBDC",
          50: "#F7F2E6",
          100: "#F1EBDC",
          200: "#E8DFC8",
          300: "#DDD0B0",
        },
        ink: {
          DEFAULT: "#1A1A1A",
          soft: "#2B2926",
        },
        muted: {
          DEFAULT: "#6B6253",
          2: "#948A78",
        },
        line: "#D1C7B0",
        accent: {
          DEFAULT: "#C4452D",
          soft: "#E07A5F",
        },
        highlight: "#E8B547",
        green: "#2D7A4F",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "Times New Roman", "serif"],
        body: ["var(--font-manrope)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      fontSize: {
        "display-xl": ["clamp(64px, 14vw, 220px)", { lineHeight: "0.92", letterSpacing: "-0.04em" }],
        "display-lg": ["clamp(80px, 14vw, 200px)", { lineHeight: "0.9", letterSpacing: "-0.04em" }],
        "display-md": ["clamp(36px, 5vw, 64px)", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
        "display-sm": ["clamp(28px, 3.5vw, 44px)", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
      },
      animation: {
        marquee: "marquee 36s linear infinite",
        "pulse-soft": "pulseSoft 2.4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "scroll-line": "scrollLine 2.4s ease-in-out infinite",
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        pulseSoft: {
          "0%": { boxShadow: "0 0 0 0 rgba(45, 122, 79, 0.55)" },
          "70%": { boxShadow: "0 0 0 10px rgba(45, 122, 79, 0)" },
          "100%": { boxShadow: "0 0 0 0 rgba(45, 122, 79, 0)" },
        },
        scrollLine: {
          "0%": { transform: "translateX(-100%)" },
          "50%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(100%)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
