import * as React from 'react';

import NextImage from '@/components/NextImage';
import Typography from '@/components/typography/Typography';
import { timelineWahanaSeni } from '@/contents/main-event/wahana-seni/tampilan-awal';
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

      <div className='relative w-full grid grid-cols-1 md:grid-cols-6 gap-12 md:gap-6'>
        {/* Line */}
        <div
          className={clsxm(
            'absolute w-4/12 max-w-[128px] h-full flex justify-center py-4',
            'md:top-5 md:w-full md:max-w-full md:h-fit md:py-0'
          )}
        >
          <div className='w-0.5 h-full md:w-10/12 md:h-0.5 bg-typo-outline' />
        </div>

        {/* Timeline */}
        {timelineWahanaSeni.map((content, index) => (
          <div
            key={index}
            className='flex md:flex-col items-center gap-8 md:gap-2'
          >
            {/* Timeline Icon */}
            <div className='max-w-[128px] w-4/12 md:w-6/12'>
              <NextImage
                {...content.img}
                className='w-full'
                imgClassName='object-contain'
              />
            </div>

            {/* Timeline Content */}
            <div className='flex-1 flex flex-col md:items-center z-0'>
              <Typography
                variant='b1'
                className='md:text-center font-semibold text-typo-primary'
              >
                {content.date}
              </Typography>

              <Typography
                as='c'
                variant='c'
                color='secondary'
                className='md:text-center'
              >
                {content.caption}
              </Typography>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
