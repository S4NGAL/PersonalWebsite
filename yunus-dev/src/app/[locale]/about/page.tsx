import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import type { Locale } from "@/i18n/routing";
import Timeline from "@/components/about/Timeline";
import CVDownload from "@/components/about/CVDownload";
import Tag from "@/components/ui/Tag";

const skills = [
  "Python", "Flutter", "PHP / Laravel", "C#", "Java", "C",
  "LLMs", "RAG", "Machine Learning", "NLP", "Deep Learning",
  "PyTorch", "Pandas", "NumPy", "Unity", "Next.js", "FastAPI",
];

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: Locale };
}): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "about" });
  return { title: t("title"), description: t("subtitle") };
}

export default async function AboutPage({
  params: { locale },
}: {
  params: { locale: Locale };
}) {
  const t = await getTranslations({ locale, namespace: "about" });

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
      <header className="mb-12 flex items-start justify-between gap-6 flex-wrap">
        <div>
          <h1 className="font-serif text-4xl md:text-5xl text-text-primary mb-3">
            {t("title")}
          </h1>
          <p className="text-text-muted font-sans font-medium text-base">
            {t("subtitle")}
          </p>
        </div>
        <CVDownload />
      </header>

      {/* Experience & Education */}
      <section aria-labelledby="experience-heading" className="mb-14">
        <h2
          id="experience-heading"
          className="font-sans font-semibold text-xs text-text-faint uppercase tracking-widest mb-6"
        >
          {t("experience")} & {t("education")}
        </h2>
        <Timeline />
      </section>

      {/* Skills */}
      <section aria-labelledby="skills-heading">
        <h2
          id="skills-heading"
          className="font-sans font-semibold text-xs text-text-faint uppercase tracking-widest mb-4"
        >
          {t("skills")}
        </h2>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <Tag key={skill}>{skill}</Tag>
          ))}
        </div>
      </section>
    </div>
  );
}
