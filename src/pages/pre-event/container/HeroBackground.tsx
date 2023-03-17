import 'aos/dist/aos.css';

import React from 'react';

import NextImage from '@/components/NextImage';
function HeroBackground() {
  return (
    <div>
      <NextImage
        width={121}
        height={128}
        alt='snow-mobile-1'
        src='/preevent/snow-mobile-1.png'
        className='absolute right-16 top-32 md:hidden w-[15%]'
        data-aos='fade-left'
        data-aos-delay='700'
      />
      <NextImage
        src='/preevent/snow-mobile-2.png'
        width={85}
        height={89}
        alt='snow-mobile-2'
        className='absolute right-10 bottom-44 md:hidden w-[10%]'
        data-aos='fade-right'
        data-aos-delay='700'
      />
      <NextImage
        src='/preevent/hero-snow-right.png'
        alt='hero cloud'
        className='absolute right-96 top-48 hidden md:block w-[5%]'
        width={132}
        height={140}
        data-aos='fade-left'
        data-aos-delay='600'
      />
      <NextImage
        src='/preevent/hero-snow-left.png'
        alt='hero cloud'
        className='absolute left-96 top-28 hidden md:block w-[5%]'
        width={132}
        height={140}
        data-aos='fade-right'
        data-aos-delay='600'
      />

      {/* Hero bottom clouds and mountain */}
      <div className='absolute flex w-full bottom-0'>
        <NextImage
          width={544}
          height={644}
          className='relative w-[45%] sm:w-[45%] md:w-[35%] lg:w-[20%]'
          src='/preevent/hero-bg-left1.png'
          alt='hero bg left'
          data-aos='fade-up'
          data-aos-delay='600'
        />
        <NextImage
          width={805}
          height={837}
          className='right-16 md:w-[35%] lg:w-[22%] hidden md:block md:bottom-1/4 lg:bottom-1/3 absolute'
          src='/preevent/hero-bg-right.png'
          alt='hero bg right'
          data-aos='fade-up'
          data-aos-delay='600'
        />
        <NextImage
          className='bottom-0 md:left-0 w-[180vw] md:w-full hidden md:block absolute'
          alt='hero pattern'
          width={2880}
          height={268}
          src='/preevent/hero-pattern.png'
        />
        <NextImage
          className='bottom-0 md:left-0 w-full block md:hidden absolute'
          alt='hero pattern'
          width={780}
          height={254}
          src='/preevent/hero-pattern-mobile.png'
        />
      </div>
    </div>
  );
}

export { HeroBackground };
