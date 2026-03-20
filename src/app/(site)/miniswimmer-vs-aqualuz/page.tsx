import { Metadata } from "next";
import SchemaMarkup from "@/components/Common/SchemaMarkup";
import VsAqualuz from "@/components/VsAqualuz";

export const metadata: Metadata = {
	title: "Miniswimmer vs Aqualuz: ¿Cuál academia de natación elegir?",
	description: `Comparamos Miniswimmer y Aqualuz en programas, metodología, sedes y más. Descubre por qué el Método Miniswimmer (PNL + Coaching + Natación) es la mejor alternativa a Aqualuz para bebés, niños y adultos en Santiago y V Región.`,
	alternates: {
		canonical: 'https://miniswimmer.cl/miniswimmer-vs-aqualuz',
		languages: {
			'x-default': 'https://miniswimmer.cl/miniswimmer-vs-aqualuz',
			'es': 'https://miniswimmer.cl/miniswimmer-vs-aqualuz',
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
		url: 'https://miniswimmer.cl/miniswimmer-vs-aqualuz',
		title: `Miniswimmer vs Aqualuz: ¿Cuál academia de natación elegir?`,
		description: `Comparamos Miniswimmer y Aqualuz en programas, metodología, sedes y más. Descubre el Método Miniswimmer: PNL + Coaching + Natación para bebés, niños y adultos.`,
		images: [
			{
				url: "https://images.prismic.io/miniswimmerchile/aBuatCdWJ-7kRuIZ_SOCIAL-MEDIAv2.png?auto=format,compress",
				width: 1200,
				height: 630,
				alt: "Miniswimmer vs Aqualuz — Comparación de Academias de Natación"
			}
		],
	},
	twitter: {
		card: "summary_large_image",
		site: "@miniswimmer_edu",
		creator: "@miniswimmer_edu",
		title: `Miniswimmer vs Aqualuz: ¿Cuál academia de natación elegir?`,
		description: `Comparamos Miniswimmer y Aqualuz en programas, metodología, sedes y más. Descubre el Método Miniswimmer: PNL + Coaching + Natación.`,
		images: [
			{
				url: "https://images.prismic.io/miniswimmerchile/aBuatCdWJ-7kRuIZ_SOCIAL-MEDIAv2.png?auto=format,compress",
				width: 1200,
				height: 630,
				alt: "Miniswimmer vs Aqualuz"
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
		{ "@type": "ListItem", "position": 2, "name": "Miniswimmer vs Aqualuz", "item": "https://miniswimmer.cl/miniswimmer-vs-aqualuz" }
	]
};

export default function VsAqualuzPage() {
	return (
		<>
			<SchemaMarkup data={organizationRefSchema} />
			<SchemaMarkup data={breadcrumbSchema} />
			<VsAqualuz />
		</>
	);
}
