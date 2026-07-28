import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { LegalPageLayout } from "@/components/sections/legal/LegalPageLayout";
import { PRIVACY_SECTIONS, PRIVACY_LAST_UPDATED } from "@/content/privacy";

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy",
  description: "How Zeta One handles your data and privacy.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <LegalPageLayout
      title="Privacy Policy"
      lastUpdated={PRIVACY_LAST_UPDATED}
      sections={PRIVACY_SECTIONS}
    />
  );
}
