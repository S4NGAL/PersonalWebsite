import { notFound } from "next/navigation";
import type { Metadata } from "next";
import type { Locale } from "@/i18n/routing";
import { getPostBySlug, getPostSlugs } from "@/lib/mdx";
import { MDXRemote } from "next-mdx-remote/rsc";
import { mdxComponents } from "@/components/blog/MDXComponents";
import Badge from "@/components/ui/Badge";
import Tag from "@/components/ui/Tag";
import Button from "@/components/ui/Button";
import { routes } from "@/lib/navigation";

export function generateStaticParams({
  params: { locale },
}: {
  params: { locale: Locale };
}) {
  return getPostSlugs(locale).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params: { slug, locale },
}: {
  params: { slug: string; locale: Locale };
}): Promise<Metadata> {
  const post = getPostBySlug(slug, locale);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
    },
  };
}

const categoryVariant: Record<string, "accent" | "muted"> = {
  "vaka-calismasi": "accent",
  teknik:           "muted",
  deneyim:          "muted",
};

export default function BlogPostPage({
  params: { slug, locale },
}: {
  params: { slug: string; locale: Locale };
}) {
  const post = getPostBySlug(slug, locale);
  if (!post) notFound();

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
      <Button href={`/${locale}${routes.blog}`} variant="ghost" size="sm" className="mb-8 -ml-2">
        ← Blog
      </Button>

      <header className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <Badge variant={categoryVariant[post.category] ?? "muted"}>
            {post.category}
          </Badge>
          <time
            dateTime={post.date}
            className="text-xs font-sans font-medium text-text-faint"
          >
            {new Date(post.date).toLocaleDateString(locale, {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </time>
        </div>

        <h1 className="font-serif text-4xl md:text-5xl text-text-primary leading-tight mb-4">
          {post.title}
        </h1>
        <p className="text-lg font-sans font-medium text-text-muted leading-relaxed mb-6">
          {post.description}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {post.tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>
      </header>

      <hr className="border-border-subtle mb-10" />

      <article className="prose max-w-none">
        <MDXRemote source={post.content} components={mdxComponents} />
      </article>
    </div>
  );
}
