import { getTranslations } from "next-intl/server";
import dynamic from "next/dynamic";
import type { Metadata } from "next";
import type { Locale } from "@/i18n/routing";

const PyodideRunner = dynamic(
  () => import("@/components/playground/PyodideRunner"),
  { ssr: false, loading: () => <div className="h-64 rounded-card bg-bg-surface border border-border-default animate-pulse" /> }
);

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: Locale };
}): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "playground" });
  return { title: t("title"), description: t("subtitle") };
}

const demos = [
  {
    title: "Fibonacci Serisi",
    code: `def fibonacci(n):
    a, b = 0, 1
    for _ in range(n):
        print(a, end=" ")
        a, b = b, a + b

fibonacci(15)
print()
`,
  },
  {
    title: "Basit İstatistik",
    code: `import statistics

data = [12, 45, 7, 23, 89, 34, 56, 11, 67, 3]
print(f"Ortalama:  {statistics.mean(data):.2f}")
print(f"Medyan:    {statistics.median(data)}")
print(f"Std sapma: {statistics.stdev(data):.2f}")
print(f"Min/Max:   {min(data)} / {max(data)}")
`,
  },
];

export default async function PlaygroundPage({
  params: { locale },
}: {
  params: { locale: Locale };
}) {
  const t = await getTranslations({ locale, namespace: "playground" });

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
      <header className="mb-10">
        <h1 className="font-serif text-4xl md:text-5xl text-text-primary mb-3">
          {t("title")}
        </h1>
        <p className="text-text-muted font-sans font-medium text-base">
          {t("subtitle")}
        </p>
      </header>

      <div className="flex flex-col gap-12">
        {demos.map((demo) => (
          <section key={demo.title} aria-labelledby={`demo-${demo.title}`}>
            <h2
              id={`demo-${demo.title}`}
              className="font-sans font-semibold text-sm text-text-primary mb-3"
            >
              {demo.title}
            </h2>
            <PyodideRunner initialCode={demo.code} />
          </section>
        ))}
      </div>
    </div>
  );
}
