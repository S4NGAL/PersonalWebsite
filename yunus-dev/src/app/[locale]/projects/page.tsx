import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import type { Locale } from "@/i18n/routing";
import ProjectGrid from "@/components/projects/ProjectGrid";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: Locale };
}): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "projects" });
  return {
    title: t("title"),
    description: t("subtitle"),
  };
}

export default async function ProjectsPage({
  params: { locale },
}: {
  params: { locale: Locale };
}) {
  const t = await getTranslations({ locale, namespace: "projects" });

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16">
      <header className="mb-10">
        <h1 className="font-serif text-4xl md:text-5xl text-text-primary mb-3">
          {t("title")}
        </h1>
        <p className="text-text-muted font-sans font-medium text-base">
          {t("subtitle")}
        </p>
      </header>

      <ProjectGrid />
    </div>
  );
}
