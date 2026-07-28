import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { ARTICLES } from "@/content/articles";
import { ArticleCard } from "@/components/sections/articles/ArticleCard";
import { FeaturedArticleCard } from "@/components/sections/articles/FeaturedArticleCard";
import { ArticleCategoryBrowser } from "@/components/sections/articles/ArticleCategoryBrowser";
import { PopularArticlesSection } from "@/components/sections/articles/PopularArticlesSection";
import { EmptyState } from "@/components/ui/EmptyState";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = buildMetadata({
  title: "Articles",
  description: "News, tutorials and feature announcements from the Zeta One team.",
  path: "/articles",
});

export default function ArticlesPage() {
  const featured = ARTICLES.find((a) => a.featured) ?? ARTICLES[0];
  const latest = ARTICLES.filter((a) => a.slug !== featured?.slug).slice(0, 6);
  const popular = ARTICLES.filter((a) => a.popular);

  return (
    <section className="min-h-screen px-5 pt-32 pb-24 sm:px-8 sm:pt-40">
      <div className="mx-auto max-w-content">
        <Reveal>
          <div className="mx-auto max-w-hero text-center">
            <h1 className="font-display text-4xl font-bold text-white sm:text-5xl">Articles</h1>
            <p className="mt-4 text-lg text-white/55">
              News, tutorials and feature announcements.
            </p>
          </div>
        </Reveal>

        {ARTICLES.length === 0 ? (
          <div className="mt-14">
            <EmptyState
              icon="article"
              title="No Articles Yet"
              description="Check back soon for news, tutorials and feature announcements."
              actionLabel="Visit Documentation"
              actionHref="/docs"
            />
          </div>
        ) : (
          <>
            {/* Featured Article */}
            {featured && (
              <div className="mt-14">
                <FeaturedArticleCard article={featured} />
              </div>
            )}

            {/* Latest Articles */}
            {latest.length > 0 && (
              <div className="mt-20">
                <Reveal>
                  <h2 className="font-display text-2xl font-semibold text-white">Latest Articles</h2>
                </Reveal>
                <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {latest.map((article, index) => (
                    <ArticleCard key={article.slug} article={article} delay={index * 0.06} />
                  ))}
                </div>
              </div>
            )}

            {/* Categories */}
            <div className="mt-20">
              <ArticleCategoryBrowser articles={ARTICLES} />
            </div>

            {/* Popular Articles */}
            {popular.length > 0 && (
              <div className="mt-20">
                <PopularArticlesSection articles={popular} />
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
}
