import type { ReleaseApk } from "@/types";

/**
 * Single source of truth for every APK download link.
 * Set `url` once a real file is uploaded — the corresponding download
 * button appears automatically across the entire website. No layout
 * changes required.
 */
export const DOWNLOAD_LINKS: Record<string, ReleaseApk[]> = {
  "V26.1.8": [
    { arch: "Universal", label: "Universal APK", url: null, size: "42 MB" },
    { arch: "ARM64", label: "ARM64 (recommended)", url: null, size: "28 MB" },
    { arch: "ARM", label: "ARM", url: null, size: "27 MB" },
    { arch: "x86", label: "x86", url: null, size: "30 MB" },
    { arch: "Bundle", label: "APK Bundle (future)", url: null, size: "—" },
  ],
};

export function getDownloadLinksForVersion(version: string): ReleaseApk[] {
  return DOWNLOAD_LINKS[version] ?? [];
}

export function getAvailableDownloadLinks(version: string): ReleaseApk[] {
  return getDownloadLinksForVersion(version).filter((apk) => apk.url);
}

export const CHECKSUM_INFO = {
  available: false,
  algorithm: "SHA-256",
  note: "Checksum verification will be published alongside future releases.",
} as const;
