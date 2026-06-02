"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

/* ── Tipos ── */
interface SlotItem { t: string; rem: number; }
interface DateCard { dow: string; d: number; iso: string; label: string; slots: SlotItem[]; totalRem: number; }
interface Week { week: number; dates: DateCard[]; }

const DOW_SHORT: Record<string, string> = { Viernes: "Vie", Sábado: "Sáb", Domingo: "Dom" };
const RELACIONES = ["Mamá", "Papá", "Abuela", "Abuelo", "Otro"] as const;
const SEDE = "Sede Peñalolén";
const WHATSAPP = "https://api.whatsapp.com/send/?phone=56973447496";

function ageInMonths(birthISO: string): number | null {
  const b = new Date(birthISO + "T00:00:00");
  if (isNaN(b.getTime())) return null;
  const now = new Date();
  let m = (now.getFullYear() - b.getFullYear()) * 12 + (now.getMonth() - b.getMonth());
  if (now.getDate() < b.getDate()) m -= 1;
  return m;
}

/* ── Schema Yup ── */
const schema = yup.object({
  tipo: yup.string().oneOf(["bebe", "mami"] as const).required(),
  email: yup.string().email("Email inválido").required("El correo es requerido"),
  nombre: yup.string().min(2, "Mínimo 2 caracteres").required("El nombre es requerido"),
  fechaNacimiento: yup.string().when("tipo", {
    is: "bebe",
    then: (s) => s.required("La fecha de nacimiento es requerida")
      .test("age", "El bebé debe tener máximo 23 meses", (val) => {
        if (!val) return false;
        const m = ageInMonths(val);
        return m !== null && m >= 0 && m <= 23;
      }),
    otherwise: (s) => s.optional(),
  }),
  relacion: yup.string().when("tipo", {
    is: "bebe",
    then: (s) => s.required("Indica quién inscribe"),
    otherwise: (s) => s.optional(),
  }),
  fechaISO: yup.string().required("Selecciona una fecha"),
  hora: yup.string().required("Selecciona un horario"),
}).required();

type FormData = yup.InferType<typeof schema>;

