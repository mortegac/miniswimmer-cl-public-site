import { Metadata } from "next";
import SchemaMarkup from "@/components/Common/SchemaMarkup";
import VsPiscinaMunicipalPenalolen from "@/components/VsPiscinaMunicipalPenalolen";

export const metadata: Metadata = {
  title: "Miniswimmer vs Piscina Municipal de Peñalolén: ¿Cuál elegir?",
  description: `¿Clases de natación en la piscina municipal de Peñalolén (CORDEP) o con el Método Miniswimmer? Comparamos metodología, disponibilidad, precios y personalización para ayudarte a decidir. Sin lista de espera en Miniswimmer.`,
  alternates: {
    canonical:
      "https://miniswimmer.cl/miniswimmer-vs-piscina-municipal-penalolen",
    languages: {
      "x-default":
        "https://miniswimmer.cl/miniswimmer-vs-piscina-municipal-penalolen",
      es: "https://miniswimmer.cl/miniswimmer-vs-piscina-municipal-penalolen",
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
    url: "https://miniswimmer.cl/miniswimmer-vs-piscina-municipal-penalolen",
    title: `Miniswimmer vs Piscina Municipal de Peñalolén: ¿Cuál elegir?`,
    description: `¿Clases en la piscina municipal o con el Método Miniswimmer? Comparamos metodología, disponibilidad y personalización para que elijas con información real.`,
    images: [
      {
        url: "https://images.prismic.io/miniswimmerchile/aBuatCdWJ-7kRuIZ_SOCIAL-MEDIAv2.png?auto=format,compress",
        width: 1200,
        height: 630,
        alt: "Miniswimmer vs Piscina Municipal de Peñalolén",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@miniswimmer_edu",
    creator: "@miniswimmer_edu",
    title: `Miniswimmer vs Piscina Municipal de Peñalolén: ¿Cuál elegir?`,
    description: `¿Clases en la piscina municipal o con el Método Miniswimmer? Comparamos metodología, disponibilidad y personalización.`,
    images: [
      {
        url: "https://images.prismic.io/miniswimmerchile/aBuatCdWJ-7kRuIZ_SOCIAL-MEDIAv2.png?auto=format,compress",
        width: 1200,
        height: 630,
        alt: "Miniswimmer vs Piscina Municipal de Peñalolén",
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
      name: "Clases Natación Peñalolén",
      item: "https://miniswimmer.cl/clases-natacion-penalolen",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Miniswimmer vs Piscina Municipal Peñalolén",
      item: "https://miniswimmer.cl/miniswimmer-vs-piscina-municipal-penalolen",
    },
  ],
};

export default function VsPiscinaMunicipalPenalolenPage() {
  return (
    <>
      <SchemaMarkup data={organizationRefSchema} />
      <SchemaMarkup data={breadcrumbSchema} />
      <VsPiscinaMunicipalPenalolen />
    </>
  );
}
