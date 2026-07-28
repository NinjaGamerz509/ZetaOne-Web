import type { TroubleshootingIssue } from "@/types";

export const TROUBLESHOOTING_ISSUES: TroubleshootingIssue[] = [
  {
    id: "apk-wont-install",
    problem: "APK won't install",
    cause: "Android is blocking installation from an unknown source, or a previous incomplete download is corrupted.",
    solution: "Enable \"Install unknown apps\" for your browser or file manager in Android Settings, then re-download the APK from the official Download page and try again.",
    relatedSlugs: ["installation"],
  },
  {
    id: "download-failed",
    problem: "Download failed",
    cause: "An unstable internet connection or insufficient storage interrupted the download.",
    solution: "Check your internet connection and available storage, then retry the download. If it keeps failing, try switching between Wi-Fi and mobile data.",
    relatedSlugs: ["installation"],
  },
  {
    id: "permission-denied",
    problem: "Permission denied",
    cause: "Zeta One needs storage access to save notes, documents and exports, and this permission was denied or revoked.",
    solution: "Open Android Settings → Apps → Zeta One → Permissions, and enable Storage access.",
    relatedSlugs: ["settings"],
  },
  {
    id: "app-wont-open",
    problem: "App won't open",
    cause: "A corrupted install or an incompatible Android version can prevent the app from launching.",
    solution: "Confirm your device meets the minimum Android version, then uninstall and reinstall the latest APK from the Download page.",
    relatedSlugs: ["installation", "getting-started"],
  },
  {
    id: "update-failed",
    problem: "Update failed",
    cause: "Installing a new APK over an existing install can fail if the signature doesn't match, or storage is full.",
    solution: "Free up storage space and retry. If the update still fails, uninstall the old version first, then install the latest APK.",
    relatedSlugs: ["installation"],
  },
  {
    id: "storage-error",
    problem: "Storage error",
    cause: "The device has run out of available storage space required to save notes or documents.",
    solution: "Free up space by removing unused apps or files, then reopen Zeta One.",
    relatedSlugs: ["documents"],
  },
];
