// import { getTranslations } from "next-intl/server";
import { useTranslations } from 'next-intl';

import BlogItem from "@/components/Blog/BlogItem";
import SectionHeader from "@/components/Common/SectionHeader";

const Blog = (props:any) => {
	const {pageTraslation} = props;
	const t = useTranslations(`${pageTraslation}.latest_blog_section`);
	const posts: any[] = t.raw('posts');
	
	// const posts:any = [
	// 	{
	// 		_id: 1,
	// 		title: "Que es la matronatación y que beneficios tiene",
	// 		slug: "que-es-la-matronatacion-y-que-beneficios-tiene",
	// 		metadata: "Imagina a tu bebé disfrutando del agua, riendo y fortaleciendo sus músculos, todo mientras crea recuerdos inolvidables contigo. La matronatación no es solo un pasatiempo, es una experiencia transformadora que puede beneficiar enormemente a los bebés desde los 2 meses de edad. Pero, ¿qué es exactamente y cómo puede ayudar a tu pequeño?",
	// 		body: ["Imagina a tu bebé disfrutando del agua, riendo y fortaleciendo sus músculos, todo mientras crea recuerdos inolvidables contigo. La matronatación no es solo un pasatiempo, es una experiencia transformadora que puede beneficiar enormemente a los bebés desde los 2 meses de edad. Pero, ¿qué es exactamente y cómo puede ayudar a tu pequeño?"],
	// 		mainImage: "https://images.prismic.io/miniswimmer-academy/Z-ScBXdAxsiBv85D_seguridad.png?auto=format,compress?imwidth=3840",
	// 		url: "https://images.prismic.io/miniswimmer-academy/Z-SOPHdAxsiBv82K_Screenshot2025-03-26at8.30.52PM.png?auto=format,compress?imwidth=1920",
	// 		author: "Manu",
	// 		tags: ["matronatación", "matronatacion", "bebes", "niños"],
	// 		publishedAt: "",
	// 	},
	// 	{
	// 		_id: 1,
	// 		title: "Beneficios emocionales y sociales de la Matronatación",
	// 		slug: "beneficios-emocionales-y-sociales-de-la-matronatacion",
	// 		metadata: 'La matronatación ofrece una oportunidad única para fortalecer el vínculo entre padres e hijos. Durante estas sesiones, los bebés experimentan un contacto físico cercano con sus padres en un entorno acuático relajante. Este contacto piel con piel promueve la liberación de oxitocina, conocida como la "hormona del amor", que refuerza el apego emocional.',
	// 		body: ['La matronatación ofrece numerosos beneficios físicos para los bebés de 2 meses o más. El agua proporciona una resistencia suave que ayuda a fortalecer los músculos del bebé de manera gradual y segura.'],
	// 		mainImage: "https://images.prismic.io/miniswimmer-academy/Z-SPundAxsiBv82c_Screenshot2025-03-26at8.37.16PM.png?auto=format,compress?imwidth=1920",
	// 		url: "https://miniswimmer.academy/blog/beneficios-emocionales-y-sociales-de-la-matronatacion",
	// 		author: "Manu",
	// 		tags: ["matronatación","matronatacion", "bebes", "niños", "Clase de natación niños", "Certificación coach de natación", "Clase de natación bebes", "Método Miniswimmer"],
	// 		publishedAt: "",
	// 	},
	// 	{
	// 		_id: 1,
	// 		title: "¿Cómo la Programación Neurolingüística Mejora el Aprendizaje de tu Hijo?",
	// 		slug: "como-la-programacion-neurolinguistica-mejora-el-aprendizaje-de-tu-hijo",
	// 		metadata: "¿Te has preguntado alguna vez por qué algunos niños aprenden más rápido que otros? La programación neurolingüística ofrece respuestas fascinantes sobre cómo cada cerebro procesa la información de manera única.",
	// 		body: ["¿Te has preguntado alguna vez por qué algunos niños aprenden más rápido que otros? La programación neurolingüística ofrece respuestas fascinantes sobre cómo cada cerebro procesa la información de manera única."],
	// 		mainImage: "https://images.prismic.io/miniswimmer-academy/Z-NjGXdAxsiBv6B5_pnl-kids.png?auto=format,compress?imwidth=1920",
	// 		url: "https://miniswimmer.academy/blog/aspectos-de-seguridad-en-la-matronatacion",
	// 		author: "Manu",
	// 		tags: ["PNL", "Programación Neurolingüística", "Aprendizaje"],
	// 		publishedAt: "",
	// 	}
	// ]
	

	return (
		<section
			className='overflow-hidden py-17.5 lg:py-22.5 xl:py-27.5'
			id='blog'
		>
			{/* <!-- section title --> */}
			<SectionHeader title={t("title")} description={t("subtitle")} />

			<div className='mx-auto w-full max-w-[1170px] px-4 sm:px-8 xl:px-0'>
				<div className='grid grid-cols-1 gap-7.5 sm:grid-cols-2 lg:grid-cols-3'>
					{/* <!-- blog item --> */}
					{posts
						?.slice(0, 3)
						.map((item:any, key: number) => 
							// <pre>{JSON.stringify(item)}</pre>
						<BlogItem blog={item} key={key} />
						)}

					{/* {!posts?.length && (
						<p className='col-span-full text-center text-lg'>No posts found</p>
					)} */}
				</div>
			</div>
		</section>
	);
};

export default Blog;
