import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./sections/**/*.{ts,tsx}",
    "./features/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        emerald: {
          DEFAULT: "#10B981",
          50: "#ECFDF5",
          100: "#D1FAE5",
          200: "#A7F3D0",
          300: "#6EE7B7",
          400: "#34D399",
          500: "#10B981",
          600: "#059669",
          700: "#047857",
          800: "#065F46",
          900: "#064E3B",
          950: "#022C22",
        },
        mint: {
          DEFAULT: "#6EE7B7",
          light: "#A7F3D0",
          dark: "#34D399",
        },
        cyan: {
          soft: "#7DD3E0",
        },
        surface: {
          light: "#F4FBF8",
          dark: "#04120D",
          card: "rgba(255, 255, 255, 0.06)",
          cardLight: "rgba(255, 255, 255, 0.55)",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-jakarta)", "system-ui", "sans-serif"],
      },
      backdropBlur: {
        glass: "20px",
      },
      borderRadius: {
        card: "24px",
        button: "16px",
      },
      boxShadow: {
        glass: "0 8px 32px 0 rgba(4, 18, 13, 0.24)",
        "glass-sm": "0 4px 16px 0 rgba(4, 18, 13, 0.16)",
        "glow-emerald": "0 0 40px 0 rgba(16, 185, 129, 0.25)",
      },
      maxWidth: {
        content: "1400px",
        hero: "700px",
        prose: "650px",
      },
      transitionDuration: {
        400: "400ms",
        500: "500ms",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "fade-up": "fade-up 0.5s ease-out forwards",
        "fade-in": "fade-in 0.6s ease-out forwards",
      },
    },
  },
  plugins: [],
};

export default config;
