"use client";

import { cn } from "@/lib/utils";
import { articlesConfig } from "@/config/articles.config";
import type { ArticleCategory } from "@/types";

interface CategoryFilterProps {
  active: ArticleCategory | "All";
  onChange: (category: ArticleCategory | "All") => void;
}

export function CategoryFilter({ active, onChange }: CategoryFilterProps) {
  const options: (ArticleCategory | "All")[] = ["All", ...articlesConfig.categories];

  return (
    <div className="flex flex-wrap justify-center gap-2" role="group" aria-label="Filter articles by category">
      {options.map((option) => (
        <button
          key={option}
          onClick={() => onChange(option)}
          aria-pressed={active === option}
          className={cn(
            "rounded-full border px-4 py-2 text-sm font-medium transition-colors min-h-[40px]",
            active === option
              ? "border-emerald-400/40 bg-emerald-500/15 text-emerald-300"
              : "border-white/[0.1] bg-white/[0.04] text-white/60 hover:text-white hover:border-white/[0.2]"
          )}
        >
          {option}
        </button>
      ))}
    </div>
  );
}
