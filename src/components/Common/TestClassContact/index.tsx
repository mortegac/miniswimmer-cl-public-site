'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import emailjs from '@emailjs/browser';

import SectionHeader from '@/components/Common/SectionHeader';

const schema = yup.object({
  nombre: yup.string().required('El nombre es requerido'),
  email: yup.string().email('Email inválido').required('El email es requerido'),
  phone: yup.string().required('El teléfono es requerido'),
  mensaje: yup.string().default('')
}).required();

type FormData = yup.InferType<typeof schema>;

const TestClassContact = (props:any) => {
  const [isSentEmail, setIsSentEmail] = useState({
    sentEmail: false,
    isFailure: false,
    title: "Página no encontrada 😭",
    text: "Parece que no podemos encontrar la página que estás buscando.",
  });
  
  // Nuevo estado para el slot seleccionado
  const [selectedSlot, setSelectedSlot] = useState<{
    slotId: string;
    date: string;
    name: string;
    email: string;
    phone: string;
  }>({
    slotId: "",
    date: "",
    name: "",
    email: "",
    phone: ""
  });
  
  const { pageTraslation } = props;
  const t = useTranslations(`${pageTraslation}.features_section`);

  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<FormData>({
    resolver: yupResolver(schema)
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setIsSentEmail({
      sentEmail: true,
      isFailure: false,
      title: "Conectando al satélite, por favor espere un momento ⌛",
      text: "Estamos enviando su solicitud.",
    });
    
    try {
      const templateParams = {
        from_name: data.nombre,
        from_phone: data.phone,
        message: "Necesito clases para la sede de Peñalolen",
        from_email: data.email,
        class: selectedSlot.slotId,
        to_name: 'Miniswimmer',
      };

      await emailjs.send(
        'service_ucb8wga', // Reemplaza con tu Service ID de EmailJS
        'template_3z2nv7b', // Reemplaza con tu Template ID de EmailJS
        templateParams,
        'Csc41asZklkk5HTWk' // Reemplaza con tu Public Key de EmailJS
      );

      reset();
      setIsSentEmail({
        sentEmail: true,
        isFailure: false,
        title: "Mensaje enviado 🎉",
        text: "Nos pondremos en contacto con usted lo antes posible.",
        // response: response || "",
      });
    } catch (error) {
      console.error('Error al enviar el email:', error);
      setIsSentEmail({
        sentEmail: true,
        isFailure: true,
        title: "No se pudo enviar el mensaje 😭",
        text: "Puedes enviarnos un mensaje a welcome@miniswimmer.cl.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Función para manejar la selección de slot
  const handleSlotSelection = (slot: string) => {
    setSelectedSlot(prev => ({
      ...prev,
      slotId: slot,
      // date: `${slot.date} ${slot.hour}`,
    }));
  };

  return (
    <section
      id='features'
      className='relative z-1 overflow-hidden bg-[linear-gradient(90deg,#7e7e7e_0%,#3b3b3b_100%)] py-8 sm:py-12 lg:py-17.5 xl:py-22.5'
    >  
    {/* <pre className='text-white'>{JSON.stringify(selectedSlot, null, 2)}</pre> */}
      <div className='relative z-1 mx-auto w-full max-w-[1170px] px-4 sm:px-6 lg:px-8 xl:px-0'>
        <div className='flex flex-col lg:flex-row justify-center items-start gap-8 lg:gap-12'>
          {/* Formulario - Responsive */}
          <div className='w-full lg:max-w-[600px] bg-white border border-[rgba(0,17,51,0.15)] rounded-[16px] sm:rounded-[20px] lg:rounded-[24px] p-6 sm:p-8 lg:p-[48px] flex flex-col justify-start items-start relative'>
            {isSentEmail.sentEmail ? (
              <>
                <h4 className='mb-4 sm:mb-5 font-satoshi font-bold text-slate-700 text-2xl sm:text-3xl lg:text-[32px] leading-tight sm:leading-10'>
                  {isSentEmail.title}
                </h4>
                <p className='font-satoshi text-slate-700 text-base sm:text-lg lg:text-[20px] mb-6 sm:mb-8 leading-6'> 
                  {isSentEmail.text}
                </p>

                <Link 
                  href={"/"}
                  passHref
                  prefetch
                  rel="noopener noreferrer nofollow" 
                  className='inline-flex items-center gap-3 sm:gap-4 rounded-full bg-black py-2 sm:py-3 pl-6 sm:pl-7.5 pr-2 font-satoshi font-medium text-white hover:bg-opacity-90 dark:bg-primary text-sm sm:text-base'
                >
                  {"Back to home"}
                </Link>
              </>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 sm:space-y-6 w-full">
                {/* Campo Nombre */}
                <div>
                  <label htmlFor="nombre" className="block text-base sm:text-lg font-light text-gray-700 dark:text-gray-300">
                    Nombre apoderado
                  </label>
                  <input
                    {...register('nombre')}
                    type="text"
                    id="nombre"
                    className="mt-2 sm:mt-1 mb-8 sm:mb-12 block w-full h-[44px] sm:h-[48px] border border-[rgba(0,17,51,0.15)] rounded-[6px] p-3 sm:p-[13px] text-[rgba(0,17,51,0.8)] font-normal text-sm sm:text-[14px] transition-all duration-400 outline-none shadow-none focus:border-primary focus:ring-primary dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  />
                  {errors.nombre && (
                    <p className="-mt-6 sm:-mt-10 text-xs sm:text-sm text-red-300">{errors.nombre.message}</p>
                  )}
                </div>

                {/* Campo Email */}
                <div>
                  <label htmlFor="email" className="block text-base sm:text-lg font-light text-gray-700 dark:text-gray-300">
                    Email apoderado
                  </label>
                  <input
                    {...register('email')}
                    type="email"
                    id="email"
                    className="mt-2 sm:mt-1 mb-8 sm:mb-12 block w-full h-[44px] sm:h-[48px] border border-[rgba(0,17,51,0.15)] rounded-[6px] p-3 sm:p-[13px] text-[rgba(0,17,51,0.8)] text-sm sm:text-[14px] transition-all duration-400 outline-none shadow-none focus:border-primary focus:ring-primary dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  />
                  {errors.email && (
                    <p className="-mt-6 sm:-mt-10 text-xs sm:text-sm text-red-300">{errors.email.message}</p>
                  )}
                </div>

                {/* Campo Teléfono */}
                <div>
                  <label htmlFor="phone" className="block text-base sm:text-lg font-light text-gray-700 dark:text-gray-300">
                    Teléfono apoderado
                  </label>
                  <input
                    {...register('phone')}
                    type="tel"
                    id="phone"
                    className="mt-2 sm:mt-1 mb-8 sm:mb-12 block w-full h-[44px] sm:h-[48px] border border-[rgba(0,17,51,0.15)] rounded-[6px] p-3 sm:p-[13px] text-[rgba(0,17,51,0.8)] text-sm sm:text-[14px] transition-all duration-400 outline-none shadow-none focus:border-primary focus:ring-primary dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  />
                  {errors.phone && (
                    <p className="-mt-6 sm:-mt-10 text-xs sm:text-sm text-red-300">{errors.phone.message}</p>
                  )}
                </div>

                {/* Campo oculto para mensaje */}
                <input
                  {...register('mensaje')}
                  type="hidden"
                  value={selectedSlot.slotId || ''}
                />

                {/* Selección de Fechas */}
                <div>
                  <label htmlFor="mensaje" className="block text-base sm:text-lg font-light text-gray-700 mb-10">
                    Seleccione el tipo de clase
                  </label>
                  <div id="availableDates" className="w-full">
                    {/* <h3 className="font-satoshi text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">
                      Fechas y Horarios Disponibles
                    </h3> */}
                    
                    {/* Slots con scroll responsive */}
                    <div id="slots" className="space-y-4 sm:space-y-6 pr-2">
                     
                        <div key={"bebes"} className="bg-white/10 rounded-lg p-0 sm:p-0 backdrop-blur-sm">
                          
                          {/* Grid responsive para los slots */}
                          <h4 className="text-lg sm:text-xl font-bold text-slate-500 mb-3 sm:mb-4 text-center">
                            BEBES y NINOS
                          </h4>
                          
                          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3">
                           
                          
                            {/* ${
                            selectedSlot.slotId === slot.id
                              ? 'bg-[#ae5eab] text-white border-[#ae5eab] shadow-xl scale-105'
                              : 'bg-white text-gray-800 border-gray-200 hover:border-blue-300 hover:shadow-xl hover:-translate-y-1'
                          }` */}
                              <button
                                key={`bebes-01`}
                                type="button"
                                className={`rounded-lg p-2 sm:p-3 shadow-lg transition-all duration-300 transform hover:-translate-y-1 border-2 
                              `}
                                onClick={() => handleSlotSelection("bebes")}
                              >
                                <div className="text-center">
                                  {/* ${selectedSlot.slotId === slot.id ? 'text-white' : 'text-blue-600'} */}
                                  <div className={`text-base sm:text-lg font-bold mb-1 
                                  `}>
                                  BEBES
                                  </div>
                                  {/* ${selectedSlot.slotId === slot.id ? 'text-slate-50' : 'text-gray-600'} */}
                                  <div className={`text-xs sm:text-sm leading-tight font-light 
                                  `}>
                                   Clases desde los 2 meses
                                  </div>
                                </div>
                              </button>
                           
                              <button
                                key={`toddler-01`}
                                type="button"
                                className={`rounded-lg p-2 sm:p-3 shadow-lg transition-all duration-300 transform hover:-translate-y-1 border-2 
                              `}
                              onClick={() => handleSlotSelection("toddler")}
                              >
                                <div className="text-center">
                                  {/* ${selectedSlot.slotId === slot.id ? 'text-white' : 'text-blue-600'} */}
                                  <div className={`text-base sm:text-lg font-bold mb-1 
                                  `}>
                                  TODDLER
                                  </div>
                                  {/* ${selectedSlot.slotId === slot.id ? 'text-slate-50' : 'text-gray-600'} */}
                                  <div className={`text-xs sm:text-sm leading-tight font-light 
                                  `}>
                                   Niños entre 2 a 3 años
                                  </div>
                                </div>
                              </button>
                              
                              <button
                                key={`niños-01`}
                                type="button"
                                className={`rounded-lg p-2 sm:p-3 shadow-lg transition-all duration-300 transform hover:-translate-y-1 border-2 
                              `}
                                onClick={() => handleSlotSelection("niños")}
                              >
                                <div className="text-center">
                                  {/* ${selectedSlot.slotId === slot.id ? 'text-white' : 'text-blue-600'} */}
                                  <div className={`text-base sm:text-lg font-bold mb-1 
                                  `}>
                                  NIÑOS /AS
                                  </div>
                                  {/* ${selectedSlot.slotId === slot.id ? 'text-slate-50' : 'text-gray-600'} */}
                                  <div className={`text-xs sm:text-sm leading-tight font-light 
                                  `}>
                                   Clases para niños/as de 4 a 6 años
                                  </div>
                                </div>
                              </button>
                              
                              
                              <button
                                key={`niños-02`}
                                type="button"
                                className={`rounded-lg p-2 sm:p-3 shadow-lg transition-all duration-300 transform hover:-translate-y-1 border-2 
                              `}
                                onClick={() => handleSlotSelection("niños6omas")}
                              >
                                <div className="text-center">
                                  {/* ${selectedSlot.slotId === slot.id ? 'text-white' : 'text-blue-600'} */}
                                  <div className={`text-base sm:text-lg font-bold mb-1 
                                  `}>
                                  NIÑOS /AS
                                  </div>
                                  {/* ${selectedSlot.slotId === slot.id ? 'text-slate-50' : 'text-gray-600'} */}
                                  <div className={`text-xs sm:text-sm leading-tight font-light 
                                  `}>
                                   Clases para niños/as 6 o más años
                                  </div>
                                </div>
                              </button>
                              
                              <button
                                key={`tea-01`}
                                type="button"
                                className={`rounded-lg p-2 sm:p-3 shadow-lg transition-all duration-300 transform hover:-translate-y-1 border-2 
                              `}
                                onClick={() => handleSlotSelection("tea")}
                              >
                                <div className="text-center">
                                  {/* ${selectedSlot.slotId === slot.id ? 'text-white' : 'text-blue-600'} */}
                                  <div className={`text-base sm:text-lg font-bold mb-1 
                                  `}>
                                  TEA SWIMMER
                                  </div>
                                  {/* ${selectedSlot.slotId === slot.id ? 'text-slate-50' : 'text-gray-600'} */}
                                  <div className={`text-xs sm:text-sm leading-tight font-light 
                                  `}>
                                   Clases para niños neurodivergentes
                                  </div>
                                </div>
                              </button>
                              
                          </div>
                          
                          <h4 className="text-lg sm:text-xl font-bold text-slate-500 mb-3 sm:mb-4 text-center mt-10">
                            ADULTOS
                          </h4>
                          
                          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3">
                           
                          
                            {/* ${
                            selectedSlot.slotId === slot.id
                              ? 'bg-[#ae5eab] text-white border-[#ae5eab] shadow-xl scale-105'
                              : 'bg-white text-gray-800 border-gray-200 hover:border-blue-300 hover:shadow-xl hover:-translate-y-1'
                          }` */}
                              <button
                                key={`mamiswimmer-01`}
                                type="button"
                                className={`rounded-lg p-2 sm:p-3 shadow-lg transition-all duration-300 transform hover:-translate-y-1 border-2 
                              `}
                                onClick={() => handleSlotSelection("mamiswimmer")}
                              >
                                <div className="text-center">
                                  {/* ${selectedSlot.slotId === slot.id ? 'text-white' : 'text-blue-600'} */}
                                  <div className={`text-base sm:text-lg font-bold mb-1 
                                  `}>
                                  MAMI SWIMMER
                                  </div>
                                  {/* ${selectedSlot.slotId === slot.id ? 'text-slate-50' : 'text-gray-600'} */}
                                  <div className={`text-xs sm:text-sm leading-tight font-light 
                                  `}>
                                   Hidrogimnasia pre y post natal
                                  </div>
                                </div>
                              </button>
                           
                              <button
                                key={`hidro-01`}
                                type="button"
                                className={`rounded-lg p-2 sm:p-3 shadow-lg transition-all duration-300 transform hover:-translate-y-1 border-2 
                              `}
                                onClick={() => handleSlotSelection("hidroswimmer")}
                              >
                                <div className="text-center">
                                  {/* ${selectedSlot.slotId === slot.id ? 'text-white' : 'text-blue-600'} */}
                                  <div className={`text-base sm:text-lg font-bold mb-1 
                                  `}>
                                  HIDRO SWIMMER
                                  </div>
                                  {/* ${selectedSlot.slotId === slot.id ? 'text-slate-50' : 'text-gray-600'} */}
                                  <div className={`text-xs sm:text-sm leading-tight font-light 
                                  `}>
                                   Gimnasia acuática
                                  </div>
                                </div>
                              </button>
                              
                              <button
                                key={`bigswimmer-01`}
                                type="button"
                                className={`rounded-lg p-2 sm:p-3 shadow-lg transition-all duration-300 transform hover:-translate-y-1 border-2 
                              `}
                                onClick={() => handleSlotSelection("bigswimmer")}
                              >
                                <div className="text-center">
                                  {/* ${selectedSlot.slotId === slot.id ? 'text-white' : 'text-blue-600'} */}
                                  <div className={`text-base sm:text-lg font-bold mb-1 
                                  `}>
                                  BIG SWIMMER
                                  </div>
                                  {/* ${selectedSlot.slotId === slot.id ? 'text-slate-50' : 'text-gray-600'} */}
                                  <div className={`text-xs sm:text-sm leading-tight font-light 
                                  `}>
                                   Natación adultos, nivel inicial
                                  </div>
                                </div>
                              </button>
                              
                              
                              <button
                                key={`senior-01`}
                                type="button"
                                className={`rounded-lg p-2 sm:p-3 shadow-lg transition-all duration-300 transform hover:-translate-y-1 border-2 
                              `}
                                onClick={() => handleSlotSelection("seniorswimmer")}
                              >
                                <div className="text-center">
                                  {/* ${selectedSlot.slotId === slot.id ? 'text-white' : 'text-blue-600'} */}
                                  <div className={`text-base sm:text-lg font-bold mb-1 
                                  `}>
                                  SENIOR SWIMMER
                                  </div>
                                  {/* ${selectedSlot.slotId === slot.id ? 'text-slate-50' : 'text-gray-600'} */}
                                  <div className={`text-xs sm:text-sm leading-tight font-light 
                                  `}>
                                   Natación para adulto mayor
                                  </div>
                                </div>
                              </button>

                          </div>
                          
                        </div>
                     
                    </div>
                    
                   
                  </div>
                </div>

                {/* Slot seleccionado */}
                {selectedSlot.slotId && (
                  <div className="mt-4 p-3 sm:p-4 border border-[#ae5eab] rounded-lg">
                    <p className="text-[#ae5eab] font-medium text-sm sm:text-base">
                      Clase seleccionada: <strong className=' uppercase'>{selectedSlot.slotId}</strong>
                    </p>
                    {/* <p className="text-white text-xs sm:text-sm">
                      ID: {selectedSlot.slotId}
                    </p> */}
                  </div>
                )}

                {/* Botón enviar */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full rounded-md bg-primary px-4 py-3 sm:py-2 text-white hover:bg-primary/95 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:opacity-50 text-sm sm:text-base font-medium"
                >
                  {isSubmitting ? 'Enviando...' : 'Enviar'}
                </button>
              </form>
            )}
          </div>

          {/* Sección de pasos - Responsive */}
          <div className='w-full lg:flex-1 p-4 sm:p-6 lg:p-[48px] flex flex-col justify-start items-start relative'>
            <div className='w-full px-2 sm:px-4 lg:px-0 flex flex-col justify-start items-start'>
              {/* Steps responsive */}
              <section id="steps" className="text-left w-full">
                <h3 className='mb-6 sm:mb-8 font-satoshi text-2xl sm:text-3xl -tracking-[1.6px] text-white lg:text-heading-4 xl:text-heading-2'>
                  El proceso es fácil y rápido:
                </h3>
                
                <div className="relative">
                  {/* Línea de tiempo vertical - responsive */}
                  <div className="absolute left-6 sm:left-8 top-0 h-64 sm:h-72 lg:h-80 w-0.5 sm:w-0.5 bg-gradient-to-b from-blue-400 to-blue-600"></div>
                  
                  {/* Steps con espaciado responsive */}
                  <div className="space-y-6 sm:space-y-8">
                    {/* Step 1 */}
                    <div className="relative flex items-start">
                      <div className="flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 bg-[#ae5eab] rounded-full flex items-center justify-center text-white text-lg sm:text-xl font-bold shadow-lg border-4 border-white">
                        1
                      </div>
                      <div className="ml-4 sm:ml-6 pt-1 sm:pt-2">
                        <h4 className="text-lg sm:text-xl text-white mb-2">Ingresa tus datos</h4>
                        <p className="text-white/90 leading-relaxed text-sm sm:text-base">
                          Completa un breve formulario con la información necesaria para coordinar tu clase de prueba.
                        </p>
                      </div>
                    </div>

                    {/* Step 2 */}
                    <div className="relative flex items-start">
                      <div className="flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 bg-[#ae5eab] rounded-full flex items-center justify-center text-white text-lg sm:text-xl font-bold shadow-lg border-4 border-white">
                        2
                      </div>
                      <div className="ml-4 sm:ml-6 pt-1 sm:pt-2">
                        <h4 className="text-lg sm:text-xl text-white mb-2">Selecciona tu clase</h4>
                        <p className="text-white/90 leading-relaxed text-sm sm:text-base">
                          Elige el día y la hora que mejor se adapten a tu horario entre las opciones disponibles.
                        </p>
                      </div>
                    </div>

                    {/* Step 3 */}
                    <div className="relative flex items-start">
                      <div className="flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 bg-[#ae5eab] rounded-full flex items-center justify-center text-white text-lg sm:text-xl font-bold shadow-lg border-4 border-white">
                        3
                      </div>
                      <div className="ml-4 sm:ml-6 pt-1 sm:pt-2">
                        <h4 className="text-lg sm:text-xl text-white mb-2">Te contactaremos para efectuar tu pago</h4>
                        <p className="text-white/90 leading-relaxed text-sm sm:text-base">
                          Nuestra ejecutivas te contactarán para concretar tu pre-inscripción.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Texto final responsive */}
              <section className="mt-8 sm:mt-12">
                <p className="text-white/90 leading-relaxed text-sm sm:text-base">¡Así de simple! En pocos pasos, tendrás tu pre-incripción para tus clases en nuestra nueva sede en Peñalolen que podría cambiar para siempre la relación de tu hijo con el agua. ¡Te esperamos para comenzar esta aventura juntos!</p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestClassContact;
