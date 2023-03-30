import * as React from 'react';

import NextImage from '@/components/NextImage';

export const HadiahRobotikBackground = () => {
  return (
    <div className='absolute flex flex-col w-full h-full'>
      <div className='relative flex-1'>
        {/* Desktop */}
        <NextImage
          src='/robotics/hadiah-left-flower.png'
          alt='flower illustration'
          width='147'
          height='671'
          className='absolute left-0 top-32 md:block hidden'
        />
        <NextImage
          src='/robotics/hadiah-right-flower.png'
          alt='flower illustration'
          width='150'
          height='580'
          className='absolute right-0 top-16 md:block hidden'
        />
        <NextImage
          src='/robotics/hadiah-mobile-left-flower.png'
          alt='flower illustration'
          width='20'
          height='20'
          className='absolute left-10 top-16 block md:hidden'
        />
      </div>
      <NextImage
        src='/robotics/hadiah-bottom.png'
        alt='hadiah illustration'
        width='1440'
        height='240'
        className='min-w-full absolute -bottom-[1.9rem] xs:-bottom-10 sm:-bottom-14 md:-bottom-16 lg:-bottom-20 xl:-bottom-[6.2rem] 2xl:-bottom-[7.5rem] z-10'
        priority={true}
      />
    </div>
  );
};
