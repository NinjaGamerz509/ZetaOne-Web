import { GlassCard } from "@/components/ui/GlassCard";
import { Icon } from "@/components/ui/Icon";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

interface PagePlaceholderProps {
  icon: string;
  title: string;
  description: string;
  note?: string;
}

/**
 * Shared "coming soon" shell for routes that will be fully implemented in Phase 2
 * (Download, Documentation, Articles, Releases, About, Credits, Privacy, Terms,
 * FAQ, Contact). Keeps every stub page consistent with the glass design system
 * instead of leaving blank white space.
 */
export function PagePlaceholder({ icon, title, description, note }: PagePlaceholderProps) {
  return (
    <section className="flex min-h-screen items-center justify-center px-5 pt-[72px] sm:px-8">
      <Reveal>
        <GlassCard className="max-w-lg px-8 py-14 text-center sm:px-12">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-500/15">
            <Icon name={icon} size={32} className="text-emerald-300" />
          </div>
          <h1 className="mt-6 font-display text-3xl font-semibold text-white">{title}</h1>
          <p className="mt-3 text-[15px] leading-relaxed text-white/55">{description}</p>
          {note && <p className="mt-2 text-sm text-white/35">{note}</p>}

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Button href="/" icon="home" className="w-full sm:w-auto">
              Go Home
            </Button>
            <Button href="/faq" variant="secondary" icon="help" className="w-full sm:w-auto">
              FAQ
            </Button>
          </div>
        </GlassCard>
      </Reveal>
    </section>
  );
}
