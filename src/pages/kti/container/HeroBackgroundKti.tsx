import Aos from 'aos';
import * as React from 'react';

import NextImage from '@/components/NextImage';

export const HeroBackgroundKti = () => {
  React.useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div className='absolute flex flex-col w-full h-full'>
      <div className='relative flex-1'>
        {/* Desktop */}
        <NextImage
          src='/kti/hero-left-pattern.png'
          alt='pattern illustration'
          width='400'
          height='850'
          className='absolute left-0 hidden md:block'
          priority={true}
        />
        <NextImage
          src='/kti/hero-right-pattern.png'
          alt='pattern illustration'
          width='520'
          height='850'
          className='absolute right-0 -top-10 hidden md:block'
          priority={true}
        />
        <NextImage
          src='/kti/hero-left-cloud.png'
          alt='pattern illustration'
          width='591'
          height='110'
          className='absolute left-20 top-20 lg:top-32 hidden md:block'
          priority={true}
          data-aos='fade-right'
          aos-delay='200'
        />
        {/* Mobile */}
        <NextImage
          src='/kti/hero-mobile-left-cloud.png'
          alt='pattern illustration'
          width='70'
          height='237'
          className='absolute left-0 top-16 md:hidden block'
          priority={true}
        />
        <NextImage
          src='/kti/hero-mobile-right-cloud.png'
          alt='pattern illustration'
          width='197'
          height='275'
          className='absolute right-0 top-16 md:hidden block'
          priority={true}
        />
        <NextImage
          src='/kti/hero-mobile-left-flower.png'
          alt='pattern illustration'
          width='27'
          height='30'
          className='absolute left-14 bottom-24  md:hidden block'
          priority={true}
        />
        <NextImage
          src='/kti/hero-mobile-right-flower.png'
          alt='pattern illustration'
          width='27'
          height='30'
          className='absolute right-14 bottom-14  md:hidden block'
          priority={true}
        />
      </div>
    </div>
  );
};
