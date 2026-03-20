"use client";

import Link from "next/link";

const WHATSAPP_URL =
  "https://api.whatsapp.com/send/?phone=56973447496&text=Quiero+agendar+una+clase+de+prueba+en+Pe%C3%B1alolen+desde+miniswimmer.cl&type=phone_number&app_absent=0";

const features = [
  {
    label: "Metodología",
    miniswimmer:
      "Método Miniswimmer — PNL + Coaching + Natación. Trabaja la confianza, el miedo al agua y el aprendizaje significativo de cada alumno.",
    competitor:
      "4 niveles genéricos (A, NI, NII, NIII) sin metodología nombrada ni marco psicopedagógico.",
    winner: "miniswimmer",
  },
  {
    label: "Miedo al agua",
    miniswimmer:
      "Programa explícito para niños y adultos con fobia o ansiedad al agua — el núcleo del Método Miniswimmer.",
    competitor:
      "No existe programa ni enfoque específico para el miedo al agua. El alumno se adapta al ritmo grupal.",
    winner: "miniswimmer",
  },
  {
    label: "Precio",
    miniswimmer:
      "Inversión media-alta acorde al nivel de personalización y método. Consulta vía WhatsApp.",
    competitor:
      "Precio municipal subsidiado — describen sus cursos como \"uno de los más baratos de Santiago\".",
    winner: "competitor",
  },
  {
    label: "Disponibilidad",
    miniswimmer: "Cupos disponibles — agenda tu clase de prueba hoy mismo",
    competitor:
      "La mayoría de los programas muestran \"INSCRIBIRSE EN LISTA DE ESPERA\" — cupos agotados habitualmente.",
    winner: "miniswimmer",
  },
  {
    label: "Tamaño del grupo",
    miniswimmer:
      "Grupos pequeños con atención individualizada; ratio instructor-alumno definido",
    competitor:
      "Grupos masivos — piscina semi-olímpica de 6 carriles con aforo para toda la comuna.",
    winner: "miniswimmer",
  },
  {
    label: "Perfil del instructor",
    miniswimmer: "Instructores con nombre, trayectoria y especialización publicada",
    competitor:
      "Solo se nombra al coordinador. Sin bios, credenciales ni información de los profesores.",
    winner: "miniswimmer",
  },
  {
    label: "Precios publicados",
    miniswimmer: "Información disponible al contactar directamente",
    competitor:
      "Precios completamente ocultos — solo por teléfono o en persona. No están en el sitio web.",
    winner: "miniswimmer",
  },
  {
    label: "Programa bebés",
    miniswimmer:
      "Matronatación con el Método Miniswimmer — vínculo, confianza y estimulación temprana.",
    competitor:
      "Matronatación desde 5 meses — orientada a estimulación acuática básica en grupo.",
    winner: "miniswimmer",
  },
  {
    label: "Residencia requerida",
    miniswimmer:
      "Sin restricción de residencia — abierto a todos los vecinos de Santiago y otras regiones.",
    competitor:
      "Precio preferencial solo para vecinos de Peñalolén (se exige boleta de servicios). No-residentes pagan sobreprecio.",
    winner: "miniswimmer",
  },
  {
    label: "Horario",
    miniswimmer: "Horarios flexibles adaptados a cada familia",
    competitor:
      "Lunes a sábado 07:00–21:00 / 08:00–20:00. Cerrado los domingos.",
    winner: "empate",
  },
  {
    label: "Reserva online",
    miniswimmer: "Formulario de clase de prueba disponible en el sitio",
    competitor:
      "Inscripción online limitada — la mayoría de los programas requieren asistir en persona.",
    winner: "miniswimmer",
  },
  {
    label: "Comunicación con la familia",
    miniswimmer:
      "Canal directo con el instructor; seguimiento del progreso del alumno",
    competitor:
      "Sin portal para padres, sin reportes de avance, sin comunicación personalizada.",
    winner: "miniswimmer",
  },
  {
    label: "Testimomios y reseñas",
    miniswimmer: "Testimonios reales de familias con nombre y resultados concretos",
    competitor: "Sin testimonios ni reseñas en el sitio. Solo logros del equipo competitivo.",
    winner: "miniswimmer",
  },
  {
    label: "Infraestructura",
    miniswimmer:
      "Piscinas privadas adaptadas al aprendizaje; ambiente controlado para cada grupo.",
    competitor:
      "Piscina semi-olímpica municipal de 25m x 16m, 6 carriles, profundidad uniforme de 1,2–1,4 m.",
    winner: "competitor",
  },
];

