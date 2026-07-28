import type { FaqItem } from "@/types";

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: "why-cant-install",
    question: "Why can't I install?",
    answer:
      "Android blocks installs from outside the Play Store by default. Enable \"Install unknown apps\" for your browser or file manager in Settings, then try again. See the full Installation Guide for step-by-step screenshots.",
  },
  {
    id: "how-do-i-update",
    question: "How do I update?",
    answer:
      "Download the latest APK from the Download page and install it over your existing version — your notes and data are kept.",
  },
  {
    id: "is-app-safe",
    question: "Is the app safe?",
    answer:
      "Yes. Always download Zeta One only from the official website to ensure you get an unmodified, safe build.",
  },
  {
    id: "where-is-source",
    question: "Where is the source?",
    answer:
      "Source and licensing details are listed on the Credits page, with links provided as they become available.",
  },
  {
    id: "report-bugs",
    question: "How do I report bugs?",
    answer: "Use the Contact page or email our support address, and include as much detail as possible.",
  },
  {
    id: "is-free",
    question: "Is Zeta One free?",
    answer: "Yes. Zeta One is free to download and use, with no hidden subscription required.",
  },
  {
    id: "works-offline",
    question: "Does it work offline?",
    answer: "Yes. Notes, tasks, documents and most features work fully offline.",
  },
];
