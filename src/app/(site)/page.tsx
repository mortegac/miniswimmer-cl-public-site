import { Metadata } from "next";
import SchemaMarkup from "@/components/Common/SchemaMarkup";

import Home from "@/components/Home";

export const metadata: Metadata = {
	title: "Matronatación y Academia de Natación para Bebés, Niños, Adultos",
	description: `Nuestro método utiliza programación neurolingüística y coaching para garantizar que los niños experimenten un aprendizaje real y significativo a lo largo de sus vidas.`,
	alternates: {
		canonical: 'https://miniswimmer.cl',
		languages: {
			'x-default': 'https://miniswimmer.cl',
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
		title: `Matronatación y Academia de Natación para Bebés, Niños, Adultos`,
		description: `Nuestro método utiliza programación neurolingüística y coaching para garantizar que los niños experimenten un aprendizaje real y significativo a lo largo de sus vidas.`,
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
		title: `Matronatación y Academia de Natación para Bebés, Niños, Adultos`,
		description: `Nuestro método utiliza programación neurolingüística y coaching para garantizar que los niños experimenten un aprendizaje real y significativo a lo largo de sus vidas.`,
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
	"@id": "https://miniswimmer.cl/#organization",
	"name": "Miniswimmer",
	"url": "https://miniswimmer.cl",
	"logo": {
		"@type": "ImageObject",
		"url": "https://miniswimmer.cl/images/logo/logo.svg"
	},
	"description": "Nuestro método utiliza programación neurolingüística y coaching para garantizar que los niños experimenten un aprendizaje real y significativo a lo largo de sus vidas.",
	"contactPoint": {
		"@type": "ContactPoint",
		"contactType": "customer service",
		"availableLanguage": ["Spanish", "English"]
	},
	"sameAs": [
		"https://www.facebook.com/miniswimmer.academy",
		"https://www.instagram.com/miniswimmer.chile",
		"https://www.instagram.com/miniswimmer.us",
		"https://www.linkedin.com/company/105056316"
	]
};

const faqSchema = {
	"@context": "https://schema.org",
	"@type": "FAQPage",
	"mainEntity": [
		{
			"@type": "Question",
			"name": "¿Desde qué edad pueden empezar los bebés las clases de natación en Miniswimmer?",
			"acceptedAnswer": {
				"@type": "Answer",
				"text": "Los bebés pueden comenzar desde los 2 meses de edad. Nuestro programa de Matronatación está diseñado especialmente para bebés desde 2 meses hasta 3 años, acompañados de uno de sus padres o cuidadores."
			}
		},
		{
			"@type": "Question",
			"name": "¿Qué es el Método Miniswimmer y en qué se diferencia?",
			"acceptedAnswer": {
				"@type": "Answer",
				"text": "El Método Miniswimmer combina la natación con técnicas de Programación Neurolingüística (PNL) y coaching. Ayudamos a los niños a superar el miedo al agua, construir confianza y aprender de forma real y significativa."
			}
		},
		{
			"@type": "Question",
			"name": "¿Cuánto tiempo tarda un niño en aprender a nadar?",
			"acceptedAnswer": {
				"@type": "Answer",
				"text": "La mayoría de los niños comienza a mostrar mejoras visibles en sus primeras 4 a 6 clases. Con clases dos veces por semana, muchos niños logran nadar de forma autónoma en 2 a 3 meses."
			}
		},
		{
			"@type": "Question",
			"name": "¿Qué programas de natación ofrecen?",
			"acceptedAnswer": {
				"@type": "Answer",
				"text": "Ofrecemos Matronatación (bebés de 2 meses a 3 años con un adulto), natación infantil (niños de 3 a 12 años), Mami Swimmer (mamás embarazadas), Big Swimmer (adolescentes y adultos), Hidro Swimmer (hidroterapia) y Tea Swimmer (programa adaptado para niños con TEA)."
			}
		},
		{
			"@type": "Question",
			"name": "¿Dónde se realizan las clases de natación?",
			"acceptedAnswer": {
				"@type": "Answer",
				"text": "Las clases se realizan en piscinas privadas. En Chile atendemos en Peñalolén, Maitencillo y Viña del Mar. En Estados Unidos cubrimos el Condado de Miami-Dade y el Condado de Broward."
			}
		}
	]
};

export default function HomePage() {
	return (
		<>
			<SchemaMarkup type="Organization" data={organizationSchema} />
			<SchemaMarkup data={faqSchema} />
			<main>
				<Home />
			</main>
		</>
	);
}
