import { Metadata } from "next";
import SchemaMarkup from "@/components/Common/SchemaMarkup";
import LessonsInVinadelMar from "@/components/LessonsInVinadelMar";



export const metadata: Metadata = {
	title: "Método Miniswimmer: Clases de Natación para Bebes, Niños, Adultos, Embarazadas, Adulto mayor en Viña del Mar, V Región",
	description: `¿Buscas clases de natación en Viña del Mar, Concón, Valparaíso, Reñaca, Quilpué, Villa Alemana? Con nuestro Método Miniswimmer, combinamos la natación con PNL y coaching para que tus hijos aprendan de forma real y significativa. Ofrecemos lecciones personalizadas para bebés y niños de todas las edades. ¡Inscríbelos hoy!`,
	alternates: {
		canonical: 'https://www.miniswimmer.cl/clases-natacion-vina-del-mar',
		languages: {
			'en-US': 'https://www.miniswimmer.cl/clases-natacion-vina-del-mar',
			'es': 'https://www.miniswimmer.cl/clases-natacion-vina-del-mar',
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
		url: 'https://www.miniswimmer.cl/clases-natacion-vina-del-mar',
		title: `Método Miniswimmer: Clases de Natación para Bebes, Niños, Adultos, Embarazadas, Adulto mayor en Viña del Mar, V Región`,
		description: `¿Buscas clases de natación en Viña del Mar, Concón, Valparaíso, Reñaca, Quilpué, Villa Alemana? Con nuestro Método Miniswimmer, combinamos la natación con PNL y coaching para que tus hijos aprendan de forma real y significativa. Ofrecemos lecciones personalizadas para bebés y niños de todas las edades. ¡Inscríbelos hoy!`,
		images: [
			{
				url: "https://images.prismic.io/miniswimmerchile/aLTn32GNHVfTOeOK_SOCIAL-MEDIA-Vina-del-mar.png?auto=format,compress",
				width: 1200,
				height: 630,
				alt: "Método Miniswimmer: Clases de Natación para Bebes, Niños, Adultos, Embarazadas, Adulto mayor en Viña del Mar, V Región"
			}
		],
	},
	twitter: {
		card: "summary_large_image",
		site: "@miniswimmer_edu",
		creator: "@miniswimmer_edu",
		title: `Método Miniswimmer: Clases de Natación para Bebes, Niños, Adultos, Embarazadas, Adulto mayor en Viña del Mar, V Región`,
		description: `¿Buscas clases de natación en Viña del Mar, Concón, Valparaíso, Reñaca, Quilpué, Villa Alemana? Con nuestro Método Miniswimmer, combinamos la natación con PNL y coaching para que tus hijos aprendan de forma real y significativa. Ofrecemos lecciones personalizadas para bebés y niños de todas las edades. ¡Inscríbelos hoy!`,
		images: [
			{
				url: "https://images.prismic.io/miniswimmerchile/aLTn32GNHVfTOeOK_SOCIAL-MEDIA-Vina-del-mar.png?auto=format,compress",
				width: 1200,
				height: 630,
				alt: "Método Miniswimmer: Clases de Natación para Bebes, Niños, Adultos, Embarazadas, Adulto mayor en Viña del Mar, V Región"
			}
		],
	},
};
const organizationSchema = {
	"@context": "https://schema.org",
	"@type": "Organization",
	"name": "Miniswimmer",
	"url": "https://www.miniswimmer.cl/clases-natacion-vina-del-mar",
	"logo": "https://images.prismic.io/miniswimmerchile/aLTn32GNHVfTOeOK_SOCIAL-MEDIA-Vina-del-mar.png?auto=format,compress",
	"description": "¿Buscas clases de natación en Viña del Mar, Concón, Valparaíso, Reñaca, Quilpué, Villa Alemana? Con nuestro Método Miniswimmer, combinamos la natación con PNL y coaching para que tus hijos aprendan de forma real y significativa. Ofrecemos lecciones personalizadas para bebés y niños de todas las edades. ¡Inscríbelos hoy!",
	"sameAs": [
		"https://www.facebook.com/miniswimmer.academy",
		"https://www.instagram.com/miniswimmer.chile", 
		"https://www.instagram.com/miniswimmer.cl/",
		"https://www.linkedin.com/company/105056316"
	]
};

export default function LessonsInVinadelMarPage() {
	return (
		<>
			<SchemaMarkup type="Organization" data={organizationSchema} />
			<main>
				<LessonsInVinadelMar />
			</main>
		</>
	);
}
