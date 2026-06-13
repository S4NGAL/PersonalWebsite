import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import type { Locale } from "@/i18n/routing";

interface UseItem {
  name: string;
  description: { tr: string; en: string };
}

interface UseCategory {
  title: { tr: string; en: string };
  items: UseItem[];
}

const useCategories: UseCategory[] = [
  {
    title: { tr: "Geliştirme Ortamı", en: "Development Environment" },
    items: [
      { name: "VS Code",          description: { tr: "Ana editör",                     en: "Primary editor"               } },
      { name: "CachyOS / Linux",  description: { tr: "Günlük sürücü işletim sistemi",  en: "Daily driver OS"              } },
      { name: "Fish Shell",       description: { tr: "Terminal kabuğu",                en: "Terminal shell"               } },
      { name: "Git",              description: { tr: "Versiyon kontrol",               en: "Version control"             } },
    ],
  },
  {
    title: { tr: "Diller & Araçlar", en: "Languages & Tools" },
    items: [
      { name: "Python",       description: { tr: "AI/ML geliştirme, scripting",       en: "AI/ML development, scripting"  } },
      { name: "Flutter",      description: { tr: "Mobil uygulama geliştirme",         en: "Mobile app development"        } },
      { name: "PHP / Laravel",description: { tr: "Backend API geliştirme",            en: "Backend API development"       } },
      { name: "Next.js",      description: { tr: "Web uygulamaları",                  en: "Web applications"              } },
      { name: "FastAPI",      description: { tr: "Python REST API'leri",              en: "Python REST APIs"              } },
      { name: "PostgreSQL",   description: { tr: "İlişkisel veritabanı",              en: "Relational database"           } },
    ],
  },
  {
    title: { tr: "AI / ML", en: "AI / ML" },
    items: [
      { name: "PyTorch",         description: { tr: "Derin öğrenme framework'ü",       en: "Deep learning framework"       } },
      { name: "Anthropic API",   description: { tr: "LLM entegrasyonu (Claude)",       en: "LLM integration (Claude)"     } },
      { name: "LangChain",       description: { tr: "LLM zinciri ve RAG",              en: "LLM chaining and RAG"          } },
      { name: "Pandas / NumPy",  description: { tr: "Veri işleme",                     en: "Data processing"               } },
    ],
  },
  {
    title: { tr: "Tasarım", en: "Design" },
    items: [
      { name: "Figma",    description: { tr: "UI/UX tasarım",   en: "UI/UX design"   } },
      { name: "Unity",    description: { tr: "Oyun geliştirme", en: "Game dev"       } },
    ],
  },
];

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: Locale };
}): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "uses" });
  return { title: t("title"), description: t("subtitle") };
}

export default async function UsesPage({
  params: { locale },
}: {
  params: { locale: Locale };
}) {
  const t = await getTranslations({ locale, namespace: "uses" });
  const lang = locale as "tr" | "en";

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
      <header className="mb-12">
        <h1 className="font-serif text-4xl md:text-5xl text-text-primary mb-3">
          {t("title")}
        </h1>
        <p className="text-text-muted font-sans font-medium text-base">
          {t("subtitle")}
        </p>
      </header>

      <div className="flex flex-col gap-12">
        {useCategories.map((cat) => (
          <section key={cat.title.en} aria-labelledby={`uses-${cat.title.en.replace(/\s/g, "-").toLowerCase()}`}>
            <h2
              id={`uses-${cat.title.en.replace(/\s/g, "-").toLowerCase()}`}
              className="font-sans font-semibold text-xs text-text-faint uppercase tracking-widest mb-4"
            >
              {cat.title[lang]}
            </h2>
            <ul className="flex flex-col gap-3" role="list">
              {cat.items.map((item) => (
                <li
                  key={item.name}
                  className="flex items-baseline justify-between gap-4 py-2.5 border-b border-border-subtle last:border-0"
                >
                  <span className="font-sans font-semibold text-text-primary text-sm">
                    {item.name}
                  </span>
                  <span className="font-sans font-medium text-text-muted text-sm text-right">
                    {item.description[lang]}
                  </span>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}
