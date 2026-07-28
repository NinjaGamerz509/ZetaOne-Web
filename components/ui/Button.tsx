import type { ButtonHTMLAttributes } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "tertiary";
type ButtonSize = "md" | "lg";

interface BaseProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: string;
  iconPosition?: "left" | "right";
  className?: string;
  children?: React.ReactNode;
}

interface ButtonAsButton extends BaseProps, ButtonHTMLAttributes<HTMLButtonElement> {
  href?: undefined;
}

interface ButtonAsLink extends BaseProps {
  href: string;
  target?: string;
  rel?: string;
}

type ButtonProps = ButtonAsButton | ButtonAsLink;

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-emerald-500 text-white hover:bg-emerald-600 shadow-glass-sm hover:shadow-glow-emerald border border-emerald-400/40",
  secondary:
    "bg-white/[0.08] text-white border border-white/[0.14] backdrop-blur-glass hover:bg-white/[0.14] hover:border-emerald-400/30",
  tertiary:
    "bg-transparent text-emerald-600 dark:text-emerald-300 hover:bg-emerald-500/10 border border-transparent",
};

const sizeStyles: Record<ButtonSize, string> = {
  md: "h-12 px-6 text-[15px]",
  lg: "h-14 px-8 text-base",
};

function ButtonContent({
  icon,
  iconPosition = "left",
  children,
}: Pick<BaseProps, "icon" | "iconPosition" | "children">) {
  return (
    <>
      {icon && iconPosition === "left" && (
        <span className="material-symbols-rounded text-[20px]" aria-hidden="true">
          {icon}
        </span>
      )}
      <span>{children}</span>
      {icon && iconPosition === "right" && (
        <span className="material-symbols-rounded text-[20px]" aria-hidden="true">
          {icon}
        </span>
      )}
    </>
  );
}

/**
 * Shared button used across Hero, CTA banners, and cards.
 * Renders as an anchor when `href` is provided, otherwise a native button.
 */
export function Button(props: ButtonProps) {
  const { variant = "primary", size = "md", icon, iconPosition, className, children } = props;

  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-button font-medium font-sans",
    "transition-all duration-400 ease-out hover:scale-[1.02] active:scale-[0.98]",
    "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400",
    variantStyles[variant],
    sizeStyles[size],
    className
  );

  if ("href" in props && props.href) {
    const { href, target, rel } = props;
    return (
      <Link href={href} target={target} rel={rel} className={classes}>
        <ButtonContent icon={icon} iconPosition={iconPosition}>
          {children}
        </ButtonContent>
      </Link>
    );
  }

  const buttonProps = props as ButtonAsButton;
  return (
    <button className={classes} {...buttonProps}>
      <ButtonContent icon={icon} iconPosition={iconPosition}>
        {children}
      </ButtonContent>
    </button>
  );
}
