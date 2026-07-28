import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site.config";

interface LogoProps {
  className?: string;
}

/**
 * Website logo. Fixed height, auto width — never stretched or cropped.
 */
export function Logo({ className }: LogoProps) {
  return (
    <Link
      href="/"
      aria-label={`${siteConfig.name} home`}
      className={`flex items-center gap-2.5 ${className ?? ""}`}
    >
      <Image
        src="/assets/logo/zeta-one-logo.png"
        alt={`${siteConfig.name} logo`}
        width={40}
        height={32}
        priority
        className="h-10 w-auto"
      />
      <span className="font-display text-lg font-semibold tracking-tight text-white">
        {siteConfig.name}
      </span>
    </Link>
  );
}
