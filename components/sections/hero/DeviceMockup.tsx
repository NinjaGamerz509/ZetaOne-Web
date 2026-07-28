"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Icon } from "@/components/ui/Icon";
import { FloatingCards } from "@/components/sections/hero/FloatingCards";

/**
 * Placeholder device mockup. Replace `showRealScreenshot` and the image
 * source with a real app screenshot once available — layout stays identical.
 */
export function DeviceMockup() {
  const showRealScreenshot = false;

  return (
    <motion.div
      className="relative mx-auto flex w-full max-w-sm items-center justify-center py-10 sm:max-w-md"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <div className="absolute inset-0 -z-10 flex items-center justify-center">
        <div className="h-72 w-72 rounded-full bg-emerald-500/20 blur-[90px]" />
      </div>

      <div className="relative aspect-[9/19] w-full max-w-[280px] rounded-[2.5rem] border border-white/[0.14] bg-white/[0.06] p-3 backdrop-blur-glass shadow-glass">
        <div className="h-full w-full overflow-hidden rounded-[2rem] border border-white/[0.1] bg-gradient-to-b from-emerald-500/10 to-transparent">
          {showRealScreenshot ? (
            <Image
              src="/assets/screenshots/app-home.png"
              alt="Zeta One application screenshot"
              width={280}
              height={600}
              className="h-full w-full object-cover"
            />
          ) : (
            <div className="flex h-full flex-col items-center justify-center gap-4 px-6 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-500/20">
                <Icon name="auto_awesome" className="text-emerald-300" size={32} />
              </div>
              <p className="text-sm text-white/50">App preview coming soon</p>
            </div>
          )}
        </div>
      </div>

      <FloatingCards />
    </motion.div>
  );
}
