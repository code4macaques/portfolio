/**
 * Skills.tsx
 *
 * Technical expertise section with a 4-column grid of skill categories.
 * Each card displays an icon, category title, and list of technologies.
 * Icons are mapped from cvData's icon identifier to react-icons components.
 */
import { FaDatabase, FaCloud, FaTerminal, FaDesktop } from "react-icons/fa";
import type { IconType } from "react-icons";
import SectionTitle from "../components/SectionTitle";
import FadeIn from "../components/FadeIn";
import { useLanguage } from "../context/LanguageContext";

/** Map icon identifier strings from cvData to actual icon components. */
const ICON_MAP: Record<string, IconType> = {
  database: FaDatabase,
  devices: FaDesktop,
  cloud: FaCloud,
  terminal: FaTerminal,
};

export default function Skills() {
  const { t, cvData } = useLanguage();

  return (
    <section id="skills" className="bg-white py-24 dark:bg-dark-bg">
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle label={t.skills.label} title={t.skills.title} />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {cvData.skills.map((category, idx) => {
            const Icon = ICON_MAP[category.icon] ?? FaDatabase;
            return (
              <FadeIn key={category.title} delay={idx * 0.1}>
                <div className="rounded-2xl border border-slate-100 bg-slate-50/50 p-8 transition-all hover:border-primary/30 hover:bg-white hover:shadow-lg dark:border-dark-border dark:bg-dark-surface dark:hover:border-primary/40 dark:hover:bg-dark-surface-hover dark:hover:shadow-lg">
                  <div className="mb-6 text-primary">
                    <Icon className="text-4xl" />
                  </div>
                  <h4 className="mb-4 text-xl font-bold text-text-dark dark:text-dark-text">
                    {category.title}
                  </h4>
                  <ul className="space-y-3 text-text-muted dark:text-dark-text-muted">
                    {category.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
