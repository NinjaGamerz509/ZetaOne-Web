export type NavLink = {
  label: string;
  href: string;
};

export const PRIMARY_NAV: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Features", href: "/#features" },
  { label: "Documentation", href: "/docs" },
  { label: "Articles", href: "/articles" },
  { label: "Download", href: "/download" },
  { label: "About", href: "/about" },
];

export const MOBILE_EXTRA_NAV: NavLink[] = [
  { label: "Contribute", href: "/contribute" },
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
  { label: "Release Notes", href: "/releases" },
];

export const FOOTER_QUICK_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Download", href: "/download" },
  { label: "Documentation", href: "/docs" },
  { label: "Articles", href: "/articles" },
  { label: "Release Notes", href: "/releases" },
  { label: "FAQ", href: "/faq" },
];

export const FOOTER_LEGAL_LINKS: NavLink[] = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms & Conditions", href: "/terms" },
  { label: "Credits", href: "/credits" },
  { label: "Contribute", href: "/contribute" },
  { label: "About", href: "/about" },
];

export const FOOTER_SUPPORT_LINKS: NavLink[] = [
  { label: "Help", href: "/faq" },
  { label: "Feedback", href: "/contact" },
  { label: "Report Bug", href: "/contact" },
  { label: "Contact", href: "/contact" },
];
