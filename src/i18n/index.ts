/**
 * i18n/index.ts
 *
 * Barrel file that exposes translation maps, the Locale type,
 * and a helper to retrieve the correct translation object.
 */
import en from "./en";
import es from "./es";
import type { Translations } from "./types";

export type Locale = "en" | "es";

const translations: Record<Locale, Translations> = { en, es };

/** Return the translation object for the given locale. */
export function getTranslations(locale: Locale): Translations {
  return translations[locale];
}

export type { Translations };
