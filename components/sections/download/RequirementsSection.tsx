import { APP_REQUIREMENTS } from "@/config/app";
import { GlassCard } from "@/components/ui/GlassCard";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";

export function RequirementsSection() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-content px-5 sm:px-8">
        <Reveal>
          <h2 className="text-center font-display text-3xl font-semibold text-white sm:text-4xl">
            Requirements
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <GlassCard className="mx-auto mt-10 max-w-3xl p-8 sm:p-10">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {APP_REQUIREMENTS.map((req) => (
                <div key={req.label} className="flex items-start gap-3">
                  <Icon name={req.icon} size={20} className="mt-0.5 shrink-0 text-emerald-300" />
                  <div>
                    <p className="text-xs uppercase tracking-wide text-white/35">{req.label}</p>
                    <p className="mt-1 text-[15px] text-white/85">{req.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </GlassCard>
        </Reveal>
      </div>
    </section>
  );
}
