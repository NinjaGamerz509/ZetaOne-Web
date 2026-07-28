import type { SearchResultItem } from "@/types";
import { DOC_PAGES } from "@/content/documentation";
import { TROUBLESHOOTING_ISSUES } from "@/content/troubleshooting";
import { ARTICLES } from "@/content/articles";
import { RELEASE_HISTORY } from "@/content/releases";
import { FAQ_ITEMS } from "@/content/faq";

function buildSearchIndex(): SearchResultItem[] {
  const docs: SearchResultItem[] = DOC_PAGES.map((doc) => ({
    title: doc.title,
    description: doc.description,
    category: "Documentation",
    href: `/docs/${doc.slug}`,
    icon: "menu_book",
  }));

  const troubleshooting: SearchResultItem[] = TROUBLESHOOTING_ISSUES.map((issue) => ({
    title: issue.problem,
    description: issue.solution,
    category: "Documentation",
    href: "/docs/troubleshooting",
    icon: "build",
  }));

  const articles: SearchResultItem[] = ARTICLES.map((article) => ({
    title: article.title,
    description: article.description,
    category: "Articles",
    href: `/articles/${article.slug}`,
    icon: "article",
  }));

  const releases: SearchResultItem[] = RELEASE_HISTORY.map((release) => ({
    title: `Zeta One ${release.version}`,
    description: release.highlights.join(", "),
    category: "Release Notes",
    href: `/releases/${release.version}`,
    icon: "history",
  }));

  const faq: SearchResultItem[] = FAQ_ITEMS.map((item) => ({
    title: item.question,
    description: item.answer,
    category: "FAQ",
    href: "/faq",
    icon: "help",
  }));

  return [...docs, ...troubleshooting, ...articles, ...releases, ...faq];
}

export const SEARCH_INDEX = buildSearchIndex();

export const POPULAR_SEARCHES = [
  "Notes",
  "Tasks",
  "Download",
  "Install",
  "Focus",
  "PDF",
  "Goals",
  "Flashcards",
];

/** Group order matches spec: Documentation -> Articles -> Release Notes -> FAQ */
export const SEARCH_CATEGORY_ORDER: SearchResultItem["category"][] = [
  "Documentation",
  "Articles",
  "Release Notes",
  "FAQ",
  "Pages",
];

export function searchSite(query: string): SearchResultItem[] {
  const trimmed = query.trim().toLowerCase();
  if (!trimmed) return [];

  return SEARCH_INDEX.filter(
    (item) =>
      item.title.toLowerCase().includes(trimmed) ||
      item.description.toLowerCase().includes(trimmed)
  );
}
