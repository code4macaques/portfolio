/**
 * Contact.tsx
 *
 * Contact section with:
 * - Left column: contact details + social profile links
 * - Right column: contact form powered by EmailJS + Google reCAPTCHA v2
 *
 * EmailJS credentials and reCAPTCHA site key are loaded from environment
 * variables (.env) so they are never hardcoded in source.
 *
 * The EmailJS template expects these variables:
 *   {{title}}   -> Subject field
 *   {{name}}    -> Full Name field
 *   {{email}}   -> Email field
 *   {{message}} -> Message textarea
 *
 * Validation rules:
 *   - All fields are required
 *   - Email must match a standard email pattern
 *   - Phone must contain only digits, spaces, dashes, parens, and optional leading +
 *     and be between 7-15 digits long
 *   - reCAPTCHA must be completed before submitting
 */
import { useRef, useState } from "react";
import type { FormEvent } from "react";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";
import { motion, AnimatePresence } from "framer-motion";
import { HiMail, HiLocationMarker, HiPhone, HiCheckCircle, HiExclamationCircle } from "react-icons/hi";
import { FaLinkedin, FaGithub, FaGlobe } from "react-icons/fa";
import SectionTitle from "../components/SectionTitle";
import FadeIn from "../components/FadeIn";
import { useLanguage } from "../context/LanguageContext";
import type { Translations } from "../i18n";

/** Possible states the form can be in. */
type FormStatus = "idle" | "sending" | "success" | "error";

/** Per-field error messages keyed by field name. */
type FieldErrors = Partial<Record<string, string>>;

// --- Validation helpers ---

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Accepts formats like: +52 664 764 4912, (664) 764-4912, 6647644912
 * Must contain between 7 and 15 actual digits.
 */
function isValidPhone(value: string): boolean {
  const cleaned = value.replace(/[\s\-().+]/g, "");
  return /^\d{7,15}$/.test(cleaned);
}

/** Run all validations and return a map of field -> error message. */
function validateForm(form: HTMLFormElement, errMsgs: Translations["contact"]["errors"]): FieldErrors {
  const errors: FieldErrors = {};
  const get = (name: string) => (form.elements.namedItem(name) as HTMLInputElement | HTMLTextAreaElement)?.value.trim() ?? "";

  if (!get("name")) errors.name = errMsgs.nameRequired;
  if (!get("email")) {
    errors.email = errMsgs.emailRequired;
  } else if (!EMAIL_RE.test(get("email"))) {
    errors.email = errMsgs.emailInvalid;
  }
  if (!get("phone")) {
    errors.phone = errMsgs.phoneRequired;
  } else if (!isValidPhone(get("phone"))) {
    errors.phone = errMsgs.phoneInvalid;
  }
  if (!get("title")) errors.title = errMsgs.subjectRequired;
  if (!get("message")) errors.message = errMsgs.messageRequired;

  return errors;
}

// --- Main component ---

