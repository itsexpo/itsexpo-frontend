import * as React from 'react';

import DokumenPendukungCard from '@/components/shared/DokumenPendukungCard';
import Typography from '@/components/typography/Typography';
import { WahanaSeniData } from '@/types/entities/main-event/wahana-seni';

export default function DataDiri2D({
  member,
}: {
  member: WahanaSeniData['main_event']['wahana_seni']['2d'];
}) {
  return (
    <div className='space-y-2 mt-3'>
      <div className='flex flex-col gap-y-1'>
        <Typography as='label' variant='label' className='font-semibold'>
          NRP
        </Typography>
        <Typography
          as='p'
          variant='p'
          className='rounded-md bg-typo-surface px-4 py-3'
        >
          {member.nrp}
        </Typography>
      </div>
      <div className='flex flex-col gap-y-1'>
        <Typography as='label' variant='label' className='font-semibold'>
          Nama
        </Typography>
        <Typography
          as='p'
          variant='p'
          className='rounded-md bg-typo-surface px-4 py-3'
        >
          {member.nama}
        </Typography>
      </div>
      <div className='flex flex-col gap-y-1'>
        <Typography as='label' variant='label' className='font-semibold'>
          Asal Departemen
        </Typography>
        <Typography
          as='p'
          variant='p'
          className='rounded-md bg-typo-surface px-4 py-3'
        >
          {member.departemen}
        </Typography>
      </div>
      <div className='flex flex-col gap-y-1'>
        <Typography as='label' variant='label' className='font-semibold'>
          Kontak Aktif
        </Typography>
        <Typography
          as='p'
          variant='p'
          className='rounded-md bg-typo-surface px-4 py-3'
        >
          {member.kontak}
        </Typography>
      </div>
      <DokumenPendukungCard
        imgPath={member.ktm}
        title='KTM'
        caption='Kartu Tanda Mahasiswa'
      />
    </div>
  );
}
