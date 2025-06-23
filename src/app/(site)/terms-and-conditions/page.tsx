import { Metadata } from "next";
import SchemaMarkup from "@/components/Common/SchemaMarkup";
import TermsAndConditions from "@/components/TermsAndConditions";



export const metadata: Metadata = {
	title: "Terms and Conditions of Service",
	description: `Mini Swimmer's services require registration with medical details and age proof, have a cancellation/rescheduling policy with advance notice, and enforce class rules like timely arrival and proper attire for both children and guardians.`,
	alternates: {
		canonical: 'https://miniswimmer.us/terms-and-conditions',
		languages: {
			'en-US': 'https://miniswimmer.us/terms-and-conditions',
			'es': 'https://miniswimmer.us/terms-and-conditions',
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
		url: 'https://miniswimmer.us/terms-and-conditions',
		title: `Terms and Conditions of Service`,
		description: `Mini Swimmer's services require registration with medical details and age proof, have a cancellation/rescheduling policy with advance notice, and enforce class rules like timely arrival and proper attire for both children and guardians.`,
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
		title: `Terms and Conditions of Service`,
		description: `Mini Swimmer's services require registration with medical details and age proof, have a cancellation/rescheduling policy with advance notice, and enforce class rules like timely arrival and proper attire for both children and guardians.`,
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
	"url": "https://miniswimmer.us/terms-and-conditions",
	"logo": "https://images.prismic.io/miniswimmerchile/aBuatCdWJ-7kRuIZ_SOCIAL-MEDIAv2.png?auto=format,compress",
	"description": "Mini Swimmer's services require registration with medical details and age proof, have a cancellation/rescheduling policy with advance notice, and enforce class rules like timely arrival and proper attire for both children and guardians.",
	"sameAs": [
		"https://www.facebook.com/miniswimmer.academy",
		"https://www.instagram.com/miniswimmer.chile", 
		"https://www.instagram.com/miniswimmer.us/",
		"https://www.linkedin.com/company/105056316"
	]
};

export default function TermsAndConditionsPage() {
	return (
		<>
			<SchemaMarkup type="Organization" data={organizationSchema} />
			<main>
				<TermsAndConditions />
			</main>
		</>
	);
}
