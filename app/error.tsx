"use client";

import { useEffect } from "react";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";

/**
 * Segment-level error boundary. Catches errors within a route without
 * tearing down the whole page shell (navbar/footer stay visible).
 * Never shows raw error messages or stack traces to the visitor.
 */
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className="flex min-h-[60vh] items-center justify-center px-5 pt-32 sm:px-8">
      <GlassCard className="max-w-lg px-8 py-14 text-center sm:px-12">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-red-500/15">
          <Icon name="error" size={32} className="text-red-300" />
        </div>
        <h1 className="mt-6 font-display text-2xl font-semibold text-white">
          Something went wrong
        </h1>
        <p className="mt-3 text-[15px] text-white/55">
          This page couldn&apos;t load properly. Please try again.
        </p>

        <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Button onClick={() => reset()} icon="refresh" className="w-full sm:w-auto">
            Try Again
          </Button>
          <Button href="/" variant="secondary" icon="home" className="w-full sm:w-auto">
            Go Home
          </Button>
        </div>
      </GlassCard>
    </section>
  );
}
