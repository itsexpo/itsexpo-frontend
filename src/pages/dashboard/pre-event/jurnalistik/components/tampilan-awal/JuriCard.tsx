import * as React from 'react';

import NextImage from '@/components/NextImage';
import Typography from '@/components/typography/Typography';
import { juriJurnalistikContents } from '@/contents/pre-event/jurnalistik/tampilan-awal';

export default function JuriCard() {
  return (
    <div className='p-6 shadow-pendaftaran rounded-xl bg-typo-white'>
      <Typography
        as='h6'
        variant='h6'
        className='font-bold text-typo-primary text-center md:text-left'
      >
        Juri
      </Typography>
      <div className='grid md:grid-rows-1 grid-rows-3 grid-flow-col mt-6 gap-6'>
        {juriJurnalistikContents.map(
          ({ img, name, position, description }, index) => (
            <div
              className='flex flex-col items-center md:items-start gap-y-6 font-secondary'
              key={index}
            >
              <NextImage {...img} imgClassName='rounded-md' />
              <div className='flex flex-col items-center md:items-start gap-y-4'>
                {/* Name and position */}
                <div className='flex flex-col'>
                  <Typography
                    variant='p'
                    className='font-semibold text-typo-primary text-center md:text-left'
                  >
                    {name}
                  </Typography>
                  <Typography
                    variant='c'
                    className='font-medium text-success-500 text-center md:text-left'
                  >
                    {position}
                  </Typography>
                </div>

                {/* Description */}
                <Typography
                  variant='b1'
                  className='text-typo-secondary text-center md:text-left'
                >
                  {description}
                </Typography>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
}
