"use client";

import { motion } from "framer-motion";
import { Icon } from "@/components/ui/Icon";

const CARDS = [
  { icon: "edit_note", label: "Notes", position: "top-2 left-0 sm:-left-6", delay: 0 },
  { icon: "checklist", label: "Tasks", position: "top-16 right-0 sm:-right-8", delay: 0.4 },
  { icon: "flag", label: "Goals", position: "bottom-28 -left-2 sm:-left-10", delay: 0.8 },
  { icon: "description", label: "Documents", position: "bottom-8 right-2 sm:right-0", delay: 1.2 },
  { icon: "style", label: "Flashcards", position: "top-1/2 left-1/2 -translate-x-1/2", delay: 1.6 },
  { icon: "calendar_month", label: "Calendar", position: "bottom-0 left-1/3", delay: 2 },
] as const;

/**
 * Maximum six cards, slow floating motion, never bouncy.
 */
export function FloatingCards() {
  return (
    <div className="pointer-events-none absolute inset-0 hidden sm:block" aria-hidden="true">
      {CARDS.map((card) => (
        <motion.div
          key={card.label}
          className={`absolute ${card.position} flex items-center gap-2 rounded-2xl border border-white/[0.14] bg-white/[0.08] px-4 py-3 backdrop-blur-glass shadow-glass-sm`}
          animate={{ y: [0, -14, 0] }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: card.delay,
          }}
        >
          <Icon name={card.icon} className="text-emerald-300" size={20} />
          <span className="text-sm font-medium text-white/80">{card.label}</span>
        </motion.div>
      ))}
    </div>
  );
}
