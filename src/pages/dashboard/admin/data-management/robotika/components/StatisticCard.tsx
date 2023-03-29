import * as React from 'react';
import { IconType } from 'react-icons';

import Typography from '@/components/typography/Typography';
import clsxm from '@/lib/clsxm';

type StatisticCardProps = {
  label: string;
  count: number;
  countClassName?: string;
  icon: IconType;
  iconClassName?: string;
} & React.ComponentPropsWithoutRef<'div'>;

export default function StatisticCard({
  label,
  count,
  countClassName,
  icon: Icon,
  iconClassName,
  className,
}: StatisticCardProps) {
  return (
    <div
      className={clsxm(
        'space-y-2 p-4 rounded-xl shadow-pendaftaran bg-typo-white',
        className
      )}
    >
      <Typography variant='b1' className='text-typo-icon'>
        {label}
      </Typography>

      <div className='flex items-center gap-2'>
        <div
          className={clsxm(
            'w-12 h-12 rounded-full bg-typo-light fill-typo-icon',
            'flex justify-center items-center',
            iconClassName
          )}
        >
          {Icon && <Icon className='w-2/3 h-2/3 object-contain fill-inherit' />}
        </div>

        <Typography
          as='h5'
          variant='h5'
          className={clsxm('text-typo-primary font-semibold', countClassName)}
        >
          {count}
        </Typography>
      </div>
    </div>
  );
}
