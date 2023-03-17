import * as React from 'react';

import NextImage from '@/components/NextImage';
import Typography from '@/components/typography/Typography';
import { timelineKTI } from '@/contents/pre-event/kti/tampilan-awal';
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

      <div className='relative w-full grid grid-cols-1 md:auto-rows-auto md:grid-cols-10 md:grid-rows-1 md:gap-y-14 gap-y-6 md:gap-x-4'>
        <div className='md:grid md:grid-cols-10 md:grid-rows-2 absolute w-full h-full  flex left-1/4 md:left-0 md:justify-center '>
          <div className='w-0.5 h-[90%]  absolute col-span-full md:w-[89%] md:col-start-2 md:top-[44.5%] self-center md:h-0.5 bg-typo-outline' />
          <div className='w-0.5 h-[86%] md:w-0.5 self-start -top-6 lg:-top-7 xl:-top-6 relative md:h-20 row-start-2 bg-typo-outline col-start-2 hidden md:flex' />
          <div className='w-0.5 h-[86%] md:w-0.5 md:h-20 mb-6 self-end bg-typo-outline col-start-3 row-start-1 hidden md:flex' />
          <div className='w-0.5 h-[86%] md:w-0.5 self-start -top-6 lg:-top-7 xl:-top-6 relative md:h-20 row-start-2 bg-typo-outline col-start-4 hidden md:flex' />
          <div className='w-0.5 h-[86%] md:w-0.5 md:h-20 mb-6 self-end bg-typo-outline col-start-5 row-start-1 hidden md:flex' />
          <div className='w-0.5 h-[86%] md:w-0.5 self-start -top-6 lg:-top-7 xl:-top-6 relative md:h-20 row-start-2 bg-typo-outline col-start-6 hidden md:flex' />
          <div className='w-0.5 h-[86%] md:w-0.5 md:h-20 mb-6 self-end bg-typo-outline col-start-7 row-start-1 hidden md:flex' />
          <div className='w-0.5 h-[86%] md:w-0.5 self-start -top-6 lg:-top-7 xl:-top-6 relative md:h-20 row-start-2 bg-typo-outline col-start-8 hidden md:flex' />
          <div className='w-0.5 h-[86%] md:w-0.5 md:h-20 mb-6 self-end bg-typo-outline col-start-9 row-start-1 hidden md:flex' />
          <div className='w-0.5 h-[86%] md:w-0.5 self-start  -top-7 xl:-top-6 relative md:h-20 row-start-2 bg-typo-outline col-start-10 hidden md:flex' />
        </div>
        {timelineKTI.map((content, index) => {
          const parity = index % 2 === 0 ? 'even' : 'odd';
          return (
            <div
              key={index}
              className={clsxm(
                'flex md:flex-col items-center gap-2 md:relative',
                [parity === 'even' && 'md:row-start-3 md:col-span-2'],
                [index == 1 && 'md:col-start-2'],
                [parity === 'odd' && 'md:row-start-1 md:col-span-2']
              )}
            >
              <div className='w-1/2 p-3 md:p-0 md:w-full'>
                <NextImage
                  {...content.img}
                  className={clsxm(
                    'w-full max-w-[121px] md:max-w-[100px] mx-auto',
                    [content.imgDesktop !== undefined && 'md:hidden']
                  )}
                  imgClassName='object-contain'
                />
                {content.imgDesktop !== undefined && (
                  <NextImage
                    {...content.imgDesktop}
                    className='w-full max-w-[100px] hidden md:block mx-auto'
                    imgClassName='object-contain'
                  />
                )}
              </div>
              <div className='flex flex-col justify-around md:justify-start md:h-fit h-full  w-1/2 md:w-40 lg:w-36 xl:w-44 items-start md:items-center md:text-center bg-white py-1 z-0'>
                <Typography
                  variant='b1'
                  className='font-semibold text-typo-primary break-all'
                >
                  {content.date}
                </Typography>
                <Typography
                  as='b1'
                  variant='b1'
                  color='secondary'
                  className='break-words'
                >
                  {content.caption}
                </Typography>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
