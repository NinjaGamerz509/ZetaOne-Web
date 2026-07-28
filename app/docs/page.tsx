import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { DOC_CATEGORIES, DOC_PAGES, POPULAR_GUIDE_SLUGS, RECENT_DOC_UPDATES } from "@/content/documentation";
import { GlassCard } from "@/components/ui/GlassCard";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { DocsSearchBar } from "@/components/sections/documentation/DocsSearchBar";
import { formatDate } from "@/lib/utils";

export const metadata: Metadata = buildMetadata({
  title: "Documentation",
  description: "Learn every Zeta One feature with detailed guides and tutorials.",
  path: "/docs",
});

export default function DocsLandingPage() {
  const popularGuides = POPULAR_GUIDE_SLUGS.map((slug) => DOC_PAGES.find((d) => d.slug === slug)).filter(
    (d): d is NonNullable<typeof d> => Boolean(d)
  );

  return (
    <section className="min-h-screen px-5 pt-32 pb-24 sm:px-8 sm:pt-40">
      <div className="mx-auto max-w-content">
        <Reveal>
          <div className="mx-auto max-w-hero text-center">
            <h1 className="font-display text-4xl font-bold text-white sm:text-5xl">
              Documentation
            </h1>
            <p className="mt-4 text-lg text-white/55">Learn every feature with detailed guides.</p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-10">
            <DocsSearchBar />
          </div>
        </Reveal>

        {/* Categories */}
        <div className="mt-16">
          <Reveal>
            <h2 className="font-display text-2xl font-semibold text-white">Categories</h2>
          </Reveal>
          <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {DOC_CATEGORIES.map((category, index) => (
              <Reveal key={category.id} delay={index * 0.04}>
                <Link href={category.href} className="block h-full">
                  <GlassCard hoverable className="flex h-full flex-col p-7">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500/15">
                      <Icon name={category.icon} className="text-emerald-300" size={24} />
                    </div>
                    <h3 className="mt-5 font-display text-lg font-semibold text-white">
                      {category.title}
                    </h3>
                    <p className="mt-2 text-[15px] leading-relaxed text-white/55">
                      {category.description}
                    </p>
                  </GlassCard>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Popular Guides */}
        <div className="mt-20">
          <Reveal>
            <h2 className="font-display text-2xl font-semibold text-white">Popular Guides</h2>
          </Reveal>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {popularGuides.map((guide, index) => (
              <Reveal key={guide.slug} delay={index * 0.05}>
                <Link href={`/docs/${guide.slug}`}>
                  <GlassCard hoverable className="flex items-center justify-between gap-4 p-5">
                    <div className="min-w-0">
                      <h3 className="truncate text-[15px] font-semibold text-white">{guide.title}</h3>
                      <p className="mt-1 truncate text-sm text-white/50">{guide.description}</p>
                    </div>
                    <Icon name="arrow_forward" size={18} className="shrink-0 text-white/30" />
                  </GlassCard>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Recent Updates */}
        <div className="mt-20">
          <Reveal>
            <h2 className="font-display text-2xl font-semibold text-white">Recent Updates</h2>
          </Reveal>
          <GlassCard className="mt-6 divide-y divide-white/[0.06] p-2">
            {RECENT_DOC_UPDATES.map((update) => (
              <Link
                key={update.slug}
                href={`/docs/${update.slug}`}
                className="flex items-center justify-between gap-4 rounded-xl px-4 py-4 hover:bg-white/[0.05] transition-colors"
              >
                <span className="flex items-center gap-3 text-[15px] text-white">
                  <Icon name="update" size={18} className="text-emerald-300" />
                  {update.label}
                </span>
                <span className="text-sm text-white/40">{formatDate(update.date)}</span>
              </Link>
            ))}
          </GlassCard>
        </div>

        {/* Troubleshooting CTA */}
        <div className="mt-20">
          <Reveal>
            <Link href="/docs/troubleshooting">
              <GlassCard hoverable className="flex items-center justify-between gap-4 p-7">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500/15">
                    <Icon name="build" className="text-emerald-300" size={24} />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-white">Troubleshooting</h3>
                    <p className="mt-1 text-[15px] text-white/55">
                      Solve common installation and update issues.
                    </p>
                  </div>
                </div>
                <Icon name="arrow_forward" size={20} className="shrink-0 text-white/30" />
              </GlassCard>
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
