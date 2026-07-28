export interface SocialLink {
  platform: string;
  icon: string;
  url: string | null;
}

/**
 * Single source of truth for every external social/community link.
 * A null url means the channel doesn't exist yet — components using this
 * config must hide the entry rather than render a dead link.
 */
export const socialConfig: SocialLink[] = [
  { platform: "Discord", icon: "forum", url: null },
  { platform: "GitHub", icon: "code", url: null },
  { platform: "YouTube", icon: "smart_display", url: null },
  { platform: "Instagram", icon: "photo_camera", url: null },
  { platform: "X", icon: "tag", url: null },
];
