"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { DOC_CATEGORIES } from "@/content/documentation";
import { Icon } from "@/components/ui/Icon";
import { cn } from "@/lib/utils";

export function DocsSidebar() {
  const pathname = usePathname();

  return (
    <nav aria-label="Documentation categories" className="hidden md:block">
      <p className="px-3 text-xs font-semibold uppercase tracking-wide text-white/35">
        Documentation
      </p>
      <ul className="mt-3 space-y-0.5">
        {DOC_CATEGORIES.map((category) => {
          const active = pathname === category.href;
          return (
            <li key={category.id}>
              <Link
                href={category.href}
                className={cn(
                  "flex items-center gap-2.5 rounded-xl px-3 py-2.5 text-[14px] transition-colors",
                  active
                    ? "bg-emerald-500/[0.12] text-emerald-300"
                    : "text-white/55 hover:bg-white/[0.05] hover:text-white"
                )}
              >
                <Icon name={category.icon} size={18} />
                {category.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
