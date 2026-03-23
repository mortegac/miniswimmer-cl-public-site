import { Metadata } from "next";
import SchemaMarkup from "@/components/Common/SchemaMarkup";
import VsLeCorpsFlottant from "@/components/VsLeCorpsFlottant";

export const metadata: Metadata = {
	title: "Miniswimmer vs Le Corps Flottant: ¿Cuál academia elegir?",
	description: `Comparamos Miniswimmer y Le Corps Flottant en metodología, programas, sedes y enfoque psicopedagógico. Descubre qué diferencia el Método Miniswimmer (PNL + Coaching + Natación) de la pedagogía Catteau.`,
	alternates: {
		canonical: 'https://miniswimmer.cl/miniswimmer-vs-le-corps-flottant',
		languages: {
			'x-default': 'https://miniswimmer.cl/miniswimmer-vs-le-corps-flottant',
			'es': 'https://miniswimmer.cl/miniswimmer-vs-le-corps-flottant',
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
		url: 'https://miniswimmer.cl/miniswimmer-vs-le-corps-flottant',
		title: `Miniswimmer vs Le Corps Flottant: ¿Cuál academia elegir?`,
		description: `Comparamos Miniswimmer y Le Corps Flottant en metodología, programas y sedes. Descubre el Método Miniswimmer: PNL + Coaching + Natación para bebés, niños y adultos.`,
		images: [
			{
				url: "https://images.prismic.io/miniswimmerchile/aBuatCdWJ-7kRuIZ_SOCIAL-MEDIAv2.png?auto=format,compress",
				width: 1200,
				height: 630,
				alt: "Miniswimmer vs Le Corps Flottant"
			}
		],
	},
	twitter: {
		card: "summary_large_image",
		site: "@miniswimmer_edu",
		creator: "@miniswimmer_edu",
		title: `Miniswimmer vs Le Corps Flottant: ¿Cuál academia elegir?`,
		description: `Comparamos Miniswimmer y Le Corps Flottant en metodología, programas y sedes. Descubre el Método Miniswimmer: PNL + Coaching + Natación.`,
		images: [
			{
				url: "https://images.prismic.io/miniswimmerchile/aBuatCdWJ-7kRuIZ_SOCIAL-MEDIAv2.png?auto=format,compress",
				width: 1200,
				height: 630,
				alt: "Miniswimmer vs Le Corps Flottant"
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
		{ "@type": "ListItem", "position": 2, "name": "Miniswimmer vs Le Corps Flottant", "item": "https://miniswimmer.cl/miniswimmer-vs-le-corps-flottant" }
	]
};

export default function VsLeCorpsFlottantPage() {
	return (
		<>
			<SchemaMarkup data={organizationRefSchema} />
			<SchemaMarkup data={breadcrumbSchema} />
			<VsLeCorpsFlottant />
		</>
	);
}
