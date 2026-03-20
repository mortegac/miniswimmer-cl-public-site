"use client";

import Link from "next/link";

const WHATSAPP_URL =
  "https://api.whatsapp.com/send/?phone=56973447496&text=Quiero+agendar+una+clase+de+prueba+desde+miniswimmer.cl&type=phone_number&app_absent=0";

const features = [
  {
    label: "Metodología",
    miniswimmer:
      "Método Miniswimmer — PNL + Coaching + Natación. Trabaja la confianza, el miedo al agua y el aprendizaje significativo, no solo la técnica.",
    competitor:
      "Método analítico-sintético genérico, sin nombre propio ni marco psicopedagógico diferenciador.",
    winner: "miniswimmer",
  },
  {
    label: "Programa para bebés",
    miniswimmer: "Matronatación desde los primeros meses de edad con método Miniswimmer integrado",
    competitor:
      "Baby Recreación y Baby Seguridad (desde 2 meses) con enfoque en música y seguridad acuática",
    winner: "empate",
  },
  {
    label: "Programa embarazadas",
    miniswimmer: "Mami Swimmer — natación e hidrogimnasia prenatal",
    competitor: "Mami Splash + Ciclo de charlas con matrona y psicóloga invitadas",
    winner: "empate",
  },
  {
    label: "Adultos y Big Swimmer",
    miniswimmer: "Big Swimmer para adolescentes y adultos de todos los niveles",
    competitor: "Taller de natación adultos + Hidrogimnasia adultos",
    winner: "empate",
  },
  {
    label: "Hidroterapia",
    miniswimmer: "Hidro Swimmer — programa de hidroterapia acuática",
    competitor: "Terapia con kinesiólogo y T.O. — página en construcción, no disponible",
    winner: "miniswimmer",
  },
  {
    label: "Programa para niños con TEA",
    miniswimmer: "Tea Swimmer — programa adaptado con marco de PNL integrado",
    competitor: "T.O. especialista en TEA mencionada, sin programa publicado ni reservas disponibles",
    winner: "miniswimmer",
  },
  {
    label: "Miedo al agua",
    miniswimmer:
      "El Método Miniswimmer trabaja explícitamente el miedo al agua con PNL y coaching — adultos y niños",
    competitor: "No existe programa específico para fobia o miedo al agua",
    winner: "miniswimmer",
  },
  {
    label: "Ubicaciones / Sedes",
    miniswimmer:
      "Peñalolén, Maitencillo, Viña del Mar (Chile) · Miami-Dade y Broward (USA)",
    competitor: "Única sede en Las Condes, Vitacura, Santiago",
    winner: "miniswimmer",
  },
  {
    label: "Transparencia de precios",
    miniswimmer: "Consulta vía WhatsApp o formulario de clase de prueba",
    competitor:
      "Precios publicados: desde $25.000 CLP por clase hasta $184.000 CLP por 8 clases",
    winner: "competitor",
  },
  {
    label: "Reserva online",
    miniswimmer: "Formulario de clase de prueba funcional en el sitio",
    competitor: "Sistema de reservas Wix completamente operativo",
    winner: "competitor",
  },
  {
    label: "Visibilidad en Google",
    miniswimmer:
      "Next.js SSR con sitemap, JSON-LD y metadata completa — indexado correctamente",
    competitor:
      "Wix CSR con contenido escaso en el HTML inicial — visibilidad SEO limitada",
    winner: "miniswimmer",
  },
  {
    label: "Testimonios y reseñas",
    miniswimmer: "Testimonios reales con nombres y fotos de familias",
    competitor: "Sin testimonios ni reseñas visibles en el sitio",
    winner: "miniswimmer",
  },
  {
    label: "Contenido educativo",
    miniswimmer: "Blog activo sobre PNL, matronatación y desarrollo infantil",
    competitor: "Sin blog ni guías educativas para padres",
    winner: "miniswimmer",
  },
  {
    label: "Sitio bilingüe",
    miniswimmer: "Español + Inglés — también atiende familias en EE.UU.",
    competitor: "Solo español",
    winner: "miniswimmer",
  },
  {
    label: "Eventos y actividades",
    miniswimmer: "Clase de prueba como puerta de entrada al método",
    competitor:
      "Amplio ecosistema de eventos: Splash Experience, pool parties, after school, campamentos de verano",
    winner: "competitor",
  },
];

const advantages = [
  {
    icon: "🧠",
    title: "Método con respaldo psicopedagógico",
    desc: "Color Splash enseña técnica acuática. El Método Miniswimmer integra PNL y coaching para resolver el miedo al agua, construir confianza y generar aprendizaje real y significativo — algo que ningún método convencional ofrece.",
  },
  {
    icon: "🌊",
    title: "Programa para el miedo al agua",
    desc: "Si tu hijo o un adulto tiene miedo al agua, Color Splash no tiene ningún programa específico para eso. Miniswimmer trabaja explícitamente la fobia y la confianza acuática con técnicas de PNL.",
  },
  {
    icon: "🌎",
    title: "Sedes en Chile y EE.UU.",
    desc: "Color Splash opera exclusivamente en Las Condes. Miniswimmer tiene sedes en Peñalolén, Maitencillo, Viña del Mar y Florida (EE.UU.) — el único método de natación chileno con presencia internacional.",
  },
  {
    icon: "🎯",
    title: "Tea Swimmer e Hidro Swimmer",
    desc: "Programas especializados reales y disponibles para niños con TEA e hidroterapia. Color Splash tiene estas especialidades mencionadas como 'en construcción' — sin reservas ni programa publicado.",
  },
];

export default function VsColorSplash() {
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
              Miniswimmer vs Color Splash:{" "}
              <span className="text-[#87e0ff]">¿Cuál elegir?</span>
            </h1>
            <p className="mx-auto mb-8 max-w-[680px] text-lg text-slate-100">
              Comparamos ambas academias en metodología, programas, sedes y más
              — para que elijas con información real y sin sorpresas.
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
                    <p className="text-xs font-semibold text-slate-500">Color Splash</p>
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
                <th className="w-[37.5%] px-6 py-4 text-left font-satoshi text-xs font-bold uppercase tracking-wider text-slate-400">Color Splash</th>
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
