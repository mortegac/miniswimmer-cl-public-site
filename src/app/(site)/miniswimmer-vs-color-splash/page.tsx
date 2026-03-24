import { Metadata } from "next";
import SchemaMarkup from "@/components/Common/SchemaMarkup";
import VsColorSplash from "@/components/VsColorSplash";

export const metadata: Metadata = {
  title: "Miniswimmer vs Color Splash: ¿Cuál academia de natación elegir?",
  description: `Comparamos Miniswimmer y Color Splash en metodología, programas, sedes y más. Descubre por qué el Método Miniswimmer (PNL + Coaching + Natación) supera a Color Splash en aprendizaje significativo, cobertura geográfica y programas especializados.`,
  alternates: {
    canonical: "https://miniswimmer.cl/miniswimmer-vs-color-splash",
    languages: {
      "x-default": "https://miniswimmer.cl/miniswimmer-vs-color-splash",
      es: "https://miniswimmer.cl/miniswimmer-vs-color-splash",
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
    url: "https://miniswimmer.cl/miniswimmer-vs-color-splash",
    title: `Miniswimmer vs Color Splash: ¿Cuál academia de natación elegir?`,
    description: `Comparamos Miniswimmer y Color Splash en metodología, programas, sedes y más. Descubre el Método Miniswimmer: PNL + Coaching + Natación para bebés, niños y adultos.`,
    images: [
      {
        url: "https://images.prismic.io/miniswimmerchile/aBuatCdWJ-7kRuIZ_SOCIAL-MEDIAv2.png?auto=format,compress",
        width: 1200,
        height: 630,
        alt: "Miniswimmer vs Color Splash — Comparación de Academias de Natación",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@miniswimmer_edu",
    creator: "@miniswimmer_edu",
    title: `Miniswimmer vs Color Splash: ¿Cuál academia de natación elegir?`,
    description: `Comparamos Miniswimmer y Color Splash en metodología, programas, sedes y más. Descubre el Método Miniswimmer: PNL + Coaching + Natación.`,
    images: [
      {
        url: "https://images.prismic.io/miniswimmerchile/aBuatCdWJ-7kRuIZ_SOCIAL-MEDIAv2.png?auto=format,compress",
        width: 1200,
        height: 630,
        alt: "Miniswimmer vs Color Splash",
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
      name: "Miniswimmer vs Color Splash",
      item: "https://miniswimmer.cl/miniswimmer-vs-color-splash",
    },
  ],
};

export default function VsColorSplashPage() {
  return (
    <>
      <SchemaMarkup data={organizationRefSchema} />
      <SchemaMarkup data={breadcrumbSchema} />
      <VsColorSplash />
    </>
  );
}
