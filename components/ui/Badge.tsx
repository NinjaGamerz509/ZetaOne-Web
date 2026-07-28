import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

export function Badge({ children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium tracking-wide",
        "bg-white/[0.08] border-white/[0.14] text-emerald-300",
        className
      )}
    >
      {children}
    </span>
  );
}
