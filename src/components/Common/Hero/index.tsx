import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';

const Hero = (props:any) => {
  const { pageTraslation } = props;
  const t = useTranslations(`${pageTraslation}.hero_section`);

  return (
    <section className='relative z-1 overflow-hidden bg-primary pb-17.5 pt-30 lg:pb-20 lg:pt-30 xl:pb-25 xl:pt-[170px]'>
      <div className='mx-auto w-full max-w-[1170px] px-4 sm:px-8 xl:px-0'>
        <div className='flex flex-col items-center gap-8 lg:flex-row lg:gap-12'>  
          <div className='w-full text-left lg:w-1/2'>
            <h1 className='mb-5 font-satoshi text-heading-4 font-bold -tracking-[1.6px] text-white dark:text-white lg:text-heading-2 xl:text-[58px] xl:leading-[1.12]'>
              {t.rich('title', {
                marker: chunks => (
                  <span className='relative text-[#87e0ff]'>
                    {chunks}
                    <span className='absolute bottom-0.5 left-0 h-2 w-full pl-1 pr-2'>
                      <svg
                        className='fill-current'
                        width='106%'
                        height='100%'
                        viewBox='0 0 100 7'
                        preserveAspectRatio='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          fillRule='evenodd'
                          clipRule='evenodd'
                          d='M100 2.49998C100 1.50001 100 2.5 100 1.50001C64.2857 -0.240394 17.4603 3.99028 0 6.05927L0 2.05807C17.4603 0.641568 64.2857 0 100 2.49998Z'
                        />
                      </svg>
                    </span>
                  </span>
                ),
              })}
            </h1>
            { t('subtitle') !== "" &&  <p className='mx-auto w-full max-w-[585px] text-slate-100 dark:text-gray-4 text-lg'>{t('subtitle')}</p>}
           { t('cta') !== "" &&  <div className='ml-4 mb-5 relative z-10'>
              <Link 
                href={t('url')}
                target="_blank" 
                rel="noopener noreferrer nofollow" 
                className='inline-flex items-center gap-4 rounded-full bg-black py-2 pl-7.5 pr-2 font-satoshi font-medium text-white hover:bg-opacity-90 dark:bg-primary'
          
              >
                <span>{t('cta')}</span>
                <span className='inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary text-white dark:bg-white dark:text-primary'>
                <svg
                  className='fill-current'
                  width='20'
                  height='20'
                  viewBox='0 0 20 20'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M7.5 5.625C7.15482 5.625 6.875 5.34518 6.875 5C6.875 4.65482 7.15482 4.375 7.5 4.375H15C15.3452 4.375 15.625 4.65482 15.625 5V12.5C15.625 12.8452 15.3452 13.125 15 13.125C14.6548 13.125 14.375 12.8452 14.375 12.5V6.50888L5.44194 15.4419C5.19786 15.686 4.80214 15.686 4.55806 15.4419C4.31398 15.1979 4.31398 14.8021 4.55806 14.5581L13.4911 5.625H7.5Z'
                  />
                </svg>
              </span>
              </Link>
            </div>}
            
          </div>

          {/* Image Content */}
          <div className='w-full lg:w-1/2'>
            <Image
              src={t('image')}
              // src='/images/hero/header-2.png'
              alt='Hero Image'
              width={600}
              height={500}
              className='h-auto w-full rounded-lg'
              priority
            />
          </div>
        </div>
      </div>


      {/* <!-- Hero Bg Shapes --> */}
      {/* <div className='hidden sm:block'>
				<div className='absolute left-0 top-0 -z-1'>
					<Image
						src='/images/hero/hero-shape-01.svg'
						alt='shape'
						width={340}
						height={480}
					/>
				</div>
				<div className='absolute right-0 top-0 -z-1'>
					<Image
						src='/images/hero/hero-shape-02.svg'
						alt='shape'
						width={425}
						height={682}
					/>
				</div>
			</div> */}

      <div className='absolute bottom-0 left-0 z-0 w-full'>
        <Image
          src='/images/hero/waves5.svg'
          alt='Hero Image'
          width={1920}
          height={423}
          className='h-auto w-full object-cover'
          priority
        />
      </div>
    </section>
  );
};

export default Hero;
