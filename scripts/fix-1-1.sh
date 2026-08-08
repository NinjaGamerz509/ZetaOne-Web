#!/usr/bin/env bash
# fix-1.sh — run this from the root of your zeta-one-web repo (where package.json lives)
# Applies: real APK download links, version bump to V26.8.1, package name fix,
# release date (15 Aug), Android 12+, empty-state for older versions,
# Credits name update, and single support email everywhere.

set -e

if [ ! -f "package.json" ]; then
  echo "Run this script from the root of your zeta-one-web project (where package.json lives)."
  exit 1
fi

echo "Applying fix-1.sh changes..."

# ---------------------------------------------------------------------------
# 1. constants/app.ts — version, build, package name, release date, Android req
# ---------------------------------------------------------------------------
cat > constants/app.ts << 'EOF'
/**
 * Central source of truth for application metadata.
 * Never hardcode these values inside components.
 */

export const APP = {
  name: "Zeta One",
  developer: "Shaikh Zaid (NinjaGamerz)",
  currentVersion: "V26.8.1",
  buildNumber: "26081",
  packageName: "com.zeta.one",
  minimumAndroidVersion: "Android 12.0 (API 31)",
  releaseChannel: "Stable" as const,
  releaseDate: "2026-08-15",
  apkSize: "3.28 MB",
  supportEmail: "help@zetaone.qzz.io",
  feedbackEmail: "help@zetaone.qzz.io",
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
EOF
echo "  [done] constants/app.ts"

# ---------------------------------------------------------------------------
# 2. config/site.config.ts — single support email everywhere
# ---------------------------------------------------------------------------
if [ -f "config/site.config.ts" ]; then
  sed -i 's/support: ".*"/support: "help@zetaone.qzz.io"/' config/site.config.ts
  sed -i 's/feedback: ".*"/feedback: "help@zetaone.qzz.io"/' config/site.config.ts
  echo "  [done] config/site.config.ts (emails)"
fi

# ---------------------------------------------------------------------------
# 3. types/index.ts — add x86_64 architecture to ReleaseApk if missing
# ---------------------------------------------------------------------------
if [ -f "types/index.ts" ]; then
  sed -i 's/arch: "ARM64" | "ARM" | "x86" | "Universal" | "Bundle";/arch: "ARM64" | "ARM" | "x86" | "x86_64" | "Universal" | "Bundle";/' types/index.ts
  echo "  [done] types/index.ts (added x86_64 architecture)"
fi

# ---------------------------------------------------------------------------
# 4. config/download.config.ts — real GitHub release links + sizes
# ---------------------------------------------------------------------------
cat > config/download.config.ts << 'EOF'
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
EOF
echo "  [done] config/download.config.ts (real links + sizes)"

# ---------------------------------------------------------------------------
# 5. content/releases.ts — highlights matching first public release
# ---------------------------------------------------------------------------
cat > content/releases.ts << 'EOF'
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
EOF
echo "  [done] content/releases.ts"

# ---------------------------------------------------------------------------
# 6. components/sections/download/PreviousVersionsSection.tsx
#    — proper empty state instead of a card when there's nothing older
# ---------------------------------------------------------------------------
if [ -f "components/sections/download/PreviousVersionsSection.tsx" ]; then
  cat > components/sections/download/PreviousVersionsSection.tsx << 'EOF'
import Link from "next/link";
import { RELEASE_HISTORY, LATEST_RELEASE } from "@/content/releases";
import { GlassCard } from "@/components/ui/GlassCard";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { ReleaseStatusBadge } from "@/components/sections/releases/ReleaseStatusBadge";
import { formatDate } from "@/lib/utils";

export function PreviousVersionsSection() {
  const olderVersions = RELEASE_HISTORY.filter((r) => r.version !== LATEST_RELEASE.version);

  return (
    <section className="py-20">
      <div className="mx-auto max-w-content px-5 sm:px-8">
        <Reveal>
          <h2 className="text-center font-display text-3xl font-semibold text-white sm:text-4xl">
            Previous Versions
          </h2>
        </Reveal>

        <div className="mx-auto mt-10 max-w-2xl space-y-4">
          <Reveal delay={0.05}>
            <Link href={`/releases/${LATEST_RELEASE.version}`}>
              <GlassCard hoverable className="flex items-center justify-between gap-4 p-5">
                <div className="flex items-center gap-3">
                  <h3 className="text-[15px] font-semibold text-white">{LATEST_RELEASE.version}</h3>
                  <ReleaseStatusBadge status="Latest" />
                </div>
                <Icon name="arrow_forward" size={18} className="shrink-0 text-white/30" />
              </GlassCard>
            </Link>
          </Reveal>

          {olderVersions.length > 0 ? (
            olderVersions.map((release, index) => (
              <Reveal key={release.version} delay={0.08 + index * 0.05}>
                <Link href={`/releases/${release.version}`}>
                  <GlassCard hoverable className="flex items-center justify-between gap-4 p-5">
                    <div className="flex items-center gap-3">
                      <h3 className="text-[15px] font-semibold text-white">{release.version}</h3>
                      <ReleaseStatusBadge status={release.status} />
                    </div>
                    <span className="text-sm text-white/40">{formatDate(release.releaseDate)}</span>
                  </GlassCard>
                </Link>
              </Reveal>
            ))
          ) : (
            <Reveal delay={0.08}>
              <GlassCard className="flex flex-col items-center px-8 py-12 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500/15">
                  <Icon name="history_toggle_off" size={24} className="text-emerald-300" />
                </div>
                <h3 className="mt-4 text-[15px] font-semibold text-white">
                  No Older Versions Available
                </h3>
                <p className="mt-2 max-w-sm text-sm text-white/50">
                  {LATEST_RELEASE.version} is the first public release of Zeta One. Future
                  versions will appear here.
                </p>
              </GlassCard>
            </Reveal>
          )}
        </div>

        <Reveal delay={0.15}>
          <div className="mt-10 text-center">
            <Button href="/releases" variant="secondary" icon="history">
              View Full Release History
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
EOF
  echo "  [done] components/sections/download/PreviousVersionsSection.tsx (empty state)"
fi

# ---------------------------------------------------------------------------
# 7. content/credits.ts — project lead display name
# ---------------------------------------------------------------------------
if [ -f "content/credits.ts" ]; then
  sed -i 's/name: "Shaikh Zaid"/name: "Shaikh Zaid (NinjaGamerz)"/' content/credits.ts
  echo "  [done] content/credits.ts (name updated)"
fi

# ---------------------------------------------------------------------------
# 8. Remove any remaining feedback@ references app-wide, force help@ everywhere
# ---------------------------------------------------------------------------
grep -rl "feedback@zetaone.qzz.io" app components config constants content lib 2>/dev/null | while read -r f; do
  sed -i 's/feedback@zetaone\.qzz\.io/help@zetaone.qzz.io/g' "$f"
  echo "  [done] $f (feedback email -> help@)"
done

echo ""
echo "All fixes applied. Review the diff, then:"
echo "  npm run lint"
echo "  npm run build"
