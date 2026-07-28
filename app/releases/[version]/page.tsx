import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/seo";
import { RELEASE_HISTORY } from "@/content/releases";
import { GlassCard } from "@/components/ui/GlassCard";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { ReleaseStatusBadge } from "@/components/sections/releases/ReleaseStatusBadge";
import { ApkDownloadButton } from "@/components/sections/releases/ApkDownloadButton";
import { ChangelogDisplay } from "@/components/sections/releases/ChangelogDisplay";
import { KnownIssuesList } from "@/components/sections/releases/KnownIssuesList";
import { formatDate } from "@/lib/utils";

interface Props {
  params: { version: string };
}

export function generateStaticParams() {
  return RELEASE_HISTORY.map((release) => ({ version: release.version }));
}

export function generateMetadata({ params }: Props): Metadata {
  const release = RELEASE_HISTORY.find((r) => r.version === params.version);
  return buildMetadata({
    title: release ? `Zeta One ${release.version}` : "Release",
    description: release
      ? `Release notes and downloads for Zeta One ${release.version}.`
      : "Zeta One release details.",
    path: `/releases/${params.version}`,
  });
}

export default function ReleaseVersionPage({ params }: Props) {
  const release = RELEASE_HISTORY.find((r) => r.version === params.version);

  if (!release) {
    notFound();
  }

  const availableApks = release.apks.filter((apk) => apk.url);

  return (
    <section className="min-h-screen px-5 pt-32 pb-24 sm:px-8 sm:pt-40">
      <div className="mx-auto max-w-content">
        <Reveal>
          <Link
            href="/releases"
            className="mx-auto flex w-fit items-center gap-1.5 text-sm text-white/45 hover:text-emerald-300 transition-colors"
          >
            <Icon name="arrow_back" size={16} />
            Release History
          </Link>
        </Reveal>

        <Reveal delay={0.05}>
          <GlassCard className="mx-auto mt-6 max-w-2xl p-8 sm:p-10">
            <div className="flex flex-wrap items-center gap-3">
              <h1 className="font-display text-2xl font-semibold text-white">
                Zeta One {release.version}
              </h1>
              <ReleaseStatusBadge status={release.status} />
            </div>
            <p className="mt-1 text-sm text-white/45">{formatDate(release.releaseDate)}</p>

            <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-4 border-y border-white/[0.08] py-6 sm:grid-cols-3">
              <div>
                <p className="text-xs uppercase tracking-wide text-white/35">Build Number</p>
                <p className="mt-1 text-[15px] text-white/85">{release.buildNumber}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wide text-white/35">Package</p>
                <p className="mt-1 text-[15px] text-white/85 break-words">{release.packageName}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wide text-white/35">Min. Android</p>
                <p className="mt-1 text-[15px] text-white/85">{release.minAndroidVersion}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wide text-white/35">APK Size</p>
                <p className="mt-1 text-[15px] text-white/85">{release.apkSize}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wide text-white/35">Release Channel</p>
                <p className="mt-1 text-[15px] text-white/85">{release.status}</p>
              </div>
            </div>

            {/* Changelog */}
            <div className="mt-6">
              <p className="text-sm font-medium text-white/70">Changelog</p>
              <div className="mt-3">
                <ChangelogDisplay changelog={release.changelog} />
              </div>
            </div>

            {/* Known Issues */}
            <div className="mt-6 border-t border-white/[0.08] pt-6">
              <p className="text-sm font-medium text-white/70">Known Issues</p>
              <div className="mt-3">
                <KnownIssuesList issues={release.knownIssues} />
              </div>
            </div>

            {/* Downloads */}
            {availableApks.length > 0 ? (
              <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {availableApks.map((apk) => (
                  <ApkDownloadButton key={apk.arch} apk={apk} />
                ))}
              </div>
            ) : (
              <div className="mt-8 flex items-center gap-3 rounded-2xl border border-white/[0.1] bg-white/[0.05] px-4 py-4 text-[15px] text-white/60">
                <Icon name="hourglass_top" size={20} className="text-emerald-300 shrink-0" />
                APK download links will be published here shortly.
              </div>
            )}

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="/download" icon="download" className="w-full sm:w-auto">
                Download Page
              </Button>
              <Button href="/docs" variant="secondary" icon="description" className="w-full sm:w-auto">
                Documentation
              </Button>
            </div>
          </GlassCard>
        </Reveal>
      </div>
    </section>
  );
}
