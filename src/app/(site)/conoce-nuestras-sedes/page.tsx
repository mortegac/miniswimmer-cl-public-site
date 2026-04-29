import { Metadata } from "next";
import Link from "next/link";
import SchemaMarkup from "@/components/Common/SchemaMarkup";

export const metadata: Metadata = {
  title: "Conoce Nuestras Sedes | Santiago, Valparaíso, Rancagua y Chillán — Miniswimmer",
  description:
    "Miniswimmer tiene sedes en Santiago (Peñalolén, La Reina, Ñuñoa, Vitacura), Viña del Mar, Rancagua y Chillán. Consulta disponibilidad y fechas de funcionamiento por WhatsApp.",
  alternates: {
    canonical: "https://miniswimmer.cl/conoce-nuestras-sedes",
    languages: {
      "x-default": "https://miniswimmer.cl/conoce-nuestras-sedes",
      es: "https://miniswimmer.cl/conoce-nuestras-sedes",
    },
  },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    url: "https://miniswimmer.cl/conoce-nuestras-sedes",
    title: "Conoce Nuestras Sedes — Miniswimmer",
    description:
      "Sedes en Santiago, Viña del Mar, Rancagua y Chillán. Consulta disponibilidad por WhatsApp.",
    images: [
      {
        url: "https://images.prismic.io/miniswimmerchile/aBuatCdWJ-7kRuIZ_SOCIAL-MEDIAv2.png?auto=format,compress",
        width: 1200,
        height: 630,
        alt: "Sedes Miniswimmer — Chile",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@miniswimmer_edu",
    title: "Conoce Nuestras Sedes — Miniswimmer",
    description:
      "Sedes en Santiago, Viña del Mar, Rancagua y Chillán. Consulta disponibilidad por WhatsApp.",
  },
};

const WHATSAPP_URL =
  "https://wa.me/56973447496?text=Hola!%20Quiero%20consultar%20disponibilidad%20y%20fechas%20de%20funcionamiento%20de%20las%20sedes";

type SedeType = "PREMIUM" | "REGULAR";

interface SedeCard {
  id: string;
  name: string;
  region: string;
  type: SedeType;
  temperature: string;
  programs: string[];
  groups: Array<{ label: string; days: string }>;
  yearRound: boolean;
}

const SEDES: SedeCard[] = [
  {
    id: "penalolen",
    name: "Peñalolén",
    region: "Santiago, Región Metropolitana",
    type: "PREMIUM",
    temperature: "30°C a 32°C",
    programs: ["Bebés desde 2 meses", "Niños 4–12+ años", "Big Swimmer (adultos)", "Neuro Swimmer"],
    groups: [
      { label: "Bebés (2–18 meses)", days: "Viernes, Sábados, Domingos" },
      { label: "Bebés (19m–3 años)", days: "Viernes, Sábados, Domingos" },
      { label: "Niños (4–6 años)", days: "Lunes, Viernes, Sábados, Domingos" },
      { label: "Niños (7+ años)", days: "Lunes, Sábados" },
      { label: "Big Swimmer (adultos)", days: "Sábados, Lunes" },
      { label: "Neuro Swimmer", days: "Consultar disponibilidad" },
    ],
    yearRound: true,
  },
  {
    id: "la-reina",
    name: "La Reina",
    region: "Santiago, Región Metropolitana",
    type: "PREMIUM",
    temperature: "32°C a 33°C",
    programs: ["Bebés desde 2 meses", "Niños 4–6 años"],
    groups: [
      { label: "Bebés (2–18 meses)", days: "Domingos" },
      { label: "Bebés (19m–3 años)", days: "Domingos" },
      { label: "Niños (4–6 años)", days: "Domingos" },
    ],
    yearRound: false,
  },
  {
    id: "nunoa",
    name: "Ñuñoa",
    region: "Santiago, Región Metropolitana",
    type: "PREMIUM",
    temperature: "32°C",
    programs: ["Bebés 2m–5 años", "Big Swimmer (adultos)", "Neuro Swimmer"],
    groups: [
      { label: "Bebés (2–18 meses)", days: "Jueves, Domingos" },
      { label: "Bebés (19m–43m)", days: "Jueves, Domingos" },
      { label: "Niños (3–5 años)", days: "Jueves, Domingos" },
      { label: "Big Swimmer (adultos)", days: "Domingos" },
      { label: "Neuro Swimmer", days: "Consultar disponibilidad" },
    ],
    yearRound: false,
  },
  {
    id: "vitacura",
    name: "Vitacura",
    region: "Santiago, Región Metropolitana",
    type: "REGULAR",
    temperature: "28°C a 29°C",
    programs: ["Bebés desde 2 meses", "Niños 4–6+ años"],
    groups: [
      { label: "Bebés (2–23 meses)", days: "Domingos, Martes" },
      { label: "Bebés (2–3 años)", days: "Domingos, Martes" },
      { label: "Niños (4–5 años)", days: "Domingos, Martes" },
      { label: "Niños (6+ años)", days: "Domingos" },
    ],
    yearRound: false,
  },
  {
    id: "vina-del-mar",
    name: "Viña del Mar",
    region: "Valparaíso, Región de Valparaíso",
    type: "REGULAR",
    temperature: "29°C a 31°C",
    programs: ["Bebés 0–3 años"],
    groups: [
      { label: "Bebés (0–2 años)", days: "Martes, Jueves" },
      { label: "Bebés (2–3 años)", days: "Martes, Jueves" },
    ],
    yearRound: false,
  },
  {
    id: "rancagua",
    name: "Rancagua",
    region: "Rancagua, Región de O'Higgins",
    type: "REGULAR",
    temperature: "30°C a 32°C",
    programs: ["Bebés desde 2 meses", "Niños 4–6+ años"],
    groups: [
      { label: "Bebés (2–18 meses)", days: "Sábados, Lunes" },
      { label: "Bebés (19m–3 años)", days: "Sábados, Lunes" },
      { label: "Niños (4–5 años)", days: "Sábados, Lunes" },
      { label: "Niños (6+ años)", days: "Sábados, Lunes" },
    ],
    yearRound: false,
  },
  {
    id: "chillan",
    name: "Chillán",
    region: "Chillán, Región de Biobío",
    type: "PREMIUM",
    temperature: "30°C a 32°C",
    programs: ["Bebés 2–36 meses", "Niños 3–6+ años"],
    groups: [
      { label: "Bebés (2–36 meses)", days: "Domingos" },
      { label: "Niños (3–5 años)", days: "Domingos" },
      { label: "Niños (6+ años)", days: "Domingos" },
    ],
    yearRound: false,
  },
];

const TYPE_STYLES: Record<SedeType, { badge: string; border: string }> = {
  PREMIUM: {
    badge: "bg-primary text-white",
    border: "border-primary/20",
  },
  REGULAR: {
    badge: "bg-dark text-white dark:bg-dark-2",
    border: "border-stroke dark:border-stroke-dark",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: "https://miniswimmer.cl" },
    { "@type": "ListItem", position: 2, name: "Conoce Nuestras Sedes", item: "https://miniswimmer.cl/conoce-nuestras-sedes" },
  ],
};

