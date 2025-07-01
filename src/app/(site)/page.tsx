import { Metadata } from "next";
import SchemaMarkup from "@/components/Common/SchemaMarkup";

import Home from "@/components/Home";

export const metadata: Metadata = {
	title: "Learn about the Miniswimmer method",
	description: `Our method uses neurolinguistic programming and coaching to ensure children experience real and meaningful learning throughout their lives.`,
	alternates: {
		canonical: 'https://miniswimmer.cl',
		languages: {
			'en-US': 'https://miniswimmer.cl',
			'es': 'https://miniswimmer.cl',
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
		url: 'https://miniswimmer.cl',
		title: `Learn about the Miniswimmer method`,
		description: `Our method uses neurolinguistic programming and coaching to ensure children experience real and meaningful learning throughout their lives.`,
		images: [
			{
				url: "https://images.prismic.io/miniswimmerchile/aBuatCdWJ-7kRuIZ_SOCIAL-MEDIAv2.png?auto=format,compress",
				width: 1200,
				height: 630,
				alt: "Miniswimmer Method"
			}
		],
	},
	twitter: {
		card: "summary_large_image",
		site: "@miniswimmer_edu",
		creator: "@miniswimmer_edu",
		title: `Learn about the Miniswimmer method`,
		description: `Our method uses neurolinguistic programming and coaching to ensure children experience real and meaningful learning throughout their lives.`,
		images: [
			{
				url: "https://images.prismic.io/miniswimmerchile/aBuatCdWJ-7kRuIZ_SOCIAL-MEDIAv2.png?auto=format,compress",
				width: 1200,
				height: 630,
				alt: "Miniswimmer Method"
			}
		],
	},
};

const organizationSchema = {
	"@context": "https://schema.org",
	"@type": "Organization",
	"name": "Miniswimmer",
	"url": "https://miniswimmer.cl",
	"logo": "https://images.prismic.io/miniswimmerchile/aBuatCdWJ-7kRuIZ_SOCIAL-MEDIAv2.png?auto=format,compress",
	"description": "Our method uses neurolinguistic programming and coaching to ensure children experience real and meaningful learning throughout their lives.",
	"sameAs": [
		"https://www.facebook.com/miniswimmer.academy",
		"https://www.instagram.com/miniswimmer.chile", "https://www.instagram.com/miniswimmer.us/",
		"https://www.linkedin.com/company/105056316"
	]
};

export default function HomePage() {
	return (
		<>
			<SchemaMarkup type="Organization" data={organizationSchema} />
			<main>
				<Home />
			</main>
		</>
	);
}
