import { Metadata } from "next";
import SchemaMarkup from "@/components/Common/SchemaMarkup";

import About from "@/components/About";


export const metadata: Metadata = {
	title: "Conoce al equipo de Miniswimmer",
	description: `Nuestros profesionales son profesores de Educación Física, Kinesiólogos, expertos en Matronatación y se enfocan en una gestión excelente. Ofrecemos una metodología eficaz y una experiencia de aprendizaje inigualable para nuestros estudiantes.`,
	alternates: {
		canonical: 'https://miniswimmer.cl/nosotros',
		languages: {
			'en-US': 'https://miniswimmer.cl/nosotros',
			'es': 'https://miniswimmer.cl/nosotros',
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
		url: 'https://miniswimmer.cl/nosotros',
		title: `Conoce al equipo de Miniswimmer`,
		description: `Nuestros profesionales son profesores de Educación Física, Kinesiólogos, expertos en Matronatación y se enfocan en una gestión excelente. Ofrecemos una metodología eficaz y una experiencia de aprendizaje inigualable para nuestros estudiantes.`,
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
		description: `Nuestros profesionales son profesores de Educación Física, Kinesiólogos, expertos en Matronatación y se enfocan en una gestión excelente. Ofrecemos una metodología eficaz y una experiencia de aprendizaje inigualable para nuestros estudiantes.`,
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
	"url": "https://miniswimmer.cl/nosotros",
	"logo": "https://images.prismic.io/miniswimmerchile/aBuatCdWJ-7kRuIZ_SOCIAL-MEDIAv2.png?auto=format,compress",
	"description": "Nuestros profesionales son profesores de Educación Física, Kinesiólogos, expertos en Matronatación y se enfocan en una gestión excelente. Ofrecemos una metodología eficaz y una experiencia de aprendizaje inigualable para nuestros estudiantes.",
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
