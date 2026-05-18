import { Metadata, ResolvingMetadata } from "next";
import { notFound } from "next/navigation";
import SchemaMarkup from "@/components/Common/SchemaMarkup";
import BlogArticleLayout from "@/components/Blog/BlogArticleLayout";
import {
  allArticles,
  getArticleBySlug,
  getRelatedArticles,
  getAllSlugs,
} from "@/data/blog";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata(
  { params }: BlogPostPageProps,
  _parent: ResolvingMetadata,
): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return { title: "Artículo no encontrado — Miniswimmer" };
  }

  const canonicalUrl = `https://www.miniswimmer.cl/blog/${article.slug}`;

  return {
    title: article.title,
    description: article.metaDescription,
    keywords: [
      ...article.keywords.primary,
      ...article.keywords.secondary,
    ].join(", "),
    alternates: {
      canonical: canonicalUrl,
      languages: {
        "x-default": canonicalUrl,
        es: canonicalUrl,
      },
    },
    robots: { index: true, follow: true },
    openGraph: {
      type: "article",
      url: canonicalUrl,
      title: article.h1,
      description: article.metaDescription,
      publishedTime: article.publishDate,
      modifiedTime: article.lastModified ?? article.publishDate,
      images: [
        {
          url: article.coverImage.src,
          width: 1200,
          height: 630,
          alt: article.coverImage.alt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: "@miniswimmer_edu",
      title: article.h1,
      description: article.metaDescription,
      images: [article.coverImage.src],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const related = getRelatedArticles(article);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: article.h1,
    description: article.metaDescription,
    url: `https://www.miniswimmer.cl/blog/${article.slug}`,
    datePublished: article.publishDate,
    dateModified: article.lastModified ?? article.publishDate,
    image: {
      "@type": "ImageObject",
      url: article.coverImage.src,
      width: 1200,
      height: 630,
    },
    author: {
      "@type": "Organization",
      name: "Miniswimmer",
      url: "https://www.miniswimmer.cl",
    },
    publisher: {
      "@type": "Organization",
      name: "Miniswimmer",
      url: "https://www.miniswimmer.cl",
      logo: {
        "@type": "ImageObject",
        url: "https://www.miniswimmer.cl/logo.png",
      },
    },
    keywords: [
      ...article.keywords.primary,
      ...article.keywords.secondary,
    ].join(", "),
    inLanguage: "es-CL",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://www.miniswimmer.cl/blog/${article.slug}`,
    },
  };

  const faqSchema =
    article.faq.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: article.faq.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: item.answer,
            },
          })),
        }
      : null;

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
      {
        "@type": "ListItem",
        position: 3,
        name: article.h1,
        item: `https://www.miniswimmer.cl/blog/${article.slug}`,
      },
    ],
  };

  return (
    <>
      <SchemaMarkup data={articleSchema} />
      {faqSchema && <SchemaMarkup data={faqSchema} />}
      <SchemaMarkup data={breadcrumbSchema} />
      <BlogArticleLayout article={article} relatedArticles={related} />
    </>
  );
}
