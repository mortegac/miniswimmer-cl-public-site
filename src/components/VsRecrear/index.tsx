"use client";

import Link from "next/link";

const WHATSAPP_URL =
  "https://api.whatsapp.com/send/?phone=56973447496&text=Quiero+agendar+una+clase+de+prueba+desde+miniswimmer.cl&type=phone_number&app_absent=0";

const features = [
  {
    label: "Tipo de negocio",
    miniswimmer:
      "Academia de natación especializada — el aprendizaje acuático es nuestro único foco.",
    competitor:
      "Club deportivo multifuncional: gimnasio, 7 canchas de pádel, clases de yoga, pilates, zumba, TRX y natación. La natación es una línea de ingresos más.",
    winner: "miniswimmer",
  },
  {
    label: "Metodología",
    miniswimmer:
      "Método Miniswimmer — PNL + Coaching + Natación. Metodología documentada, nombrada y con respaldo psicopedagógico.",
    competitor:
      'Sin metodología declarada. Solo mencionan "evaluación inicial de instructores" y progresión genérica por los 4 estilos.',
    winner: "miniswimmer",
  },
  {
    label: "Programa bebés",
    miniswimmer:
      "Matronatación con el Método Miniswimmer — vínculo, PNL y estimulación significativa desde los primeros meses.",
    competitor:
      "Escuela de Natación desde 6 meses. Sin descripción pedagógica específica para bebés ni mención al vínculo.",
    winner: "miniswimmer",
  },
  {
    label: "Miedo al agua",
    miniswimmer:
      "El Método Miniswimmer trabaja explícitamente el miedo y la ansiedad acuática con PNL — en niños y adultos.",
    competitor:
      "Sin programa ni contenido dedicado al miedo al agua. El sitio no menciona acuafobia ni ansiedad acuática.",
    winner: "miniswimmer",
  },
  {
    label: "Embarazadas",
    miniswimmer:
      "Mami Swimmer — natación e hidrogimnasia prenatal con el Método Miniswimmer.",
    competitor: "Sin programa específico para embarazadas.",
    winner: "miniswimmer",
  },
  {
    label: "Niños con TEA",
    miniswimmer:
      "Neuro Swimmer — programa adaptado con marco de PNL e instrucción especializada.",
    competitor:
      "Sin programa específico para niños con TEA o necesidades especiales.",
    winner: "miniswimmer",
  },
  {
    label: "Hidroterapia",
    miniswimmer:
      "Hidro Swimmer — programa de hidroterapia acuática con cupos disponibles.",
    competitor:
      "Sin programa de hidroterapia. Aquaerobic disponible, pero no es terapia instructiva.",
    winner: "miniswimmer",
  },
  {
    label: "Credenciales de instructores",
    miniswimmer:
      "Instructores especializados con formación documentada en el Método Miniswimmer.",
    competitor:
      'Sin titulaciones, certificaciones ni años de experiencia publicados para ningún instructor. Reseñas externas mencionan "malos profesores" en clases de natación.',
    winner: "miniswimmer",
  },
  {
    label: "Testimonios",
    miniswimmer:
      "Testimonios reales con nombres completos y resultados concretos de familias en Chile y EE.UU.",
    competitor:
      "Sin testimonios en el sitio oficial. Reseñas externas (TripAdvisor, Foursquare) incluyen críticas a la calidad de instrucción, temperatura del agua y aseo.",
    winner: "miniswimmer",
  },
  {
    label: "Ubicaciones",
    miniswimmer:
      "Peñalolén, Maitencillo, Viña del Mar (Chile) · Miami-Dade y Broward (EE.UU.)",
    competitor:
      "4 sedes en el área metropolitana de Santiago (La Florida, La Cisterna, Macul). Sin presencia fuera de la RM.",
    winner: "miniswimmer",
  },
  {
    label: "Reserva online",
    miniswimmer:
      "Formulario de clase de prueba sin compromiso, disponible en el sitio.",
    competitor:
      "Formulario online para selección de plan, pero la programación de clases requiere coordinar con el club. No es un agendamiento directo.",
    winner: "miniswimmer",
  },
  {
    label: "Transparencia de precios",
    miniswimmer:
      "Información disponible al contactar directamente. Clase de prueba gratuita sin compromiso.",
    competitor:
      "Precios publicados en el sitio (desde $322.900 CLP por trimestre). Incluyen planes con descuento del 50% en trimestre/semestre.",
    winner: "empate",
  },
  {
    label: "Contenido educativo",
    miniswimmer: "Blog activo sobre PNL, matronatación y desarrollo infantil.",
    competitor:
      "Sin blog, sin artículos educativos, sin guías para padres. El sitio es un catálogo de planes y horarios.",
    winner: "miniswimmer",
  },
  {
    label: "Presencia internacional",
    miniswimmer:
      "Sitio bilingüe (ES/EN) + sedes en Miami-Dade y Broward para familias hispanohablantes en EE.UU.",
    competitor: "Solo español. Sin presencia fuera de Chile.",
    winner: "miniswimmer",
  },
];

