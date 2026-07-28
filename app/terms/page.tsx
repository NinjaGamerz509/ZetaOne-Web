import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { LegalPageLayout } from "@/components/sections/legal/LegalPageLayout";
import { TERMS_SECTIONS, TERMS_LAST_UPDATED } from "@/content/terms";

export const metadata: Metadata = buildMetadata({
  title: "Terms & Conditions",
  description: "Terms and conditions for using Zeta One.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <LegalPageLayout
      title="Terms & Conditions"
      lastUpdated={TERMS_LAST_UPDATED}
      sections={TERMS_SECTIONS}
    />
  );
}
