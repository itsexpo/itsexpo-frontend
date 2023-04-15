import * as React from 'react';

import Loading from '@/components/Loading';
import Typography from '@/components/typography/Typography';
import DataDiriCard from '@/pages/dashboard/main-event/wahana-seni/container/dashboard/DataDiriCard';
import InformasiCard from '@/pages/dashboard/main-event/wahana-seni/container/dashboard/InformasiCard';
import PengumpulanKaryaCard from '@/pages/dashboard/main-event/wahana-seni/container/dashboard/PengumpulanKaryaCard';
import { WahanaSeniData } from '@/types/entities/main-event/wahana-seni';

export default function DashboardWahanaSeni({
  data,
  constest,
}: {
  data: WahanaSeniData;
  constest: '2d' | '3d';
}) {
  const [selectedContest, setSelectedContest] = React.useState<'2d' | '3d'>(
    constest
  );

  if (!data) return <Loading />;

  return (
    <div className='grid md:grid-cols-2 grid-cols-1 gap-3'>
      <div>
        <InformasiCard
          data={data.main_event.wahana_seni || { '2d': null, '3d': null }}
          setSelectedContest={setSelectedContest}
          selectedContest={selectedContest}
        />
        {data.main_event.wahana_seni[selectedContest] ? (
          <div className='mt-6 bg-white rounded-2xl border-[1px] border-typo-outline p-6'>
            {data.main_event.wahana_seni[selectedContest].status_pengumpulan ? (
              <Typography as='p' variant='p' className='text-center'>
                Karya mu sudah terkumpul di sistem, silahkan tunggu hasilnya.
                Terima kasih
              </Typography>
            ) : (
              <PengumpulanKaryaCard
                contest={selectedContest}
                payment={data.main_event.wahana_seni[selectedContest].payment}
              />
            )}
          </div>
        ) : (
          <div>
            <Typography as='p' variant='p' className='text-center'>
              Anda belum terdaftar dalam acara ini
            </Typography>
            <Typography as='p' variant='p' className='text-center'>
              Silahkan menghubungi panitia untuk melakukan pendaftaran.
            </Typography>
          </div>
        )}
      </div>
      <div>
        <DataDiriCard data={data} selectedContest={selectedContest} />
      </div>
    </div>
  );
}
