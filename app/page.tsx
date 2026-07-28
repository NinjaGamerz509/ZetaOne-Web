import { Hero } from "@/components/sections/hero/Hero";
import { FeaturesSection } from "@/components/sections/features/FeaturesSection";
import { LatestReleaseSection } from "@/components/sections/releases/LatestReleaseSection";
import { ArticlesSection } from "@/components/sections/articles/ArticlesSection";
import { InstallationGuideSection } from "@/components/sections/installation/InstallationGuideSection";
import { DocumentationSection } from "@/components/sections/documentation/DocumentationSection";
import { FaqSection } from "@/components/sections/faq/FaqSection";
import { FinalCtaSection } from "@/components/sections/cta/FinalCtaSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturesSection />
      <LatestReleaseSection />
      <ArticlesSection />
      <InstallationGuideSection />
      <DocumentationSection />
      <FaqSection />
      <FinalCtaSection />
    </>
  );
}
