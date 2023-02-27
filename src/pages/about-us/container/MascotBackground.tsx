import React from 'react';

import NextImage from '@/components/NextImage';

function MascotBackground() {
  return (
    <div className='w-full h-full'>
      <NextImage
        className='absolute left-0 top-20 md:top-28 w-[30%] md:max-w-[225px] z-10'
        src='/aboutus/hero-cloud-left.png'
        width={150}
        height={75}
        alt='cloud'
        data-aos='fade-right'
        data-aos-delay='300'
      />
      <NextImage
        className='absolute right-0 bottom-[46%] md:top-36 w-[30%] md:max-w-[250px] z-10'
        src='/aboutus/hero-cloud-right.png'
        width={160}
        height={75}
        alt='cloud'
        data-aos='fade-left'
        data-aos-delay='300'
      />
      <NextImage
        className='absolute bottom-0 z-0 -left-4 hidden md:block'
        alt='left-wayang'
        width={600}
        height={1100}
        src='/aboutus/mascot-left-wayang.png'
        data-aos='fade-right'
        data-aos-delay='500'
      />
      <NextImage
        alt='right-wayang'
        className='absolute right-0 bottom-0 hidden md:block'
        width={600}
        height={1100}
        src='/aboutus/mascot-right-wayang.png'
        data-aos='fade-left'
        data-aos-delay='500'
      />
    </div>
  );
}

export default MascotBackground;
