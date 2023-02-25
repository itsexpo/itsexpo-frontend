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
      />
      <NextImage
        src='/aboutus/hero-particle.png'
        width={75}
        height={75}
        className='absolute right-[35%] w-[10%] max-w-[75px] bottom-64'
        alt='hero particle'
      />
      <NextImage
        src='/aboutus/hero-left-wayang.png'
        width='400'
        height='800'
        className='absolute h-screen left-0 bottom-0 hidden md:block'
        alt='hero left wayang'
      />
      <NextImage
        src='/aboutus/hero-right-wayang.png'
        width='750'
        height='1000'
        className='absolute h-screen right-0 top-0   hidden md:block'
        alt='hero right wayang'
      />
      <NextImage
        width={110}
        height={80}
        alt='Hero Right Cloud Image'
        src='/aboutus/right-cloud.png'
        className='absolute right-0 top-24 md:hidden'
      />
      <NextImage
        src='/aboutus/left-cloud.png'
        width={120}
        height={70}
        alt='Hero Left Cloud Image'
        className='absolute left-0 top-24 md:hidden'
      />
      <NextImage
        src='/aboutus/hero-left-bird.png'
        alt='Hero Left Bird Image'
        width={200}
        height={240}
        className='absolute -left-10 top-80 md:hidden'
      />
      <NextImage
        src='/aboutus/hero-right-bird.png'
        alt='Hero Right Bird Image'
        width={200}
        height={240}
        className='absolute -right-10 top-80 md:hidden'
      />
      <NextImage
        src='/aboutus/hero-cloud-right.png'
        alt=''
        className='absolute right-0 top-28 hidden md:block'
        width={200}
        height={95}
      />
      <NextImage
        src='/aboutus/hero-cloud-left.png'
        alt=''
        className='absolute left-0 top-28 hidden md:block'
        width={200}
        height={95}
      />

      {/* Hero bottom clouds and mountain */}
      <div className='absolute w-full bottom-6 sm:bottom-0  flex'>
        <NextImage
          width={500}
          height={200}
          className='w-full h-full md:hidden '
          src='/aboutus/hero-mountain.png'
          alt='Mountain Hero Image'
          layout='responsive'
        />
        <NextImage
          width={500}
          height={170}
          className='hidden h-full w-[60%] md:block mx-auto '
          layout='responsive'
          src='/aboutus/hero-mountain.png'
          alt='Mountain Hero Image'
        />
        <NextImage
          className='absolute -bottom-10 w-full md:hidden z-0'
          alt='Mountain Cloud Hero Image'
          width={200}
          height={80}
          src='/aboutus/mountain-cloud-hero.png'
        />
        <NextImage
          className='bottom-0 w-full hidden md:block absolute'
          alt='Mountain Cloud Hero Image'
          width={200}
          height={30}
          src='/aboutus/hero-cloud-desktop.png'
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
      />
      <NextImage
        width={260}
        height={100}
        src='/aboutus/hero-cloud-vector-left.png'
        alt='vector cloud left'
        className='absolute left-0 top-4 hidden md:block'
      />
      <NextImage
        width={125}
        height={250}
        alt='flower left'
        className='hidden md:absolute md:block left-0 bottom-0 md:w-[10%]'
        src='/aboutus/hero-flower-left.png'
      />
      <NextImage
        width={125}
        height={250}
        alt='flower right'
        className='hidden md:absolute md:block right-0 bottom-0 md:w-[10%]'
        src='/aboutus/hero-flower-right.png'
      />
    </div>
  );
}

export { HeroBackground, HeroCaptionBackground };
