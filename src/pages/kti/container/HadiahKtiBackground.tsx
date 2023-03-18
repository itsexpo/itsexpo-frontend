import * as React from 'react';

import NextImage from '@/components/NextImage';

export const HadiahKtiBackground = () => {
  return (
    <div className='absolute flex flex-col w-full h-full'>
      <div className='relative flex-1'>
        {/* Desktop */}
        <NextImage
          src='/kti/hadiah-left-flower.png'
          alt='flower illustration'
          width='147'
          height='671'
          className='absolute left-0 top-32'
        />
        <NextImage
          src='/kti/hadiah-right-flower.png'
          alt='flower illustration'
          width='150'
          height='580'
          className='absolute right-0 top-16'
        />
      </div>
      <NextImage
        src='/kti/hadiah-bottom.png'
        alt='hadiah illustration'
        width='1440'
        height='240'
        className='min-w-full absolute -bottom-[6.75rem] z-10'
        priority={true}
      />
    </div>
  );
};
