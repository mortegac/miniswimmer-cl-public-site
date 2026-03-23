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
const organizationRefSchema = {
	"@context": "https://schema.org",
	"@type": "Organization",
	"@id": "https://miniswimmer.cl/#organization",
	"name": "Miniswimmer",
	"url": "https://miniswimmer.cl"
};

const localBusinessSchema = {
	"@context": "https://schema.org",
	"@type": ["LocalBusiness", "SportsActivityLocation"],
	"@id": "https://miniswimmer.cl/clases-natacion-penalolen#localbusiness",
	"name": "Miniswimmer — Clases de Natación en Peñalolén",
	"url": "https://miniswimmer.cl/clases-natacion-penalolen",
	"image": "https://images.prismic.io/miniswimmerchile/aLTn32GNHVfTOeOK_SOCIAL-MEDIA-Vina-del-mar.png?auto=format,compress",
	"logo": {
		"@type": "ImageObject",
		"url": "https://miniswimmer.cl/images/logo/logo.svg"
	},
	"description": "Clases de natación exclusivas en Peñalolén, Las Pircas y Alto Macul. Método Miniswimmer: Natación + PNL y Coaching. Lecciones personalizadas para bebés y niños en Álvaro Casanova, Lo Cañas y El Parral.",
	"telephone": "+56973447496",
	"priceRange": "$$",
	"address": {
		"@type": "PostalAddress",
		"streetAddress": "Camino de la tierra s/n",
		"addressLocality": "Peñalolén",
		"addressRegion": "Región Metropolitana",
		"addressCountry": "CL"
	},
	"geo": {
		"@type": "GeoCoordinates",
		"latitude": -33.4945,
		"longitude": -70.5522
	},
	"areaServed": ["Peñalolén", "La Reina", "Las Pircas", "Alto Macul", "Álvaro Casanova", "Lo Cañas", "El Parral"],
	"openingHoursSpecification": [
		{ "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"], "opens": "08:00", "closes": "20:00" },
		{ "@type": "OpeningHoursSpecification", "dayOfWeek": "Saturday", "opens": "09:00", "closes": "14:00" }
	],
	"makesOffer": [
		{ "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Matronatación", "description": "Clases de natación para bebés de 2 meses a 3 años acompañados de un adulto." } },
		{ "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Natación Infantil", "description": "Clases de natación para niños de 3 a 12 años." } },
		{ "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Neuro Swimmer", "description": "Natación adaptada para niños con Trastorno del Espectro Autista." } }
	],
	"parentOrganization": { "@id": "https://miniswimmer.cl/#organization" },
	"sameAs": ["https://www.facebook.com/miniswimmer.academy", "https://www.instagram.com/miniswimmer.chile"]
};

const breadcrumbSchema = {
	"@context": "https://schema.org",
	"@type": "BreadcrumbList",
	"itemListElement": [
		{ "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://miniswimmer.cl" },
		{ "@type": "ListItem", "position": 2, "name": "Clases de Natación en Peñalolén", "item": "https://miniswimmer.cl/clases-natacion-penalolen" }
	]
};

export default function LessonsInPenalolenPage() {
	return (
		<>
			<SchemaMarkup data={organizationRefSchema} />
			<SchemaMarkup data={localBusinessSchema} />
			<SchemaMarkup data={breadcrumbSchema} />
			<main>
				<LessonsInPenalolen />
			</main>
		</>
	);
}
