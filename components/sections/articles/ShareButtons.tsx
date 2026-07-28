"use client";

import { useState } from "react";
import { Icon } from "@/components/ui/Icon";
import { siteConfig } from "@/config/site.config";

interface ShareButtonsProps {
  slug: string;
  title: string;
}

export function ShareButtons({ slug, title }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);
  const url = `${siteConfig.url}/articles/${slug}`;

  async function handleCopyLink() {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // Clipboard API unavailable — silently ignore.
    }
  }

  const shareLinks = [
    {
      label: "X",
      icon: "tag",
      href: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
    },
    {
      label: "WhatsApp",
      icon: "chat",
      href: `https://wa.me/?text=${encodeURIComponent(`${title} ${url}`)}`,
    },
    {
      label: "Reddit",
      icon: "forum",
      href: `https://www.reddit.com/submit?url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`,
    },
  ];

  return (
    <div className="flex flex-wrap items-center gap-2">
      <span className="text-sm font-medium text-white/50">Share</span>
      {shareLinks.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Share on ${link.label}`}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.1] bg-white/[0.05] text-white/60 hover:text-emerald-300 hover:border-emerald-400/30 transition-colors"
        >
          <Icon name={link.icon} size={18} />
        </a>
      ))}
      <button
        onClick={handleCopyLink}
        aria-label="Copy link"
        className="flex h-10 items-center gap-1.5 rounded-full border border-white/[0.1] bg-white/[0.05] px-3 text-sm text-white/60 hover:text-emerald-300 hover:border-emerald-400/30 transition-colors"
      >
        <Icon name={copied ? "check" : "link"} size={16} />
        {copied ? "Copied" : "Copy link"}
      </button>
    </div>
  );
}
