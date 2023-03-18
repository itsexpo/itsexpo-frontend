import * as React from 'react';

import NextImage from '@/components/NextImage';

export const HeroBackgroundKti = () => {
  return (
    <div className='absolute flex flex-col w-full h-full'>
      <div className='relative flex-1'>
        {/* Desktop */}
        <NextImage
          src='/kti/hero-left-pattern.png'
          alt='pattern illustration'
          width='400'
          height='850'
          className='absolute left-0'
          priority={true}
        />
        <NextImage
          src='/kti/hero-right-pattern.png'
          alt='pattern illustration'
          width='520'
          height='850'
          className='absolute right-0 -top-10'
          priority={true}
        />
        <NextImage
          src='/kti/hero-left-cloud.png'
          alt='pattern illustration'
          width='591'
          height='110'
          className='absolute left-20 top-32'
          priority={true}
        />
      </div>
      <NextImage
        src='/kti/hero-bottom.png'
        alt='pattern illustration'
        width='1440'
        height='163'
        className='min-w-full absolute -bottom-20 z-10'
        priority={true}
      />
    </div>
  );
};
