import { Metadata } from "next";
import SchemaMarkup from "@/components/Common/SchemaMarkup";
import TermsAndConditions from "@/components/TermsAndConditions";



export const metadata: Metadata = {
	title: "Términos y condiciones del servicio",
	description: `Los servicios de Mini Swimmer requieren registro con detalles médicos y prueba de edad, tienen una política de cancelación/reprogramación con aviso previo y hacen cumplir las reglas de la clase, como la llegada puntual y la vestimenta adecuada tanto para los niños como para los apoderados.`,
	alternates: {
		canonical: 'https://miniswimmer.cl/terms-and-conditions',
		languages: {
			'en-US': 'https://miniswimmer.cl/terms-and-conditions',
			'es': 'https://miniswimmer.cl/terms-and-conditions',
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
		url: 'https://miniswimmer.cl/terms-and-conditions',
		title: `Términos y condiciones del servicio`,
		description: `Los servicios de Mini Swimmer requieren registro con detalles médicos y prueba de edad, tienen una política de cancelación/reprogramación con aviso previo y hacen cumplir las reglas de la clase, como la llegada puntual y la vestimenta adecuada tanto para los niños como para los apoderados.`,
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
		title: `Términos y condiciones del servicio`,
		description: `Los servicios de Mini Swimmer requieren registro con detalles médicos y prueba de edad, tienen una política de cancelación/reprogramación con aviso previo y hacen cumplir las reglas de la clase, como la llegada puntual y la vestimenta adecuada tanto para los niños como para los apoderados.`,
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
	"url": "https://miniswimmer.cl/terms-and-conditions",
	"logo": "https://images.prismic.io/miniswimmerchile/aBuatCdWJ-7kRuIZ_SOCIAL-MEDIAv2.png?auto=format,compress",
	"description": "Los servicios de Mini Swimmer requieren registro con detalles médicos y prueba de edad, tienen una política de cancelación/reprogramación con aviso previo y hacen cumplir las reglas de la clase, como la llegada puntual y la vestimenta adecuada tanto para los niños como para los apoderados.",
	"sameAs": [
		"https://www.facebook.com/miniswimmer.academy",
		"https://www.instagram.com/miniswimmer.chile", 
		"https://www.instagram.com/miniswimmer.us/",
		"https://www.linkedin.com/company/105056316"
	]
};

export default function TermsAndConditionsPage() {
	return (
		<>
			<SchemaMarkup type="Organization" data={organizationSchema} />
			<main>
				<TermsAndConditions />
			</main>
		</>
	);
}
