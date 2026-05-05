import { Metadata } from "next";
import Link from "next/link";
import SchemaMarkup from "@/components/Common/SchemaMarkup";
import GiveawayForm from "@/components/ExpoBebe/GiveawayForm";

// ---------------------------------------------------------------------------
// Metadata
// ---------------------------------------------------------------------------

export const metadata: Metadata = {
  title:
    "Miniswimmer en ExpoBebé 2026 | 29–31 Mayo, Santiago — Visítanos en la Feria",
  description:
    "Miniswimmer estará en ExpoBebé 2026, la mayor feria de maternidad y bebés de Chile. 29 al 31 de mayo, Metropolitan Santiago, Vitacura. Gana entradas gratis con nuestro sorteo.",
  alternates: {
    canonical: "https://miniswimmer.cl/expo-bebe-2026",
    languages: {
      "x-default": "https://miniswimmer.cl/expo-bebe-2026",
      es: "https://miniswimmer.cl/expo-bebe-2026",
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    type: "website",
    url: "https://miniswimmer.cl/expo-bebe-2026",
    title:
      "Miniswimmer en ExpoBebé 2026 | 29–31 Mayo, Santiago — Visítanos en la Feria",
    description:
      "Miniswimmer estará en ExpoBebé 2026, la mayor feria de maternidad y bebés de Chile. 29 al 31 de mayo, Metropolitan Santiago, Vitacura. Gana entradas gratis con nuestro sorteo.",
    images: [
      {
        url: "https://images.prismic.io/miniswimmerchile/aBuatCdWJ-7kRuIZ_SOCIAL-MEDIAv2.png?auto=format,compress",
        width: 1200,
        height: 630,
        alt: "Miniswimmer en ExpoBebé 2026 — Feria de Maternidad y Bebés",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@miniswimmer_edu",
    creator: "@miniswimmer_edu",
    title:
      "Miniswimmer en ExpoBebé 2026 | 29–31 Mayo, Santiago — Visítanos en la Feria",
    description:
      "Miniswimmer estará en ExpoBebé 2026, la mayor feria de maternidad y bebés de Chile. 29 al 31 de mayo, Metropolitan Santiago, Vitacura. Gana entradas gratis con nuestro sorteo.",
    images: [
      {
        url: "https://images.prismic.io/miniswimmerchile/aBuatCdWJ-7kRuIZ_SOCIAL-MEDIAv2.png?auto=format,compress",
        width: 1200,
        height: 630,
        alt: "Miniswimmer en ExpoBebé 2026",
      },
    ],
  },
};

// ---------------------------------------------------------------------------
// Schema data
// ---------------------------------------------------------------------------

const eventSchema = {
  "@context": "https://schema.org",
  "@type": "Event",
  name: "ExpoBebé 2026 — Miniswimmer",
  startDate: "2026-05-29T10:30:00-04:00",
  endDate: "2026-05-31T20:00:00-04:00",
  eventStatus: "https://schema.org/EventScheduled",
  eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
  location: {
    "@type": "Place",
    name: "Metropolitan Santiago",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Av. San Josemaría Escrivá de Balaguer 5600",
      addressLocality: "Vitacura",
      addressRegion: "Región Metropolitana",
      addressCountry: "CL",
    },
  },
  organizer: {
    "@type": "Organization",
    name: "Interexpo",
    url: "https://expobebe.cl",
  },
  performer: {
    "@type": "Organization",
    name: "Miniswimmer",
    url: "https://miniswimmer.cl",
  },
  description:
    "ExpoBebé 2026 — 30ª edición, Feria Internacional. Más de 200 marcas, 15.000+ visitantes. Miniswimmer participa con stand, demostraciones y sorteo de entradas.",
  url: "https://miniswimmer.cl/expo-bebe-2026",
  image:
    "https://images.prismic.io/miniswimmerchile/aBuatCdWJ-7kRuIZ_SOCIAL-MEDIAv2.png?auto=format,compress",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Cuándo es ExpoBebé 2026?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Del 29 al 31 de mayo de 2026 en Metropolitan Santiago, Vitacura. Horarios: viernes 10:30–20:00, sábado y domingo 10:00–20:00.",
      },
    },
    {
      "@type": "Question",
      name: "¿Dónde es ExpoBebé 2026?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "En el Centro de Convenciones Metropolitan Santiago, Av. San Josemaría Escrivá de Balaguer 5600, Vitacura, Santiago.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuánto cuesta la entrada?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Las entradas se adquieren exclusivamente en Ticketmaster. Los niños hasta 12 años entran gratis. Los adultos mayores de 65 tienen descuento especial.",
      },
    },
    {
      "@type": "Question",
      name: "¿Dónde está el stand de Miniswimmer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Visítanos en nuestro stand dentro de ExpoBebé 2026. Búscanos por el nombre Miniswimmer — nuestro equipo estará para guiarte.",
      },
    },
    {
      "@type": "Question",
      name: "¿Se puede entrar con coche de bebé?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí. El recinto Metropolitan Santiago está habilitado para coches de bebé, portabebés y personas con movilidad reducida.",
      },
    },
    {
      "@type": "Question",
      name: "¿Hay zona de lactancia?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí, ExpoBebé cuenta con zonas privadas y equipadas para lactancia y cambio de pañales.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué encontraré en el stand de Miniswimmer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Podrás conocer nuestros programas de matronatación, hablar con nuestros coaches certificados, participar en el sorteo de entradas y aprovechar ofertas exclusivas solo disponibles durante la feria.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cómo participo en el sorteo de entradas?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Llena el formulario en esta página, sigue a @miniswimmer.chile en Instagram y publica una historia o post etiquetándonos y contando por qué mereces ganar la entrada.",
      },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Inicio",
      item: "https://miniswimmer.cl",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "ExpoBebé 2026",
      item: "https://miniswimmer.cl/expo-bebe-2026",
    },
  ],
};

