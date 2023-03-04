import 'aos/dist/aos.css';

import React from 'react';

import NextImage from '@/components/NextImage';
function HeroBackground() {
  return (
    <div>
      <NextImage
        src='/aboutus/particle3.png'
        className='absolute left-[30%] top-16'
        width={45}
        height={45}
        alt='hero particle'
        data-aos='fade-down'
        data-aos-delay='600'
        priority={true}
      />
      <NextImage
        src='/aboutus/hero-particle.png'
        width={75}
        height={75}
        className='absolute md:right-[35%] right-[25%] w-[10%] max-w-[75px] bottom-60 md:bottom-64'
        alt='hero particle'
        data-aos='fade-up'
        data-aos-delay='600'
        priority={true}
      />
      <NextImage
        src='/aboutus/hero-left-wayang.png'
        width='450'
        height='850'
        className='absolute left-0 bottom-0 hidden md:block'
        alt='hero wayang'
        data-aos='fade-right'
        data-aos-delay='800'
      />
      <NextImage
        src='/aboutus/hero-right-wayang.png'
        width='750'
        height='1000'
        className='absolute right-0 bottom-0 h-screen  hidden md:block'
        alt='hero wayang'
        data-aos='fade-left'
        data-aos-delay='800'
      />
      <NextImage
        width={110}
        height={80}
        alt='hero cloud'
        src='/aboutus/right-cloud.png'
        className='absolute right-0 top-24 md:hidden'
        data-aos='fade-left'
        data-aos-delay='700'
      />
      <NextImage
        src='/aboutus/left-cloud.png'
        width={120}
        height={70}
        alt='hero cloud'
        className='absolute left-0 top-24 md:hidden'
        data-aos='fade-right'
        data-aos-delay='700'
      />
      <NextImage
        src='/aboutus/hero-cloud-right.png'
        alt='hero cloud'
        className='absolute right-0 top-28 hidden md:block'
        width={200}
        height={95}
        data-aos='fade-left'
        data-aos-delay='600'
      />
      <NextImage
        src='/aboutus/hero-cloud-left.png'
        alt='hero cloud'
        className='absolute left-0 top-28 hidden md:block'
        width={200}
        height={95}
        data-aos='fade-right'
        data-aos-delay='600'
      />

      {/* Hero bottom clouds and mountain */}
      <div className='absolute w-full bottom-6 sm:bottom-0  flex'>
        <NextImage
          width={500}
          height={170}
          className='absolute bottom-[45vw] -left-10 scale-[1.6]  h-full w-[120vw] md:w-[60%] md:max-w-4xl md:left-0 md:scale-100 md:block md:relative md:bottom-0  md:mx-auto '
          layout='responsive'
          src='/aboutus/hero-mountain.png'
          alt='hero mountain'
          priority={true}
          data-aos='fade-up'
          data-aos-delay='600'
        />
        <NextImage
          className='-bottom-1 left-10 sm:bottom-8  md:bottom-0 md:left-0 w-[180vw] scale-[1.35] md:scale-100 md:w-full md:block absolute'
          alt='hero mountain'
          width={200}
          height={30}
          src='/aboutus/hero-cloud-desktop.png'
          priority={true}
        />
      </div>
    </div>
  );
}

function HeroCaptionBackground() {
  return (
    <div>
      <NextImage
        width={300}
        height={100}
        src='/aboutus/hero-cloud-vector-right.png'
        alt='vector cloud right'
        className='absolute right-28 top-0 hidden md:block'
        data-aos='fade-left'
        data-aos-delay='200'
      />
      <NextImage
        width={260}
        height={100}
        src='/aboutus/hero-cloud-vector-left.png'
        alt='vector cloud left'
        className='absolute left-0 top-4 hidden md:block'
        data-aos='fade-right'
        data-aos-delay='200'
      />
      <NextImage
        width={125}
        height={250}
        alt='flower left'
        className='hidden md:absolute md:block left-0 bottom-0 md:w-[10%]'
        src='/aboutus/hero-flower-left.png'
        data-aos='fade-right'
        data-aos-delay='300'
      />
      <NextImage
        width={125}
        height={250}
        alt='flower right'
        className='hidden md:absolute md:block right-0 bottom-0 md:w-[10%]'
        src='/aboutus/hero-flower-right.png'
        data-aos='fade-left'
        data-aos-delay='300'
      />
    </div>
  );
}

export { HeroBackground, HeroCaptionBackground };
