"use client";

import Link from "next/link";

const WHATSAPP_URL =
  "https://api.whatsapp.com/send/?phone=56973447496&text=Quiero+agendar+una+clase+de+prueba+desde+miniswimmer.cl&type=phone_number&app_absent=0";

const features = [
  {
    label: "Método con nombre propio",
    miniswimmer: "Método Miniswimmer (PNL + Coaching + Natación)",
    aqualuz: 'Llaman "método único" pero no lo nombran ni explican',
    winner: "miniswimmer",
  },
  {
    label: "Programas disponibles",
    miniswimmer:
      "Matronatación, Niños, Mami Swimmer, Big Swimmer, Hidro Swimmer, Tea Swimmer",
    aqualuz: "Bebés, Niños (4+), Embarazadas — sin adultos ni programas especializados",
    winner: "miniswimmer",
  },
  {
    label: "Desde qué edad",
    miniswimmer: "Desde 2 meses de edad",
    aqualuz: "Desde 1 mes (Caricias y Burbujas)",
    winner: "empate",
  },
  {
    label: "Ubicaciones / Sedes",
    miniswimmer:
      "Peñalolén, Maitencillo, Viña del Mar (Chile) · Miami-Dade y Broward (USA)",
    aqualuz: "Única sede en La Reina, Santiago",
    winner: "miniswimmer",
  },
  {
    label: "Programas para adultos",
    miniswimmer: "Big Swimmer (adolescentes y adultos desde nivel básico)",
    aqualuz: "No existe programa de natación para adultos",
    winner: "miniswimmer",
  },
  {
    label: "Programa TEA / Necesidades especiales",
    miniswimmer: "Tea Swimmer — programa adaptado para niños con TEA",
    aqualuz: "No disponible",
    winner: "miniswimmer",
  },
  {
    label: "Hidroterapia",
    miniswimmer: "Hidro Swimmer (hidroterapia acuática)",
    aqualuz: "No disponible como programa de natación",
    winner: "miniswimmer",
  },
  {
    label: "Transparencia de precios",
    miniswimmer: "Consulta directa vía WhatsApp o formulario",
    aqualuz: "Sin información de precios — todo por email",
    winner: "empate",
  },
  {
    label: "Reserva online",
    miniswimmer: "Formulario de clase de prueba en el sitio",
    aqualuz: "Solo por correo electrónico",
    winner: "miniswimmer",
  },
  {
    label: "Presencia en Google",
    miniswimmer: "Perfil activo con reseñas recientes",
    aqualuz: "30 reseñas (última visible: 2022)",
    winner: "miniswimmer",
  },
  {
    label: "Contenido educativo",
    miniswimmer: "Blog activo con artículos de estimulación y PNL",
    aqualuz: "Sin blog ni contenido educativo",
    winner: "miniswimmer",
  },
  {
    label: "Idiomas",
    miniswimmer: "Español + Inglés (sitio bilingüe)",
    aqualuz: "Solo español",
    winner: "miniswimmer",
  },
];

const advantages = [
  {
    icon: "🧠",
    title: "Método Miniswimmer",
    desc: "El único método de natación en Chile que integra Programación Neurolingüística (PNL) y Coaching. No solo enseñamos a nadar — ayudamos a tu hijo a construir confianza, autonomía y aprendizaje significativo para toda la vida.",
  },
  {
    icon: "🌎",
    title: "Múltiples sedes en Chile y EE.UU.",
    desc: "Peñalolén, Maitencillo, Viña del Mar y Florida (Miami-Dade y Broward). Aqualuz opera en una única sede en La Reina.",
  },
  {
    icon: "👶",
    title: "Programas para todos",
    desc: "Desde bebés de 2 meses hasta adultos: Matronatación, Niños, Mami Swimmer, Big Swimmer, Tea Swimmer e Hidro Swimmer. Aqualuz no ofrece programas para adultos ni programas adaptados.",
  },
  {
    icon: "💬",
    title: "Reserva directa y rápida",
    desc: "Agenda tu clase de prueba directamente en nuestro sitio o por WhatsApp. Sin correos ni esperas innecesarias.",
  },
];

export default function VsAqualuz() {
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
              Miniswimmer vs Aqualuz:{" "}
              <span className="text-[#87e0ff]">¿Cuál elegir?</span>
            </h1>
            <p className="mx-auto mb-8 max-w-[680px] text-lg text-slate-100">
              Comparamos ambas academias en programas, metodología, sedes y más
              — para que elijas con información real.
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
                    <p className="text-xs font-semibold text-slate-500">Aqualuz</p>
                    <p className="text-sm text-slate-500">{f.aqualuz}</p>
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
                  Aqualuz
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
                  <td className="px-6 py-4 text-slate-400">{f.aqualuz}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
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
              <div
                key={a.title}
                className="rounded-2xl bg-white p-6 shadow-sm border border-slate-100"
              >
                <div className="mb-4 text-4xl">{a.icon}</div>
                <h3 className="mb-2 font-satoshi text-lg font-bold text-slate-800">
                  {a.title}
                </h3>
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
