import { Metadata } from "next";
import SchemaMarkup from "@/components/Common/SchemaMarkup";

import Home from "@/components/Home";

export const metadata: Metadata = {
  title: "Matronatación Santiago — Clases de Natación para Bebés | Miniswimmer",
  description:
    "Clases de matronatación para bebés desde 2 meses en Peñalolén, La Reina, Ñuñoa, Vitacura, La Florida, Viña del Mar, Rancagua y Chillán. Coaches certificados, piscinas temperadas. ¡Agenda tu clase!",
  keywords: [
    "matronatacion santiago",
    "matronatacion la reina",
    "matronatacion penalolen",
    "matronatacion ñuñoa",
    "matronatacion vitacura",
    "matronatacion la florida",
    "matronatacion macul",
    "matronatacion lo barnechea",
    "matronatacion san joaquin",
    "matronatacion valparaiso",
    "matronatacion con con",
    "matronatacion viña del mar",
    "matronatacion rancagua",
    "matronatacion chillan",
    "clases natacion bebes santiago",
    "natacion para bebes santiago",
    "academia natacion infantil chile",
  ],
  alternates: {
    canonical: "https://www.miniswimmer.cl",
    languages: {
      "x-default": "https://www.miniswimmer.cl",
      es: "https://www.miniswimmer.cl",
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
    url: "https://www.miniswimmer.cl",
    title: "Matronatación Santiago — Clases de Natación para Bebés | Miniswimmer",
    description:
      "Matronatación para bebés desde 2 meses en Peñalolén, La Reina, Ñuñoa, Vitacura, Viña del Mar, Rancagua y Chillán. Coaches certificados y piscinas temperadas.",
    images: [
      {
        url: "https://images.prismic.io/miniswimmerchile/aBuatCdWJ-7kRuIZ_SOCIAL-MEDIAv2.png?auto=format,compress",
        width: 1200,
        height: 630,
        alt: "Miniswimmer — Academia de Matronatación para Bebés en Chile",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@miniswimmer_edu",
    creator: "@miniswimmer_edu",
    title: "Matronatación Santiago — Clases de Natación para Bebés | Miniswimmer",
    description:
      "Matronatación para bebés desde 2 meses. Sedes en Peñalolén, La Reina, Ñuñoa, Vitacura, Viña del Mar, Rancagua y Chillán.",
    images: [
      {
        url: "https://images.prismic.io/miniswimmerchile/aBuatCdWJ-7kRuIZ_SOCIAL-MEDIAv2.png?auto=format,compress",
        width: 1200,
        height: 630,
        alt: "Miniswimmer — Matronatación para Bebés Chile",
      },
    ],
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://www.miniswimmer.cl/#organization",
  name: "Miniswimmer",
  url: "https://www.miniswimmer.cl",
  logo: {
    "@type": "ImageObject",
    url: "https://www.miniswimmer.cl/images/logo/logo.svg",
    width: 200,
    height: 60,
  },
  description:
    "Academia de natación con el Método Miniswimmer. Clases de matronatación para bebés desde 2 meses, natación infantil, Mami Swimmer para embarazadas y Neuro Swimmer para niños neurodivergentes. Sedes en Peñalolén, La Reina, Ñuñoa, Vitacura, Viña del Mar, Rancagua y Chillán.",
  telephone: "+56973447496",
  email: "contacto@miniswimmer.cl",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Camino de la tierra s/n",
    addressLocality: "Peñalolén",
    addressRegion: "Región Metropolitana",
    addressCountry: "CL",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+56973447496",
    contactType: "customer service",
    availableLanguage: ["Spanish", "English"],
    url: "https://www.miniswimmer.cl/contacto",
  },
  areaServed: [
    { "@type": "City", name: "Peñalolén", containedInPlace: { "@type": "AdministrativeArea", name: "Región Metropolitana, Chile" } },
    { "@type": "City", name: "La Reina", containedInPlace: { "@type": "AdministrativeArea", name: "Región Metropolitana, Chile" } },
    { "@type": "City", name: "Ñuñoa", containedInPlace: { "@type": "AdministrativeArea", name: "Región Metropolitana, Chile" } },
    { "@type": "City", name: "Vitacura", containedInPlace: { "@type": "AdministrativeArea", name: "Región Metropolitana, Chile" } },
    { "@type": "City", name: "La Florida", containedInPlace: { "@type": "AdministrativeArea", name: "Región Metropolitana, Chile" } },
    { "@type": "City", name: "Macul", containedInPlace: { "@type": "AdministrativeArea", name: "Región Metropolitana, Chile" } },
    { "@type": "City", name: "Lo Barnechea", containedInPlace: { "@type": "AdministrativeArea", name: "Región Metropolitana, Chile" } },
    { "@type": "City", name: "San Joaquín", containedInPlace: { "@type": "AdministrativeArea", name: "Región Metropolitana, Chile" } },
    { "@type": "City", name: "Santiago", containedInPlace: { "@type": "AdministrativeArea", name: "Región Metropolitana, Chile" } },
    { "@type": "City", name: "Viña del Mar", containedInPlace: { "@type": "AdministrativeArea", name: "Región de Valparaíso, Chile" } },
    { "@type": "City", name: "Concón", containedInPlace: { "@type": "AdministrativeArea", name: "Región de Valparaíso, Chile" } },
    { "@type": "City", name: "Valparaíso", containedInPlace: { "@type": "AdministrativeArea", name: "Región de Valparaíso, Chile" } },
    { "@type": "City", name: "Rancagua", containedInPlace: { "@type": "AdministrativeArea", name: "Región de O'Higgins, Chile" } },
    { "@type": "City", name: "Chillán", containedInPlace: { "@type": "AdministrativeArea", name: "Región de Ñuble, Chile" } },
    { "@type": "AdministrativeArea", name: "Miami-Dade County, Florida, USA" },
    { "@type": "AdministrativeArea", name: "Broward County, Florida, USA" },
  ],
  sameAs: [
    "https://www.facebook.com/miniswimmer.academy",
    "https://www.instagram.com/miniswimmer.chile",
    "https://www.instagram.com/miniswimmer.us",
    "https://www.linkedin.com/company/105056316",
  ],
};

// LocalBusiness schemas — one per region for multi-location local SEO
const localBusinessSchemas = [
  {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "SportsActivityLocation"],
    "@id": "https://www.miniswimmer.cl/#sede-santiago",
    name: "Miniswimmer — Matronatación Santiago (Peñalolén, La Reina, Ñuñoa, Vitacura)",
    description:
      "Clases de matronatación para bebés desde 2 meses en Santiago. Sedes en Peñalolén, La Reina, Ñuñoa y Vitacura. Piscinas temperadas 28–33°C con coaches certificados. También atendemos La Florida, Macul, Lo Barnechea, San Joaquín y comunas cercanas.",
    telephone: "+56973447496",
    url: "https://www.miniswimmer.cl/clases-natacion-penalolen",
    image: "https://images.prismic.io/miniswimmerchile/aBuatCdWJ-7kRuIZ_SOCIAL-MEDIAv2.png?auto=format,compress",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Camino de la tierra s/n",
      addressLocality: "Peñalolén",
      addressRegion: "Región Metropolitana",
      addressCountry: "CL",
    },
    priceRange: "$$",
    currenciesAccepted: "CLP",
    areaServed: [
      "Peñalolén", "La Reina", "Ñuñoa", "Vitacura", "La Florida",
      "Macul", "Lo Barnechea", "San Joaquín", "Las Condes", "Santiago",
    ],
    parentOrganization: { "@id": "https://www.miniswimmer.cl/#organization" },
  },
  {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "SportsActivityLocation"],
    "@id": "https://www.miniswimmer.cl/#sede-valparaiso",
    name: "Miniswimmer — Matronatación Viña del Mar y Concón",
    description:
      "Clases de matronatación para bebés y natación infantil en Viña del Mar y Concón. Piscinas temperadas 30–32°C. También atendemos Valparaíso, Reñaca, Quilpué y Villa Alemana.",
    telephone: "+56973447496",
    url: "https://www.miniswimmer.cl/clases-natacion-vina-del-mar",
    image: "https://images.prismic.io/miniswimmerchile/aBuatCdWJ-7kRuIZ_SOCIAL-MEDIAv2.png?auto=format,compress",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Viña del Mar",
      addressRegion: "Región de Valparaíso",
      addressCountry: "CL",
    },
    priceRange: "$$",
    currenciesAccepted: "CLP",
    areaServed: ["Viña del Mar", "Concón", "Valparaíso", "Reñaca", "Quilpué", "Villa Alemana"],
    parentOrganization: { "@id": "https://www.miniswimmer.cl/#organization" },
  },
  {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "SportsActivityLocation"],
    "@id": "https://www.miniswimmer.cl/#sede-rancagua",
    name: "Miniswimmer — Matronatación Rancagua",
    description:
      "Clases de matronatación para bebés y natación infantil en Rancagua, Región de O'Higgins. Piscina temperada 30–32°C con coaches certificados.",
    telephone: "+56973447496",
    url: "https://www.miniswimmer.cl/conoce-nuestras-sedes",
    image: "https://images.prismic.io/miniswimmerchile/aBuatCdWJ-7kRuIZ_SOCIAL-MEDIAv2.png?auto=format,compress",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Rancagua",
      addressRegion: "Región de O'Higgins",
      addressCountry: "CL",
    },
    priceRange: "$$",
    currenciesAccepted: "CLP",
    areaServed: ["Rancagua"],
    parentOrganization: { "@id": "https://www.miniswimmer.cl/#organization" },
  },
  {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "SportsActivityLocation"],
    "@id": "https://www.miniswimmer.cl/#sede-chillan",
    name: "Miniswimmer — Matronatación Chillán",
    description:
      "Clases de matronatación para bebés y natación infantil en Chillán, Región de Ñuble. Piscina temperada 30–32°C con coaches certificados.",
    telephone: "+56973447496",
    url: "https://www.miniswimmer.cl/conoce-nuestras-sedes",
    image: "https://images.prismic.io/miniswimmerchile/aBuatCdWJ-7kRuIZ_SOCIAL-MEDIAv2.png?auto=format,compress",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Chillán",
      addressRegion: "Región de Ñuble",
      addressCountry: "CL",
    },
    priceRange: "$$",
    currenciesAccepted: "CLP",
    areaServed: ["Chillán"],
    parentOrganization: { "@id": "https://www.miniswimmer.cl/#organization" },
  },
];

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://www.miniswimmer.cl/#website",
  url: "https://www.miniswimmer.cl",
  name: "Miniswimmer",
  description: "Academia de natación para bebés, niños, adultos y embarazadas.",
  inLanguage: ["es", "en"],
  publisher: { "@id": "https://www.miniswimmer.cl/#organization" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Desde qué edad pueden empezar los bebés las clases de matronatación?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Los bebés pueden comenzar matronatación desde los 2 meses de edad. El programa Miniswimmer está diseñado para bebés desde 2 meses hasta 3 años, siempre acompañados de uno de sus padres o cuidadores en el agua.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué es el Método Miniswimmer y en qué se diferencia de otras escuelas de natación?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "El Método Miniswimmer combina natación con Programación Neurolingüística (PNL) y coaching. A diferencia de las clases tradicionales, trabajamos el desarrollo integral del niño: seguridad acuática, autonomía, vínculo afectivo y confianza. Todos nuestros coaches están certificados en desarrollo infantil y primera infancia.",
      },
    },
    {
      "@type": "Question",
      name: "¿Hay clases de matronatación en La Reina, Santiago?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí. Miniswimmer ofrece clases de matronatación en La Reina y comunas cercanas como Peñalolén, Ñuñoa, Macul, La Florida, Vitacura y Lo Barnechea. Contáctanos para consultar horarios disponibles.",
      },
    },
    {
      "@type": "Question",
      name: "¿Dónde puedo tomar clases de matronatación en Santiago?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Miniswimmer tiene sedes en Peñalolén, La Reina, Ñuñoa y Vitacura en la Región Metropolitana. También atendemos comunas como Macul, La Florida, San Joaquín y Lo Barnechea. Todas las piscinas están temperadas entre 28 y 33°C.",
      },
    },
    {
      "@type": "Question",
      name: "¿Ofrecen matronatación en Valparaíso, Viña del Mar o Concón?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí. En la Región de Valparaíso tenemos clases de matronatación en Viña del Mar y Concón, y también atendemos familias de Valparaíso, Reñaca, Quilpué y Villa Alemana. Contáctanos para conocer horarios.",
      },
    },
    {
      "@type": "Question",
      name: "¿Hay clases de matronatación en Rancagua y Chillán?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí. Miniswimmer tiene sedes en Rancagua (Región de O'Higgins) y Chillán (Región de Ñuble). Contáctanos al +56 9 7344 7496 para consultar disponibilidad de horarios en estas ciudades.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué programas de natación ofrecen?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ofrecemos: Matronatación (bebés 2 meses–3 años con papá o mamá en el agua), natación infantil (3–12 años), Mami Swimmer (mamás embarazadas), Big Swimmer (adolescentes y adultos), Hidro Swimmer (hidroterapia acuática) y Neuro Swimmer (programa inclusivo para niños con TEA y neurodivergencia).",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuánto tiempo tarda un bebé en aprender a flotar con el Método Miniswimmer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "La mayoría de los bebés comienza a mostrar avances notables en las primeras 4 a 6 clases. Con constancia, muchos bebés logran flotar de forma asistida en 2 a 3 meses. Los resultados dependen de la edad, la frecuencia de clases y el nivel inicial de familiarización con el agua.",
      },
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <SchemaMarkup data={organizationSchema} />
      <SchemaMarkup data={websiteSchema} />
      <SchemaMarkup data={faqSchema} />
      {localBusinessSchemas.map((schema) => (
        <SchemaMarkup key={schema["@id"]} data={schema} />
      ))}
      <main>
        <Home />
      </main>
    </>
  );
}
