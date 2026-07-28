import { GlassCard } from "@/components/ui/GlassCard";
import { Icon } from "@/components/ui/Icon";
import { LATEST_RELEASE } from "@/content/releases";
import type { ReleaseApk } from "@/types";

const ARCH_ICONS: Record<ReleaseApk["arch"], string> = {
  Universal: "public",
  ARM64: "memory",
  ARM: "memory",
  x86: "developer_board",
  Bundle: "inventory_2",
};

/**
 * Renders every architecture card, including ones without a URL yet —
 * those show a disabled "Coming soon" state instead of disappearing,
 * so the layout never needs to change once real APKs are uploaded.
 */
export function ApkDownloadCard({ apk }: { apk: ReleaseApk }) {
  const release = LATEST_RELEASE;
  const available = Boolean(apk.url);

  return (
    <GlassCard hoverable={available} className="flex flex-col p-6">
      <div className="flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-500/15">
          <Icon name={ARCH_ICONS[apk.arch]} className="text-emerald-300" size={22} />
        </div>
        <div>
          <h3 className="text-[15px] font-semibold text-white">{apk.label}</h3>
          <p className="text-xs text-white/40">{release.version}</p>
        </div>
      </div>

      <div className="mt-5 grid grid-cols-2 gap-3 border-y border-white/[0.08] py-4 text-sm">
        <div>
          <p className="text-xs uppercase tracking-wide text-white/30">Size</p>
          <p className="mt-0.5 text-white/75">{apk.size}</p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-wide text-white/30">Android</p>
          <p className="mt-0.5 text-white/75">{release.minAndroidVersion.split(" ")[1] ?? "8.0+"}</p>
        </div>
      </div>

      {available ? (
        <a
          href={apk.url as string}
          className="mt-5 flex items-center justify-center gap-2 rounded-button bg-emerald-500 py-3 text-[15px] font-medium text-white transition-all hover:bg-emerald-600 hover:scale-[1.02] active:scale-[0.98]"
        >
          <Icon name="download" size={18} />
          Download
        </a>
      ) : (
        <div className="mt-5 flex items-center justify-center gap-2 rounded-button border border-white/[0.1] bg-white/[0.03] py-3 text-[15px] text-white/35">
          <Icon name="hourglass_top" size={18} />
          Coming Soon
        </div>
      )}
    </GlassCard>
  );
}
