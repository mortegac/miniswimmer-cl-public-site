import { Metadata } from "next";
import { jwtVerify } from "jose";
import ExpoRegistration from "@/components/ExpoRegistration";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Registro Clase Gratis — Miniswimmer ExpoBebé",
  robots: { index: false, follow: false, googleBot: { index: false, follow: false } },
};

const JWT_SECRET = new TextEncoder().encode("a-string-secret-at-least-256-bits-long");

interface JwtData { sub: string; name: string; }

export default async function ExpoRegistrationPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const params = await searchParams;
  // El JWT es la primera key del querystring
  const token = Object.keys(params)[0] ?? "";

  let jwtData: JwtData | null = null;

  if (token) {
    try {
      const { payload } = await jwtVerify(token, JWT_SECRET);
      jwtData = { sub: payload.sub as string, name: payload.name as string };
    } catch {
      // token inválido — jwtData queda null
    }
  }

  if (!jwtData) {
    return (
      <main className="flex min-h-[60vh] items-center justify-center px-4 py-16">
        <div className="w-full max-w-sm rounded-10 bg-white p-8 text-center shadow-features">
          <div className="mb-4 text-5xl">🔒</div>
          <h1 className="mb-2 font-satoshi text-2xl font-bold text-dark">Acceso no válido</h1>
          <p className="mb-6 font-inter text-sm text-body">
            El enlace que usaste no es válido o ha expirado. Solicita un nuevo enlace.
          </p>
          <Link
            href="/"
            className="inline-flex rounded-full bg-primary px-8 py-3 font-inter font-semibold text-white hover:opacity-90"
          >
            Volver al inicio
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#eceaef] py-0">
      <div className="sm:px-6">
        <ExpoRegistration email={jwtData.sub} name={jwtData.name} />
      </div>
    </main>
  );
}
