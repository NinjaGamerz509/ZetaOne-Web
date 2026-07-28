export interface LegalSection {
  id: string;
  heading: string;
  body: string[];
}

export const PRIVACY_LAST_UPDATED = "2026-07-20";

export const PRIVACY_SECTIONS: LegalSection[] = [
  {
    id: "overview",
    heading: "Overview",
    body: [
      "Zeta One is designed to work fully offline. This policy explains what little data the app touches, and why.",
    ],
  },
  {
    id: "data-we-collect",
    heading: "Data We Collect",
    body: [
      "Zeta One does not require an account and does not collect personal information to function.",
      "Notes, tasks, documents, goals and all other content you create are stored locally on your device.",
    ],
  },
  {
    id: "how-we-use-data",
    heading: "How We Use Data",
    body: [
      "Because content stays on your device, we do not use it for advertising, analytics, or any external purpose.",
    ],
  },
  {
    id: "third-party-services",
    heading: "Third-Party Services",
    body: [
      "Zeta One does not currently integrate third-party analytics or advertising SDKs.",
    ],
  },
  {
    id: "data-security",
    heading: "Data Security",
    body: [
      "Your data lives in your device's local storage, protected by Android's standard app sandboxing and permissions model.",
    ],
  },
  {
    id: "childrens-privacy",
    heading: "Children's Privacy",
    body: [
      "Zeta One does not knowingly collect personal information from children, since the app does not collect personal information at all.",
    ],
  },
  {
    id: "changes-to-policy",
    heading: "Changes to This Policy",
    body: [
      "If this policy changes, the updated version will be published on this page along with a new last-updated date.",
    ],
  },
  {
    id: "contact",
    heading: "Contact",
    body: [
      "Questions about this policy can be sent through the Contact page.",
    ],
  },
];
