import { Metadata } from "next";
import SchemaMarkup from "@/components/Common/SchemaMarkup";
import NeuroSwimmer from "@/components/NeuroSwimmer";

export const metadata: Metadata = {
  title: "Neuro Swimmer | Natación Adaptada para Niños con TEA — Miniswimmer",
  description:
    "Programa de natación especializado para niños con Trastorno del Espectro Autista (TEA) y neurodivergencia. Método Miniswimmer con PNL, coaches certificados y ambiente seguro. ¡Inscríbelos hoy!",
  alternates: {
    canonical: "https://miniswimmer.cl/neuro-swimmer",
    languages: {
      "x-default": "https://miniswimmer.cl/neuro-swimmer",
      es: "https://miniswimmer.cl/neuro-swimmer",
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
    url: "https://miniswimmer.cl/neuro-swimmer",
    title: "Neuro Swimmer | Natación Adaptada para Niños con TEA — Miniswimmer",
    description:
      "Programa de natación especializado para niños con Trastorno del Espectro Autista (TEA) y neurodivergencia. Método Miniswimmer con PNL, coaches certificados y ambiente seguro.",
    images: [
      {
        url: "https://images.prismic.io/miniswimmerchile/aBuatCdWJ-7kRuIZ_SOCIAL-MEDIAv2.png?auto=format,compress",
        width: 1200,
        height: 630,
        alt: "Neuro Swimmer — Natación Adaptada para Niños con TEA",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@miniswimmer_edu",
    creator: "@miniswimmer_edu",
    title: "Neuro Swimmer | Natación Adaptada para Niños con TEA — Miniswimmer",
    description:
      "Programa de natación especializado para niños con Trastorno del Espectro Autista (TEA) y neurodivergencia. Método Miniswimmer con PNL, coaches certificados y ambiente seguro.",
    images: [
      {
        url: "https://images.prismic.io/miniswimmerchile/aBuatCdWJ-7kRuIZ_SOCIAL-MEDIAv2.png?auto=format,compress",
        width: 1200,
        height: 630,
        alt: "Neuro Swimmer — Natación Adaptada para Niños con TEA",
      },
    ],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://miniswimmer.cl/neuro-swimmer#service",
  name: "Neuro Swimmer",
  url: "https://miniswimmer.cl/neuro-swimmer",
  description:
    "Programa de natación especializado para niños con Trastorno del Espectro Autista (TEA) y otras condiciones neurodivergentes. Integra Programación Neurolingüística (PNL), enfoque terapéutico y coaches certificados.",
  provider: {
    "@type": "Organization",
    "@id": "https://miniswimmer.cl/#organization",
    name: "Miniswimmer",
  },
  serviceType: "Natación adaptada para niños con TEA",
  audience: {
    "@type": "Audience",
    audienceType:
      "Niños con Trastorno del Espectro Autista y condiciones neurodivergentes",
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
      name: "Neuro Swimmer",
      item: "https://miniswimmer.cl/neuro-swimmer",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Qué es el programa Neuro Swimmer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Neuro Swimmer es el programa de natación con enfoque neurodivergente de Miniswimmer. Nuestros coaches cuentan con la Certificación Neuro Swimmer, una formación especializada en enseñanza de natación desde una mirada inclusiva, consciente y basada en el neurodesarrollo. Cada clase se diseña respetando los tiempos, necesidades sensoriales, emocionales y motoras de cada niño.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué formación tienen los coaches de Neuro Swimmer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nuestros instructores están certificados en enseñanza de natación con enfoque neurodivergente. La formación incluye fundamentos del neurodesarrollo aplicados a la natación, estrategias para trabajar con niños neurodivergentes, manejo emocional y sensorial en el medio acuático, y diseño de clases inclusivas y personalizadas.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué beneficios tienen las clases Neuro Swimmer para mi hijo?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Las clases Neuro Swimmer ofrecen: un ambiente seguro y sin sobrecarga sensorial, un coach que respeta el ritmo y las necesidades de tu hijo, desarrollo gradual de la confianza en el agua, seguridad acuática adaptada, y acompañamiento emocional durante todo el proceso de aprendizaje.",
      },
    },
    {
      "@type": "Question",
      name: "¿Las clases son en grupos grandes o individuales?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Las clases se realizan en piscinas privadas con grupos muy reducidos. Esto permite minimizar la sobrecarga sensorial y garantizar que el coach pueda dedicar la atención personalizada que cada niño neurodivergente necesita.",
      },
    },
  ],
};

export default function NeuroSwimmerPage() {
  return (
    <>
      <SchemaMarkup data={serviceSchema} />
      <SchemaMarkup data={breadcrumbSchema} />
      <SchemaMarkup data={faqSchema} />
      <main>
        <NeuroSwimmer />
      </main>
    </>
  );
}
