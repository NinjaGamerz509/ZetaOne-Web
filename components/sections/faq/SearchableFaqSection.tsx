"use client";

import { useMemo, useState } from "react";
import { FAQ_ITEMS } from "@/content/faq";
import { GlassCard } from "@/components/ui/GlassCard";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { FaqAccordionItem } from "@/components/sections/faq/FaqAccordionItem";

export function SearchableFaqSection() {
  const [openId, setOpenId] = useState<string | null>(null);
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const trimmed = query.trim().toLowerCase();
    if (!trimmed) return FAQ_ITEMS;
    return FAQ_ITEMS.filter(
      (item) =>
        item.question.toLowerCase().includes(trimmed) ||
        item.answer.toLowerCase().includes(trimmed)
    );
  }, [query]);

  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-content px-5 sm:px-8">
        <Reveal>
          <h1 className="text-center font-display text-4xl font-bold text-white sm:text-5xl">
            Frequently Asked Questions
          </h1>
          <p className="mx-auto mt-4 max-w-prose text-center text-lg text-white/55">
            Quick answers to common questions about Zeta One.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mx-auto mt-10 flex max-w-xl items-center gap-3 rounded-full border border-white/[0.12] bg-white/[0.05] px-5 py-3.5 backdrop-blur-glass focus-within:border-emerald-400/40">
            <Icon name="search" size={20} className="text-emerald-300 shrink-0" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search frequently asked questions..."
              aria-label="Search frequently asked questions"
              className="w-full bg-transparent text-[15px] text-white placeholder:text-white/40 outline-none"
            />
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          {filtered.length > 0 ? (
            <GlassCard className="mx-auto mt-10 max-w-2xl px-6 sm:px-8">
              {filtered.map((item) => (
                <FaqAccordionItem
                  key={item.id}
                  item={item}
                  isOpen={openId === item.id}
                  onToggle={() => setOpenId(openId === item.id ? null : item.id)}
                />
              ))}
            </GlassCard>
          ) : (
            <p className="mt-10 text-center text-[15px] text-white/45">
              No questions match &ldquo;{query}&rdquo;.
            </p>
          )}
        </Reveal>
      </div>
    </section>
  );
}
