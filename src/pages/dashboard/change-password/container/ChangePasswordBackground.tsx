import * as React from 'react';

import NextImage from '@/components/NextImage';

export default function ChangePasswordBackground() {
  return (
    <>
      <div>
        <NextImage
          src='/change-password/background-pattern.png'
          alt='background pattern'
          width='553'
          height='842'
          priority={true}
          className='hidden md:block absolute right-0 bottom-0'
        />
        <NextImage
          src='/change-password/petal.png'
          alt='flower petal'
          width='122'
          height='114'
          priority={true}
          className='absolute -left-7 md:left-[4%] top-48'
        />
        <NextImage
          src='/change-password/petal.png'
          alt='flower petal'
          width='122'
          height='114'
          priority={true}
          className='absolute -right-8 md:right-[4%] bottom-56 md:bottom-48 rotate-0 md:rotate-45'
        />
        <NextImage
          src='/change-password/flake.png'
          alt='flake'
          width='35'
          height='38'
          priority={true}
          className=' absolute left-[12%] md:left-[15%] bottom-36 md:bottom-80 -rotate-[32deg] md:rotate-0'
        />
        <NextImage
          src='/change-password/flake.png'
          alt='flake'
          width='35'
          height='38'
          priority={true}
          className=' absolute left-[75%] md:left-[45%] top-16 md:top-12 -rotate-[32deg] md:rotate-0'
        />
        <NextImage
          src='/change-password/flake.png'
          alt='flake'
          width='52'
          height='60'
          priority={true}
          className='hidden md:block absolute right-[40%] bottom-12 -rotate-[32deg]'
        />
      </div>
      {/* Mobile background */}
      <div className='md:hidden block'>
        <NextImage
          src='/change-password/wing-background.png'
          alt='left wing background'
          width='188'
          height='110'
          priority={true}
          className='absolute left-0 bottom-0'
        />
        <NextImage
          src='/change-password/wing-background.png'
          alt='right wing background'
          width='188'
          height='110'
          priority={true}
          className='absolute right-0 bottom-0 -scale-x-[1]'
        />
        <NextImage
          src='/change-password/flower.png'
          alt='flower background'
          width='92'
          height='59'
          priority={true}
          className='absolute bottom-0 left-1/2 -translate-x-1/2'
        />
        <NextImage
          src='/change-password/cloud-mobile.png'
          alt='cloud background'
          width='128'
          height='51'
          priority={true}
          className='absolute bottom-32 -right-10'
        />
        <NextImage
          src='/change-password/cloud-mobile.png'
          alt='cloud background'
          width='128'
          height='51'
          priority={true}
          className='absolute top-16 -left-12'
        />
      </div>
    </>
  );
}
