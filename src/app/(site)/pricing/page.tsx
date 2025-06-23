import { Metadata } from "next";
import SchemaMarkup from "@/components/Common/SchemaMarkup";
import Pricing from "@/components/Pricing";

export const metadata: Metadata = {
	title: "Pricing for our Class Packages",
	description: `Discover our swimming rates for regular, premium, and at-home locations. Classes for babies, children, adults, and pregnant individuals with certified instructors, from 2 months old to advanced levels.`,
	alternates: {
		canonical: 'https://miniswimmer.us/pricing',
		languages: {
			'en-US': 'https://miniswimmer.us/pricing',
			'es': 'https://miniswimmer.us/pricing',
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
		url: 'https://miniswimmer.us/pricing',
		title: `Pricing for our Class Packages`,
		description: `Discover our swimming rates for regular, premium, and at-home locations. Classes for babies, children, adults, and pregnant individuals with certified instructors, from 2 months old to advanced levels.`,
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
		title: `Pricing for our Class Packages`,
		description: `Discover our swimming rates for regular, premium, and at-home locations. Classes for babies, children, adults, and pregnant individuals with certified instructors, from 2 months old to advanced levels.`,
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
	"url": "https://miniswimmer.us/pricing",
	"logo": "https://images.prismic.io/miniswimmerchile/aBuatCdWJ-7kRuIZ_SOCIAL-MEDIAv2.png?auto=format,compress",
	"description": "Discover our swimming rates for regular, premium, and at-home locations. Classes for babies, children, adults, and pregnant individuals with certified instructors, from 2 months old to advanced levels.",
	"sameAs": [
		"https://www.facebook.com/miniswimmer.academy",
		"https://www.instagram.com/miniswimmer.chile", 
		"https://www.instagram.com/miniswimmer.us/",
		"https://www.linkedin.com/company/105056316"
	]
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
