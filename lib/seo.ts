import type { Metadata } from "next";
import { siteConfig } from "@/config/site.config";

interface PageSeoOptions {
  title: string;
  description: string;
  path?: string;
  image?: string;
}

/**
 * Build consistent per-page metadata.
 * Title format: "Page Name • Zeta One"
 */
export function buildMetadata({ title, description, path = "/", image }: PageSeoOptions): Metadata {
  const url = `${siteConfig.url}${path}`;
  const ogImage = image ?? siteConfig.seo.ogImage;

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `${title} • ${siteConfig.name}`,
      description,
      url,
      siteName: siteConfig.name,
      images: [{ url: ogImage }],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} • ${siteConfig.name}`,
      description,
      images: [ogImage],
    },
  };
}
