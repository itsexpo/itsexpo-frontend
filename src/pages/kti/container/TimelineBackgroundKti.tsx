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
        src='/kti/timeline-bg-mobile.png'
        alt='timeline mobile background'
        width='334'
        height='2000'
        className='absolute block md:hidden top-36'
      />
      <NextImage
        src='/kti/timeline-bottom.png'
        alt='pattern illustration'
        width='1440'
        height='352'
        className='min-w-full absolute bottom-10 sm:bottom-24 md:bottom-[5rem] lg:bottom-28 xl:bottom-4'
        priority={true}
      />
      <NextImage
        src='/kti/timeline-mobile-left-flower.png'
        alt='timeline left background'
        width='21'
        height='24'
        className='md:hidden block absolute left-12 top-8'
      />
      <NextImage
        src='/kti/timeline-mobile-right-flower.png'
        alt='timeline right background'
        width='21'
        height='24'
        className='md:hidden block absolute right-12 top-12'
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
      </div>
    </div>
  );
};
