import Aos from 'aos';
import * as React from 'react';

import NextImage from '@/components/NextImage';

export const HeroBackgroundWahanaSeni = () => {
  React.useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div className='absolute flex flex-col w-full h-full'>
      <div className='relative flex-1'>
        {/* Desktop */}
        <NextImage
          src='/wahana-seni/hero-bg-left.png'
          alt='pattern illustration'
          width='994'
          height='1364'
          className='absolute left-0 hidden md:block w-1/3 bottom-0'
          priority={true}
        />
        <NextImage
          src='/wahana-seni/hero-bg-right.png'
          alt='pattern illustration'
          width='992'
          height='1364'
          className='absolute right-0 hidden md:block w-1/3 bottom-0'
          priority={true}
        />
        <NextImage
          src='/wahana-seni/kipas kiri.png'
          alt='pattern illustration'
          width='724'
          height='890'
          className='absolute -left-[8%] md:left-0 w-1/2 md:w-1/4 bottom-0'
          priority={true}
        />
        <NextImage
          src='/wahana-seni/hero-kipas kanan.png'
          alt='pattern illustration'
          width='724'
          height='890'
          className='absolute -right-[8%] md:right-0 w-1/2 md:w-1/4 bottom-0'
          priority={true}
        />
        <NextImage
          src='/wahana-seni/awan-left-1.png'
          alt='landing hero left figure'
          width='284'
          height='115'
          className='absolute hidden md:block w-[10%] left-16 top-0 mt-28'
          data-aos='fade-right'
          data-aos-delay='700'
        />
        <NextImage
          src='/wahana-seni/awan-left-2.png'
          alt='landing hero left figure'
          width='253'
          height='102'
          className='absolute hidden md:block w-[8%] left-48 ml-24 top-0 mt-44'
          data-aos='fade-right'
          data-aos-delay='900'
        />
        <NextImage
          src='/wahana-seni/awan-right-1.png'
          alt='landing hero right figure'
          width='262'
          height='97'
          className='absolute hidden md:block w-[10%] right-16 top-0 mt-28'
          data-aos='fade-left'
          data-aos-delay='700'
        />
        <NextImage
          src='/wahana-seni/awan-right-2.png'
          alt='landing hero right figure'
          width='244'
          height='101'
          className='absolute hidden md:block w-[8%] right-48 mr-24 top-0 mt-44'
          data-aos='fade-left'
          data-aos-delay='900'
        />
        <NextImage
          src='/wahana-seni/hero-particle.png'
          alt='hero particles1'
          width='946'
          height='501'
          className='absolute hidden md:block w-1/3 left-1/3 bottom-10'
        />
        {/* Mobile */}
        <NextImage
          src='/wahana-seni/awan-mobile-kiri.png'
          alt='hero-header-mobile'
          width='142'
          height='81'
          className='absolute block md:hidden w-1/4 top-24'
          data-aos='fade-right'
          data-aos-delay='700'
        />
        <NextImage
          src='/wahana-seni/awan-mobile-kanan.png'
          alt='hero-header-mobile'
          width='142'
          height='81'
          className='absolute block md:hidden w-1/4 top-24 right-0'
          data-aos='fade-right'
          data-aos-delay='700'
        />
        <NextImage
          src='/wahana-seni/hero-mobile-particle.png'
          alt='hero-header-mobile'
          width='499'
          height='385'
          className='absolute block md:hidden w-2/3 bottom-[10%] left-[20%]'
          data-aos='fade-right'
          data-aos-delay='700'
        />
        {/* <NextImage
          src='/robotics/hero-footer-mobile.png'
          alt='hero-footer-mobile'
          width='642'
          height='197'
          className='absolute block md:hidden w-4/5 bottom-48 mx-8'
          data-aos='fade-right'
          data-aos-delay='700'
        /> */}
      </div>
    </div>
  );
};
