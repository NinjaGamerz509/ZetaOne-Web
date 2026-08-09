import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/seo";
import { ARTICLES } from "@/content/articles";
import { GlassCard } from "@/components/ui/GlassCard";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { ArticleCategoryBadge } from "@/components/sections/articles/ArticleCategoryBadge";
import { ShareButtons } from "@/components/sections/articles/ShareButtons";
import { Callout } from "@/components/sections/documentation/Callout";
import { TableOfContents } from "@/components/sections/documentation/TableOfContents";
import { formatDate } from "@/lib/utils";
import { JsonLd } from "@/components/layout/JsonLd";
import { buildArticleSchema, buildBreadcrumbSchema } from "@/lib/structuredData";
import { VideoPlayer } from "@/components/sections/articles/VideoPlayer";
import { YouTubeEmbed } from "@/components/sections/articles/YouTubeEmbed";
import { InstagramEmbed } from "@/components/sections/articles/InstagramEmbed";

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return ARTICLES.map((article) => ({ slug: article.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const article = ARTICLES.find((a) => a.slug === params.slug);
  if (!article) {
    return buildMetadata({
      title: "Article",
      description: "Zeta One article.",
      path: `/articles/${params.slug}`,
    });
  }
  return buildMetadata({
    title: article.title,
    description: article.description,
    path: `/articles/${article.slug}`,
    image: article.coverImage,
  });
}

export default function ArticlePage({ params }: Props) {
  const article = ARTICLES.find((a) => a.slug === params.slug);
  const index = ARTICLES.findIndex((a) => a.slug === params.slug);

  if (!article) {
    notFound();
  }

  const previous = index > 0 ? ARTICLES[index - 1] : null;
  const next = index < ARTICLES.length - 1 ? ARTICLES[index + 1] : null;

  const relatedArticles = article.relatedSlugs
    .map((slug) => ARTICLES.find((a) => a.slug === slug))
    .filter((a): a is NonNullable<typeof a> => Boolean(a));

  const tocItems = article.sections.map((s) => ({ id: s.id, label: s.heading }));

  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Articles", path: "/articles" },
    { name: article.title, path: `/articles/${article.slug}` },
  ]);

  return (
    <article className="min-h-screen px-5 pt-32 pb-24 sm:px-8 sm:pt-40">
      <JsonLd data={buildArticleSchema(article)} />
      <JsonLd data={breadcrumbSchema} />
      <div className="mx-auto grid max-w-content grid-cols-1 gap-10 lg:grid-cols-[1fr_220px]">
        <div className="min-w-0 mx-auto w-full max-w-3xl lg:mx-0">
          <Reveal>
            <Link
              href="/articles"
              className="inline-flex items-center gap-1.5 text-sm text-white/45 hover:text-emerald-300 transition-colors"
            >
              <Icon name="arrow_back" size={16} />
              Articles
            </Link>

            <div className="mt-4">
              <ArticleCategoryBadge category={article.category} />
            </div>
            <h1 className="mt-5 font-display text-3xl font-bold text-white sm:text-4xl">
              {article.title}
            </h1>
            <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-white/45">
              <span className="flex items-center gap-1.5">
                <Icon name="person" size={16} />
                {article.author}
              </span>
              <span aria-hidden="true">•</span>
              <span>{formatDate(article.publishedAt)}</span>
              <span aria-hidden="true">•</span>
              <span className="flex items-center gap-1.5">
                <Icon name="schedule" size={16} />
                {article.readingTime}
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="relative mt-8 h-64 w-full overflow-hidden rounded-card sm:h-80">
              <Image src={article.coverImage} alt="" fill className="object-cover" priority />
            </div>
          </Reveal>

          {/* Table of contents - mobile inline version */}
          {tocItems.length > 0 && (
            <Reveal delay={0.12}>
              <GlassCard className="mt-8 p-5 lg:hidden">
                <p className="text-xs font-semibold uppercase tracking-wide text-white/40">
                  On this page
                </p>
                <ul className="mt-3 space-y-2">
                  {tocItems.map((item) => (
                    <li key={item.id}>
                      <a href={`#${item.id}`} className="text-[15px] text-emerald-300 hover:text-emerald-200">
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </GlassCard>
            </Reveal>
          )}

          <div className="mt-10 space-y-10">
            {article.sections.map((section, sIndex) => (
              <Reveal key={section.id} delay={sIndex * 0.05}>
                <div id={section.id} className="scroll-mt-28">
                  <h2 className="font-display text-xl font-semibold text-white">
                    {section.heading}
                  </h2>
                  <p className="mt-3 text-[15px] leading-relaxed text-white/65">{section.body}</p>
                  {section.image && (
                    <div className="relative mt-5 aspect-video w-full overflow-hidden rounded-2xl border border-white/[0.1]">
                      <Image src={section.image} alt={section.heading} fill className="object-cover" />
                    </div>
                  )}
                  {section.videoUrl && (
                    <div className="mt-5">
                      {section.videoEmbedType === "youtube" ? (
                        <YouTubeEmbed videoId={section.videoUrl} title={section.heading} />
                      ) : section.videoEmbedType === "instagram" ? (
                        <InstagramEmbed postUrl={section.videoUrl} />
                      ) : (
                        <VideoPlayer src={section.videoUrl} />
                      )}
                    </div>
                  )}
                  {section.callout && <Callout {...section.callout} />}
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.15}>
            <div className="mt-12 border-t border-white/[0.08] pt-8">
              <ShareButtons slug={article.slug} title={article.title} />
            </div>
          </Reveal>

          {relatedArticles.length > 0 && (
            <Reveal delay={0.18}>
              <div className="mt-12">
                <h3 className="text-sm font-semibold uppercase tracking-wide text-white/40">
                  Related Articles
                </h3>
                <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {relatedArticles.map((related) => (
                    <Link key={related.slug} href={`/articles/${related.slug}`}>
                      <GlassCard hoverable className="p-4">
                        <ArticleCategoryBadge category={related.category} />
                        <p className="mt-2 text-[15px] font-medium text-white">{related.title}</p>
                        <p className="mt-1 text-sm text-white/50 line-clamp-2">{related.description}</p>
                      </GlassCard>
                    </Link>
                  ))}
                </div>
              </div>
            </Reveal>
          )}

          {(previous || next) && (
            <div className="mt-12 flex flex-col gap-4 border-t border-white/[0.08] pt-8 sm:flex-row sm:justify-between">
              {previous ? (
                <Link
                  href={`/articles/${previous.slug}`}
                  className="flex items-center gap-2 text-[15px] text-white/60 hover:text-emerald-300 transition-colors"
                >
                  <Icon name="arrow_back" size={18} />
                  {previous.title}
                </Link>
              ) : (
                <span />
              )}
              {next && (
                <Link
                  href={`/articles/${next.slug}`}
                  className="flex items-center gap-2 text-[15px] text-white/60 hover:text-emerald-300 transition-colors sm:text-right"
                >
                  {next.title}
                  <Icon name="arrow_forward" size={18} />
                </Link>
              )}
            </div>
          )}
        </div>

        <TableOfContents items={tocItems} />
      </div>
    </article>
  );
}
