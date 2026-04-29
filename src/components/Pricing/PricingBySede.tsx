"use client";

import { useState } from "react";
import { cn } from "@/libs/utils";

// ─── Types ────────────────────────────────────────────────────────────────────

interface PricingRow {
  plan: string;
  valor: string;
  matricula: string;
  vigencia: string;
}

interface AgeGroup {
  label: string;
  days: string;
}

interface PricingSection {
  category: "Bebés" | "Niños" | "Adultos" | "Big Swimmer" | "Neuro Swimmer";
  groups: AgeGroup[];
  rows: PricingRow[];
  notes?: string[];
}

interface Sede {
  id: string;
  name: string;
  type: "PREMIUM" | "REGULAR";
  temperature: string;
  sections: PricingSection[];
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const WHATSAPP_URL =
  "https://wa.me/56973447496?text=Hola!%20Me%20gustar%C3%ADa%20confirmar%20los%20valores%20y%20disponibilidad%20de%20clases";

const SEDES: Sede[] = [
  {
    id: "penalolen",
    name: "Peñalolén",
    type: "PREMIUM",
    temperature: "30°C a 32°C",
    sections: [
      {
        category: "Bebés",
        groups: [
          { label: "2 a 18 meses", days: "Viernes, Sábados, Domingos" },
          { label: "19 meses a 3 años", days: "Viernes, Sábados, Domingos" },
        ],
        rows: [
          { plan: "Clase de prueba", valor: "$35.000", matricula: "—", vigencia: "15 días" },
          { plan: "4 Clases", valor: "$125.000", matricula: "+ $30.000", vigencia: "30 días" },
          { plan: "12 Clases", valor: "$285.000", matricula: "+ $30.000", vigencia: "100 días" },
          { plan: "24 Clases", valor: "$620.000", matricula: "GRATIS", vigencia: "200 días" },
        ],
        notes: [
          "Solo para clientes nuevos o inactivos por más de 90 días.",
          "El alumno debe ingresar siempre acompañado de un apoderado.",
        ],
      },
      {
        category: "Niños",
        groups: [
          { label: "4 a 6 años", days: "Lunes, Viernes, Sábados, Domingos" },
          { label: "7 años o más", days: "Lunes, Sábados" },
        ],
        rows: [
          { plan: "Clase de prueba", valor: "$35.000", matricula: "—", vigencia: "15 días" },
          { plan: "4 Clases", valor: "$110.000", matricula: "+ $30.000", vigencia: "30 días" },
          { plan: "12 Clases", valor: "$285.000", matricula: "+ $30.000", vigencia: "100 días" },
          { plan: "24 Clases", valor: "$530.000", matricula: "GRATIS", vigencia: "200 días" },
        ],
      },
      {
        category: "Big Swimmer",
        groups: [
          { label: "Adultos nivel inicial", days: "Sábados, Lunes" },
        ],
        rows: [
          { plan: "Clase de prueba", valor: "$30.000", matricula: "—", vigencia: "15 días" },
          { plan: "4 Clases", valor: "$75.000", matricula: "+ $30.000", vigencia: "30 días" },
          { plan: "12 Clases", valor: "$180.000", matricula: "+ $30.000", vigencia: "100 días" },
          { plan: "24 Clases", valor: "$350.000", matricula: "GRATIS", vigencia: "200 días" },
        ],
      },
      {
        category: "Neuro Swimmer",
        groups: [
          { label: "Niños con TEA u otras necesidades", days: "Consultar disponibilidad" },
        ],
        rows: [
          { plan: "Clase de prueba", valor: "Consultar", matricula: "—", vigencia: "15 días" },
        ],
        notes: ["Consulta horarios, disponibilidad y valores por WhatsApp."],
      },
    ],
  },
  {
    id: "la-reina",
    name: "La Reina",
    type: "PREMIUM",
    temperature: "32°C a 33°C",
    sections: [
      {
        category: "Bebés",
        groups: [
          { label: "2 a 18 meses", days: "Domingos" },
          { label: "19 meses a 3 años", days: "Domingos" },
        ],
        rows: [
          { plan: "Clase de prueba", valor: "$35.000", matricula: "—", vigencia: "15 días" },
          { plan: "4 Clases", valor: "$125.000", matricula: "+ $30.000", vigencia: "30 días" },
          { plan: "12 Clases", valor: "$331.000", matricula: "+ $30.000", vigencia: "100 días" },
          { plan: "24 Clases", valor: "$620.000", matricula: "GRATIS", vigencia: "200 días" },
        ],
        notes: ["Solo para clientes nuevos o inactivos por más de 90 días."],
      },
      {
        category: "Niños",
        groups: [{ label: "4 a 6 años", days: "Domingos" }],
        rows: [
          { plan: "Clase de prueba", valor: "$35.000", matricula: "—", vigencia: "15 días" },
          { plan: "4 Clases", valor: "$110.000", matricula: "+ $30.000", vigencia: "30 días" },
          { plan: "12 Clases", valor: "$285.000", matricula: "+ $30.000", vigencia: "100 días" },
          { plan: "24 Clases", valor: "$530.000", matricula: "GRATIS", vigencia: "200 días" },
        ],
      },
    ],
  },
  {
    id: "nunoa",
    name: "Ñuñoa",
    type: "PREMIUM",
    temperature: "32°C",
    sections: [
      {
        category: "Bebés",
        groups: [
          { label: "2 a 18 meses", days: "Jueves, Domingos" },
          { label: "19 meses a 43 meses", days: "Jueves, Domingos" },
          { label: "3 a 5 años", days: "Jueves, Domingos" },
        ],
        rows: [
          { plan: "Clase de prueba", valor: "$35.000", matricula: "—", vigencia: "15 días" },
          { plan: "4 Clases", valor: "$110.000", matricula: "+ $30.000", vigencia: "30 días" },
          { plan: "12 Clases", valor: "$285.000", matricula: "+ $30.000", vigencia: "100 días" },
          { plan: "24 Clases", valor: "$510.000", matricula: "GRATIS", vigencia: "200 días" },
        ],
        notes: [
          "Matrícula solo para alumnos nuevos o que lleven más de 90 días sin plan activo.",
          "Hasta los 3 años los alumnos entran acompañados de un adulto.",
        ],
      },
      {
        category: "Big Swimmer",
        groups: [
          { label: "Adultos nivel inicial", days: "Domingos" },
        ],
        rows: [
          { plan: "Clase de prueba", valor: "$30.000", matricula: "—", vigencia: "15 días" },
          { plan: "4 Clases", valor: "$75.000", matricula: "+ $30.000", vigencia: "30 días" },
          { plan: "12 Clases", valor: "$180.000", matricula: "+ $30.000", vigencia: "100 días" },
          { plan: "24 Clases", valor: "$350.000", matricula: "GRATIS", vigencia: "200 días" },
        ],
      },
      {
        category: "Neuro Swimmer",
        groups: [
          { label: "Niños con TEA u otras necesidades", days: "Consultar disponibilidad" },
        ],
        rows: [
          { plan: "Clase de prueba", valor: "Consultar", matricula: "—", vigencia: "15 días" },
        ],
        notes: ["Consulta horarios, disponibilidad y valores por WhatsApp."],
      },
    ],
  },
  {
    id: "vitacura",
    name: "Vitacura",
    type: "REGULAR",
    temperature: "28°C a 29°C",
    sections: [
      {
        category: "Bebés",
        groups: [
          { label: "2 a 23 meses", days: "Domingos, Martes" },
          { label: "2 a 3 años", days: "Domingos, Martes" },
        ],
        rows: [
          { plan: "Clase de prueba", valor: "$30.000", matricula: "—", vigencia: "15 días" },
          { plan: "4 Clases", valor: "$110.000", matricula: "+ $30.000", vigencia: "30 días" },
          { plan: "12 Clases", valor: "$285.000", matricula: "+ $30.000", vigencia: "100 días" },
          { plan: "24 Clases", valor: "$510.000", matricula: "GRATIS", vigencia: "200 días" },
        ],
        notes: ["Matrícula solo aplica a clientes nuevos."],
      },
      {
        category: "Niños",
        groups: [
          { label: "4 a 5 años", days: "Domingos, Martes" },
          { label: "6 años o más", days: "Domingos" },
        ],
        rows: [
          { plan: "Clase de prueba", valor: "$30.000", matricula: "—", vigencia: "15 días" },
          { plan: "4 Clases", valor: "$90.000", matricula: "+ $30.000", vigencia: "30 días" },
          { plan: "12 Clases", valor: "$225.000", matricula: "+ $30.000", vigencia: "100 días" },
          { plan: "24 Clases", valor: "$410.000", matricula: "GRATIS", vigencia: "200 días" },
        ],
        notes: ["Matrícula solo aplica a clientes nuevos."],
      },
    ],
  },
  {
    id: "vina-del-mar",
    name: "Viña del Mar",
    type: "REGULAR",
    temperature: "29°C a 31°C",
    sections: [
      {
        category: "Bebés",
        groups: [
          { label: "0 a 2 años", days: "Martes, Jueves" },
          { label: "2 a 3 años", days: "Martes, Jueves" },
        ],
        rows: [
          { plan: "Clase de prueba", valor: "$30.000", matricula: "—", vigencia: "15 días" },
          { plan: "4 Clases", valor: "$110.000", matricula: "+ $30.000", vigencia: "30 días" },
          { plan: "12 Clases", valor: "$285.000", matricula: "+ $30.000", vigencia: "100 días" },
          { plan: "24 Clases", valor: "$510.000", matricula: "GRATIS", vigencia: "200 días" },
        ],
        notes: ["La matrícula solo aplica a clientes nuevos."],
      },
    ],
  },
  {
    id: "rancagua",
    name: "Rancagua",
    type: "REGULAR",
    temperature: "30°C a 32°C",
    sections: [
      {
        category: "Bebés",
        groups: [
          { label: "2 a 18 meses", days: "Sábados, Lunes" },
          { label: "19 meses a 3 años", days: "Sábados, Lunes" },
        ],
        rows: [
          { plan: "Clase de prueba", valor: "$30.000", matricula: "—", vigencia: "15 días" },
          { plan: "4 Clases", valor: "$100.000", matricula: "+ $30.000", vigencia: "30 días" },
          { plan: "12 Clases", valor: "$276.000", matricula: "+ $30.000", vigencia: "100 días" },
          { plan: "24 Clases", valor: "$504.000", matricula: "GRATIS", vigencia: "200 días" },
        ],
        notes: ["La matrícula solo aplica a clientes nuevos."],
      },
      {
        category: "Niños",
        groups: [
          { label: "4 a 5 años", days: "Sábados, Lunes" },
          { label: "6 años o más", days: "Sábados, Lunes" },
        ],
        rows: [
          { plan: "Clase de prueba", valor: "$30.000", matricula: "—", vigencia: "15 días" },
          { plan: "4 Clases", valor: "$72.000", matricula: "+ $30.000", vigencia: "30 días" },
          { plan: "12 Clases", valor: "$192.000", matricula: "+ $30.000", vigencia: "100 días" },
          { plan: "24 Clases", valor: "$356.000", matricula: "GRATIS", vigencia: "200 días" },
        ],
        notes: ["La matrícula solo aplica a clientes nuevos."],
      },
    ],
  },
  {
    id: "chillan",
    name: "Chillán",
    type: "PREMIUM",
    temperature: "30°C a 32°C",
    sections: [
      {
        category: "Bebés",
        groups: [{ label: "2 a 36 meses", days: "Domingos" }],
        rows: [
          { plan: "Clase de prueba", valor: "$30.000", matricula: "—", vigencia: "15 días" },
          { plan: "4 Clases", valor: "$100.000", matricula: "GRATIS", vigencia: "30 días" },
        ],
        notes: [
          "La matrícula solo aplica a clientes nuevos.",
          "Actualmente solo 4-pack disponible.",
        ],
      },
      {
        category: "Niños",
        groups: [
          { label: "3 a 5 años", days: "Domingos" },
          { label: "6 años o más", days: "Domingos" },
        ],
        rows: [
          { plan: "Clase de prueba", valor: "$30.000", matricula: "—", vigencia: "15 días" },
          { plan: "4 Clases", valor: "$80.000", matricula: "GRATIS", vigencia: "30 días" },
        ],
        notes: [
          "La matrícula solo aplica a clientes nuevos.",
          "Actualmente solo 4-pack disponible.",
        ],
      },
    ],
  },
];

// ─── Sub-components ───────────────────────────────────────────────────────────

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M2 22L3.41152 16.8691C2.54422 15.3639 2.08876 13.6568 2.09099 11.9196C2.08095 6.44549 6.52644 2 11.99 2C14.6417 2 17.1315 3.02806 19.0062 4.9034C20.9034 6.80052 22 9.30977 22 11.9196C22 17.3832 17.4641 21.8287 12 21.8287C10.3368 21.8287 8.71374 21.4151 7.26204 20.6192L2 22Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.52024 7.76662C9.33885 7.35303 9.13737 7.34298 8.96603 7.34298C8.81477 7.33294 8.65288 7.33294 8.48154 7.33294C8.32083 7.33294 8.04845 7.39321 7.81684 7.64549C7.58464 7.89719 6.95007 8.49217 6.95007 9.71167C6.95007 10.9318 7.83693 12.1111 7.95805 12.2724C8.07858 12.4337 9.67149 15.0139 12.192 16.0124C14.2883 16.839 14.712 16.6777 15.1657 16.6269C15.6189 16.5767 16.6275 16.0325 16.839 15.4476C17.0405 14.8733 17.0405 14.3693 16.9802 14.2682C16.9199 14.1678 16.748 14.1069 16.5064 13.9758C16.2541 13.8552 15.0446 13.2502 14.813 13.1693C14.5808 13.0889 14.4195 13.0487 14.2582 13.2904C14.0969 13.5427 13.623 14.0969 13.4724 14.2582C13.3306 14.4195 13.1799 14.4396 12.9377 14.3185C12.686 14.1979 11.8895 13.9356 10.9418 13.0889C10.2056 12.4331 9.71167 11.6171 9.56041 11.3755C9.41979 11.1232 9.54032 10.992 9.67149 10.8709C9.78257 10.7604 9.92378 10.579 10.0449 10.4378C10.1654 10.296 10.2056 10.1855 10.2966 10.0242C10.377 9.86292 10.3368 9.71167 10.2765 9.59114C10.2157 9.48006 9.74239 8.25997 9.52024 7.76603V7.76662Z"
        fill="white"
      />
    </svg>
  );
}

