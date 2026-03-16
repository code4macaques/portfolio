/**
 * Hero.tsx
 *
 * Full-viewport hero section with:
 * - Dot-grid background pattern
 * - Availability badge
 * - Name + title
 * - Professional summary
 * - CTA buttons (Download CV / Get In Touch)
 */
import { motion } from "framer-motion";
import { HiDownload, HiMail } from "react-icons/hi";
import { useLanguage } from "../context/LanguageContext";

export default function Hero() {
  const { t, cvData } = useLanguage();
  const { firstName, lastName, summary } = cvData;
  const yearsExp = new Date().getFullYear() - 2016;

  return (
    <section
      id="home"
      className="relative flex min-h-[85vh] items-center justify-center overflow-hidden px-6 py-20"
    >
      {/* -- Background pattern -- */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 to-white dark:from-dark-bg dark:to-dark-bg" />
        <div
          className="h-full w-full opacity-[0.03] dark:opacity-[0.06]"
          style={{
            backgroundImage: "radial-gradient(#2563eb 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="mx-auto max-w-4xl text-center">
        {/* Availability badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 inline-flex items-center rounded-full border border-blue-100 bg-blue-50 px-4 py-1.5 text-sm font-semibold text-primary dark:border-blue-900 dark:bg-blue-950/50"
        >
          <span className="mr-2 flex h-2 w-2 animate-pulse rounded-full bg-primary" />
          {t.hero.available}
        </motion.div>

        {/* Name */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-4 text-5xl font-extrabold tracking-tight text-text-dark md:text-7xl dark:text-dark-text"
        >
          {firstName} <span className="text-primary">{lastName}</span>
        </motion.h2>

        {/* Title + summary */}
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mb-10 max-w-3xl text-xl font-medium leading-relaxed text-text-muted md:text-2xl dark:text-dark-text-muted"
        >
          {t.hero.tagline(yearsExp)}
        </motion.h3>

        {/* About blurb (hidden on very small screens, visible on md+) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mx-auto mb-10 hidden max-w-2xl md:block"
        >
          {summary.map((paragraph, i) => (
            <p key={i} className="mb-3 text-base leading-relaxed text-text-muted last:mb-0 dark:text-dark-text-muted">
              {paragraph}
            </p>
          ))}
        </motion.div>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <a
            href="/cv_alejandro_tirado.pdf"
            download="cv_alejandro_tirado.pdf"
            className="flex items-center gap-2 rounded-xl bg-primary px-8 py-4 text-lg font-bold text-white shadow-lg shadow-blue-200 transition-all hover:-translate-y-0.5 hover:shadow-blue-300 dark:shadow-blue-900/30 dark:hover:shadow-blue-800/40"
          >
            <HiDownload className="text-xl" />
            {t.hero.downloadCv}
          </a>
          <a
            href="#contact"
            className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-8 py-4 text-lg font-bold text-text-dark shadow-sm transition-all hover:border-slate-300 hover:bg-slate-50 dark:border-dark-border dark:bg-dark-surface dark:text-dark-text dark:hover:border-slate-500 dark:hover:bg-dark-surface-hover"
          >
            <HiMail className="text-xl" />
            {t.hero.getInTouch}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
