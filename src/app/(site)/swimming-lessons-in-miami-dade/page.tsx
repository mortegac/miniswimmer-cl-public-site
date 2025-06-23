import { Metadata } from "next";
import SchemaMarkup from "@/components/Common/SchemaMarkup";
import LessonsInMiamiDade from "@/components/LessonsInMiamiDade";



export const metadata: Metadata = {
	title: "Enroll Your Child in Swimming in Miami-Dade!",
	description: `Find our convenient locations for personalized in-home swimming lessons. We help babies and children of all levels improve their technique, build endurance, and gain confidence in the water. We serve the cities of Aventura, North Bay Village, North Miami, North Miami Beach, Sunny Isles Beach, Golden Beach in Miami-Dade County.`,
	alternates: {
		canonical: 'https://www.miniswimmer.us/swimming-lessons-in-miami-dade',
		languages: {
			'en-US': 'https://www.miniswimmer.us/swimming-lessons-in-miami-dade',
			'es': 'https://www.miniswimmer.us/swimming-lessons-in-miami-dade',
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
		url: 'https://www.miniswimmer.us/swimming-lessons-in-miami-dade',
		title: `Enroll Your Child in Swimming in Miami-Dade!`,
		description: `Find our convenient locations for personalized in-home swimming lessons. We help babies and children of all levels improve their technique, build endurance, and gain confidence in the water.`,
		images: [
			{
				url: "https://images.prismic.io/miniswimmerchile/aBuatCdWJ-7kRuIZ_SOCIAL-MEDIAv2.png?auto=format,compress",
				width: 1200,
				height: 630,
				alt: "Enroll Your Child in Swimming in Miami-Dade!"
			}
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
				alt: "Enroll Your Child in Swimming in Miami-Dade!"
			}
		],
	},
};
const organizationSchema = {
	"@context": "https://schema.org",
	"@type": "Organization",
	"name": "Miniswimmer",
	"url": "https://www.miniswimmer.us/swimming-lessons-in-miami-dade",
	"logo": "https://images.prismic.io/miniswimmerchile/aBuatCdWJ-7kRuIZ_SOCIAL-MEDIAv2.png?auto=format,compress",
	"description": "Find our convenient locations for personalized in-home swimming lessons. We help babies and children of all levels improve their technique, build endurance, and gain confidence in the water.",
	"sameAs": [
		"https://www.facebook.com/miniswimmer.academy",
		"https://www.instagram.com/miniswimmer.chile", 
		"https://www.instagram.com/miniswimmer.us/",
		"https://www.linkedin.com/company/105056316"
	]
};

export default function LessonsInMiamiDadePage() {
	return (
		<>
			<SchemaMarkup type="Organization" data={organizationSchema} />
			<main>
				<LessonsInMiamiDade />
			</main>
		</>
	);
}
