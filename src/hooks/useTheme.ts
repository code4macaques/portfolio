/**
 * useTheme.ts
 *
 * Custom hook that manages light/dark theme state.
 * - Reads saved preference from localStorage on mount.
 * - Defaults to "light" if nothing is stored.
 * - Toggles the "dark" class on <html> and persists to localStorage.
 */
import { useState, useEffect, useCallback } from "react";

type Theme = "light" | "dark";

const STORAGE_KEY = "theme";

/** Read the stored theme preference (defaults to "light"). */
function getStoredTheme(): Theme {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "dark" || stored === "light") return stored;
  } catch {
    /* localStorage may be unavailable */
  }
  return "light";
}

export default function useTheme() {
  const [theme, setTheme] = useState<Theme>(getStoredTheme);

  /* Apply the class to <html> and save to localStorage whenever theme changes. */
  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch {
      /* ignore write failures */
    }
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  }, []);

  return { theme, toggleTheme } as const;
}
