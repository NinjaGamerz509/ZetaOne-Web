import { cn } from "@/lib/utils";
import { RELEASE_STATUS_COLORS, type ReleaseStatus } from "@/constants/app";

export function ReleaseStatusBadge({ status }: { status: ReleaseStatus }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold tracking-wide",
        RELEASE_STATUS_COLORS[status]
      )}
    >
      {status}
    </span>
  );
}
