import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import { getAllPosts } from "@/lib/mdx";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { routes } from "@/lib/navigation";

const categoryBadge: Record<string, "accent" | "muted"> = {
  "vaka-calismasi": "accent",
  teknik:           "muted",
  deneyim:          "muted",
};

export default function BlogPreview() {
  const t = useTranslations("blog");
  const locale = useLocale();
  const posts = getAllPosts(locale).slice(0, 3);

  if (posts.length === 0) return null;

  return (
    <section
      aria-labelledby="blog-preview-heading"
      className="max-w-5xl mx-auto px-4 sm:px-6 py-16 border-t border-border-subtle"
    >
      <div className="flex items-end justify-between mb-8 gap-4">
        <div>
          <h2
            id="blog-preview-heading"
            className="font-serif text-3xl text-text-primary"
          >
            {t("title")}
          </h2>
          <p className="text-text-muted font-sans font-medium text-sm mt-1">
            {t("subtitle")}
          </p>
        </div>
        <Button href={routes.blog} variant="ghost" size="sm" className="shrink-0">
          {t("read_more")} →
        </Button>
      </div>

      <ul className="flex flex-col gap-3" role="list">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link
              href={`/${locale}${routes.post(post.slug)}`}
              className="group flex items-start justify-between gap-4 rounded-card p-4 bg-bg-surface border border-border-default hover:border-accent transition-colors duration-150"
            >
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <Badge variant={categoryBadge[post.category] ?? "muted"}>
                    {post.category}
                  </Badge>
                </div>
                <h3 className="font-sans font-semibold text-text-primary text-sm leading-snug truncate group-hover:text-accent transition-colors duration-150">
                  {post.title}
                </h3>
              </div>
              <time
                dateTime={post.date}
                className="text-xs font-sans font-medium text-text-faint shrink-0 mt-0.5"
              >
                {new Date(post.date).toLocaleDateString(locale, {
                  month: "short",
                  year: "numeric",
                })}
              </time>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
