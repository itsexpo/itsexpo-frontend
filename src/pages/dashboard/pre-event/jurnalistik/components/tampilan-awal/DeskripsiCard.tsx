import * as React from 'react';

import Button from '@/components/buttons/Button';
import Typography from '@/components/typography/Typography';
import { jurnalistikClosedDate } from '@/contents/pre-event/jurnalistik/tampilan-awal';
import useCountdown from '@/hooks/useCountdown';
import clsxm from '@/lib/clsxm';

export default function DeskripsiCard() {
  const [days, hours, minutes] = useCountdown(jurnalistikClosedDate);

  return (
    <div className='flex gap-6'>
      <div
        className={clsxm(
          'flex flex-col rounded-xl p-6 gap-2',
          'bg-typo-white shadow-pendaftaran'
        )}
      >
        <Typography
          as='h6'
          variant='h6'
          className='font-bold text-typo-primary'
        >
          Apa Itu Journalistic?
        </Typography>
        <Typography as='p' variant='b1' color='secondary'>
          Journalistic merupakan salah satu ajang lomba bergengsi dari cabang
          kompetisi ITS Expo 2023 yang mewadahi peserta untuk menuangkan
          kreativitasnya di bidang fotografi, videografi, penyiaran, dan
          penulisan. Terbagi menjadi dua kategori lomba, Liputan Televisi
          ditujukan untuk mahasiswa/umum dan Liputan Video Blogger (V-Log)
          ditujukan untuk pelajar SMA/SMK Sederajat. Digelar secara luring,
          peserta akan merasakan bagaimana meliput salah satu rangkaian kegiatan
          ITS Expo dari pre event hingga closing. Dengan gelora Sepuluh
          Nopember, kompetisi ini hadir untuk mengapresiasi perkembangan
          jurnalistik dan media online yang peduli terhadap seni, budaya, dan
          teknologi.
        </Typography>
      </div>

      <div
        className={clsxm(
          'flex flex-col justify-between items-center rounded-xl',
          'bg-typo-white shadow-pendaftaran p-6 gap-4'
        )}
      >
        <Typography
          as='p'
          variant='t'
          className='font-semibold text-typo-primary'
        >
          Pendaftaran Ditutup
        </Typography>

        <div className='flex items-center gap-2'>
          <div
            className={clsxm(
              'w-20 flex flex-col items-center p-3',
              'rounded-md bg-typo-surface'
            )}
          >
            <Typography as='h5' variant='h5' className='font-bold'>
              {days}
            </Typography>
            <Typography
              as='c'
              variant='c'
              color='secondary'
              className='font-semibold'
            >
              Hari
            </Typography>
          </div>

          <Typography as='p' variant='p' className='text-typo-icon'>
            :
          </Typography>

          <div className='w-20 flex flex-col items-center p-3 rounded-md bg-typo-surface'>
            <Typography as='h5' variant='h5' className='font-bold'>
              {hours}
            </Typography>
            <Typography
              as='c'
              variant='c'
              color='secondary'
              className='font-semibold'
            >
              Jam
            </Typography>
          </div>

          <Typography as='p' variant='p' className='text-typo-icon'>
            :
          </Typography>

          <div className='w-20 flex flex-col items-center p-3 rounded-md bg-typo-surface'>
            <Typography as='h5' variant='h5' className='font-bold'>
              {minutes}
            </Typography>
            <Typography
              as='c'
              variant='c'
              color='secondary'
              className='font-semibold'
            >
              Menit
            </Typography>
          </div>
        </div>

        <div className='w-full flex flex-col gap-4'>
          <Button variant='green'>Daftar Sekarang</Button>

          <Button variant='outline'>Unduh Guidebook</Button>
        </div>
      </div>
    </div>
  );
}
