import Link from "next/link";

type Sede = {
  commune: string;
  slug: string;
  href: string;
  region: string;
  nearby: string[];
  temp: string;
  emoji: string;
};

const SEDES: Sede[] = [
  {
    commune: "Peñalolén",
    slug: "penalolen",
    href: "/clases-natacion-penalolen",
    region: "Santiago · Región Metropolitana",
    nearby: ["La Florida", "Macul", "Ñuñoa"],
    temp: "30–32°C",
    emoji: "🏊",
  },
  {
    commune: "La Reina",
    slug: "la-reina",
    href: "/clases-natacion-penalolen",
    region: "Santiago · Región Metropolitana",
    nearby: ["Peñalolén", "Vitacura", "Lo Barnechea"],
    temp: "32–33°C",
    emoji: "🏊",
  },
  {
    commune: "Ñuñoa",
    slug: "nunoa",
    href: "/clases-natacion-penalolen",
    region: "Santiago · Región Metropolitana",
    nearby: ["Macul", "San Joaquín", "La Florida"],
    temp: "32°C",
    emoji: "🏊",
  },
  {
    commune: "Vitacura",
    slug: "vitacura",
    href: "/clases-natacion-penalolen",
    region: "Santiago · Región Metropolitana",
    nearby: ["Lo Barnechea", "Las Condes", "La Reina"],
    temp: "28–31°C",
    emoji: "🏊",
  },
  {
    commune: "La Florida",
    slug: "la-florida",
    href: "/clases-natacion-penalolen",
    region: "Santiago · Región Metropolitana",
    nearby: ["Macul", "Peñalolén", "San Joaquín"],
    temp: "30–32°C",
    emoji: "🏊",
  },
  {
    commune: "Macul",
    slug: "macul",
    href: "/clases-natacion-penalolen",
    region: "Santiago · Región Metropolitana",
    nearby: ["Ñuñoa", "La Florida", "Peñalolén"],
    temp: "30–32°C",
    emoji: "🏊",
  },
  {
    commune: "Lo Barnechea",
    slug: "lo-barnechea",
    href: "/clases-natacion-penalolen",
    region: "Santiago · Región Metropolitana",
    nearby: ["Vitacura", "Las Condes"],
    temp: "28–31°C",
    emoji: "🏊",
  },
  {
    commune: "San Joaquín",
    slug: "san-joaquin",
    href: "/clases-natacion-penalolen",
    region: "Santiago · Región Metropolitana",
    nearby: ["Macul", "Ñuñoa", "La Florida"],
    temp: "30–32°C",
    emoji: "🏊",
  },
  {
    commune: "Viña del Mar",
    slug: "vina-del-mar",
    href: "/clases-natacion-vina-del-mar",
    region: "Región de Valparaíso",
    nearby: ["Concón", "Reñaca", "Quilpué"],
    temp: "30–32°C",
    emoji: "🌊",
  },
  {
    commune: "Concón",
    slug: "con-con",
    href: "/clases-natacion-vina-del-mar",
    region: "Región de Valparaíso",
    nearby: ["Viña del Mar", "Valparaíso"],
    temp: "30–32°C",
    emoji: "🌊",
  },
  {
    commune: "Valparaíso",
    slug: "valparaiso",
    href: "/clases-natacion-vina-del-mar",
    region: "Región de Valparaíso",
    nearby: ["Viña del Mar", "Concón"],
    temp: "30–32°C",
    emoji: "🌊",
  },
  {
    commune: "Rancagua",
    slug: "rancagua",
    href: "/conoce-nuestras-sedes",
    region: "Región de O'Higgins",
    nearby: [],
    temp: "30–32°C",
    emoji: "🏊",
  },
  {
    commune: "Chillán",
    slug: "chillan",
    href: "/conoce-nuestras-sedes",
    region: "Región de Ñuble",
    nearby: [],
    temp: "30–32°C",
    emoji: "🏊",
  },
];

export default function LocalSeoSection() {
  return (
    <section
      aria-label="Matronatación en tu ciudad"
      className="bg-gray-1 py-16 dark:bg-dark lg:py-20"
    >
      <div className="mx-auto w-full max-w-[1170px] px-4 sm:px-8 xl:px-0">
        {/* Header */}
        <div className="mb-10 text-center">
          <span className="mb-3 inline-block rounded-full bg-primary/10 px-4 py-1.5 font-inter text-sm font-semibold text-primary">
            Cobertura Nacional
          </span>
          <h2 className="mb-4 font-satoshi text-3xl font-bold -tracking-[1.2px] text-dark dark:text-white lg:text-heading-4">
            Matronatación en tu ciudad
          </h2>
          <p className="mx-auto max-w-[680px] font-inter text-base text-body dark:text-dark-4">
            Ofrecemos{" "}
            <strong className="font-semibold text-dark dark:text-white">
              clases de matronatación para bebés desde 2 meses
            </strong>{" "}
            en Santiago, Valparaíso, Rancagua y Chillán. Piscinas temperadas
            entre 28 y 33°C con coaches certificados en todas las sedes.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {SEDES.map((sede) => (
            <Link
              key={sede.slug}
              href={sede.href}
              className="group flex flex-col rounded-xl border border-stroke bg-white p-5 transition-all duration-200 hover:border-primary hover:shadow-features dark:border-stroke-dark dark:bg-gray-dark dark:hover:border-primary"
            >
              <div className="mb-3 flex items-start justify-between gap-2">
                <div>
                  <p className="font-satoshi text-lg font-bold text-dark group-hover:text-primary dark:text-white dark:group-hover:text-primary">
                    Matronatación {sede.commune}
                  </p>
                  <p className="font-inter text-xs text-body dark:text-dark-4">
                    {sede.region}
                  </p>
                </div>
                <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10 text-xl">
                  {sede.emoji}
                </span>
              </div>

              <div className="mb-3 flex items-center gap-1.5">
                <span className="inline-block h-2 w-2 flex-shrink-0 rounded-full bg-green-500" />
                <span className="font-inter text-xs font-medium text-green-700 dark:text-green-400">
                  Agua temperada {sede.temp}
                </span>
              </div>

              {sede.nearby.length > 0 && (
                <p className="font-inter text-xs text-body dark:text-dark-4">
                  También cerca de:{" "}
                  <span className="text-dark-3 dark:text-dark-4">
                    {sede.nearby.join(", ")}
                  </span>
                </p>
              )}

              <div className="mt-auto pt-3">
                <span className="inline-flex items-center gap-1 font-inter text-xs font-semibold text-primary">
                  Ver clases
                  <svg
                    className="h-3 w-3 transition-transform group-hover:translate-x-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 text-center">
          <Link
            href="/conoce-nuestras-sedes"
            className="inline-flex items-center gap-2 rounded-full border border-primary px-6 py-2.5 font-inter text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-white focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            Ver todas las sedes
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
