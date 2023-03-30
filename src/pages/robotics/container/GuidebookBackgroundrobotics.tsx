import * as React from 'react';

import NextImage from '@/components/NextImage';

export const GuidebookBackgroundrobotics = () => {
  return (
    <div className='absolute flex flex-col w-full h-full'>
      <div className='relative flex-1'>
        {/* Desktop */}
        <NextImage
          src='/robotics/guide-left-pattern.png'
          alt='pattern illustration'
          width='541'
          height='908'
          className='absolute right-0 -bottom-36 md:block hidden w-[33%]'
        />
        <NextImage
          src='/robotics/guide-right-pattern.png'
          alt='pattern illustration'
          width='541'
          height='908'
          className='absolute left-0 -bottom-36 md:block hidden w-[33%]'
        />
        <NextImage
          src='/robotics/guide-mobile-right-flower.png'
          alt='flower illustration'
          width='28'
          height='43'
          className='absolute right-0 bottom-32 block md:hidden'
        />
        <NextImage
          src='/robotics/guide-mobile-left-flower.png'
          alt='flower illustration'
          width='28'
          height='43'
          className='absolute left-0 top-52 block md:hidden'
        />
        <NextImage
          src='/robotics/guide-mobile-bottom.png'
          alt='pattern illustration'
          width='390'
          height='254'
          className='absolute -bottom-24 md:hidden block min-w-full '
        />
      </div>
      <NextImage
        src='/robotics/guide-bottom.png'
        alt='guide illustration'
        width='1440'
        height='510'
        className='min-w-full xl:w-full absolute hidden md:block md:-bottom-[22.25rem] lg:-bottom-[25rem] xl:-bottom-[28rem] 2xl:-bottom-[30rem] z-[1]'
        priority={true}
      />
      <NextImage
        src='/robotics/guide-bottom-mobile.png'
        alt='guide illustration'
        width='780'
        height='325'
        className='min-w-full xl:w-full absolute -bottom-[12.50rem] xs:-bottom-[16.30rem] sm:-bottom-[19.75rem] z-[1] md:hidden block'
        priority={true}
      />
    </div>
  );
};
