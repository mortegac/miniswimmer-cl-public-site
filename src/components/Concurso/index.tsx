import ConcursoForm from "../Common/ConcursoForm";

const Concurso = () => {
  return (
    <>
      <div className="mt-36 relative z-1 mx-auto w-full max-w-[1170px] px-4 sm:px-8 xl:px-0">
        <section className="mb-12">
          <h2 className="mb-4.5 font-satoshi text-3xl font-bold -tracking-[1.6px] text-slate-700 lg:text-heading-4 xl:text-heading-2">
            ¡Felicitaciones!
          </h2>
          <p className="mb-4.5 font-satoshi text-lg text-slate-700">
            Completa el formulario y nuestro equipo te contactará lo antes
            posible para agendar tu clase gratis.
          </p>
          <video
            src="/videos/gift.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="mt-6 w-full max-w-xs rounded-10 shadow-features sm:max-w-sm"
          />
        </section>
      </div>
      <ConcursoForm />
    </>
  );
};

export default Concurso;
