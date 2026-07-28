"use client";

import { motion } from "framer-motion";
import { Icon } from "@/components/ui/Icon";

export function ScrollIndicator() {
  function handleClick() {
    document.getElementById("features")?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <button
      onClick={handleClick}
      aria-label="Scroll to features"
      className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-2 text-white/40 hover:text-white/70 transition-colors"
    >
      <motion.span
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <Icon name="mouse" size={26} />
      </motion.span>
    </button>
  );
}
