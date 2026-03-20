import { Metadata } from "next";
import SchemaMarkup from "@/components/Common/SchemaMarkup";
import LessonsInPenalolen from "@/components/LessonsInPenalolen";



export const metadata: Metadata = {
	title: "Academia de Natación para Bebés, Niños, Embarazadas en Peñalolen",
	// description: `Clases de Natación Exclusivas en Reina y Peñalolen, Las Pircas y Alto Macul. 💧 Método Miniswimmer: Natación + PNL y Coaching. Lecciones personalizadas para bebés y niños en Álvaro Casanova, Lo Cañas y El Parral. ¡Aprendizaje real y seguro! ¡Inscríbelos hoy!`,
	description: `Clases de Natación Exclusivas en Reina y Peñalolen, Las Pircas y Alto Macul. 💧 Método Miniswimmer: Natación + PNL y Coaching. Lecciones personalizadas para bebés y niños en Álvaro Casanova, Lo Cañas y El Parral. ¡Aprendizaje real y seguro! ¡Inscríbelos hoy!`,
	alternates: {
		canonical: 'https://miniswimmer.cl/clases-natacion-penalolen',
		languages: {
			'x-default': 'https://miniswimmer.cl/clases-natacion-penalolen',
			'es': 'https://miniswimmer.cl/clases-natacion-penalolen',
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
		url: 'https://miniswimmer.cl/clases-natacion-penalolen',
		title: `Academia de Natación para Bebés, Niños, Embarazadas en Peñalolen`,
		description: `Clases de Natación Exclusivas en Reina y Peñalolen, Las Pircas y Alto Macul. 💧 Método Miniswimmer: Natación + PNL y Coaching. Lecciones personalizadas para bebés y niños en Álvaro Casanova, Lo Cañas y El Parral. ¡Aprendizaje real y seguro! ¡Inscríbelos hoy!`,
		images: [
			{
				url: "https://images.prismic.io/miniswimmerchile/aLTn32GNHVfTOeOK_SOCIAL-MEDIA-Vina-del-mar.png?auto=format,compress",
				width: 1200,
				height: 630,
				alt: "Academia de Natación para Bebés, Niños, Embarazadas en Peñalolen"
			}
		],
	},
	twitter: {
		card: "summary_large_image",
		site: "@miniswimmer_edu",
		creator: "@miniswimmer_edu",
		title: `Academia de Natación para Bebés, Niños, Embarazadas en Peñalolen`,
		description: `Clases de Natación Exclusivas en Reina y Peñalolen, Las Pircas y Alto Macul. 💧 Método Miniswimmer: Natación + PNL y Coaching. Lecciones personalizadas para bebés y niños en Álvaro Casanova, Lo Cañas y El Parral. ¡Aprendizaje real y seguro! ¡Inscríbelos hoy!`,
		images: [
			{
				url: "https://images.prismic.io/miniswimmerchile/aLTn32GNHVfTOeOK_SOCIAL-MEDIA-Vina-del-mar.png?auto=format,compress",
				width: 1200,
				height: 630,
				alt: "Academia de Natación para Bebés, Niños, Embarazadas en Peñalolen"
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
	"logo": "https://images.prismic.io/miniswimmerchile/aLTn32GNHVfTOeOK_SOCIAL-MEDIA-Vina-del-mar.png?auto=format,compress",
	"description": "Clases de Natación Exclusivas en Reina y Peñalolen, Las Pircas y Alto Macul. 💧 Método Miniswimmer: Natación + PNL y Coaching. Lecciones personalizadas para bebés y niños en Álvaro Casanova, Lo Cañas y El Parral. ¡Aprendizaje real y seguro! ¡Inscríbelos hoy!",
	"sameAs": [
		"https://www.facebook.com/miniswimmer.academy",
		"https://www.instagram.com/miniswimmer.chile", 
		"https://www.instagram.com/miniswimmer.cl/",
		"https://www.linkedin.com/company/105056316"
	]
};

export default function LessonsInPenalolenPage() {
	return (
		<>
			<SchemaMarkup type="Organization" data={organizationSchema} />
			<main>
				<LessonsInPenalolen />
			</main>
		</>
	);
}
