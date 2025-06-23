import { Metadata } from "next";
import SchemaMarkup from "@/components/Common/SchemaMarkup";
import LessonsInBroward from "@/components/LessonsInBroward";



export const metadata: Metadata = {
	title: "Enroll Your Child in Swimming in Broward!",
	description: `Find our convenient locations for personalized in-home swimming lessons. We help babies and children of all levels improve their technique, build endurance, and gain confidence in the water. We serve the cities of Coconut Creek, Cooper City, Coral Springs, Dania Beach, Davie, Deerfield Beach, Fort Lauderdale, Hallandale Beach, Hillsboro Beach, Hollywood, Lauderdale Lakes, Lauderdale-By-The-Sea, Lauderhill, Lighthouse Point, Margate, Miramar, North Lauderdale, Oakland Park, Parkland, Pembroke Park, Pembroke Pines, Plantation, Pompano Beach, Sea Ranch Lakes, Southwest Ranches, Sunrise, Tamarac, Lazy Lake, West Park, Weston, Wilton Manors in Broward County.`,
	alternates: {
		canonical: 'https://www.miniswimmer.us/swimming-lessons-in-broward',
		languages: {
			'en-US': 'https://www.miniswimmer.us/swimming-lessons-in-broward',
			'es': 'https://www.miniswimmer.us/swimming-lessons-in-broward',
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
		url: 'https://www.miniswimmer.us/swimming-lessons-in-broward',
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
	"name": "Miniswimmer",
	"url": "https://www.miniswimmer.us/swimming-lessons-in-broward",
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
