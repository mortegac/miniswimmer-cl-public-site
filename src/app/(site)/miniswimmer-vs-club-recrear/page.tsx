import { Metadata } from "next";
import SchemaMarkup from "@/components/Common/SchemaMarkup";
import VsRecrear from "@/components/VsRecrear";

export const metadata: Metadata = {
  title: "Miniswimmer vs Club Recrear: ¿Academia o club deportivo?",
  description: `Comparamos Miniswimmer y Club Recrear en metodología, programas, instructores y sedes. Descubre por qué una academia de natación especializada supera a un club multifuncional.`,
  alternates: {
    canonical: "https://www.miniswimmer.cl/miniswimmer-vs-club-recrear",
    languages: {
      "x-default": "https://www.miniswimmer.cl/miniswimmer-vs-club-recrear",
      es: "https://www.miniswimmer.cl/miniswimmer-vs-club-recrear",
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
    url: "https://www.miniswimmer.cl/miniswimmer-vs-club-recrear",
    title: `Miniswimmer vs Club Recrear: ¿Academia o club deportivo?`,
    description: `Comparamos Miniswimmer y Club Recrear en metodología, programas e instructores. Descubre el Método Miniswimmer: PNL + Coaching + Natación para bebés, niños y adultos.`,
    images: [
      {
        url: "https://images.prismic.io/miniswimmerchile/aBuatCdWJ-7kRuIZ_SOCIAL-MEDIAv2.png?auto=format,compress",
        width: 1200,
        height: 630,
        alt: "Miniswimmer vs Club Recrear",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@miniswimmer_edu",
    creator: "@miniswimmer_edu",
    title: `Miniswimmer vs Club Recrear: ¿Academia o club deportivo?`,
    description: `Comparamos Miniswimmer y Club Recrear en metodología, programas e instructores. Descubre el Método Miniswimmer: PNL + Coaching + Natación.`,
    images: [
      {
        url: "https://images.prismic.io/miniswimmerchile/aBuatCdWJ-7kRuIZ_SOCIAL-MEDIAv2.png?auto=format,compress",
        width: 1200,
        height: 630,
        alt: "Miniswimmer vs Club Recrear",
      },
    ],
  },
};

const organizationRefSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://www.miniswimmer.cl/#organization",
  name: "Miniswimmer",
  url: "https://www.miniswimmer.cl",
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
      name: "Miniswimmer vs Club Recrear",
      item: "https://www.miniswimmer.cl/miniswimmer-vs-club-recrear",
    },
  ],
};

export default function VsRecrearPage() {
  return (
    <>
      <SchemaMarkup data={organizationRefSchema} />
      <SchemaMarkup data={breadcrumbSchema} />
      <VsRecrear />
    </>
  );
}
