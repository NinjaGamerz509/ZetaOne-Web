import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/seo";
import { DOC_PAGES, DOC_CATEGORIES } from "@/content/documentation";
import { GlassCard } from "@/components/ui/GlassCard";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { DocsSidebar } from "@/components/sections/documentation/DocsSidebar";
import { TableOfContents } from "@/components/sections/documentation/TableOfContents";
import { Callout } from "@/components/sections/documentation/Callout";
import { CodeBlock } from "@/components/sections/documentation/CodeBlock";
import { TroubleshootingList } from "@/components/sections/documentation/TroubleshootingList";
import { formatDate } from "@/lib/utils";
import Image from "next/image";

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return DOC_PAGES.map((doc) => ({ slug: doc.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const doc = DOC_PAGES.find((d) => d.slug === params.slug);
  if (!doc) {
    return buildMetadata({
      title: "Documentation",
      description: "Zeta One documentation.",
      path: `/docs/${params.slug}`,
    });
  }
  return buildMetadata({
    title: doc.title,
    description: doc.description,
    path: `/docs/${doc.slug}`,
  });
}

export default function DocArticlePage({ params }: Props) {
  const doc = DOC_PAGES.find((d) => d.slug === params.slug);

  if (!doc) {
    notFound();
  }

  const category = DOC_CATEGORIES.find((c) => c.id === doc.categoryId);
  const categoryIndex = DOC_CATEGORIES.findIndex((c) => c.id === doc.categoryId);
  const prevCategory = categoryIndex > 0 ? DOC_CATEGORIES[categoryIndex - 1] : null;
  const nextCategory =
    categoryIndex < DOC_CATEGORIES.length - 1 ? DOC_CATEGORIES[categoryIndex + 1] : null;
  const prevDoc = prevCategory ? DOC_PAGES.find((d) => d.categoryId === prevCategory.id) : null;
  const nextDoc = nextCategory ? DOC_PAGES.find((d) => d.categoryId === nextCategory.id) : null;

  const relatedDocs = doc.relatedSlugs
    .map((slug) => DOC_PAGES.find((d) => d.slug === slug))
    .filter((d): d is NonNullable<typeof d> => Boolean(d));

  const tocItems = doc.sections.map((s) => ({ id: s.id, label: s.heading }));

  return (
    <section className="min-h-screen px-5 pt-32 pb-24 sm:px-8 sm:pt-40">
      <div className="mx-auto grid max-w-content grid-cols-1 gap-10 md:grid-cols-[220px_1fr] lg:grid-cols-[220px_1fr_220px]">
        <DocsSidebar />

        <article className="min-w-0">
          <Reveal>
            {category && (
              <Link
                href="/docs"
                className="inline-flex items-center gap-1.5 text-sm text-white/45 hover:text-emerald-300 transition-colors"
              >
                <Icon name="arrow_back" size={16} />
                Documentation
              </Link>
            )}
            <h1 className="mt-4 font-display text-3xl font-bold text-white sm:text-4xl">
              {doc.title}
            </h1>
            <p className="mt-3 text-lg text-white/55">{doc.description}</p>
            <div className="mt-4 flex items-center gap-3 text-sm text-white/40">
              <span className="flex items-center gap-1.5">
                <Icon name="schedule" size={16} />
                {doc.readingTime}
              </span>
              <span aria-hidden="true">•</span>
              <span>Last updated {formatDate(doc.lastUpdated)}</span>
            </div>
          </Reveal>

          <div className="mt-10 space-y-10">
            {doc.sections.map((section, index) => (
              <Reveal key={section.id} delay={index * 0.05}>
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
                  {section.callout && <Callout {...section.callout} />}
                  {section.code && <CodeBlock {...section.code} />}
                </div>
              </Reveal>
            ))}
          </div>

          {doc.slug === "troubleshooting" && (
            <Reveal delay={0.1}>
              <div className="mt-10">
                <TroubleshootingList />
              </div>
            </Reveal>
          )}

          {doc.slug === "installation" && (
            <Reveal delay={0.1}>
              <Link href="/docs/install">
                <GlassCard hoverable className="mt-10 flex items-center justify-between gap-4 p-6">
                  <div className="flex items-center gap-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-500/15">
                      <Icon name="menu_book" className="text-emerald-300" size={22} />
                    </div>
                    <div>
                      <p className="text-[15px] font-semibold text-white">
                        View the full Installation Guide
                      </p>
                      <p className="mt-0.5 text-sm text-white/50">
                        Step-by-step screenshots for every step.
                      </p>
                    </div>
                  </div>
                  <Icon name="arrow_forward" size={20} className="shrink-0 text-white/30" />
                </GlassCard>
              </Link>
            </Reveal>
          )}

          {relatedDocs.length > 0 && (
            <Reveal delay={0.15}>
              <div className="mt-14 border-t border-white/[0.08] pt-8">
                <h3 className="text-sm font-semibold uppercase tracking-wide text-white/40">
                  Related Articles
                </h3>
                <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {relatedDocs.map((related) => (
                    <Link key={related.slug} href={`/docs/${related.slug}`}>
                      <GlassCard hoverable className="p-4">
                        <p className="text-[15px] font-medium text-white">{related.title}</p>
                        <p className="mt-1 text-sm text-white/50">{related.description}</p>
                      </GlassCard>
                    </Link>
                  ))}
                </div>
              </div>
            </Reveal>
          )}

          {(prevDoc || nextDoc) && (
            <div className="mt-10 flex flex-col gap-4 border-t border-white/[0.08] pt-8 sm:flex-row sm:justify-between">
              {prevDoc ? (
                <Link
                  href={`/docs/${prevDoc.slug}`}
                  className="flex items-center gap-2 text-[15px] text-white/60 hover:text-emerald-300 transition-colors"
                >
                  <Icon name="arrow_back" size={18} />
                  {prevDoc.title}
                </Link>
              ) : (
                <span />
              )}
              {nextDoc && (
                <Link
                  href={`/docs/${nextDoc.slug}`}
                  className="flex items-center gap-2 text-[15px] text-white/60 hover:text-emerald-300 transition-colors sm:text-right"
                >
                  {nextDoc.title}
                  <Icon name="arrow_forward" size={18} />
                </Link>
              )}
            </div>
          )}
        </article>

        <TableOfContents items={tocItems} />
      </div>
    </section>
  );
}
