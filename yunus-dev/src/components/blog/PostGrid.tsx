"use client";

import { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import PostCard from "./PostCard";
import type { Post, PostCategory } from "@/types/post";

type FilterKey = "all" | PostCategory;

interface PostGridProps {
  posts: Post[];
}

export default function PostGrid({ posts }: PostGridProps) {
  const [filter, setFilter] = useState<FilterKey>("all");

  const filtered =
    filter === "all" ? posts : posts.filter((p) => p.category === filter);

  return (
    <div className="flex flex-col gap-8">
      <CategoryFilter active={filter} onChange={setFilter} />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filtered.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-text-muted font-sans font-medium text-sm py-12 text-center">
          Bu kategoride yazı bulunamadı.
        </p>
      )}
    </div>
  );
}
