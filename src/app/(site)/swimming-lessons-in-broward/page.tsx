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
const organizationSchema = {
	"@context": "https://schema.org",
	"@type": "Organization",
	"@id": "https://miniswimmer.cl/#organization",
	"name": "Miniswimmer",
	"url": "https://miniswimmer.cl",
	"logo": "https://images.prismic.io/miniswimmerchile/aBuatCdWJ-7kRuIZ_SOCIAL-MEDIAv2.png?auto=format,compress",
	"description": "Find our convenient locations for personalized in-home swimming lessons. We help babies and children of all levels improve their technique, build endurance, and gain confidence in the water.",
	"sameAs": [
		"https://www.facebook.com/miniswimmer.academy",
		"https://www.instagram.com/miniswimmer.chile", 
		"https://www.instagram.com/miniswimmer.us/",
		"https://www.linkedin.com/company/105056316"
	]
};

export default function LessonsInBrowardPage() {
	return (
		<>
			<SchemaMarkup type="Organization" data={organizationSchema} />
			<main>
				<LessonsInBroward />
			</main>
		</>
	);
}
