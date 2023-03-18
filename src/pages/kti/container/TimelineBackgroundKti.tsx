import 'aos/dist/aos.css';

import * as React from 'react';

import NextImage from '@/components/NextImage';

export const TimelineBackground = () => {
  return (
    <div className='absolute w-full h-full flex justify-center overflow-y-hidden'>
      <NextImage
        src='/landing/timeline-bg-desktop.png'
        alt='timeline desktop background'
        width='665'
        height='2000'
        className='absolute hidden md:block top-0'
      />
      <NextImage
        src='/landing/timeline-bg-mobile.png'
        alt='timeline mobile background'
        width='334'
        height='1034'
        className='absolute block md:hidden top-0'
      />
      <NextImage
        src='/kti/timeline-bottom.png'
        alt='pattern illustration'
        width='1440'
        height='352'
        className='min-w-full absolute bottom-0'
        priority={true}
      />
      <div className='absolute w-full top-0 flex justify-between items-end'>
        <NextImage
          src='/landing/timeline-bg-left.png'
          alt='timeline left background'
          width='363'
          height='1294'
          className='hidden md:block'
        />
        <NextImage
          src='/landing/timeline-bg-right.png'
          alt='timeline right background'
          width='535'
          height='754'
          className='hidden md:block'
        />
        <NextImage
          src='/landing/timeline-bg-mobile-left.png'
          alt='timeline mobile background'
          width='91'
          height='624'
          className='block md:hidden'
        />
        <NextImage
          src='/landing/timeline-bg-mobile-right.png'
          alt='timeline mobile background'
          width='112'
          height='1092'
          className='block md:hidden'
        />
      </div>
    </div>
  );
};
