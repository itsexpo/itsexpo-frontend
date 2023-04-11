import React from 'react';

import Typography from '@/components/typography/Typography';
import clsxm from '@/lib/clsxm';

const TimelineStep = ({ step }: { step: number }) => {
  return (
    <div className='flex flex-row items-center justify-between h-[1px] w-[70%] bg-typo-outline '>
      <div className='flex flex-col items-center translate-y-3 -translate-x-4'>
        <div
          className={clsxm(
            'flex items-center justify-center rounded-full w-8 h-8 bg-typo-light',
            step === 1 && 'text-typo-white bg-success-600',
            step > 1 && 'text-typo-white bg-success-100'
          )}
        >
          {step <= 1 ? (
            <span className='p-1'>1</span>
          ) : (
            <span className='p-1 text-success-600'>&#10003;</span>
          )}
        </div>
        <Typography
          variant='c'
          className='font-medium mt-1 whitespace-nowrap text-[10px] md:text-[12px] xl:text-[14px]'
        >
          Data Diri
        </Typography>
      </div>
      <div className='flex flex-col items-center translate-y-3'>
        <div
          className={clsxm(
            'flex items-center justify-center rounded-full w-8 h-8 bg-typo-light',
            step === 2 && 'text-typo-white bg-success-600',
            step > 2 && 'text-typo-white bg-success-100'
          )}
        >
          {step < 3 ? (
            <span className='p-1'>2</span>
          ) : (
            <span className='p-1 text-success-600'>&#10003;</span>
          )}
        </div>
        <Typography
          variant='c'
          className='font-medium mt-1 whitespace-nowrap text-[10px] md:text-[12px] xl:text-[14px]'
        >
          Pembayaran
        </Typography>
      </div>
      <div className='flex flex-col items-center translate-y-3 translate-x-4'>
        <div
          className={clsxm(
            'flex items-center justify-center rounded-full w-8 h-8 bg-typo-light',
            step === 3 && 'text-typo-white bg-success-100',
            step > 3 && 'text-typo-white bg-success-100'
          )}
        >
          {step < 3 ? (
            <span className='p-1'>3</span>
          ) : (
            <span className='p-1 text-success-600'>&#10003;</span>
          )}
        </div>
        <Typography
          variant='c'
          className='font-medium mt-1 whitespace-nowrap text-[10px] md:text-[12px] xl:text-[14px]'
        >
          Selesai
        </Typography>
      </div>
    </div>
  );
};

export default TimelineStep;
