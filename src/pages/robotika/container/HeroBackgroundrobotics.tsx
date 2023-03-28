import Aos from 'aos';
import * as React from 'react';

import NextImage from '@/components/NextImage';

export const HeroBackgroundrobotics = () => {
  React.useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div className='absolute flex flex-col w-full h-full'>
      <div className='relative flex-1'>
        {/* Desktop */}
        <NextImage
          src='/robotics/hero-left-pattern2.png'
          alt='pattern illustration'
          width='396'
          height='1250'
          className='absolute left-0 hidden md:block'
          priority={true}
        />
        <NextImage
          src='/robotics/hero-right-pattern1.png'
          alt='pattern illustration'
          width='501'
          height='1270'
          className='absolute right-0 hidden md:block'
          priority={true}
        />

        <NextImage
          src='/robotics/awan-left-1.png'
          alt='landing hero left figure'
          width='388'
          height='144'
          className='absolute hidden md:block w-[10%] left-16 top-0 mt-28'
          data-aos='fade-right'
          data-aos-delay='700'
        />
        <NextImage
          src='/robotics/awan-left-2.png'
          alt='landing hero left figure'
          width='293'
          height='118'
          className='absolute hidden md:block w-[8%] left-48 ml-8 top-0 mt-36'
          data-aos='fade-right'
          data-aos-delay='900'
        />
        <NextImage
          src='/robotics/awan-right.png'
          alt='hero right figure'
          width='222'
          height='92'
          className='absolute hidden md:block w-[6%] right-52 top-32'
          data-aos='fade-right'
          data-aos-delay='700'
        />
        <NextImage
          src='/robotics/hero-particles1.png'
          alt='hero particles1'
          width='69'
          height='76'
          className='absolute hidden md:block w-[2%] left-96 ml-72 top-32'
        />
        {/* Mobile */}
        <NextImage
          src='/robotics/hero-header-mobile.png'
          alt='hero-header-mobile'
          width='780'
          height='85'
          className='absolute block md:hidden w-full top-16'
          data-aos='fade-right'
          data-aos-delay='700'
        />
        <NextImage
          src='/robotics/hero-footer-mobile.png'
          alt='hero-footer-mobile'
          width='642'
          height='197'
          className='absolute block md:hidden w-4/5 bottom-48 mx-8'
          data-aos='fade-right'
          data-aos-delay='700'
        />
      </div>
    </div>
  );
};
