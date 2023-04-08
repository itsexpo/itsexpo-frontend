import 'aos/dist/aos.css';

import * as React from 'react';

import NextImage from '@/components/NextImage';

export const TimelineWahanaBackground = () => {
  return (
    <div className='absolute w-full h-full flex justify-center overflow-y-hidden'>
      <NextImage
        src='/wahana-seni/timeline-bg-desktop1.png'
        alt='timeline desktop background'
        width='678'
        height='1235'
        className='absolute hidden md:block top-28'
      />
      <NextImage
        src='/wahana-seni/timeline-bg-mobile.png'
        alt='timeline mobile background'
        width='334'
        height='2000'
        className='absolute block md:hidden top-36'
      />
      <NextImage
        src='/wahana-seni/timeline-mobile-left-flower.png'
        alt='timeline left background'
        width='21'
        height='24'
        className='md:hidden block absolute left-12 top-8'
      />
      <NextImage
        src='/wahana-seni/timeline-mobile-right-flower.png'
        alt='timeline right background'
        width='21'
        height='24'
        className='md:hidden block absolute right-12 top-12'
      />
      <div className='absolute w-full top-0 flex justify-between items-start'>
        <NextImage
          src='/wahana-seni/timeline-left.png'
          alt='timeline left background'
          width='239'
          height='665'
          className='hidden md:block'
        />
        <NextImage
          src='/wahana-seni/timeline-right1.png'
          alt='timeline right background'
          width='234'
          height='790'
          className='hidden md:block mt-44'
        />
      </div>
    </div>
  );
};
