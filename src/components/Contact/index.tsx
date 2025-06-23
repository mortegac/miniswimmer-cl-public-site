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

import Testimonials from "../Common/Testimonials";

import WhatsappContact from "../Common/WhatsappContact";
import Counter from "../Common/Counter";
import ContactForm from "../Common/ContactForm";


const PAGE:string = "contactpage"
const Home = () => {
	return (
		<>
			<Hero pageTraslation={PAGE} />
			<Counter pageTraslation={PAGE} />
			<ContactForm pageTraslation={PAGE} />
			<WhatsappContact pageTraslation={PAGE} />
			<Testimonials pageTraslation={PAGE} />
			{/* <Newsletter pageTraslation={PAGE}/>
			<Blog pageTraslation={PAGE}/> */}
		</>
	);
};

export default Home;
