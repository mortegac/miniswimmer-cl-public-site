"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";

interface FormFields {
  nombre: string;
  email: string;
  telefono: string;
  instagram: string;
  mensaje: string;
  checkInstagram: boolean;
  checkPublicacion: boolean;
}

interface FormErrors {
  nombre?: string;
  email?: string;
  telefono?: string;
  instagram?: string;
  mensaje?: string;
  checkInstagram?: string;
  checkPublicacion?: string;
}

const initialFields: FormFields = {
  nombre: "",
  email: "",
  telefono: "",
  instagram: "",
  mensaje: "",
  checkInstagram: false,
  checkPublicacion: false,
};

function validateFields(fields: FormFields): FormErrors {
  const errors: FormErrors = {};

  if (!fields.nombre.trim()) {
    errors.nombre = "El nombre es requerido";
  }

  if (!fields.email.trim()) {
    errors.email = "El email es requerido";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) {
    errors.email = "El email no es válido";
  }

  if (!fields.telefono.trim()) {
    errors.telefono = "El teléfono es requerido";
  }

  if (!fields.instagram.trim()) {
    errors.instagram = "El usuario de Instagram es requerido";
  }

  if (!fields.mensaje.trim()) {
    errors.mensaje = "El mensaje es requerido";
  } else if (fields.mensaje.trim().length < 50) {
    errors.mensaje = "El mensaje debe tener al menos 50 caracteres";
  } else if (fields.mensaje.trim().length > 500) {
    errors.mensaje = "El mensaje no puede superar los 500 caracteres";
  }

  if (!fields.checkInstagram) {
    errors.checkInstagram = "Debes seguir a @miniswimmer.chile para participar";
  }

  if (!fields.checkPublicacion) {
    errors.checkPublicacion =
      "Debes etiquetar a @miniswimmer.chile en tu publicación";
  }

  return errors;
}

const inputBase =
  "mt-1 block w-full rounded-lg border border-stroke px-4 py-3 text-sm text-dark outline-none transition-all duration-200 focus:border-primary focus:ring-2 focus:ring-primary/20 dark:border-stroke-dark dark:bg-gray-dark dark:text-white";

const labelBase =
  "block text-sm font-inter font-medium text-dark dark:text-white mb-1";

const errorBase = "mt-1 text-xs text-red-500";

