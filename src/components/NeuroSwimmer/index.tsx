import Hero from "../Common/Hero";
import WhatsappContact from "../Common/WhatsappContact";
import Counter from "../Common/Counter";
import Features from "../Common/Features";
import TestClassContact from "../Common/TestClassContact";


const PAGE: string = "neuroSwimmerpage"
const NeuroSwimmer = () => {
	return (
		<>
			<Hero pageTraslation={PAGE} />
			<div className='mt-20 relative z-1 mx-auto w-full max-w-[1170px] px-4 sm:px-8 xl:px-0'>
				<section className='mb-12'>
					<h2 className='mb-4.5 font-satoshi text-3xl font-bold -tracking-[1.6px] text-slate-700 lg:text-heading-4 xl:text-heading-2'>
						Natación con enfoque neurodivergente: para que tu hijo aprenda a su ritmo
					</h2>
					<p className='mb-6 font-satoshi text-lg text-slate-700'>
						Cuando las familias comprenden el proceso, el aprendizaje se vuelve más seguro, respetuoso y significativo.
						Por eso en <strong>Miniswimmer</strong> formamos a nuestros coaches con la{' '}
						<strong>Certificación Neuro Swimmer</strong>: una especialización en enseñanza de natación desde una mirada
						inclusiva, consciente y basada en el neurodesarrollo.
					</p>
					<p className='mb-4.5 font-satoshi text-lg text-slate-700'>
						Esto se traduce directamente en las clases de tu hijo: un coach que entiende cómo los aspectos sensoriales,
						emocionales y motores influyen en el aprendizaje acuático, que diseña cada sesión respetando los tiempos y
						necesidades de tu niño, y que sabe cómo acompañar procesos de regulación emocional dentro del agua.{' '}
						<strong>Porque cada niño merece descubrir el agua a su manera.</strong>
					</p>
				</section>
			</div>
			<TestClassContact pageTraslation={PAGE} />
			<Features pageTraslation={PAGE} />
			<WhatsappContact pageTraslation={PAGE} />
			<Counter pageTraslation={PAGE} />
		</>
	);
};

export default NeuroSwimmer;
