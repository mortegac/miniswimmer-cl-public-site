import { Metadata } from "next";
import SchemaMarkup from "@/components/Common/SchemaMarkup";
import VsAcquatiempo from "@/components/VsAcquatiempo";

export const metadata: Metadata = {
	title: "Miniswimmer vs Acqua Tiempo: ¿Academia o gimnasio con piscina?",
	description: `Comparamos Miniswimmer y Acqua Tiempo en metodología, programas, sedes e instructores. Descubre por qué una academia especializada supera a un gimnasio con piscina para aprender a nadar.`,
	alternates: {
		canonical: 'https://miniswimmer.cl/miniswimmer-vs-acquatiempo',
		languages: {
			'x-default': 'https://miniswimmer.cl/miniswimmer-vs-acquatiempo',
			'es': 'https://miniswimmer.cl/miniswimmer-vs-acquatiempo',
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
		url: 'https://miniswimmer.cl/miniswimmer-vs-acquatiempo',
		title: `Miniswimmer vs Acqua Tiempo: ¿Academia o gimnasio con piscina?`,
		description: `Comparamos Miniswimmer y Acqua Tiempo en metodología, programas y sedes. Descubre el Método Miniswimmer: PNL + Coaching + Natación para bebés, niños y adultos.`,
		images: [
			{
				url: "https://images.prismic.io/miniswimmerchile/aBuatCdWJ-7kRuIZ_SOCIAL-MEDIAv2.png?auto=format,compress",
				width: 1200,
				height: 630,
				alt: "Miniswimmer vs Acqua Tiempo"
			}
		],
	},
	twitter: {
		card: "summary_large_image",
		site: "@miniswimmer_edu",
		creator: "@miniswimmer_edu",
		title: `Miniswimmer vs Acqua Tiempo: ¿Academia o gimnasio con piscina?`,
		description: `Comparamos Miniswimmer y Acqua Tiempo en metodología, programas y sedes. Descubre el Método Miniswimmer: PNL + Coaching + Natación.`,
		images: [
			{
				url: "https://images.prismic.io/miniswimmerchile/aBuatCdWJ-7kRuIZ_SOCIAL-MEDIAv2.png?auto=format,compress",
				width: 1200,
				height: 630,
				alt: "Miniswimmer vs Acqua Tiempo"
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

const breadcrumbSchema = {
	"@context": "https://schema.org",
	"@type": "BreadcrumbList",
	"itemListElement": [
		{ "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://miniswimmer.cl" },
		{ "@type": "ListItem", "position": 2, "name": "Miniswimmer vs Acqua Tiempo", "item": "https://miniswimmer.cl/miniswimmer-vs-acquatiempo" }
	]
};

export default function VsAcquatiempoPage() {
	return (
		<>
			<SchemaMarkup data={organizationRefSchema} />
			<SchemaMarkup data={breadcrumbSchema} />
			<VsAcquatiempo />
		</>
	);
}
