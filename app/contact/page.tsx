import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { APP } from "@/constants/app";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = buildMetadata({
  title: "Contact",
  description: "Get in touch with the Zeta One team for support, feedback or bug reports.",
  path: "/contact",
});

const CONTACT_OPTIONS = [
  {
    icon: "support_agent",
    title: "Support",
    description: "Need help using Zeta One?",
    email: APP.supportEmail,
  },
  {
    icon: "feedback",
    title: "Feedback",
    description: "Share ideas to help us improve.",
    email: APP.feedbackEmail,
  },
  {
    icon: "bug_report",
    title: "Report a Bug",
    description: "Found something broken? Let us know the details.",
    email: APP.supportEmail,
  },
  {
    icon: "lightbulb",
    title: "Feature Request",
    description: "Suggest a feature you'd like to see next.",
    email: APP.feedbackEmail,
  },
];

export default function ContactPage() {
  return (
    <section className="min-h-screen px-5 pt-32 pb-24 sm:px-8 sm:pt-40">
      <div className="mx-auto max-w-content">
        <Reveal>
          <div className="mx-auto max-w-hero text-center">
            <h1 className="font-display text-4xl font-bold text-white sm:text-5xl">Contact</h1>
            <p className="mt-4 text-lg text-white/55">We&apos;d love to hear from you.</p>
          </div>
        </Reveal>

        <div className="mx-auto mt-14 grid max-w-2xl grid-cols-1 gap-5 sm:grid-cols-2">
          {CONTACT_OPTIONS.map((option, index) => (
            <Reveal key={option.title} delay={index * 0.08}>
              <GlassCard className="flex h-full flex-col p-7">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500/15">
                  <Icon name={option.icon} className="text-emerald-300" size={24} />
                </div>
                <h2 className="mt-5 font-display text-lg font-semibold text-white">{option.title}</h2>
                <p className="mt-2 flex-1 text-[15px] text-white/55">{option.description}</p>
                <Button href={`mailto:${option.email}`} variant="secondary" icon="mail" className="mt-6">
                  {option.email}
                </Button>
              </GlassCard>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <p className="mx-auto mt-10 flex max-w-lg items-center justify-center gap-2 text-center text-sm text-white/40">
            <Icon name="schedule" size={16} className="shrink-0" />
            We typically respond within 2–3 business days.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
