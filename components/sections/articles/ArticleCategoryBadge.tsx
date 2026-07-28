import { cn } from "@/lib/utils";
import type { ArticleCategory } from "@/types";

const CATEGORY_COLORS: Record<ArticleCategory, string> = {
  Announcement: "bg-emerald-500/15 text-emerald-300 border-emerald-500/30",
  Update: "bg-amber-500/15 text-amber-300 border-amber-500/30",
  Tutorial: "bg-sky-500/15 text-sky-300 border-sky-500/30",
  Guide: "bg-cyan-soft/15 text-cyan-soft border-cyan-soft/30",
  Tips: "bg-fuchsia-500/15 text-fuchsia-300 border-fuchsia-500/30",
  Release: "bg-violet-500/15 text-violet-300 border-violet-500/30",
  Community: "bg-pink-500/15 text-pink-300 border-pink-500/30",
  Development: "bg-orange-500/15 text-orange-300 border-orange-500/30",
};

export function ArticleCategoryBadge({ category }: { category: ArticleCategory }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold tracking-wide",
        CATEGORY_COLORS[category]
      )}
    >
      {category}
    </span>
  );
}
