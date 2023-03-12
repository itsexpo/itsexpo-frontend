import 'aos/dist/aos.css';

import AOS from 'aos';
import * as React from 'react';

import NextImage from '@/components/NextImage';

export const TimelineBackground1 = () => {
  return (
    <div className='absolute w-full h-full flex justify-center overflow-y-hidden'>
      <NextImage
        src='/jurnalistik/timeline-bg-desktop.png'
        alt='timeline desktop background'
        width='665'
        height='2000'
        className='absolute hidden md:block top-0'
      />
      <NextImage
        src='/jurnalistik/timeline-bg-mobile2.png'
        alt='timeline mobile background'
        width='342'
        height='995'
        className='absolute block md:hidden top-0'
      />
      <div className='absolute w-full flex justify-between'>
        <NextImage
          src='/jurnalistik/timeline-bg-left.png'
          alt='timeline left background'
          width='477'
          height='1329'
          className='hidden md:block top-0 w-1/6'
        />
        <NextImage
          src='/jurnalistik/timeline-bg-right.png'
          alt='timeline right background'
          width='468'
          height='1579'
          className='hidden md:block mt-52 w-1/6'
        />
      </div>
    </div>
  );
};

export const TimelineBackground2 = () => {
  React.useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className='relative min-h-fit w-full mt-20'>
      <NextImage
        src='/jurnalistik/timeline-pattern.png'
        alt='timeline bottom illustration'
        width='2880'
        height='764'
        className='w-full'
      />
    </div>
  );
};
