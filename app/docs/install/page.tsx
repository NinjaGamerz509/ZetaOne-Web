import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { INSTALLATION_STEPS } from "@/content/tutorial";
import { APP_REQUIREMENTS } from "@/config/app";
import { GlassCard } from "@/components/ui/GlassCard";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { DocsSidebar } from "@/components/sections/documentation/DocsSidebar";

export const metadata: Metadata = buildMetadata({
  title: "Installation Guide",
  description: "A complete step-by-step guide to installing Zeta One on Android.",
  path: "/docs/install",
});

export default function InstallationGuidePage() {
  return (
    <section className="min-h-screen px-5 pt-32 pb-24 sm:px-8 sm:pt-40">
      <div className="mx-auto grid max-w-content grid-cols-1 gap-10 md:grid-cols-[220px_1fr]">
        <DocsSidebar />

        <div className="min-w-0">
          <Reveal>
            <Link
              href="/docs"
              className="inline-flex items-center gap-1.5 text-sm text-white/45 hover:text-emerald-300 transition-colors"
            >
              <Icon name="arrow_back" size={16} />
              Documentation
            </Link>
            <h1 className="mt-4 font-display text-3xl font-bold text-white sm:text-4xl">
              Installation Guide
            </h1>
            <p className="mt-3 text-lg text-white/55">
              Installing Zeta One takes less than a minute. Follow the steps below.
            </p>
          </Reveal>

          <div className="mt-12 space-y-10">
            {INSTALLATION_STEPS.map((step, index) => (
              <Reveal key={step.step} delay={index * 0.06}>
                <div className="grid grid-cols-1 items-center gap-6 sm:grid-cols-[200px_1fr]">
                  <div className="relative mx-auto aspect-[9/16] w-40 overflow-hidden rounded-2xl border border-white/[0.1] shadow-glass-sm sm:mx-0">
                    <Image
                      src={step.image}
                      alt={`Screenshot for step ${step.step}: ${step.title}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <div className="flex items-center gap-3">
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500/15 text-sm font-semibold text-emerald-300">
                        {step.step}
                      </span>
                      <h2 className="font-display text-lg font-semibold text-white">
                        {step.title}
                      </h2>
                    </div>
                    <p className="mt-3 text-[15px] leading-relaxed text-white/60">
                      {step.caption}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2}>
            <GlassCard className="mt-14 p-7">
              <h2 className="font-display text-lg font-semibold text-white">Requirements</h2>
              <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {APP_REQUIREMENTS.map((req) => (
                  <div key={req.label} className="flex items-start gap-3">
                    <Icon name={req.icon} size={18} className="mt-0.5 shrink-0 text-emerald-300" />
                    <div>
                      <p className="text-xs uppercase tracking-wide text-white/35">{req.label}</p>
                      <p className="mt-0.5 text-[15px] text-white/80">{req.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </GlassCard>
          </Reveal>

          <Reveal delay={0.25}>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Button href="/download" size="lg" icon="download" className="w-full sm:w-auto">
                Download APK
              </Button>
              <Button
                href="/docs/troubleshooting"
                variant="secondary"
                size="lg"
                icon="build"
                className="w-full sm:w-auto"
              >
                Troubleshooting
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
