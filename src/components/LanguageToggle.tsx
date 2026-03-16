/**
 * LanguageToggle.tsx
 *
 * A compact toggle button that switches between EN and ES.
 * Styled similarly to the ThemeToggle with a pill shape and sliding indicator.
 */
import { motion } from "framer-motion";
import type { Locale } from "../i18n";

interface LanguageToggleProps {
  locale: Locale;
  onToggle: () => void;
}

export default function LanguageToggle({ locale, onToggle }: LanguageToggleProps) {
  const isEs = locale === "es";

  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={isEs ? "Cambiar a ingles" : "Switch to Spanish"}
      className="relative flex h-8 w-16 items-center rounded-full bg-slate-200 p-1 text-xs font-bold transition-colors duration-300 dark:bg-dark-surface"
    >
      {/* Sliding knob */}
      <motion.div
        layout
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
        className="flex h-6 w-7 items-center justify-center rounded-full bg-white shadow-sm dark:bg-primary"
        style={{ marginLeft: isEs ? "auto" : 0 }}
      >
        <span className={isEs ? "text-white dark:text-white" : "text-primary"}>
          {isEs ? "ES" : "EN"}
        </span>
      </motion.div>

      {/* Background labels */}
      <span className="pointer-events-none absolute inset-0 flex items-center justify-between px-2 text-[10px] font-bold text-slate-400 dark:text-slate-500">
        <span className={isEs ? "opacity-100" : "opacity-0"}>EN</span>
        <span className={isEs ? "opacity-0" : "opacity-100"}>ES</span>
      </span>
    </button>
  );
}
