import Image from "next/image";
import Link from "next/link";
import { BlogArticle } from "@/data/blog/types";
import BlogCategoryBadge from "./BlogCategoryBadge";

interface BlogArticleLayoutProps {
  article: BlogArticle;
  relatedArticles: BlogArticle[];
}

export default function BlogArticleLayout({
  article,
  relatedArticles,
}: BlogArticleLayoutProps) {
  return (
    <article>
      {/* Hero */}
      <header className="bg-gray-1 py-12 dark:bg-dark lg:py-20">
        <div className="container">
          {/* Breadcrumb */}
          <nav
            aria-label="Breadcrumb"
            className="mb-6 flex items-center gap-2 font-inter text-sm text-body dark:text-dark-4"
          >
            <Link href="/" className="hover:text-primary">
              Inicio
            </Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-primary">
              Blog
            </Link>
            <span>/</span>
            <span className="text-dark dark:text-white">{article.h1}</span>
          </nav>

          <div className="mx-auto max-w-4xl">
            <div className="mb-4 flex flex-wrap items-center gap-4">
              <BlogCategoryBadge category={article.category} />
              <span className="font-inter text-sm text-body dark:text-dark-4">
                {article.readingTime} min de lectura
              </span>
              <time
                dateTime={article.publishDate}
                className="font-inter text-sm text-body dark:text-dark-4"
              >
                {new Date(article.publishDate).toLocaleDateString("es-CL", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </time>
            </div>

            <h1 className="mb-6 font-satoshi text-heading-4 font-bold text-dark dark:text-white lg:text-heading-3">
              {article.h1}
            </h1>
            <p className="font-inter text-lg text-body dark:text-dark-4">
              {article.excerpt}
            </p>
          </div>
        </div>
      </header>

      {/* Cover image */}
      <div className="relative aspect-[21/9] overflow-hidden">
        <Image
          src={article.coverImage.src}
          alt={article.coverImage.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>

      {/* Article body + sidebar */}
      <div className="container py-12 lg:py-20">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 lg:grid-cols-[1fr_320px]">
          {/* Main content */}
          <div>
            {/* Article HTML content */}
            <div
              className="article-content"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />

            {/* FAQ Section */}
            {article.faq.length > 0 && (
              <section className="mt-12">
                <h2 className="mb-6 font-satoshi text-2xl font-bold text-dark dark:text-white">
                  Preguntas Frecuentes
                </h2>
                <div className="space-y-4">
                  {article.faq.map((item, index) => (
                    <details
                      key={index}
                      className="group rounded-10 border border-stroke bg-white p-5 dark:border-stroke-dark dark:bg-gray-dark"
                    >
                      <summary className="flex cursor-pointer items-start justify-between gap-4 font-satoshi font-semibold text-dark dark:text-white">
                        <span>{item.question}</span>
                        <svg
                          className="mt-0.5 h-5 w-5 shrink-0 text-primary transition-transform group-open:rotate-180"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </summary>
                      <p className="mt-3 font-inter text-body dark:text-dark-4">
                        {item.answer}
                      </p>
                    </details>
                  ))}
                </div>
              </section>
            )}

            {/* CTA */}
            <div className="mt-12 rounded-10 bg-primary p-8 text-center">
              <h2 className="mb-2 font-satoshi text-2xl font-bold text-white">
                ¿Listo para empezar?
              </h2>
              <p className="mb-6 font-inter text-white/80">
                Da el primer paso hacia una experiencia acuática increíble para tu bebé.
              </p>
              <Link
                href={article.ctaHref}
                className="inline-block rounded-full bg-white px-8 py-3 font-inter font-semibold text-primary transition-opacity hover:opacity-90"
              >
                {article.ctaText}
              </Link>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="space-y-8">
            {/* Related articles */}
            {relatedArticles.length > 0 && (
              <div className="rounded-10 bg-white p-6 shadow-features dark:bg-gray-dark">
                <h3 className="mb-4 font-satoshi text-lg font-bold text-dark dark:text-white">
                  Artículos relacionados
                </h3>
                <ul className="space-y-4">
                  {relatedArticles.slice(0, 4).map((related) => (
                    <li key={related.slug}>
                      <Link
                        href={`/blog/${related.slug}`}
                        className="group flex gap-3"
                      >
                        <div className="relative h-16 w-20 shrink-0 overflow-hidden rounded-lg">
                          <Image
                            src={related.coverImage.src}
                            alt={related.coverImage.alt}
                            fill
                            sizes="80px"
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <p className="font-inter text-sm font-medium leading-tight text-dark transition-colors group-hover:text-primary dark:text-white dark:group-hover:text-primary">
                            {related.h1}
                          </p>
                          <BlogCategoryBadge
                            category={related.category}
                            className="mt-1"
                          />
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Quick CTA */}
            <div className="rounded-10 bg-primary/5 p-6 dark:bg-primary/10">
              <p className="mb-3 font-satoshi font-bold text-dark dark:text-white">
                ¿Primera clase con tu bebé?
              </p>
              <p className="mb-4 font-inter text-sm text-body dark:text-dark-4">
                Sin compromiso. Sin matrícula inicial. Solo tú, tu bebé y el agua.
              </p>
              <Link
                href="/contacto"
                className="block w-full rounded-full bg-primary py-2.5 text-center font-inter text-sm font-semibold text-white transition-opacity hover:opacity-90"
              >
                Agendar clase de prueba
              </Link>
            </div>

            {/* Key links */}
            <div className="rounded-10 bg-white p-6 shadow-features dark:bg-gray-dark">
              <h3 className="mb-4 font-satoshi text-base font-bold text-dark dark:text-white">
                Páginas clave
              </h3>
              <ul className="space-y-2">
                {[
                  { label: "Matronatación", href: "/matronatacion" },
                  { label: "Neuro Swimmer", href: "/neuro-swimmer" },
                  { label: "Precios", href: "/precios-y-valores-de-nuestros-servicios" },
                  { label: "Nuestras Sedes", href: "/conoce-nuestras-sedes" },
                  { label: "Contacto", href: "/contacto" },
                ].map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="flex items-center gap-2 font-inter text-sm text-body transition-colors hover:text-primary dark:text-dark-4 dark:hover:text-primary"
                    >
                      <svg
                        className="h-3 w-3 text-primary"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </article>
  );
}
