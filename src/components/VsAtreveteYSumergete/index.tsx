"use client";

import Link from "next/link";

const WHATSAPP_URL =
  "https://api.whatsapp.com/send/?phone=56973447496&text=Quiero+agendar+una+clase+de+prueba+desde+miniswimmer.cl&type=phone_number&app_absent=0";

const features = [
  {
    label: "Metodología",
    miniswimmer:
      "Método Miniswimmer — PNL + Coaching + Natación. Metodología documentada, nombrada y con respaldo psicopedagógico.",
    competitor:
      "Afirman \"10 años formando metodología\" pero nunca la nombran ni documentan. Sin nombre, sin explicación.",
    winner: "miniswimmer",
  },
  {
    label: "Miedo al agua",
    miniswimmer:
      "El Método Miniswimmer trabaja explícitamente el miedo y la ansiedad acuática con PNL — en niños y adultos.",
    competitor:
      "Ofrecen natación para adultos con mención al miedo al agua, pero sin contenido ni enfoque documentado.",
    winner: "miniswimmer",
  },
  {
    label: "Programa bebés",
    miniswimmer:
      "Matronatación con el Método Miniswimmer — vínculo, PNL y estimulación significativa desde los primeros meses.",
    competitor:
      "Salpicaduras Mini (3–12 meses) y Salpicaduras Pro (1–2 años) — estimulación acuática con enfoque en vínculo.",
    winner: "empate",
  },
  {
    label: "Embarazadas",
    miniswimmer:
      "Mami Swimmer — natación e hidrogimnasia prenatal con el Método Miniswimmer.",
    competitor:
      "Embarazadas Acuáticas — 4 modalidades: hidrogimnasia, natación terapéutica, suelo pélvico y relajación. Última clase con pareja.",
    winner: "empate",
  },
  {
    label: "Niños con TEA",
    miniswimmer:
      "Tea Swimmer — programa adaptado con marco de PNL e instrucción especializada.",
    competitor:
      "Natación con Autismo — programa mencionado pero sin contenido ni descripción de enfoque.",
    winner: "miniswimmer",
  },
  {
    label: "Hidroterapia",
    miniswimmer:
      "Hidro Swimmer — hidroterapia acuática disponible y con cupos.",
    competitor:
      "Terapia Acuática (kinesióloga) y Terapia Corporal Acuática — pero el agendamiento requiere llamar directamente.",
    winner: "miniswimmer",
  },
  {
    label: "Ubicaciones",
    miniswimmer:
      "Peñalolén, Maitencillo, Viña del Mar (Chile) · Miami-Dade y Broward (USA)",
    competitor:
      "Única sede en Ñuñoa, Santiago. El sitio dice \"busca tu sucursal más cercana\" pero solo existe una.",
    winner: "miniswimmer",
  },
  {
    label: "Instructores",
    miniswimmer:
      "Instructores con nombre, trayectoria y método de enseñanza documentado.",
    competitor:
      "Sin bios, sin nombres, sin fotos de instructores. Solo una kinesióloga nombrada para terapia.",
    winner: "miniswimmer",
  },
  {
    label: "Precios publicados",
    miniswimmer:
      "Información disponible al contactar directamente. Clase de prueba sin compromiso.",
    competitor:
      "Solo se publica la matrícula ($30.000 CLP). Los precios mensuales no están en el sitio.",
    winner: "empate",
  },
  {
    label: "Testimonios",
    miniswimmer:
      "Testimonios reales con nombres completos y resultados concretos.",
    competitor:
      "5 testimonios positivos pero sin apellidos, sin fotos verificadas, sin calificación numérica.",
    winner: "miniswimmer",
  },
  {
    label: "Contenido educativo",
    miniswimmer:
      "Blog activo sobre PNL, matronatación y desarrollo infantil.",
    competitor:
      "Sin blog, sin artículos, sin guías. Cero contenido educativo para padres.",
    winner: "miniswimmer",
  },
  {
    label: "Presencia internacional",
    miniswimmer:
      "Sitio bilingüe (ES/EN) + sedes en Miami-Dade y Broward para familias en EE.UU.",
    competitor:
      "Solo español. Sin presencia fuera de Santiago.",
    winner: "miniswimmer",
  },
  {
    label: "URLs y estructura web",
    miniswimmer:
      "URLs limpias y descriptivas — fáciles de compartir e indexar.",
    competitor:
      "URLs con UUID y hash: `/sucursales/3ae30c40-eb5c.../servicio/Salpicaduras-(3-a-12-meses)-bf7dac1d` — difíciles de leer y de bajo valor SEO.",
    winner: "miniswimmer",
  },
];

