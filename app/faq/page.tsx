import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { SearchableFaqSection } from "@/components/sections/faq/SearchableFaqSection";
import { JsonLd } from "@/components/layout/JsonLd";
import { buildFaqSchema } from "@/lib/structuredData";
import { FAQ_ITEMS } from "@/content/faq";

export const metadata: Metadata = buildMetadata({
  title: "FAQ",
  description: "Answers to frequently asked questions about Zeta One.",
  path: "/faq",
});

export default function FaqPage() {
  const schema = buildFaqSchema(
    FAQ_ITEMS.map((item) => ({ question: item.question, answer: item.answer }))
  );

  return (
    <>
      <JsonLd data={schema} />
      <SearchableFaqSection />
    </>
  );
}