export default function Contact() {
  const { t, cvData } = useLanguage();
  const { contact } = cvData;
  const formRef = useRef<HTMLFormElement>(null);
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const [status, setStatus] = useState<FormStatus>("idle");
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const [errors, setErrors] = useState<FieldErrors>({});

  /** Validate fields + captcha, then submit via EmailJS. */
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // 1. Field validation
    const fieldErrors = validateForm(e.currentTarget, t.contact.errors);
    if (!captchaToken) {
      fieldErrors.captcha = t.contact.errors.captchaRequired;
    }
    if (Object.keys(fieldErrors).length > 0) {
      setErrors(fieldErrors);
      return;
    }

    // Clear previous errors and start sending
    setErrors({});
    setStatus("sending");

    // 2. Send via EmailJS
    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        e.currentTarget,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      )
      .then(() => {
        setStatus("success");
        formRef.current?.reset();
        recaptchaRef.current?.reset();
        setCaptchaToken(null);
      })
      .catch(() => {
        setStatus("error");
      });
  };

  /** Reset the form to its initial state so the user can try again. */
  const handleReset = () => {
    setStatus("idle");
    setErrors({});
    setCaptchaToken(null);
    recaptchaRef.current?.reset();
  };

  const isSending = status === "sending";

  return (
    <section id="contact" className="bg-white px-6 py-24 dark:bg-dark-bg">
      <div className="mx-auto max-w-7xl">
        <SectionTitle label={t.contact.label} title={t.contact.title} />

        <div className="grid gap-12 lg:grid-cols-5">
          {/* -- Left: contact details -- */}
          <FadeIn className="lg:col-span-2">
            <div className="space-y-10">
              <div>
                <h4 className="mb-4 text-xl font-bold text-text-dark dark:text-dark-text">{t.contact.detailsHeading}</h4>
                <p className="mb-8 leading-relaxed text-text-muted dark:text-dark-text-muted">
                  {t.contact.detailsIntro}
                </p>

                <div className="space-y-6">
                  <ContactDetail icon={<HiMail />} text={contact.email} />
                  <ContactDetail icon={<HiPhone />} text={contact.phone} />
                  <ContactDetail icon={<HiLocationMarker />} text={contact.location} />
                </div>
              </div>

              {/* Social links */}
              <div>
                <h4 className="mb-4 text-xl font-bold text-text-dark dark:text-dark-text">{t.contact.socialHeading}</h4>
                <div className="flex gap-4">
                  <SocialLink href="https://www.linkedin.com/in/jesusalejandrotiradosanchez/" label="LinkedIn" icon={<FaLinkedin />} />
                  <SocialLink href="https://github.com/code4macaques" label="GitHub" icon={<FaGithub />} />
                  <SocialLink href="#" label="Portfolio" icon={<FaGlobe />} />
                </div>
              </div>
            </div>
          </FadeIn>

          {/* -- Right: contact form -- */}
          <FadeIn delay={0.15} className="lg:col-span-3">
            <AnimatePresence mode="wait">
              {status === "success" ? (
                <SuccessMessage t={t} onReset={handleReset} />
              ) : (
                <motion.form
                  key="form"
                  ref={formRef}
                  onSubmit={handleSubmit}
                  noValidate
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-5 rounded-2xl border border-slate-100 bg-slate-50 p-8 shadow-sm dark:border-dark-border dark:bg-dark-surface"
                >
                  {/* Row 1: Name + Email */}
                  <div className="grid gap-5 sm:grid-cols-2">
                    <FormField name="name" label={t.contact.form.fullName} type="text" placeholder={t.contact.form.placeholderName} disabled={isSending} error={errors.name} />
                    <FormField name="email" label={t.contact.form.emailAddress} type="email" placeholder={t.contact.form.placeholderEmail} disabled={isSending} error={errors.email} />
                  </div>

                  {/* Row 2: Phone + Subject */}
                  <div className="grid gap-5 sm:grid-cols-2">
                    <FormField name="phone" label={t.contact.form.phoneNumber} type="tel" placeholder={t.contact.form.placeholderPhone} disabled={isSending} error={errors.phone} />
                    <FormField name="title" label={t.contact.form.subject} type="text" placeholder={t.contact.form.placeholderSubject} disabled={isSending} error={errors.title} />
                  </div>

                  {/* Message */}
                  <div className="space-y-1">
                    <label className="text-sm font-bold text-text-dark dark:text-dark-text">{t.contact.form.message}</label>
                    <textarea
                      name="message"
                      className={`w-full rounded-lg border bg-white px-4 py-3 text-sm transition-all focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none disabled:cursor-not-allowed disabled:opacity-60 dark:bg-dark-bg dark:text-dark-text dark:placeholder-dark-text-muted ${errors.message ? "border-red-400 dark:border-red-500" : "border-slate-200 dark:border-dark-border"}`}
                      placeholder={t.contact.form.placeholderMessage}
                      rows={5}
                      maxLength={500}
                      required
                      disabled={isSending}
                    />
                    {errors.message && <FieldError message={errors.message} />}
                  </div>

                  {/* reCAPTCHA widget */}
                  <div className="space-y-1">
                    <ReCAPTCHA
                      ref={recaptchaRef}
                      sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
                      onChange={(token) => {
                        setCaptchaToken(token);
                        if (token) setErrors(({ captcha: _unused, ...rest }) => { void _unused; return rest; });
                      }}
                      onExpired={() => setCaptchaToken(null)}
                    />
                    {errors.captcha && <FieldError message={errors.captcha} />}
                  </div>

                  {/* Global error banner */}
                  <AnimatePresence>
                    {status === "error" && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="flex items-center gap-3 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700 dark:border-red-800 dark:bg-red-950/30 dark:text-red-400"
                      >
                        <HiExclamationCircle className="shrink-0 text-lg" />
                        {t.contact.errors.generic}
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Submit button */}
                  <button
                    type="submit"
                    disabled={isSending}
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary py-4 text-lg font-bold text-white shadow-lg shadow-blue-200 transition-all hover:-translate-y-0.5 hover:bg-primary/90 hover:shadow-blue-300 disabled:pointer-events-none disabled:opacity-70 dark:shadow-blue-900/30 dark:hover:shadow-blue-800/40"
                  >
                    {isSending ? (
                      <>
                        <Spinner />
                        {t.contact.form.sending}
                      </>
                    ) : (
                      t.contact.form.send
                    )}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

/* --- Helper sub-components (private to this file) --- */

/** Inline field error text displayed beneath an input. */
function FieldError({ message }: { message: string }) {
  return (
    <motion.p
      initial={{ opacity: 0, y: -4 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-xs font-medium text-red-500"
    >
      {message}
    </motion.p>
  );
}

/** Animated success card shown after the email is sent. */
function SuccessMessage({ t, onReset }: { t: Translations; onReset: () => void }) {
  return (
    <motion.div
      key="success"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="flex h-full flex-col items-center justify-center gap-4 rounded-2xl border border-green-200 bg-green-50 p-12 text-center dark:border-green-800 dark:bg-green-950/30"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 12, delay: 0.15 }}
      >
        <HiCheckCircle className="text-6xl text-green-500" />
      </motion.div>

      <h4 className="text-2xl font-bold text-green-800 dark:text-green-400">{t.contact.success.title}</h4>
      <p className="max-w-sm text-green-700 dark:text-green-300">
        {t.contact.success.text}
      </p>

      <button
        type="button"
        onClick={onReset}
        className="mt-4 rounded-lg border border-green-300 bg-white px-6 py-2 text-sm font-semibold text-green-700 transition-all hover:bg-green-100 dark:border-green-700 dark:bg-dark-surface dark:text-green-400 dark:hover:bg-dark-surface-hover"
      >
        {t.contact.success.another}
      </button>
    </motion.div>
  );
}

/** Tiny CSS spinner for the "Sending..." state. */
function Spinner() {
  return (
    <svg
      className="h-5 w-5 animate-spin text-white"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
    </svg>
  );
}

function ContactDetail({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex items-center gap-5">
      <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-blue-100 bg-blue-50 text-xl text-primary dark:border-blue-900 dark:bg-blue-950/50">
        {icon}
      </div>
      <span className="font-medium dark:text-dark-text">{text}</span>
    </div>
  );
}

function SocialLink({
  href,
  label,
  icon,
}: {
  href: string;
  label: string;
  icon: React.ReactNode;
}) {
  return (
    <a
      href={href}
      title={label}
      target={href === "#" ? "_self" : "_blank"}
      className="flex h-12 w-12 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-xl text-slate-600 shadow-sm transition-all hover:border-primary hover:bg-primary hover:text-white dark:border-dark-border dark:bg-dark-surface dark:text-dark-text-muted dark:hover:border-primary dark:hover:bg-primary dark:hover:text-white"
    >
      {icon}
    </a>
  );
}

function FormField({
  name,
  label,
  type,
  placeholder,
  disabled,
  error,
}: {
  name: string;
  label: string;
  type: string;
  placeholder: string;
  disabled: boolean;
  error?: string;
}) {
  return (
    <div className="space-y-1">
      <label className="text-sm font-bold text-text-dark dark:text-dark-text">{label}</label>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        required
        maxLength={200}
        disabled={disabled}
        className={`w-full rounded-lg border bg-white px-4 py-3 text-sm transition-all focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none disabled:cursor-not-allowed disabled:opacity-60 dark:bg-dark-bg dark:text-dark-text dark:placeholder-dark-text-muted ${error ? "border-red-400 dark:border-red-500" : "border-slate-200 dark:border-dark-border"}`}
      />
      {error && <FieldError message={error} />}
    </div>
  );
}
