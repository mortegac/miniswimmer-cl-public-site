import { Metadata } from "next";
import SchemaMarkup from "@/components/Common/SchemaMarkup";
import Pricing from "@/components/Pricing";

export const metadata: Metadata = {
	title: "Precios de nuestros planes de clases",
	description: `Descubre nuestras planes de natación para clases regulares, premium y a domicilio. Clases para bebés, niños, adultos y embarazadas con instructores certificados, desde los 2 meses hasta niveles avanzados.`,
	alternates: {
		canonical: 'https://miniswimmer.cl/pricing',
		languages: {
			'en-US': 'https://miniswimmer.cl/pricing',
			'es': 'https://miniswimmer.cl/pricing',
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
		url: 'https://miniswimmer.cl/pricing',
		title: `Precios de nuestros planes de clases`,
		description: `Descubre nuestras planes de natación para clases regulares, premium y a domicilio. Clases para bebés, niños, adultos y embarazadas con instructores certificados, desde los 2 meses hasta niveles avanzados.`,
		images: [
			{
				url: "https://images.prismic.io/miniswimmerchile/aBuatCdWJ-7kRuIZ_SOCIAL-MEDIAv2.png?auto=format,compress",
				width: 1200,
				height: 630,
				alt: "Miniswimmer Method"
			}
		],
	},
	twitter: {
		card: "summary_large_image",
		site: "@miniswimmer_edu",
		title: `Precios de nuestros planes de clases`,
		description: `Descubre nuestras planes de natación para clases regulares, premium y a domicilio. Clases para bebés, niños, adultos y embarazadas con instructores certificados, desde los 2 meses hasta niveles avanzados.`,
		images: [
			{
				url: "https://images.prismic.io/miniswimmerchile/aBuatCdWJ-7kRuIZ_SOCIAL-MEDIAv2.png?auto=format,compress",
				width: 1200,
				height: 630,
				alt: "Miniswimmer Method"
			}
		],
	},
};

const organizationSchema = {
	"@context": "https://schema.org",
	"@type": "Organization",
	"name": "Miniswimmer",
	"url": "https://miniswimmer.cl/pricing",
	"logo": "https://images.prismic.io/miniswimmerchile/aBuatCdWJ-7kRuIZ_SOCIAL-MEDIAv2.png?auto=format,compress",
	"description": "Descubre nuestras planes de natación para clases regulares, premium y a domicilio. Clases para bebés, niños, adultos y embarazadas con instructores certificados, desde los 2 meses hasta niveles avanzados.",
	"sameAs": [
		"https://www.facebook.com/miniswimmer.academy",
		"https://www.instagram.com/miniswimmer.chile", 
		"https://www.instagram.com/miniswimmer.us/",
		"https://www.linkedin.com/company/105056316"
	]
};

export default function PricingPage() {
	return (
		<>
			<SchemaMarkup type="Organization" data={organizationSchema} />
			<main>
				<Pricing />
			</main>
		</>
	);
}
