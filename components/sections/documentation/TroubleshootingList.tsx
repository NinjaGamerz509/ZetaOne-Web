import Link from "next/link";
import { TROUBLESHOOTING_ISSUES } from "@/content/troubleshooting";
import { DOC_PAGES } from "@/content/documentation";
import { GlassCard } from "@/components/ui/GlassCard";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";

export function TroubleshootingList() {
  return (
    <div>
      <h2 className="font-display text-xl font-semibold text-white">Common Issues</h2>
      <div className="mt-5 space-y-5">
        {TROUBLESHOOTING_ISSUES.map((issue, index) => {
          const related = issue.relatedSlugs
            .map((slug) => DOC_PAGES.find((d) => d.slug === slug))
            .filter((d): d is NonNullable<typeof d> => Boolean(d));

          return (
            <Reveal key={issue.id} delay={index * 0.05}>
              <GlassCard className="p-6">
                <div className="flex items-start gap-3">
                  <Icon name="error" size={20} className="mt-0.5 shrink-0 text-red-300" />
                  <h3 className="font-display text-lg font-semibold text-white">{issue.problem}</h3>
                </div>

                <div className="mt-4 space-y-3 pl-8">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-white/35">
                      Possible Cause
                    </p>
                    <p className="mt-1 text-[15px] leading-relaxed text-white/60">{issue.cause}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-emerald-400/70">
                      Solution
                    </p>
                    <p className="mt-1 text-[15px] leading-relaxed text-white/70">
                      {issue.solution}
                    </p>
                  </div>

                  {related.length > 0 && (
                    <div className="flex flex-wrap items-center gap-2 pt-1">
                      <span className="text-xs text-white/35">Related:</span>
                      {related.map((doc) => (
                        <Link
                          key={doc.slug}
                          href={`/docs/${doc.slug}`}
                          className="rounded-full border border-white/[0.1] bg-white/[0.04] px-3 py-1 text-xs text-emerald-300 hover:border-emerald-400/30 transition-colors"
                        >
                          {doc.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              </GlassCard>
            </Reveal>
          );
        })}
      </div>
    </div>
  );
}
