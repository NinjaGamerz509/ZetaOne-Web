import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site.config";
import { ARTICLES } from "@/content/articles";
import { DOC_PAGES } from "@/content/documentation";
import { RELEASE_HISTORY } from "@/content/releases";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/download",
    "/docs",
    "/docs/install",
    "/articles",
    "/releases",
    "/about",
    "/credits",
    "/contribute",
    "/privacy",
    "/terms",
    "/faq",
    "/contact",
  ].map((path) => ({
    url: `${siteConfig.url}${path}`,
    lastModified: new Date(),
  }));

  const docRoutes = DOC_PAGES.map((doc) => ({
    url: `${siteConfig.url}/docs/${doc.slug}`,
    lastModified: doc.lastUpdated,
  }));

  const articleRoutes = ARTICLES.map((article) => ({
    url: `${siteConfig.url}/articles/${article.slug}`,
    lastModified: article.publishedAt,
  }));

  const releaseRoutes = RELEASE_HISTORY.map((release) => ({
    url: `${siteConfig.url}/releases/${release.version}`,
    lastModified: release.releaseDate,
  }));

  return [...staticRoutes, ...docRoutes, ...articleRoutes, ...releaseRoutes];
}
