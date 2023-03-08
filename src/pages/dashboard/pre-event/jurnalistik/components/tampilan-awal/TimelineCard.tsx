import * as React from 'react';

import NextImage from '@/components/NextImage';
import Typography from '@/components/typography/Typography';
import { timelineJurnalistik } from '@/contents/pre-event/jurnalistik/tampilan-awal';
import clsxm from '@/lib/clsxm';

export default function TimelineCard() {
  return (
    <div
      className={clsxm(
        'flex flex-col items-center rounded-xl',
        'bg-typo-white shadow-pendaftaran p-6 gap-10'
      )}
    >
      <Typography as='h6' variant='h6' className='font-bold text-typo-primary'>
        Timeline Penting
      </Typography>

      <div className='relative w-full grid grid-cols-1 md:grid-cols-5 gap-6'>
        <div className='absolute top-7 w-full h-full md:h-fit flex justify-center'>
          <div className='w-0.5 h-5/6 md:w-10/12 md:h-0.5 bg-typo-outline' />
        </div>

        {timelineJurnalistik.map((content, index) => (
          <div key={index} className='flex flex-col items-center gap-2'>
            <div className='w-3/12 md:w-6/12'>
              <NextImage
                {...content.img}
                className='w-full'
                imgClassName='object-contain'
              />
            </div>

            <div className='flex flex-col items-center bg-white py-1 z-0'>
              <Typography
                variant='b1'
                className='font-semibold text-typo-primary'
              >
                {content.date}
              </Typography>

              <Typography as='c' variant='c' color='secondary'>
                {content.caption}
              </Typography>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
