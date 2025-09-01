import Hero from "../Common/Hero";
import Testimonials from "../Common/Testimonials";
import WhatsappContact from "../Common/WhatsappContact";
import Counter from "../Common/Counter";
import Features from "../Common/Features";
import TestClassForm from "../Common/TestClassForm";


const PAGE:string = "lessonsInVinadelMarpage"
const LessonsInVinadelMar = () => {
	return (
		<>
			<Hero pageTraslation={PAGE} />
				<div className='mt-20 relative z-1 mx-auto w-full max-w-[1170px] px-4 sm:px-8 xl:px-0'>
				<section className='mb-12'>
					<h2 className='mb-4.5 font-satoshi text-3xl font-bold -tracking-[1.6px] text-slate-700 lg:text-heading-4 xl:text-heading-2'>
						¡Agenda tu Clase de Prueba y Descubre el Método Miniswimmer!
					</h2>
					<p className='mb-4.5 font-satoshi text-lg  text-slate-700 '>¿Quieres que tu hijo aprenda a nadar con confianza, autonomía y disfrutando cada momento? Te invitamos a vivir la experiencia <strong>Miniswimmer</strong> con una clase de prueba. Es la oportunidad perfecta para que conozcas nuestra innovadora metodología, basada en la <strong>Programación Neurolingüística (PNL)</strong> y el <strong>Coaching</strong>, diseñada para un aprendizaje real y significativo.</p>
				</section>
				</div>
			<TestClassForm pageTraslation={PAGE} />
			<Features pageTraslation={PAGE} />
			<WhatsappContact pageTraslation={PAGE} />
			{/* <Testimonials pageTraslation={PAGE} /> */}
			<Counter pageTraslation={PAGE} />
			{/* <Newsletter pageTraslation={PAGE}/>
			<Blog pageTraslation={PAGE}/> */}
		</>
	);
};

export default LessonsInVinadelMar;
