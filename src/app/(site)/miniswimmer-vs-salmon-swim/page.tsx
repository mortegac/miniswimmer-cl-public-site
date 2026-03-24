import { Metadata } from "next";
import SchemaMarkup from "@/components/Common/SchemaMarkup";
import VsSalmonSwim from "@/components/VsSalmonSwim";

export const metadata: Metadata = {
  title: "Miniswimmer vs Salmon Swim: ¿Cuál academia de natación elegir?",
  description: `Comparamos Miniswimmer y Salmon Swim en metodología, programas, sedes y más. Descubre por qué el Método Miniswimmer (PNL + Coaching + Natación) es la mejor alternativa a Salmon Swim para bebés, niños y adultos en Santiago, Chile y EE.UU.`,
  alternates: {
    canonical: "https://miniswimmer.cl/miniswimmer-vs-salmon-swim",
    languages: {
      "x-default": "https://miniswimmer.cl/miniswimmer-vs-salmon-swim",
      es: "https://miniswimmer.cl/miniswimmer-vs-salmon-swim",
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    type: "website",
    url: "https://miniswimmer.cl/miniswimmer-vs-salmon-swim",
    title: `Miniswimmer vs Salmon Swim: ¿Cuál academia de natación elegir?`,
    description: `Comparamos Miniswimmer y Salmon Swim en metodología, programas, sedes y más. Descubre el Método Miniswimmer: PNL + Coaching + Natación para bebés, niños y adultos.`,
    images: [
      {
        url: "https://images.prismic.io/miniswimmerchile/aBuatCdWJ-7kRuIZ_SOCIAL-MEDIAv2.png?auto=format,compress",
        width: 1200,
        height: 630,
        alt: "Miniswimmer vs Salmon Swim — Comparación de Academias de Natación",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@miniswimmer_edu",
    creator: "@miniswimmer_edu",
    title: `Miniswimmer vs Salmon Swim: ¿Cuál academia de natación elegir?`,
    description: `Comparamos Miniswimmer y Salmon Swim en metodología, programas, sedes y más. Descubre el Método Miniswimmer: PNL + Coaching + Natación.`,
    images: [
      {
        url: "https://images.prismic.io/miniswimmerchile/aBuatCdWJ-7kRuIZ_SOCIAL-MEDIAv2.png?auto=format,compress",
        width: 1200,
        height: 630,
        alt: "Miniswimmer vs Salmon Swim",
      },
    ],
  },
};

const organizationRefSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://miniswimmer.cl/#organization",
  name: "Miniswimmer",
  url: "https://miniswimmer.cl",
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Inicio",
      item: "https://miniswimmer.cl",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Miniswimmer vs Salmon Swim",
      item: "https://miniswimmer.cl/miniswimmer-vs-salmon-swim",
    },
  ],
};

export default function VsSalmonSwimPage() {
  return (
    <>
      <SchemaMarkup data={organizationRefSchema} />
      <SchemaMarkup data={breadcrumbSchema} />
      <VsSalmonSwim />
    </>
  );
}
