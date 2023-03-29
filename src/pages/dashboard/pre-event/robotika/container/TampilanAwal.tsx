import * as React from 'react';

import DeskripsiCard from '@/pages/dashboard/pre-event/robotika/components/DeskripsiCard';
import FaqCard from '@/pages/dashboard/pre-event/robotika/components/FaqCard';
import HadiahCard from '@/pages/dashboard/pre-event/robotika/components/HadiahCard';
import SubContestCard from '@/pages/dashboard/pre-event/robotika/components/SubContestCard';
import TimelineCard from '@/pages/dashboard/pre-event/robotika/components/TimelineCard';
import { User } from '@/types/entities/user';

type TampilanAwal = {
  user: User;
} & React.ComponentPropsWithoutRef<'div'>;

export default function TampilanAwal({ user }: TampilanAwal) {
  return (
    <div className='flex flex-col gap-y-6'>
      <DeskripsiCard
        role={user.role}
        isRegistered={user.pre_event[2].RobotInAction.status}
        startDate={user.pre_event[2].RobotInAction.start_date}
        closeDate={user.pre_event[2].RobotInAction.close_date}
      />
      <TimelineCard />
      <SubContestCard />
      {/* <JuriCard /> */}
      <HadiahCard />
      <FaqCard />
    </div>
  );
}
