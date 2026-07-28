"use client";

import { useState } from "react";
import Image, { type ImageProps } from "next/image";
import { Icon } from "@/components/ui/Icon";
import { cn } from "@/lib/utils";

type SafeImageProps = ImageProps & { fallbackClassName?: string };

/**
 * Drop-in replacement for next/image that shows a calm glass placeholder
 * instead of a broken-image icon if the source fails to load (e.g. a
 * missing screenshot or unpublished cover image).
 */
export function SafeImage({ fallbackClassName, alt, ...props }: SafeImageProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        className={cn(
          "flex items-center justify-center bg-white/[0.05] text-white/25",
          fallbackClassName
        )}
        role="img"
        aria-label={typeof alt === "string" ? alt : "Image unavailable"}
      >
        <Icon name="image" size={28} />
      </div>
    );
  }

  return <Image alt={alt} {...props} onError={() => setFailed(true)} />;
}
