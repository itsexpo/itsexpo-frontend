import DeskripsiCard from '@/pages/dashboard/main-event/wahana-seni/components/tampilan-awal/DeskripsiCard';
import FAQCard from '@/pages/dashboard/main-event/wahana-seni/components/tampilan-awal/FaqCard';
import HadiahCard from '@/pages/dashboard/main-event/wahana-seni/components/tampilan-awal/HadiahCard';
import SubContestCard from '@/pages/dashboard/main-event/wahana-seni/components/tampilan-awal/SubContestCard';
import TimelineCard from '@/pages/dashboard/main-event/wahana-seni/components/tampilan-awal/TimelineCard';

const user = {
  main_event: [
    {
      WahanaSeni: {
        status: {
          '2d': true,
          '3d': false,
        },
        start_date: new Date('2023-04-13'),
        close_date: new Date('2023-04-29'),
      },
    },
  ],
};

export default function TampilanAwal() {
  return (
    <div className='flex flex-col gap-y-6'>
      <DeskripsiCard
        isRegister={user.main_event[0].WahanaSeni.status}
        closeDate={user.main_event[0].WahanaSeni.close_date}
        startDate={user.main_event[0].WahanaSeni.start_date}
      ></DeskripsiCard>
      <TimelineCard />
      <SubContestCard />
      <HadiahCard />
      <FAQCard />
    </div>
  );
}
