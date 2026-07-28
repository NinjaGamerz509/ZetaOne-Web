import { Icon } from "@/components/ui/Icon";
import type { ReleaseApk } from "@/types";

/**
 * Automatically hides itself if no file URL exists for this architecture.
 */
export function ApkDownloadButton({ apk }: { apk: ReleaseApk }) {
  if (!apk.url) return null;

  return (
    <a
      href={apk.url}
      className="flex items-center justify-between gap-3 rounded-2xl border border-white/[0.1] bg-white/[0.05] px-4 py-3 text-sm text-white/80 hover:border-emerald-400/30 hover:bg-white/[0.08] transition-colors"
    >
      <span className="flex items-center gap-2">
        <Icon name="android" size={18} className="text-emerald-300" />
        {apk.label}
      </span>
      <span className="text-white/40">{apk.size}</span>
    </a>
  );
}
