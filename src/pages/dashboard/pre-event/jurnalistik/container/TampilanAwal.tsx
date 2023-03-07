import * as React from 'react';

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
      <SubContestCard />
      <JuriCard />
      <HadiahCard />
      <FaqCard />
    </div>
  );
}
