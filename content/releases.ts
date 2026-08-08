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
    "First public release of Zeta One",
    "Notes, Tasks, Documents, Focus Mode, Goals and more",
    "Available for ARM64, ARM, x86, x86_64 and Universal",
  ],
  changelog: {
    added: [
      "Initial public release with all core modules",
      "Notes, Tasks, Documents, Focus Mode, Goals, Flashcards, Calendar, Timetable and Analytics",
    ],
    improved: [],
    fixed: [],
    removed: [],
  },
  knownIssues: [],
  apks: getDownloadLinksForVersion(APP.currentVersion),
};

export const RELEASE_HISTORY: Release[] = [LATEST_RELEASE];
