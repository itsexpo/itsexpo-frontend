import 'aos/dist/aos.css';

import AOS from 'aos';
import * as React from 'react';

import NextImage from '@/components/NextImage';

export const SejarahBackground1 = () => {
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

export const SejarahBackground2 = () => {
  React.useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className='relative min-h-fit w-full mt-20'>
      <NextImage
        src='/landing/timeline-illustration-0.png'
        alt='timeline bottom illustration'
        width='2880'
        height='1522'
        className='w-full'
      />
      <NextImage
        src='/landing/timeline-illustration-1.png'
        alt='timeline bottom illustration'
        width='2880'
        height='1522'
        className='absolute bottom-0 w-full'
        data-aos='fade-up'
      />
      <NextImage
        src='/landing/timeline-illustration-4.png'
        alt='timeline bottom illustration'
        width='2879'
        height='1300'
        className='absolute bottom-0 w-full'
        data-aos='fade-up'
      />
      <NextImage
        src='/aboutus/sejarah-illustration-back.png'
        alt='timeline bottom illustration'
        width='2880'
        height='525'
        className='absolute bottom-0 w-full'
        data-aos='fade-up'
        data-aos-delay='200'
      />
      <NextImage
        src='/aboutus/sejarah-illustration-middle.png'
        alt='timeline bottom illustration'
        width='2880'
        height='550'
        className='absolute bottom-0 w-full'
        data-aos='fade-up'
        data-aos-offset='300'
      />
      <NextImage
        src='/aboutus/sejarah-illustration-front.png'
        alt='timeline bottom illustration'
        width='2880'
        height='497'
        className='absolute bottom-0 w-full'
      />
    </div>
  );
};
