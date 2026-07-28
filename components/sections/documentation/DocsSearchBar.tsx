"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Icon } from "@/components/ui/Icon";
import { searchSite, POPULAR_SEARCHES } from "@/lib/search";

/**
 * Instant-filter search used at the top of /docs. Distinct from the global
 * SearchModal (Cmd/Ctrl+click in the navbar) — this one is inline and always
 * visible on the documentation landing page.
 */
export function DocsSearchBar() {
  const [query, setQuery] = useState("");
  const results = useMemo(() => searchSite(query).slice(0, 8), [query]);

  return (
    <div className="mx-auto max-w-xl">
      <div className="flex items-center gap-3 rounded-full border border-white/[0.12] bg-white/[0.05] px-5 py-3.5 backdrop-blur-glass focus-within:border-emerald-400/40">
        <Icon name="search" size={20} className="text-emerald-300 shrink-0" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search documentation..."
          aria-label="Search documentation"
          className="w-full bg-transparent text-[15px] text-white placeholder:text-white/40 outline-none"
        />
        {query && (
          <button
            onClick={() => setQuery("")}
            aria-label="Clear search"
            className="shrink-0 text-white/40 hover:text-white transition-colors"
          >
            <Icon name="close" size={18} />
          </button>
        )}
      </div>

      {query.trim() === "" ? (
        <div className="mt-4 flex flex-wrap justify-center gap-2">
          {POPULAR_SEARCHES.map((term) => (
            <button
              key={term}
              onClick={() => setQuery(term)}
              className="rounded-full border border-white/[0.1] bg-white/[0.04] px-3 py-1.5 text-sm text-white/60 hover:text-white hover:border-emerald-400/30 transition-colors"
            >
              {term}
            </button>
          ))}
        </div>
      ) : (
        <div className="mt-4 rounded-2xl border border-white/[0.1] bg-white/[0.04] backdrop-blur-glass overflow-hidden">
          {results.length === 0 ? (
            <p className="px-5 py-6 text-center text-[15px] text-white/50">
              No results for &ldquo;{query}&rdquo;.
            </p>
          ) : (
            results.map((item) => (
              <Link
                key={`${item.category}-${item.title}`}
                href={item.href}
                className="flex items-center gap-3 border-b border-white/[0.06] px-5 py-3.5 last:border-b-0 hover:bg-white/[0.05] transition-colors"
              >
                <Icon name={item.icon} size={18} className="text-emerald-300 shrink-0" />
                <span className="min-w-0 flex-1 text-left">
                  <span className="block truncate text-[15px] text-white">{item.title}</span>
                  <span className="block truncate text-xs text-white/40">{item.category}</span>
                </span>
              </Link>
            ))
          )}
        </div>
      )}
    </div>
  );
}