// ---------------------------------------------------------------------------
// FAQ data
// ---------------------------------------------------------------------------

const faqItems = [
  {
    question: "¿Cuándo es ExpoBebé 2026?",
    answer:
      "Del 29 al 31 de mayo de 2026 en Metropolitan Santiago, Vitacura. Horarios: viernes 10:30–20:00, sábado y domingo 10:00–20:00.",
  },
  {
    question: "¿Dónde es ExpoBebé 2026?",
    answer:
      "En el Centro de Convenciones Metropolitan Santiago, Av. San Josemaría Escrivá de Balaguer 5600, Vitacura, Santiago.",
  },
  {
    question: "¿Cuánto cuesta la entrada?",
    answer:
      "Las entradas se adquieren exclusivamente en Ticketmaster. Los niños hasta 12 años entran gratis. Los adultos mayores de 65 tienen descuento especial.",
  },
  {
    question: "¿Dónde está el stand de Miniswimmer?",
    answer:
      "Visítanos en nuestro stand dentro de ExpoBebé 2026. Búscanos por el nombre Miniswimmer — nuestro equipo estará para guiarte.",
  },
  {
    question: "¿Se puede entrar con coche de bebé?",
    answer:
      "Sí. El recinto Metropolitan Santiago está habilitado para coches de bebé, portabebés y personas con movilidad reducida.",
  },
  {
    question: "¿Hay zona de lactancia?",
    answer:
      "Sí, ExpoBebé cuenta con zonas privadas y equipadas para lactancia y cambio de pañales.",
  },
  {
    question: "¿Qué encontraré en el stand de Miniswimmer?",
    answer:
      "Podrás conocer nuestros programas de matronatación, hablar con nuestros coaches certificados, participar en el sorteo de entradas y aprovechar ofertas exclusivas solo disponibles durante la feria.",
  },
  {
    question: "¿Cómo participo en el sorteo de entradas?",
    answer:
      "Llena el formulario en esta página, sigue a @miniswimmer.chile en Instagram y publica una historia o post etiquetándonos y contando por qué mereces ganar la entrada.",
  },
];

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

