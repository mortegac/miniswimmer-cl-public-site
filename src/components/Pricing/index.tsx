import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Learn about the Miniswimmer method",
	description: `Our method uses neurolinguistic programming and coaching to ensure children experience real and meaningful learning throughout their lives.`,
	openGraph: {
		type: "website",
		title: `Learn about the Miniswimmer method`,
		description: `Our method uses neurolinguistic programming and coaching to ensure children experience real and meaningful learning throughout their lives.`,
		images:
			"https://images.prismic.io/miniswimmerchile/aBuatCdWJ-7kRuIZ_SOCIAL-MEDIAv2.png?auto=format,compress",
	},
	twitter: {
		card: "summary_large_image",
		title: `Learn about the Miniswimmer method`,
		description: `Our method uses neurolinguistic programming and coaching to ensure children experience real and meaningful learning throughout their lives.`,
		images:
			"https://images.prismic.io/miniswimmerchile/aBuatCdWJ-7kRuIZ_SOCIAL-MEDIAv2.png?auto=format,compress",
	},
};


import Hero from "../Common/Hero";
import FeaturesWithImage from "../Common/FeaturesWithImage";
import Testimonials from "../Common/Testimonials";
import Newsletter from "../Common/Newsletter";
import WhatsappContact from "../Common/WhatsappContact";
import Counter from "../Common/Counter";
import Blog from "../Common/Blog";

const PAGE:string = "pricingpage"
const Home = () => {
	return (
		<>
			<Hero pageTraslation={PAGE} />
			{/* <FeaturesWithImage pageTraslation={PAGE} /> */}
			<Counter pageTraslation={PAGE} />
			<WhatsappContact pageTraslation={PAGE} />
			<Testimonials pageTraslation={PAGE} />
			{/* <Newsletter pageTraslation={PAGE}/>
			<Blog pageTraslation={PAGE}/> */}
		</>
	);
};

export default Home;
