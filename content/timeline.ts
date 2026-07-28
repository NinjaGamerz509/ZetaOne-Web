import type { TimelinePhase } from "@/types";

export const TIMELINE_PHASES: TimelinePhase[] = [
  {
    id: "project-started",
    label: "Project Started",
    description: "Zeta One began as a personal project to solve a simple problem: too many separate apps for studying.",
    status: "completed",
  },
  {
    id: "alpha",
    label: "Alpha",
    description: "Core modules — Notes, Tasks and Documents — were built and tested internally.",
    status: "completed",
  },
  {
    id: "beta",
    label: "Beta",
    description: "Focus Mode, Goals and Flashcards joined the app, with early testers giving feedback.",
    status: "completed",
  },
  {
    id: "stable",
    label: "Stable",
    description: "V26.1.8 launched as the first stable, publicly downloadable release.",
    status: "current",
  },
  {
    id: "future-versions",
    label: "Future Versions",
    description: "Spaced repetition, richer analytics, and community-requested features are next.",
    status: "upcoming",
  },
];
