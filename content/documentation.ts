import type { DocCategory, DocPage } from "@/types";

export const DOC_CATEGORIES: DocCategory[] = [
  { id: "getting-started", title: "Getting Started", description: "Set up Zeta One in minutes.", icon: "rocket_launch", href: "/docs/getting-started" },
  { id: "installation", title: "Installation", description: "Install the APK on your device.", icon: "install_mobile", href: "/docs/install" },
  { id: "notes", title: "Notes", description: "Create and organize rich notes.", icon: "edit_note", href: "/docs/notes" },
  { id: "tasks", title: "Tasks", description: "Manage reminders and priorities.", icon: "checklist", href: "/docs/tasks" },
  { id: "documents", title: "Documents", description: "Read and create PDFs.", icon: "description", href: "/docs/documents" },
  { id: "focus-mode", title: "Focus Mode", description: "Distraction-free study sessions.", icon: "timer", href: "/docs/focus-mode" },
  { id: "goals", title: "Goals", description: "Track your study progress.", icon: "flag", href: "/docs/goals" },
  { id: "flashcards", title: "Flashcards", description: "Learn faster with spaced repetition.", icon: "style", href: "/docs/flashcards" },
  { id: "calendar", title: "Calendar", description: "Plan assignments and exams.", icon: "calendar_month", href: "/docs/calendar" },
  { id: "timetable", title: "Timetable", description: "Organize your daily schedule.", icon: "schedule", href: "/docs/timetable" },
  { id: "analytics", title: "Analytics", description: "Visualize your productivity.", icon: "monitoring", href: "/docs/analytics" },
  { id: "settings", title: "Settings", description: "Customize your experience.", icon: "settings", href: "/docs/settings" },
  { id: "troubleshooting", title: "Troubleshooting", description: "Solve common issues.", icon: "build", href: "/docs/troubleshooting" },
];

/**
 * Full documentation pages. Each supports a table of contents (derived from
 * sections), images, code blocks, tips/warnings, and prev/next navigation
 * (computed from DOC_CATEGORIES order at render time).
 */
