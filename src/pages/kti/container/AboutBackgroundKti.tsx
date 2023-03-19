import * as React from 'react';

import NextImage from '@/components/NextImage';

export const AboutBackgroundKti = () => {
  return (
    <div className='absolute flex flex-col w-full h-full'>
      <div className='relative flex-1'>
        {/* Desktop */}
        <NextImage
          src='/kti/about-left-cloud.png'
          alt='pattern illustration'
          width='186'
          height='69'
          className='absolute top-14 lg:top-24 left-10 lg:left-20 hidden md:block'
          priority={true}
        />
        <NextImage
          src='/kti/about-right-cloud.png'
          alt='pattern illustration'
          width='171'
          height='69'
          className='absolute top-14 lg:top-24 right-10 lg:right-20 hidden md:block'
          priority={true}
        />
        <NextImage
          src='/kti/about-left-leaf.png'
          alt='pattern illustration'
          width='181'
          height='342'
          className='absolute bottom-0 left-0 w-[25%] md:w-[15%]'
          priority={true}
        />
        <NextImage
          src='/kti/about-right-leaf.png'
          alt='pattern illustration'
          width='181'
          height='342'
          className='absolute bottom-0 right-0 w-[25%] md:w-[15%]'
          priority={true}
        />
        {/* Mobile */}
        <NextImage
          src='/kti/about-mobile-left-cloud.png'
          alt='cloud illustration'
          width='80'
          height='39'
          className='absolute top-12 left-0 md:hidden block'
          priority={true}
        />
        <NextImage
          src='/kti/about-mobile-right-cloud.png'
          alt='cloud illustration'
          width='69'
          height='39'
          className='absolute top-12 right-0 md:hidden block'
          priority={true}
        />
      </div>
      <NextImage
        src='/kti/about-bottom.png'
        alt='pattern illustration'
        width='1440'
        height='87'
        className='w-[1440px] sm:min-w-full absolute -bottom-20 md:-bottom-12 lg:-bottom-16 xl:-bottom-20 z-10'
        priority={true}
      />
    </div>
  );
};
