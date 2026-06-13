export type PostCategory = "vaka-calismasi" | "teknik" | "deneyim";

export interface PostFrontmatter {
  title: string;
  description: string;
  date: string;
  category: PostCategory;
  tags: string[];
  locale: "tr" | "en";
  slug: string;
  coverImage?: string;
}

export interface Post extends PostFrontmatter {
  content: string;
}
