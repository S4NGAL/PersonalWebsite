import { useTranslations } from "next-intl";
import Button from "@/components/ui/Button";

export default function CVDownload() {
  const t = useTranslations("about");

  return (
    <Button href="/cv.pdf" external variant="secondary" size="md">
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
        <path
          d="M8 2v8M4 7l4 4 4-4M2 12h12"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      {t("download_cv")}
    </Button>
  );
}
