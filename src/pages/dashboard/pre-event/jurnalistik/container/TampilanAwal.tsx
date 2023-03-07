import * as React from 'react';

import { jurnalistikSubContest } from '@/contents/pre-event/jurnalistik/tampilan-awal';
import DeskripsiCard from '@/pages/dashboard/pre-event/jurnalistik/components/tampilan-awal/DeskripsiCard';
import FaqCard from '@/pages/dashboard/pre-event/jurnalistik/components/tampilan-awal/FaqCard';
import HadiahCard from '@/pages/dashboard/pre-event/jurnalistik/components/tampilan-awal/HadiahCard';
import JuriCard from '@/pages/dashboard/pre-event/jurnalistik/components/tampilan-awal/JuriCard';
import SubContestCard from '@/pages/dashboard/pre-event/jurnalistik/components/tampilan-awal/SubContestCard';
import TimelineCard from '@/pages/dashboard/pre-event/jurnalistik/components/tampilan-awal/TimelineCard';

export default function TampilanAwal() {
  return (
    <div className='flex flex-col gap-y-6'>
      <DeskripsiCard />
      <TimelineCard />

      {/* Sub Contest Section */}
      <div className='grid grid-cols-2 gap-6'>
        {jurnalistikSubContest.map((content, index) => (
          <SubContestCard key={index} {...content} />
        ))}
      </div>

      <JuriCard />
      <HadiahCard />
      <FaqCard />
    </div>
  );
}
