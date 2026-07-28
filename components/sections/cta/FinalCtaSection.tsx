import Image from "next/image";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";

export function FinalCtaSection() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-content px-5 sm:px-8">
        <Reveal>
          <GlassCard className="relative overflow-hidden px-8 py-16 text-center sm:px-12">
            <Image
              src="/assets/backgrounds/bg-glass-mint-light.jpg"
              alt=""
              fill
              aria-hidden="true"
              className="object-cover opacity-[0.08]"
            />

            <div className="relative">
              <h2 className="font-display text-3xl font-semibold text-white sm:text-4xl">
                Ready to Start?
              </h2>
              <p className="mx-auto mt-4 max-w-prose text-lg text-white/60">
                Download Zeta One today and organize your studies with a clean, modern experience.
              </p>

              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button href="/download" size="lg" icon="download" className="w-full sm:w-auto">
                  Download APK
                </Button>
                <Button
                  href="/docs"
                  variant="secondary"
                  size="lg"
                  icon="description"
                  className="w-full sm:w-auto"
                >
                  Documentation
                </Button>
                <Button
                  href="/releases"
                  variant="tertiary"
                  size="lg"
                  icon="history"
                  className="w-full sm:w-auto"
                >
                  Release Notes
                </Button>
              </div>

              <p className="mt-8 flex items-center justify-center gap-2 text-sm text-white/40">
                <Icon name="verified" size={16} className="text-emerald-400" />
                Always download Zeta One from the official website to receive the latest updates.
              </p>
            </div>
          </GlassCard>
        </Reveal>
      </div>
    </section>
  );
}
