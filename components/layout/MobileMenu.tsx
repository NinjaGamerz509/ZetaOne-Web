"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { PRIMARY_NAV, MOBILE_EXTRA_NAV } from "@/config/navigation.config";
import { Icon } from "@/components/ui/Icon";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[90] bg-[#04120D]/95 backdrop-blur-glass md:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
        >
          <div className="flex h-full flex-col pt-24 px-8 pb-10">
            <button
              onClick={onClose}
              aria-label="Close menu"
              className="absolute right-6 top-6 rounded-full p-2 text-white/70 hover:text-white hover:bg-white/[0.08] transition-colors"
            >
              <Icon name="close" size={26} />
            </button>

            <nav className="flex flex-col gap-1">
              {PRIMARY_NAV.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i, duration: 0.3 }}
                >
                  <Link
                    href={link.href}
                    onClick={onClose}
                    className="block py-3 text-2xl font-display font-medium text-white/90 hover:text-emerald-300 transition-colors min-h-[48px]"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>

            <div className="mt-8 border-t border-white/[0.08] pt-6 flex flex-col gap-1">
              {MOBILE_EXTRA_NAV.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={onClose}
                  className="py-2.5 text-[15px] text-white/50 hover:text-white/80 transition-colors min-h-[48px] flex items-center"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
