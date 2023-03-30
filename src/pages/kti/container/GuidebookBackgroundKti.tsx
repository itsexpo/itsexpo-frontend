import * as React from 'react';

import NextImage from '@/components/NextImage';

export const GuideKtiBackground = () => {
  return (
    <div className='absolute flex flex-col w-full h-full'>
      <div className='relative flex-1'>
        {/* Desktop */}
        <NextImage
          src='/kti/guide-left-pattern.png'
          alt='pattern illustration'
          width='541'
          height='908'
          className='absolute right-0 top-7 md:block hidden'
        />
        <NextImage
          src='/kti/guide-right-pattern.png'
          alt='pattern illustration'
          width='541'
          height='908'
          className='absolute left-0 top-4 md:block hidden'
        />
        <NextImage
          src='/kti/guide-mobile-right-flower.png'
          alt='flower illustration'
          width='28'
          height='43'
          className='absolute right-0 bottom-32 block sm:hidden'
        />
        <NextImage
          src='/kti/guide-mobile-left-flower.png'
          alt='flower illustration'
          width='28'
          height='43'
          className='absolute left-0 top-52 block sm:hidden'
        />
        <NextImage
          src='/kti/guide-mobile-bottom.png'
          alt='pattern illustration'
          width='390'
          height='254'
          className='absolute -bottom-24 sm:hidden block min-w-full '
        />
      </div>
      <NextImage
        src='/kti/guide-bottom.png'
        alt='guide illustration'
        width='1440'
        height='510'
        className='min-w-full xl:w-full absolute -bottom-[11rem] xs:-bottom-[12.9rem] sm:-bottom-[21.2rem] md:-bottom-[24.50rem] lg:-bottom-[27rem] xl:-bottom-[30rem] 2xl:-bottom-[33rem] z-10'
        priority={true}
      />
    </div>
  );
};
