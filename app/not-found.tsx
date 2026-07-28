import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";

export default function NotFound() {
  return (
    <section className="flex min-h-screen items-center justify-center px-5 pt-[72px] sm:px-8">
      <GlassCard className="max-w-lg px-8 py-14 text-center sm:px-12">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-500/15">
          <Icon name="search_off" size={32} className="text-emerald-300" />
        </div>
        <h1 className="mt-6 font-display text-3xl font-semibold text-white">404</h1>
        <p className="mt-3 text-[15px] text-white/55">This page doesn&apos;t exist.</p>

        <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Button href="/" icon="home" className="w-full sm:w-auto">
            Go Home
          </Button>
          <Button href="/docs" variant="secondary" icon="search" className="w-full sm:w-auto">
            Search
          </Button>
          <Button href="/download" variant="tertiary" icon="download" className="w-full sm:w-auto">
            Download
          </Button>
        </div>
      </GlassCard>
    </section>
  );
}
