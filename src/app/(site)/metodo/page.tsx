import { Metadata } from "next";
import SchemaMarkup from "@/components/Common/SchemaMarkup";
import Program from "@/components/Program";



export const metadata: Metadata = {
	title: "¿De qué trata nuestro método?",
	description: `Nuestro programa de natación está diseñado para ayudar a nadadores de todos los niveles a mejorar su técnica, desarrollar resistencia y ganar confianza en el agua. Descubre más sobre nuestro programa y cómo puede beneficiarte.`,
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
		title: `¿De qué trata nuestro método?`,
		description: `Nuestro programa de natación está diseñado para ayudar a nadadores de todos los niveles a mejorar su técnica, desarrollar resistencia y ganar confianza en el agua. Descubre más sobre nuestro programa y cómo puede beneficiarte.`,
		images: [
			{
				url: "https://images.prismic.io/miniswimmerchile/aBuatCdWJ-7kRuIZ_SOCIAL-MEDIAv2.png?auto=format,compress",
				width: 1200,
				height: 630,
				alt: "¿De qué trata nuestro método?"
			}
		],
	},
	twitter: {
		card: "summary_large_image",
		site: "@miniswimmer_edu",
		creator: "@miniswimmer_edu",
		title: `¿De qué trata nuestro método?`,
		description: `Nuestro programa de natación está diseñado para ayudar a nadadores de todos los niveles a mejorar su técnica, desarrollar resistencia y ganar confianza en el agua. Descubre más sobre nuestro programa y cómo puede beneficiarte.`,
		images: [
			{
				url: "https://images.prismic.io/miniswimmerchile/aBuatCdWJ-7kRuIZ_SOCIAL-MEDIAv2.png?auto=format,compress",
				width: 1200,
				height: 630,
				alt: "¿De qué trata nuestro método?"
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
	"description": "Nuestro programa de natación está diseñado para ayudar a nadadores de todos los niveles a mejorar su técnica, desarrollar resistencia y ganar confianza en el agua. Descubre más sobre nuestro programa y cómo puede beneficiarte.",
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
