import 'aos/dist/aos.css';

import * as React from 'react';

import NextImage from '@/components/NextImage';

export const HeroBackground = () => {
  return (
    <div className='absolute flex flex-col w-full h-full'>
      <div className='relative flex-1'>
        <NextImage
          src='/jurnalistik/hero-bg-lef.png'
          alt='hero left background'
          width='792'
          height='1899'
          priority={true}
          className='absolute z-0 hidden md:block w-1/4 -left-10'
        />
        <NextImage
          src='/jurnalistik/hero-bg-right.png'
          alt='hero right background'
          width='843'
          height='1941'
          priority={true}
          className='absolute z-0 hidden md:block w-1/4 -right-10'
        />
        <NextImage
          src='/jurnalistik/hero-header-mobile.png'
          alt='hero-header-mobile'
          width='780'
          height='85'
          className='absolute block md:hidden w-full mt-5'
          data-aos='fade-right'
          data-aos-delay='700'
        />
        <NextImage
          src='/jurnalistik/hero-footer-mobile.png'
          alt='hero-footer-mobile'
          width='642'
          height='197'
          className='absolute block md:hidden w-4/5 bottom-48 mx-8'
          data-aos='fade-right'
          data-aos-delay='700'
        />
        <NextImage
          src='/jurnalistik/awan-left-1.png'
          alt='landing hero left figure'
          width='388'
          height='144'
          className='absolute hidden md:block w-[15%] left-20 top-0 mt-16'
          data-aos='fade-right'
          data-aos-delay='700'
        />
        <NextImage
          src='/jurnalistik/awan-left-2.png'
          alt='landing hero left figure'
          width='293'
          height='118'
          className='absolute hidden md:block w-[10%] left-80 top-0 mt-36'
          data-aos='fade-right'
          data-aos-delay='900'
        />
        <NextImage
          src='/jurnalistik/awan-right.png'
          alt='hero right figure'
          width='222'
          height='92'
          className='absolute hidden md:block w-1/12 right-80 top-0 mt-16'
          data-aos='fade-right'
          data-aos-delay='700'
        />
        <NextImage
          src='/jurnalistik/hero-particles.png'
          alt='hero particles'
          width='1570'
          height='1123'
          className='absolute hidden md:block w-1/2 left-40 bottom-44'
        />
        <NextImage
          src='/jurnalistik/burung-hero.png'
          alt='hero bird'
          width='315'
          height='445'
          className='absolute hidden md:block w-1/12 xl:right-[4%] 2xl:right-[6%] right-[4.1%] mt-24 z-[1]'
        />
      </div>
    </div>
  );
};

export const HeroPattern = () => {
  return (
    <div className='relative min-h-fit w-full'>
      <NextImage
        src='/jurnalistik/hero-pattern.png'
        alt='hero pattern'
        width='2880'
        height='328'
        className='w-full'
        priority={true}
      />
    </div>
  );
};
