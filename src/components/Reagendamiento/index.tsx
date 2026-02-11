import Hero from "../Common/Hero";
import Testimonials from "../Common/Testimonials";
import WhatsappContact from "../Common/WhatsappContact";
import Counter from "../Common/Counter";
import Features from "../Common/Features";
import ReagendamientoForm from "../Common/ReagendamientoForm";


const PAGE:string = "lessonsInPenalolenpage"
const Reagendamiento = () => {
	return (
		<> 
			{/* <Hero pageTraslation={PAGE} /> */}
				<div className='mt-36 relative z-1 mx-auto w-full max-w-[1170px] px-4 sm:px-8 xl:px-0'>
				<section className='mb-12'>
					<h2 className='mb-4.5 font-satoshi text-3xl font-bold -tracking-[1.6px] text-slate-700 lg:text-heading-4 xl:text-heading-2'>
						¡Formulario reagendamiento!
					</h2>
					<p className='mb-4.5 font-satoshi text-lg  text-slate-700 '>Para reagendar una clase, debe completar todos los campos del formulario con un mínimo de 12 horas de anticipación; si la solicitud supera este tiempo, no será válida y la clase se perderá.</p>
				</section>
				</div>
			<ReagendamientoForm pageTraslation={PAGE} />
			{/* <Features pageTraslation={PAGE} /> */}
			{/* <WhatsappContact pageTraslation={PAGE} /> */}
			{/* <Testimonials pageTraslation={PAGE} /> */}
			{/* <Counter pageTraslation={PAGE} /> */}
			{/* <Newsletter pageTraslation={PAGE}/>
			<Blog pageTraslation={PAGE}/> */}
		</>
	);
};

export default Reagendamiento;
