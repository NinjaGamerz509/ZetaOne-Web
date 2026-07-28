import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface GlassCardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: "dark" | "light";
  hoverable?: boolean;
}

/**
 * Base glass-morphism surface used across cards, banners and modals.
 * Single source for the "glass" visual language: blur, soft border, subtle shadow.
 */
export function GlassCard({
  variant = "dark",
  hoverable = false,
  className,
  children,
  ...props
}: GlassCardProps) {
  return (
    <div
      className={cn(
        "rounded-card border backdrop-blur-glass shadow-glass-sm transition-all duration-400",
        variant === "dark"
          ? "bg-white/[0.06] border-white/[0.08]"
          : "bg-white/60 border-white/40",
        hoverable &&
          "hover:scale-[1.02] hover:shadow-glass hover:border-emerald-400/30",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
