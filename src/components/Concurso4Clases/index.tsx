import ConcursoForm from "../Common/ConcursoForm";

const Concurso4Clases = () => {
  return (
    <>
      <div className="mt-36 relative z-1 mx-auto w-full max-w-[1170px] px-4 sm:px-8 xl:px-0">
        <section className="mb-12 rounded-10 bg-primary px-8 py-10 sm:px-12 sm:py-12">
          <h2 className="mb-4.5 font-satoshi text-3xl font-bold -tracking-[1.6px] text-white lg:text-heading-4 xl:text-heading-2">
            ¡Ganaste 4 clases gratis!
          </h2>
          <p className="mb-4.5 font-satoshi text-lg text-white/90">
            Completa el formulario y nuestro equipo te contactará lo antes
            posible para agendar tus 4 clases gratis.
          </p>
          <video
            src="/videos/gift.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="mt-4 w-full max-w-xs rounded-10 shadow-features sm:max-w-sm"
          />
        </section>
      </div>
      <ConcursoForm numClases={4} />
    </>
  );
};

export default Concurso4Clases;
