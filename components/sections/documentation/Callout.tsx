import { Icon } from "@/components/ui/Icon";
import { cn } from "@/lib/utils";
import type { DocCallout } from "@/types";

export function Callout({ type, text }: DocCallout) {
  const isTip = type === "tip";

  return (
    <div
      className={cn(
        "flex items-start gap-3 rounded-2xl border px-5 py-4 my-6",
        isTip
          ? "border-emerald-500/30 bg-emerald-500/[0.08]"
          : "border-amber-500/30 bg-amber-500/[0.08]"
      )}
      role="note"
    >
      <Icon
        name={isTip ? "lightbulb" : "warning"}
        size={20}
        className={cn("mt-0.5 shrink-0", isTip ? "text-emerald-300" : "text-amber-300")}
      />
      <div>
        <p className={cn("text-xs font-semibold uppercase tracking-wide", isTip ? "text-emerald-300" : "text-amber-300")}>
          {isTip ? "Tip" : "Warning"}
        </p>
        <p className="mt-1 text-[15px] leading-relaxed text-white/70">{text}</p>
      </div>
    </div>
  );
}
