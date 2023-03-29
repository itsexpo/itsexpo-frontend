import 'aos/dist/aos.css';

import * as React from 'react';

import NextImage from '@/components/NextImage';

export const HeroImage = () => {
  return (
    <div className='layout flex flex-col w-full h-full'>
      <div className='relative flex justify-end'>
        <NextImage
          src='/jurnalistik/hero-mascot.png'
          alt='hero-mascot'
          width='814'
          height='860'
          priority={true}
          className='w-full md:w-2/3 mx-2 mt-8 md:mt-0 z-0'
        />
      </div>
    </div>
  );
};