export default function GiveawayForm() {
  const [fields, setFields] = useState<FormFields>(initialFields);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const target = e.target as HTMLInputElement;
    const { name, value, type } = target;
    const checked = type === "checkbox" ? target.checked : undefined;

    setFields((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    // Clear error on change
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const validationErrors = validateFields(fields);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      const templateParams = {
        from_name: fields.nombre,
        from_email: fields.email,
        from_phone: fields.telefono,
        to_name: "Miniswimmer Sorteo ExpoBebé 2026",
        asunto: "Participación Sorteo ExpoBebé 2026",
        message: [
          `Instagram: ${fields.instagram}`,
          `¿Por qué merece ganar?: ${fields.mensaje}`,
          `Sigue a @miniswimmer.chile: ${fields.checkInstagram ? "Sí" : "No"}`,
          `Etiquetó en publicación: ${fields.checkPublicacion ? "Sí" : "No"}`,
        ].join("\n"),
        html_title:
          "<h2>Nueva participación — Sorteo ExpoBebé 2026</h2><p>Alguien completó el formulario del sorteo de entradas.</p>",
        html_service: `<p><b>Instagram:</b> ${fields.instagram}</p><p><b>Mensaje:</b> ${fields.mensaje}</p>`,
      };

      await emailjs.send(
        "service_ucb8wga",
        "template_eedooa7",
        templateParams,
        "Csc41asZklkk5HTWk",
      );

      setSubmitted(true);
    } catch (error) {
      console.error("Error al enviar el formulario del sorteo:", error);
      setErrors({
        mensaje:
          "No pudimos enviar tu participación. Intenta de nuevo o escríbenos a welcome@miniswimmer.cl.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div className="rounded-10 bg-white px-8 py-10 shadow-features dark:bg-gray-dark text-center">
        <div className="mb-4 text-5xl">🎉</div>
        <h3 className="mb-3 font-satoshi text-2xl font-bold text-dark dark:text-white">
          ¡Gracias por participar!
        </h3>
        <p className="font-inter text-body dark:text-dark-4">
          Revisaremos tu publicación y anunciaremos los ganadores el{" "}
          <strong>23 de mayo de 2026</strong> por Instagram. ¡Buena suerte!
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-10 bg-white px-8 py-8 shadow-features dark:bg-gray-dark"
    >
      {/* Nombre */}
      <div className="mb-5">
        <label htmlFor="sorteo-nombre" className={labelBase}>
          Nombre completo <span className="text-red-500">*</span>
        </label>
        <input
          id="sorteo-nombre"
          name="nombre"
          type="text"
          autoComplete="name"
          value={fields.nombre}
          onChange={handleChange}
          className={inputBase}
          placeholder="Tu nombre completo"
        />
        {errors.nombre && <p className={errorBase}>{errors.nombre}</p>}
      </div>

      {/* Email */}
      <div className="mb-5">
        <label htmlFor="sorteo-email" className={labelBase}>
          Email <span className="text-red-500">*</span>
        </label>
        <input
          id="sorteo-email"
          name="email"
          type="email"
          autoComplete="email"
          value={fields.email}
          onChange={handleChange}
          className={inputBase}
          placeholder="tu@email.com"
        />
        {errors.email && <p className={errorBase}>{errors.email}</p>}
      </div>

      {/* Teléfono */}
      <div className="mb-5">
        <label htmlFor="sorteo-telefono" className={labelBase}>
          Teléfono WhatsApp <span className="text-red-500">*</span>
        </label>
        <input
          id="sorteo-telefono"
          name="telefono"
          type="tel"
          autoComplete="tel"
          value={fields.telefono}
          onChange={handleChange}
          className={inputBase}
          placeholder="+56 9 XXXX XXXX"
        />
        {errors.telefono && <p className={errorBase}>{errors.telefono}</p>}
      </div>

      {/* Instagram */}
      <div className="mb-5">
        <label htmlFor="sorteo-instagram" className={labelBase}>
          Usuario de Instagram <span className="text-red-500">*</span>
        </label>
        <input
          id="sorteo-instagram"
          name="instagram"
          type="text"
          autoComplete="username"
          value={fields.instagram}
          onChange={handleChange}
          className={inputBase}
          placeholder="@tu_usuario"
        />
        {errors.instagram && <p className={errorBase}>{errors.instagram}</p>}
      </div>

      {/* Mensaje */}
      <div className="mb-5">
        <label htmlFor="sorteo-mensaje" className={labelBase}>
          ¿Por qué mereces ganar las entradas?{" "}
          <span className="text-red-500">*</span>
        </label>
        <textarea
          id="sorteo-mensaje"
          name="mensaje"
          rows={4}
          value={fields.mensaje}
          onChange={handleChange}
          className={inputBase}
          placeholder="Cuéntanos en al menos 50 caracteres..."
          maxLength={500}
        />
        <p className="mt-1 text-right text-xs text-body dark:text-dark-4">
          {fields.mensaje.length}/500
        </p>
        {errors.mensaje && <p className={errorBase}>{errors.mensaje}</p>}
      </div>

      {/* Checkbox: siguió en Instagram */}
      <div className="mb-4">
        <label className="flex cursor-pointer items-start gap-3">
          <input
            name="checkInstagram"
            type="checkbox"
            checked={fields.checkInstagram}
            onChange={handleChange}
            className="mt-0.5 h-4 w-4 flex-shrink-0 accent-primary cursor-pointer"
          />
          <span className="font-inter text-sm text-dark dark:text-white">
            He seguido a{" "}
            <a
              href="https://www.instagram.com/miniswimmer.chile/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-primary underline underline-offset-2 hover:text-primary/80"
            >
              @miniswimmer.chile
            </a>{" "}
            en Instagram
          </span>
        </label>
        {errors.checkInstagram && (
          <p className={`${errorBase} ml-7`}>{errors.checkInstagram}</p>
        )}
      </div>

      {/* Checkbox: etiquetó en publicación */}
      <div className="mb-7">
        <label className="flex cursor-pointer items-start gap-3">
          <input
            name="checkPublicacion"
            type="checkbox"
            checked={fields.checkPublicacion}
            onChange={handleChange}
            className="mt-0.5 h-4 w-4 flex-shrink-0 accent-primary cursor-pointer"
          />
          <span className="font-inter text-sm text-dark dark:text-white">
            He etiquetado a{" "}
            <span className="font-semibold text-primary">
              @miniswimmer.chile
            </span>{" "}
            en mi publicación de historia o feed
          </span>
        </label>
        {errors.checkPublicacion && (
          <p className={`${errorBase} ml-7`}>{errors.checkPublicacion}</p>
        )}
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded-full bg-primary px-8 py-3 font-inter font-semibold text-white transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isSubmitting ? "Enviando..." : "Participar en el Sorteo"}
      </button>

      {/* Legal */}
      <p className="mt-4 text-center text-xs text-body dark:text-dark-4">
        Sorteo válido para residentes en Chile. Los ganadores serán contactados
        por email e Instagram. Miniswimmer se reserva el derecho de verificar
        que se cumplieron todos los requisitos.
      </p>
    </form>
  );
}
