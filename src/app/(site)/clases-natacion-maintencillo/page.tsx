import { Metadata } from "next";
import SchemaMarkup from "@/components/Common/SchemaMarkup";
import LessonsInMaintencillo from "@/components/LessonsInMaintencillo";



export const metadata: Metadata = {
	title: "Academia de Natación para Bebés, Niños, Embarazadas en Maitencillo",
	description: `¿Buscas clases de natación en Maitencillo, V Región, Zapallar, Cachagua, Marbella, Papudo, Puchuncaví o La Ligua? Con nuestro Método Miniswimmer, combinamos la natación con PNL y coaching para que tus hijos aprendan de forma real y significativa. Ofrecemos lecciones personalizadas para bebés y niños de todas las edades. ¡Inscríbelos hoy!`,
	alternates: {
		canonical: 'https://miniswimmer.cl/clases-natacion-maintencillo',
		languages: {
			'x-default': 'https://miniswimmer.cl/clases-natacion-maintencillo',
			'es': 'https://miniswimmer.cl/clases-natacion-maintencillo',
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
		url: 'https://miniswimmer.cl/clases-natacion-maintencillo',
		title: `Academia de Natación para Bebés, Niños, Embarazadas en Maitencillo`,
		description: `¿Buscas clases de natación en Maitencillo, V Región, Zapallar, Cachagua, Marbella, Papudo, Puchuncaví o La Ligua? Con nuestro Método Miniswimmer, combinamos la natación con PNL y coaching para que tus hijos aprendan de forma real y significativa. Ofrecemos lecciones personalizadas para bebés y niños de todas las edades. ¡Inscríbelos hoy!`,
		images: [
			{
				url: "https://images.prismic.io/miniswimmerchile/aLToIWGNHVfTOeON_SOCIAL-MEDIA-Maintencillo.png?auto=format,compress",
				width: 1200,
				height: 630,
				alt: "Academia de Natación para Bebés, Niños, Embarazadas en Maitencillo"
			}
		],
	},
	twitter: {
		card: "summary_large_image",
		site: "@miniswimmer_edu",
		creator: "@miniswimmer_edu",
		title: `Academia de Natación para Bebés, Niños, Embarazadas en Maitencillo`,
		description: `¿Buscas clases de natación en Maitencillo, V Región, Zapallar, Cachagua, Marbella, Papudo, Puchuncaví o La Ligua? Con nuestro Método Miniswimmer, combinamos la natación con PNL y coaching para que tus hijos aprendan de forma real y significativa. Ofrecemos lecciones personalizadas para bebés y niños de todas las edades. ¡Inscríbelos hoy!`,
		images: [
			{
				url: "https://images.prismic.io/miniswimmerchile/aLToIWGNHVfTOeON_SOCIAL-MEDIA-Maintencillo.png?auto=format,compress",
				width: 1200,
				height: 630,
				alt: "Academia de Natación para Bebés, Niños, Embarazadas en Maitencillo"
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
	"logo": "https://images.prismic.io/miniswimmerchile/aLToIWGNHVfTOeON_SOCIAL-MEDIA-Maintencillo.png?auto=format,compress",
	"description": "¿Buscas clases de natación en Maitencillo, V Región, Zapallar, Cachagua, Marbella, Papudo, Puchuncaví o La Ligua? Con nuestro Método Miniswimmer, combinamos la natación con PNL y coaching para que tus hijos aprendan de forma real y significativa. Ofrecemos lecciones personalizadas para bebés y niños de todas las edades. ¡Inscríbelos hoy!",
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
				<LessonsInMaintencillo />
			</main>
		</>
	);
}
