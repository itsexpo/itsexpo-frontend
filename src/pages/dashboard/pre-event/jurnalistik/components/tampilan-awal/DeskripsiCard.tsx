import * as React from 'react';

import ButtonLink from '@/components/links/ButtonLink';
import Typography from '@/components/typography/Typography';
import useCountdown from '@/hooks/useCountdown';
import clsxm from '@/lib/clsxm';

type TampilanAwal = {
  isRegister: boolean;
  closeDate: Date;
} & React.ComponentPropsWithoutRef<'div'>;

export default function DeskripsiCard({ isRegister, closeDate }: TampilanAwal) {
  const [days, hours, minutes] = useCountdown(new Date(closeDate));

  return (
    <div className='flex flex-col-reverse md:flex-row gap-6'>
      <div
        className={clsxm(
          'flex flex-col rounded-xl p-6 gap-2',
          'bg-typo-white shadow-pendaftaran'
        )}
      >
        <Typography
          as='h6'
          variant='h6'
          className='font-bold text-typo-primary text-center md:text-left'
        >
          Apa Itu Journalistic?
        </Typography>
        <Typography
          as='p'
          variant='b1'
          color='secondary'
          className='text-center md:text-left'
        >
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
          'h-fit flex flex-col items-center rounded-xl',
          'bg-typo-white shadow-pendaftaran p-6 gap-4'
        )}
      >
        {!isRegister ? (
          <>
            <Typography
              as='p'
              variant='t'
              className='font-semibold text-typo-primary'
            >
              Pendaftaran Ditutup
            </Typography>

            <div className='w-full flex items-center gap-2'>
              <div
                className={clsxm(
                  'w-full md:w-20 flex flex-col items-center p-3',
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

              <div className='w-full md:w-20 flex flex-col items-center p-3 rounded-md bg-typo-surface'>
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

              <div className='w-full md:w-20 flex flex-col items-center p-3 rounded-md bg-typo-surface'>
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
              <ButtonLink
                variant='green'
                href='/dashboard/pre-event/jurnalistik/pendaftaran'
              >
                Daftar Sekarang
              </ButtonLink>
              <ButtonLink
                variant='discolored'
                href='https://drive.google.com/drive/folders/1cAtrcBbxzwdKceifgtDChEt7BCFYSUT_'
                target='_blank'
              >
                Unduh Guidebook
              </ButtonLink>
            </div>
          </>
        ) : (
          <>
            <div className='space-y-4 w-72'>
              <Typography
                as='p'
                variant='t'
                className='font-semibold text-typo-primary text-center'
              >
                Anda Sudah Terdaftar
              </Typography>
              <Typography
                as='p'
                variant='b1'
                className='text-typo-secondary text-center'
              >
                Terimakasih telah berpartisipasi pada lomba Journalistic. Jangan
                terlewatkan pengumuman lomba ini dan segera lengkapi tim kamu
              </Typography>
            </div>
            <div className='w-full mt-10'>
              <ButtonLink
                className='w-full'
                variant='green'
                href='/dashboard/pre-event/jurnalistik/main'
              >
                Lihat Dashboard
              </ButtonLink>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
