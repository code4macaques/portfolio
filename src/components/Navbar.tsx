/**
 * Navbar.tsx
 *
 * Sticky top navigation bar with:
 * - Logo + name branding
 * - Desktop navigation links (hidden on mobile)
 * - Language toggle (EN/ES)
 * - Theme toggle switch (light/dark)
 * - Mobile hamburger menu with slide-in panel
 * - "Contact Me" CTA button
 */
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiCode, HiMenu, HiX } from "react-icons/hi";
import ThemeToggle from "./ThemeToggle";
import LanguageToggle from "./LanguageToggle";
import { useLanguage } from "../context/LanguageContext";

interface NavbarProps {
  theme: "light" | "dark";
  onToggleTheme: () => void;
}

export default function Navbar({ theme, onToggleTheme }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { t, locale, toggleLocale, cvData } = useLanguage();

  /** Navigation link targets — must match section `id` attributes. */
  const navLinks = [
    { label: t.nav.home, href: "#home" },
    { label: t.nav.experience, href: "#experience" },
    { label: t.nav.skills, href: "#skills" },
    { label: t.nav.education, href: "#education" },
    { label: t.nav.contact, href: "#contact" },
  ];

  return (
    <header className="fixed top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md dark:border-dark-border dark:bg-dark-bg/80">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* -- Branding -- */}
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-white">
            <HiCode className="text-xl" />
          </div>
          <span className="text-xl font-bold tracking-tight dark:text-dark-text">{cvData.firstName}</span>
        </div>

        {/* -- Desktop nav links -- */}
        <nav className="hidden items-center gap-8 md:flex" aria-label="Main">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-text-muted transition-colors hover:text-primary dark:text-dark-text-muted dark:hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* -- CTA + language toggle + theme toggle + hamburger -- */}
        <div className="flex items-center gap-4">
          <LanguageToggle locale={locale} onToggle={toggleLocale} />
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />

          <a
            href="#contact"
            className="hidden rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-primary/90 sm:inline-block"
          >
            {t.nav.contactMe}
          </a>

          {/* Mobile menu toggle */}
          <button
            type="button"
            className="rounded-lg p-2 text-text-dark md:hidden dark:text-dark-text"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <HiX className="text-2xl" /> : <HiMenu className="text-2xl" />}
          </button>
        </div>
      </div>

      {/* -- Mobile slide-in panel -- */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-slate-200 bg-white md:hidden dark:border-dark-border dark:bg-dark-bg"
            aria-label="Mobile"
          >
            <ul className="flex flex-col gap-1 px-6 py-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block rounded-lg px-3 py-2 text-sm font-medium text-text-muted transition-colors hover:bg-background-gray hover:text-primary dark:text-dark-text-muted dark:hover:bg-dark-surface dark:hover:text-primary"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#contact"
                  onClick={() => setMobileOpen(false)}
                  className="mt-2 block rounded-lg bg-primary px-5 py-2.5 text-center text-sm font-semibold text-white"
                >
                  {t.nav.contactMe}
                </a>
              </li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
