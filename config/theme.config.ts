/**
 * Centralized theme configuration.
 * Every visual constant used across the app is defined here.
 * Changing a value here updates the entire website.
 */

export const theme = {
  colors: {
    primary: "#10B981", // Emerald Green
    primaryDark: "#059669",
    secondary: "#6EE7B7", // Mint Green
    accent: "#7DD3E0", // Soft Cyan
    backgroundDark: "#04120D",
    backgroundLight: "#F4FBF8",
  },
  glass: {
    blur: "20px",
    borderLight: "rgba(255, 255, 255, 0.14)",
    borderDark: "rgba(255, 255, 255, 0.08)",
    surfaceDark: "rgba(255, 255, 255, 0.06)",
    surfaceLight: "rgba(255, 255, 255, 0.55)",
  },
  radius: {
    button: "16px",
    card: "24px",
    pill: "999px",
  },
  shadow: {
    sm: "0 4px 16px 0 rgba(4, 18, 13, 0.16)",
    md: "0 8px 32px 0 rgba(4, 18, 13, 0.24)",
    glow: "0 0 40px 0 rgba(16, 185, 129, 0.25)",
  },
  layout: {
    navbarHeight: 72,
    contentMaxWidth: 1400,
    heroMaxWidth: 700,
    proseMaxWidth: 650,
  },
  motion: {
    fast: 0.2,
    base: 0.4,
    slow: 0.5,
    stagger: 0.08,
  },
  breakpoints: {
    mobile: 360,
    largeMobile: 480,
    tablet: 768,
    laptop: 1024,
    desktop: 1280,
    largeDesktop: 1536,
  },
} as const;

export type Theme = typeof theme;
