import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { GlassCard } from "@/components/ui/GlassCard";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { EmptyState } from "@/components/ui/EmptyState";
import { CommunityLinks } from "@/components/sections/credits/CommunityLinks";
import { PROJECT_LEAD, AI_TOOLS, TESTERS, CONTRIBUTORS } from "@/content/credits";

export const metadata: Metadata = buildMetadata({
  title: "Credits",
  description: "Credits and acknowledgements for everyone and every tool behind Zeta One.",
  path: "/credits",
});

export default function CreditsPage() {
  return (
    <section className="min-h-screen px-5 pt-32 pb-24 sm:px-8 sm:pt-40">
      <div className="mx-auto max-w-content">
        <Reveal>
          <div className="mx-auto max-w-hero text-center">
            <h1 className="font-display text-4xl font-bold text-white sm:text-5xl">Credits</h1>
            <p className="mt-4 text-lg text-white/55">
              Zeta One wasn&apos;t built by one person alone — here&apos;s everyone and everything
              that helped.
            </p>
          </div>
        </Reveal>

        {/* Project Lead */}
        <div className="mt-16">
          <Reveal>
            <h2 className="font-display text-2xl font-semibold text-white">Project Lead</h2>
          </Reveal>
          <Reveal delay={0.05}>
            <GlassCard className="mx-auto mt-6 max-w-xl p-7">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-500/15">
                  <Icon name="person" size={28} className="text-emerald-300" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-white">
                    {PROJECT_LEAD.name}
                  </h3>
                  <div className="mt-1 flex flex-wrap gap-1.5">
                    {PROJECT_LEAD.roles.map((role) => (
                      <span
                        key={role}
                        className="rounded-full border border-white/[0.1] bg-white/[0.05] px-2.5 py-0.5 text-xs text-white/60"
                      >
                        {role}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <p className="mt-4 text-[15px] leading-relaxed text-white/55">{PROJECT_LEAD.bio}</p>
            </GlassCard>
          </Reveal>
        </div>

        {/* AI Tools */}
        <div className="mt-16">
          <Reveal>
            <h2 className="font-display text-2xl font-semibold text-white">AI Development Tools</h2>
            <p className="mt-2 text-[15px] text-white/50">
              AI tools assisted throughout development — none of them are the creator of this
              project.
            </p>
          </Reveal>
          <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-3">
            {AI_TOOLS.map((tool, index) => (
              <Reveal key={tool.name} delay={index * 0.06}>
                <GlassCard className="h-full p-6">
                  <h3 className="font-display text-lg font-semibold text-white">{tool.name}</h3>
                  <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-white/35">
                    Used for
                  </p>
                  <ul className="mt-2 space-y-1">
                    {tool.usedFor.map((use) => (
                      <li key={use} className="text-[15px] text-white/60">
                        {use}
                      </li>
                    ))}
                  </ul>
                </GlassCard>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Testers */}
        <div className="mt-16">
          <Reveal>
            <h2 className="font-display text-2xl font-semibold text-white">Testers</h2>
          </Reveal>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {TESTERS.map((tester, index) => (
              <Reveal key={tester.name} delay={index * 0.06}>
                <GlassCard className="flex items-center gap-4 p-5">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-500/15">
                    <Icon name="bug_report" size={22} className="text-emerald-300" />
                  </div>
                  <div>
                    <p className="text-[15px] font-semibold text-white">{tester.name}</p>
                    <p className="text-sm text-white/50">{tester.role}</p>
                  </div>
                </GlassCard>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Contributors */}
        <div className="mt-16">
          <Reveal>
            <h2 className="font-display text-2xl font-semibold text-white">Contributors</h2>
          </Reveal>
          <div className="mt-6">
            {CONTRIBUTORS.length > 0 ? (
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {CONTRIBUTORS.map((contributor) => (
                  <GlassCard key={contributor.name} className="p-5">
                    <p className="text-[15px] font-semibold text-white">{contributor.name}</p>
                    <p className="text-sm text-white/50">{contributor.role}</p>
                    <p className="mt-2 text-sm text-white/60">{contributor.contribution}</p>
                  </GlassCard>
                ))}
              </div>
            ) : (
              <EmptyState
                icon="diversity_3"
                title="No Contributors Yet"
                description="Want to be the first? Zeta One is open to future contributors."
                actionLabel="Contribute"
                actionHref="/contribute"
              />
            )}
          </div>
        </div>

        {/* Community */}
        <div className="mt-16">
          <Reveal>
            <h2 className="text-center font-display text-2xl font-semibold text-white">
              Community
            </h2>
          </Reveal>
          <div className="mt-6">
            <CommunityLinks />
          </div>
        </div>

        <div className="mt-16 text-center">
          <Reveal>
            <Button href="/contribute" icon="volunteer_activism">
              Get Involved
            </Button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
