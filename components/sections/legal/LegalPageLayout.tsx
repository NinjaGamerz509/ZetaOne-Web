import { Reveal } from "@/components/ui/Reveal";
import { TableOfContents } from "@/components/sections/documentation/TableOfContents";
import { formatDate } from "@/lib/utils";
import type { LegalSection } from "@/content/privacy";

interface LegalPageLayoutProps {
  title: string;
  lastUpdated: string;
  sections: LegalSection[];
}

export function LegalPageLayout({ title, lastUpdated, sections }: LegalPageLayoutProps) {
  const tocItems = sections.map((s) => ({ id: s.id, label: s.heading }));

  return (
    <section className="min-h-screen px-5 pt-32 pb-24 sm:px-8 sm:pt-40">
      <div className="mx-auto grid max-w-content grid-cols-1 gap-10 lg:grid-cols-[1fr_220px]">
        <div className="min-w-0 mx-auto w-full max-w-3xl lg:mx-0">
          <Reveal>
            <h1 className="font-display text-3xl font-bold text-white sm:text-4xl">{title}</h1>
            <p className="mt-3 text-sm text-white/40">Last updated {formatDate(lastUpdated)}</p>
          </Reveal>

          <div className="mt-10 space-y-10">
            {sections.map((section, index) => (
              <Reveal key={section.id} delay={index * 0.04}>
                <div id={section.id} className="scroll-mt-28">
                  <h2 className="font-display text-xl font-semibold text-white">
                    {section.heading}
                  </h2>
                  <div className="mt-3 space-y-3">
                    {section.body.map((paragraph, pIndex) => (
                      <p key={pIndex} className="text-[15px] leading-relaxed text-white/60">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <TableOfContents items={tocItems} />
      </div>
    </section>
  );
}
