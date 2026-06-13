import { useTranslations } from "next-intl";
import Link from "next/link";

export default function Footer() {
  const t = useTranslations("footer");
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border-subtle mt-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-text-faint text-sm font-sans font-medium">
          © {year} Yunus Mümin Aydınoğlu — {t("rights")}
        </p>

        <div className="flex items-center gap-4">
          <Link
            href="https://linkedin.com/in/yunus-aydinoglu/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-faint hover:text-accent text-sm font-sans font-medium transition-colors duration-150"
            aria-label="LinkedIn profili"
          >
            LinkedIn
          </Link>
          <Link
            href="mailto:yunusmmn.contact@gmail.com"
            className="text-text-faint hover:text-accent text-sm font-sans font-medium transition-colors duration-150"
            aria-label="E-posta gönder"
          >
            Email
          </Link>
          <span className="text-text-faint text-sm font-sans font-medium">
            {t("built_with")}
          </span>
        </div>
      </div>
    </footer>
  );
}
