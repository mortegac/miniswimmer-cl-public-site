import Hero from "../Common/Hero";
import FeaturesWithImage from "../Common/FeaturesWithImage";
import Testimonials from "../Common/Testimonials";
// import Newsletter from "../Common/Newsletter";
import RegendamientoSection from "../Common/RegendamientoSection";
import WhatsappContact from "../Common/WhatsappContact";
import Counter from "../Common/Counter";
import Blog from "../Common/Blog";

const Home = () => {
  return (
    <>
      <Hero pageTraslation="homepage" />
      <FeaturesWithImage pageTraslation="homepage" />
      <WhatsappContact pageTraslation="homepage" />
      <Counter pageTraslation="homepage" />
      <Testimonials pageTraslation="homepage" />
      <RegendamientoSection pageTraslation="homepage" />
      <Blog pageTraslation="homepage" />
    </>
  );
};

export default Home;
