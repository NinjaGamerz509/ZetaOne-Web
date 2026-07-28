"use client";

import { useState } from "react";
import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { Icon } from "@/components/ui/Icon";
import { PRIMARY_NAV } from "@/config/navigation.config";
import { SearchModal } from "@/components/layout/SearchModal";
import { MobileMenu } from "@/components/layout/MobileMenu";

export function Navbar() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 h-[72px] border-b border-white/[0.08] bg-[#04120D]/70 backdrop-blur-glass shadow-glass-sm">
        <div className="mx-auto flex h-full max-w-content items-center justify-between px-5 sm:px-8">
          <Logo />

          <nav className="hidden md:flex items-center gap-1" aria-label="Primary">
            {PRIMARY_NAV.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-full px-4 py-2 text-[15px] font-medium text-white/70 hover:text-white hover:bg-white/[0.06] transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setSearchOpen(true)}
              aria-label="Search"
              className="flex h-11 w-11 items-center justify-center rounded-full text-white/70 hover:text-white hover:bg-white/[0.08] transition-colors"
            >
              <Icon name="search" size={22} />
            </button>

            <button
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
              className="md:hidden flex h-11 w-11 items-center justify-center rounded-full text-white/70 hover:text-white hover:bg-white/[0.08] transition-colors"
            >
              <Icon name="menu" size={24} />
            </button>
          </div>
        </div>
      </header>

      <SearchModal open={searchOpen} onClose={() => setSearchOpen(false)} />
      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
