/**
 * Central source of truth for application metadata.
 * Never hardcode these values inside components.
 */

export const APP = {
  name: "Zeta One",
  developer: "Shaikh Zaid",
  currentVersion: "V26.1.8",
  buildNumber: "26108",
  packageName: "com.zetaone.app",
  minimumAndroidVersion: "Android 8.0 (API 26)",
  releaseChannel: "Stable" as const,
  releaseDate: "2026-07-20",
  apkSize: "42 MB",
  supportEmail: "help@zetaone.qzz.io",
  feedbackEmail: "feedback@zetaone.qzz.io",
  documentationUrl: "https://docs.zetaone.qzz.io",
  downloadUrl: "/download",
  copyrightYear: 2026,
} as const;

export type ReleaseStatus = "Stable" | "Beta" | "Alpha" | "Deprecated" | "Latest";

export const RELEASE_STATUS_COLORS: Record<ReleaseStatus, string> = {
  Stable: "bg-emerald-500/15 text-emerald-400 border-emerald-500/30",
  Beta: "bg-sky-500/15 text-sky-400 border-sky-500/30",
  Alpha: "bg-orange-500/15 text-orange-400 border-orange-500/30",
  Deprecated: "bg-red-500/15 text-red-400 border-red-500/30",
  Latest: "bg-mint-DEFAULT/15 text-mint-dark border-mint-DEFAULT/30",
};