export default function ExpoBebe2026Page() {
  return (
    <>
      <SchemaMarkup data={eventSchema} />
      <SchemaMarkup data={faqSchema} />
      <SchemaMarkup data={breadcrumbSchema} />

      <main>
        {/* ================================================================
            HERO SECTION
        ================================================================ */}
        <section className="relative z-1 overflow-hidden bg-gradient-to-br from-primary to-dark pb-0 pt-30 lg:pt-30 xl:pt-[170px]">
          <div className="mx-auto w-full max-w-[1170px] px-4 sm:px-8 xl:px-0">
            <div className="flex flex-col items-center text-center">
              {/* Badge */}
              <span className="mb-6 inline-block rounded-full border border-white/30 bg-white/10 px-5 py-1.5 font-inter text-sm font-semibold text-white backdrop-blur-sm">
                30ª Edición • Feria Internacional
              </span>

              {/* H1 */}
              <h1 className="mb-5 font-satoshi text-heading-4 font-bold -tracking-[1.6px] text-white lg:text-heading-2 xl:text-[58px] xl:leading-[1.12]">
                Miniswimmer en ExpoBebé 2026
              </h1>

              {/* Subtitle */}
              <p className="mx-auto mb-8 w-full max-w-[620px] font-inter text-lg text-slate-100">
                Visítanos del 29 al 31 de mayo en Metropolitan Santiago,
                Vitacura. La feria de maternidad y bebés más grande de Chile.
              </p>

              {/* CTAs */}
              <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <a
                  href="#sorteo"
                  className="inline-flex items-center rounded-full border-2 border-white px-8 py-3 font-inter font-semibold text-white transition-colors hover:bg-white hover:text-primary focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary"
                >
                  Ver el sorteo
                </a>
                <Link
                  href="/matronatacion"
                  className="inline-flex items-center rounded-full bg-white px-8 py-3 font-inter font-semibold text-primary transition-colors hover:bg-white/90 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary"
                >
                  Nuestros programas
                </Link>
              </div>

              {/* Key facts strip */}
              <div className="mt-14 w-full border-t border-white/20 py-6">
                <div className="flex flex-col items-center justify-center gap-6 sm:flex-row sm:gap-12">
                  <div className="flex items-center gap-2 font-inter text-sm font-semibold text-white">
                    <span aria-hidden="true">📅</span>
                    <span>29–31 Mayo 2026</span>
                  </div>
                  <div className="hidden h-4 w-px bg-white/30 sm:block" />
                  <div className="flex items-center gap-2 font-inter text-sm font-semibold text-white">
                    <span aria-hidden="true">📍</span>
                    <span>Metropolitan Santiago, Vitacura</span>
                  </div>
                  <div className="hidden h-4 w-px bg-white/30 sm:block" />
                  <div className="flex items-center gap-2 font-inter text-sm font-semibold text-white">
                    <span aria-hidden="true">🎟️</span>
                    <span>Entradas: Ticketmaster</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================================================================
            ABOUT EXPOBEBE SECTION
        ================================================================ */}
        <section className="bg-gray-1 py-17.5 dark:bg-black lg:py-22.5">
          <div className="mx-auto w-full max-w-[1170px] px-4 sm:px-8 xl:px-0">
            <div className="mb-12 text-center">
              <h2 className="mb-4 font-satoshi text-3xl font-bold -tracking-[1.6px] text-dark dark:text-white lg:text-heading-4">
                ¿Qué es ExpoBebé 2026?
              </h2>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {/* Card 1 */}
              <div className="rounded-10 bg-white p-8 shadow-features dark:bg-gray-dark">
                <div className="mb-4 text-4xl" aria-hidden="true">
                  🏆
                </div>
                <h3 className="mb-3 font-satoshi text-xl font-bold text-dark dark:text-white">
                  30 años de historia
                </h3>
                <p className="font-inter text-body dark:text-dark-4">
                  Desde 1996, la feria más importante de maternidad y bebés de
                  Chile y Latinoamérica. Esta edición celebra su 30ª aniversario
                  con estatus de Feria Internacional (Decreto 366, Ministerio de
                  Hacienda, dic 2025).
                </p>
              </div>

              {/* Card 2 */}
              <div className="rounded-10 bg-white p-8 shadow-features dark:bg-gray-dark">
                <div className="mb-4 text-4xl" aria-hidden="true">
                  👶
                </div>
                <h3 className="mb-3 font-satoshi text-xl font-bold text-dark dark:text-white">
                  +200 marcas y 15.000 visitantes
                </h3>
                <p className="font-inter text-body dark:text-dark-4">
                  Productos para bebés, puericultura, nutrición, lactancia,
                  salud, educación, tecnología y mucho más bajo un mismo techo.
                </p>
              </div>

              {/* Card 3 */}
              <div className="rounded-10 bg-white p-8 shadow-features dark:bg-gray-dark sm:col-span-2 lg:col-span-1">
                <div className="mb-4 text-4xl" aria-hidden="true">
                  🎁
                </div>
                <h3 className="mb-3 font-satoshi text-xl font-bold text-dark dark:text-white">
                  Niños hasta 12: Gratis
                </h3>
                <p className="font-inter text-body dark:text-dark-4">
                  Los niños hasta 12 años entran sin costo. Entradas solo en
                  Ticketmaster.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ================================================================
            DATES & LOCATION SECTION
        ================================================================ */}
        <section className="py-17.5 dark:bg-black lg:py-22.5">
          <div className="mx-auto w-full max-w-[1170px] px-4 sm:px-8 xl:px-0">
            <div className="mb-12 text-center">
              <h2 className="mb-4 font-satoshi text-3xl font-bold -tracking-[1.6px] text-dark dark:text-white lg:text-heading-4">
                Fechas, Horarios y Ubicación
              </h2>
            </div>

            <div className="grid gap-8 lg:grid-cols-2">
              {/* Timeline */}
              <div>
                <h3 className="mb-6 font-satoshi text-xl font-bold text-dark dark:text-white">
                  Horarios
                </h3>
                <ol className="relative border-l-2 border-primary/30 pl-6">
                  <li className="mb-8">
                    <span className="absolute -left-[9px] flex h-4 w-4 items-center justify-center rounded-full bg-primary ring-4 ring-white dark:ring-gray-dark" />
                    <h4 className="font-satoshi text-lg font-bold text-dark dark:text-white">
                      Viernes 29 mayo
                    </h4>
                    <time
                      dateTime="2026-05-29T10:30"
                      className="font-inter text-body dark:text-dark-4"
                    >
                      10:30 – 20:00
                    </time>
                  </li>
                  <li className="mb-8">
                    <span className="absolute -left-[9px] flex h-4 w-4 items-center justify-center rounded-full bg-primary ring-4 ring-white dark:ring-gray-dark" />
                    <h4 className="font-satoshi text-lg font-bold text-dark dark:text-white">
                      Sábado 30 mayo
                    </h4>
                    <time
                      dateTime="2026-05-30T10:00"
                      className="font-inter text-body dark:text-dark-4"
                    >
                      10:00 – 20:00
                    </time>
                  </li>
                  <li>
                    <span className="absolute -left-[9px] flex h-4 w-4 items-center justify-center rounded-full bg-primary ring-4 ring-white dark:ring-gray-dark" />
                    <h4 className="font-satoshi text-lg font-bold text-dark dark:text-white">
                      Domingo 31 mayo
                    </h4>
                    <time
                      dateTime="2026-05-31T10:00"
                      className="font-inter text-body dark:text-dark-4"
                    >
                      10:00 – 20:00
                    </time>
                  </li>
                </ol>
              </div>

              {/* Location card */}
              <div className="rounded-10 bg-white p-8 shadow-features dark:bg-gray-dark">
                <h3 className="mb-4 font-satoshi text-xl font-bold text-dark dark:text-white">
                  Ubicación
                </h3>
                <div className="mb-4 flex items-start gap-3">
                  <span className="mt-0.5 text-xl" aria-hidden="true">
                    📍
                  </span>
                  <div>
                    <p className="font-satoshi font-bold text-dark dark:text-white">
                      Centro de Convenciones Metropolitan Santiago
                    </p>
                    <p className="font-inter text-body dark:text-dark-4">
                      Av. San Josemaría Escrivá de Balaguer 5600, Vitacura,
                      Santiago
                    </p>
                  </div>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 font-inter text-sm text-body dark:text-dark-4">
                    <span aria-hidden="true">🌡️</span>
                    <span>Recinto cubierto y temperado</span>
                  </li>
                  <li className="flex items-center gap-2 font-inter text-sm text-body dark:text-dark-4">
                    <span aria-hidden="true">♿</span>
                    <span>Acceso universal</span>
                  </li>
                  <li className="flex items-center gap-2 font-inter text-sm text-body dark:text-dark-4">
                    <span aria-hidden="true">🚗</span>
                    <span>Estacionamiento disponible</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ================================================================
            MINISWIMMER AT EXPOBEBE SECTION
        ================================================================ */}
        <section className="bg-gray-1 py-17.5 dark:bg-black lg:py-22.5">
          <div className="mx-auto w-full max-w-[1170px] px-4 sm:px-8 xl:px-0">
            <div className="mb-12 text-center">
              <h2 className="mb-4 font-satoshi text-3xl font-bold -tracking-[1.6px] text-dark dark:text-white lg:text-heading-4">
                Miniswimmer en ExpoBebé
              </h2>
            </div>

            <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
              {/* Left: description */}
              <div>
                <p className="mb-5 font-inter text-lg text-body dark:text-dark-4">
                  En ExpoBebé 2026 encontrarás nuestro stand con todo lo que
                  necesitas saber sobre{" "}
                  <Link
                    href="/matronatacion"
                    className="font-semibold text-primary underline underline-offset-2 hover:text-primary/80"
                  >
                    matronatación
                  </Link>{" "}
                  — clases diseñadas para bebés desde los 2 meses de vida.
                  Nuestros coaches certificados en PNL y desarrollo infantil
                  estarán ahí para resolver todas tus dudas y mostrarte el
                  Método Miniswimmer en acción.
                </p>
                <p className="mb-5 font-inter text-lg text-body dark:text-dark-4">
                  Si tienes un bebé con necesidades especiales o
                  neurodivergencia, conoce también nuestro programa{" "}
                  <Link
                    href="/neuro-swimmer"
                    className="font-semibold text-primary underline underline-offset-2 hover:text-primary/80"
                  >
                    Neuro Swimmer
                  </Link>
                  , diseñado para acompañar a cada niño a su propio ritmo dentro
                  del agua.
                </p>
                <p className="mb-6 font-inter text-lg text-body dark:text-dark-4">
                  Además, durante la feria tendremos ofertas exclusivas que no
                  estarán disponibles en ningún otro canal. Es tu mejor
                  oportunidad para inscribirte y comenzar esta aventura acuática
                  con tu bebé.
                </p>
                <Link
                  href="/contacto"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3 font-inter font-semibold text-white transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                >
                  Agenda una conversación
                  <span aria-hidden="true">→</span>
                </Link>
              </div>

              {/* Right: checklist */}
              <div className="rounded-10 bg-white p-8 shadow-features dark:bg-gray-dark">
                <h3 className="mb-6 font-satoshi text-xl font-bold text-dark dark:text-white">
                  Lo que encontrarás en nuestro stand
                </h3>
                <ul className="space-y-4">
                  {[
                    "Información sobre matronatación desde los 2 meses",
                    "Coaches certificados en PNL y desarrollo infantil",
                    "Demo y prueba de nuestro método único",
                    "Ofertas exclusivas solo disponibles en la feria",
                    "Participación en el sorteo de entradas (ver abajo)",
                    "Atención personalizada para tu bebé",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span
                        className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary"
                        aria-hidden="true"
                      >
                        <svg
                          width="12"
                          height="10"
                          viewBox="0 0 12 10"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1 5L4.5 8.5L11 1.5"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                      <span className="font-inter text-body dark:text-dark-4">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ================================================================
            GIVEAWAY SECTION
        ================================================================ */}
        <section
          id="sorteo"
          className="bg-primary/5 py-17.5 dark:bg-black lg:py-22.5"
        >
          <div className="mx-auto w-full max-w-[1170px] px-4 sm:px-8 xl:px-0">
            {/* Header */}
            <div className="mb-12 text-center">
              <h2 className="mb-4 font-satoshi text-3xl font-bold -tracking-[1.6px] text-dark dark:text-white lg:text-heading-4">
                Gana 2 Entradas para ExpoBebé 2026
              </h2>
              <p className="mx-auto w-full max-w-[540px] font-inter text-lg text-body dark:text-dark-4">
                Sortearemos 2 entradas dobles para que puedas vivir ExpoBebé
                2026 con tu familia. ¡Completamente gratis!
              </p>
            </div>

            {/* Steps */}
            <div className="mb-12 grid gap-6 sm:grid-cols-3">
              {[
                {
                  number: "1",
                  title: "Llena el formulario",
                  description: "Completa tus datos en el formulario de abajo",
                },
                {
                  number: "2",
                  title: "Síguenos en Instagram",
                  description: (
                    <>
                      Sigue a{" "}
                      <a
                        href="https://www.instagram.com/miniswimmer.chile/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold text-primary underline underline-offset-2 hover:text-primary/80"
                      >
                        @miniswimmer.chile
                      </a>{" "}
                      en Instagram
                    </>
                  ),
                },
                {
                  number: "3",
                  title: "Etiquétanos",
                  description:
                    "Publica en tu historia o feed, etiqueta a @miniswimmer.chile y cuéntanos en el caption por qué mereces ganar la entrada a ExpoBebé 2026",
                },
              ].map(({ number, title, description }) => (
                <div
                  key={number}
                  className="rounded-10 bg-white p-8 shadow-features dark:bg-gray-dark"
                >
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary font-satoshi text-lg font-bold text-white">
                    {number}
                  </div>
                  <h3 className="mb-2 font-satoshi text-lg font-bold text-dark dark:text-white">
                    {title}
                  </h3>
                  <p className="font-inter text-body dark:text-dark-4">
                    {description}
                  </p>
                </div>
              ))}
            </div>

            {/* Form */}
            <div className="mx-auto w-full max-w-[600px]">
              <GiveawayForm />
            </div>
          </div>
        </section>

        {/* ================================================================
            FAQ SECTION
        ================================================================ */}
        <section className="py-17.5 dark:bg-black lg:py-22.5">
          <div className="mx-auto w-full max-w-[1170px] px-4 sm:px-8 xl:px-0">
            <div className="mb-12 text-center">
              <h2 className="mb-4 font-satoshi text-3xl font-bold -tracking-[1.6px] text-dark dark:text-white lg:text-heading-4">
                Preguntas Frecuentes
              </h2>
            </div>

            <div className="mx-auto w-full max-w-[762px]">
              <div className="flex flex-col gap-4">
                {faqItems.map(({ question, answer }) => (
                  <details
                    key={question}
                    className="group rounded-10 border border-stroke p-5 dark:border-stroke-dark"
                  >
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-satoshi text-lg font-bold text-dark dark:text-white [&::-webkit-details-marker]:hidden">
                      {question}
                      <span
                        className="flex-shrink-0 transition-transform duration-300 group-open:rotate-180"
                        aria-hidden="true"
                      >
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 25"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M4.43057 8.87618C4.70014 8.56168 5.17361 8.52526 5.48811 8.79483L12 14.3765L18.5119 8.79483C18.8264 8.52526 19.2999 8.56168 19.5695 8.87618C19.839 9.19067 19.8026 9.66415 19.4881 9.93371L12.4881 15.9337C12.2072 16.1745 11.7928 16.1745 11.5119 15.9337L4.51192 9.93371C4.19743 9.66415 4.161 9.19067 4.43057 8.87618Z"
                            fill="currentColor"
                          />
                        </svg>
                      </span>
                    </summary>
                    <p className="mt-4 border-t border-stroke pt-4 font-inter text-body dark:border-stroke-dark dark:text-dark-4">
                      {answer}
                    </p>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ================================================================
            BOTTOM CTA SECTION
        ================================================================ */}
        <section className="relative z-1 overflow-hidden bg-primary py-17.5 lg:py-22.5 xl:py-25">
          <div className="mx-auto w-full max-w-[585px] px-4 text-center sm:px-8 xl:px-0">
            <h2 className="mb-5 font-satoshi text-3xl font-bold -tracking-[1.6px] text-white lg:text-heading-4">
              ¿Aún no conoces el método Miniswimmer?
            </h2>
            <p className="mb-7.5 font-inter text-gray-2">
              Descubre cómo transformamos la relación de tu bebé con el agua.
            </p>
            <Link
              href="/matronatacion"
              className="inline-flex items-center rounded-full bg-white px-8 py-3 font-inter font-semibold -tracking-[0.2px] text-primary transition-colors hover:bg-white/90 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary"
            >
              Conocer la matronatación
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
