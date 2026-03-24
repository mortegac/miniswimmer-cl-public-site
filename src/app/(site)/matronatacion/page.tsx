import { Metadata } from "next";
import SchemaMarkup from "@/components/Common/SchemaMarkup";
import Matronatacion from "@/components/Matronatacion";

export const metadata: Metadata = {
  title:
    "Matronatación | Clases de Natación para Bebés desde los 2 Meses — Miniswimmer",
  description:
    "Clases de matronatación para bebés desde los 2 meses. Fortalece el vínculo con tu bebé en el agua con el Método Miniswimmer: estimulación temprana, juego y coaches certificados en primera infancia. ¡Agenda tu clase de prueba!",
  alternates: {
    canonical: "https://miniswimmer.cl/matronatacion",
    languages: {
      "x-default": "https://miniswimmer.cl/matronatacion",
      es: "https://miniswimmer.cl/matronatacion",
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
    url: "https://miniswimmer.cl/matronatacion",
    title:
      "Matronatación | Clases de Natación para Bebés desde los 2 Meses — Miniswimmer",
    description:
      "Clases de matronatación para bebés desde los 2 meses. Fortalece el vínculo con tu bebé en el agua con el Método Miniswimmer: estimulación temprana, juego y coaches certificados en primera infancia.",
    images: [
      {
        url: "https://images.prismic.io/miniswimmerchile/aBuatCdWJ-7kRuIZ_SOCIAL-MEDIAv2.png?auto=format,compress",
        width: 1200,
        height: 630,
        alt: "Matronatación — Clases de Natación para Bebés con Miniswimmer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@miniswimmer_edu",
    creator: "@miniswimmer_edu",
    title:
      "Matronatación | Clases de Natación para Bebés desde los 2 Meses — Miniswimmer",
    description:
      "Clases de matronatación para bebés desde los 2 meses. Fortalece el vínculo con tu bebé en el agua con el Método Miniswimmer: estimulación temprana, juego y coaches certificados en primera infancia.",
    images: [
      {
        url: "https://images.prismic.io/miniswimmerchile/aBuatCdWJ-7kRuIZ_SOCIAL-MEDIAv2.png?auto=format,compress",
        width: 1200,
        height: 630,
        alt: "Matronatación — Clases de Natación para Bebés con Miniswimmer",
      },
    ],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://miniswimmer.cl/matronatacion#service",
  name: "Matronatación — Clases para Bebés",
  url: "https://miniswimmer.cl/matronatacion",
  description:
    "Clases de matronatación para bebés desde los 2 meses. El Método Miniswimmer integra estimulación temprana, PNL, coaching y psicomotricidad para fortalecer el vínculo entre papás y bebés en un entorno acuático seguro y divertido.",
  provider: {
    "@type": "Organization",
    "@id": "https://miniswimmer.cl/#organization",
    name: "Miniswimmer",
  },
  serviceType: "Matronatación y estimulación acuática temprana para bebés",
  audience: {
    "@type": "Audience",
    audienceType: "Bebés desde los 2 meses y sus padres o apoderados",
  },
  areaServed: {
    "@type": "Country",
    name: "Chile",
  },
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
      name: "Servicios",
      item: "https://miniswimmer.cl/servicios",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Matronatación",
      item: "https://miniswimmer.cl/matronatacion",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Desde qué edad pueden empezar las clases de matronatación?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "En Miniswimmer nuestras clases de matronatación están diseñadas para bebés desde los 2 meses de vida. Cada clase se adapta a la etapa de desarrollo del bebé, siguiendo el Método Miniswimmer que trabaja con PNL, coaching y psicomotricidad para estimular el desarrollo motor, cognitivo y emocional desde los primeros meses.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué es la matronatación y en qué consiste?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "La matronatación son clases de natación en las que papás o mamás entran al agua junto con su bebé. Es una experiencia de estimulación acuática temprana que fortalece el vínculo afectivo, desarrolla la confianza en el agua y potencia el desarrollo psicomotor del bebé a través de juegos, canciones y actividades diseñadas para cada edad.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué beneficios tiene la matronatación para mi bebé?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "La matronatación con el Método Miniswimmer ofrece: estimulación del desarrollo motor dentro y fuera del agua, fortalecimiento del vínculo afectivo entre papás y bebé, iniciación a la seguridad acuática y técnicas de autorrescate adaptadas a la edad, desarrollo cognitivo y emocional a través del juego acuático, y un ambiente seguro, cálido y lleno de alegría.",
      },
    },
    {
      "@type": "Question",
      name: "¿Los papás entran al agua en las clases de matronatación?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí, en las clases de matronatación los papás o apoderados entran al agua junto con el bebé. Este es uno de los pilares del método: la presencia y el contacto del adulto de referencia es fundamental para que el bebé se sienta seguro, disfrute la experiencia y desarrolle confianza en el medio acuático.",
      },
    },
  ],
};

export default function MatronatacionPage() {
  return (
    <>
      <SchemaMarkup data={serviceSchema} />
      <SchemaMarkup data={breadcrumbSchema} />
      <SchemaMarkup data={faqSchema} />
      <main>
        <Matronatacion />
      </main>
    </>
  );
}
