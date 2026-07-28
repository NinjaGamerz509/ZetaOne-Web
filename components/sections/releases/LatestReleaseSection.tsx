import { LATEST_RELEASE } from "@/content/releases";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { formatDate } from "@/lib/utils";
import { ReleaseStatusBadge } from "@/components/sections/releases/ReleaseStatusBadge";
import { ApkDownloadButton } from "@/components/sections/releases/ApkDownloadButton";

const META_ITEMS = (release: typeof LATEST_RELEASE) => [
  { label: "Version", value: release.version },
  { label: "Build", value: release.buildNumber },
  { label: "Release Date", value: formatDate(release.releaseDate) },
  { label: "Package", value: release.packageName },
  { label: "Min. Android", value: release.minAndroidVersion },
  { label: "APK Size", value: release.apkSize },
];

export function LatestReleaseSection() {
  const release = LATEST_RELEASE;
  const availableApks = release.apks.filter((apk) => apk.url);

  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-content px-5 sm:px-8">
        <Reveal>
          <div className="mx-auto max-w-hero text-center">
            <h2 className="font-display text-3xl font-semibold text-white sm:text-4xl">
              Latest Release
            </h2>
            <p className="mt-4 text-lg text-white/55">
              Stay up to date with the newest improvements and features.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <GlassCard className="mx-auto mt-14 max-w-3xl p-8 sm:p-10">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-3">
                  <h3 className="font-display text-2xl font-semibold text-white">Zeta One</h3>
                  <ReleaseStatusBadge status={release.status} />
                </div>
                <p className="mt-1 text-emerald-300 font-medium">{release.version}</p>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-4 border-y border-white/[0.08] py-6 sm:grid-cols-3">
              {META_ITEMS(release).map((item) => (
                <div key={item.label}>
                  <p className="text-xs uppercase tracking-wide text-white/35">{item.label}</p>
                  <p className="mt-1 text-[15px] text-white/85 break-words">{item.value}</p>
                </div>
              ))}
            </div>

            <div className="mt-6">
              <p className="text-sm font-medium text-white/70">What&apos;s new</p>
              <ul className="mt-3 space-y-2">
                {release.highlights.map((point) => (
                  <li key={point} className="flex items-start gap-2 text-[15px] text-white/60">
                    <Icon name="check_circle" size={18} className="mt-0.5 shrink-0 text-emerald-400" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            {availableApks.length > 0 && (
              <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {availableApks.map((apk) => (
                  <ApkDownloadButton key={apk.arch} apk={apk} />
                ))}
              </div>
            )}

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="/download" icon="download" className="w-full sm:w-auto">
                Download APK
              </Button>
              <Button href="/releases" variant="secondary" icon="history" className="w-full sm:w-auto">
                View Release Notes
              </Button>
              <Button href="/docs" variant="tertiary" icon="description" className="w-full sm:w-auto">
                Documentation
              </Button>
            </div>

            <div className="mt-6 text-center">
              <Button href="/releases" variant="tertiary" size="md" className="text-sm">
                Older Versions
              </Button>
            </div>
          </GlassCard>
        </Reveal>
      </div>
    </section>
  );
}
