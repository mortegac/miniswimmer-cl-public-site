import { Metadata } from "next";
import SchemaMarkup from "@/components/Common/SchemaMarkup";

import PrivacyPolicy from "@/components/PrivacyPolicy";

export const metadata: Metadata = {
	title: "Learn about our Privacy Policy",
	description: `Mini Swimmer details its privacy practices regarding the collection, use, and protection of personal data from both children (with parental consent) and their guardians for managing swimming services. Users have rights to access, modify, or delete their data, and the policy outlines security measures and contact information for inquiries.`,
	alternates: {
		canonical: 'https://miniswimmer.cl/privacy-policy',
		languages: {
			'en-US': 'https://miniswimmer.cl/privacy-policy',
			'es': 'https://miniswimmer.cl/privacy-policy',
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
		url: 'https://miniswimmer.cl/privacy-policy',
		title: `Learn about our Privacy Policy`,
		description: `Mini Swimmer details its privacy practices regarding the collection, use, and protection of personal data from both children (with parental consent) and their guardians for managing swimming services. Users have rights to access, modify, or delete their data, and the policy outlines security measures and contact information for inquiries.`,
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
		title: `Learn about our Privacy Policy`,
		description: `Mini Swimmer details its privacy practices regarding the collection, use, and protection of personal data from both children (with parental consent) and their guardians for managing swimming services. Users have rights to access, modify, or delete their data, and the policy outlines security measures and contact information for inquiries.`,
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
	"url": "https://miniswimmer.cl/privacy-policy",
	"logo": "https://images.prismic.io/miniswimmerchile/aBuatCdWJ-7kRuIZ_SOCIAL-MEDIAv2.png?auto=format,compress",
	"description": "Mini Swimmer details its privacy practices regarding the collection, use, and protection of personal data from both children (with parental consent) and their guardians for managing swimming services. Users have rights to access, modify, or delete their data, and the policy outlines security measures and contact information for inquiries.",
	"sameAs": [
		"https://www.facebook.com/miniswimmer.academy",
		"https://www.instagram.com/miniswimmer.chile", 
		"https://www.instagram.com/miniswimmer.us/",
		"https://www.linkedin.com/company/105056316"
	]
};
export default function PrivacyPolicyPage() {
	return (
		<>
			<SchemaMarkup type="Organization" data={organizationSchema} />
			<main>
				<PrivacyPolicy />
			</main>
		</>
	);
}
