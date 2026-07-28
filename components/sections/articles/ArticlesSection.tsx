import { ARTICLES } from "@/content/articles";
import { ArticleCard } from "@/components/sections/articles/ArticleCard";
import { EmptyState } from "@/components/ui/EmptyState";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";

export function ArticlesSection() {
  const latest = ARTICLES.slice(0, 3);

  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-content px-5 sm:px-8">
        <Reveal>
          <div className="mx-auto max-w-hero text-center">
            <h2 className="font-display text-3xl font-semibold text-white sm:text-4xl">
              Latest Articles
            </h2>
            <p className="mt-4 text-lg text-white/55">
              News, tutorials and feature announcements.
            </p>
          </div>
        </Reveal>

        {latest.length > 0 ? (
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {latest.map((article, index) => (
              <ArticleCard key={article.slug} article={article} delay={index * 0.08} />
            ))}
          </div>
        ) : (
          <div className="mt-14">
            <EmptyState
              icon="article"
              title="No Articles Yet"
              description="Check back soon for news, tutorials and feature announcements."
              actionLabel="Visit Documentation"
              actionHref="/docs"
            />
          </div>
        )}

        <Reveal delay={0.2}>
          <div className="mt-12 text-center">
            <Button href="/articles" variant="secondary" icon="arrow_forward" iconPosition="right">
              View All Articles
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
