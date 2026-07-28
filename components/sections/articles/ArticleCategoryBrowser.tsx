"use client";

import { useState, useMemo } from "react";
import { ArticleCard } from "@/components/sections/articles/ArticleCard";
import { CategoryFilter } from "@/components/sections/articles/CategoryFilter";
import { Reveal } from "@/components/ui/Reveal";
import type { Article, ArticleCategory } from "@/types";

export function ArticleCategoryBrowser({ articles }: { articles: Article[] }) {
  const [active, setActive] = useState<ArticleCategory | "All">("All");

  const filtered = useMemo(
    () => (active === "All" ? articles : articles.filter((a) => a.category === active)),
    [active, articles]
  );

  return (
    <div>
      <Reveal>
        <h2 className="text-center font-display text-2xl font-semibold text-white">Categories</h2>
      </Reveal>

      <div className="mt-6">
        <CategoryFilter active={active} onChange={setActive} />
      </div>

      {filtered.length > 0 ? (
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((article, index) => (
            <ArticleCard key={article.slug} article={article} delay={index * 0.05} />
          ))}
        </div>
      ) : (
        <p className="mt-10 text-center text-[15px] text-white/45">
          No articles in this category yet.
        </p>
      )}
    </div>
  );
}
