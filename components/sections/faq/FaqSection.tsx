"use client";

import { useState } from "react";
import { FAQ_ITEMS } from "@/content/faq";
import { GlassCard } from "@/components/ui/GlassCard";
import { Reveal } from "@/components/ui/Reveal";
import { FaqAccordionItem } from "@/components/sections/faq/FaqAccordionItem";

export function FaqSection() {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-content px-5 sm:px-8">
        <Reveal>
          <h2 className="text-center font-display text-3xl font-semibold text-white sm:text-4xl">
            Frequently Asked Questions
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <GlassCard className="mx-auto mt-14 max-w-2xl px-6 sm:px-8">
            {FAQ_ITEMS.map((item) => (
              <FaqAccordionItem
                key={item.id}
                item={item}
                isOpen={openId === item.id}
                onToggle={() => setOpenId(openId === item.id ? null : item.id)}
              />
            ))}
          </GlassCard>
        </Reveal>
      </div>
    </section>
  );
}
