import Link from "next/link";
import { GlassCard } from "@/components/ui/GlassCard";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { SafeImage } from "@/components/ui/SafeImage";
import { formatDate } from "@/lib/utils";
import { ArticleCategoryBadge } from "@/components/sections/articles/ArticleCategoryBadge";
import type { Article } from "@/types";

interface ArticleCardProps {
  article: Article;
  delay?: number;
}

export function ArticleCard({ article, delay = 0 }: ArticleCardProps) {
  return (
    <Reveal delay={delay}>
      <Link href={`/articles/${article.slug}`} className="block h-full">
        <GlassCard hoverable className="flex h-full flex-col overflow-hidden p-0">
          <div className="relative h-44 w-full overflow-hidden">
            <SafeImage
              src={article.coverImage}
              alt=""
              fill
              className="object-cover"
              fallbackClassName="h-full w-full"
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            />
            <div className="absolute left-4 top-4">
              <ArticleCategoryBadge category={article.category} />
            </div>
          </div>

          <div className="flex flex-1 flex-col p-6">
            <h3 className="font-display text-lg font-semibold text-white">{article.title}</h3>
            <p className="mt-2 flex-1 text-[15px] leading-relaxed text-white/55 line-clamp-2">
              {article.description}
            </p>

            <div className="mt-5 flex items-center justify-between border-t border-white/[0.08] pt-4 text-sm text-white/40">
              <span>{article.author}</span>
              <span>{formatDate(article.publishedAt)}</span>
            </div>

            <div className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-emerald-300">
              Read Article
              <Icon name="arrow_forward" size={16} />
            </div>
          </div>
        </GlassCard>
      </Link>
    </Reveal>
  );
}
