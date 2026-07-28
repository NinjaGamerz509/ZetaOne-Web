import { Icon } from "@/components/ui/Icon";
import { Button } from "@/components/ui/Button";

interface EmptyStateProps {
  icon: string;
  title: string;
  description: string;
  actionLabel?: string;
  actionHref?: string;
}

/**
 * Always shows a useful action instead of leaving blank white space.
 */
export function EmptyState({ icon, title, description, actionLabel, actionHref }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center rounded-card border border-white/[0.08] bg-white/[0.04] px-8 py-16 text-center backdrop-blur-glass">
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-500/15">
        <Icon name={icon} size={28} className="text-emerald-300" />
      </div>
      <h3 className="mt-5 font-display text-xl font-semibold text-white">{title}</h3>
      <p className="mt-2 max-w-sm text-[15px] text-white/50">{description}</p>
      {actionLabel && actionHref && (
        <Button href={actionHref} variant="secondary" className="mt-6">
          {actionLabel}
        </Button>
      )}
    </div>
  );
}
