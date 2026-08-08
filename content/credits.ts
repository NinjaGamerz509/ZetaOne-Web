import type { ProjectLead, AiTool, Tester, Contributor, CommunityLink } from "@/types";

export const PROJECT_LEAD: ProjectLead = {
  name: "Shaikh Zaid (NinjaGamerz)",
  roles: ["Project Creator", "UI Planning", "Development", "Vision"],
  bio: "Zeta One was created, planned and built by Shaikh Zaid, with AI tools assisting throughout the process.",
};

/**
 * Zeta One was built with help from multiple AI tools. Each is credited for
 * its specific contribution — none of them are described as the creator.
 */
export const AI_TOOLS: AiTool[] = [
  {
    name: "Google Flow",
    usedFor: ["Official Artwork", "Hero Images", "Backgrounds", "Promotional Visuals"],
  },
  {
    name: "Meta AI",
    usedFor: ["Additional Visual Assets", "Concept Images", "Creative Assets"],
  },
  {
    name: "Claude",
    usedFor: ["Code Assistance", "Architecture", "Documentation", "Planning"],
  },
];

/**
 * Future testers should be added here — loaded from this configuration file,
 * never hardcoded elsewhere in the app.
 */
export const TESTERS: Tester[] = [{ name: "Archit", role: "Alpha Tester" }];

/**
 * Empty until real contributors join — the Contributors section renders
 * an empty state instead of fake placeholder people.
 */
export const CONTRIBUTORS: Contributor[] = [];

/**
 * Community links only render once a real URL is set — otherwise hidden,
 * never shown as a dead/broken link.
 */
export const COMMUNITY_LINKS: CommunityLink[] = [
  { platform: "Discord", icon: "forum", url: null },
  { platform: "GitHub", icon: "code", url: null },
  { platform: "YouTube", icon: "smart_display", url: null },
  { platform: "Instagram", icon: "photo_camera", url: null },
];
