import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { RELEASE_HISTORY } from "@/content/releases";
import { GlassCard } from "@/components/ui/GlassCard";
import { EmptyState } from "@/components/ui/EmptyState";
import { Reveal } from "@/components/ui/Reveal";
import { ReleaseStatusBadge } from "@/components/sections/releases/ReleaseStatusBadge";
import { formatDate } from "@/lib/utils";
import { Icon } from "@/components/ui/Icon";
import type { Release, ReleaseArchiveStatus } from "@/types";

export const metadata: Metadata = buildMetadata({
  title: "Release Notes",
  description: "Full release history and changelogs for Zeta One.",
  path: "/releases",
});

function ReleaseGroup({ title, releases }: { title: string; releases: Release[] }) {
  if (releases.length === 0) return null;

  return (
    <div className="mt-14 first:mt-0">
      <Reveal>
        <h2 className="font-display text-xl font-semibold text-white">{title}</h2>
      </Reveal>
      <div className="mt-5 space-y-4">
        {releases.map((release, index) => (
          <Reveal key={release.version} delay={index * 0.05}>
            <Link href={`/releases/${release.version}`}>
              <GlassCard hoverable className="flex items-center justify-between gap-4 p-6">
                <div>
                  <div className="flex items-center gap-3">
                    <h3 className="font-display text-lg font-semibold text-white">
                      {release.version}
                    </h3>
                    <ReleaseStatusBadge status={release.status} />
                  </div>
                  <p className="mt-1 text-sm text-white/45">{formatDate(release.releaseDate)}</p>
                </div>
                <Icon name="arrow_forward" size={20} className="shrink-0 text-white/30" />
              </GlassCard>
            </Link>
          </Reveal>
        ))}
      </div>
    </div>
  );
}

export default function ReleasesPage() {
  const grouped: Record<ReleaseArchiveStatus, Release[]> = {
    Newest: RELEASE_HISTORY.filter((r) => r.archiveStatus === "Newest"),
    Older: RELEASE_HISTORY.filter((r) => r.archiveStatus === "Older"),
    Archived: RELEASE_HISTORY.filter((r) => r.archiveStatus === "Archived"),
  };

  return (
    <section className="min-h-screen px-5 pt-32 pb-24 sm:px-8 sm:pt-40">
      <div className="mx-auto max-w-content">
        <Reveal>
          <div className="mx-auto max-w-hero text-center">
            <h1 className="font-display text-4xl font-bold text-white sm:text-5xl">
              Release History
            </h1>
            <p className="mt-4 text-lg text-white/55">
              Every version of Zeta One, with full changelogs.
            </p>
          </div>
        </Reveal>

        {RELEASE_HISTORY.length > 0 ? (
          <div className="mx-auto mt-14 max-w-2xl">
            <ReleaseGroup title="Newest Version" releases={grouped.Newest} />
            <ReleaseGroup title="Older Versions" releases={grouped.Older} />
            <ReleaseGroup title="Archived Versions" releases={grouped.Archived} />
          </div>
        ) : (
          <div className="mt-14">
            <EmptyState
              icon="history"
              title="No Releases Available"
              description="Release history will appear here once a version has shipped."
              actionLabel="Go to Download"
              actionHref="/download"
            />
          </div>
        )}
      </div>
    </section>
  );
}
