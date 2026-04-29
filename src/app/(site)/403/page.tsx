import Link from "next/link";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Acceso no autorizado — Miniswimmer",
  robots: { index: false, follow: false },
};

export default function ForbiddenPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-1 px-4 py-24 dark:bg-dark">
      <div className="mx-auto w-full max-w-lg text-center">
        {/* SVG: Life ring / buoy with padlock */}
        <div className="mb-8 flex justify-center">
          <svg
            viewBox="0 0 200 160"
            width="220"
            height="176"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            {/* Outer ring background glow */}
            <circle cx="100" cy="82" r="56" fill="#AE5EAB1A" />

            {/* Life ring outer circle */}
            <circle
              cx="100"
              cy="82"
              r="52"
              fill="none"
              stroke="#AE5EAB"
              strokeWidth="16"
            />

            {/* Life ring white segments (quarter arcs) */}
            <circle
              cx="100"
              cy="82"
              r="52"
              fill="none"
              stroke="#FFFFFF"
              strokeWidth="16"
              strokeDasharray="40 42"
              strokeDashoffset="21"
            />

            {/* Padlock body */}
            <rect x="85" y="78" width="30" height="24" rx="4" fill="#1C274C" />

            {/* Padlock shackle */}
            <path
              d="M91 78 V68 Q100 58 109 68 V78"
              fill="none"
              stroke="#1C274C"
              strokeWidth="6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {/* Padlock keyhole */}
            <circle cx="100" cy="88" r="4" fill="#FFFFFF" />
            <rect x="98" y="90" width="4" height="6" rx="1" fill="#FFFFFF" />
          </svg>
        </div>

        {/* Error code */}
        <p className="mb-2 font-satoshi text-8xl font-bold text-primary">403</p>

        {/* Title */}
        <h1 className="mb-3 font-satoshi text-heading-4 font-bold text-dark dark:text-white">
          Acceso no autorizado
        </h1>

        {/* Subtitle */}
        <p className="mb-8 font-inter text-body dark:text-dark-4">
          No tienes permiso para ver esta página. Si crees que es un error,
          contáctanos.
        </p>

        {/* Action buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex rounded-full bg-primary px-8 py-3 font-inter font-semibold text-white duration-200 hover:bg-primary-dark"
          >
            Ir al inicio
          </Link>

          <Link
            href="/contacto"
            className="inline-flex items-center rounded-full border border-stroke bg-white px-8 py-3 font-inter font-semibold text-dark duration-200 hover:bg-gray dark:border-stroke-dark dark:bg-gray-dark dark:text-white dark:hover:bg-dark-2"
          >
            Contactar
          </Link>
        </div>
      </div>
    </main>
  );
}
