import type { ReleaseArchiveStatus } from "@/types";

/**
 * Behavioral settings for the release/changelog system.
 * Actual release entries live in content/releases.ts.
 */
export const releaseConfig = {
  archiveGroupOrder: ["Newest", "Older", "Archived"] as ReleaseArchiveStatus[],
  archiveGroupLabels: {
    Newest: "Newest Version",
    Older: "Older Versions",
    Archived: "Archived Versions",
  } as Record<ReleaseArchiveStatus, string>,
  showChecksums: false,
} as const;
