/**
 * ThemeToggle.tsx
 *
 * A pill-shaped toggle switch that sits in the navbar.
 * Shows a sun icon (light mode) or moon icon (dark mode).
 * Animated sliding knob with smooth icon transitions.
 */
import { HiSun, HiMoon } from "react-icons/hi";
import { motion } from "framer-motion";

interface ThemeToggleProps {
  theme: "light" | "dark";
  onToggle: () => void;
}

export default function ThemeToggle({ theme, onToggle }: ThemeToggleProps) {
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="relative flex h-8 w-14 items-center rounded-full bg-slate-200 p-1 transition-colors duration-300 dark:bg-dark-surface"
    >
      {/* Sliding knob */}
      <motion.div
        layout
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
        className="flex h-6 w-6 items-center justify-center rounded-full bg-white shadow-sm dark:bg-primary"
        style={{ marginLeft: isDark ? "auto" : 0 }}
      >
        {isDark ? (
          <HiMoon className="text-sm text-white" />
        ) : (
          <HiSun className="text-sm text-amber-500" />
        )}
      </motion.div>
    </button>
  );
}
