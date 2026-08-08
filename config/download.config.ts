import type { ReleaseApk } from "@/types";

const RELEASE_BASE =
  "https://github.com/NinjaGamerz509/ZataOne/releases/download/v26.8.1";

/**
 * Single source of truth for every APK download link.
 * Set `url` once a real file is uploaded — the corresponding download
 * button appears automatically across the entire website. No layout
 * changes required.
 */
export const DOWNLOAD_LINKS: Record<string, ReleaseApk[]> = {
  "V26.8.1": [
    {
      arch: "Universal",
      label: "Universal (works on any device)",
      url: `${RELEASE_BASE}/app-universal-release.apk`,
      size: "3.28 MB",
    },
    {
      arch: "ARM64",
      label: "ARM64 (recommended)",
      url: `${RELEASE_BASE}/app-arm64-v8a-release.apk`,
      size: "3.19 MB",
    },
    {
      arch: "ARM",
      label: "ARM (older 32-bit phones)",
      url: `${RELEASE_BASE}/app-armeabi-v7a-release.apk`,
      size: "3.19 MB",
    },
    {
      arch: "x86",
      label: "x86 (Intel-based devices)",
      url: `${RELEASE_BASE}/app-x86-release.apk`,
      size: "3.19 MB",
    },
    {
      arch: "x86_64",
      label: "x86_64 (Intel-based devices)",
      url: `${RELEASE_BASE}/app-x86_64-release.apk`,
      size: "3.19 MB",
    },
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
