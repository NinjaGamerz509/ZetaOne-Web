import { GlassCard } from "@/components/ui/GlassCard";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";

const STEPS = [
  { icon: "download", title: "Download APK", description: "Get the APK from our official download page." },
  { icon: "folder", title: "Open Downloads", description: "Locate the downloaded file on your device." },
  { icon: "touch_app", title: "Tap APK", description: "Tap the file to begin the installation process." },
  { icon: "install_mobile", title: "Install", description: "Confirm and allow the app to install." },
  { icon: "rocket_launch", title: "Open Zeta One", description: "Launch the app and start studying." },
];

export function InstallationGuideSection() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-content px-5 sm:px-8">
        <Reveal>
          <div className="mx-auto max-w-hero text-center">
            <h2 className="font-display text-3xl font-semibold text-white sm:text-4xl">
              New to Android APKs?
            </h2>
            <p className="mt-4 text-lg text-white/55">
              Installing Zeta One takes less than a minute.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {STEPS.map((step, index) => (
            <Reveal key={step.title} delay={index * 0.08}>
              <GlassCard className="flex h-full flex-col items-center p-6 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500/15">
                  <Icon name={step.icon} className="text-emerald-300" size={24} />
                </div>
                <h3 className="mt-4 text-[15px] font-semibold text-white">{step.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-white/50">{step.description}</p>
              </GlassCard>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15}>
          <div className="mt-12 text-center">
            <Button href="/docs/install" variant="secondary" icon="menu_book">
              View Full Installation Guide
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
