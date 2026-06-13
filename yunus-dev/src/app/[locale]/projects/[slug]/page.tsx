import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import type { Locale } from "@/i18n/routing";
import { getProjectBySlug, projects } from "@/lib/projects";
import Badge from "@/components/ui/Badge";
import Tag from "@/components/ui/Tag";
import Button from "@/components/ui/Button";
import { routes } from "@/lib/navigation";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

const badgeLabelMap = {
  graduation:  { tr: "Bitirme Projesi", en: "Grad Project"  },
  teknofest:   { tr: "Teknofest 8.",   en: "Teknofest 8th" },
  gamejam:     { tr: "Game Jam",       en: "Game Jam"       },
  in_progress: { tr: "Geliştiriliyor", en: "In Progress"   },
};

export async function generateMetadata({
  params: { slug, locale },
}: {
  params: { slug: string; locale: Locale };
}): Promise<Metadata> {
  const project = getProjectBySlug(slug);
  if (!project) return {};
  const t = await getTranslations({ locale, namespace: "projects" });
  return {
    title: project.titleKey,
    description: t(project.descriptionKey as Parameters<typeof t>[0]),
  };
}

export default async function ProjectDetailPage({
  params: { slug, locale },
}: {
  params: { slug: string; locale: Locale };
}) {
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const t = await getTranslations({ locale, namespace: "projects" });
  const badge = badgeLabelMap[project.badgeKey];

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
      <Button href={routes.projects} variant="ghost" size="sm" className="mb-8 -ml-2">
        ← {t("title")}
      </Button>

      <header className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <span className="font-mono text-xs text-text-faint">{project.number}</span>
          <Badge variant={project.badgeKey === "gamejam" ? "muted" : "accent"}>
            {locale === "tr" ? badge.tr : badge.en}
          </Badge>
        </div>

        <h1 className="font-serif text-4xl md:text-5xl text-text-primary mb-4">
          {project.titleKey}
        </h1>

        <p className="text-base font-sans font-medium text-text-muted leading-relaxed mb-6">
          {t(project.descriptionKey as Parameters<typeof t>[0])}
        </p>

        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>

        {/* Links */}
        <div className="flex flex-wrap gap-3">
          {project.blogSlug && (
            <Button href={`/${locale}${routes.post(project.blogSlug)}`}>
              {t("case_study")} →
            </Button>
          )}
          {project.externalUrl && (
            <Button href={project.externalUrl} variant="secondary" external>
              {t("view_on")} itch.io ↗
            </Button>
          )}
          {project.status === "coming_soon" && (
            <span className="text-sm font-sans font-medium text-text-faint italic">
              {t("coming_soon")}
            </span>
          )}
        </div>
      </header>
    </div>
  );
}
