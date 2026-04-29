"use client";

import { useState } from "react";
import { BlogArticle, BlogCategory, CATEGORY_LABELS } from "@/data/blog/types";
import BlogCard from "./BlogCard";

interface BlogGridProps {
  articles: BlogArticle[];
}

const ALL = "all" as const;
type FilterValue = BlogCategory | typeof ALL;

export default function BlogGrid({ articles }: BlogGridProps) {
  const [activeCategory, setActiveCategory] = useState<FilterValue>(ALL);

  const categories = Array.from(
    new Set(articles.map((a) => a.category)),
  ) as BlogCategory[];

  const filtered =
    activeCategory === ALL
      ? articles
      : articles.filter((a) => a.category === activeCategory);

  return (
    <div>
      {/* Category filter */}
      <div className="mb-10 flex flex-wrap gap-3">
        <button
          onClick={() => setActiveCategory(ALL)}
          className={`rounded-full px-5 py-2 font-inter text-sm font-semibold transition-colors ${
            activeCategory === ALL
              ? "bg-primary text-white"
              : "bg-gray-2 text-dark-3 hover:bg-primary/10 hover:text-primary dark:bg-gray-dark dark:text-dark-4"
          }`}
        >
          Todos ({articles.length})
        </button>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`rounded-full px-5 py-2 font-inter text-sm font-semibold transition-colors ${
              activeCategory === cat
                ? "bg-primary text-white"
                : "bg-gray-2 text-dark-3 hover:bg-primary/10 hover:text-primary dark:bg-gray-dark dark:text-dark-4"
            }`}
          >
            {CATEGORY_LABELS[cat]} ({articles.filter((a) => a.category === cat).length})
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 gap-7.5 md:grid-cols-2 xl:grid-cols-3">
        {filtered.map((article) => (
          <BlogCard key={article.slug} article={article} />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="py-12 text-center font-inter text-body dark:text-dark-4">
          No hay artículos en esta categoría todavía.
        </p>
      )}
    </div>
  );
}
