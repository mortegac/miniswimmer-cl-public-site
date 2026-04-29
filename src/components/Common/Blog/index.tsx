import Link from "next/link";
import BlogCard from "@/components/Blog/BlogCard";
import { getArticleBySlug } from "@/data/blog";

const FEATURED_SLUGS = [
  "beneficios-matronatacion-bebes",
  "natacion-invierno-bebes-beneficios",
  "metodo-miniswimmer-etapas-desarrollo",
  "natacion-bebes-vinculo-madre-hijo",
  "supervivencia-acuatica-bebes-ninos",
  "cuantas-clases-natacion-bebe-flotar",
];

const Blog = (_props?: { pageTraslation?: string }) => {
  const articles = FEATURED_SLUGS.map((slug) =>
    getArticleBySlug(slug),
  ).filter(Boolean);

  return (
    <section className="overflow-hidden py-17.5 lg:py-22.5 xl:py-27.5" id="blog">
      {/* Section header */}
      <div className="mx-auto w-full max-w-[1170px] px-4 sm:px-8 xl:px-0">
        <div className="mb-10 text-center">
          <span className="mb-3 block font-inter text-sm font-semibold uppercase tracking-wider text-primary">
            Blog Miniswimmer
          </span>
          <h2 className="font-satoshi text-heading-5 font-bold text-dark dark:text-white lg:text-heading-4">
            Guías y consejos para padres
          </h2>
          <p className="mx-auto mt-3 max-w-xl font-inter text-base text-body dark:text-dark-4">
            Artículos sobre matronatación, desarrollo del bebé en el agua y
            seguridad acuática escritos por coaches certificados.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-7.5 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) =>
            article ? <BlogCard key={article.slug} article={article} /> : null,
          )}
        </div>

        {/* Ver todos */}
        <div className="mt-10 text-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 rounded-full border border-primary px-8 py-3 font-inter font-semibold text-primary transition-colors hover:bg-primary hover:text-white"
          >
            Ver todos los artículos
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Blog;
