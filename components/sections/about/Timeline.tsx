import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";
import { TIMELINE_PHASES } from "@/content/timeline";

const STATUS_STYLES = {
  completed: { dot: "bg-emerald-400", text: "text-emerald-300", icon: "check" },
  current: { dot: "bg-emerald-400 ring-4 ring-emerald-400/20", text: "text-emerald-300", icon: "bolt" },
  upcoming: { dot: "bg-white/20", text: "text-white/40", icon: "hourglass_top" },
} as const;

export function Timeline() {
  return (
    <div className="relative mx-auto max-w-xl">
      <div className="absolute left-[15px] top-2 bottom-2 w-px bg-white/[0.1]" aria-hidden="true" />

      <ul className="space-y-8">
        {TIMELINE_PHASES.map((phase, index) => {
          const style = STATUS_STYLES[phase.status];
          return (
            <Reveal key={phase.id} delay={index * 0.08}>
              <li className="relative flex gap-5 pl-0">
                <div
                  className={cn(
                    "relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full",
                    style.dot
                  )}
                >
                  <Icon name={style.icon} size={16} className="text-[#04120D]" />
                </div>
                <div className="pt-0.5">
                  <p className={cn("font-display text-lg font-semibold", style.text)}>{phase.label}</p>
                  <p className="mt-1 text-[15px] leading-relaxed text-white/55">{phase.description}</p>
                </div>
              </li>
            </Reveal>
          );
        })}
      </ul>
    </div>
  );
}
