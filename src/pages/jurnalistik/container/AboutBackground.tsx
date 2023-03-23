import 'aos/dist/aos.css';

import AOS from 'aos';
import * as React from 'react';

import NextImage from '@/components/NextImage';

export const AboutBackground = () => {
  return (
    <div>
      <NextImage
        src='/jurnalistik/awan-about-left.png'
        alt='awan-about-left'
        width='374'
        height='140'
        className='absolute top-20 md:top-10 w-1/4 md:w-[14%] -left-10 md:left-4'
      />
      <NextImage
        src='/jurnalistik/awan-about-right.png'
        alt='awan-about-right'
        width='346'
        height='140'
        className='absolute top-20 md:top-10 w-1/4 md:w-[14%] -right-10 md:right-4'
      />

      <NextImage
        src='/jurnalistik/about-bg-left.png'
        alt='about-bg left background'
        width='461'
        height='654'
        className='absolute left-0 bottom-0 w-1/6'
      />
      <NextImage
        src='/jurnalistik/about-bg-right.png'
        alt='about-bg right background'
        width='460'
        height='654'
        className='absolute right-0 bottom-0 w-1/6'
      />
    </div>
  );
};

export const AboutPattern = () => {
  React.useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className='relative w-full'>
      <NextImage
        src='/jurnalistik/about-pattern.png'
        alt='timeline bottom illustration'
        width='2880'
        height='175'
        className='w-full'
      />
    </div>
  );
};
