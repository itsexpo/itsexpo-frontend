import 'aos/dist/aos.css';

import AOS from 'aos';
import * as React from 'react';

import NextImage from '@/components/NextImage';

export default function ComingSoonBackground() {
  React.useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <NextImage
        data-aos-delay='300'
        data-aos='fade-up-right'
        data-aos-duration='500'
        data-aos-easing='ease-in-out'
        className='absolute w-[40%] md:w-[32%] bottom-4 md:bottom-0 -left-10 md:left-0 z-10'
        alt='kipas kiri'
        width={886}
        height={1346}
        priority
        src={'/comingsoon/kipas-kiri.png'}
      />
      <NextImage
        data-aos-delay='300'
        data-aos='fade-up-left'
        data-aos-duration='500'
        data-aos-easing='ease-in-out'
        className='absolute w-[40%] md:w-[32%] bottom-4 md:bottom-0 -right-[36px] md:right-0 z-10'
        alt='kipas kanan'
        priority
        width={858}
        height={1365}
        src={'/comingsoon/kipas-kanan.png'}
      />
      <NextImage
        data-aos-delay='100'
        data-aos='fade-up'
        data-aos-duration='500'
        data-aos-easing='ease-in-out'
        priority
        className='absolute hidden md:block w-full md:-bottom-10 right-0 z-[9]'
        alt='gunung'
        width={2160}
        height={791}
        src={'/comingsoon/gunung.png'}
      />
      <NextImage
        className='absolute block md:hidden w-full -bottom-6 right-0 z-[9]'
        alt='gunung mobile'
        width={586}
        height={442}
        priority
        src={'/comingsoon/gunung-mobile.png'}
      />
      <NextImage
        className='absolute hidden md:block w-96 top-0 left-0 z-[8]'
        alt='ornamen kiri'
        width={693}
        height={1500}
        priority
        src={'/comingsoon/ornamen-kiri.png'}
      />
      <NextImage
        className='absolute hidden md:block w-[26rem] top-0 right-0 z-[8]'
        alt='ornamen kanan'
        width={839}
        height={1523}
        priority
        src={'/comingsoon/ornamen-kanan.png'}
      />
      <NextImage
        className='absolute w-16 md:w-20 top-24 left-0 z-[9] blur-sm md:blur-none'
        alt='awan kiri 1'
        width={105}
        height={122}
        priority
        src={'/comingsoon/awan-kiri1.png'}
      />
      <NextImage
        className='absolute w-36 md:w-44 top-32 left-4 z-[9] blur-sm md:blur-none'
        alt='awan kiri 2'
        width={314}
        height={157}
        priority
        src={'/comingsoon/awan-kiri2.png'}
      />
      <NextImage
        className='absolute w-32 md:w-36 top-24 md:top-44 right-0 z-[9] blur-sm md:blur-none'
        alt='awan kanan 1'
        width={233}
        height={157}
        priority
        src={'/comingsoon/awan-kanan1.png'}
      />
      <NextImage
        className='absolute w-36 md:w-36 top-16 md:top-36 right-16 z-[9] blur-sm md:blur-none'
        alt='awan kanan 2'
        width={236}
        height={122}
        priority
        src={'/comingsoon/awan-kanan2.png'}
      />
      <NextImage
        className='absolute w-32 md:w-48 xl:w-64 top-[2%] md:top-[4%] left-[20%] z-[9] blur-sm md:blur-none'
        alt='burung'
        width={408}
        height={433}
        priority
        src={'/comingsoon/burung.png'}
      />
      <NextImage
        className='absolute w-16 bottom-[20%] md:bottom-[30%] right-[65%] md:right-[30%]'
        alt='bunga 1'
        width={118}
        height={119}
        priority
        src={'/comingsoon/bunga-1.png'}
      />
      <NextImage
        className='absolute w-12 md:w-16 top-[3%] md:top-[10%] right-[22%] md:right-[40%]'
        alt='bunga 2'
        width={79}
        height={83}
        priority
        src={'/comingsoon/bunga-2.png'}
      />
      <NextImage
        className='absolute hidden md:block w-16 bottom-[40%] left-[25%]'
        alt='bunga 3'
        width={79}
        height={83}
        priority
        src={'/comingsoon/bunga-2.png'}
      />
    </>
  );
}
