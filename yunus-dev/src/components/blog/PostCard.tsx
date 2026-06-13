import Link from "next/link";
import { useLocale } from "next-intl";
import Badge from "@/components/ui/Badge";
import Tag from "@/components/ui/Tag";
import type { Post } from "@/types/post";
import { routes } from "@/lib/navigation";

interface PostCardProps {
  post: Post;
}

const categoryVariant: Record<string, "accent" | "muted"> = {
  "vaka-calismasi": "accent",
  teknik:           "muted",
  deneyim:          "muted",
};

export default function PostCard({ post }: PostCardProps) {
  const locale = useLocale();

  return (
    <article>
      <Link
        href={`/${locale}${routes.post(post.slug)}`}
        className="group block rounded-card bg-bg-surface border border-border-default p-5 hover:border-accent transition-colors duration-150"
        aria-label={post.title}
      >
        <div className="flex items-start justify-between gap-4 mb-3">
          <Badge variant={categoryVariant[post.category] ?? "muted"}>
            {post.category}
          </Badge>
          <time
            dateTime={post.date}
            className="text-xs font-sans font-medium text-text-faint shrink-0"
          >
            {new Date(post.date).toLocaleDateString(locale, {
              day: "numeric",
              month: "short",
              year: "numeric",
            })}
          </time>
        </div>

        <h2 className="font-serif text-xl text-text-primary mb-2 group-hover:text-accent transition-colors duration-150">
          {post.title}
        </h2>
        <p className="text-sm font-sans font-medium text-text-muted leading-relaxed mb-4 line-clamp-2">
          {post.description}
        </p>

        <div className="flex flex-wrap gap-1.5">
          {post.tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>
      </Link>
    </article>
  );
}
