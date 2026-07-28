import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { APP } from "@/constants/app";
import {
  FOOTER_QUICK_LINKS,
  FOOTER_LEGAL_LINKS,
  FOOTER_SUPPORT_LINKS,
} from "@/config/navigation.config";

function FooterColumn({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <h3 className="text-sm font-semibold uppercase tracking-wide text-white/40">{title}</h3>
      <ul className="mt-4 space-y-3">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-[15px] text-white/60 hover:text-emerald-300 transition-colors"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-white/[0.08] bg-[#04120D]/60 backdrop-blur-glass">
      <div className="mx-auto max-w-content px-5 sm:px-8 py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-[15px] leading-relaxed text-white/50">
              One modern application for studying, organizing and staying productive.
            </p>
            <p className="mt-4 text-sm text-emerald-400/80">Version {APP.currentVersion}</p>
          </div>

          <FooterColumn title="Quick Links" links={FOOTER_QUICK_LINKS} />
          <FooterColumn title="Legal" links={FOOTER_LEGAL_LINKS} />
          <FooterColumn title="Support" links={FOOTER_SUPPORT_LINKS} />
        </div>

        <div className="mt-14 border-t border-white/[0.08] pt-8 flex flex-col items-center gap-2 text-center sm:flex-row sm:justify-between sm:text-left">
          <p className="text-sm text-white/40">
            Copyright © {APP.copyrightYear} {APP.name}
          </p>
          <p className="text-sm text-white/40">Developed by {APP.developer}</p>
        </div>
        <p className="mt-3 text-center text-xs text-white/25 sm:text-left">
          Made with modern development tools and AI-assisted workflows.
        </p>
      </div>
    </footer>
  );
}
