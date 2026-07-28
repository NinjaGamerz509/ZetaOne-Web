import Link from "next/link";
import { GlassCard } from "@/components/ui/GlassCard";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { ArticleCategoryBadge } from "@/components/sections/articles/ArticleCategoryBadge";
import type { Article } from "@/types";

export function PopularArticlesSection({ articles }: { articles: Article[] }) {
  if (articles.length === 0) return null;

  return (
    <div>
      <Reveal>
        <h2 className="font-display text-2xl font-semibold text-white">Popular Articles</h2>
      </Reveal>

      <div className="mt-6 space-y-3">
        {articles.map((article, index) => (
          <Reveal key={article.slug} delay={index * 0.05}>
            <Link href={`/articles/${article.slug}`}>
              <GlassCard hoverable className="flex items-center gap-4 p-5">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-emerald-500/15 text-sm font-semibold text-emerald-300">
                  {index + 1}
                </span>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-[15px] font-medium text-white">{article.title}</p>
                  <p className="mt-0.5 truncate text-sm text-white/45">{article.description}</p>
                </div>
                <ArticleCategoryBadge category={article.category} />
                <Icon name="arrow_forward" size={18} className="hidden shrink-0 text-white/30 sm:block" />
              </GlassCard>
            </Link>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
