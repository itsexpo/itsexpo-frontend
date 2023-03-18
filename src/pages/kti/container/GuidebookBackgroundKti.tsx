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
          className='absolute right-0 top-7'
        />
        <NextImage
          src='/kti/guide-right-pattern.png'
          alt='pattern illustration'
          width='541'
          height='908'
          className='absolute left-0 top-4'
        />
      </div>
      <NextImage
        src='/kti/guide-bottom.png'
        alt='guide illustration'
        width='1440'
        height='510'
        className='xl:w-full 2xl:h-[70%] absolute -bottom-[30rem] z-10'
        priority={true}
      />
    </div>
  );
};
