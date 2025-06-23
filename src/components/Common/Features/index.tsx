import SectionHeader from '@/components/Common/SectionHeader';
import type { FeatureItem } from '@/types/featureItem';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

const Features = (props:any) => {
  const { pageTraslation } = props;
    const t = useTranslations(`${pageTraslation}.features_section`);
    const featuresTop: FeatureItem[] = t.raw('featuresTop');
    const features: FeatureItem[] = t.raw('features');

    
    
  // const t = useTranslations('homepage.features_section');
  // const featuresData: FeatureItem[] = t.raw('features');

  return (
    <section
      id='features'
      className='relative z-1 overflow-hidden bg-gray-1 py-17.5 dark:bg-black dark:text-white lg:py-22.5 xl:py-27.5'
    >
      {/* <!-- section title --> */}
      <SectionHeader title={t('title')} description={t('subtitle')} />

      <div className='relative z-1 mx-auto w-full max-w-[1170px] px-4 sm:px-8 xl:px-0'>
        <div className='grid grid-cols-1 gap-7.5 sm:grid-cols-2 lg:grid-cols-3'>
          {featuresTop?.map((data, i) => (
            <div
              key={i}
              className='rounded-[15px] bg-white p-[35px] shadow-1 hover:shadow-features dark:bg-gray-dark'
            >
              <h3 className='mb-4.5 mt-7.5 font-satoshi text-2xl font-bold text-dark dark:text-white'>
                {data.title}
              </h3>
              <p className='dark:text-gray-5'>{data.description}</p>
            </div>
          ))}
        </div>
        
        <div className='grid grid-cols-1 gap-7.5 sm:grid-cols-2 lg:grid-cols-3 mt-4  mb-4'>
          
          
            <div
              key={"IMG01"}
              className='rounded-[15px] bg-white p-[35px] shadow-1 hover:shadow-features dark:bg-gray-dark bg-cover bg-center bg-no-repeat min-h-[300px] w-full'
              style={{
                backgroundImage: `url(${t('imagen01')})`,
                // backgroundImage: 'url("https://images.prismic.io/miniswimmerchile/aBkFm_IqRLdaB4XP_uno-about.png?auto=format,compress")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}
            ></div>
            <div
              key={"IMG02"}
              className='rounded-[15px] bg-white p-[35px] shadow-1 hover:shadow-features dark:bg-gray-dark bg-cover bg-center bg-no-repeat min-h-[300px] w-full'
              style={{
                // backgroundImage: 'url("https://images.prismic.io/miniswimmerchile/aBkEwvIqRLdaB4W6_dos-about.png?auto=format,compress")',
                backgroundImage: `url(${t('imagen02')})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}
            ></div>
            <div
              key={"IMG03"}
              className='rounded-[15px] bg-white p-[35px] shadow-1 hover:shadow-features dark:bg-gray-dark bg-cover bg-center bg-no-repeat min-h-[300px] w-full'
              style={{
                // backgroundImage: 'url("https://images.prismic.io/miniswimmerchile/aBkFl_IqRLdaB4XN_tres-about.png?auto=format,compress")',
                backgroundImage: `url(${t('imagen03')})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}
            ></div>
            
          
          
        </div>
               <div className='grid grid-cols-1 gap-7.5 sm:grid-cols-2 lg:grid-cols-3'>
          {/* <!-- features item --> */}
          {features?.map((data, i) => (
            <div
              key={i}
              className='rounded-[15px] bg-white p-[35px] shadow-1 hover:shadow-features dark:bg-gray-dark'
            >
              <h3 className='mb-4.5 mt-7.5 font-satoshi text-2xl font-bold text-dark dark:text-white'>
                {data.title}
              </h3>
              <p className='dark:text-gray-5'>{data.description}</p>
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
