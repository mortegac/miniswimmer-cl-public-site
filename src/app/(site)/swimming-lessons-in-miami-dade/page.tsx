import { Metadata } from "next";
import SchemaMarkup from "@/components/Common/SchemaMarkup";
import LessonsInMiamiDade from "@/components/LessonsInMiamiDade";

export const metadata: Metadata = {
  title: "Enroll Your Child in Swimming in Miami-Dade!",
  description: `Find our convenient locations for personalized in-home swimming lessons. We help babies and children of all levels improve their technique, build endurance, and gain confidence in the water. We serve the cities of Aventura, North Bay Village, North Miami, North Miami Beach, Sunny Isles Beach, Golden Beach in Miami-Dade County.`,
  alternates: {
    canonical: "https://www.miniswimmer.cl/swimming-lessons-in-miami-dade",
    languages: {
      "x-default": "https://www.miniswimmer.cl/swimming-lessons-in-miami-dade",
      "en-US": "https://www.miniswimmer.cl/swimming-lessons-in-miami-dade",
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
    url: "https://www.miniswimmer.cl/swimming-lessons-in-miami-dade",
    title: `Enroll Your Child in Swimming in Miami-Dade!`,
    description: `Find our convenient locations for personalized in-home swimming lessons. We help babies and children of all levels improve their technique, build endurance, and gain confidence in the water.`,
    images: [
      {
        url: "https://images.prismic.io/miniswimmerchile/aBuatCdWJ-7kRuIZ_SOCIAL-MEDIAv2.png?auto=format,compress",
        width: 1200,
        height: 630,
        alt: "Enroll Your Child in Swimming in Miami-Dade!",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@miniswimmer_edu",
    creator: "@miniswimmer_edu",
    title: `Enroll Your Child in Swimming in Miami-Dade!`,
    description: `Find our convenient locations for personalized in-home swimming lessons. We help babies and children of all levels improve their technique, build endurance, and gain confidence in the water.`,
    images: [
      {
        url: "https://images.prismic.io/miniswimmerchile/aBuatCdWJ-7kRuIZ_SOCIAL-MEDIAv2.png?auto=format,compress",
        width: 1200,
        height: 630,
        alt: "Enroll Your Child in Swimming in Miami-Dade!",
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
  "@id": "https://www.miniswimmer.cl/swimming-lessons-in-miami-dade#localbusiness",
  name: "Miniswimmer — Swimming Lessons in Miami-Dade",
  url: "https://www.miniswimmer.cl/swimming-lessons-in-miami-dade",
  image:
    "https://images.prismic.io/miniswimmerchile/aBuatCdWJ-7kRuIZ_SOCIAL-MEDIAv2.png?auto=format,compress",
  logo: {
    "@type": "ImageObject",
    url: "https://www.miniswimmer.cl/images/logo/logo.svg",
  },
  description:
    "In-home personalized swimming lessons for babies and children in Miami-Dade County. Serving Aventura, North Miami, North Miami Beach, Sunny Isles Beach, Golden Beach, and North Bay Village.",
  telephone: "+56973447496",
  priceRange: "$$$",
  currenciesAccepted: "USD",
  paymentAccepted: "Cash, Credit Card",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Miami",
    addressRegion: "FL",
    postalCode: "33160",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 25.9411,
    longitude: -80.1333,
  },
  areaServed: [
    "Aventura",
    "North Miami",
    "North Miami Beach",
    "Sunny Isles Beach",
    "Golden Beach",
    "North Bay Village",
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "19:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "09:00",
      closes: "13:00",
    },
  ],
  makesOffer: [
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "In-Home Baby Swimming Lessons",
        description:
          "Personalized in-home swimming lessons for babies from 2 months old using the Miniswimmer Method.",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Children's Swimming Lessons",
        description:
          "Private swimming lessons for children ages 3–12 at your home pool.",
      },
    },
  ],
  parentOrganization: { "@id": "https://www.miniswimmer.cl/#organization" },
  sameAs: [
    "https://www.facebook.com/miniswimmer.academy",
    "https://www.instagram.com/miniswimmer.us",
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://www.miniswimmer.cl",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Swimming Lessons in Miami-Dade",
      item: "https://www.miniswimmer.cl/swimming-lessons-in-miami-dade",
    },
  ],
};

export default function LessonsInMiamiDadePage() {
  return (
    <>
      <SchemaMarkup data={organizationRefSchema} />
      <SchemaMarkup data={localBusinessSchema} />
      <SchemaMarkup data={breadcrumbSchema} />
      <main>
        <LessonsInMiamiDade />
      </main>
    </>
  );
}
