import type { ArticleCategory } from "@/types";

/**
 * Behavioral settings for the articles system.
 * Actual article entries live in content/articles.ts.
 */
export const articlesConfig = {
  categories: [
    "Announcement",
    "Update",
    "Tutorial",
    "Guide",
    "Tips",
    "Release",
    "Community",
    "Development",
  ] as ArticleCategory[],
  latestCount: 6,
  relatedCount: 2,
} as const;
