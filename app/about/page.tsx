import type { Metadata } from "next";
import Image from "next/image";
import { buildMetadata } from "@/lib/seo";
import { GlassCard } from "@/components/ui/GlassCard";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { Timeline } from "@/components/sections/about/Timeline";
import { MISSION_STATEMENT, MISSION_PILLARS, VISION_POINTS } from "@/content/mission";

export const metadata: Metadata = buildMetadata({
  title: "About",
  description: "About Zeta One — why it exists, and where it's headed.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="px-5 pt-32 pb-16 sm:px-8 sm:pt-40">
        <div className="mx-auto max-w-content text-center">
          <Reveal>
            <Image
              src="/assets/logo/zeta-one-logo.png"
              alt="Zeta One logo"
              width={64}
              height={51}
              className="mx-auto h-14 w-auto"
            />
            <h1 className="mt-6 font-display text-4xl font-bold text-white sm:text-5xl">
              About Zeta One
            </h1>
            <p className="mx-auto mt-4 max-w-prose text-lg text-white/55">
              A single, offline-first Android app built for students who want their study tools to
              stay simple and fast.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="relative mx-auto mt-12 aspect-video max-w-2xl overflow-hidden rounded-card border border-white/[0.1] shadow-glass">
              <Image
                src="/assets/backgrounds/bg-glass-rings-dark.jpg"
                alt=""
                fill
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20">
        <div className="mx-auto max-w-content px-5 sm:px-8">
          <Reveal>
            <h2 className="text-center font-display text-3xl font-semibold text-white sm:text-4xl">
              Mission
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mx-auto mt-6 max-w-prose text-center text-[15px] leading-relaxed text-white/60">
              {MISSION_STATEMENT}
            </p>
          </Reveal>

          <div className="mx-auto mt-10 grid max-w-2xl grid-cols-2 gap-4 sm:grid-cols-4">
            {MISSION_PILLARS.map((pillar, index) => (
              <Reveal key={pillar.label} delay={0.1 + index * 0.05}>
                <GlassCard className="flex flex-col items-center gap-2 p-5 text-center">
                  <Icon name={pillar.icon} size={24} className="text-emerald-300" />
                  <span className="text-sm font-medium text-white/75">{pillar.label}</span>
                </GlassCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="py-20">
        <div className="mx-auto max-w-content px-5 sm:px-8">
          <Reveal>
            <h2 className="text-center font-display text-3xl font-semibold text-white sm:text-4xl">
              Vision
            </h2>
            <p className="mx-auto mt-4 max-w-prose text-center text-[15px] text-white/55">
              Where Zeta One is headed next.
            </p>
          </Reveal>

          <div className="mx-auto mt-10 grid max-w-3xl grid-cols-1 gap-5 sm:grid-cols-2">
            {VISION_POINTS.map((point, index) => (
              <Reveal key={point.label} delay={index * 0.06}>
                <GlassCard className="flex items-start gap-4 p-6">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-emerald-500/15">
                    <Icon name={point.icon} className="text-emerald-300" size={22} />
                  </div>
                  <div>
                    <h3 className="text-[15px] font-semibold text-white">{point.label}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-white/55">{point.description}</p>
                  </div>
                </GlassCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <div className="mx-auto max-w-content px-5 sm:px-8">
          <Reveal>
            <h2 className="text-center font-display text-3xl font-semibold text-white sm:text-4xl">
              Timeline
            </h2>
          </Reveal>
          <div className="mt-14">
            <Timeline />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="mx-auto max-w-content px-5 sm:px-8 text-center">
          <Reveal>
            <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button href="/download" icon="download">
                Download Zeta One
              </Button>
              <Button href="/credits" variant="secondary" icon="diversity_3">
                View Credits
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
