import * as React from 'react';

import Typography from '@/components/typography/Typography';
import {
  hadiahJurnalistikContents,
  juriJurnalistikContents,
} from '@/contents/pre-event/jurnalistik/tampilan-awal';
import HadiahCard from '@/pages/dashboard/pre-event/jurnalistik/components/tampilan-awal/HadiahCard';
import JuriCard from '@/pages/dashboard/pre-event/jurnalistik/components/tampilan-awal/JuriCard';

export default function TampilanAwal() {
  return (
    <div className='flex flex-col gap-y-6'>
      {/* Description Section */}
      <div></div>

      {/* Timeline Section */}
      <div></div>

      {/* Juri Section */}
      <div className='p-6 shadow-pendaftaran rounded-xl'>
        <Typography variant='h6' className='font-bold text-typo-primary'>
          Juri
        </Typography>
        <div className='grid grid-rows-1 grid-flow-col mt-6 gap-6'>
          {juriJurnalistikContents.map((content, index) => (
            <JuriCard {...content} key={index} />
          ))}
        </div>
      </div>

      {/* Hadiah Section */}
      <div className='p-6 shadow-pendaftaran rounded-xl'>
        <Typography variant='h6' className='font-bold text-typo-primary'>
          Hadiah
        </Typography>
        <div className='grid grid-cols-1 grid-flow-row mt-6 gap-6'>
          {hadiahJurnalistikContents.map((content, index) => (
            <HadiahCard {...content} key={index} />
          ))}
        </div>
      </div>

      {/* FAQ Section */}
      <div></div>
    </div>
  );
}
