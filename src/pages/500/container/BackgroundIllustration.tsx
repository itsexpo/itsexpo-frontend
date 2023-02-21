import 'aos/dist/aos.css';

import AOS from 'aos';
import React, { useEffect } from 'react';

import NextImage from '@/components/NextImage';

const BackgroundIllustration = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className='absolute flex flex-col w-full h-full'>
      <div className='relative flex-1 overflow-hidden'>
        <NextImage
          src='/errorpage/500/leftFan.png'
          alt='Left Fan'
          width='275'
          height='450'
          priority={true}
          className='absolute bottom-5 -left-16 w-[196px] lg:w-[275px] md:left-12 lg:left-24'
          data-aos='fade-up'
          data-aos-duration='1000'
        />
        <NextImage
          src='/errorpage/500/rightFan.png'
          alt='Right Fan'
          width='275'
          height='450'
          priority={true}
          className='absolute bottom-5 -right-16 w-[196px] lg:w-[275px] md:right-12 lg:right-24'
          data-aos='fade-up'
          data-aos-duration='1000'
        />
        <NextImage
          src='/errorpage/500/topOrnament.png'
          alt='Top Ornament'
          width='1440'
          height='134'
          priority={true}
          className='absolute left-1/2 top-0 -translate-x-1/2 w-[640px] sm:w-[768px] md:w-[1024px] lg:w-full'
        />
        <NextImage
          src='/errorpage/500/bottomOrnament.png'
          alt='Bottom Ornament'
          width='1440'
          height='134'
          priority={true}
          className='absolute left-1/2 bottom-0 -translate-x-1/2 w-[640px] sm:w-[768px] md:w-[1024px] lg:w-full'
        />
      </div>
    </div>
  );
};

export default BackgroundIllustration;