/* ── Íconos SVG inline ── */
const CheckIcon = () => (
  <svg width={18} height={18} viewBox="0 0 24 24" fill="none">
    <path d="M5 12.5l4.5 4.5L19 7" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const ArrowLeftIcon = () => (
  <svg width={15} height={15} viewBox="0 0 24 24" fill="none">
    <path d="M19 12H5M11 6l-6 6 6 6" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const WhatsAppIcon = () => (
  <svg width={18} height={18} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2a10 10 0 00-8.6 15l-1.3 4.8 4.9-1.3A10 10 0 1012 2zm4.4 14c-.2-.1-1.4-.7-1.6-.8-.2-.1-.4-.1-.5.1l-.7.9c-.1.2-.3.2-.5.1-.7-.3-1.4-.7-2-1.5-.2-.3.2-.3.5-.9.1-.1 0-.3 0-.4l-.7-1.6c-.2-.5-.4-.4-.5-.4h-.5c-.2 0-.4.1-.6.3-.7.7-.9 1.7-.2 2.9.7 1.2 1.7 2.4 3.4 3.1 1.7.7 1.7.5 2 .5.4 0 1.2-.5 1.4-1 .2-.5.2-.9.1-1-.1-.1-.2-.2-.4-.3z"/>
  </svg>
);

/* ── Sección WhatsApp compartida ── */
const WhatsAppSection = () => (
  <section
    className="mt-12 -mx-4 px-4 py-10 text-center text-white sm:-mx-6 sm:px-6"
    style={{ background: "linear-gradient(90deg,#7e7e7e,#3b3b3b)" }}
  >
    <h4 className="mb-5 font-satoshi font-bold -tracking-[1.6px] text-white dark:text-white lg:text-heading-2 xl:text-[32px] xl:leading-[1.12]">
      ¡Necesitas otra opcion!
    </h4>
    <a
      href={WHATSAPP}
      target="_blank"
      rel="noreferrer noopener"
      className="inline-flex items-center gap-3 font-satoshi text-3xl font-bold text-white hover:opacity-80 transition"
    >
      <WhatsAppIcon />
      +56 (973) 447 496
    </a>
  </section>
);

/* ── Componente principal ── */
interface ExpoRegistrationProps { email: string; name: string; }

const ExpoRegistration = ({ email }: ExpoRegistrationProps) => {
  const [schedule, setSchedule] = useState<Week[]>([]);
  const [loadingSchedule, setLoadingSchedule] = useState(true);
  const [selectedDate, setSelectedDate] = useState<DateCard | null>(null);
  const [done, setDone] = useState(false);
  const [enrollmentResult, setEnrollmentResult] = useState<FormData | null>(null);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    resolver: yupResolver(schema) as any,
    defaultValues: { tipo: "bebe", email },
  });

  const tipo = watch("tipo");
  const fechaISO = watch("fechaISO");
  const hora = watch("hora");
  const nombre = watch("nombre");
  const emailVal = watch("email");
  const fechaNacimiento = watch("fechaNacimiento");
  const relacion = watch("relacion");

  const isMami = tipo === "mami";

  /* Calcular edad para mostrar feedback */
  const ageMonths = fechaNacimiento ? ageInMonths(fechaNacimiento) : null;
  const ageMsg = ageMonths !== null
    ? ageMonths < 0 ? "La fecha no puede ser futura"
      : ageMonths > 23 ? `Tu bebé tiene ${ageMonths} meses (máx 23)`
      : `${ageMonths} ${ageMonths === 1 ? "mes" : "meses"} ✓`
    : "";
  const ageOk = ageMonths !== null && ageMonths >= 0 && ageMonths <= 23;

  /* Progress */
  const datosOk = !!(
    emailVal && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailVal) &&
    nombre && nombre.trim().length > 1 &&
    (isMami || (ageOk && relacion))
  );
  const horarioOk = !!(fechaISO && hora);
  const progress = (datosOk ? 50 : 0) + (horarioOk ? 50 : 0);

  /* Fetch schedule */
  useEffect(() => {
    setLoadingSchedule(true);
    setSelectedDate(null);
    setValue("fechaISO", "");
    setValue("hora", "");
    fetch(`/api/slots?tipo=${tipo}`)
      .then((r) => r.json())
      .then((data: { weeks: Week[] }) => setSchedule(data.weeks))
      .catch(() => setSchedule([]))
      .finally(() => setLoadingSchedule(false));
  }, [tipo, setValue]);

  function changeTipo(t: "bebe" | "mami") {
    setValue("tipo", t);
    setSelectedDate(null);
    setValue("fechaISO", "");
    setValue("hora", "");
  }

  function pickDate(dt: DateCard) {
    setSelectedDate(dt);
    setValue("fechaISO", dt.iso, { shouldValidate: true });
    setValue("hora", "");
  }

  function pickSlot(s: SlotItem) {
    setValue("hora", s.t, { shouldValidate: true });
  }

  const onSubmit = async (data: FormData) => {
    const dateCard = schedule.flatMap((w) => w.dates).find((d) => d.iso === data.fechaISO);
    const payload = {
      tipo: data.tipo,
      email: data.email,
      nombre: data.nombre,
      fechaNacimiento: isMami ? null : (data.fechaNacimiento ?? null),
      relacion: isMami ? null : (data.relacion ?? null),
      fechaISO: data.fechaISO,
      fechaLabel: dateCard?.label ?? data.fechaISO,
      hora: data.hora,
      sede: SEDE,
    };
    const res = await fetch("/api/enrollment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    if (!res.ok) throw new Error("Error al inscribir");
    setEnrollmentResult(data);
    setDone(true);
  };

  const inputClass = "mt-1 block w-full h-[48px] rounded-lg border border-stroke bg-white px-4 font-inter text-sm text-dark outline-none transition focus:border-primary focus:ring-1 focus:ring-primary";
  const labelClass = "block font-inter text-sm font-semibold text-dark-2 mb-1";
  const errorClass = "mt-1 font-inter text-xs text-red-400";

  /* ── Pantalla de éxito ── */
  if (done && enrollmentResult) {
    const dateCard = schedule.flatMap((w) => w.dates).find((d) => d.iso === enrollmentResult.fechaISO);
    return (
      <>
        <div className="mx-auto w-full max-w-[600px]">
          <div className="rounded-[26px] bg-white shadow-[0_40px_90px_-40px_rgba(80,30,76,0.5),0_8px_24px_rgba(0,0,0,0.06)] border border-[#ece4ec] overflow-hidden">
            <div className="bg-gradient-to-b from-[#c87dc5] via-primary to-[#7f3d7c] px-8 py-6 text-center">
              <div className="mx-auto mb-3 flex h-[74px] w-[74px] items-center justify-center rounded-full bg-white/20 text-white shadow-lg">
                <CheckIcon />
              </div>
              <h2 className="font-satoshi text-2xl font-bold text-white">¡Inscripción lista! 🎉</h2>
              <p className="mt-1 font-inter text-sm text-white/80">
                Enviamos la confirmación a <strong>{enrollmentResult.email}</strong>
              </p>
            </div>
            <div className="p-6 sm:p-8">
              <div className="mb-6 rounded-10 border border-primary/20 bg-primary/5 p-4">
                {[
                  { k: "Clase", v: isMami ? "Mami Swimmer" : "Bebé" },
                  { k: isMami ? "Nombre" : "Bebé", v: enrollmentResult.nombre },
                  ...(!isMami && ageMonths !== null ? [{ k: "Edad", v: `${ageMonths} meses` }] : []),
                  ...(!isMami && enrollmentResult.relacion ? [{ k: "Inscribe", v: enrollmentResult.relacion }] : []),
                  { k: "Fecha", v: dateCard?.label ?? enrollmentResult.fechaISO },
                  { k: "Hora", v: `${enrollmentResult.hora} hrs` },
                  { k: "Sede", v: SEDE },
                ].map(({ k, v }) => (
                  <div key={k} className="flex justify-between gap-3 border-b border-dashed border-primary/20 py-2.5 last:border-0">
                    <span className="font-inter text-sm font-semibold text-primary/70">{k}</span>
                    <span className="font-inter text-sm font-bold text-dark text-right">{v}</span>
                  </div>
                ))}
              </div>
              <p className="mb-6 rounded-lg bg-primary/10 py-2.5 px-4 text-center font-inter text-sm font-semibold text-primary">
                ⏳ Válida hasta el <strong>30 de junio de 2026</strong>
              </p>
              <Link href="/" className="block w-full rounded-full bg-primary py-3.5 text-center font-inter font-semibold text-white hover:opacity-90">
                Volver al inicio
              </Link>
            </div>
          </div>
        </div>
        <WhatsAppSection />
      </>
    );
  }

  /* ── Formulario ── */
  return (
    <>
      <div className="mx-auto w-full max-w-[1000px] mt-[70px]">
        <div className="flex w-full overflow-hidden rounded-none sm:rounded-[26px] bg-white shadow-[0_40px_90px_-40px_rgba(80,30,76,0.5),0_8px_24px_rgba(0,0,0,0.06)] border-y sm:border border-[#ece4ec] flex-col lg:flex-row">

          {/* Sidebar izquierdo */}
          <aside
            className="flex flex-none flex-col p-6 text-white lg:w-[38%] lg:p-9"
            style={{ background: "linear-gradient(90deg,#7e7e7e,#3b3b3b)" }}
          >
            {/* TOP: título + bullets — alineado arriba */}
            <div>
              <h2 className="mb-5 font-satoshi text-2xl font-bold leading-tight lg:text-3xl">
                Agenda tu clase gratis<br />de la Expobebé 🎉
              </h2>
              <ul className="hidden lg:flex lg:flex-col space-y-3">
                {[
                  ["📍", "Sede Peñalolén"],
                  ["⏳", "Válida hasta el 30 de junio de 2026"],
                ].map(([icon, text]) => (
                  <li key={text} className="flex items-start gap-3 font-inter text-sm text-white/90">
                    <span className="mt-0.5 text-base">{icon}</span>
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CENTRO: pasos — centrados verticalmente */}
            <div className="hidden lg:flex flex-1 items-center">
              <section className="w-full">
                <h3 className="mb-6 font-satoshi text-xl font-bold text-white -tracking-[1px]">
                  El proceso es fácil y rápido:
                </h3>
                <div className="relative">
                  <div className="absolute left-[18px] top-0 h-52 w-px bg-gradient-to-b from-blue-400 to-blue-600" />
                  <div className="space-y-6">
                    {[
                      {
                        n: "1",
                        title: "Ingresa tus datos y completa el formulario",
                        desc: "Completa todos los campos con tu correo, nombre del bebé, fecha de nacimiento y quién inscribe.",
                      },
                      {
                        n: "2",
                        title: "Selección de fecha y horario",
                        desc: "Elige el día y hora que mejor se adapten a tu agenda entre los cupos disponibles.",
                      },
                      {
                        n: "3",
                        title: "Confirmación de tu inscripción",
                        desc: "Nuestro equipo revisará tu caso y te contactará para confirmar. ¡Nos vemos en el agua!",
                      },
                    ].map((step) => (
                      <div key={step.n} className="relative flex items-start">
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white shadow-lg border-2 border-white/40">
                          {step.n}
                        </div>
                        <div className="ml-4 pt-1">
                          <h4 className="font-satoshi text-sm font-bold text-white">{step.title}</h4>
                          <p className="mt-1 font-inter text-xs text-white/75 leading-relaxed">{step.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            </div>
          </aside>

          {/* Main */}
          <main className="flex-1 p-6 sm:p-8 lg:p-9">
            {/* Header + progress */}
            <div className="mb-3 flex items-baseline justify-between">
              <h1 className="font-satoshi text-2xl font-bold text-[#7f3d7c] lg:text-3xl">Agenda tu clase</h1>
              <span className="font-inter text-sm font-bold text-dark-4">{progress}%</span>
            </div>
            <div className="mb-5 h-[7px] overflow-hidden rounded-full bg-primary/10">
              <div className="h-full rounded-full bg-gradient-to-r from-primary to-[#c87dc5] transition-all duration-500" style={{ width: `${progress}%` }} />
            </div>

            {/* Segmented: Bebé / Mami */}
            <div className="mb-6 flex gap-1.5 rounded-[14px] bg-primary/10 p-1.5 max-w-xs">
              {(["bebe", "mami"] as const).map((t) => (
                <button
                  key={t}
                  type="button"
                  onClick={() => changeTipo(t)}
                  className={`flex-1 rounded-[10px] py-2.5 font-inter text-sm font-bold transition ${
                    tipo === t ? "bg-white text-[#7f3d7c] shadow-md" : "text-primary/70 hover:text-primary"
                  }`}
                >
                  {t === "bebe" ? "🐣 Bebé" : "🤰 Mami Swimmer"}
                </button>
              ))}
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-0">
              {/* ── Sección 1: Datos ── */}
              <section className="border-t border-stroke pt-5 mt-2">
                <h3 className="mb-4 flex items-center gap-2.5 font-satoshi text-lg font-bold text-[#7f3d7c]">
                  <span className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full font-inter text-sm font-bold ${datosOk ? "bg-green-600 text-white" : "bg-primary/15 text-primary"}`}>
                    {datosOk ? <CheckIcon /> : "1"}
                  </span>
                  Tus datos
                </h3>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {/* Email */}
                  <div>
                    <label htmlFor="email" className={labelClass}>Correo</label>
                    <input {...register("email")} type="email" id="email" placeholder="nombre@correo.cl" className={inputClass} />
                    {errors.email && <p className={errorClass}>{errors.email.message}</p>}
                  </div>

                  {/* Nombre */}
                  <div>
                    <label htmlFor="nombre" className={labelClass}>{isMami ? "Tu nombre" : "Nombre del bebé"}</label>
                    <input {...register("nombre")} type="text" id="nombre" placeholder={isMami ? "Ej. Daniela" : "Ej. Martina"} className={inputClass} />
                    {errors.nombre && <p className={errorClass}>{errors.nombre.message}</p>}
                  </div>

                  {/* Fecha nacimiento (solo bebé) */}
                  {!isMami && (
                    <div>
                      <label htmlFor="fechaNacimiento" className={labelClass}>Fecha de nacimiento</label>
                      <input
                        {...register("fechaNacimiento")}
                        type="date"
                        id="fechaNacimiento"
                        className={`${inputClass} ${fechaNacimiento && !ageOk ? "border-red-300 bg-red-50" : ""}`}
                      />
                      {fechaNacimiento && (
                        <p className={`mt-1 font-inter text-xs font-semibold ${ageOk ? "text-green-700" : "text-red-400"}`}>{ageMsg}</p>
                      )}
                      {errors.fechaNacimiento && !fechaNacimiento && <p className={errorClass}>{errors.fechaNacimiento.message}</p>}
                    </div>
                  )}

                  {/* Relación (solo bebé) */}
                  {!isMami && (
                    <div>
                      <label className={labelClass}>¿Quién inscribe?</label>
                      <input type="hidden" {...register("relacion")} />
                      <div className="mt-1 flex flex-wrap gap-2">
                        {RELACIONES.map((r) => (
                          <button
                            key={r}
                            type="button"
                            onClick={() => setValue("relacion", r, { shouldValidate: true })}
                            className={`rounded-full border px-4 py-1.5 font-inter text-sm font-semibold transition ${
                              relacion === r ? "border-primary bg-primary text-white" : "border-stroke text-dark-2 hover:border-primary/60"
                            }`}
                          >
                            {r}
                          </button>
                        ))}
                      </div>
                      {errors.relacion && <p className={errorClass}>{errors.relacion.message}</p>}
                    </div>
                  )}
                </div>
              </section>

              {/* ── Sección 2: Fecha y horario ── */}
              <section className="border-t border-stroke pt-5 mt-6">
                <h3 className="mb-4 flex items-center gap-2.5 font-satoshi text-lg font-bold text-[#7f3d7c]">
                  <span className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full font-inter text-sm font-bold ${horarioOk ? "bg-green-600 text-white" : "bg-primary/15 text-primary"}`}>
                    {horarioOk ? <CheckIcon /> : "2"}
                  </span>
                  Fecha y horario
                </h3>

                <input type="hidden" {...register("fechaISO")} />
                <input type="hidden" {...register("hora")} />

                {loadingSchedule ? (
                  <div className="flex items-center gap-2 font-inter text-sm text-body">
                    <span className="animate-spin">⏳</span> Cargando horarios...
                  </div>
                ) : !selectedDate ? (
                  <>
                    <p className="mb-4 inline-block rounded-[10px] bg-primary/8 px-3 py-2 font-inter text-xs font-bold text-primary">
                      📅 Junio 2026 · {SEDE}
                    </p>
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      {schedule.map((wk) => (
                        <div key={wk.week}>
                          <p className="mb-2 font-inter text-[11px] font-bold uppercase tracking-wider text-dark-4">
                            Semana {wk.week}
                          </p>
                          <div className="grid grid-cols-3 gap-2">
                            {wk.dates.map((dt) => {
                              const full = dt.totalRem <= 0;
                              return (
                                <button
                                  key={dt.iso}
                                  type="button"
                                  disabled={full}
                                  onClick={() => pickDate(dt)}
                                  className={`flex flex-col items-center gap-0.5 rounded-[14px] border px-1 py-2.5 transition ${
                                    full ? "cursor-not-allowed border-dashed border-stroke bg-neutral-1" : "border-stroke bg-white hover:border-primary/50"
                                  }`}
                                >
                                  <small className={`font-inter text-[10px] font-bold uppercase tracking-wide ${full ? "text-dark-5" : "text-primary"}`}>
                                    {DOW_SHORT[dt.dow]}
                                  </small>
                                  <strong className={`font-satoshi text-2xl font-bold ${full ? "text-dark-5 line-through" : "text-dark"}`}>
                                    {dt.d}
                                  </strong>
                                  <span className={`font-inter text-[9px] font-bold ${full ? "text-dark-5" : "text-green-700"}`}>
                                    {full ? "Sin cupos" : `${dt.totalRem} cupos`}
                                  </span>
                                </button>
                              );
                            })}
                          </div>
                        </div>
                      ))}
                    </div>
                    {errors.fechaISO && <p className={errorClass}>{errors.fechaISO.message}</p>}
                  </>
                ) : (
                  <>
                    <button
                      type="button"
                      onClick={() => { setSelectedDate(null); setValue("fechaISO", ""); setValue("hora", ""); }}
                      className="mb-4 inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-4 py-2 font-inter text-sm font-bold text-primary transition hover:bg-primary/20"
                    >
                      <ArrowLeftIcon /> Cambiar fecha
                    </button>
                    <p className="mb-1 font-satoshi text-lg font-bold text-[#7f3d7c]">{selectedDate.label}</p>
                    <p className="mb-3 font-inter text-xs text-dark-4">Elige tu horario · 7 cupos por clase</p>
                    <div className="grid grid-cols-3 gap-2 sm:grid-cols-4">
                      {selectedDate.slots.map((s) => {
                        const full = s.rem <= 0;
                        const sel = hora === s.t;
                        const low = !full && s.rem <= 2;
                        return (
                          <button
                            key={s.t}
                            type="button"
                            disabled={full}
                            onClick={() => pickSlot(s)}
                            className={`flex flex-col items-center gap-0.5 rounded-[11px] border px-2 py-2.5 transition ${
                              full ? "cursor-not-allowed border-dashed border-stroke bg-neutral-1"
                              : sel ? "border-primary bg-primary/8 shadow-[0_0_0_3px_rgba(174,94,171,0.13)]"
                              : "border-stroke bg-white hover:border-primary/50"
                            }`}
                          >
                            <span className={`font-satoshi text-sm font-bold ${full ? "text-dark-5 line-through" : "text-dark"}`}>{s.t}</span>
                            <span className={`font-inter text-[9px] font-bold ${full ? "text-dark-5" : low ? "text-amber-700" : "text-green-700"}`}>
                              {full ? "Sin cupos" : s.rem === 1 ? "1 cupo" : `${s.rem} cupos`}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                    {errors.hora && <p className={errorClass}>{errors.hora.message}</p>}
                  </>
                )}
              </section>

              {/* ── Footer: confirmar ── */}
              <div className="mt-6 border-t border-stroke pt-5">
                {(!datosOk || !horarioOk) && (
                  <p className="mb-3 rounded-lg bg-primary/8 px-3 py-2 text-center font-inter text-xs font-semibold text-primary">
                    {!datosOk ? 'Completa "Tus datos" para continuar' : "Elige una fecha y un horario"}
                  </p>
                )}
                <button
                  type="submit"
                  disabled={!datosOk || !horarioOk || isSubmitting}
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-primary py-3.5 font-inter font-semibold text-white shadow-[0_8px_18px_-6px_rgba(174,94,171,0.6)] transition hover:opacity-90 disabled:cursor-not-allowed disabled:bg-dark-5 disabled:shadow-none"
                >
                  {isSubmitting ? "Enviando…" : <><CheckIcon /> Confirmar inscripción</>}
                </button>

                {/* Mapa */}
                <p className="mt-6 text-center font-inter text-sm text-body">
                  Clases válidas para sede Peñalolén, Camino de la tierra s/n, Peñalolén
                </p>
                <div className="mt-2 w-full overflow-hidden rounded-10">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3327.5654133954226!2d-70.53001542277515!3d-33.48666367337539!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662d1a8bf1c8523%3A0x6d1c5a2d62742540!2sMiniswimmer!5e0!3m2!1ses-419!2scl!4v1780424090586!5m2!1ses-419!2scl"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </form>
          </main>
        </div>
      </div>
      <WhatsAppSection />
    </>
  );
};

export default ExpoRegistration;
