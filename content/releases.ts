import type { Release } from "@/types";
import { APP } from "@/constants/app";
import { getDownloadLinksForVersion } from "@/config/download.config";

export const LATEST_RELEASE: Release = {
  version: APP.currentVersion,
  buildNumber: APP.buildNumber,
  status: "Stable",
  archiveStatus: "Newest",
  releaseDate: APP.releaseDate,
  packageName: APP.packageName,
  minAndroidVersion: APP.minimumAndroidVersion,
  apkSize: APP.apkSize,
  highlights: [
    "Improved Notes performance",
    "Better animations",
    "Fixed PDF rendering",
    "New Focus Mode",
    "UI refinements",
  ],
  changelog: {
    added: ["Focus Mode with automatic break timers", "Session statistics inside Analytics"],
    improved: ["Notes load and scroll performance", "Overall animation smoothness across the app"],
    fixed: ["PDF pages rendering incorrectly on some devices", "Task reminders not firing on time"],
    removed: [],
  },
  knownIssues: [
    "Occasional delay opening very large PDF files",
    "Timetable landscape layout is not yet optimized",
  ],
  apks: getDownloadLinksForVersion(APP.currentVersion),
};

export const RELEASE_HISTORY: Release[] = [LATEST_RELEASE];
