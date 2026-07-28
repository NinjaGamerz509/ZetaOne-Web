import { cn } from "@/lib/utils";

interface IconProps {
  name: string;
  className?: string;
  size?: number;
}

/**
 * Wrapper around Material Symbols Rounded.
 * Keeps icon usage consistent (rounded style only, no mixing with outlined/filled).
 */
export function Icon({ name, className, size = 24 }: IconProps) {
  return (
    <span
      className={cn("material-symbols-rounded select-none", className)}
      style={{ fontSize: size }}
      aria-hidden="true"
    >
      {name}
    </span>
  );
}
