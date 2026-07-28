import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

export function DownloadActionButtons() {
  return (
    <Reveal delay={0.15}>
      <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:flex-wrap">
        <Button href="#download-cards" size="lg" icon="download" className="w-full sm:w-auto">
          Download APK
        </Button>
        <Button href="/releases" variant="secondary" size="lg" icon="history" className="w-full sm:w-auto">
          Release Notes
        </Button>
        <Button href="/docs" variant="secondary" size="lg" icon="description" className="w-full sm:w-auto">
          Documentation
        </Button>
        <Button href="/contact" variant="tertiary" size="lg" icon="bug_report" className="w-full sm:w-auto">
          Report Bug
        </Button>
      </div>
    </Reveal>
  );
}
