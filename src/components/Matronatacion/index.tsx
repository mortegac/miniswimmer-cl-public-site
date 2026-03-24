import Hero from "../Common/Hero";
import WhatsappContact from "../Common/WhatsappContact";
import Counter from "../Common/Counter";
import Features from "../Common/Features";
import TestClassContact from "../Common/TestClassContact";

const PAGE: string = "matronatacionpage";
const Matronatacion = () => {
  return (
    <>
      <Hero pageTraslation={PAGE} />
      <div className="mt-20 relative z-1 mx-auto w-full max-w-[1170px] px-4 sm:px-8 xl:px-0">
        <section className="mb-12">
          <h2 className="mb-4.5 font-satoshi text-3xl font-bold -tracking-[1.6px] text-slate-700 lg:text-heading-4 xl:text-heading-2">
            Matronatación: la aventura acuática que viven tú y tu bebé juntos
          </h2>
          <p className="mb-6 font-satoshi text-lg text-slate-700">
            El agua es el primer entorno natural del bebé. En{" "}
            <strong>Miniswimmer</strong> aprovechamos ese vínculo innato para
            crear experiencias únicas de estimulación temprana acuática desde
            los 2 meses de vida. Nuestro <strong>Método Miniswimmer</strong> —
            desarrollado durante más de 20 años en Chile y Estados Unidos —
            integra <strong>PNL, coaching y psicomotricidad</strong> para que
            cada clase sea mucho más que nadar: es un espacio de desarrollo,
            juego y conexión profunda entre papás e hijitos.
          </p>
          <p className="mb-4.5 font-satoshi text-lg text-slate-700">
            Cada clase está llena de juegos, canciones y actividades diseñadas
            específicamente para la etapa de tu bebé. Nuestros coaches
            certificados en primera infancia guían el proceso con paciencia y
            cariño, respetando siempre los tiempos y necesidades de tu pequeño.{" "}
            <strong>
              Porque los primeros meses son únicos, y merecen vivirse con toda
              la alegría del mundo.
            </strong>
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

export default Matronatacion;
