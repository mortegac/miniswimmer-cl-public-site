"use client";

import Link from "next/link";

const WHATSAPP_URL =
  "https://api.whatsapp.com/send/?phone=56973447496&text=Quiero+agendar+una+clase+de+prueba+desde+miniswimmer.cl&type=phone_number&app_absent=0";

const features = [
  {
    label: "Método con nombre propio",
    miniswimmer: "Método Miniswimmer — PNL + Coaching + Natación, diseñado para un aprendizaje real y significativo",
    competitor: 'Técnicas "modernas" sin metodología nombrada ni documentada',
    winner: "miniswimmer",
  },
  {
    label: "Programas para bebés",
    miniswimmer: "Matronatación desde los primeros meses de edad",
    competitor: "No disponible — la edad mínima es 3 años",
    winner: "miniswimmer",
  },
  {
    label: "Programa para embarazadas",
    miniswimmer: "Mami Swimmer — natación e hidrogimnasia prenatal",
    competitor: "No existe ningún programa para embarazadas",
    winner: "miniswimmer",
  },
  {
    label: "Niños con TEA / Neurodiversidad",
    miniswimmer: "Neuro Swimmer — programa adaptado integrado con PNL",
    competitor: "Natación para niños neurodivergentes (sin marco metodológico)",
    winner: "miniswimmer",
  },
  {
    label: "Adultos y Big Swimmer",
    miniswimmer: "Big Swimmer: adolescentes y adultos de todo nivel",
    competitor: "Sí — natación adultos, master e intermedio/avanzado",
    winner: "empate",
  },
  {
    label: "Preparación para triatlón",
    miniswimmer: "Big Swimmer enfocado en adultos y resistencia",
    competitor: "Rama master con enfoque en triatlón e Ironman",
    winner: "empate",
  },
  {
    label: "Hidroterapia",
    miniswimmer: "Hidro Swimmer — clases de hidroterapia acuática",
    competitor: "No disponible",
    winner: "miniswimmer",
  },
  {
    label: "Ubicaciones / Sedes",
    miniswimmer: "Peñalolén, Maitencillo, Viña del Mar (Chile) · Miami-Dade y Broward (USA)",
    competitor: "Única sede en La Reina, Santiago",
    winner: "miniswimmer",
  },
  {
    label: "Transparencia de precios",
    miniswimmer: "Consulta vía WhatsApp o formulario de clase de prueba",
    competitor: "Sí — planes desde $63.000 hasta $95.000 CLP/mes publicados",
    winner: "competitor",
  },
  {
    label: "Reserva y pago online",
    miniswimmer: "Formulario de clase de prueba funcional en el sitio",
    competitor: 'Checkout en desarrollo — botón "En desarrollo" sin funcionalidad',
    winner: "miniswimmer",
  },
  {
    label: "Visibilidad en Google",
    miniswimmer: "Sitio Next.js con SSR, sitemap, JSON-LD y metadata completa",
    competitor: "SPA Angular renderizada en cliente — Google no puede indexar el contenido",
    winner: "miniswimmer",
  },
  {
    label: "Reseñas verificadas",
    miniswimmer: "Testimonios reales con nombres y fotos",
    competitor: 'Estadísticas propias (95% satisfacción) sin respaldo de terceros',
    winner: "miniswimmer",
  },
  {
    label: "Contenido educativo",
    miniswimmer: "Blog activo con artículos sobre PNL, matronatación y desarrollo infantil",
    competitor: "Sin blog ni contenido educativo",
    winner: "miniswimmer",
  },
  {
    label: "Sitio bilingüe (ES/EN)",
    miniswimmer: "Español + Inglés — también atiende familias en EE.UU.",
    competitor: "Solo español",
    winner: "miniswimmer",
  },
];

const advantages = [
  {
    icon: "🧠",
    title: "Método Miniswimmer",
    desc: "El único método de natación en Chile que integra Programación Neurolingüística (PNL) y Coaching. Salmon Swim enseña natación convencional sin una metodología documentada ni diferenciadora.",
  },
  {
    icon: "👶",
    title: "Bebés y todas las etapas",
    desc: "Desde Matronatación para bebés hasta Big Swimmer para adultos, pasando por Mami Swimmer, Neuro Swimmer e Hidro Swimmer. Salmon Swim no tiene programas para bebés ni para embarazadas.",
  },
  {
    icon: "🌎",
    title: "Múltiples sedes",
    desc: "Peñalolén, Maitencillo, Viña del Mar (Chile) y Florida (Miami-Dade y Broward, EE.UU.). Salmon Swim opera exclusivamente en La Reina, Santiago.",
  },
  {
    icon: "🔍",
    title: "Búsqueda en Google",
    desc: "Nuestro sitio en Next.js es indexable por Google con SSR, JSON-LD y sitemap completo. El sitio de Salmon Swim (Angular SPA) es invisible para los buscadores — no puede rankear.",
  },
];

