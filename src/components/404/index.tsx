import Link from "next/link";
import BackButton from "./BackButton";

const NotFound = () => {
  return (
    <main className="relative flex min-h-[70vh] flex-col items-center justify-center overflow-hidden px-6 py-24">
      {/* Background blobs */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-primary/5 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-primary/5 blur-3xl"
      />

      <div className="relative z-10 mx-auto w-full max-w-xl text-center">
        {/* Illustration */}
        <div className="mb-8 flex justify-center">
          <svg
            viewBox="0 0 280 200"
            width="280"
            height="200"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            {/* Water shadow */}
            <ellipse cx="140" cy="175" rx="110" ry="18" fill="#AE5EAB" opacity="0.08" />
            {/* Wave 1 */}
            <path d="M20 148 Q50 128 80 148 Q110 168 140 148 Q170 128 200 148 Q225 162 260 148" fill="none" stroke="#AE5EAB" strokeWidth="4" strokeLinecap="round" />
            {/* Wave 2 */}
            <path d="M20 162 Q55 145 85 162 Q115 179 145 162 Q175 145 205 162 Q230 172 260 162" fill="none" stroke="#AE5EAB" strokeWidth="3" strokeLinecap="round" opacity="0.45" />
            {/* Wave 3 */}
            <path d="M20 176 Q60 162 90 176 Q120 190 150 176 Q180 162 210 176 Q235 183 260 176" fill="none" stroke="#AE5EAB" strokeWidth="2" strokeLinecap="round" opacity="0.25" />
            {/* Bubbles */}
            <circle cx="60" cy="110" r="5" fill="none" stroke="#AE5EAB" strokeWidth="1.5" opacity="0.5" />
            <circle cx="75" cy="95" r="3" fill="none" stroke="#AE5EAB" strokeWidth="1.5" opacity="0.35" />
            {/* Fish body */}
            <ellipse cx="148" cy="98" rx="36" ry="20" fill="#AE5EAB" />
            {/* Fish belly */}
            <ellipse cx="144" cy="103" rx="23" ry="11" fill="#ffffff" opacity="0.2" />
            {/* Fish tail */}
            <polygon points="184,98 210,78 210,118" fill="#AE5EAB" />
            <polygon points="184,98 208,84 208,112" fill="#1C274C" opacity="0.2" />
            {/* Fin */}
            <path d="M152 78 Q160 62 170 72 Q162 78 152 78Z" fill="#AE5EAB" opacity="0.7" />
            {/* Eye */}
            <circle cx="122" cy="93" r="8" fill="#ffffff" />
            <circle cx="120" cy="93" r="4.5" fill="#1C274C" />
            <circle cx="118" cy="91" r="1.5" fill="#ffffff" />
            {/* Dizzy swirl */}
            <path d="M100 68 Q106 56 116 62 Q126 68 118 78" fill="none" stroke="#1C274C" strokeWidth="2.5" strokeLinecap="round" />
            <circle cx="118" cy="80" r="2.5" fill="#1C274C" />
            {/* Question marks */}
            <text x="130" y="58" fontFamily="sans-serif" fontSize="22" fontWeight="bold" fill="#AE5EAB" opacity="0.9">?</text>
            <text x="155" y="50" fontFamily="sans-serif" fontSize="14" fontWeight="bold" fill="#AE5EAB" opacity="0.5">?</text>
          </svg>
        </div>

        {/* Error code */}
        <p className="mb-2 font-satoshi text-9xl font-bold leading-none text-primary">
          404
        </p>

        {/* Title */}
        <h1 className="mb-4 font-satoshi text-3xl font-bold text-dark dark:text-white lg:text-4xl">
          ¡Página no encontrada!
        </h1>

        {/* Subtitle */}
        <p className="mb-10 font-inter text-lg text-body dark:text-dark-4">
          La página que buscas no existe o fue movida.
          <br />
          Pero no te preocupes, ¡no te hundas!
        </p>

        {/* CTA buttons */}
        <div className="mb-12 flex flex-wrap items-center justify-center gap-4">
          <BackButton />
          <Link
            href="/"
            className="inline-flex rounded-full bg-primary px-8 py-3 font-inter font-semibold text-white shadow-features transition-opacity hover:opacity-90"
          >
            Ir al inicio
          </Link>
        </div>

        {/* Quick links */}
        <div className="rounded-10 border border-stroke bg-gray-1 px-8 py-6 dark:border-stroke-dark dark:bg-gray-dark">
          <p className="mb-4 font-inter text-xs font-semibold uppercase tracking-widest text-dark-4">
            Páginas que podrían interesarte
          </p>
          <nav
            aria-label="Páginas sugeridas"
            className="flex flex-wrap justify-center gap-x-8 gap-y-3"
          >
            {[
              { label: "🤱 Matronatación", href: "/matronatacion" },
              { label: "💰 Precios", href: "/precios-y-valores-de-nuestros-servicios" },
              { label: "📍 Nuestras Sedes", href: "/conoce-nuestras-sedes" },
              { label: "✍️ Blog", href: "/blog" },
              { label: "📞 Contacto", href: "/contacto" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-inter text-sm font-medium text-dark-3 underline-offset-2 transition-colors hover:text-primary hover:underline dark:text-dark-4 dark:hover:text-primary"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </main>
  );
};

export default NotFound;
