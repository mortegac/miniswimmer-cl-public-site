"use client";

import { useEffect } from "react";
import Link from "next/link";
import FooterWrapper from "@/components/Footer/FooterWrapper";
import { HeaderWrapper } from "@/components/Header/HeaderWrapper";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service in production
    if (process.env.NODE_ENV === "production") {
      // Future: integrate with Sentry or similar
    }
  }, [error]);

  return (
    <>
      <HeaderWrapper />
      <main className="flex min-h-screen flex-col items-center justify-center bg-gray-1 px-4 py-24 dark:bg-dark">
        <div className="mx-auto w-full max-w-lg text-center">
          {/* SVG: Cracked / broken life ring */}
          <div className="mb-8 flex justify-center">
            <svg
              viewBox="0 0 200 160"
              width="220"
              height="176"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              {/* Background glow */}
              <circle cx="100" cy="82" r="56" fill="#AE5EAB1A" />

              {/* Life ring outer circle — broken (dashed to suggest cracks) */}
              <circle
                cx="100"
                cy="82"
                r="52"
                fill="none"
                stroke="#AE5EAB"
                strokeWidth="16"
                strokeDasharray="60 15 60 15"
                strokeDashoffset="0"
              />

              {/* Life ring white segments */}
              <circle
                cx="100"
                cy="82"
                r="52"
                fill="none"
                stroke="#FFFFFF"
                strokeWidth="16"
                strokeDasharray="28 44"
                strokeDashoffset="7"
                opacity="0.6"
              />

              {/* Crack lines across the ring */}
              <line
                x1="86"
                y1="38"
                x2="98"
                y2="58"
                stroke="#1C274C"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <line
                x1="98"
                y1="58"
                x2="92"
                y2="70"
                stroke="#1C274C"
                strokeWidth="2"
                strokeLinecap="round"
              />

              <line
                x1="148"
                y1="68"
                x2="130"
                y2="78"
                stroke="#1C274C"
                strokeWidth="3"
                strokeLinecap="round"
              />

              {/* Broken piece drifting away */}
              <path
                d="M140 110 Q148 102 156 108 Q164 114 158 122 Q150 130 142 124 Q134 118 140 110 Z"
                fill="#AE5EAB"
                opacity="0.5"
                transform="rotate(25 148 116)"
              />

              {/* Center exclamation mark */}
              <text
                x="95"
                y="96"
                fontFamily="sans-serif"
                fontSize="32"
                fontWeight="bold"
                fill="#AE5EAB"
              >
                !
              </text>
            </svg>
          </div>

          {/* Error code */}
          <p className="mb-2 font-satoshi text-8xl font-bold text-primary">
            500
          </p>

          {/* Title */}
          <h1 className="mb-3 font-satoshi text-heading-4 font-bold text-dark dark:text-white">
            Algo salió mal
          </h1>

          {/* Subtitle */}
          <p className="mb-8 font-inter text-body dark:text-dark-4">
            Ocurrió un error inesperado en nuestro servidor. Por favor intenta
            de nuevo.
          </p>

          {/* Action buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={reset}
              className="inline-flex rounded-full bg-primary px-8 py-3 font-inter font-semibold text-white duration-200 hover:bg-primary-dark"
            >
              Intentar de nuevo
            </button>

            <Link
              href="/"
              className="inline-flex items-center rounded-full border border-stroke bg-white px-8 py-3 font-inter font-semibold text-dark duration-200 hover:bg-gray dark:border-stroke-dark dark:bg-gray-dark dark:text-white dark:hover:bg-dark-2"
            >
              Ir al inicio
            </Link>
          </div>
        </div>
      </main>
      <FooterWrapper />
    </>
  );
}
