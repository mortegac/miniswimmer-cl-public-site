import SectionHeader from '@/components/Common/SectionHeader';
import type { FeatureItem } from '@/types/featureItem';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';

const Features = (props:any) => {
  const { pageTraslation } = props;
    const t = useTranslations(`${pageTraslation}.alianzas_section`);
    const features: FeatureItem[] = t.raw('features');

    
    
  // const t = useTranslations('homepage.features_section');
  // const featuresData: FeatureItem[] = t.raw('features');

  return (
    <section
      id='features'
      className='relative z-1 overflow-hidden bg-slate-100 mt-20  dark:bg-black dark:text-white py-17.5 pt-0 lg:py-22.5 xl:py-27.5'
    >
      {/* <!-- section title --> */}
      <SectionHeader title={t('title')} description={t('subtitle')} />

      <div className='relative z-1 mx-auto w-full max-w-[1170px] px-4 sm:px-8 xl:px-0'>

        <div className='grid grid-cols-1 gap-7.5 sm:grid-cols-2 lg:grid-cols-3'>
          {features?.map((data:any, i) => (
            <div
              id="card"
              key={i}
              className='rounded-[15px] bg-white shadow-1 hover:shadow-features dark:bg-gray-dark overflow-hidden relative'
            >
              <div
                className='bg-cover bg-center bg-no-repeat min-h-[400px] w-full relative'
                style={{
                  backgroundImage: `url(${data?.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat'
                }}
              >
                <div className='absolute top-4 right-4 bg-black text-white px-4 py-2 rounded-md font-bold text-xl'>
                  {data?.descuento}% OFF
                </div>
                
                <div id="code" className='text-center w-[90%] absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-[#ae5eab] text-white px-2 py-2 rounded-md font-thin text-sm'>
                  <p>Usa el código: <b>{data?.codigo}</b></p>
                  
                </div>
              </div>
              <div className='bg-white p-[35px] w-full'>
                <h3 className='mb-4.5 font-satoshi text-2xl font-bold text-dark dark:text-white'>
                  {data.title}
                </h3>
                <p className='dark:text-gray-5'>{data.description}</p>
                {/* <a 
                  // id="link-descto" 
                  href={data?.descuento_descuento_link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className='text-center m-auto mb-10 w-full mt-6 bg-slate-100 text-slate-800 px-2 py-2 rounded-md font-thin text-sm block'
                > */}
                <Link
                  href={data?.descuento_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className='text-center m-auto mb-10 w-full mt-6 bg-slate-100 hover:bg-slate-300 text-slate-800 px-2 py-2 rounded-md font-light text-sm block transition-colors duration-200'
                  >{data?.descuento_texto}
                </Link>
                {/* </a> */}
              </div>
            </div>
          ))}
        </div>

        {/* <!-- Features Bg Shapes --> */}
        <div className='hidden sm:block'>
          <div className='absolute -left-40 -bottom-96 -z-1 -translate-y-1/2'>
            <Image
              src='/images/features/features-shape-01.svg'
              alt='shape'
              width={600}
              height={600}
            />
          </div>
          <div className='absolute -right-40 top-48 -z-1 -translate-y-1/2'>
            <Image
              src='/images/features/features-shape-02.svg'
              alt='shape'
              width={800}
              height={800}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
