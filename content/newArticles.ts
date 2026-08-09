import type { Article } from "@/types";

/**
 * New articles for the launch video (3 platforms) and the 5 AI-generated
 * feature banner images. Merged into ARTICLES in articles.ts.
 *
 * BEFORE PUBLISHING:
 * - Replace "REPLACE_YOUTUBE_ID" with the real YouTube video ID.
 * - Replace "REPLACE_INSTAGRAM_URL" with the real Instagram reel/post URL.
 * - Confirm /public/videos/zetaone-launch.mp4 exists.
 * - Confirm /public/assets/screenshots/{home,notes,tasks,goals,profile}.png exist.
 */
export const NEW_ARTICLES: Article[] = [
  {
    slug: "zeta-one-launch-video",
    title: "Watch the Zeta One Launch Video",
    description: "See Zeta One in action — notes, tasks, focus mode and more in one short video.",
    category: "Announcement",
    author: "Shaikh Zaid (NinjaGamerz)",
    publishedAt: "2026-08-15",
    readingTime: "2 min read",
    coverImage: "/assets/screenshots/home.png",
    featured: true,
    popular: true,
    relatedSlugs: ["zeta-one-launch-video-youtube", "zeta-one-launch-video-instagram"],
    sections: [
      {
        id: "the-video",
        heading: "The Launch Video",
        body: "A short walkthrough of Zeta One — how it looks, how it feels, and what it can do for your studying.",
        videoUrl: "/videos/zetaone-launch.mp4",
        videoEmbedType: "file",
      },
      {
        id: "watch-elsewhere",
        heading: "Watch it elsewhere",
        body: "The same video is also available on YouTube and Instagram if you'd rather watch there.",
      },
    ],
  },
  {
    slug: "zeta-one-launch-video-youtube",
    title: "Zeta One Launch Video (YouTube)",
    description: "The official Zeta One launch video, hosted on YouTube.",
    category: "Announcement",
    author: "Shaikh Zaid (NinjaGamerz)",
    publishedAt: "2026-08-15",
    readingTime: "2 min read",
    coverImage: "/assets/screenshots/notes.png",
    relatedSlugs: ["zeta-one-launch-video", "zeta-one-launch-video-instagram"],
    sections: [
      {
        id: "the-video",
        heading: "Watch on YouTube",
        body: "The Zeta One launch video, embedded directly from YouTube.",
        videoUrl: "REPLACE_YOUTUBE_ID",
        videoEmbedType: "youtube",
      },
    ],
  },
  {
    slug: "zeta-one-launch-video-instagram",
    title: "Zeta One Launch Video (Instagram)",
    description: "The official Zeta One launch video, hosted on Instagram.",
    category: "Announcement",
    author: "Shaikh Zaid (NinjaGamerz)",
    publishedAt: "2026-08-15",
    readingTime: "2 min read",
    coverImage: "/assets/screenshots/tasks.png",
    relatedSlugs: ["zeta-one-launch-video", "zeta-one-launch-video-youtube"],
    sections: [
      {
        id: "the-video",
        heading: "Watch on Instagram",
        body: "The Zeta One launch video, embedded directly from Instagram.",
        videoUrl: "REPLACE_INSTAGRAM_URL",
        videoEmbedType: "instagram",
      },
    ],
  },
  {
    slug: "all-your-study-tools-one-app",
    title: "All Your Study Tools. One App.",
    description: "Notes, tasks, flashcards and focus — built for deep work, all in Zeta One.",
    category: "Update",
    author: "Shaikh Zaid (NinjaGamerz)",
    publishedAt: "2026-08-15",
    readingTime: "2 min read",
    coverImage: "/assets/screenshots/home.png",
    popular: true,
    relatedSlugs: ["building-better-notes", "getting-started-with-focus-mode"],
    sections: [
      {
        id: "overview",
        heading: "One home screen, everything you need",
        body: "New Note, New Task, New Document, Focus, Flashcards, Documents, Journal, Bookmarks and Formulas — all one tap away from the Zeta One home screen.",
        image: "/assets/screenshots/home.png",
      },
    ],
  },
  {
    slug: "building-better-notes-visual",
    title: "Notes, Reimagined",
    description: "A closer look at how Notes works inside Zeta One.",
    category: "Guide",
    author: "Shaikh Zaid (NinjaGamerz)",
    publishedAt: "2026-08-15",
    readingTime: "2 min read",
    coverImage: "/assets/screenshots/notes.png",
    relatedSlugs: ["building-better-notes", "all-your-study-tools-one-app"],
    sections: [
      {
        id: "overview",
        heading: "Clean, distraction-free notes",
        body: "Every note is offline-first, fast to open, and easy to scan — no clutter, no accounts required.",
        image: "/assets/screenshots/notes.png",
      },
    ],
  },
  {
    slug: "stay-on-top-of-everything",
    title: "Stay On Top of Everything.",
    description: "Tasks, reminders and priorities — organized your way.",
    category: "Update",
    author: "Shaikh Zaid (NinjaGamerz)",
    publishedAt: "2026-08-15",
    readingTime: "2 min read",
    coverImage: "/assets/screenshots/tasks.png",
    relatedSlugs: ["all-your-study-tools-one-app"],
    sections: [
      {
        id: "overview",
        heading: "Tasks that keep up with you",
        body: "Check off what's done, track subtasks, and keep your priorities visible without the clutter.",
        image: "/assets/screenshots/tasks.png",
      },
    ],
  },
  {
    slug: "track-every-goal",
    title: "Track Every Goal.",
    description: "Set targets, watch your progress, stay motivated.",
    category: "Update",
    author: "Shaikh Zaid (NinjaGamerz)",
    publishedAt: "2026-08-15",
    readingTime: "2 min read",
    coverImage: "/assets/screenshots/goals.png",
    relatedSlugs: ["all-your-study-tools-one-app"],
    sections: [
      {
        id: "overview",
        heading: "Goals you can actually see progress on",
        body: "Every goal shows a live progress bar, so you always know exactly how close you are.",
        image: "/assets/screenshots/goals.png",
      },
    ],
  },
  {
    slug: "everything-in-its-place",
    title: "Everything, In Its Place.",
    description: "Calendar, timetable, analytics and more — all in one profile.",
    category: "Update",
    author: "Shaikh Zaid (NinjaGamerz)",
    publishedAt: "2026-08-15",
    readingTime: "2 min read",
    coverImage: "/assets/screenshots/profile.png",
    relatedSlugs: ["all-your-study-tools-one-app"],
    sections: [
      {
        id: "overview",
        heading: "One place for everything else",
        body: "Calendar, Timetable, Analytics, Settings and About — organized into a single, simple Profile menu.",
        image: "/assets/screenshots/profile.png",
      },
    ],
  },
];