function TypeBadge({ type }: { type: Sede["type"] }) {
  const styles: Record<Sede["type"], string> = {
    PREMIUM: "bg-primary text-white",
    REGULAR: "bg-dark text-white",
  };
  return (
    <span
      className={cn(
        "inline-block rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider",
        styles[type],
      )}
    >
      {type}
    </span>
  );
}

function PricingTable({ rows }: { rows: PricingRow[] }) {
  return (
    <div className="overflow-x-auto rounded-10">
      <table className="w-full border-collapse text-sm">
        <thead>
          <tr className="bg-gray dark:bg-gray-dark">
            <th className="border border-stroke px-4 py-3 text-left font-satoshi font-bold text-dark dark:border-stroke-dark dark:text-white">
              Plan
            </th>
            <th className="border border-stroke px-4 py-3 text-left font-satoshi font-bold text-dark dark:border-stroke-dark dark:text-white">
              Valor
            </th>
            <th className="border border-stroke px-4 py-3 text-left font-satoshi font-bold text-dark dark:border-stroke-dark dark:text-white">
              Matrícula
            </th>
            <th className="border border-stroke px-4 py-3 text-left font-satoshi font-bold text-dark dark:border-stroke-dark dark:text-white">
              Vigencia
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => {
            const isTrial = row.plan === "Clase de prueba";
            const isBest = row.plan === "24 Clases";
            return (
              <tr
                key={row.plan}
                className={cn(
                  "transition-colors",
                  isBest
                    ? "border-2 border-primary/40 bg-primary/5 dark:bg-primary/10"
                    : "border-b border-stroke hover:bg-gray/50 dark:border-stroke-dark dark:hover:bg-gray-dark/50",
                )}
              >
                <td className="border border-stroke px-4 py-3 dark:border-stroke-dark">
                  <div className="flex items-center gap-2">
                    <span className="font-inter text-dark dark:text-white">
                      {row.plan}
                    </span>
                    {isTrial && (
                      <span className="rounded-full bg-green/10 px-2 py-0.5 text-xs font-semibold text-green">
                        Prueba
                      </span>
                    )}
                    {isBest && (
                      <span className="rounded-full bg-primary/10 px-2 py-0.5 text-xs font-semibold text-primary">
                        Mejor valor
                      </span>
                    )}
                  </div>
                </td>
                <td className="border border-stroke px-4 py-3 font-inter font-semibold text-dark dark:border-stroke-dark dark:text-white">
                  {row.valor}
                </td>
                <td
                  className={cn(
                    "border border-stroke px-4 py-3 font-inter dark:border-stroke-dark",
                    row.matricula === "GRATIS"
                      ? "font-semibold text-green"
                      : "text-body dark:text-dark-4",
                  )}
                >
                  {row.matricula}
                </td>
                <td className="border border-stroke px-4 py-3 font-inter text-body dark:border-stroke-dark dark:text-dark-4">
                  {row.vigencia}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

function AgeGroupBadges({ groups }: { groups: AgeGroup[] }) {
  return (
    <div className="mb-4 flex flex-wrap gap-2">
      {groups.map((g) => (
        <div
          key={g.label}
          className="rounded-full border border-stroke bg-white px-3 py-1.5 dark:border-stroke-dark dark:bg-gray-dark"
        >
          <span className="font-inter text-xs font-semibold text-dark dark:text-white">
            {g.label}
          </span>
          <span className="ml-1.5 font-inter text-xs text-body dark:text-dark-4">
            — {g.days}
          </span>
        </div>
      ))}
    </div>
  );
}

function SectionNotes({ notes }: { notes: string[] }) {
  return (
    <ul className="mt-3 space-y-1">
      {notes.map((note) => (
        <li
          key={note}
          className="flex items-start gap-1.5 font-inter text-xs text-body dark:text-dark-4"
        >
          <span className="mt-0.5 text-primary" aria-hidden="true">
            *
          </span>
          {note}
        </li>
      ))}
    </ul>
  );
}

function SedeContent({ sede }: { sede: Sede }) {
  return (
    <div className="rounded-10 bg-white shadow-features dark:bg-gray-dark">
      {/* Header */}
      <div className="border-b border-stroke p-6 dark:border-stroke-dark">
        <div className="mb-3 flex flex-wrap items-center gap-3">
          <TypeBadge type={sede.type} />
          <span className="flex items-center gap-1 rounded-full bg-orange-50 px-3 py-1 text-xs font-medium text-orange-600 dark:bg-orange-900/20 dark:text-orange-400">
            <span aria-hidden="true">&#127777;</span>
            {sede.temperature}
          </span>
        </div>
        <h2 className="mb-3 font-satoshi text-xl font-bold text-dark dark:text-white">
          Sede {sede.name}
        </h2>
        <p className="rounded-lg bg-amber-50 px-3 py-2 font-inter text-xs text-amber-700 dark:bg-amber-900/20 dark:text-amber-400">
          Los valores son referenciales. Confirma disponibilidad y valores
          vigentes por WhatsApp.
        </p>
      </div>

      {/* Pricing sections */}
      <div className="divide-y divide-stroke p-6 dark:divide-stroke-dark">
        {sede.sections.map((section, idx) => (
          <div key={section.category} className={cn(idx > 0 ? "pt-6" : "")}>
            {idx > 0 && <div className="mb-6" />}
            <div className="mb-4 flex items-center gap-3">
              <h3 className="font-satoshi text-lg font-bold text-dark dark:text-white">
                {section.category}
              </h3>
              <span className="h-px flex-1 bg-stroke dark:bg-stroke-dark" />
            </div>
            <AgeGroupBadges groups={section.groups} />
            <PricingTable rows={section.rows} />
            {section.notes && section.notes.length > 0 && (
              <SectionNotes notes={section.notes} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

export default function PricingBySede() {
  const [activeSede, setActiveSede] = useState<string>(SEDES[0].id);

  const currentSede = SEDES.find((s) => s.id === activeSede) ?? SEDES[0];

  return (
    <>
      {/* Hero banner */}
      <section className="relative overflow-hidden bg-primary pb-16 pt-28 lg:pt-36">
        <div className="container relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-4 inline-block rounded-full bg-white/20 px-4 py-1.5 font-inter text-sm font-semibold text-white">
              Actualizado Febrero 2026
            </span>
            <h1 className="mb-4 font-satoshi text-4xl font-bold leading-tight text-white lg:text-5xl">
              Valores de Clases{" "}
              <span className="text-white/80">Febrero 2026</span>
            </h1>
            <p className="mb-6 font-inter text-lg text-white/90">
              Planes de natación para bebés, niños y adultos en todas nuestras
              sedes.{" "}
              <strong className="font-semibold text-white">
                Desde $30.000
              </strong>{" "}
              la clase de prueba.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-flex items-center gap-3 rounded-full bg-white px-8 py-3 font-inter font-semibold text-primary transition-opacity hover:opacity-90"
            >
              <WhatsAppIcon className="h-5 w-5 text-green" />
              Confirma por WhatsApp
            </a>
          </div>
        </div>
        {/* decorative wave */}
        <div className="absolute bottom-0 left-0 w-full" aria-hidden="true">
          <svg
            viewBox="0 0 1440 60"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            className="h-10 w-full fill-white dark:fill-black lg:h-16"
          >
            <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" />
          </svg>
        </div>
      </section>

      {/* Main content */}
      <section className="bg-white py-12 dark:bg-black lg:py-16">
        <div className="container">
          {/* Sede tabs */}
          <div className="mb-8 overflow-x-auto pb-2">
            <div
              className="flex min-w-max gap-2"
              role="tablist"
              aria-label="Selecciona una sede"
            >
              {SEDES.map((sede) => (
                <button
                  key={sede.id}
                  role="tab"
                  aria-selected={activeSede === sede.id}
                  aria-controls={`tabpanel-${sede.id}`}
                  onClick={() => setActiveSede(sede.id)}
                  className={cn(
                    "rounded-full px-5 py-2.5 font-inter text-sm font-semibold transition-all duration-200",
                    activeSede === sede.id
                      ? "bg-primary text-white shadow-md"
                      : "bg-gray-2 text-body hover:bg-gray-3 dark:bg-gray-dark dark:text-dark-4 dark:hover:bg-gray-7",
                  )}
                >
                  {sede.name}
                </button>
              ))}
            </div>
          </div>

          {/* Active sede content */}
          <div
            id={`tabpanel-${currentSede.id}`}
            role="tabpanel"
            aria-label={`Precios sede ${currentSede.name}`}
          >
            <SedeContent sede={currentSede} />
          </div>

          {/* Bottom WhatsApp CTA card */}
          <div className="mt-10 rounded-10 bg-primary p-8 text-center shadow-features">
            <h2 className="mb-2 font-satoshi text-2xl font-bold text-white lg:text-3xl">
              ¿Dudas sobre horarios y valores?
            </h2>
            <p className="mb-6 font-inter text-white/80">
              Escríbenos por WhatsApp y te confirmamos disponibilidad, horarios
              y valores vigentes para tu sede más cercana.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-flex items-center gap-3 rounded-full bg-white px-8 py-3 font-inter font-semibold text-primary transition-opacity hover:opacity-90"
            >
              <WhatsAppIcon className="h-5 w-5 text-green" />
              Confirma por WhatsApp
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* Sticky WhatsApp banner — mobile only */}
      <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-stroke bg-white px-4 py-3 shadow-2xl dark:border-stroke-dark dark:bg-gray-dark lg:hidden">
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer nofollow"
          className="flex items-center justify-center gap-3"
        >
          <div className="flex flex-col">
            <span className="font-inter text-xs text-body dark:text-dark-4">
              ¿Dudas sobre horarios y valores?
            </span>
            <span className="font-inter text-sm font-semibold text-primary">
              Confirma por WhatsApp →
            </span>
          </div>
          <span className="ml-auto flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-green text-white">
            <WhatsAppIcon className="h-5 w-5" />
          </span>
        </a>
      </div>

      {/* Spacer so sticky banner doesn't overlap content on mobile */}
      <div className="h-16 lg:hidden" aria-hidden="true" />
    </>
  );
}
