import { Metadata } from "next";
import Link from "next/link";
import SchemaMarkup from "@/components/Common/SchemaMarkup";
import {
  allArticles,
  CATEGORY_LABELS,
  CATEGORY_COLORS,
  BlogCategory,
} from "@/data/blog";

export const metadata: Metadata = {
  title: "Mapa del Sitio | Todas las Páginas — Miniswimmer",
  description:
    "Encuentra todas las páginas de Miniswimmer organizadas por categoría: programas de natación, sedes en Chile y USA, precios, comparativas y más.",
  alternates: {
    canonical: "https://www.miniswimmer.cl/sitemap",
    languages: {
      "x-default": "https://www.miniswimmer.cl/sitemap",
      es: "https://www.miniswimmer.cl/sitemap",
    },
  },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    url: "https://www.miniswimmer.cl/sitemap",
    title: "Mapa del Sitio — Miniswimmer",
    description:
      "Encuentra todas las páginas de Miniswimmer organizadas por categoría.",
    images: [
      {
        url: "https://images.prismic.io/miniswimmerchile/aBuatCdWJ-7kRuIZ_SOCIAL-MEDIAv2.png?auto=format,compress",
        width: 1200,
        height: 630,
        alt: "Mapa del Sitio — Miniswimmer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@miniswimmer_edu",
    title: "Mapa del Sitio — Miniswimmer",
    description:
      "Encuentra todas las páginas de Miniswimmer organizadas por categoría.",
  },
};

type SitemapPage = {
  label: string;
  href: string;
  badge?: string;
};

type SitemapCategory = {
  title: string;
  description: string;
  icon: string;
  iconBg: string;
  pages: SitemapPage[];
};

const staticCategories: SitemapCategory[] = [
  {
    title: "Inicio",
    description: "Página principal del sitio",
    icon: "🏠",
    iconBg: "bg-primary/10",
    pages: [{ label: "Página Principal", href: "/" }],
  },
  {
    title: "Nuestra Empresa",
    description: "Quiénes somos, valores y nuestro equipo",
    icon: "🤝",
    iconBg: "bg-blue-50 dark:bg-blue-900/20",
    pages: [
      { label: "Nosotros", href: "/nosotros" },
      { label: "Nuestros Valores", href: "/valores" },
      { label: "Conoce Nuestras Sedes", href: "/conoce-nuestras-sedes" },
      { label: "Alianzas", href: "/alianzas" },
    ],
  },
  {
    title: "Programas de Natación",
    description: "Nuestros programas por edad y necesidad",
    icon: "🏊",
    iconBg: "bg-primary/10",
    pages: [
      { label: "Método Miniswimmer", href: "/metodo" },
      {
        label: "Matronatación — Bebés desde 2 meses",
        href: "/matronatacion",
        badge: "⭐ Top",
      },
      {
        label: "Neuro Swimmer — Natación para TEA",
        href: "/neuro-swimmer",
        badge: "Nuevo",
      },
      { label: "Todos nuestros Servicios", href: "/servicios" },
    ],
  },
  {
    title: "Precios",
    description: "Planes y tarifas transparentes sin sorpresas",
    icon: "💰",
    iconBg: "bg-green-50 dark:bg-green-900/20",
    pages: [
      {
        label: "Precios y Valores",
        href: "/precios-y-valores-de-nuestros-servicios",
      },
    ],
  },
  {
    title: "Sedes en Chile",
    description: "Clases de natación en Santiago y V Región",
    icon: "🇨🇱",
    iconBg: "bg-red-50 dark:bg-red-900/20",
    pages: [
      {
        label: "Clases en Peñalolén, Santiago",
        href: "/clases-natacion-penalolen",
      },
      {
        label: "Clases en Maitencillo, V Región",
        href: "/clases-natacion-maintencillo",
      },
      {
        label: "Clases en Viña del Mar",
        href: "/clases-natacion-vina-del-mar",
      },
    ],
  },
  {
    title: "Locations in the USA",
    description: "Swimming lessons in South Florida",
    icon: "🇺🇸",
    iconBg: "bg-blue-50 dark:bg-blue-900/20",
    pages: [
      {
        label: "Swimming Lessons in Miami-Dade",
        href: "/swimming-lessons-in-miami-dade",
      },
      {
        label: "Swimming Lessons in Broward County",
        href: "/swimming-lessons-in-broward",
      },
    ],
  },
  {
    title: "Miniswimmer vs Competidores",
    description: "Comparativas con otras escuelas de natación",
    icon: "⚡",
    iconBg: "bg-purple-50 dark:bg-purple-900/20",
    pages: [
      { label: "Miniswimmer vs Aqualuz", href: "/miniswimmer-vs-aqualuz" },
      {
        label: "Miniswimmer vs Salmon Swim",
        href: "/miniswimmer-vs-salmon-swim",
      },
      {
        label: "Miniswimmer vs Color Splash",
        href: "/miniswimmer-vs-color-splash",
      },
      {
        label: "Miniswimmer vs Piscina Municipal Peñalolén",
        href: "/miniswimmer-vs-piscina-municipal-penalolen",
      },
      {
        label: "Miniswimmer vs Atrévete y Sumérgate",
        href: "/miniswimmer-vs-atrevete-y-sumergete",
      },
      {
        label: "Miniswimmer vs Acquatiempo",
        href: "/miniswimmer-vs-acquatiempo",
      },
      {
        label: "Miniswimmer vs Le Corps Flottant",
        href: "/miniswimmer-vs-le-corps-flottant",
      },
      {
        label: "Miniswimmer vs Club Recrear",
        href: "/miniswimmer-vs-club-recrear",
      },
    ],
  },
  {
    title: "Eventos",
    description: "Miniswimmer en ferias y eventos nacionales",
    icon: "🎪",
    iconBg: "bg-amber-50 dark:bg-amber-900/20",
    pages: [
      {
        label: "Miniswimmer en ExpoBebé 2026",
        href: "/expo-bebe-2026",
        badge: "🎟️ Sorteo",
      },
    ],
  },
  {
    title: "Contacto",
    description: "Comunícate con nosotros y agenda tu clase",
    icon: "📞",
    iconBg: "bg-teal-50 dark:bg-teal-900/20",
    pages: [
      { label: "Contacto", href: "/contacto" },
      { label: "Reagendamiento de Clases", href: "/reagendamiento" },
    ],
  },
  {
    title: "Información Legal",
    description: "Políticas y términos del servicio",
    icon: "📜",
    iconBg: "bg-gray-100 dark:bg-gray-800/50",
    pages: [
      {
        label: "Política de Privacidad",
        href: "/politica-de-privacidad",
      },
      {
        label: "Términos y Condiciones",
        href: "/terminos-y-condiciones-del-servicio",
      },
    ],
  },
];

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
      name: "Mapa del Sitio",
      item: "https://www.miniswimmer.cl/sitemap",
    },
  ],
};

