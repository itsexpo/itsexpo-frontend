import Typography from '@/components/typography/Typography';
import DataDiri2D from '@/pages/dashboard/main-event/wahana-seni/components/dashboard/DataDiri2D';
import DataDiri3D from '@/pages/dashboard/main-event/wahana-seni/components/dashboard/DataDiri3D';
import { WahanaSeniData } from '@/types/entities/main-event/wahana-seni';

export default function DataDiriCard({
  data,
  selectedContest,
}: {
  data: WahanaSeniData;
  selectedContest: '2d' | '3d';
}) {
  return (
    <div className='bg-white p-6 rounded-2xl border-[1px] border-typo-outline h-fit'>
      <Typography variant='h6' as='h6' className='font-bold'>
        Data Diri
      </Typography>
      {selectedContest === '3d' && (
        <div>
          {data.main_event.wahana_seni['3d'].member ? (
            <DataDiri3D members={data.main_event.wahana_seni['3d'].member} />
          ) : (
            <div>
              <Typography as='p' className='text-typo-secondary'>
                Anda belum terdaftar dalam kontes ini
              </Typography>
              <Typography as='p' className='text-typo-secondary'>
                Silahkan menghubungi panitia untuk melakukan pendaftaran.
              </Typography>
            </div>
          )}
        </div>
      )}
      {selectedContest === '2d' && data.main_event.wahana_seni['2d'] && (
        <div>
          {data.main_event.wahana_seni['2d'] ? (
            <DataDiri2D member={data.main_event.wahana_seni['2d']} />
          ) : (
            <div>
              <Typography as='p' className='text-typo-secondary'>
                Anda belum terdaftar dalam kontes ini.
              </Typography>
              <Typography as='p' className='text-typo-secondary'>
                Silahkan menghubungi panitia untuk melakukan pendaftaran.
              </Typography>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
