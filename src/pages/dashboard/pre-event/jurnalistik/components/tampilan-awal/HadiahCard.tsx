import * as React from 'react';

import NextImage from '@/components/NextImage';
import Typography from '@/components/typography/Typography';
import { hadiahJurnalistikContents } from '@/contents/pre-event/jurnalistik/tampilan-awal';

export default function HadiahCard() {
  return (
    <div className='p-6 shadow-pendaftaran rounded-xl bg-typo-white'>
      <Typography
        as='h6'
        variant='h6'
        className='font-bold text-typo-primary text-center md:text-left'
      >
        Hadiah
      </Typography>
      <div className='grid md:grid-rows-3 grid-rows-6 grid-flow-col mt-6 gap-6'>
        {hadiahJurnalistikContents.map(({ img, text, prize }, index) => (
          <div className='relative text-center' key={index}>
            <NextImage
              {...img}
              className='w-full'
              imgClassName='rounded-[25px]'
            />
            <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
              <Typography variant='p' className='font-semibold text-white'>
                {text}
              </Typography>
              <Typography variant='h5' className='font-bold text-white mt-2'>
                {prize}
              </Typography>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
