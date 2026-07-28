import { GlassCard } from "@/components/ui/GlassCard";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import type { FeatureItem } from "@/types";

interface FeatureCardProps {
  feature: FeatureItem;
  delay?: number;
}

export function FeatureCard({ feature, delay = 0 }: FeatureCardProps) {
  return (
    <Reveal delay={delay}>
      <GlassCard hoverable className="flex h-full flex-col p-7">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500/15">
          <Icon name={feature.icon} className="text-emerald-300" size={26} />
        </div>

        <h3 className="mt-5 font-display text-lg font-semibold text-white">{feature.name}</h3>
        <p className="mt-2 text-[15px] leading-relaxed text-white/55 line-clamp-2">
          {feature.description}
        </p>

        <button className="mt-5 inline-flex w-fit items-center gap-1.5 text-sm font-medium text-emerald-300 hover:text-emerald-200 transition-colors min-h-[48px] sm:min-h-0">
          Preview
          <Icon name="arrow_forward" size={16} />
        </button>
      </GlassCard>
    </Reveal>
  );
}
