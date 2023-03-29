import * as React from 'react';

import Typography from '@/components/typography/Typography';
import useCountdown from '@/hooks/useCountdown';
import clsxm from '@/lib/clsxm';

export default function Countdown({
  closeDate,
  // eslint-disable-next-line unused-imports/no-unused-vars
  startDate,
}: {
  closeDate: Date;
  startDate: Date;
} & React.ComponentPropsWithoutRef<'div'>) {
  const isStarted = new Date() > new Date(startDate);
  const [days, hours, minutes] = useCountdown(
    isStarted ? new Date(closeDate) : new Date(startDate)
  );

  return (
    <div>
      <Typography
        as='p'
        variant='t'
        className='font-semibold text-typo-primary text-center'
      >
        {isStarted ? 'Pendaftaran Ditutup' : 'Pendaftaran Dibuka'}
      </Typography>
      <div className='w-full flex items-center gap-2 mt-4'>
        <div
          className={clsxm(
            'w-full md:w-20 flex flex-col items-center p-3',
            'rounded-md bg-typo-surface'
          )}
        >
          <Typography as='h5' variant='h5' className='font-bold'>
            {days}
          </Typography>
          <Typography
            as='c'
            variant='c'
            color='secondary'
            className='font-semibold'
          >
            Hari
          </Typography>
        </div>

        <Typography as='p' variant='p' className='text-typo-icon'>
          :
        </Typography>

        <div className='w-full md:w-20 flex flex-col items-center p-3 rounded-md bg-typo-surface'>
          <Typography as='h5' variant='h5' className='font-bold'>
            {hours}
          </Typography>
          <Typography
            as='c'
            variant='c'
            color='secondary'
            className='font-semibold'
          >
            Jam
          </Typography>
        </div>

        <Typography as='p' variant='p' className='text-typo-icon'>
          :
        </Typography>

        <div className='w-full md:w-20 flex flex-col items-center p-3 rounded-md bg-typo-surface'>
          <Typography as='h5' variant='h5' className='font-bold'>
            {minutes}
          </Typography>
          <Typography
            as='c'
            variant='c'
            color='secondary'
            className='font-semibold'
          >
            Menit
          </Typography>
        </div>
      </div>
    </div>
  );
}