const advantages = [
  {
    icon: "🧠",
    title: "Método vs. Clases",
    desc: "La piscina municipal ofrece instrucción acuática por niveles. Miniswimmer ofrece el Método Miniswimmer: PNL + coaching + natación. La diferencia es un hijo que aprende movimientos versus un hijo que aprende a relacionarse con el agua de por vida.",
  },
  {
    icon: "🎯",
    title: "Sin lista de espera",
    desc: "La mayoría de los programas de la piscina municipal muestran &ldquo;lista de espera&rdquo;. En Miniswimmer puedes agendar tu clase de prueba hoy mismo y comenzar esta semana.",
  },
  {
    icon: "👁️",
    title: "Tu hijo, visto como individuo",
    desc: "En la piscina municipal, tu hijo es uno más en un grupo masivo. En Miniswimmer, grupos pequeños y atención personalizada garantizan que el instructor conozca las fortalezas y bloqueos específicos de tu hijo.",
  },
  {
    icon: "💧",
    title: "El miedo al agua, abordado",
    desc: "La piscina municipal no tiene programa para el miedo al agua. El Método Miniswimmer fue diseñado específicamente para resolver la ansiedad acuática en niños y adultos — antes de enseñar técnica.",
  },
];

export default function VsPiscinaMunicipalPenalolen() {
  return (
    <main>
      {/* Hero */}
      <section className="relative z-1 overflow-hidden bg-primary pb-17.5 pt-30 lg:pb-20 lg:pt-30 xl:pb-25 xl:pt-[170px]">
        <div className="mx-auto w-full max-w-[1170px] px-4 sm:px-8 xl:px-0">
          <div className="text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#87e0ff]">
              Academia privada vs. Piscina municipal en Peñalolén
            </p>
            <h1 className="mb-5 font-satoshi text-heading-4 font-bold -tracking-[1.6px] text-white lg:text-heading-2 xl:text-[48px] xl:leading-[1.12]">
              Miniswimmer vs{" "}
              <span className="text-[#87e0ff]">Piscina Municipal de Peñalolén</span>
            </h1>
            <p className="mx-auto mb-8 max-w-[680px] text-lg text-slate-100">
              ¿Clases en la piscina municipal o con el Método Miniswimmer? Comparamos programas, disponibilidad y enfoque para que elijas con información real.
            </p>
            <Link
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-flex items-center gap-4 rounded-full bg-black py-2 pl-7.5 pr-2 font-satoshi font-medium text-white hover:bg-opacity-90"
            >
              <span>AGENDA TU CLASE DE PRUEBA EN PEÑALOLÉN</span>
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary text-white">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M3.411 10.625a.625.625 0 0 1 0-1.25h10.733L10.3 5.524a.625.625 0 1 1 .884-.884l5.208 5.208a.625.625 0 0 1 0 .884L11.183 15.94a.625.625 0 1 1-.883-.883l3.844-3.432H3.41z" fill="currentColor" />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Context note */}
      <section className="mx-auto mt-12 w-full max-w-[1170px] px-4 sm:px-8 xl:px-0">
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 text-sm text-slate-600">
          <strong className="text-slate-800">Nota de contexto:</strong> La piscina municipal de Peñalolén (CORDEP) es una opción válida para familias que buscan precio accesible. Esta comparación no pretende desacreditarla — reconocemos su valor comunitario. El objetivo es ayudarte a decidir qué opción es más adecuada para el objetivo específico de tu familia.
        </div>
      </section>

      {/* Comparison Table */}
      <section className="mx-auto mt-12 w-full max-w-[1170px] px-4 sm:px-8 xl:px-0">
        <h2 className="mb-3 text-center font-satoshi text-3xl font-bold -tracking-[1px] text-slate-800 lg:text-heading-3">
          Comparación directa
        </h2>
        <p className="mb-10 text-center text-slate-500">
          Datos recopilados del sitio oficial de CORDEP Peñalolén y de Miniswimmer.
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
                    <p className="text-xs font-semibold text-slate-500">CORDEP Peñalolén</p>
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
                <th className="w-[37.5%] px-6 py-4 text-left font-satoshi text-xs font-bold uppercase tracking-wider text-slate-400">CORDEP Peñalolén</th>
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
          ✓ Indica ventaja en ese criterio. "Empate" indica oferta equivalente.
        </p>
      </section>

      {/* Who should choose who */}
      <section className="mt-20 bg-slate-50 py-16">
        <div className="mx-auto w-full max-w-[1170px] px-4 sm:px-8 xl:px-0">
          <h2 className="mb-3 text-center font-satoshi text-3xl font-bold -tracking-[1px] text-slate-800 lg:text-heading-3">
            ¿Cuál es la mejor opción para tu familia?
          </h2>
          <p className="mb-10 text-center text-slate-500 max-w-[680px] mx-auto">
            La elección correcta depende de tu objetivo y prioridades.
          </p>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-white p-8">
              <h3 className="mb-4 font-satoshi text-xl font-bold text-slate-700">
                La piscina municipal puede ser buena opción si…
              </h3>
              <ul className="space-y-3 text-sm text-slate-500">
                <li className="flex items-start gap-2"><span className="mt-1 text-slate-400">•</span> El presupuesto es la prioridad absoluta</li>
                <li className="flex items-start gap-2"><span className="mt-1 text-slate-400">•</span> Tu hijo ya nada y solo quiere mantener el hábito</li>
                <li className="flex items-start gap-2"><span className="mt-1 text-slate-400">•</span> Buscas hidrogimnasia o aquabaile en grupo para adultos</li>
                <li className="flex items-start gap-2"><span className="mt-1 text-slate-400">•</span> Eres vecino de Peñalolén y calificas para el precio subsidiado</li>
                <li className="flex items-start gap-2"><span className="mt-1 text-slate-400">•</span> No te importa esperar en lista de espera</li>
              </ul>
            </div>
            <div className="rounded-2xl border-2 border-primary bg-white p-8">
              <h3 className="mb-4 font-satoshi text-xl font-bold text-primary">
                Miniswimmer es la opción si…
              </h3>
              <ul className="space-y-3 text-sm text-slate-600">
                <li className="flex items-start gap-2"><span className="mt-1 text-primary">✓</span> Tu hijo tiene miedo al agua o ansiedad acuática</li>
                <li className="flex items-start gap-2"><span className="mt-1 text-primary">✓</span> Quieres que tu hijo aprenda de forma real y significativa, no solo técnica</li>
                <li className="flex items-start gap-2"><span className="mt-1 text-primary">✓</span> Valoras la atención personalizada y grupos pequeños</li>
                <li className="flex items-start gap-2"><span className="mt-1 text-primary">✓</span> Necesitas empezar ahora — sin listas de espera</li>
                <li className="flex items-start gap-2"><span className="mt-1 text-primary">✓</span> Quieres saber exactamente quién enseña a tu hijo y cómo</li>
                <li className="flex items-start gap-2"><span className="mt-1 text-primary">✓</span> Buscas un método basado en evidencia (PNL + Coaching)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="mt-20">
        <div className="mx-auto w-full max-w-[1170px] px-4 sm:px-8 xl:px-0">
          <h2 className="mb-3 text-center font-satoshi text-3xl font-bold -tracking-[1px] text-slate-800 lg:text-heading-3">
            ¿Por qué el Método Miniswimmer?
          </h2>
          <p className="mb-12 text-center text-slate-500">
            Lo que no encontrarás en la piscina municipal.
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
            Sin lista de espera — empieza esta semana
          </h2>
          <p className="mx-auto mb-8 max-w-[560px] text-slate-100">
            Agenda una clase de prueba en Peñalolén sin compromiso. Comprueba la diferencia del Método Miniswimmer en la primera sesión.
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
              Ver nuestra sede en Peñalolén →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
