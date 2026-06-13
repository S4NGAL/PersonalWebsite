import { useTranslations } from "next-intl";
import { projects } from "@/lib/projects";
import ProjectCard from "@/components/projects/ProjectCard";
import Button from "@/components/ui/Button";
import { routes } from "@/lib/navigation";

export default function FeaturedProjects() {
  const t = useTranslations("projects");
  const featured = projects.slice(0, 3);

  return (
    <section
      aria-labelledby="featured-projects-heading"
      className="max-w-5xl mx-auto px-4 sm:px-6 py-16"
    >
      <div className="flex items-end justify-between mb-8 gap-4">
        <div>
          <h2
            id="featured-projects-heading"
            className="font-serif text-3xl text-text-primary"
          >
            {t("title")}
          </h2>
          <p className="text-text-muted font-sans font-medium text-sm mt-1">
            {t("subtitle")}
          </p>
        </div>
        <Button href={routes.projects} variant="ghost" size="sm" className="shrink-0">
          Tümünü gör →
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {featured.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
