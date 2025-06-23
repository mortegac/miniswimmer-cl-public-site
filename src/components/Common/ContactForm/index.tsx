'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import emailjs from '@emailjs/browser';

const schema = yup.object({
  nombre: yup.string().required('El nombre es requerido'),
  email: yup.string().email('Email inválido').required('El email es requerido'),
  mensaje: yup.string().required('El mensaje es requerido')
}).required();

type FormData = yup.InferType<typeof schema>;

const Features = (props:any) => {
  const [isSentEmail, setIsSentEmail] = useState({
    sentEmail: false,
    isFailure: false,
    title: "Page Not Found 😭",
    text: "It looks like we can't find the page you're looking for.",
  });
  
  const { pageTraslation } = props;
    const t = useTranslations(`${pageTraslation}.features_section`);
    // const featuresTop: FeatureItem[] = t.raw('featuresTop');
    // const features: FeatureItem[] = t.raw('features');

    
    
  // const t = useTranslations('homepage.features_section');
  // const featuresData: FeatureItem[] = t.raw('features');

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
      title: "Connecting to the satellite, please wait a moment ⌛",
      text: "We are sending your request.",
    });
    
    try {
      const templateParams = {
        from_name: data.nombre,
        from_email: data.email,
        message: data.mensaje,
        to_name: 'Miniswimmer',
      };

      await emailjs.send(
        'service_ucb8wga', // Reemplaza con tu Service ID de EmailJS
        'template_xcg0oul', // Reemplaza con tu Template ID de EmailJS
        templateParams,
        'Csc41asZklkk5HTWk' // Reemplaza con tu Public Key de EmailJS
      );

      reset();
      setIsSentEmail({
        sentEmail: true,
        isFailure: false,
        title: "Message Sent 🎉",
        text: "We will get in touch with you as soon as possible.",
        // response: response || "",
      });
    } catch (error) {
      console.error('Error al enviar el email:', error);
      setIsSentEmail({
        sentEmail: true,
        isFailure: true,
        title: "Could not send message 😭",
        text: "You can send us a message at welcome@miniswimmer.cl.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id='features'
      className='relative z-1 overflow-hidden bg-[linear-gradient(90deg,#7e7e7e_0%,#3b3b3b_100%)] py-17.5 dark:bg-black dark:text-white lg:py-22.5 xl:py-27.5'
    >
      {/* <!-- section title --> */}
      {/* <SectionHeader title={t('title')} description={t('subtitle')} /> */}

      <div className='relative z-1 mx-auto w-full max-w-[1170px] px-4 sm:px-8 xl:px-0'>
        <div className='flex justify-center items-center'>
       
            <div
              key={"KEY-CONTACT_FORM"}
              className='max-w-[600px] w-full bg-white border border-[rgba(0,17,51,0.15)] rounded-[24px] p-[48px] flex flex-col justify-start items-start relative'
            >
            { isSentEmail.sentEmail ? (
              <>
                <h4 className='mb-5 font-satoshi font-bold  text-slate-700  text-[32px] leading-10'>
                {isSentEmail.title}
                </h4>
                <p className='font-satoshi  text-slate-700 text-[20px] mb-8  leading-6'> {isSentEmail.text}</p>

                <Link 
                    href={"/"}
                    passHref
                    prefetch
                    // target="_blank" 
                    rel="noopener noreferrer nofollow" 
                    className='inline-flex items-center gap-4 rounded-full bg-black py-2 pl-7.5 pr-2 font-satoshi font-medium text-white hover:bg-opacity-90 dark:bg-primary'
                  >{"Back to home"}
                </Link>
              </>
            )
            :(<form onSubmit={handleSubmit(onSubmit)} className="space-y-4  w-full">
                <div>
                  <label htmlFor="nombre" className="block text-lg font-light text-gray-700 dark:text-gray-300">
                    Name
                  </label>
                  <input
                    {...register('nombre')}
                    type="text"
                    id="nombre"
                    className="mt-1 mb-12 block w-full min-w-full h-[48px] border border-[rgba(0,17,51,0.15)] rounded-[6px] p-[13px] text-[rgba(0,17,51,0.8)]font-normal text-[14px] transition-all duration-400 outline-none shadow-none focus:border-primary focus:ring-primary dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  />
                  {errors.nombre && (
                    <p className="-mt-10 text-sm text-red-300">{errors.nombre.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-lg font-light text-gray-700 dark:text-gray-300">
                    Email
                  </label>
                  <input
                    {...register('email')}
                    type="email"
                    id="email"
                    className="mt-1 mb-12 block w-full h-[48px] border border-[rgba(0,17,51,0.15)] rounded-[6px] p-[13px] text-[rgba(0,17,51,0.8)]  text-[14px] transition-all duration-400 outline-none shadow-none focus:border-primary focus:ring-primary dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  />
                  {errors.email && (
                    <p className="-mt-10 text-sm text-red-300">{errors.email.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="mensaje" className="block text-lg font-light text-gray-700 dark:text-gray-300">
                  How can we help you?
                  </label>
                  <textarea
                    {...register('mensaje')}
                    id="mensaje"
                    rows={4}
                    className="mt-1 mb-12 block w-full border border-[rgba(0,17,51,0.15)] rounded-[6px] p-[13px] text-[rgba(0,17,51,0.8)]  text-[14px] transition-all duration-400 outline-none shadow-none focus:border-primary focus:ring-primary dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  />
                  {errors.mensaje && (
                    <p className="-mt-10 text-sm text-red-300">{errors.mensaje.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full rounded-md bg-primary px-4 py-2 text-white hover:bg-primary/95 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:opacity-50"
                >
                  {isSubmitting ? 'Sending...' : 'Sent'}
                </button>
              </form>
            )}
            </div>
      
        </div>
        

      </div>
    </section>
  );
};

export default Features;