export const DOC_PAGES: DocPage[] = [
  {
    slug: "getting-started",
    categoryId: "getting-started",
    title: "Getting Started",
    description: "Everything you need to set up Zeta One and start studying smarter.",
    readingTime: "4 min read",
    lastUpdated: "2026-07-20",
    relatedSlugs: ["installation", "notes"],
    sections: [
      {
        id: "overview",
        heading: "Overview",
        body: "Zeta One brings notes, tasks, documents, focus sessions, flashcards and goals into a single offline-first Android app. This guide walks through the first few things worth setting up.",
      },
      {
        id: "first-launch",
        heading: "First launch",
        body: "When you open Zeta One for the first time, you'll land on an empty workspace. There's no required account and no onboarding wall — you can start creating immediately.",
        callout: { type: "tip", text: "Create your first note or task right away — Zeta One saves everything locally, instantly." },
      },
      {
        id: "core-modules",
        heading: "Core modules",
        body: "Notes, Tasks, Documents, Focus, Goals, Flashcards, Calendar, Timetable and Analytics are all accessible from the main navigation. Each has its own dedicated guide in this documentation.",
      },
    ],
  },
  {
    slug: "installation",
    categoryId: "installation",
    title: "Installation",
    description: "Step-by-step instructions for installing the Zeta One APK on Android.",
    readingTime: "3 min read",
    lastUpdated: "2026-07-20",
    relatedSlugs: ["troubleshooting", "getting-started"],
    sections: [
      {
        id: "before-you-start",
        heading: "Before you start",
        body: "Zeta One is distributed as a direct APK rather than through the Play Store. This is completely normal for independent Android apps, but Android will show a one-time warning the first time you install from a new source.",
        callout: { type: "warning", text: "Only download the APK from the official Zeta One website to avoid tampered files." },
      },
      {
        id: "steps",
        heading: "Installation steps",
        body: "Download the APK, open your Downloads folder, tap the file, allow installation if prompted, then open Zeta One. The full visual step-by-step walkthrough with screenshots is available on the dedicated Installation Guide page.",
      },
    ],
  },
  {
    slug: "notes",
    categoryId: "notes",
    title: "Notes",
    description: "Create rich, offline notes with images and formatting.",
    readingTime: "5 min read",
    lastUpdated: "2026-07-18",
    relatedSlugs: ["documents", "getting-started"],
    sections: [
      {
        id: "creating-notes",
        heading: "Creating a note",
        body: "Tap the plus button inside Notes to start a new note. You can add headings, lists, images and links using the built-in formatting toolbar.",
      },
      {
        id: "organizing",
        heading: "Organizing notes",
        body: "Group related notes into folders, and use tags to find them later from Search.",
        callout: { type: "tip", text: "Pin your most-used notes to keep them at the top of the list." },
      },
    ],
  },
  {
    slug: "tasks",
    categoryId: "tasks",
    title: "Tasks",
    description: "Organize daily work with reminders, priorities and progress tracking.",
    readingTime: "4 min read",
    lastUpdated: "2026-07-15",
    relatedSlugs: ["goals", "calendar"],
    sections: [
      {
        id: "creating-tasks",
        heading: "Creating a task",
        body: "Add a task with a title, optional due date, and priority level. Completed tasks move to a separate history so your active list stays focused.",
      },
      {
        id: "reminders",
        heading: "Reminders",
        body: "Set a reminder time on any task to receive a notification when it's due.",
      },
    ],
  },
  {
    slug: "documents",
    categoryId: "documents",
    title: "Documents",
    description: "Read PDFs with the built-in reader or create PDFs using images.",
    readingTime: "5 min read",
    lastUpdated: "2026-07-12",
    relatedSlugs: ["notes", "troubleshooting"],
    sections: [
      {
        id: "reading-pdfs",
        heading: "Reading PDFs",
        body: "Import a PDF to read it inside Zeta One's built-in reader, with support for pinch-to-zoom and page jumping.",
      },
      {
        id: "creating-pdfs",
        heading: "Creating PDFs",
        body: "Combine images into a single PDF, arrange pages, add text, preview the result and export.",
        callout: { type: "tip", text: "Reorder pages by long-pressing and dragging them in the arrange view." },
      },
    ],
  },
  {
    slug: "focus-mode",
    categoryId: "focus-mode",
    title: "Focus Mode",
    description: "Stay focused using distraction-free study sessions and detailed statistics.",
    readingTime: "3 min read",
    lastUpdated: "2026-07-10",
    relatedSlugs: ["analytics", "goals"],
    sections: [
      {
        id: "starting-a-session",
        heading: "Starting a session",
        body: "Choose a session length, start the Focus Timer, and Zeta One will quietly track your study time in the background.",
      },
      {
        id: "breaks",
        heading: "Breaks",
        body: "After each session, a short break timer starts automatically to help you avoid burnout.",
      },
    ],
  },
  {
    slug: "goals",
    categoryId: "goals",
    title: "Goals",
    description: "Track your personal study goals and monitor progress over time.",
    readingTime: "3 min read",
    lastUpdated: "2026-07-08",
    relatedSlugs: ["analytics", "tasks"],
    sections: [
      {
        id: "setting-goals",
        heading: "Setting goals",
        body: "Create daily, weekly or monthly goals — for example, a target number of focus sessions or completed tasks.",
      },
      {
        id: "tracking-progress",
        heading: "Tracking progress",
        body: "Each goal shows a completion percentage that updates automatically as you use the app.",
      },
    ],
  },
  {
    slug: "flashcards",
    categoryId: "flashcards",
    title: "Flashcards",
    description: "Learn faster using customizable flashcards.",
    readingTime: "3 min read",
    lastUpdated: "2026-07-05",
    relatedSlugs: ["notes"],
    sections: [
      {
        id: "creating-decks",
        heading: "Creating a deck",
        body: "Build a deck of flashcards manually, or generate simple cards from an existing note.",
      },
      {
        id: "spaced-repetition",
        heading: "Spaced repetition",
        body: "Spaced repetition scheduling is planned for a future update — for now, decks support manual review.",
      },
    ],
  },
  {
    slug: "calendar",
    categoryId: "calendar",
    title: "Calendar",
    description: "View assignments, exams and study plans using a clean calendar interface.",
    readingTime: "3 min read",
    lastUpdated: "2026-07-02",
    relatedSlugs: ["timetable", "tasks"],
    sections: [
      {
        id: "views",
        heading: "Month and agenda views",
        body: "Switch between a full month grid and a simpler agenda list depending on how you like to plan.",
      },
      {
        id: "events",
        heading: "Adding events",
        body: "Add exams, assignments and study plans as events, each with an optional reminder icon.",
      },
    ],
  },
  {
    slug: "timetable",
    categoryId: "timetable",
    title: "Timetable",
    description: "Organize school periods and daily routines with a visual timetable.",
    readingTime: "3 min read",
    lastUpdated: "2026-06-28",
    relatedSlugs: ["calendar"],
    sections: [
      {
        id: "building-a-timetable",
        heading: "Building a timetable",
        body: "Lay out your school periods or daily routine visually, period by period.",
      },
    ],
  },
  {
    slug: "analytics",
    categoryId: "analytics",
    title: "Analytics",
    description: "Visualize your productivity with beautiful charts and study insights.",
    readingTime: "4 min read",
    lastUpdated: "2026-06-25",
    relatedSlugs: ["focus-mode", "goals"],
    sections: [
      {
        id: "what-is-tracked",
        heading: "What's tracked",
        body: "Analytics covers study time, completed tasks, focus sessions, goal progress and streaks — all computed locally on your device.",
      },
    ],
  },
  {
    slug: "settings",
    categoryId: "settings",
    title: "Settings",
    description: "Customize your experience.",
    readingTime: "2 min read",
    lastUpdated: "2026-06-20",
    relatedSlugs: ["troubleshooting"],
    sections: [
      {
        id: "customization",
        heading: "Customization",
        body: "Adjust appearance, notification preferences and data export options from Settings.",
      },
    ],
  },
  {
    slug: "troubleshooting",
    categoryId: "troubleshooting",
    title: "Troubleshooting",
    description: "Solve common issues with installation, updates and app behavior.",
    readingTime: "4 min read",
    lastUpdated: "2026-07-20",
    relatedSlugs: ["installation", "getting-started"],
    sections: [
      {
        id: "overview",
        heading: "Overview",
        body: "Most issues fall into a small number of categories — installation, downloads, permissions and updates. See the full Troubleshooting page for step-by-step solutions.",
      },
    ],
  },
];

export const POPULAR_GUIDE_SLUGS = ["getting-started", "installation", "notes", "focus-mode"];

export interface RecentUpdate {
  slug: string;
  label: string;
  date: string;
}

export const RECENT_DOC_UPDATES: RecentUpdate[] = [
  { slug: "troubleshooting", label: "Troubleshooting", date: "2026-07-20" },
  { slug: "getting-started", label: "Getting Started", date: "2026-07-20" },
  { slug: "installation", label: "Installation", date: "2026-07-20" },
];
