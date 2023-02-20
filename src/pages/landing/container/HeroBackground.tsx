import 'aos/dist/aos.css';

import * as React from 'react';

import NextImage from '@/components/NextImage';

export const HeroBackground = () => {
  return (
    <div className='absolute flex flex-col w-full h-full'>
      <div className='relative flex-1'>
        <NextImage
          src='/landing/hero-bg-left.png'
          alt='landing hero left background'
          width='720'
          height='690'
          priority={true}
          className='absolute hidden md:block w-1/2 left-0 bottom-0'
        />
        <NextImage
          src='/landing/hero-bg-right.png'
          alt='landing hero right background'
          width='720'
          height='675'
          priority={true}
          className='absolute hidden md:block w-1/2 right-0 bottom-0'
        />
        <NextImage
          src='/landing/hero-figure-left.png'
          alt='landing hero left figure'
          width='720'
          height='457'
          className='absolute w-full md:w-1/2 left-0 bottom-0 -translate-x-10'
          data-aos='fade-right'
          data-aos-delay='500'
        />
        <NextImage
          src='/landing/hero-cloud-left.png'
          alt='landing hero left figure'
          width='195'
          height='135'
          className='absolute block md:hidden w-1/2 left-0 top-0 mt-16'
          data-aos='fade-right'
          data-aos-delay='700'
        />
        <NextImage
          src='/landing/hero-clouds-left.png'
          alt='landing hero left figure'
          width='720'
          height='618'
          className='absolute hidden md:block w-1/2 left-0 top-0 mt-16'
          data-aos='fade-right'
          data-aos-delay='700'
        />
        <NextImage
          src='/landing/hero-bird-left.png'
          alt='landing hero left figure'
          width='720'
          height='607'
          className='absolute hidden md:block w-1/2 left-0 top-0 mt-16'
          data-aos='fade-right'
          data-aos-delay='800'
        />
        <NextImage
          src='/landing/hero-particles-left.png'
          alt='landing hero particles'
          width='720'
          height='170'
          className='absolute hidden md:block w-1/2 left-0 bottom-0'
          data-aos='fade-right'
          data-aos-delay='1000'
        />
        <NextImage
          src='/landing/hero-figure-right.png'
          alt='landing hero right figure'
          width='720'
          height='462'
          className='absolute w-full md:w-1/2 right-0 bottom-0 translate-x-10'
          data-aos='fade-left'
          data-aos-delay='500'
        />
        <NextImage
          src='/landing/hero-cloud-right.png'
          alt='landing hero right figure'
          width='195'
          height='141'
          className='absolute block md:hidden w-1/2 right-0 top-0 mt-16'
          data-aos='fade-left'
          data-aos-delay='700'
        />
        <NextImage
          src='/landing/hero-clouds-right.png'
          alt='landing hero right figure'
          width='720'
          height='618'
          className='absolute hidden md:block w-1/2 right-0 top-0 mt-16'
          data-aos='fade-left'
          data-aos-delay='700'
        />
        <NextImage
          src='/landing/hero-bird-right.png'
          alt='landing hero right figure'
          width='720'
          height='604'
          className='absolute hidden md:block w-1/2 right-0 top-0 mt-16'
          data-aos='fade-left'
          data-aos-delay='800'
        />
        <NextImage
          src='/landing/hero-particles-left.png'
          alt='landing hero particles'
          width='720'
          height='170'
          className='absolute hidden md:block w-1/2 right-0 bottom-0'
          data-aos='fade-left'
          data-aos-delay='1000'
        />
      </div>
      <NextImage
        src='/landing/hero-pattern.png'
        alt='pattern illustration'
        width='1440'
        height='88'
        className='w-[1440px] min-w-full'
        priority={true}
      />
    </div>
  );
};
