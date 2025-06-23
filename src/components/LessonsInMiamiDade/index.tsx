import Hero from "../Common/Hero";
import Testimonials from "../Common/Testimonials";
import WhatsappContact from "../Common/WhatsappContact";
import Counter from "../Common/Counter";
import Features from "../Common/Features";

const PAGE:string = "lessonMiamipage"
const Home = () => {
	return (
		<>
			<Hero pageTraslation={PAGE} />
			{/* <FeaturesWithImage pageTraslation={PAGE} /> */}
			<Features pageTraslation={PAGE} />
			<WhatsappContact pageTraslation={PAGE} />
			<Testimonials pageTraslation={PAGE} />
			<Counter pageTraslation={PAGE} />
			{/* <Newsletter pageTraslation={PAGE}/>
			<Blog pageTraslation={PAGE}/> */}
		</>
	);
};

export default Home;
