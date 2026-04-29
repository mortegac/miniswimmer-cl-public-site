import Link from "next/link";
import Image from "next/image";
import { BlogArticle } from "@/data/blog/types";
import BlogCategoryBadge from "./BlogCategoryBadge";

interface BlogCardProps {
  article: BlogArticle;
}

export default function BlogCard({ article }: BlogCardProps) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-10 bg-white shadow-features transition-shadow hover:shadow-testimonial-2 dark:bg-gray-dark">
      {/* Cover image */}
      <Link
        href={`/blog/${article.slug}`}
        className="relative block aspect-[3/2] w-full overflow-hidden"
        aria-label={article.h1}
      >
        <Image
          src={article.coverImage.src}
          alt={article.coverImage.alt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 390px"
          className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
        />
        {/* Purple brand overlay */}
        <div className="absolute inset-0 bg-primary/40" />
        {/* Hover: slightly deeper */}
        <div className="absolute inset-0 bg-primary/0 transition-colors duration-300 group-hover:bg-primary/15" />
      </Link>

      {/* Content */}
      <div className="flex flex-1 flex-col p-6">
        {/* Category + reading time */}
        <div className="mb-3 flex items-center gap-3">
          <BlogCategoryBadge category={article.category} />
          <span className="font-inter text-xs text-body dark:text-dark-4">
            {article.readingTime} min lectura
          </span>
        </div>

        {/* Title */}
        <Link href={`/blog/${article.slug}`}>
          <h2 className="mb-3 font-satoshi text-xl font-bold leading-snug text-dark transition-colors group-hover:text-primary dark:text-white dark:group-hover:text-primary">
            {article.h1}
          </h2>
        </Link>

        {/* Excerpt */}
        <p className="mb-5 flex-1 font-inter text-sm leading-relaxed text-body dark:text-dark-4">
          {article.excerpt}
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between border-t border-stroke pt-4 dark:border-stroke-dark">
          <time
            dateTime={article.publishDate}
            className="font-inter text-xs text-dark-4 dark:text-dark-4"
          >
            {new Date(article.publishDate).toLocaleDateString("es-CL", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </time>
          <Link
            href={`/blog/${article.slug}`}
            className="flex items-center gap-1 font-inter text-sm font-semibold text-primary transition-gap hover:gap-2"
            aria-label={`Leer artículo: ${article.h1}`}
          >
            Leer más
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>
      </div>
    </article>
  );
}
