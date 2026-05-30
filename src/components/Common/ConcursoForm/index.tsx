"use client";

import { useState } from "react";
import Link from "next/link";
import { useForm, type SubmitHandler, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import emailjs from "@emailjs/browser";
import confetti from "canvas-confetti";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import "react-phone-number-input/style.css";

const SEDES = [
  { id: "penalolen", nombre: "Peñalolén", direccion: "La Reserva, Peñalolén Alto" },
  { id: "la-reina", nombre: "La Reina", direccion: "Álvaro Casanova / Antupirén" },
  { id: "nunoa", nombre: "Ñuñoa", direccion: "Ñuñoa Oriente" },
  { id: "vitacura", nombre: "Vitacura", direccion: "Vitacura" },
  { id: "lo-barnechea", nombre: "Lo Barnechea", direccion: "Lo Barnechea" },
] as const;

const schema = yup
  .object({
    nombreApoderado: yup
      .string()
      .required("El nombre del apoderado es requerido"),
    email: yup
      .string()
      .email("Email inválido")
      .required("El email es requerido"),
    whatsapp: yup
      .string()
      .required("El WhatsApp es requerido")
      .test("phone", "Número de WhatsApp inválido", (val) => {
        if (!val) return false;
        try {
          return isValidPhoneNumber(val);
        } catch {
          return false;
        }
      }),
    comuna: yup.string().required("La comuna es requerida"),
    embarazada: yup
      .string()
      .oneOf(["si", "no"] as const)
      .required("Este campo es requerido"),
    mesesEmbarazo: yup.string().when("embarazada", {
      is: "si",
      then: (s) => s.required("Los meses de embarazo son requeridos"),
      otherwise: (s) => s.optional(),
    }),
    edadAlumno: yup.string().required("La edad del alumno es requerida"),
    sede: yup.string().required("La sede de preferencia es requerida"),
  })
  .required();

type FormData = yup.InferType<typeof schema>;

const INPUT_CLASS =
  "mt-1 block w-full h-[48px] border border-stroke rounded-lg px-4 font-inter text-sm text-dark bg-white transition-all duration-200 outline-none focus:border-primary focus:ring-1 focus:ring-primary dark:border-stroke-dark dark:bg-gray-dark dark:text-white";

const LABEL_CLASS = "block font-inter text-sm font-medium text-dark-2 dark:text-dark-4";

const ERROR_CLASS = "mt-1 font-inter text-xs text-red-300";

interface SubmitState {
  sent: boolean;
  isFailure: boolean;
  title: string;
  text: string;
}

const INITIAL_STATE: SubmitState = {
  sent: false,
  isFailure: false,
  title: "",
  text: "",
};

const ConcursoForm = () => {
  const [submitState, setSubmitState] = useState<SubmitState>(INITIAL_STATE);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    reset,
    setValue,
    control,
    formState: { errors },
  } = useForm<FormData>({
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    resolver: yupResolver(schema) as any,
  });

  const embarazada = watch("embarazada");
  const sede = watch("sede");

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    setIsSubmitting(true);
    setSubmitState({
      sent: true,
      isFailure: false,
      title: "Conectando al satélite, por favor espere un momento ⌛",
      text: "Estamos enviando tu inscripción.",
    });

    const templateParams = {
      from_name: data.nombreApoderado,
      from_phone: data.whatsapp,
      from_email: data.email,
      message: `Comuna: ${data.comuna} | Embarazada: ${data.embarazada}${data.embarazada === "si" ? ` (${data.mesesEmbarazo} meses)` : ""} | Edad alumno: ${data.edadAlumno}`,
      to_name: "Miniswimmer concursos",
      asunto: "Te ganaste una clase gratis",
      html_title:
        "<h2>Felicitaciones, ganaste una clase gratis</h2><p>Nuestro equipo te contactará lo antes posible para agendar tu clase.</p>",
      html_service: `<p><b>Clase gratis :</b> ${data.sede}</p>`,
    };

    try {
      await emailjs.send(
        "service_ucb8wga",
        "template_eedooa7",
        templateParams,
        "Csc41asZklkk5HTWk",
      );

      reset();
      confetti({
        particleCount: 200,
        spread: 120,
        origin: { y: 0.6 },
        colors: ["#AE5EAB", "#ffffff", "#1C274C", "#fca5a5"],
      });
      setSubmitState({
        sent: true,
        isFailure: false,
        title: "¡Tu inscripción fue recibida! 🎉",
        text: "Nos pondremos en contacto contigo lo antes posible.",
      });
    } catch (error) {
      console.error("Error al enviar el formulario del concurso:", error);
      setSubmitState({
        sent: true,
        isFailure: true,
        title: "No se pudo enviar el mensaje 😭",
        text: "Puedes enviarnos un mensaje a welcome@miniswimmer.cl.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="concurso-form"
      className="relative z-1 overflow-hidden bg-gradient-to-br from-dark to-dark-2 py-8 sm:py-12 lg:py-17.5 xl:py-22.5"
    >
      <div className="relative z-1 mx-auto w-full max-w-[1170px] px-4 sm:px-6 lg:px-8 xl:px-0">
        <div className="flex justify-center">
          <div className="w-full max-w-[640px] rounded-10 bg-white p-6 shadow-features sm:p-10 dark:bg-gray-dark">
            {submitState.sent ? (
              <>
                <h4 className="mb-4 font-satoshi text-2xl font-bold leading-tight text-dark sm:mb-5 sm:text-3xl dark:text-white">
                  {submitState.title}
                </h4>
                <p className="mb-6 font-inter text-base leading-6 text-body sm:mb-8 dark:text-dark-4">
                  {submitState.text}
                </p>
                <Link
                  href="/"
                  passHref
                  prefetch
                  rel="noopener noreferrer nofollow"
                  className="inline-flex items-center gap-3 rounded-full bg-primary px-8 py-3.5 font-inter font-semibold text-white hover:opacity-90"
                >
                  Volver al inicio
                </Link>
              </>
            ) : (
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="w-full space-y-6"
              >
                {/* Nombre del apoderado */}
                <div>
                  <label htmlFor="nombreApoderado" className={LABEL_CLASS}>
                    Nombre del apoderado
                  </label>
                  <input
                    {...register("nombreApoderado")}
                    type="text"
                    id="nombreApoderado"
                    placeholder="María González"
                    className={INPUT_CLASS}
                  />
                  {errors.nombreApoderado && (
                    <p className={ERROR_CLASS}>
                      {errors.nombreApoderado.message}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className={LABEL_CLASS}>
                    Email
                  </label>
                  <input
                    {...register("email")}
                    type="email"
                    id="email"
                    placeholder="maria@ejemplo.cl"
                    className={INPUT_CLASS}
                  />
                  {errors.email && (
                    <p className={ERROR_CLASS}>{errors.email.message}</p>
                  )}
                </div>

                {/* WhatsApp — react-phone-number-input */}
                <div>
                  <label className={LABEL_CLASS}>WhatsApp</label>
                  <div className="mt-1 flex h-[48px] items-center gap-2 rounded-lg border border-stroke px-3 transition-all duration-200 focus-within:border-primary focus-within:ring-1 focus-within:ring-primary dark:border-stroke-dark dark:bg-gray-dark">
                    <Controller
                      name="whatsapp"
                      control={control}
                      render={({ field }) => (
                        <PhoneInput
                          international
                          defaultCountry="CL"
                          value={field.value ?? ""}
                          onChange={(val) => field.onChange(val ?? "")}
                          className="flex w-full items-center gap-2"
                        />
                      )}
                    />
                  </div>
                  {errors.whatsapp && (
                    <p className={ERROR_CLASS}>{errors.whatsapp.message}</p>
                  )}
                </div>

                {/* Comuna */}
                <div>
                  <label htmlFor="comuna" className={LABEL_CLASS}>
                    Comuna donde vive
                  </label>
                  <input
                    {...register("comuna")}
                    type="text"
                    id="comuna"
                    placeholder="Ej: Providencia"
                    className={INPUT_CLASS}
                  />
                  {errors.comuna && (
                    <p className={ERROR_CLASS}>{errors.comuna.message}</p>
                  )}
                </div>

                {/* Edad del alumno */}
                <div>
                  <label htmlFor="edadAlumno" className={LABEL_CLASS}>
                    Edad del alumno
                  </label>
                  <input
                    {...register("edadAlumno")}
                    type="text"
                    id="edadAlumno"
                    placeholder="Ej: 3 años"
                    className={INPUT_CLASS}
                  />
                  {errors.edadAlumno && (
                    <p className={ERROR_CLASS}>{errors.edadAlumno.message}</p>
                  )}
                </div>

                {/* ¿Estás embarazada? — botones SI/NO */}
                <div>
                  <label className={LABEL_CLASS}>¿Estás embarazada?</label>
                  <input type="hidden" {...register("embarazada")} />
                  <div className="mt-2 flex gap-3">
                    {(["no", "si"] as const).map((opcion) => (
                      <button
                        key={opcion}
                        type="button"
                        onClick={() =>
                          setValue("embarazada", opcion, {
                            shouldValidate: true,
                          })
                        }
                        className={`flex-1 rounded-full border py-2.5 font-inter text-sm font-semibold transition-all duration-200 ${
                          embarazada === opcion
                            ? "border-primary bg-primary text-white"
                            : "border-stroke text-dark-2 hover:border-primary hover:text-primary dark:border-stroke-dark dark:text-dark-4"
                        }`}
                      >
                        {opcion === "si" ? "Sí" : "No"}
                      </button>
                    ))}
                  </div>
                  {errors.embarazada && (
                    <p className={ERROR_CLASS}>{errors.embarazada.message}</p>
                  )}
                </div>

                {/* Meses de embarazo — campo condicional */}
                {embarazada === "si" && (
                  <div>
                    <label htmlFor="mesesEmbarazo" className={LABEL_CLASS}>
                      ¿Cuántos meses de embarazo tienes?
                    </label>
                    <input
                      {...register("mesesEmbarazo")}
                      type="text"
                      id="mesesEmbarazo"
                      placeholder="Ej: 5"
                      className={INPUT_CLASS}
                    />
                    {errors.mesesEmbarazo && (
                      <p className={ERROR_CLASS}>
                        {errors.mesesEmbarazo.message}
                      </p>
                    )}
                  </div>
                )}

                {/* Sede de preferencia — botones con nombre + dirección */}
                <div>
                  <label className={LABEL_CLASS}>Sede de preferencia</label>
                  <input type="hidden" {...register("sede")} />
                  <div className="mt-2 grid grid-cols-1 gap-3 sm:grid-cols-2">
                    {SEDES.map((s) => (
                      <button
                        key={s.id}
                        type="button"
                        onClick={() =>
                          setValue("sede", s.nombre, { shouldValidate: true })
                        }
                        className={`flex flex-col items-start rounded-10 border px-4 py-3 text-left transition-all duration-200 ${
                          sede === s.nombre
                            ? "border-primary bg-primary/5 dark:bg-primary/10"
                            : "border-stroke hover:border-primary/60 dark:border-stroke-dark"
                        }`}
                      >
                        <span
                          className={`font-inter text-sm font-semibold ${
                            sede === s.nombre
                              ? "text-primary"
                              : "text-dark dark:text-white"
                          }`}
                        >
                          {s.nombre}
                        </span>
                        <span className="font-inter text-xs text-body dark:text-dark-4">
                          {s.direccion}
                        </span>
                      </button>
                    ))}
                  </div>
                  {errors.sede && (
                    <p className={ERROR_CLASS}>{errors.sede.message}</p>
                  )}
                </div>

                {/* Botón de envío */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full rounded-full bg-primary px-8 py-3.5 font-inter font-semibold text-white transition-opacity duration-200 hover:opacity-90 disabled:opacity-50"
                >
                  {isSubmitting ? "Enviando..." : "Inscribirme"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConcursoForm;
