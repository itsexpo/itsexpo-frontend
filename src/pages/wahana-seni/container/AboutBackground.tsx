import Aos from 'aos';
import * as React from 'react';

import NextImage from '@/components/NextImage';

export const AboutBackgroundWahanaSeni = () => {
  React.useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div className='absolute flex flex-col w-full h-full'>
      <div className='relative flex-1'>
        {/* Desktop */}
        <NextImage
          src='/wahana-seni/about-bg-left.png'
          alt='pattern illustration'
          width='806'
          height='615'
          className='absolute -left-[5%] md:left-0 w-[45%] md:w-1/4 bottom-0'
          priority={true}
        />
        <NextImage
          src='/wahana-seni/about-bg-right.png'
          alt='pattern illustration'
          width='804'
          height='615'
          className='absolute -right-[5%] md:right-0 w-[45%] md:w-1/4 bottom-0'
          priority={true}
        />
        <NextImage
          src='/wahana-seni/about-particle-left.png'
          alt='pattern illustration'
          width='674'
          height='778'
          className='absolute left-[8%] w-1/2 md:w-1/4 top-40 hidden sm:block'
          priority={true}
        />
        <NextImage
          src='/wahana-seni/about-particle-right.png'
          alt='pattern illustration'
          width='879'
          height='945'
          className='absolute right-[8%] w-1/2 md:w-1/4 top-40 hidden sm:block'
          priority={true}
        />
        <NextImage
          src='/wahana-seni/about-particle-mob.png'
          alt='pattern illustration'
          width='147'
          height='78'
          className='absolute left-1/4 bottom-20 block sm:hidden'
          priority={true}
        />
      </div>
    </div>
  );
};
