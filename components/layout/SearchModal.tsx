"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { Icon } from "@/components/ui/Icon";
import { searchSite, POPULAR_SEARCHES, SEARCH_CATEGORY_ORDER } from "@/lib/search";
import type { SearchResultItem } from "@/types";

interface SearchModalProps {
  open: boolean;
  onClose: () => void;
}

function groupResults(results: SearchResultItem[]) {
  return SEARCH_CATEGORY_ORDER
    .map((category) => ({ category, items: results.filter((r) => r.category === category) }))
    .filter((group) => group.items.length > 0);
}

export function SearchModal({ open, onClose }: SearchModalProps) {
  const [query, setQuery] = useState("");

  useEffect(() => {
    if (!open) setQuery("");
  }, [open]);

  useEffect(() => {
    function handleKey(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
    }
    if (open) document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [open, onClose]);

  const results = useMemo(() => searchSite(query), [query]);
  const grouped = useMemo(() => groupResults(results), [results]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-start justify-center bg-black/60 backdrop-blur-sm px-4 pt-24 sm:pt-32"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label="Site search"
        >
          <motion.div
            className="w-full max-w-xl rounded-card border border-white/[0.12] bg-[#0A1F17]/90 backdrop-blur-glass shadow-glass overflow-hidden"
            initial={{ opacity: 0, y: -16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -16, scale: 0.98 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3 border-b border-white/[0.08] px-5 py-4">
              <Icon name="search" className="text-emerald-300" />
              <input
                autoFocus
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search documentation, articles and releases..."
                aria-label="Search documentation, articles and releases"
                className="w-full bg-transparent text-[15px] text-white placeholder:text-white/40 outline-none"
              />
              <button
                onClick={onClose}
                aria-label="Close search"
                className="rounded-full p-1 text-white/50 hover:text-white hover:bg-white/[0.08] transition-colors"
              >
                <Icon name="close" size={20} />
              </button>
            </div>

            <div className="max-h-[60vh] overflow-y-auto p-3">
              {query.trim() === "" && (
                <div className="px-3 py-4">
                  <p className="mb-3 text-xs font-medium uppercase tracking-wide text-white/40">
                    Popular Searches
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {POPULAR_SEARCHES.map((term) => (
                      <button
                        key={term}
                        onClick={() => setQuery(term)}
                        className="rounded-full border border-white/[0.12] bg-white/[0.05] px-3 py-1.5 text-sm text-white/70 hover:text-white hover:border-emerald-400/30 transition-colors"
                      >
                        {term}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {query.trim() !== "" && grouped.length === 0 && (
                <div className="px-3 py-8 text-center">
                  <p className="text-white/70">No results found.</p>
                  <p className="mt-1 text-sm text-white/40">Try searching with different keywords.</p>
                </div>
              )}

              {grouped.map((group) => (
                <div key={group.category} className="mb-2">
                  <p className="px-3 py-2 text-xs font-medium uppercase tracking-wide text-white/40">
                    {group.category}
                  </p>
                  {group.items.map((item) => (
                    <Link
                      key={`${item.category}-${item.title}`}
                      href={item.href}
                      onClick={onClose}
                      className="flex items-center gap-3 rounded-xl px-3 py-3 hover:bg-white/[0.06] transition-colors"
                    >
                      <Icon name={item.icon} className="text-emerald-300 shrink-0" size={20} />
                      <span className="min-w-0 flex-1">
                        <span className="block truncate text-[15px] text-white">{item.title}</span>
                        <span className="block truncate text-sm text-white/40">{item.description}</span>
                      </span>
                      <Icon name="arrow_forward" size={18} className="text-white/30 shrink-0" />
                    </Link>
                  ))}
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
