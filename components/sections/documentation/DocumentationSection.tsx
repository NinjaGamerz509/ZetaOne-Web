"use client";

import Link from "next/link";
import { DOC_CATEGORIES } from "@/content/documentation";
import { GlassCard } from "@/components/ui/GlassCard";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";

export function DocumentationSection() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-content px-5 sm:px-8">
        <Reveal>
          <div className="mx-auto max-w-hero text-center">
            <h2 className="font-display text-3xl font-semibold text-white sm:text-4xl">
              Documentation
            </h2>
            <p className="mt-4 text-lg text-white/55">
              Learn every feature with detailed guides.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <Link
            href="/docs"
            className="mx-auto mt-10 flex max-w-lg items-center gap-3 rounded-full border border-white/[0.12] bg-white/[0.05] px-5 py-3.5 text-white/40 backdrop-blur-glass hover:border-emerald-400/30 transition-colors"
          >
            <Icon name="search" size={20} />
            <span className="text-[15px]">Search documentation...</span>
          </Link>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {DOC_CATEGORIES.slice(0, 8).map((category, index) => (
            <Reveal key={category.id} delay={index * 0.05}>
              <Link href={category.href} className="block h-full">
                <GlassCard hoverable className="flex h-full flex-col p-6">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-500/15">
                    <Icon name={category.icon} className="text-emerald-300" size={22} />
                  </div>
                  <h3 className="mt-4 text-[15px] font-semibold text-white">{category.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-white/50">
                    {category.description}
                  </p>
                </GlassCard>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="mt-10 text-center">
            <Link
              href="/docs"
              className="inline-flex items-center gap-1.5 text-[15px] font-medium text-emerald-300 hover:text-emerald-200 transition-colors"
            >
              View All Documentation
              <Icon name="arrow_forward" size={16} />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
