import React from 'react';

import NextImage from '@/components/NextImage';

const HadiahBackground = () => {
  return (
    <div>
      <NextImage
        src='/wahana-seni/hadiah-left.png'
        alt='pattern illustration'
        width='299'
        height='332'
        className='absolute top-0 left-[6%] hidden md:block z-10'
      />
      <NextImage
        src='/wahana-seni/hadiah-right.png'
        alt='pattern illustration'
        width='223'
        height='316'
        className='absolute top-0 right-[6%] hidden md:block z-10'
      />
      <NextImage
        src='/wahana-seni/hadiah-mob-left.png'
        alt='pattern illustration'
        width='21'
        height='22'
        className='absolute top-24 left-[6%] block md:hidden z-10'
      />
      <NextImage
        src='/wahana-seni/hadiah-mob-right1.png'
        alt='pattern illustration'
        width='61'
        height='141'
        className='absolute top-0 right-[6%] block md:hidden z-10'
      />
      <NextImage
        src='/wahana-seni/hadiah-mob-left.png'
        alt='pattern illustration'
        width='21'
        height='22'
        className='absolute bottom-10 left-[6%] block md:hidden z-10'
      />
      <NextImage
        src='/wahana-seni/hadiah-mob-right-bot.png'
        alt='pattern illustration'
        width='21'
        height='22'
        className='absolute bottom-10 right-[6%] block md:hidden z-10'
      />
      <NextImage
        src='/wahana-seni/hadiah-left-bot1.png'
        alt='pattern illustration'
        width='254'
        height='250'
        className='absolute bottom-32 left-[6%] hidden md:block z-10'
      />
      <NextImage
        src='/wahana-seni/hadiah-right-bot1.png'
        alt='pattern illustration'
        width='237'
        height='261'
        className='absolute bottom-32 right-[6%] hidden md:block z-10'
      />
    </div>
  );
};

export default HadiahBackground;
