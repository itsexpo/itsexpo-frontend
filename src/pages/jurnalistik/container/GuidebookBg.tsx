import 'aos/dist/aos.css';

import * as React from 'react';

import NextImage from '@/components/NextImage';

export const GuidebookBackground = () => {
  return (
    <div className='w-full h-full'>
      <NextImage
        src='/jurnalistik/gbook-left.png'
        alt='about gbook-bg-left'
        width='1088'
        height='1210'
        className='absolute hidden md:block z-0 -bottom-60 w-[30%] -translate-y-1/2'
      />
      <NextImage
        src='/jurnalistik/gbook-right.png'
        alt='about gbook-bg-right'
        width='1088'
        height='1204'
        className='absolute hidden md:block z-0 right-0 -bottom-60 w-[30%] -translate-y-1/2 '
      />
      <NextImage
        src='/jurnalistik/gbook-left2.png'
        alt='about gbook-bg-left'
        width='657'
        height='1414'
        className='absolute hidden md:block -bottom-60 w-[18%] -translate-y-1/2 '
      />
      <NextImage
        src='/jurnalistik/gbook-right2.png'
        alt='about gbook-bg-right'
        width='806'
        height='1435'
        className='absolute hidden md:block right-0 -bottom-60 w-[22%] -translate-y-1/2 '
      />
      <NextImage
        src='/jurnalistik/gbook-mobile.png'
        alt='about gbook-bg-mobile'
        width='780'
        height='507'
        className='absolute block md:hidden -bottom-12 w-full'
      />
      <NextImage
        src='/jurnalistik/gbook-orn-kiri.png'
        alt='about gbook-orn-kiri'
        width='154'
        height='142'
        className='absolute z-[1] top-48 md:top-20 w-[8%] md:w-[4%] -translate-y-1/2 '
      />
      <NextImage
        src='/jurnalistik/gbook-orn-kanan.png'
        alt='about gbook-orn-kanan'
        width='149'
        height='166'
        className='absolute z-[1] right-0 top-96 md:top-32 w-[8%] md:w-[4%] -translate-y-1/2 '
      />
    </div>
  );
};

export const GuidebookPattern = () => {
  return (
    <div>
      <NextImage
        src='/jurnalistik/bunga-faq.png'
        alt='bunga-faq'
        width='2880'
        height='1021'
        className='absolute hidden md:block w-full -top-[21%]'
      />
      <NextImage
        src='/jurnalistik/bunga-faq-mobile.png'
        alt='bunga-faq'
        width='780'
        height='325'
        className='absolute block md:hidden w-full -top-[3%]'
      />
    </div>
  );
};
