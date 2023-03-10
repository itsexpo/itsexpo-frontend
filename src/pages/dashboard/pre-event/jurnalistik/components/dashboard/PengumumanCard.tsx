import * as React from 'react';

import Typography from '@/components/typography/Typography';

export default function PengumumanCard() {
  return (
    <div className='w-full p-6 bg-typo-white rounded-xl space-y-4 border-typo-outline border-[1px]'>
      <Typography as='h6' variant='h6' className='text-typo-primary font-bold'>
        Pengumuman
      </Typography>
      <div className='border-typo-outline border-[1px] rounded-md px-3 py-4 space-y-2'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center space-x-2'>
            <Typography
              as='p'
              variant='p'
              className='text-typo-primary font-semibold'
            >
              Judul Notifikasi
            </Typography>
            <div className='py-1 px-3 rounded-2xl bg-success-600 w-fit'>
              <Typography
                as='p'
                variant='c'
                className='text-typo-white font-medium'
              >
                NEW!
              </Typography>
            </div>
          </div>
          <Typography as='p' variant='c' className='text-typo-icon'>
            18 Agustus 2021
          </Typography>
        </div>
        <Typography as='p' variant='b1' className='text-typo-secondary'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum ad,
          suscipit aliquid vitae possimus praesentium? Nesciunt reprehenderit
          velit repudiandae. Perspiciatis, ad.
        </Typography>

        <Typography
          as='p'
          variant='p'
          className='text-success-600 underline font-semibold'
        >
          Lihat detail
        </Typography>
      </div>
    </div>
  );
}
