import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Descuentos y Oportunidades para nuestra Comunidad de Nadadores",
	description: `Explora las colaboraciones y beneficios únicos para nuestras familias. Accede a descuentos exclusivos con nuestros partners en natación infantil`,
	alternates: {
		canonical: 'https://miniswimmer.cl/alianzas',
		languages: {
			'en-US': 'https://miniswimmer.cl/alianzas',
			'es': 'https://miniswimmer.cl/alianzas',
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
		url: 'https://miniswimmer.cl/alianzas',
		title: `Descuentos y Oportunidades para nuestra Comunidad de Nadadores`,
		description: `Explora las colaboraciones y beneficios únicos para nuestras familias. Accede a descuentos exclusivos con nuestros partners en natación infantil`,
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
		title: `Descuentos y Oportunidades para nuestra Comunidad de Nadadores`,
		description: `Explora las colaboraciones y beneficios únicos para nuestras familias. Accede a descuentos exclusivos con nuestros partners en natación infantil`,
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


import Hero from "../Common/Hero";
import FeaturesWithImage from "../Common/FeaturesWithImage";
import FeaturesAlianzas from "../Common/FeaturesAlianzas";
import Testimonials from "../Common/Testimonials";
import Newsletter from "../Common/Newsletter";
import WhatsappContact from "../Common/WhatsappContact";
import Counter from "../Common/Counter";
import Blog from "../Common/Blog";


const PAGE:string = "alianzaspage"
const AboutPage = () => {
	return (
		<>
			<Hero pageTraslation={PAGE} />
			{/* <Counter pageTraslation={PAGE} /> */}
			<FeaturesAlianzas pageTraslation={PAGE} />
			{/* <FeaturesWithImage pageTraslation={PAGE} /> */}
			{/* <WhatsappContact pageTraslation={PAGE} />
			<Testimonials pageTraslation={PAGE} /> */}
			{/* <Newsletter pageTraslation={PAGE}/>
			 */}
			 <Blog pageTraslation={PAGE}/>
		</>
	);
};

export default AboutPage;