export default function VsSalmonSwim() {
  return (
    <main>
      {/* Hero */}
      <section className="relative z-1 overflow-hidden bg-primary pb-17.5 pt-30 lg:pb-20 lg:pt-30 xl:pb-25 xl:pt-[170px]">
        <div className="mx-auto w-full max-w-[1170px] px-4 sm:px-8 xl:px-0">
          <div className="text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#87e0ff]">
              Comparación de Academias de Natación
            </p>
            <h1 className="mb-5 font-satoshi text-heading-4 font-bold -tracking-[1.6px] text-white lg:text-heading-2 xl:text-[52px] xl:leading-[1.12]">
              Miniswimmer vs Salmon Swim:{" "}
              <span className="text-[#87e0ff]">¿Cuál elegir?</span>
            </h1>
            <p className="mx-auto mb-8 max-w-[680px] text-lg text-slate-100">
              Comparamos ambas academias en metodología, programas, sedes y más
              — para que tomes la mejor decisión para tu familia.
            </p>
            <Link
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-flex items-center gap-4 rounded-full bg-black py-2 pl-7.5 pr-2 font-satoshi font-medium text-white hover:bg-opacity-90"
            >
              <span>AGENDA TU CLASE DE PRUEBA GRATIS</span>
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary text-white">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M3.411 10.625a.625.625 0 0 1 0-1.25h10.733L10.3 5.524a.625.625 0 1 1 .884-.884l5.208 5.208a.625.625 0 0 1 0 .884L11.183 15.94a.625.625 0 1 1-.883-.883l3.844-3.432H3.41z" fill="currentColor" />
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
          Datos recopilados de los sitios web oficiales de ambas academias.
        </p>

        {/* Mobile: cards */}
        <div className="block lg:hidden space-y-4">
          {features.map((f) => (
            <div key={f.label} className="rounded-xl border border-slate-200 p-4 shadow-sm">
              <p className="mb-2 text-sm font-bold text-slate-700">{f.label}</p>
              <div className="flex flex-col gap-2">
                <div className="flex items-start gap-2">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary text-white text-xs">✓</span>
                  <div>
                    <p className="text-xs font-semibold text-primary">Miniswimmer</p>
                    <p className="text-sm text-slate-600">{f.miniswimmer}</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-slate-200 text-slate-500 text-xs">—</span>
                  <div>
                    <p className="text-xs font-semibold text-slate-500">Salmon Swim</p>
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
                  Salmon Swim
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {features.map((f, i) => (
                <tr key={f.label} className={i % 2 === 0 ? "bg-white" : "bg-slate-50/40"}>
                  <td className="px-6 py-4 font-medium text-slate-700">{f.label}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-start gap-2">
                      {f.winner === "miniswimmer" && (
                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary text-white text-xs">✓</span>
                      )}
                      <span className={f.winner === "miniswimmer" ? "text-slate-800 font-medium" : "text-slate-600"}>
                        {f.miniswimmer}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-start gap-2">
                      {f.winner === "competitor" && (
                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-slate-400 text-white text-xs">✓</span>
                      )}
                      <span className={f.winner === "competitor" ? "text-slate-700 font-medium" : "text-slate-400"}>
                        {f.competitor}
                      </span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-4 text-center text-xs text-slate-400">
          ✓ Indica el criterio donde cada academia tiene ventaja. "Empate" indica oferta equivalente.
        </p>
      </section>

      {/* Advantages */}
      <section className="mt-20 bg-slate-50 py-16">
        <div className="mx-auto w-full max-w-[1170px] px-4 sm:px-8 xl:px-0">
          <h2 className="mb-3 text-center font-satoshi text-3xl font-bold -tracking-[1px] text-slate-800 lg:text-heading-3">
            ¿Por qué elegir Miniswimmer?
          </h2>
          <p className="mb-12 text-center text-slate-500">
            Más allá de la comparación, esto es lo que nos hace únicos.
          </p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {advantages.map((a) => (
              <div key={a.title} className="rounded-2xl bg-white p-6 shadow-sm border border-slate-100">
                <div className="mb-4 text-4xl">{a.icon}</div>
                <h3 className="mb-2 font-satoshi text-lg font-bold text-slate-800">{a.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto mt-20 mb-20 w-full max-w-[1170px] px-4 sm:px-8 xl:px-0">
        <div className="rounded-3xl bg-primary px-8 py-16 text-center shadow-lg">
          <h2 className="mb-4 font-satoshi text-3xl font-bold text-white lg:text-heading-3">
            Prueba la diferencia Miniswimmer
          </h2>
          <p className="mx-auto mb-8 max-w-[560px] text-slate-100">
            Agenda una clase de prueba sin compromiso y comprueba por qué cientos
            de familias en Chile y Estados Unidos eligen el Método Miniswimmer.
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
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M3.411 10.625a.625.625 0 0 1 0-1.25h10.733L10.3 5.524a.625.625 0 1 1 .884-.884l5.208 5.208a.625.625 0 0 1 0 .884L11.183 15.94a.625.625 0 1 1-.883-.883l3.844-3.432H3.41z" fill="currentColor" />
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
