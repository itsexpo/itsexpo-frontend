import React from 'react';

import NextImage from '@/components/NextImage';

export const VideoBackgroundRobotics = () => {
  return (
    <div className='w-full h-full'>
      <NextImage
        alt='video-flower-linetracer'
        width='1400'
        height='90'
        className='absolute hidden md:block w-[80%] max-w-[75rem] right-[14%] h-40'
        src='/robotics/video-flower-linetracer.png'
      />
      <NextImage
        width='700'
        src='/robotics/video-flower-mobile-linetracer.png'
        height='100'
        className='absolute w-[60%] inset-0 m-auto top-10 md:hidden'
        alt='video-flower-mobile-linetracer'
      />
      <NextImage
        width='700'
        src='/robotics/video-flower-mobile-opencategory.png'
        height='150'
        className='absolute top-[48%] inset-0 w-[70%] mx-auto md:hidden'
        alt='video-flower-mobile-linetracer'
      />
      <NextImage
        alt='video-flower-opencategory'
        width='800'
        height='200'
        className='absolute w-[92%] md:block max-w-[105rem] hidden inset-0 m-auto -bottom-[25%] h-40'
        src='/robotics/video-flower-opencategory.png'
      />
      <NextImage
        height='240.3'
        className='absolute md:block hidden top-[40%] w-[10%] -right-[4%]'
        width='130.92'
        src='/robotics/video-right-bird.png'
        alt='video-right-bird'
      />
      <NextImage
        height='274.1'
        className='z-50 absolute -bottom-[4%] md:block hidden w-[20%] -left-[9%]'
        width='260.98'
        src='/robotics/video-left-bird.png'
        alt='video-left-bird'
      />
    </div>
  );
};
