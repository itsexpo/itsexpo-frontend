import 'aos/dist/aos.css';

import AOS from 'aos';
import { useEffect } from 'react';

import NextImage from '@/components/NextImage';

export default function BackgroundIllustration() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className='absolute w-full h-full'>
      <NextImage
        src='/redirect/flower.png'
        alt='flower mobile'
        width='76'
        height='65'
        priority={true}
        className='absolute top-36 left-20 md:hidden'
        data-aos='zoom-in'
        data-aos-duration='1000'
      />
      <NextImage
        src='/redirect/flower.png'
        alt='flower mobile'
        width='90'
        height='78'
        priority={true}
        className='absolute bottom-44 -right-6 md:hidden'
        data-aos='zoom-in'
        data-aos-duration='1000'
      />
      <NextImage
        src='/redirect/flower.png'
        alt='flower left'
        width='115'
        height='113'
        priority={true}
        className='absolute top-24 left-[28%] hidden md:block'
        data-aos='zoom-in'
        data-aos-duration='1000'
      />
      <NextImage
        src='/redirect/flower.png'
        alt='flower right'
        width='75'
        height='74'
        priority={true}
        className='absolute bottom-40 right-[22%] hidden md:block'
        data-aos='zoom-in'
        data-aos-duration='1000'
      />
      <NextImage
        src='/redirect/flake.png'
        alt='flake right'
        width='40'
        height='42'
        priority={true}
        className='absolute top-56 md:top-48 right-7 md:right-[22%]'
        data-aos='zoom-in'
        data-aos-duration='1500'
      />
      <NextImage
        src='/redirect/flake.png'
        alt='flake left'
        width='40'
        height='42'
        priority={true}
        className='absolute bottom-48 md:bottom-56 left-8 md:left-[25%]'
        data-aos='zoom-in'
        data-aos-duration='1500'
      />
      <NextImage
        src='/redirect/leaf.png'
        alt='right leaf mobile'
        width='149'
        height='102'
        priority={true}
        className='absolute top-5 right-3 md:hidden'
        data-aos='fade-down-left'
        data-aos-duration='1000'
      />
      <NextImage
        src='/redirect/leaf.png'
        alt='right leaf'
        width='239'
        height='159'
        priority={true}
        className='absolute top-4 right-4 hidden md:block'
        data-aos='fade-down-left'
        data-aos-duration='1000'
      />
      <NextImage
        src='/redirect/leaf.png'
        alt='left leaf mobile'
        width='149'
        height='102'
        priority={true}
        className='absolute top-5 left-3 -scale-x-[1] md:hidden'
        data-aos='fade-down-left'
        data-aos-duration='1000'
      />
      <NextImage
        src='/redirect/leaf.png'
        alt='left leaf'
        width='239'
        height='159'
        priority={true}
        className='absolute top-4 left-4 -scale-x-[1] hidden md:block'
        data-aos='fade-down-left'
        data-aos-duration='1000'
      />
      <NextImage
        src='/redirect/mountains-mobile.png'
        alt='mountanus mobile'
        width='390'
        height='108'
        priority={true}
        className='absolute w-full bottom-0 md:hidden'
      />
      <NextImage
        src='/redirect/mountains.png'
        alt='mountanus'
        width='1440'
        height='141'
        priority={true}
        className='absolute w-full bottom-0 hidden md:block'
      />
      <NextImage
        src='/redirect/wayang-cloud.png'
        alt='wayang on cloud left'
        width='303'
        height='472'
        priority={true}
        className='absolute w-[16%] top-1/2 -translate-y-[40%] left-0 hidden md:block'
        data-aos='fade-right'
        data-aos-duration='1500'
      />
      <NextImage
        src='/redirect/wayang-cloud.png'
        alt='wayang on cloud right'
        width='303'
        height='472'
        priority={true}
        className='absolute w-[16%] top-1/2 -translate-y-[40%] right-0 -scale-x-[1] hidden md:block'
        data-aos='fade-right'
        data-aos-duration='1500'
      />
    </div>
  );
}
