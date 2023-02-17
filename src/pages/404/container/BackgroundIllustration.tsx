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
      <div className='relative flex-1'>
        <NextImage
          src='/errorpage/404/leftOrnament.png'
          alt='Left Ornament'
          width='404'
          height='760'
          priority={true}
          className='absolute h-full w-1/5 left-0'
        />
        <NextImage
          src='/errorpage/404/rightOrnament.png'
          alt='Right Ornament'
          width='404'
          height='760'
          priority={true}
          className='absolute h-full w-1/5 right-0'
        />
        <NextImage
          src='/errorpage/404/leftClouds.png'
          alt='Left Clouds'
          width='600'
          height='300'
          priority={true}
          className='absolute hidden sm:block h-full left-0'
          data-aos='fade-right'
          data-aos-duration='1000'
        />
        <NextImage
          src='/errorpage/404/leftCloudsMobile.png'
          alt='Left Clouds'
          width='264'
          height='224'
          priority={true}
          className='absolute sm:hidden h-full left-0'
          data-aos='fade-right'
          data-aos-duration='1000'
        />
        <NextImage
          src='/errorpage/404/rightClouds.png'
          alt='Right Clouds'
          width='330'
          height='400'
          priority={true}
          className='absolute hidden md:block h-full right-0'
          data-aos='fade-left'
          data-aos-duration='1000'
        />
        <NextImage
          src='/errorpage/404/rightCloudsMobile.png'
          alt='Right Clouds'
          width='85'
          height='275'
          priority={true}
          className='absolute md:hidden top-1/4  h-full right-0'
          data-aos='fade-right'
          data-aos-duration='1000'
        />
        <NextImage
          src='/errorpage/404/bottomLeftGrass.png'
          alt='Bottom Left Grass'
          width='640'
          height='105'
          priority={true}
          className='absolute w-3/4 sm:w-2/5 left-0 bottom-0'
          // data-aos="fade-left"
          // data-aos-duration="1000"
        />
        <NextImage
          src='/errorpage/404/bottomRightGrass.png'
          alt='Bottom Right Grass'
          width='635'
          height='95'
          priority={true}
          className='absolute w-3/4 sm:w-2/5 right-0 bottom-0'
          // data-aos="fade-left"
          // data-aos-duration="1000"
        />
        <NextImage
          src='/errorpage/404/bottomMidGrass.png'
          alt='Bottom Mid Grass'
          width='1325'
          height='148'
          priority={true}
          className='absolute w-full sm:w-5/6 left-1/2 -translate-x-1/2 bottom-0'
          // data-aos="fade-up"
          // data-aos-duration="1500"
        />
        <NextImage
          src='/errorpage/404/wayang.png'
          alt='Wayang'
          width='225'
          height='342'
          priority={true}
          className='absolute w-1/3 sm:w-[14%] left-[20%] bottom-0'
          data-aos='fade-up'
          data-aos-duration='2000'
        />
        <div
        // data-aos="fade-down"
        // data-aos-duration="1500"
        >
          <NextImage
            src='/errorpage/404/bottomMidFrontGrass.png'
            alt='Bottom Mid Front Grass'
            width='1000'
            height='100'
            priority={true}
            className='absolute w-5/6 sm:w-3/5 left-1/2 -translate-x-1/2 bottom-0'
          />
        </div>
      </div>
    </div>
  );
};

export default BackgroundIllustration;
