import * as React from 'react';

import Typography from '@/components/typography/Typography';

type ButtonProps = {
  name: string;
  lead_name: string;
} & React.ComponentPropsWithRef<'button'>;

const AnggotaButton = ({ name, lead_name }: ButtonProps) => {
  return (
    <div className='w-full rounded-xl p-4 border-typo-outline border-[1px] flex items-center justify-between'>
      <div className='space-y-2'>
        <Typography as='p' variant='c' className='font-medium text-typo-icon'>
          {name === lead_name ? 'Ketua Tim' : 'Anggota'}
        </Typography>
        <Typography
          as='p'
          variant='p'
          className='text-typo-primary font-semibold'
        >
          {name}
        </Typography>
      </div>
    </div>
  );
};

export default AnggotaButton;
