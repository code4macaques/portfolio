/**
 * LanguageContext.tsx
 *
 * React context that provides the current locale, a translation object (t),
 * locale-aware CV data, and a toggle function to every component in the tree.
 *
 * - Default locale: "en"
 * - Persists to localStorage under the key "locale"
 * - Updates <html lang="..."> attribute on change
 */
import { createContext, useContext, useState, useEffect, useCallback, useMemo } from "react";
import type { ReactNode } from "react";
import type { Locale, Translations } from "../i18n";
import { getTranslations } from "../i18n";
import type { CVData } from "../data/cvData";
import { getCVData } from "../data/cvData";

// --- Types ---

interface LanguageContextValue {
  locale: Locale;
  t: Translations;
  cvData: CVData;
  setLocale: (locale: Locale) => void;
  toggleLocale: () => void;
}

// --- Storage helpers ---

const STORAGE_KEY = "locale";

function getStoredLocale(): Locale {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "en" || stored === "es") return stored;
  } catch {
    /* localStorage may be unavailable */
  }
  return "en";
}

// --- Context ---

const LanguageContext = createContext<LanguageContextValue | null>(null);

// --- Provider ---

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(getStoredLocale);

  const setLocale = useCallback((newLocale: Locale) => {
    setLocaleState(newLocale);
  }, []);

  const toggleLocale = useCallback(() => {
    setLocaleState((prev) => (prev === "en" ? "es" : "en"));
  }, []);

  /* Persist to localStorage and update <html lang> on change. */
  useEffect(() => {
    document.documentElement.lang = locale;
    try {
      localStorage.setItem(STORAGE_KEY, locale);
    } catch {
      /* ignore */
    }
  }, [locale]);

  const value = useMemo<LanguageContextValue>(
    () => ({
      locale,
      t: getTranslations(locale),
      cvData: getCVData(locale),
      setLocale,
      toggleLocale,
    }),
    [locale, setLocale, toggleLocale],
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

// --- Hook ---

/** Access the current language context (locale, t, cvData, toggleLocale). */
// eslint-disable-next-line react-refresh/only-export-components
export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within a <LanguageProvider>");
  }
  return ctx;
}
