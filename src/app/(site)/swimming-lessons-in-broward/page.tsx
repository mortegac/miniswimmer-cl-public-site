import { Metadata } from "next";
import SchemaMarkup from "@/components/Common/SchemaMarkup";
import LessonsInBroward from "@/components/LessonsInBroward";



export const metadata: Metadata = {
	title: "Enroll Your Child in Swimming in Broward!",
	description: `In-home swimming lessons for babies and children across Broward County — Fort Lauderdale, Hollywood, Coral Springs, Pembroke Pines, Miramar, Weston, and more. Personalized coaching with the Miniswimmer Method.`,
	alternates: {
		canonical: 'https://miniswimmer.cl/swimming-lessons-in-broward',
		languages: {
			'x-default': 'https://miniswimmer.cl/swimming-lessons-in-broward',
			'en-US': 'https://miniswimmer.cl/swimming-lessons-in-broward',
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
		url: 'https://miniswimmer.cl/swimming-lessons-in-broward',
		title: `Enroll Your Child in Swimming in Broward!`,
		description: `Find our convenient locations for personalized in-home swimming lessons. We help babies and children of all levels improve their technique, build endurance, and gain confidence in the water.`,
		images: [
			{
				url: "https://images.prismic.io/miniswimmerchile/aBuatCdWJ-7kRuIZ_SOCIAL-MEDIAv2.png?auto=format,compress",
				width: 1200,
				height: 630,
				alt: "Enroll Your Child in Swimming in Broward!"
			}
		],
	},
	twitter: {
		card: "summary_large_image",
		site: "@miniswimmer_edu",
		creator: "@miniswimmer_edu",
		title: `Enroll Your Child in Swimming in Broward!`,
		description: `Find our convenient locations for personalized in-home swimming lessons. We help babies and children of all levels improve their technique, build endurance, and gain confidence in the water.`,
		images: [
			{
				url: "https://images.prismic.io/miniswimmerchile/aBuatCdWJ-7kRuIZ_SOCIAL-MEDIAv2.png?auto=format,compress",
				width: 1200,
				height: 630,
				alt: "Enroll Your Child in Swimming in Broward!"
			}
		],
	},
};
const organizationRefSchema = {
	"@context": "https://schema.org",
	"@type": "Organization",
	"@id": "https://miniswimmer.cl/#organization",
	"name": "Miniswimmer",
	"url": "https://miniswimmer.cl"
};

const localBusinessSchema = {
	"@context": "https://schema.org",
	"@type": ["LocalBusiness", "SportsActivityLocation"],
	"@id": "https://miniswimmer.cl/swimming-lessons-in-broward#localbusiness",
	"name": "Miniswimmer — Swimming Lessons in Broward County",
	"url": "https://miniswimmer.cl/swimming-lessons-in-broward",
	"image": "https://images.prismic.io/miniswimmerchile/aBuatCdWJ-7kRuIZ_SOCIAL-MEDIAv2.png?auto=format,compress",
	"logo": {
		"@type": "ImageObject",
		"url": "https://miniswimmer.cl/images/logo/logo.svg"
	},
	"description": "In-home swimming lessons for babies and children across Broward County. Serving Fort Lauderdale, Hollywood, Coral Springs, Pembroke Pines, Miramar, Weston, and more.",
	"telephone": "+56973447496",
	"priceRange": "$$$",
	"currenciesAccepted": "USD",
	"paymentAccepted": "Cash, Credit Card",
	"address": {
		"@type": "PostalAddress",
		"addressLocality": "Fort Lauderdale",
		"addressRegion": "FL",
		"postalCode": "33301",
		"addressCountry": "US"
	},
	"geo": {
		"@type": "GeoCoordinates",
		"latitude": 26.1224,
		"longitude": -80.1373
	},
	"areaServed": ["Fort Lauderdale", "Hollywood", "Coral Springs", "Pembroke Pines", "Miramar", "Weston", "Davie", "Sunrise", "Plantation", "Pompano Beach"],
	"openingHoursSpecification": [
		{ "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"], "opens": "08:00", "closes": "19:00" },
		{ "@type": "OpeningHoursSpecification", "dayOfWeek": "Saturday", "opens": "09:00", "closes": "13:00" }
	],
	"makesOffer": [
		{ "@type": "Offer", "itemOffered": { "@type": "Service", "name": "In-Home Baby Swimming Lessons", "description": "Personalized in-home swimming lessons for babies from 2 months old using the Miniswimmer Method." } },
		{ "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Children's Swimming Lessons", "description": "Private swimming lessons for children ages 3–12 at your home pool." } }
	],
	"parentOrganization": { "@id": "https://miniswimmer.cl/#organization" },
	"sameAs": ["https://www.facebook.com/miniswimmer.academy", "https://www.instagram.com/miniswimmer.us"]
};

const breadcrumbSchema = {
	"@context": "https://schema.org",
	"@type": "BreadcrumbList",
	"itemListElement": [
		{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://miniswimmer.cl" },
		{ "@type": "ListItem", "position": 2, "name": "Swimming Lessons in Broward", "item": "https://miniswimmer.cl/swimming-lessons-in-broward" }
	]
};

export default function LessonsInBrowardPage() {
	return (
		<>
			<SchemaMarkup data={organizationRefSchema} />
			<SchemaMarkup data={localBusinessSchema} />
			<SchemaMarkup data={breadcrumbSchema} />
			<main>
				<LessonsInBroward />
			</main>
		</>
	);
}
