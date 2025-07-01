import { Metadata } from "next";
import SchemaMarkup from "@/components/Common/SchemaMarkup";
import Program from "@/components/Program";



export const metadata: Metadata = {
	title: "What is our program about?",
	description: `Our swimming program is designed to help swimmers of all levels improve their technique, build endurance, and gain confidence in the water. Learn more about our program and how it can benefit you.`,
	alternates: {
		canonical: 'https://miniswimmer.cl/program',
		languages: {
			'en-US': 'https://miniswimmer.cl/program',
			'es': 'https://miniswimmer.cl/program',
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
		url: 'https://miniswimmer.cl/program',
		title: `What is our program about?`,
		description: `Our swimming program is designed to help swimmers of all levels improve their technique, build endurance, and gain confidence in the water. Learn more about our program and how it can benefit you.`,
		images: [
			{
				url: "https://images.prismic.io/miniswimmerchile/aBuatCdWJ-7kRuIZ_SOCIAL-MEDIAv2.png?auto=format,compress",
				width: 1200,
				height: 630,
				alt: "What is our program about?"
			}
		],
	},
	twitter: {
		card: "summary_large_image",
		site: "@miniswimmer_edu",
		creator: "@miniswimmer_edu",
		title: `What is our program about?`,
		description: `Our swimming program is designed to help swimmers of all levels improve their technique, build endurance, and gain confidence in the water. Learn more about our program and how it can benefit you.`,
		images: [
			{
				url: "https://images.prismic.io/miniswimmerchile/aBuatCdWJ-7kRuIZ_SOCIAL-MEDIAv2.png?auto=format,compress",
				width: 1200,
				height: 630,
				alt: "What is our program about?"
			}
		],
	},
};
const organizationSchema = {
	"@context": "https://schema.org",
	"@type": "Organization",
	"name": "Miniswimmer",
	"url": "https://miniswimmer.cl/program",
	"logo": "https://images.prismic.io/miniswimmerchile/aBuatCdWJ-7kRuIZ_SOCIAL-MEDIAv2.png?auto=format,compress",
	"description": "Our swimming program is designed to help swimmers of all levels improve their technique, build endurance, and gain confidence in the water. Learn more about our program and how it can benefit you.",
	"sameAs": [
		"https://www.facebook.com/miniswimmer.academy",
		"https://www.instagram.com/miniswimmer.chile", 
		"https://www.instagram.com/miniswimmer.us/",
		"https://www.linkedin.com/company/105056316"
	]
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
