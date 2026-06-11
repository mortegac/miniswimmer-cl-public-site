import { Metadata } from "next";
import SchemaMarkup from "@/components/Common/SchemaMarkup";
import BlogGrid from "@/components/Blog/BlogGrid";
import { allArticles, CATEGORY_LABELS } from "@/data/blog";

export const metadata: Metadata = {
  title: "Blog de Natación Infantil | Guías y Consejos — Miniswimmer",
  description:
    "Artículos sobre matronatación, desarrollo del bebé en el agua, seguridad acuática y consejos prácticos para padres en Santiago. Escrito por expertos de Miniswimmer.",
  alternates: {
    canonical: "https://www.miniswimmer.cl/blog",
    languages: {
      "x-default": "https://www.miniswimmer.cl/blog",
      es: "https://www.miniswimmer.cl/blog",
    },
  },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    url: "https://www.miniswimmer.cl/blog",
    title: "Blog Miniswimmer — Natación Infantil y Matronatación",
    description:
      "Guías, consejos y artículos sobre natación para bebés y niños en Santiago, Chile.",
    images: [
      {
        url: "https://images.prismic.io/miniswimmerchile/aBuatCdWJ-7kRuIZ_SOCIAL-MEDIAv2.png?auto=format,compress",
        width: 1200,
        height: 630,
        alt: "Blog Miniswimmer — Natación Infantil",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@miniswimmer_edu",
    title: "Blog Miniswimmer — Natación Infantil y Matronatación",
    description:
      "Guías y consejos sobre natación para bebés y niños en Santiago.",
  },
};

const blogSchema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: "Blog Miniswimmer",
  description:
    "Artículos sobre matronatación, desarrollo del bebé en el agua, seguridad acuática y consejos para padres.",
  url: "https://www.miniswimmer.cl/blog",
  publisher: {
    "@type": "Organization",
    name: "Miniswimmer",
    url: "https://www.miniswimmer.cl",
    logo: {
      "@type": "ImageObject",
      url: "https://www.miniswimmer.cl/logo.png",
    },
  },
  blogPost: allArticles.slice(0, 10).map((article) => ({
    "@type": "BlogPosting",
    headline: article.h1,
    description: article.excerpt,
    url: `https://www.miniswimmer.cl/blog/${article.slug}`,
    datePublished: article.publishDate,
    author: {
      "@type": "Organization",
      name: "Miniswimmer",
    },
  })),
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Inicio",
      item: "https://www.miniswimmer.cl",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Blog",
      item: "https://www.miniswimmer.cl/blog",
    },
  ],
};

const categories = Object.entries(CATEGORY_LABELS) as [
  keyof typeof CATEGORY_LABELS,
  string,
][];

export default function BlogPage() {
  return (
    <>
      <SchemaMarkup data={blogSchema} />
      <SchemaMarkup data={breadcrumbSchema} />

      {/* Hero */}
      <section className="bg-gray-1 py-16 dark:bg-dark lg:py-24">
        <div className="mx-auto w-full max-w-[1170px] px-4 sm:px-8 xl:px-0">
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 font-inter text-sm font-semibold text-primary">
              Blog Miniswimmer
            </span>
            <h1 className="mb-4 font-satoshi text-heading-4 font-bold text-dark dark:text-white lg:text-heading-3">
              Natación Infantil: Guías y Consejos para Padres
            </h1>
            <p className="font-inter text-base text-body dark:text-dark-4 lg:text-lg">
              Todo lo que necesitas saber sobre matronatación, desarrollo del
              bebé en el agua, seguridad acuática y cómo sacar el máximo
              provecho de las clases de natación en Santiago.
            </p>

            {/* Stats */}
            <div className="mt-8 flex flex-wrap justify-center gap-6">
              {[
                { value: `${allArticles.length}`, label: "artículos" },
                { value: `${categories.length}`, label: "categorías" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="font-satoshi text-3xl font-bold text-primary">
                    {stat.value}
                  </p>
                  <p className="font-inter text-sm text-body dark:text-dark-4">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Content Hub section */}
      <section className="border-b border-stroke py-10 dark:border-stroke-dark">
        <div className="mx-auto w-full max-w-[1170px] px-4 sm:px-8 xl:px-0">
          <div className="flex flex-wrap items-center gap-4">
            <span className="font-inter text-sm font-medium text-dark-3 dark:text-dark-4">
              Temas clave:
            </span>
            {categories.map(([slug, label]) => (
              <span
                key={slug}
                className="rounded-full border border-stroke px-4 py-1.5 font-inter text-sm text-dark-3 dark:border-stroke-dark dark:text-dark-4"
              >
                {label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Articles grid */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto w-full max-w-[1170px] px-4 sm:px-8 xl:px-0">
          <BlogGrid articles={allArticles} />
        </div>
      </section>

      {/* Content Hub banner */}
      <section className="bg-gray-1 py-12 dark:bg-dark">
        <div className="mx-auto w-full max-w-[1170px] px-4 sm:px-8 xl:px-0">
          <div className="mx-auto max-w-4xl rounded-10 bg-white p-8 shadow-features dark:bg-gray-dark md:p-12">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:items-center">
              <div>
                <span className="mb-3 inline-block rounded-full bg-primary/10 px-4 py-1.5 font-inter text-sm font-semibold text-primary">
                  ¿Dudas sobre natación infantil?
                </span>
                <h2 className="mb-3 font-satoshi text-2xl font-bold text-dark dark:text-white">
                  Somos la escuela de natación con más contenido educativo de
                  Santiago
                </h2>
                <p className="font-inter text-sm text-body dark:text-dark-4">
                  Todos nuestros artículos son escritos por coaches certificados
                  con experiencia real en matronatación y desarrollo infantil
                  acuático.
                </p>
              </div>
              <div className="space-y-3">
                {[
                  {
                    icon: "🏊",
                    text: "Matronatación desde los 2 meses",
                    href: "/matronatacion",
                  },
                  {
                    icon: "🧠",
                    text: "Neuro Swimmer para niños con TEA",
                    href: "/neuro-swimmer",
                  },
                  {
                    icon: "📍",
                    text: "Sedes en Santiago, Valparaíso, Rancagua y Chillán",
                    href: "/conoce-nuestras-sedes",
                  },
                  {
                    icon: "💰",
                    text: "Precios transparentes",
                    href: "/precios-y-valores-de-nuestros-servicios",
                  },
                ].map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="flex items-center gap-3 rounded-lg px-4 py-2.5 font-inter text-sm font-medium text-dark-3 transition-colors hover:bg-primary/5 hover:text-primary dark:text-dark-4 dark:hover:bg-white/5 dark:hover:text-primary"
                  >
                    <span className="text-lg">{item.icon}</span>
                    {item.text}
                    <svg
                      className="ml-auto h-4 w-4 text-dark-5"
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
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
