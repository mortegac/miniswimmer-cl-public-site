import { Metadata } from "next";
import SchemaMarkup from "@/components/Common/SchemaMarkup";
import Pricing from "@/components/Pricing";

export const metadata: Metadata = {
  title: "Swimming Class Pricing Plans | Miniswimmer",
  description: `Explore our swimming plans for regular, premium, and home classes. Classes for babies, children, adults, and pregnant women with certified instructors, from 2 months old through advanced levels.`,
  alternates: {
    canonical: "https://www.miniswimmer.cl/pricing",
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
    url: "https://www.miniswimmer.cl/pricing",
    title: `Swimming Class Pricing Plans | Miniswimmer`,
    description: `Explore our swimming plans for regular, premium, and home classes. Classes for babies, children, adults, and pregnant women with certified instructors, from 2 months old through advanced levels.`,
    images: [
      {
        url: "https://images.prismic.io/miniswimmerchile/aBuatCdWJ-7kRuIZ_SOCIAL-MEDIAv2.png?auto=format,compress",
        width: 1200,
        height: 630,
        alt: "Miniswimmer Method",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@miniswimmer_edu",
    title: `Swimming Class Pricing Plans | Miniswimmer`,
    description: `Explore our swimming plans for regular, premium, and home classes. Classes for babies, children, adults, and pregnant women with certified instructors, from 2 months old through advanced levels.`,
    images: [
      {
        url: "https://images.prismic.io/miniswimmerchile/aBuatCdWJ-7kRuIZ_SOCIAL-MEDIAv2.png?auto=format,compress",
        width: 1200,
        height: 630,
        alt: "Miniswimmer Method",
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
    "Descubre nuestras planes de natación para clases regulares, premium y a domicilio. Clases para bebés, niños, adultos y embarazadas con instructores certificados, desde los 2 meses hasta niveles avanzados.",
  sameAs: [
    "https://www.facebook.com/miniswimmer.academy",
    "https://www.instagram.com/miniswimmer.chile",
    "https://www.instagram.com/miniswimmer.us/",
    "https://www.linkedin.com/company/105056316",
  ],
};

export default function PricingPage() {
  return (
    <>
      <SchemaMarkup type="Organization" data={organizationSchema} />
      <main>
        <Pricing />
      </main>
    </>
  );
}
