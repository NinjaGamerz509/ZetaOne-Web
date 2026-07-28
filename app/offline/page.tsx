import type { Metadata } from "next";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";

export const metadata: Metadata = {
  title: "You're Offline",
  description: "This page requires an internet connection.",
};

/**
 * Shown when a future service worker serves this route while the device
 * has no network connection. Not currently wired to a service worker —
 * this page exists so PWA support can be added later without new UI work.
 */
export default function OfflinePage() {
  return (
    <section className="flex min-h-screen items-center justify-center px-5 pt-32 sm:px-8">
      <GlassCard className="max-w-lg px-8 py-14 text-center sm:px-12">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-500/15">
          <Icon name="wifi_off" size={32} className="text-emerald-300" />
        </div>
        <h1 className="mt-6 font-display text-3xl font-semibold text-white">You&apos;re Offline</h1>
        <p className="mt-3 text-[15px] text-white/55">
          This page needs an internet connection to load. Reconnect and try again.
        </p>

        <div className="mt-9">
          <Button href="/" icon="refresh" className="w-full sm:w-auto">
            Retry
          </Button>
        </div>
      </GlassCard>
    </section>
  );
}
