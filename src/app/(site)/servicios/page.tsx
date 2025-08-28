import { Metadata } from "next";
import SchemaMarkup from "@/components/Common/SchemaMarkup";

import Services from "@/components/Services";


export const metadata: Metadata = {
	title: "Academia de Natación Miniswimmer | Clases para Bebés, Niños y Adultos",
	description: `Descubre los servicios de nuestra academia de natación: matronatación, clases para bebés, niños y adultos, gimnasia acuática y cursos especializados. ¡Agenda tu clase en MiniSwimmer!`,
	alternates: {
		canonical: 'https://miniswimmer.cl/servicios',
		languages: {
			'en-US': 'https://miniswimmer.cl/servicios',
			'es': 'https://miniswimmer.cl/servicios',
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
		url: 'https://miniswimmer.cl/servicios',
		title: `Academia de Natación Miniswimmer | Clases para Bebés, Niños y Adultos`,
		description: `Descubre los servicios de nuestra academia de natación: matronatación, clases para bebés, niños y adultos, gimnasia acuática y cursos especializados. ¡Agenda tu clase en MiniSwimmer!`,
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
		title: `Academia de Natación Miniswimmer | Clases para Bebés, Niños y Adultos`,
		description: `Descubre los servicios de nuestra academia de natación: matronatación, clases para bebés, niños y adultos, gimnasia acuática y cursos especializados. ¡Agenda tu clase en MiniSwimmer!`,
		images: [
			{
				url: "https://images.prismic.io/miniswimmerchile/aBuatCdWJ-7kRuIZ_SOCIAL-MEDIAv2.png?auto=format,compress",
				width: 1200,
				height: 630,
				alt: "Clases de natación para bebes y niños"
			}
		],
	},
};

const organizationSchema = {
	"@context": "https://schema.org",
	"@type": "Organization",
	"name": "Miniswimmer",
	"url": "https://miniswimmer.cl/servicios",
	"logo": "https://images.prismic.io/miniswimmerchile/aBuatCdWJ-7kRuIZ_SOCIAL-MEDIAv2.png?auto=format,compress",
	"description": "Descubre los servicios de nuestra academia de natación: matronatación, clases para bebés, niños y adultos, gimnasia acuática y cursos especializados. ¡Agenda tu clase en MiniSwimmer!",
	"sameAs": [
		"https://www.facebook.com/miniswimmer.academy",
		"https://www.instagram.com/miniswimmer.chile", "https://www.instagram.com/miniswimmer.us/",
		"https://www.linkedin.com/company/105056316"
	]
};

export default function ServicesPage() {
	return (
		<>
			<SchemaMarkup type="Organization" data={organizationSchema} />
			<main>
				<Services />
			</main>
		</>
	);
}
