export interface ContributeWay {
  icon: string;
  title: string;
  description: string;
  actionLabel: string;
  actionHref: string;
}

export const CONTRIBUTE_WAYS: ContributeWay[] = [
  {
    icon: "bug_report",
    title: "Become a Tester",
    description: "Try early builds, report bugs and help shape upcoming releases before they ship.",
    actionLabel: "Get in touch",
    actionHref: "/contact",
  },
  {
    icon: "translate",
    title: "Help with Translations",
    description: "Zeta One is currently English-only — help bring it to more languages.",
    actionLabel: "Get in touch",
    actionHref: "/contact",
  },
  {
    icon: "edit_note",
    title: "Write Documentation",
    description: "Help expand guides, tutorials and troubleshooting articles.",
    actionLabel: "Get in touch",
    actionHref: "/contact",
  },
  {
    icon: "palette",
    title: "Design & Feedback",
    description: "Share UI/UX feedback or design ideas to improve the app experience.",
    actionLabel: "Get in touch",
    actionHref: "/contact",
  },
];
