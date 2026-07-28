"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@/components/ui/Icon";
import type { FaqItem } from "@/types";

interface FaqAccordionItemProps {
  item: FaqItem;
  isOpen: boolean;
  onToggle: () => void;
}

export function FaqAccordionItem({ item, isOpen, onToggle }: FaqAccordionItemProps) {
  return (
    <div className="border-b border-white/[0.08] last:border-b-0">
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between gap-4 py-5 text-left min-h-[48px]"
      >
        <span className="text-[15px] font-medium text-white sm:text-base">{item.question}</span>
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.25 }}
          className="shrink-0 text-emerald-300"
        >
          <Icon name="add" size={22} />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-[15px] leading-relaxed text-white/55">{item.answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