const advantages = [
  {
    icon: "🎯",
    title: "Especialización vs. multifunción",
    desc: "Club Recrear es un complejo deportivo donde la natación comparte protagonismo con el gym, el pádel, el yoga y el zumba. En Miniswimmer, cada decisión — método, instructores, estructura de clase — está diseñada exclusivamente para enseñar a nadar.",
  },
  {
    icon: "🧠",
    title: "Un método, no solo clases",
    desc: "Club Recrear no declara ninguna metodología de enseñanza. El Método Miniswimmer integra PNL y Coaching para trabajar la confianza, el miedo al agua y el aprendizaje significativo — no solo los 4 estilos de nado.",
  },
  {
    icon: "👨‍👩‍👧",
    title: "Programas que otros no tienen",
    desc: "Mami Swimmer (embarazadas), Neuro Swimmer (niños con TEA) e Hidro Swimmer (hidroterapia) no existen en Club Recrear. Si tu familia tiene necesidades específicas, Miniswimmer tiene un programa diseñado para ti.",
  },
  {
    icon: "⭐",
    title: "Instructores visibles y evaluados",
    desc: "Club Recrear no publica credenciales de ningún instructor y tiene reseñas externas que cuestionan la calidad de la instrucción. En Miniswimmer conoces al equipo antes de inscribirte, y las familias avalan los resultados con sus propios nombres.",
  },
];

