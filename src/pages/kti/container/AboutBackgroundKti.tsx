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
          className='absolute top-24 left-20'
          priority={true}
        />
        <NextImage
          src='/kti/about-right-cloud.png'
          alt='pattern illustration'
          width='171'
          height='69'
          className='absolute top-24 right-20'
          priority={true}
        />
        <NextImage
          src='/kti/about-left-leaf.png'
          alt='pattern illustration'
          width='181'
          height='342'
          className='absolute bottom-0 left-0'
          priority={true}
        />
        <NextImage
          src='/kti/about-right-leaf.png'
          alt='pattern illustration'
          width='181'
          height='342'
          className='absolute bottom-0 right-0'
          priority={true}
        />
      </div>
      <NextImage
        src='/kti/about-bottom.png'
        alt='pattern illustration'
        width='1440'
        height='87'
        className='min-w-full absolute -bottom-20 z-10'
        priority={true}
      />
    </div>
  );
};
