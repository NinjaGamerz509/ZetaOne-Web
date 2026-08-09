import type { Article } from "@/types";
import { NEW_ARTICLES } from "@/content/newArticles";

/**
 * Article system supports unlimited posts — simply append new entries here
 * (or migrate to a CMS/MDX pipeline later; the shape stays the same).
 */
export const ARTICLES: Article[] = [
  {
    slug: "welcome-to-zeta-one",
    title: "Welcome to Zeta One",
    description: "An introduction to the smarter way to study, and what's coming next.",
    category: "Announcement",
    author: "Shaikh Zaid",
    publishedAt: "2026-07-20",
    readingTime: "3 min read",
    coverImage: "/assets/backgrounds/bg-glass-mint-light.jpg",
    popular: true,
    relatedSlugs: ["building-better-notes", "zeta-one-v26-1-8-released"],
    sections: [
      {
        id: "why-zeta-one",
        heading: "Why Zeta One",
        body: "Most study apps ask you to juggle three or four separate tools — a notes app, a to-do list, a PDF reader, a timer. Zeta One brings all of it into a single offline-first Android app, built around how students actually work.",
      },
      {
        id: "whats-inside",
        heading: "What's inside",
        body: "Notes, Tasks, Documents, Focus Mode, Goals, Flashcards, Calendar, Timetable and Analytics all ship in the first stable release, with more on the way.",
        callout: { type: "tip", text: "Start with Notes or Focus Mode — both work great from your very first session." },
      },
      {
        id: "whats-next",
        heading: "What's next",
        body: "Spaced repetition for Flashcards, richer Analytics, and community-requested features are all planned for future releases. Follow the Articles page for updates.",
      },
    ],
  },
  {
    slug: "getting-started-with-focus-mode",
    title: "Getting started with Focus Mode",
    description: "Learn how distraction-free study sessions help you get more done.",
    category: "Tutorial",
    author: "Shaikh Zaid",
    publishedAt: "2026-07-18",
    readingTime: "4 min read",
    coverImage: "/assets/backgrounds/bg-glass-rings-dark.jpg",
    popular: true,
    relatedSlugs: ["welcome-to-zeta-one", "building-better-notes"],
    sections: [
      {
        id: "what-is-focus-mode",
        heading: "What is Focus Mode",
        body: "Focus Mode is a distraction-free timer built specifically for study sessions, with automatic breaks and session tracking.",
      },
      {
        id: "starting-a-session",
        heading: "Starting a session",
        body: "Pick a session length, tap start, and Zeta One tracks the time quietly in the background while you work.",
        callout: { type: "tip", text: "Shorter, frequent sessions tend to beat one long marathon session." },
      },
    ],
  },
  {
    slug: "building-better-notes",
    title: "Building better notes",
    description: "Tips for organizing rich, offline-first notes inside Zeta One.",
    category: "Guide",
    author: "Shaikh Zaid",
    publishedAt: "2026-07-15",
    readingTime: "5 min read",
    coverImage: "/assets/backgrounds/bg-glass-cubes-flow.jpg",
    popular: true,
    relatedSlugs: ["welcome-to-zeta-one", "getting-started-with-focus-mode"],
    sections: [
      {
        id: "structure-first",
        heading: "Structure first",
        body: "Before writing, sketch a quick outline using headings. It makes the note far easier to scan later.",
      },
      {
        id: "use-folders-and-tags",
        heading: "Use folders and tags",
        body: "Folders group notes by subject; tags let you cross-reference themes across subjects — for example, tagging every note that mentions an upcoming exam.",
      },
    ],
  },
  {
    slug: "zeta-one-v26-1-8-released",
    title: "Zeta One V26.1.8 Released",
    description: "Our first stable release — performance improvements, a new Focus Mode, and UI refinements.",
    category: "Release",
    author: "Shaikh Zaid",
    publishedAt: "2026-07-20",
    readingTime: "3 min read",
    coverImage: "/assets/backgrounds/bg-glass-crystals-dark.jpg",
    relatedSlugs: ["welcome-to-zeta-one"],
    sections: [
      {
        id: "overview",
        heading: "Overview",
        body: "V26.1.8 is the first stable release of Zeta One, bringing every core module together in one polished build.",
      },
      {
        id: "highlights",
        heading: "Highlights",
        body: "Improved Notes performance, better animations throughout the app, fixed PDF rendering, a new Focus Mode, and general UI refinements.",
      },
    ],
  },
  {
    slug: "how-to-report-a-bug",
    title: "How to report a bug",
    description: "A quick guide to reporting issues so we can fix them faster.",
    category: "Tips",
    author: "Shaikh Zaid",
    publishedAt: "2026-07-12",
    readingTime: "2 min read",
    coverImage: "/assets/backgrounds/bg-glass-waves-diagonal.jpg",
    relatedSlugs: ["zeta-one-v26-1-8-released"],
    sections: [
      {
        id: "before-reporting",
        heading: "Before reporting",
        body: "Check the Troubleshooting page first — many common issues already have a documented fix.",
      },
      {
        id: "what-to-include",
        heading: "What to include",
        body: "Your Android version, Zeta One version, and the exact steps that caused the issue help us fix it much faster.",
      },
    ],
  },
  {
    slug: "join-the-community",
    title: "Join the Zeta One community",
    description: "How to get involved as a tester, contributor or early community member.",
    category: "Community",
    author: "Shaikh Zaid",
    publishedAt: "2026-07-10",
    readingTime: "3 min read",
    coverImage: "/assets/backgrounds/bg-glass-squares-dark.webp",
    relatedSlugs: ["how-to-report-a-bug"],
    sections: [
      {
        id: "how-to-join",
        heading: "How to join",
        body: "Zeta One is still early, and the community is small and hands-on. Visit the Contribute page to see current ways to get involved.",
      },
    ],
  },
  {
    slug: "under-the-hood-architecture",
    title: "Under the hood: Zeta One's architecture",
    description: "A behind-the-scenes look at how Zeta One is built to be fast and offline-first.",
    category: "Development",
    author: "Shaikh Zaid",
    publishedAt: "2026-07-05",
    readingTime: "6 min read",
    coverImage: "/assets/backgrounds/bg-glass-corner-shards.webp",
    relatedSlugs: ["zeta-one-v26-1-8-released"],
    sections: [
      {
        id: "offline-first",
        heading: "Offline-first by design",
        body: "Every core feature works without an internet connection, with data stored locally on-device.",
      },
      {
        id: "performance",
        heading: "Performance focus",
        body: "Recent releases have focused heavily on reducing animation jank and improving Notes load times.",
      },
    ],
  },
  {
    slug: "whats-changed-recently",
    title: "What's changed recently",
    description: "A roundup of smaller updates and quality-of-life improvements.",
    category: "Update",
    author: "Shaikh Zaid",
    publishedAt: "2026-06-28",
    readingTime: "3 min read",
    coverImage: "/assets/backgrounds/bg-glass-tech-frame.jpg",
    relatedSlugs: ["zeta-one-v26-1-8-released"],
    sections: [
      {
        id: "summary",
        heading: "Summary",
        body: "Smaller fixes and polish shipped alongside the main release — see the full changelog on the Release Notes page for specifics.",
      },
    ],
  },
  ...NEW_ARTICLES,
];
