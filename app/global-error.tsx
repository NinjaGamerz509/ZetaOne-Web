"use client";

import { useEffect } from "react";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";

/**
 * Global error boundary. Never shows a raw stack trace or error message
 * to the visitor — logs internally and shows a calm, on-brand fallback.
 */
export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Intentionally minimal: swap for real error reporting once configured.
    console.error(error);
  }, [error]);

  return (
    <html lang="en">
      <body className="bg-[#04120D] text-white antialiased">
        <section className="flex min-h-screen items-center justify-center px-5 sm:px-8">
          <GlassCard className="max-w-lg px-8 py-14 text-center sm:px-12">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-red-500/15">
              <Icon name="error" size={32} className="text-red-300" />
            </div>
            <h1 className="mt-6 font-display text-3xl font-semibold text-white">
              Something went wrong
            </h1>
            <p className="mt-3 text-[15px] text-white/55">
              An unexpected error occurred. Please try again.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <Button
                onClick={() => reset()}
                icon="refresh"
                className="w-full sm:w-auto"
              >
                Try Again
              </Button>
              <Button href="/" variant="secondary" icon="home" className="w-full sm:w-auto">
                Go Home
              </Button>
            </div>
          </GlassCard>
        </section>
      </body>
    </html>
  );
}