export default function VsRecrear() {
  return (
    <main>
      {/* Hero */}
      <section className="relative z-1 overflow-hidden bg-primary pb-17.5 pt-30 lg:pb-20 lg:pt-30 xl:pb-25 xl:pt-[170px]">
        <div className="mx-auto w-full max-w-[1170px] px-4 sm:px-8 xl:px-0">
          <div className="text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#87e0ff]">
              Academia de natación vs. Club deportivo multifuncional
            </p>
            <h1 className="mb-5 font-satoshi text-heading-4 font-bold -tracking-[1.6px] text-white lg:text-heading-2 xl:text-[48px] xl:leading-[1.12]">
              Miniswimmer vs{" "}
              <span className="text-[#87e0ff]">Club Recrear</span>
            </h1>
            <p className="mx-auto mb-8 max-w-[680px] text-lg text-slate-100">
              ¿Clases de natación en un club deportivo o en una academia
              especializada? Comparamos programas, metodología, instructores y
              experiencia para que decidas con información real.
            </p>
            <Link
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-flex items-center gap-4 rounded-full bg-black py-2 pl-7.5 pr-2 font-satoshi font-medium text-white hover:bg-opacity-90"
            >
              <span>AGENDA TU CLASE DE PRUEBA GRATIS</span>
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary text-white">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M3.411 10.625a.625.625 0 0 1 0-1.25h10.733L10.3 5.524a.625.625 0 1 1 .884-.884l5.208 5.208a.625.625 0 0 1 0 .884L11.183 15.94a.625.625 0 1 1-.883-.883l3.844-3.432H3.41z"
                    fill="currentColor"
                  />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="mx-auto mt-20 w-full max-w-[1170px] px-4 sm:px-8 xl:px-0">
        <h2 className="mb-3 text-center font-satoshi text-3xl font-bold -tracking-[1px] text-slate-800 lg:text-heading-3">
          Comparación directa
        </h2>
        <p className="mb-10 text-center text-slate-500">
          Datos recopilados de los sitios web oficiales de ambas instituciones.
        </p>

        {/* Mobile: cards */}
        <div className="block lg:hidden space-y-4">
          {features.map((f) => (
            <div
              key={f.label}
              className="rounded-xl border border-slate-200 p-4 shadow-sm"
            >
              <p className="mb-2 text-sm font-bold text-slate-700">{f.label}</p>
              <div className="flex flex-col gap-2">
                <div className="flex items-start gap-2">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary text-white text-xs">
                    ✓
                  </span>
                  <div>
                    <p className="text-xs font-semibold text-primary">
                      Miniswimmer
                    </p>
                    <p className="text-sm text-slate-600">{f.miniswimmer}</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-slate-200 text-slate-500 text-xs">
                    —
                  </span>
                  <div>
                    <p className="text-xs font-semibold text-slate-500">
                      Club Recrear
                    </p>
                    <p className="text-sm text-slate-500">{f.competitor}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop: table */}
        <div className="hidden lg:block overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
          <table className="w-full table-fixed text-sm">
            <thead>
              <tr className="bg-slate-50">
                <th className="w-1/4 px-6 py-4 text-left font-satoshi text-xs font-bold uppercase tracking-wider text-slate-500">
                  Criterio
                </th>
                <th className="w-[37.5%] px-6 py-4 text-left font-satoshi text-xs font-bold uppercase tracking-wider text-primary">
                  Miniswimmer
                </th>
                <th className="w-[37.5%] px-6 py-4 text-left font-satoshi text-xs font-bold uppercase tracking-wider text-slate-400">
                  Club Recrear
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {features.map((f, i) => (
                <tr
                  key={f.label}
                  className={i % 2 === 0 ? "bg-white" : "bg-slate-50/40"}
                >
                  <td className="px-6 py-4 font-medium text-slate-700">
                    {f.label}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-start gap-2">
                      {f.winner === "miniswimmer" && (
                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary text-white text-xs">
                          ✓
                        </span>
                      )}
                      <span
                        className={
                          f.winner === "miniswimmer"
                            ? "text-slate-800 font-medium"
                            : "text-slate-600"
                        }
                      >
                        {f.miniswimmer}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-slate-400">{f.competitor}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-center text-xs text-slate-400">
          ✓ Indica ventaja en ese criterio. &ldquo;Empate&rdquo; indica oferta
          equivalente.
        </p>
      </section>

      {/* Advantages */}
      <section className="mt-20 bg-slate-50 py-16">
        <div className="mx-auto w-full max-w-[1170px] px-4 sm:px-8 xl:px-0">
          <h2 className="mb-3 text-center font-satoshi text-3xl font-bold -tracking-[1px] text-slate-800 lg:text-heading-3">
            ¿Por qué una academia especializada?
          </h2>
          <p className="mb-12 text-center text-slate-500 max-w-[640px] mx-auto">
            La natación como parte del menú de un club deportivo no es lo mismo
            que una academia dedicada a enseñar a nadar.
          </p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {advantages.map((a) => (
              <div
                key={a.title}
                className="rounded-2xl bg-white p-6 shadow-sm border border-slate-100"
              >
                <div className="mb-4 text-4xl">{a.icon}</div>
                <h3 className="mb-2 font-satoshi text-lg font-bold text-slate-800">
                  {a.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {a.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto mt-20 mb-20 w-full max-w-[1170px] px-4 sm:px-8 xl:px-0">
        <div className="rounded-3xl bg-primary px-8 py-16 text-center shadow-lg">
          <h2 className="mb-4 font-satoshi text-3xl font-bold text-white lg:text-heading-3">
            Prueba la diferencia de una academia especializada
          </h2>
          <p className="mx-auto mb-8 max-w-[560px] text-slate-100">
            Agenda una clase de prueba sin compromiso y descubre lo que el
            Método Miniswimmer puede hacer por tu hijo o por ti.
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-flex items-center gap-4 rounded-full bg-black py-2 pl-7.5 pr-2 font-satoshi font-medium text-white hover:bg-opacity-90"
            >
              <span>AGENDAR CLASE DE PRUEBA</span>
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary text-white">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M3.411 10.625a.625.625 0 0 1 0-1.25h10.733L10.3 5.524a.625.625 0 1 1 .884-.884l5.208 5.208a.625.625 0 0 1 0 .884L11.183 15.94a.625.625 0 1 1-.883-.883l3.844-3.432H3.41z"
                    fill="currentColor"
                  />
                </svg>
              </span>
            </Link>
            <Link
              href="/clases-natacion-penalolen"
              className="font-satoshi font-medium text-white underline underline-offset-4 hover:text-slate-200"
            >
              Ver nuestras sedes →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
