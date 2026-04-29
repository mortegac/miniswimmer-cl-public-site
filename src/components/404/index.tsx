import Link from "next/link";
import FooterWrapper from "@/components/Footer/FooterWrapper";
import { HeaderWrapper } from "@/components/Header/HeaderWrapper";

const NotFound = () => {
  return (
    <>
      <HeaderWrapper />
      <main className="flex min-h-screen flex-col items-center justify-center bg-gray-1 px-4 py-24 dark:bg-dark">
        <div className="mx-auto w-full max-w-lg text-center">
          {/* SVG: Ocean wave with confused fish */}
          <div className="mb-8 flex justify-center">
            <svg
              viewBox="0 0 200 160"
              width="220"
              height="176"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              {/* Ocean background fill */}
              <ellipse cx="100" cy="130" rx="90" ry="22" fill="#AE5EAB1A" />

              {/* Wave layer 1 */}
              <path
                d="M10 110 Q35 90 60 110 Q85 130 110 110 Q135 90 160 110 Q175 120 190 110"
                fill="none"
                stroke="#AE5EAB"
                strokeWidth="4"
                strokeLinecap="round"
              />

              {/* Wave layer 2 (offset) */}
              <path
                d="M10 125 Q40 108 65 125 Q90 142 115 125 Q140 108 165 125 Q178 132 190 125"
                fill="none"
                stroke="#AE5EAB"
                strokeWidth="3"
                strokeLinecap="round"
                opacity="0.5"
              />

              {/* Fish body */}
              <ellipse cx="100" cy="72" rx="28" ry="16" fill="#AE5EAB" />

              {/* Fish tail */}
              <polygon points="128,72 148,58 148,86" fill="#AE5EAB" />

              {/* Fish belly highlight */}
              <ellipse cx="96" cy="76" rx="18" ry="8" fill="#AE5EAB1A" />

              {/* Fish eye */}
              <circle cx="80" cy="67" r="5" fill="#FFFFFF" />
              <circle cx="79" cy="67" r="2.5" fill="#1C274C" />

              {/* Confused swirl above fish */}
              <path
                d="M68 48 Q72 38 80 42 Q88 46 82 54"
                fill="none"
                stroke="#1C274C"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              <circle cx="82" cy="56" r="2" fill="#1C274C" />

              {/* Question mark */}
              <text
                x="105"
                y="50"
                fontFamily="sans-serif"
                fontSize="20"
                fontWeight="bold"
                fill="#AE5EAB"
              >
                ?
              </text>
            </svg>
          </div>

          {/* Error code */}
          <p className="mb-2 font-satoshi text-8xl font-bold text-primary">
            404
          </p>

          {/* Title */}
          <h1 className="mb-3 font-satoshi text-heading-4 font-bold text-dark dark:text-white">
            ¡Página no encontrada!
          </h1>

          {/* Subtitle */}
          <p className="mb-8 font-inter text-body dark:text-dark-4">
            La página que buscas no existe o fue movida. Pero no te preocupes,
            ¡no te hundas!
          </p>

          {/* Primary action buttons */}
          <div className="mb-10 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center gap-2 rounded-full border border-stroke bg-white px-8 py-3 font-inter font-semibold text-dark duration-200 hover:bg-gray dark:border-stroke-dark dark:bg-gray-dark dark:text-white dark:hover:bg-dark-2"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M7.354 2.646a.5.5 0 0 1 0 .708L3.707 7H13.5a.5.5 0 0 1 0 1H3.707l3.647 3.646a.5.5 0 0 1-.708.708l-4.5-4.5a.5.5 0 0 1 0-.708l4.5-4.5a.5.5 0 0 1 .708 0z"
                  fill="currentColor"
                />
              </svg>
              Volver
            </button>

            <Link
              href="/"
              className="inline-flex rounded-full bg-primary px-8 py-3 font-inter font-semibold text-white duration-200 hover:bg-primary-dark"
            >
              Ir al inicio
            </Link>
          </div>

          {/* Quick links */}
          <div className="border-t border-stroke pt-8 dark:border-stroke-dark">
            <p className="mb-4 font-inter text-sm font-semibold uppercase tracking-widest text-dark-4">
              Páginas útiles
            </p>
            <nav
              aria-label="Páginas útiles"
              className="flex flex-wrap justify-center gap-x-6 gap-y-2"
            >
              <Link
                href="/matronatacion"
                className="font-inter text-body underline-offset-2 duration-200 hover:text-primary hover:underline dark:text-dark-4 dark:hover:text-primary"
              >
                Matronatación
              </Link>
              <Link
                href="/precios-y-valores-de-nuestros-servicios"
                className="font-inter text-body underline-offset-2 duration-200 hover:text-primary hover:underline dark:text-dark-4 dark:hover:text-primary"
              >
                Precios
              </Link>
              <Link
                href="/blog"
                className="font-inter text-body underline-offset-2 duration-200 hover:text-primary hover:underline dark:text-dark-4 dark:hover:text-primary"
              >
                Blog
              </Link>
              <Link
                href="/contacto"
                className="font-inter text-body underline-offset-2 duration-200 hover:text-primary hover:underline dark:text-dark-4 dark:hover:text-primary"
              >
                Contacto
              </Link>
            </nav>
          </div>
        </div>
      </main>
      <FooterWrapper />
    </>
  );
};

export default NotFound;
