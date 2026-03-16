/**
 * Footer.tsx
 *
 * Minimal footer with branding, copyright, and placeholder legal links.
 */
import { HiCode } from "react-icons/hi";
import { useLanguage } from "../context/LanguageContext";

export default function Footer() {
  const { t, cvData } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-100 bg-white py-12 dark:border-dark-border dark:bg-dark-bg">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          {/* Branding */}
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-white">
              <HiCode className="text-xl" />
            </div>
            <span className="text-xl font-bold text-text-dark dark:text-dark-text">
              {cvData.firstName}
            </span>
          </div>

          {/* Copyright */}
          <p className="text-sm text-text-muted dark:text-dark-text-muted">
            {t.footer.copyright(year, cvData.fullName)}
          </p>

          {/* Legal links */}
          <div className="flex gap-8 text-sm font-medium">
            <a
              href="#"
              className="text-text-muted transition-colors hover:text-primary dark:text-dark-text-muted dark:hover:text-primary"
            >
              {t.footer.privacy}
            </a>
            <a
              href="#"
              className="text-text-muted transition-colors hover:text-primary dark:text-dark-text-muted dark:hover:text-primary"
            >
              {t.footer.terms}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
