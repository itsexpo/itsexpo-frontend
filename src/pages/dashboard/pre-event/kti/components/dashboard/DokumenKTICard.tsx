import * as React from 'react';

import FileFetch from '@/components/FileFetch';
import DokumenPendukungCard from '@/components/shared/DokumenPendukungCard';
import Typography from '@/components/typography/Typography';
import { DetailTimKTI } from '@/types/entities/pre-event/kti';

export default function DokumenKTICard({ data }: { data: DetailTimKTI }) {
  return (
    <div className='bg-white p-6 pb-12 rounded-xl border-typo-outline border-[1px] h-fit'>
      <Typography as='h6' variant='h6' className='text-typo-primary font-bold'>
        Dokumen KTI
      </Typography>
      <div className='space-y-4 mt-5'>
        <DokumenPendukungCard
          title='Follow Sosmed'
          imgPath={data.follow_sosmed}
          caption='Follow Sosemd ITS Expo 2023'
        />
        <DokumenPendukungCard
          title='Share Poster'
          imgPath={data.share_poster}
          caption='Share Poster ITS Expo 2023'
        />
        <DokumenPendukungCard
          title='Twibbon'
          imgPath={data.twibbon}
          caption='Twibbon KTI ITS Expo 2023'
        />
        <FileFetch filePath={data.abstrak} label='Abstrak' alt='Abstak' />
      </div>
    </div>
  );
}
