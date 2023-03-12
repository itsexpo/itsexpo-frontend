import 'aos/dist/aos.css';

import * as React from 'react';

import NextImage from '@/components/NextImage';

export const HeroImage = () => {
  return (
    <div className='layout flex flex-col w-full h-full'>
      <div className='relative flex'>
        <NextImage
          src='/jurnalistik/hero-img1.png'
          alt='hero left background'
          width='584'
          height='696'
          priority={true}
          className='w-full md:w-1/2 left-0 mx-2 md:mt-10 z-0'
        />
        <NextImage
          src='/jurnalistik/hero-img2.png'
          alt='hero right background'
          width='584'
          height='696'
          priority={true}
          className='w-full md:w-1/2 right-0 mx-2 md:mt-16 z-0'
        />
      </div>
    </div>
  );
};
