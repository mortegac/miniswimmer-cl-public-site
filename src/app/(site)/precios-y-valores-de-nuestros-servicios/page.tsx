import { Metadata } from "next";
import SchemaMarkup from "@/components/Common/SchemaMarkup";
import PricingBySede from "@/components/Pricing/PricingBySede";

export const metadata: Metadata = {
  title: "Precios y Valores Clases — Febrero 2026 | Miniswimmer",
  description: `Consulta los valores actualizados de nuestras clases de natación por sede: Peñalolén, La Reina, Ñuñoa, Vitacura, Viña del Mar, Rancagua, Chillán y Big Swimmer para adultos. Planes para bebés, niños y adultos desde $30.000.`,
  alternates: {
    canonical: "https://www.miniswimmer.cl/precios-y-valores-de-nuestros-servicios",
    languages: {
      "x-default":
        "https://www.miniswimmer.cl/precios-y-valores-de-nuestros-servicios",
      es: "https://www.miniswimmer.cl/precios-y-valores-de-nuestros-servicios",
      "en-US": "https://www.miniswimmer.cl/pricing",
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
    url: "https://www.miniswimmer.cl/precios-y-valores-de-nuestros-servicios",
    title: "Precios y Valores Clases — Febrero 2026 | Miniswimmer",
    description: `Consulta los valores actualizados de nuestras clases de natación por sede: Peñalolén, La Reina, Ñuñoa, Vitacura, Viña del Mar, Rancagua, Chillán y Big Swimmer para adultos. Planes para bebés, niños y adultos desde $30.000.`,
    images: [
      {
        url: "https://images.prismic.io/miniswimmerchile/aBuatCdWJ-7kRuIZ_SOCIAL-MEDIAv2.png?auto=format,compress",
        width: 1200,
        height: 630,
        alt: "Miniswimmer — Valores de clases de natación",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@miniswimmer_edu",
    title: "Precios y Valores Clases — Febrero 2026 | Miniswimmer",
    description: `Consulta los valores actualizados de nuestras clases de natación por sede: Peñalolén, La Reina, Ñuñoa, Vitacura, Viña del Mar, Rancagua, Chillán y Big Swimmer para adultos. Planes para bebés, niños y adultos desde $30.000.`,
    images: [
      {
        url: "https://images.prismic.io/miniswimmerchile/aBuatCdWJ-7kRuIZ_SOCIAL-MEDIAv2.png?auto=format,compress",
        width: 1200,
        height: 630,
        alt: "Miniswimmer — Valores de clases de natación",
      },
    ],
  },
  other: {
    lastModified: "2026-02-01",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://www.miniswimmer.cl/#organization",
  name: "Miniswimmer",
  url: "https://www.miniswimmer.cl",
  logo: "https://images.prismic.io/miniswimmerchile/aBuatCdWJ-7kRuIZ_SOCIAL-MEDIAv2.png?auto=format,compress",
  description:
    "Clases de natación para bebés, niños y adultos en múltiples sedes. Instructores certificados con el Método Miniswimmer.",
  sameAs: [
    "https://www.facebook.com/miniswimmer.academy",
    "https://www.instagram.com/miniswimmer.chile",
    "https://www.instagram.com/miniswimmer.us/",
    "https://www.linkedin.com/company/105056316",
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Cuánto cuestan las clases de natación en Miniswimmer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Los valores varían según la sede y el plan elegido. La clase de prueba parte desde $30.000. Los packs van desde $72.000 (4 clases) hasta $620.000 (24 clases). Los valores son referenciales — confirma disponibilidad por WhatsApp al +56 9 7344 7496.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué incluye la matrícula?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "La matrícula es de $30.000 y aplica solo a clientes nuevos. Al adquirir el plan de 24 clases, la matrícula es completamente GRATIS en todas las sedes.",
      },
    },
    {
      "@type": "Question",
      name: "¿En qué sedes están disponibles las clases?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Miniswimmer tiene sedes en Peñalolén, La Reina, Ñuñoa, Vitacura, Viña del Mar, Rancagua y Chillán. También ofrecemos Big Swimmer, clases de natación para adultos nivel inicial en Peñalolén y Ñuñoa.",
      },
    },
    {
      "@type": "Question",
      name: "¿Desde qué edad pueden tomar clases los bebés?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Las clases para bebés están disponibles desde los 0 meses (en Viña del Mar) y desde los 2 meses en la mayoría de las sedes. Los bebés deben ingresar siempre acompañados de un apoderado.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuánto dura cada clase?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Las clases en sedes Premium (Peñalolén, La Reina) duran 40 minutos. En sedes Regular como Ñuñoa, las clases duran 30 minutos. Todas las clases son de formato intensivo.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuál es el plan con mejor relación precio-valor?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "El plan de 24 clases es el que ofrece mejor valor: matrícula GRATIS y mayor cantidad de clases por precio proporcional más bajo. Tiene vigencia de 200 días.",
      },
    },
  ],
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
      name: "Precios y Valores",
      item: "https://www.miniswimmer.cl/precios-y-valores-de-nuestros-servicios",
    },
  ],
};

export default function PricingPage() {
  return (
    <>
      <SchemaMarkup type="Organization" data={organizationSchema} />
      <SchemaMarkup type="FAQPage" data={faqSchema} />
      <SchemaMarkup type="BreadcrumbList" data={breadcrumbSchema} />
      <main>
        <PricingBySede />
      </main>
    </>
  );
}
