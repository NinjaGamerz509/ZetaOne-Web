export const siteConfig = {
  name: "Zeta One",
  tagline: "The smarter way to study.",
  description:
    "Zeta One combines notes, productivity and study tools into one beautiful Android application.",
  url: "https://zetaone.dpdns.org",
  docsUrl: "https://docs.zetaone.dpdns.org",
  developer: "Shaikh Zaid",
  email: {
    support: "help@zetaone.dpdns.org",
    feedback: "help@zetaone.dpdns.org",
  },
  social: {
    github: "https://github.com/zetaone",
    discord: "https://discord.gg/zetaone",
  },
  seo: {
    titleTemplate: "%s • Zeta One",
    defaultTitle: "Zeta One — The smarter way to study.",
    defaultDescription:
      "Zeta One combines notes, productivity and study tools into one beautiful Android application. Download now.",
    ogImage: "/assets/backgrounds/bg-glass-crystals-dark.jpg",
    twitterHandle: "@zetaone",
  },
} as const;

export type SiteConfig = typeof siteConfig;
