import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { GlassCard } from "@/components/ui/GlassCard";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { CONTRIBUTE_WAYS } from "@/content/contribute";

export const metadata: Metadata = buildMetadata({
  title: "Contribute",
  description: "Ways to get involved with Zeta One as a tester, translator, writer or designer.",
  path: "/contribute",
});

export default function ContributePage() {
  return (
    <section className="min-h-screen px-5 pt-32 pb-24 sm:px-8 sm:pt-40">
      <div className="mx-auto max-w-content">
        <Reveal>
          <div className="mx-auto max-w-hero text-center">
            <h1 className="font-display text-4xl font-bold text-white sm:text-5xl">Contribute</h1>
            <p className="mt-4 text-lg text-white/55">
              Zeta One is small and early — there are plenty of ways to get involved.
            </p>
          </div>
        </Reveal>

        <div className="mx-auto mt-14 grid max-w-3xl grid-cols-1 gap-5 sm:grid-cols-2">
          {CONTRIBUTE_WAYS.map((way, index) => (
            <Reveal key={way.title} delay={index * 0.06}>
              <GlassCard className="flex h-full flex-col p-7">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500/15">
                  <Icon name={way.icon} className="text-emerald-300" size={24} />
                </div>
                <h2 className="mt-5 font-display text-lg font-semibold text-white">{way.title}</h2>
                <p className="mt-2 flex-1 text-[15px] leading-relaxed text-white/55">
                  {way.description}
                </p>
                <Button href={way.actionHref} variant="secondary" icon="arrow_forward" className="mt-6 w-fit">
                  {way.actionLabel}
                </Button>
              </GlassCard>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="mt-16 text-center">
            <Button href="/credits" variant="tertiary" icon="diversity_3">
              See who&apos;s already contributed
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
