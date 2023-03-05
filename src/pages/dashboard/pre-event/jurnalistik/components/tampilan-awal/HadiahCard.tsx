import * as React from 'react';

import NextImage from '@/components/NextImage';
import Typography from '@/components/typography/Typography';
import { HadiahJurnalistikData } from '@/types/entities/pre-event/jurnalistik';

export default function HadiahCard({
  img,
  text,
  prize,
}: HadiahJurnalistikData) {
  return (
    <div className='relative text-center'>
      <NextImage {...img} className='w-full' imgClassName='rounded-[25px]' />
      <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
        <Typography variant='p' className='font-semibold text-white'>
          {text}
        </Typography>
        <Typography variant='h4' className='font-bold text-white mt-2'>
          {prize}
        </Typography>
      </div>
    </div>
  );
}
