import { Icon } from "@/components/ui/Icon";
import { COMMUNITY_LINKS } from "@/content/credits";

export function CommunityLinks() {
  const available = COMMUNITY_LINKS.filter((link) => link.url);

  if (available.length === 0) {
    return (
      <p className="text-center text-[15px] text-white/45">
        Community channels are coming soon — check back later.
      </p>
    );
  }

  return (
    <div className="flex flex-wrap justify-center gap-3">
      {available.map((link) => (
        <a
          key={link.platform}
          href={link.url as string}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 rounded-full border border-white/[0.1] bg-white/[0.05] px-4 py-2.5 text-[15px] text-white/70 hover:text-emerald-300 hover:border-emerald-400/30 transition-colors"
        >
          <Icon name={link.icon} size={18} />
          {link.platform}
        </a>
      ))}
    </div>
  );
}
