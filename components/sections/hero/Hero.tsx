"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { DeviceMockup } from "@/components/sections/hero/DeviceMockup";
import { ScrollIndicator } from "@/components/sections/hero/ScrollIndicator";

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-[72px]">
      <div className="mx-auto grid w-full max-w-content grid-cols-1 items-center gap-12 px-5 py-16 sm:px-8 lg:grid-cols-2 lg:gap-8 lg:py-0">
        <motion.div
          className="flex flex-col items-center text-center lg:items-start lg:text-left"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="mb-6 inline-flex items-center rounded-full border border-white/[0.14] bg-white/[0.06] px-4 py-1.5 text-sm text-emerald-300 backdrop-blur-glass">
            For students, by a student
          </span>

          <h1 className="max-w-hero font-display text-4xl font-bold leading-[1.15] text-white sm:text-5xl lg:text-[3.25rem]">
            The smarter way to study.
          </h1>

          <p className="mt-6 max-w-prose text-lg leading-relaxed text-white/60">
            Offline notes, tasks, documents, focus sessions, flashcards and goals —
            everything inside one clean, productive Android application.
          </p>

          <div className="mt-10 flex w-full flex-col gap-4 sm:w-auto sm:flex-row">
            <Button href="/download" size="lg" icon="download" className="w-full sm:w-auto">
              Download Now
            </Button>
            <Button
              href="/docs"
              variant="secondary"
              size="lg"
              icon="description"
              className="w-full sm:w-auto"
            >
              Read Documentation
            </Button>
          </div>
        </motion.div>

        <DeviceMockup />
      </div>

      <ScrollIndicator />
    </section>
  );
}
