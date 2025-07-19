import { Metadata } from "next";
import SchemaMarkup from "@/components/Common/SchemaMarkup";

import Alianzas from "@/components/Alianzas";


export const metadata: Metadata = {
	title: "Conoce al equipo de Miniswimmer",
	description: `Explora las colaboraciones y beneficios únicos para nuestras familias. Accede a descuentos exclusivos con nuestros partners en natación infantil`,
	alternates: {
		canonical: 'https://miniswimmer.cl/alianzas',
		languages: {
			'en-US': 'https://miniswimmer.cl/alianzas',
			'es': 'https://miniswimmer.cl/alianzas',
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
		url: 'https://miniswimmer.cl/alianzas',
		title: `Conoce al equipo de Miniswimmer`,
		description: `Explora las colaboraciones y beneficios únicos para nuestras familias. Accede a descuentos exclusivos con nuestros partners en natación infantil`,
		images: [
			{
				url: "https://images.prismic.io/miniswimmerchile/aBuatCdWJ-7kRuIZ_SOCIAL-MEDIAv2.png?auto=format,compress",
				width: 1200,
				height: 630,
				alt: "Método Miniswimmer"
			}
		],
	},
	twitter: {
		card: "summary_large_image",
		site: "@miniswimmer_edu",
		creator: "@miniswimmer_edu",
		title: `Conoce al equipo de Miniswimmer`,
		description: `Explora las colaboraciones y beneficios únicos para nuestras familias. Accede a descuentos exclusivos con nuestros partners en natación infantil`,
		images: [
			{
				url: "https://images.prismic.io/miniswimmerchile/aBuatCdWJ-7kRuIZ_SOCIAL-MEDIAv2.png?auto=format,compress",
				width: 1200,
				height: 630,
				alt: "Método Miniswimmer"
			}
		],
	},
};

const organizationSchema = {
	"@context": "https://schema.org",
	"@type": "Organization",
	"name": "Miniswimmer",
	"url": "https://miniswimmer.cl/alianzas",
	"logo": "https://images.prismic.io/miniswimmerchile/aBuatCdWJ-7kRuIZ_SOCIAL-MEDIAv2.png?auto=format,compress",
	"description": "Explora las colaboraciones y beneficios únicos para nuestras familias. Accede a descuentos exclusivos con nuestros partners en natación infantil",
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
				<Alianzas />
			</main>
		</>
	);
}
