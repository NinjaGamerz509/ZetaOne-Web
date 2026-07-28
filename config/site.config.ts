export const siteConfig = {
  name: "Zeta One",
  tagline: "The smarter way to study.",
  description:
    "Zeta One combines notes, productivity and study tools into one beautiful Android application.",
  url: "https://zetaone.qzz.io",
  docsUrl: "https://docs.zetaone.qzz.io",
  developer: "Shaikh Zaid",
  email: {
    support: "help@zetaone.qzz.io",
    feedback: "feedback@zetaone.qzz.io",
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
