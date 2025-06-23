import { Metadata } from "next";
import SchemaMarkup from "@/components/Common/SchemaMarkup";

import About from "@/components/About";


export const metadata: Metadata = {
	title: "Meet the Miniswimmer Team",
	description: `Our professionals are Physical Education teachers, Kinesiologists, experts in Water Baby Classes (Matronatación), and focused on excellent management. We provide an effective methodology and an unparalleled learning experience for our students.`,
	alternates: {
		canonical: 'https://miniswimmer.us/about',
		languages: {
			'en-US': 'https://miniswimmer.us/about',
			'es': 'https://miniswimmer.us/about',
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
		url: 'https://miniswimmer.us/about',
		title: `Meet the Miniswimmer Team`,
		description: `Our professionals are Physical Education teachers, Kinesiologists, experts in Water Baby Classes (Matronatación), and focused on excellent management. We provide an effective methodology and an unparalleled learning experience for our students.`,
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
		title: `Meet the Miniswimmer Team`,
		description: `Our professionals are Physical Education teachers, Kinesiologists, experts in Water Baby Classes (Matronatación), and focused on excellent management. We provide an effective methodology and an unparalleled learning experience for our students.`,
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
	"url": "https://miniswimmer.us/about",
	"logo": "https://images.prismic.io/miniswimmerchile/aBuatCdWJ-7kRuIZ_SOCIAL-MEDIAv2.png?auto=format,compress",
	"description": "Our professionals are Physical Education teachers, Kinesiologists, experts in Water Baby Classes (Matronatación), and focused on excellent management. We provide an effective methodology and an unparalleled learning experience for our students.",
	"sameAs": [
		"https://www.facebook.com/miniswimmer.academy",
		"https://www.instagram.com/miniswimmer.chile", "https://www.instagram.com/miniswimmer.us/",
		"https://www.linkedin.com/company/105056316"
	]
};

export default function AboutPage() {
	return (
		<>
			<SchemaMarkup type="Organization" data={organizationSchema} />
			<main>
				<About />
			</main>
		</>
	);
}
