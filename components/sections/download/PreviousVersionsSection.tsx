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
            <Reveal delay={0.1}>
              <p className="text-center text-[15px] text-white/45">
                This is the first release — check back after future updates.
              </p>
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
