import { Metadata } from "next";
import SchemaMarkup from "@/components/Common/SchemaMarkup";

import PrivacyPolicy from "@/components/PrivacyPolicy";

export const metadata: Metadata = {
	title: "Conozca nuestra Política de Privacidad",
	description: `Mini Swimmer detalla sus prácticas de privacidad respecto a la recopilación, el uso y la protección de datos personales de niños (con el consentimiento de sus padres) y sus tutores para la gestión de los servicios de natación. Los usuarios tienen derecho a acceder, modificar o eliminar sus datos, y la política describe las medidas de seguridad y la información de contacto para consultas.`,
	alternates: {
		canonical: 'https://miniswimmer.cl/politica-de-privacidad',
		languages: {
			'en-US': 'https://miniswimmer.cl/politica-de-privacidad',
			'es': 'https://miniswimmer.cl/politica-de-privacidad',
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
		url: 'https://miniswimmer.cl/politica-de-privacidad',
		title: `Conozca nuestra Política de Privacidad`,
		description: `Mini Swimmer detalla sus prácticas de privacidad respecto a la recopilación, el uso y la protección de datos personales de niños (con el consentimiento de sus padres) y sus tutores para la gestión de los servicios de natación. Los usuarios tienen derecho a acceder, modificar o eliminar sus datos, y la política describe las medidas de seguridad y la información de contacto para consultas.`,
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
		title: `Conozca nuestra Política de Privacidad`,
		description: `Mini Swimmer detalla sus prácticas de privacidad respecto a la recopilación, el uso y la protección de datos personales de niños (con el consentimiento de sus padres) y sus tutores para la gestión de los servicios de natación. Los usuarios tienen derecho a acceder, modificar o eliminar sus datos, y la política describe las medidas de seguridad y la información de contacto para consultas.`,
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
	"url": "https://miniswimmer.cl/politica-de-privacidad",
	"logo": "https://images.prismic.io/miniswimmerchile/aBuatCdWJ-7kRuIZ_SOCIAL-MEDIAv2.png?auto=format,compress",
	"description": "Mini Swimmer detalla sus prácticas de privacidad respecto a la recopilación, el uso y la protección de datos personales de niños (con el consentimiento de sus padres) y sus tutores para la gestión de los servicios de natación. Los usuarios tienen derecho a acceder, modificar o eliminar sus datos, y la política describe las medidas de seguridad y la información de contacto para consultas.",
	"sameAs": [
		"https://www.facebook.com/miniswimmer.academy",
		"https://www.instagram.com/miniswimmer.chile", 
		"https://www.instagram.com/miniswimmer.us/",
		"https://www.linkedin.com/company/105056316"
	]
};
export default function PrivacyPolicyPage() {
	return (
		<>
			<SchemaMarkup type="Organization" data={organizationSchema} />
			<main>
				<PrivacyPolicy />
			</main>
		</>
	);
}
