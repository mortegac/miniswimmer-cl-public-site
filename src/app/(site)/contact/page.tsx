import { Metadata } from "next";
import SchemaMarkup from "@/components/Common/SchemaMarkup";

import Contact from "@/components/Contact";


export const metadata: Metadata = {
	title: "¿Cómo podemos ayudar?",
	description: `Cuéntenos sobre usted y le conectaremos con un experto que podrá responder cualquier pregunta que tenga.`,
	alternates: {
		canonical: 'https://miniswimmer.cl/contact',
		languages: {
			'en-US': 'https://miniswimmer.cl/contact',
			'es': 'https://miniswimmer.cl/contact',
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
		url: 'https://miniswimmer.cl/contact',
		title: `How can we help?`,
		description: `Cuéntenos sobre usted y le conectaremos con un experto que podrá responder cualquier pregunta que tenga.`,
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
		title: `How can we help?`,
		description: `Cuéntenos sobre usted y le conectaremos con un experto que podrá responder cualquier pregunta que tenga.`,
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
	"url": "https://miniswimmer.cl/contact",
	"logo": "https://images.prismic.io/miniswimmerchile/aBuatCdWJ-7kRuIZ_SOCIAL-MEDIAv2.png?auto=format,compress",
	"description": "Cuéntenos sobre usted y le conectaremos con un experto que podrá responder cualquier pregunta que tenga.",
	"sameAs": [
		"https://www.facebook.com/miniswimmer.academy",
		"https://www.instagram.com/miniswimmer.chile", 
		"https://www.instagram.com/miniswimmer.us/",
		"https://www.linkedin.com/company/105056316"
	]
};

export default function ContactPage() {
	return (
		<>
			<SchemaMarkup type="Organization" data={organizationSchema} />
			<main>
				<Contact />
			</main>
		</>
	);
}
