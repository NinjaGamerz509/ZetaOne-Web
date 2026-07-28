import Link from "next/link";
import { GlassCard } from "@/components/ui/GlassCard";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { SafeImage } from "@/components/ui/SafeImage";
import { ArticleCategoryBadge } from "@/components/sections/articles/ArticleCategoryBadge";
import { formatDate } from "@/lib/utils";
import type { Article } from "@/types";

export function FeaturedArticleCard({ article }: { article: Article }) {
  return (
    <Reveal>
      <Link href={`/articles/${article.slug}`} className="block">
        <GlassCard hoverable className="grid grid-cols-1 overflow-hidden p-0 lg:grid-cols-2">
          <div className="relative h-64 w-full lg:h-full lg:min-h-[320px]">
            <SafeImage
              src={article.coverImage}
              alt=""
              fill
              priority
              className="object-cover"
              fallbackClassName="h-full w-full"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </div>

          <div className="flex flex-col justify-center p-8 sm:p-10">
            <div className="flex items-center gap-3">
              <ArticleCategoryBadge category={article.category} />
              <span className="text-xs font-medium uppercase tracking-wide text-emerald-400/70">
                Featured
              </span>
            </div>

            <h2 className="mt-5 font-display text-2xl font-bold text-white sm:text-3xl">
              {article.title}
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed text-white/60">{article.description}</p>

            <div className="mt-6 flex items-center gap-3 text-sm text-white/40">
              <span>{formatDate(article.publishedAt)}</span>
              <span aria-hidden="true">•</span>
              <span>{article.readingTime}</span>
            </div>

            <div className="mt-6 inline-flex w-fit items-center gap-2 rounded-button bg-emerald-500 px-5 py-3 text-[15px] font-medium text-white transition-all hover:bg-emerald-600 hover:scale-[1.02]">
              Read Article
              <Icon name="arrow_forward" size={18} />
            </div>
          </div>
        </GlassCard>
      </Link>
    </Reveal>
  );
}