const BLOG_CATEGORY_ICONS: Record<BlogCategory, string> = {
  matronatacion: "🤱",
  "desarrollo-bebe": "👶",
  "seguridad-acuatica": "🛡️",
  "consejos-practicos": "💡",
  "programas-especiales": "⭐",
};

export default function SitemapPage() {
  const staticPageCount = staticCategories.reduce(
    (sum, cat) => sum + cat.pages.length,
    0,
  );
  const totalPages = staticPageCount + allArticles.length + 1; // +1 for /blog listing

  // Group blog articles by category
  const blogByCategory = allArticles.reduce<
    Partial<Record<BlogCategory, typeof allArticles>>
  >((acc, article) => {
    const cat = article.category;
    if (!acc[cat]) acc[cat] = [];
    acc[cat]!.push(article);
    return acc;
  }, {});

  const blogCategories = Object.keys(blogByCategory) as BlogCategory[];

  return (
    <>
      <SchemaMarkup data={breadcrumbSchema} />

      {/* Hero */}
      <section className="bg-gray-1 py-16 dark:bg-dark lg:py-24">
        <div className="mx-auto w-full max-w-[1170px] px-4 sm:px-8 xl:px-0">
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 font-inter text-sm font-semibold text-primary">
              Mapa del Sitio
            </span>
            <h1 className="mb-4 font-satoshi text-heading-4 font-bold text-dark dark:text-white lg:text-heading-3">
              Todas las páginas de Miniswimmer
            </h1>
            <p className="font-inter text-base text-body dark:text-dark-4 lg:text-lg">
              Encuentra rápidamente cualquier página de nuestro sitio.{" "}
              <strong className="font-semibold text-dark dark:text-white">
                {totalPages} páginas
              </strong>{" "}
              organizadas en{" "}
              <strong className="font-semibold text-dark dark:text-white">
                {staticCategories.length} secciones
              </strong>{" "}
              +{" "}
              <strong className="font-semibold text-dark dark:text-white">
                {allArticles.length} artículos de blog
              </strong>
              .
            </p>

            {/* Quick jump links */}
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a
                href="#paginas"
                className="rounded-full border border-stroke bg-white px-4 py-2 font-inter text-sm font-medium text-dark-3 transition-colors hover:border-primary hover:text-primary dark:border-stroke-dark dark:bg-gray-dark dark:text-dark-4 dark:hover:border-primary dark:hover:text-primary"
              >
                Páginas del sitio
              </a>
              <a
                href="#blog"
                className="rounded-full border border-primary bg-primary/5 px-4 py-2 font-inter text-sm font-medium text-primary transition-colors hover:bg-primary hover:text-white"
              >
                ✍️ Blog ({allArticles.length} artículos)
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATIC PAGES SECTION ── */}
      <section id="paginas" className="py-16 lg:py-24">
        <div className="mx-auto w-full max-w-[1170px] px-4 sm:px-8 xl:px-0">
          {/* Section heading */}
          <div className="mb-10">
            <span className="mb-2 block font-inter text-sm font-semibold uppercase tracking-wider text-primary">
              Páginas del sitio
            </span>
            <h2 className="font-satoshi text-heading-5 font-bold text-dark dark:text-white">
              Navega por secciones
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-7.5 md:grid-cols-2 xl:grid-cols-3">
            {staticCategories.map((category) => (
              <div
                key={category.title}
                className="rounded-10 bg-white p-8 shadow-features dark:bg-gray-dark"
              >
                {/* Card header */}
                <div className="mb-5 flex items-start gap-4">
                  <span
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-2xl ${category.iconBg}`}
                  >
                    {category.icon}
                  </span>
                  <div>
                    <h3 className="font-satoshi text-xl font-bold text-dark dark:text-white">
                      {category.title}
                    </h3>
                    <p className="mt-0.5 font-inter text-sm text-body dark:text-dark-4">
                      {category.description}
                    </p>
                  </div>
                </div>

                <div className="mb-5 h-px bg-stroke dark:bg-stroke-dark" />

                <ul className="space-y-1">
                  {category.pages.map((page) => (
                    <li key={page.href}>
                      <Link
                        href={page.href}
                        className="group flex items-center justify-between rounded-lg px-3 py-2.5 transition-colors hover:bg-primary/5 dark:hover:bg-white/5"
                      >
                        <span className="font-inter text-sm font-medium text-dark-3 transition-colors group-hover:text-primary dark:text-dark-4 dark:group-hover:text-primary">
                          {page.label}
                        </span>
                        {page.badge ? (
                          <span className="ml-3 shrink-0 rounded-full bg-primary/10 px-2.5 py-0.5 font-inter text-xs font-semibold text-primary">
                            {page.badge}
                          </span>
                        ) : (
                          <svg
                            className="ml-3 h-4 w-4 shrink-0 text-dark-5 transition-colors group-hover:text-primary dark:text-dark-4 dark:group-hover:text-primary"
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
                        )}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BLOG SECTION ── */}
      <section id="blog" className="bg-gray-1 py-16 dark:bg-dark lg:py-24">
        <div className="mx-auto w-full max-w-[1170px] px-4 sm:px-8 xl:px-0">
          {/* Section heading */}
          <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <span className="mb-2 block font-inter text-sm font-semibold uppercase tracking-wider text-primary">
                Blog de Natación Infantil
              </span>
              <h2 className="font-satoshi text-heading-5 font-bold text-dark dark:text-white">
                {allArticles.length} artículos SEO + GEO optimizados
              </h2>
              <p className="mt-2 font-inter text-sm text-body dark:text-dark-4">
                Guías, consejos y artículos sobre matronatación, desarrollo del
                bebé y seguridad acuática.
              </p>
            </div>
            <Link
              href="/blog"
              className="inline-flex shrink-0 items-center gap-2 rounded-full bg-primary px-6 py-2.5 font-inter text-sm font-semibold text-white transition-opacity hover:opacity-90"
            >
              Ver el Blog
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

          {/* Blog hub card */}
          <div className="mb-7.5 rounded-10 border border-primary/20 bg-white p-6 shadow-features dark:bg-gray-dark">
            <div className="flex items-center gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-2xl">
                ✍️
              </span>
              <div className="flex-1">
                <h3 className="font-satoshi text-lg font-bold text-dark dark:text-white">
                  Blog Miniswimmer — Hub principal
                </h3>
                <p className="font-inter text-sm text-body dark:text-dark-4">
                  Página principal del blog con todos los artículos y filtros
                  por categoría.
                </p>
              </div>
              <Link
                href="/blog"
                className="shrink-0 rounded-full border border-primary px-5 py-2 font-inter text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-white"
              >
                /blog
              </Link>
            </div>
          </div>

          {/* Blog categories grid */}
          <div className="grid grid-cols-1 gap-7.5 md:grid-cols-2 xl:grid-cols-3">
            {blogCategories.map((cat) => {
              const articles = blogByCategory[cat] ?? [];
              return (
                <div
                  key={cat}
                  className="rounded-10 bg-white p-8 shadow-features dark:bg-gray-dark"
                >
                  {/* Category header */}
                  <div className="mb-5 flex items-start gap-4">
                    <span
                      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-2xl ${
                        cat === "matronatacion"
                          ? "bg-primary/10"
                          : cat === "desarrollo-bebe"
                            ? "bg-blue-50 dark:bg-blue-900/20"
                            : cat === "seguridad-acuatica"
                              ? "bg-red-50 dark:bg-red-900/20"
                              : cat === "consejos-practicos"
                                ? "bg-green-50 dark:bg-green-900/20"
                                : "bg-purple-50 dark:bg-purple-900/20"
                      }`}
                    >
                      {BLOG_CATEGORY_ICONS[cat]}
                    </span>
                    <div>
                      <h3 className="font-satoshi text-lg font-bold text-dark dark:text-white">
                        {CATEGORY_LABELS[cat]}
                      </h3>
                      <p className="mt-0.5 font-inter text-sm text-body dark:text-dark-4">
                        {articles.length} artículo
                        {articles.length !== 1 ? "s" : ""}
                      </p>
                    </div>
                  </div>

                  <div className="mb-5 h-px bg-stroke dark:bg-stroke-dark" />

                  <ul className="space-y-1">
                    {articles.map((article) => (
                      <li key={article.slug}>
                        <Link
                          href={`/blog/${article.slug}`}
                          className="group flex items-start justify-between gap-3 rounded-lg px-3 py-2.5 transition-colors hover:bg-primary/5 dark:hover:bg-white/5"
                        >
                          <span className="font-inter text-sm font-medium leading-snug text-dark-3 transition-colors group-hover:text-primary dark:text-dark-4 dark:group-hover:text-primary">
                            {article.h1}
                          </span>
                          <span className="mt-0.5 shrink-0 font-inter text-xs text-dark-5 dark:text-dark-4">
                            {article.readingTime}m
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12">
        <div className="mx-auto w-full max-w-[1170px] px-4 sm:px-8 xl:px-0">
          <div className="overflow-hidden rounded-10 bg-primary px-8 py-12 text-center shadow-features sm:px-16">
            <h2 className="mb-3 font-satoshi text-heading-5 font-bold text-white">
              ¿Listo para empezar?
            </h2>
            <p className="mb-8 font-inter text-base text-white/80">
              Agenda tu primera clase de prueba. Sin compromiso, sin matrícula
              inicial.
            </p>
            <Link
              href="/contacto"
              className="inline-block rounded-full bg-white px-8 py-3.5 font-inter text-base font-semibold text-primary transition-opacity hover:opacity-90"
            >
              Agenda tu clase de prueba
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
