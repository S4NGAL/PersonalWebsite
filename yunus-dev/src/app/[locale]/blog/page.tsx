import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import type { Locale } from "@/i18n/routing";
import { getAllPosts } from "@/lib/mdx";
import PostGrid from "@/components/blog/PostGrid";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: Locale };
}): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "blog" });
  return { title: t("title"), description: t("subtitle") };
}

export default async function BlogPage({
  params: { locale },
}: {
  params: { locale: Locale };
}) {
  const t = await getTranslations({ locale, namespace: "blog" });
  const posts = getAllPosts(locale);

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

      <PostGrid posts={posts} />
    </div>
  );
}
