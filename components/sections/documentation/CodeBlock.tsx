"use client";

import { useState } from "react";
import { Icon } from "@/components/ui/Icon";

interface CodeBlockProps {
  language: string;
  content: string;
}

export function CodeBlock({ language, content }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(content);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // Clipboard API unavailable — silently ignore.
    }
  }

  return (
    <div className="my-6 overflow-hidden rounded-2xl border border-white/[0.1] bg-[#03100B]">
      <div className="flex items-center justify-between border-b border-white/[0.08] px-4 py-2.5">
        <span className="text-xs font-medium uppercase tracking-wide text-white/40">{language}</span>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 text-xs text-white/50 hover:text-white transition-colors min-h-[32px]"
          aria-label="Copy code"
        >
          <Icon name={copied ? "check" : "content_copy"} size={16} />
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
      <pre className="overflow-x-auto p-4 text-[13px] leading-relaxed text-emerald-200">
        <code>{content}</code>
      </pre>
    </div>
  );
}