export default function ConoceNuestrasSedes() {
  const yearRoundCount = SEDES.filter((s) => s.yearRound).length;
  const seasonalCount = SEDES.length - yearRoundCount;

  return (
    <>
      <SchemaMarkup data={breadcrumbSchema} />

      {/* Hero */}
      <section className="bg-gray-1 py-16 dark:bg-dark lg:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 font-inter text-sm font-semibold text-primary">
              Nuestras Sedes
            </span>
            <h1 className="mb-4 font-satoshi text-heading-4 font-bold text-dark dark:text-white lg:text-heading-3">
              Estamos en Santiago, Valparaíso, Rancagua y Chillán
            </h1>
            <p className="font-inter text-base text-body dark:text-dark-4 lg:text-lg">
              {SEDES.length} sedes en Chile con piscina temperada, instructores
              certificados y el Método Miniswimmer. Clases para bebés desde los
              2 meses, niños y adultos.
            </p>

            {/* Stats */}
            <div className="mt-8 flex flex-wrap justify-center gap-8">
              {[
                { value: `${SEDES.length}`, label: "sedes en Chile" },
                { value: "4", label: "regiones" },
                { value: "32°C", label: "temperatura promedio" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="font-satoshi text-3xl font-bold text-primary">
                    {stat.value}
                  </p>
                  <p className="font-inter text-sm text-body dark:text-dark-4">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Seasonal notice banner */}
      <section className="border-y border-amber-200 bg-amber-50 py-4 dark:border-amber-900/30 dark:bg-amber-900/10">
        <div className="container">
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
            <div className="flex items-start gap-3">
              <span className="mt-0.5 text-2xl" aria-hidden="true">⚠️</span>
              <div>
                <p className="font-inter text-sm font-semibold text-amber-800 dark:text-amber-400">
                  No todas las sedes operan el año corrido
                </p>
                <p className="font-inter text-sm text-amber-700 dark:text-amber-500">
                  La disponibilidad varía según la temporada. Consulta fechas de
                  funcionamiento y cupos disponibles antes de inscribirte.
                </p>
              </div>
            </div>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-flex shrink-0 items-center gap-2 rounded-full bg-amber-700 px-5 py-2.5 font-inter text-sm font-semibold text-white transition-opacity hover:opacity-90 dark:bg-amber-600"
            >
              Consultar disponibilidad
            </a>
          </div>
        </div>
      </section>

      {/* Sedes grid */}
      <section className="py-16 lg:py-24">
        <div className="container">
          <div className="grid grid-cols-1 gap-7.5 md:grid-cols-2 xl:grid-cols-3">
            {SEDES.map((sede) => {
              const styles = TYPE_STYLES[sede.type];
              return (
                <div
                  key={sede.id}
                  className={`flex flex-col rounded-10 border bg-white shadow-features dark:bg-gray-dark ${styles.border}`}
                >
                  {/* Card header */}
                  <div className="p-6 pb-4">
                    <div className="mb-3 flex flex-wrap items-center gap-2">
                      <span
                        className={`inline-block rounded-full px-3 py-1 font-inter text-xs font-semibold uppercase tracking-wider ${styles.badge}`}
                      >
                        {sede.type}
                      </span>
                      <span className="rounded-full bg-orange-50 px-3 py-1 font-inter text-xs font-medium text-orange-600 dark:bg-orange-900/20 dark:text-orange-400">
                        🌡️ {sede.temperature}
                      </span>
                      {sede.yearRound ? (
                        <span className="rounded-full bg-green/10 px-3 py-1 font-inter text-xs font-semibold text-green">
                          ✓ Año corrido
                        </span>
                      ) : (
                        <span className="rounded-full bg-amber-50 px-3 py-1 font-inter text-xs font-semibold text-amber-700 dark:bg-amber-900/20 dark:text-amber-400">
                          Temporada variable
                        </span>
                      )}
                    </div>

                    <h2 className="mb-1 font-satoshi text-xl font-bold text-dark dark:text-white">
                      Sede {sede.name}
                    </h2>
                    <p className="mb-3 flex items-center gap-1.5 font-inter text-sm text-body dark:text-dark-4">
                      <svg
                        className="h-3.5 w-3.5 shrink-0 text-primary"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      {sede.region}
                    </p>

                    {/* Programs */}
                    <div className="flex flex-wrap gap-1.5">
                      {sede.programs.map((prog) => (
                        <span
                          key={prog}
                          className="rounded-full bg-gray-2 px-2.5 py-1 font-inter text-xs text-dark-3 dark:bg-dark dark:text-dark-4"
                        >
                          {prog}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="mx-6 h-px bg-stroke dark:bg-stroke-dark" />

                  {/* Schedule */}
                  <div className="flex-1 p-6 pt-4">
                    <p className="mb-3 font-inter text-xs font-semibold uppercase tracking-wider text-dark-3 dark:text-dark-4">
                      Grupos y días disponibles
                    </p>
                    <ul className="space-y-2">
                      {sede.groups.map((g) => (
                        <li
                          key={g.label}
                          className="flex flex-col gap-0.5 font-inter text-sm"
                        >
                          <span className="font-medium text-dark dark:text-white">
                            {g.label}
                          </span>
                          <span className="text-body dark:text-dark-4">
                            {g.days}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Card footer CTA */}
                  <div className="p-6 pt-0">
                    <a
                      href={`${WHATSAPP_URL}&sede=${sede.name}`}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="flex w-full items-center justify-center gap-2 rounded-full border border-primary py-2.5 font-inter text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-white"
                    >
                      Consultar disponibilidad
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Seasonal notice section */}
      <section className="bg-gray-1 py-12 dark:bg-dark">
        <div className="container">
          <div className="mx-auto max-w-3xl rounded-10 bg-white p-8 shadow-features dark:bg-gray-dark md:p-12">
            <div className="mb-6 flex items-start gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-amber-50 text-2xl dark:bg-amber-900/20">
                📅
              </span>
              <div>
                <h2 className="mb-2 font-satoshi text-2xl font-bold text-dark dark:text-white">
                  Disponibilidad según temporada
                </h2>
                <p className="font-inter text-body dark:text-dark-4">
                  Algunas sedes de Miniswimmer operan de manera continua durante
                  el año, mientras que otras funcionan en temporadas específicas
                  según la disponibilidad del recinto y la demanda.
                </p>
              </div>
            </div>

            <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="rounded-lg border border-stroke p-4 dark:border-stroke-dark">
                <p className="mb-1 font-inter text-xs font-semibold uppercase tracking-wider text-green">
                  ✓ Año corrido
                </p>
                <p className="font-inter text-sm text-dark dark:text-white">
                  Sede Peñalolén — operación continua todo el año.
                </p>
              </div>
              <div className="rounded-lg border border-amber-200 bg-amber-50/50 p-4 dark:border-amber-900/30 dark:bg-amber-900/10">
                <p className="mb-1 font-inter text-xs font-semibold uppercase tracking-wider text-amber-700 dark:text-amber-400">
                  ⚠️ Temporada variable
                </p>
                <p className="font-inter text-sm text-body dark:text-dark-4">
                  La Reina, Ñuñoa, Vitacura, Viña del Mar, Rancagua, Chillán y
                  Big Swimmer. Consulta fechas antes de inscribirte.
                </p>
              </div>
            </div>

            <p className="mb-6 font-inter text-sm text-body dark:text-dark-4">
              Para conocer las fechas exactas de apertura y cierre de cada sede,
              cupos disponibles y próximas temporadas, escríbenos directamente
              por WhatsApp. Te respondemos en minutos.
            </p>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-flex items-center gap-3 rounded-full bg-primary px-8 py-3.5 font-inter font-semibold text-white transition-opacity hover:opacity-90"
            >
              <svg
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M2 22L3.41152 16.8691C2.54422 15.3639 2.08876 13.6568 2.09099 11.9196C2.08095 6.44549 6.52644 2 11.99 2C14.6417 2 17.1315 3.02806 19.0062 4.9034C20.9034 6.80052 22 9.30977 22 11.9196C22 17.3832 17.4641 21.8287 12 21.8287C10.3368 21.8287 8.71374 21.4151 7.26204 20.6192L2 22Z" />
              </svg>
              Consultar fechas y disponibilidad
            </a>
          </div>
        </div>
      </section>

      {/* Bottom links */}
      <section className="py-12">
        <div className="container">
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/precios-y-valores-de-nuestros-servicios"
              className="rounded-full border border-primary px-8 py-3 font-inter font-semibold text-primary transition-colors hover:bg-primary hover:text-white"
            >
              Ver precios por sede
            </Link>
            <Link
              href="/contacto"
              className="rounded-full bg-primary px-8 py-3 font-inter font-semibold text-white transition-opacity hover:opacity-90"
            >
              Contactar al equipo
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
