import { Metadata } from "next";
import SchemaMarkup from "@/components/Common/SchemaMarkup";
import LessonsInVinadelMar from "@/components/LessonsInVinadelMar";

export const metadata: Metadata = {
  title: "Academia de Natación para Bebés, Niños, Embarazadas en Viña del Mar",
  description: `¿Buscas clases de natación en Viña del Mar, Concón, Valparaíso, Reñaca, Quilpué, Villa Alemana? Con nuestro Método Miniswimmer, combinamos la natación con PNL y coaching para que tus hijos aprendan de forma real y significativa. Ofrecemos lecciones personalizadas para bebés y niños de todas las edades. ¡Inscríbelos hoy!`,
  alternates: {
    canonical: "https://www.miniswimmer.cl/clases-natacion-vina-del-mar",
    languages: {
      "x-default": "https://www.miniswimmer.cl/clases-natacion-vina-del-mar",
      es: "https://www.miniswimmer.cl/clases-natacion-vina-del-mar",
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
    url: "https://www.miniswimmer.cl/clases-natacion-vina-del-mar",
    title: `Academia de Natación para Bebés, Niños, Embarazadas en Viña del Mar`,
    description: `¿Buscas clases de natación en Viña del Mar, Concón, Valparaíso, Reñaca, Quilpué, Villa Alemana? Con nuestro Método Miniswimmer, combinamos la natación con PNL y coaching para que tus hijos aprendan de forma real y significativa. Ofrecemos lecciones personalizadas para bebés y niños de todas las edades. ¡Inscríbelos hoy!`,
    images: [
      {
        url: "https://images.prismic.io/miniswimmerchile/aLTn32GNHVfTOeOK_SOCIAL-MEDIA-Vina-del-mar.png?auto=format,compress",
        width: 1200,
        height: 630,
        alt: "Academia de Natación para Bebés, Niños, Embarazadas en Viña del Mar",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@miniswimmer_edu",
    creator: "@miniswimmer_edu",
    title: `Academia de Natación para Bebés, Niños, Embarazadas en Viña del Mar`,
    description: `¿Buscas clases de natación en Viña del Mar, Concón, Valparaíso, Reñaca, Quilpué, Villa Alemana? Con nuestro Método Miniswimmer, combinamos la natación con PNL y coaching para que tus hijos aprendan de forma real y significativa. Ofrecemos lecciones personalizadas para bebés y niños de todas las edades. ¡Inscríbelos hoy!`,
    images: [
      {
        url: "https://images.prismic.io/miniswimmerchile/aLTn32GNHVfTOeOK_SOCIAL-MEDIA-Vina-del-mar.png?auto=format,compress",
        width: 1200,
        height: 630,
        alt: "Academia de Natación para Bebés, Niños, Embarazadas en Viña del Mar",
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

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "SportsActivityLocation"],
  "@id": "https://www.miniswimmer.cl/clases-natacion-vina-del-mar#localbusiness",
  name: "Miniswimmer — Clases de Natación en Viña del Mar",
  url: "https://www.miniswimmer.cl/clases-natacion-vina-del-mar",
  image:
    "https://images.prismic.io/miniswimmerchile/aLTn32GNHVfTOeOK_SOCIAL-MEDIA-Vina-del-mar.png?auto=format,compress",
  logo: {
    "@type": "ImageObject",
    url: "https://www.miniswimmer.cl/images/logo/logo.svg",
  },
  description:
    "Clases de natación en Viña del Mar, Concón, Valparaíso, Reñaca, Quilpué y Villa Alemana. Método Miniswimmer: Natación + PNL y Coaching. Lecciones personalizadas para bebés y niños.",
  telephone: "+56973447496",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Viña del Mar",
    addressRegion: "Valparaíso",
    addressCountry: "CL",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -33.0245,
    longitude: -71.5518,
  },
  areaServed: [
    "Viña del Mar",
    "Concón",
    "Valparaíso",
    "Reñaca",
    "Quilpué",
    "Villa Alemana",
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "20:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "09:00",
      closes: "14:00",
    },
  ],
  makesOffer: [
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Matronatación",
        description:
          "Clases de natación para bebés de 2 meses a 3 años acompañados de un adulto.",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Natación Infantil",
        description: "Clases de natación para niños de 3 a 12 años.",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Mami Swimmer",
        description:
          "Natación y hidrogimnasia para embarazadas y en período postnatal.",
      },
    },
  ],
  parentOrganization: { "@id": "https://www.miniswimmer.cl/#organization" },
  sameAs: [
    "https://www.facebook.com/miniswimmer.academy",
    "https://www.instagram.com/miniswimmer.chile",
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
      name: "Clases de Natación en Viña del Mar",
      item: "https://www.miniswimmer.cl/clases-natacion-vina-del-mar",
    },
  ],
};

export default function LessonsInVinadelMarPage() {
  return (
    <>
      <SchemaMarkup data={organizationRefSchema} />
      <SchemaMarkup data={localBusinessSchema} />
      <SchemaMarkup data={breadcrumbSchema} />
      <main>
        <LessonsInVinadelMar />
      </main>
    </>
  );
}