const advantages = [
  {
    icon: "🧠",
    title: "Un método, no solo clases",
    desc: "Atrévete y Sumérgete afirma una metodología de 10 años sin nombrarla. El Método Miniswimmer — PNL + Coaching + Natación — es concreto, documentado y diseñado para que el aprendizaje sea real y duradero.",
  },
  {
    icon: "🌎",
    title: "5 sedes vs 1",
    desc: "Peñalolén, Maitencillo, Viña del Mar, Miami-Dade y Broward. Atrévete y Sumérgete opera exclusivamente desde Ñuñoa — y aunque su web dice 'busca tu sucursal más cercana', solo existe una.",
  },
  {
    icon: "💧",
    title: "El miedo al agua, resuelto",
    desc: "Ambas academias ofrecen clases para adultos con miedo al agua. La diferencia: el Método Miniswimmer integra PNL para tratar la ansiedad acuática en su raíz, no solo la técnica de nado.",
  },
  {
    icon: "👤",
    title: "Instructores visibles",
    desc: "En Atrévete y Sumérgete no encontrarás fotos, nombres ni trayectorias de instructores. En Miniswimmer conoces al equipo que enseña a tu hijo — antes de inscribirlo.",
  },
];

export default function VsAtreveteYSumergete() {
  return (
    <main>
      {/* Hero */}
      <section className="relative z-1 overflow-hidden bg-primary pb-17.5 pt-30 lg:pb-20 lg:pt-30 xl:pb-25 xl:pt-[170px]">
        <div className="mx-auto w-full max-w-[1170px] px-4 sm:px-8 xl:px-0">
          <div className="text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#87e0ff]">
              Comparación de Academias de Natación
            </p>
            <h1 className="mb-5 font-satoshi text-heading-4 font-bold -tracking-[1.6px] text-white lg:text-heading-2 xl:text-[48px] xl:leading-[1.12]">
              Miniswimmer vs{" "}
              <span className="text-[#87e0ff]">Atrévete y Sumérgete</span>
            </h1>
            <p className="mx-auto mb-8 max-w-[680px] text-lg text-slate-100">
              Comparamos programas, metodología, sedes y más — para que elijas con información real cuál academia es la mejor para tu familia.
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
                    <p className="text-xs font-semibold text-slate-500">Atrévete y Sumérgete</p>
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
                <th className="w-1/4 px-6 py-4 text-left font-satoshi text-xs font-bold uppercase tracking-wider text-slate-500">Criterio</th>
                <th className="w-[37.5%] px-6 py-4 text-left font-satoshi text-xs font-bold uppercase tracking-wider text-primary">Miniswimmer</th>
                <th className="w-[37.5%] px-6 py-4 text-left font-satoshi text-xs font-bold uppercase tracking-wider text-slate-400">Atrévete y Sumérgete</th>
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
                    <span className="text-slate-400">{f.competitor}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-center text-xs text-slate-400">
          ✓ Indica ventaja en ese criterio. "Empate" indica oferta equivalente.
        </p>
      </section>

      {/* Advantages */}
      <section className="mt-20 bg-slate-50 py-16">
        <div className="mx-auto w-full max-w-[1170px] px-4 sm:px-8 xl:px-0">
          <h2 className="mb-3 text-center font-satoshi text-3xl font-bold -tracking-[1px] text-slate-800 lg:text-heading-3">
            ¿Por qué elegir Miniswimmer?
          </h2>
          <p className="mb-12 text-center text-slate-500">
            Lo que nos diferencia más allá de la comparación.
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
            Agenda una clase de prueba sin compromiso y comprueba por qué cientos de familias en Chile y Estados Unidos eligen el Método Miniswimmer.
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
