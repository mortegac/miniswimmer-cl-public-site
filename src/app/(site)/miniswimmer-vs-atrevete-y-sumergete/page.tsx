import { Metadata } from "next";
import SchemaMarkup from "@/components/Common/SchemaMarkup";
import VsAtreveteYSumergete from "@/components/VsAtreveteYSumergete";

export const metadata: Metadata = {
  title: "Miniswimmer vs Atrévete y Sumérgete: ¿Cuál academia elegir?",
  description: `Comparamos Miniswimmer y Atrévete y Sumérgete en metodología, programas, sedes e instructores. Descubre por qué el Método Miniswimmer (PNL + Coaching + Natación) es la mejor opción para bebés, niños y adultos en Santiago y Chile.`,
  alternates: {
    canonical: "https://miniswimmer.cl/miniswimmer-vs-atrevete-y-sumergete",
    languages: {
      "x-default": "https://miniswimmer.cl/miniswimmer-vs-atrevete-y-sumergete",
      es: "https://miniswimmer.cl/miniswimmer-vs-atrevete-y-sumergete",
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
    url: "https://miniswimmer.cl/miniswimmer-vs-atrevete-y-sumergete",
    title: `Miniswimmer vs Atrévete y Sumérgete: ¿Cuál academia elegir?`,
    description: `Comparamos Miniswimmer y Atrévete y Sumérgete en metodología, programas y sedes. Descubre el Método Miniswimmer: PNL + Coaching + Natación para bebés, niños y adultos.`,
    images: [
      {
        url: "https://images.prismic.io/miniswimmerchile/aBuatCdWJ-7kRuIZ_SOCIAL-MEDIAv2.png?auto=format,compress",
        width: 1200,
        height: 630,
        alt: "Miniswimmer vs Atrévete y Sumérgete",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@miniswimmer_edu",
    creator: "@miniswimmer_edu",
    title: `Miniswimmer vs Atrévete y Sumérgete: ¿Cuál academia elegir?`,
    description: `Comparamos Miniswimmer y Atrévete y Sumérgete en metodología, programas y sedes. Descubre el Método Miniswimmer: PNL + Coaching + Natación.`,
    images: [
      {
        url: "https://images.prismic.io/miniswimmerchile/aBuatCdWJ-7kRuIZ_SOCIAL-MEDIAv2.png?auto=format,compress",
        width: 1200,
        height: 630,
        alt: "Miniswimmer vs Atrévete y Sumérgete",
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
      name: "Miniswimmer vs Atrévete y Sumérgete",
      item: "https://miniswimmer.cl/miniswimmer-vs-atrevete-y-sumergete",
    },
  ],
};

export default function VsAtreveteYSumergentePage() {
  return (
    <>
      <SchemaMarkup data={organizationRefSchema} />
      <SchemaMarkup data={breadcrumbSchema} />
      <VsAtreveteYSumergete />
    </>
  );
}
