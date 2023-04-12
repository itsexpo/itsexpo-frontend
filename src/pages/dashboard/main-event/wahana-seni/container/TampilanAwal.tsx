import DeskripsiCard from '@/pages/dashboard/main-event/wahana-seni/components/tampilan-awal/DeskripsiCard';
import FAQCard from '@/pages/dashboard/main-event/wahana-seni/components/tampilan-awal/FaqCard';
import HadiahCard from '@/pages/dashboard/main-event/wahana-seni/components/tampilan-awal/HadiahCard';
import SubContestCard from '@/pages/dashboard/main-event/wahana-seni/components/tampilan-awal/SubContestCard';
import TimelineCard from '@/pages/dashboard/main-event/wahana-seni/components/tampilan-awal/TimelineCard';
import useAuthStore from '@/store/useAuthStore';

export default function TampilanAwal() {
  const user = useAuthStore.useUser();

  const buildWahanSeni = {
    status: {
      '2d': user?.main_event[0].Wahana2D.status || false,
      '3d': user?.main_event[1].Wahana3D.status || false,
    },
    start_date: new Date(user?.main_event[0].Wahana2D.start_date || ''),
    close_date: new Date(user?.main_event[0].Wahana2D.close_date || ''),
  };

  return (
    <div className='flex flex-col gap-y-6'>
      {buildWahanSeni && (
        <DeskripsiCard
          isRegister={buildWahanSeni.status}
          closeDate={buildWahanSeni.close_date}
          startDate={buildWahanSeni.start_date}
        />
      )}
      <TimelineCard />
      <SubContestCard />
      <HadiahCard />
      <FAQCard />
    </div>
  );
}
