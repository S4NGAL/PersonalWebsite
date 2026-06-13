import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { Post, PostFrontmatter } from "@/types/post";

const contentDir = path.join(process.cwd(), "src/content/blog");

export function getPostSlugs(locale: string): string[] {
  const dir = path.join(contentDir, locale);
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""));
}

export function getPostBySlug(slug: string, locale: string): Post | null {
  const filePath = path.join(contentDir, locale, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);

  return {
    ...(data as PostFrontmatter),
    slug,
    locale: locale as Post["locale"],
    content,
  };
}

export function getAllPosts(locale: string): Post[] {
  return getPostSlugs(locale)
    .map((slug) => getPostBySlug(slug, locale))
    .filter((p): p is Post => p !== null)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPostsByCategory(locale: string, category: string): Post[] {
  const posts = getAllPosts(locale);
  if (category === "all") return posts;
  return posts.filter((p) => p.category === category);
}
