import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { LATEST_RELEASE } from "@/content/releases";
import { CHECKSUM_INFO } from "@/config/download.config";
import { GlassCard } from "@/components/ui/GlassCard";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { DownloadHero } from "@/components/sections/download/DownloadHero";
import { DownloadActionButtons } from "@/components/sections/download/DownloadActionButtons";
import { ApkDownloadCard } from "@/components/sections/download/ApkDownloadCard";
import { InstallationGuideSection } from "@/components/sections/installation/InstallationGuideSection";
import { RequirementsSection } from "@/components/sections/download/RequirementsSection";
import { FaqSection } from "@/components/sections/faq/FaqSection";
import { PreviousVersionsSection } from "@/components/sections/download/PreviousVersionsSection";
import { formatDate } from "@/lib/utils";
import { JsonLd } from "@/components/layout/JsonLd";
import { buildSoftwareApplicationSchema } from "@/lib/structuredData";

export const metadata: Metadata = buildMetadata({
  title: "Download",
  description: "Download Zeta One for Android. Free, offline-first, and easy to install.",
  path: "/download",
});

export default function DownloadPage() {
  const release = LATEST_RELEASE;

  return (
    <>
      <JsonLd data={buildSoftwareApplicationSchema(release)} />
      {/* Hero */}
      <section className="px-5 pt-32 pb-16 sm:px-8 sm:pt-40">
        <div className="mx-auto max-w-content">
          <DownloadHero />
          <div className="mt-10">
            <DownloadActionButtons />
          </div>
        </div>
      </section>

      {/* Latest Stable Version */}
      <section className="py-16">
        <div className="mx-auto max-w-content px-5 sm:px-8">
          <Reveal>
            <GlassCard className="mx-auto max-w-2xl p-8 sm:p-10">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h2 className="font-display text-xl font-semibold text-white">
                  Latest Stable Version
                </h2>
                <span className="inline-flex items-center rounded-full border border-emerald-500/30 bg-emerald-500/15 px-3 py-1 text-xs font-semibold text-emerald-400">
                  {release.status}
                </span>
              </div>
              <p className="mt-1 text-emerald-300 font-medium">{release.version}</p>

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

              <div className="mt-6 flex items-center gap-2 text-sm text-white/40">
                <Icon name="event" size={16} />
                Released {formatDate(release.releaseDate)}
              </div>
            </GlassCard>
          </Reveal>
        </div>
      </section>

      {/* Download Cards */}
      <section id="download-cards" className="py-16 scroll-mt-24">
        <div className="mx-auto max-w-content px-5 sm:px-8">
          <Reveal>
            <h2 className="text-center font-display text-3xl font-semibold text-white sm:text-4xl">
              Choose Your Download
            </h2>
            <p className="mx-auto mt-3 max-w-prose text-center text-[15px] text-white/55">
              Not sure which one? ARM64 works for almost every modern Android device.
            </p>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {release.apks.map((apk) => (
              <Reveal key={apk.arch} delay={0.05}>
                <ApkDownloadCard apk={apk} />
              </Reveal>
            ))}
          </div>

          {!CHECKSUM_INFO.available && (
            <Reveal delay={0.1}>
              <p className="mt-8 flex items-center justify-center gap-2 text-center text-sm text-white/35">
                <Icon name="verified_user" size={16} />
                {CHECKSUM_INFO.note}
              </p>
            </Reveal>
          )}
        </div>
      </section>

      {/* Installation Tutorial preview */}
      <InstallationGuideSection />

      {/* Requirements */}
      <RequirementsSection />

      {/* FAQ */}
      <FaqSection />

      {/* Previous Versions */}
      <PreviousVersionsSection />
    </>
  );
}
