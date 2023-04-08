import React from 'react';

import NextImage from '@/components/NextImage';

const FaqBackground = () => {
  return (
    <div>
      <NextImage
        src='/wahana-seni/hero-bottom.png'
        alt='pattern illustration'
        width='2880'
        height='175'
        className='w-[1440px] min-w-full'
        priority={true}
      />
      <NextImage
        src='/wahana-seni/bunga-faq-bot.png'
        alt='bunga-faq'
        width='2878'
        height='160'
        className='absolute bottom-0 w-full hidden sm:block'
        data-aos='fade-right'
      />
      <NextImage
        src='/wahana-seni/bunga-faq-bot-mobile.png'
        alt='bunga-faq'
        width='780'
        height='144'
        className='absolute bottom-0 w-full block sm:hidden'
        data-aos='fade-right'
      />
      <NextImage
        src='/wahana-seni/faq-pattern.png'
        alt='bunga-faq'
        width='1440'
        height='733'
        className='absolute bottom-0 w-full'
        data-aos='fade-right'
      />

      <NextImage
        src='/wahana-seni/faq-bunga-left1.png'
        alt='ornamen-faq'
        width='100'
        height='605'
        className='absolute bottom-36 left-5 hidden sm:block'
        data-aos='fade-right'
      />

      <NextImage
        src='/wahana-seni/faq-bunga-right.png'
        alt='ornamen-faq'
        width='110'
        height='550'
        className='absolute bottom-36 right-5 hidden sm:block'
        data-aos='fade-left'
      />
      <NextImage
        src='/wahana-seni/faq-bunga-left-mob.png'
        alt='ornamen-faq'
        width='40'
        height='516'
        className='absolute top-52 left-2 block sm:hidden'
      />

      <NextImage
        src='/wahana-seni/faq-bunga-right-mob.png'
        alt='ornamen-faq'
        width='37'
        height='564'
        className='absolute top-52 right-2 block sm:hidden'
      />
    </div>
  );
};

export default FaqBackground;
