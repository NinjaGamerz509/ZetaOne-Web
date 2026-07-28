import { Icon } from "@/components/ui/Icon";

export function KnownIssuesList({ issues }: { issues: string[] }) {
  if (issues.length === 0) {
    return (
      <p className="flex items-center gap-2 text-[15px] text-white/50">
        <Icon name="check_circle" size={18} className="text-emerald-400" />
        No known issues reported for this release.
      </p>
    );
  }

  return (
    <ul className="space-y-2">
      {issues.map((issue) => (
        <li key={issue} className="flex items-start gap-2 text-[15px] leading-relaxed text-white/65">
          <Icon name="error_outline" size={18} className="mt-0.5 shrink-0 text-amber-400" />
          {issue}
        </li>
      ))}
    </ul>
  );
}
