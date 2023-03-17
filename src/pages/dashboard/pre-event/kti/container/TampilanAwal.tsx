import * as React from 'react';

import ContestCard from '@/pages/dashboard/pre-event/kti/components/tampilan-awal/ContestCard';
import DeskripsiCard from '@/pages/dashboard/pre-event/kti/components/tampilan-awal/DeskripsiCard';
import FaqCard from '@/pages/dashboard/pre-event/kti/components/tampilan-awal/FaqCard';
import HadiahCard from '@/pages/dashboard/pre-event/kti/components/tampilan-awal/HadiahCard';
import TimelineCard from '@/pages/dashboard/pre-event/kti/components/tampilan-awal/TimelineCard';
import { User } from '@/types/entities/user';

type TampilanAwal = {
  user: User;
} & React.ComponentPropsWithoutRef<'div'>;

export default function TampilanAwal({ user }: TampilanAwal) {
  return (
    <div className='flex flex-col gap-y-6'>
      <DeskripsiCard
        isRegister={user.pre_event[0].Jurnalistik.status}
        closeDate={user.pre_event[0].Jurnalistik.close_date}
        startDate={user.pre_event[0].Jurnalistik.start_date}
      />
      <TimelineCard />
      <ContestCard />
      <HadiahCard />
      <FaqCard />
    </div>
  );
}
