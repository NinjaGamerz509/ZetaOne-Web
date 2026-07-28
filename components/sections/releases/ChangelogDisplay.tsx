import { Icon } from "@/components/ui/Icon";
import type { Changelog } from "@/types";

const GROUPS: { key: keyof Changelog; label: string; icon: string; color: string }[] = [
  { key: "added", label: "Added", icon: "add_circle", color: "text-emerald-400" },
  { key: "improved", label: "Improved", icon: "trending_up", color: "text-sky-400" },
  { key: "fixed", label: "Fixed", icon: "build_circle", color: "text-amber-400" },
  { key: "removed", label: "Removed", icon: "remove_circle", color: "text-red-400" },
];

export function ChangelogDisplay({ changelog }: { changelog: Changelog }) {
  const visibleGroups = GROUPS.filter((group) => changelog[group.key].length > 0);

  return (
    <div className="space-y-6">
      {visibleGroups.map((group) => (
        <div key={group.key}>
          <p className={`flex items-center gap-2 text-sm font-semibold ${group.color}`}>
            <Icon name={group.icon} size={18} />
            {group.label}
          </p>
          <ul className="mt-2 space-y-1.5 pl-6">
            {changelog[group.key].map((item) => (
              <li key={item} className="list-disc text-[15px] leading-relaxed text-white/65 marker:text-white/25">
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
