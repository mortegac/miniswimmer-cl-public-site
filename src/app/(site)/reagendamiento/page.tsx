import { Metadata } from "next";
import SchemaMarkup from "@/components/Common/SchemaMarkup";
import Reagendamiento from "@/components/Reagendamiento";



export const metadata: Metadata = {
	title: "Formulario de reagendamiento Academia de Natación Mini Swimmer",
	// description: `Clases de Natación Exclusivas en Reina y Peñalolen, Las Pircas y Alto Macul. 💧 Método Miniswimmer: Natación + PNL y Coaching. Lecciones personalizadas para bebés y niños en Álvaro Casanova, Lo Cañas y El Parral. ¡Aprendizaje real y seguro! ¡Inscríbelos hoy!`,
	description: `Clases de Natación Exclusivas en Reina y Peñalolen, Las Pircas y Alto Macul. 💧 Método Miniswimmer: Natación + PNL y Coaching. Lecciones personalizadas para bebés y niños en Álvaro Casanova, Lo Cañas y El Parral. ¡Aprendizaje real y seguro! ¡Inscríbelos hoy!`,
	alternates: {
		canonical: 'https://miniswimmer.cl/reagendamiento',
		languages: {
			'en-US': 'https://miniswimmer.cl/reagendamiento',
			'es': 'https://miniswimmer.cl/reagendamiento',
		},
	},
	robots: {
		index: false,
		follow: false,
		googleBot: {
			index: false,
			follow: false,
		},
	},
	openGraph: {
		type: "website",
		url: 'https://miniswimmer.cl/reagendamiento',
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
	"name": "Miniswimmer",
	"url": "https://miniswimmer.cl/reagendamiento",
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
				<Reagendamiento />
			</main>
		</>
	);
}
