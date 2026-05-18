import { Metadata } from "next";
import SchemaMarkup from "@/components/Common/SchemaMarkup";
import Program from "@/components/Program";

export const metadata: Metadata = {
  title: "What Is Our Swimming Method? | Miniswimmer",
  description: `Our swimming program is designed to help swimmers of all levels improve their technique, build endurance, and gain confidence in the water. Learn more about our method and how it can benefit you.`,
  alternates: {
    canonical: "https://www.miniswimmer.cl/program",
    languages: {
      "x-default": "https://www.miniswimmer.cl/metodo",
      es: "https://www.miniswimmer.cl/metodo",
      "en-US": "https://www.miniswimmer.cl/program",
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
    url: "https://www.miniswimmer.cl/program",
    title: `What Is Our Swimming Method? | Miniswimmer`,
    description: `Our swimming program is designed to help swimmers of all levels improve their technique, build endurance, and gain confidence in the water. Learn more about our method and how it can benefit you.`,
    images: [
      {
        url: "https://images.prismic.io/miniswimmerchile/aBuatCdWJ-7kRuIZ_SOCIAL-MEDIAv2.png?auto=format,compress",
        width: 1200,
        height: 630,
        alt: "What Is Our Swimming Method? | Miniswimmer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@miniswimmer_edu",
    creator: "@miniswimmer_edu",
    title: `What Is Our Swimming Method? | Miniswimmer`,
    description: `Our swimming program is designed to help swimmers of all levels improve their technique, build endurance, and gain confidence in the water. Learn more about our method and how it can benefit you.`,
    images: [
      {
        url: "https://images.prismic.io/miniswimmerchile/aBuatCdWJ-7kRuIZ_SOCIAL-MEDIAv2.png?auto=format,compress",
        width: 1200,
        height: 630,
        alt: "What Is Our Swimming Method? | Miniswimmer",
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
  logo: "https://images.prismic.io/miniswimmerchile/aBuatCdWJ-7kRuIZ_SOCIAL-MEDIAv2.png?auto=format,compress",
  description:
    "Nuestro programa de natación está diseñado para ayudar a nadadores de todos los niveles a mejorar su técnica, desarrollar resistencia y ganar confianza en el agua. Descubre más sobre nuestro programa y cómo puede beneficiarte.",
  sameAs: [
    "https://www.facebook.com/miniswimmer.academy",
    "https://www.instagram.com/miniswimmer.chile",
    "https://www.instagram.com/miniswimmer.us/",
    "https://www.linkedin.com/company/105056316",
  ],
};

export default function ProgramPage() {
  return (
    <>
      <SchemaMarkup type="Organization" data={organizationSchema} />
      <main>
        <Program />
      </main>
    </>
  );
}
