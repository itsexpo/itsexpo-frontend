import * as React from 'react';

import NextImage from '@/components/NextImage';
import Typography from '@/components/typography/Typography';
import { JuriJurnalistikData } from '@/types/entities/pre-event/jurnalistik';

export default function JuriCard({
  img,
  name,
  position,
  description,
}: JuriJurnalistikData) {
  return (
    <div className='flex flex-col gap-y-6 font-secondary'>
      <NextImage {...img} imgClassName='rounded-md' />
      <div className='flex flex-col gap-y-4'>
        {/* Name and position */}
        <div className='flex flex-col'>
          <Typography variant='p' className='font-semibold text-typo-primary'>
            {name}
          </Typography>
          <Typography variant='c' className='font-medium text-success-500'>
            {position}
          </Typography>
        </div>

        {/* Description */}
        <Typography variant='b1' className='text-typo-secondary'>
          {description}
        </Typography>
      </div>
    </div>
  );
}
