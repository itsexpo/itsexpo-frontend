import { useQuery } from '@tanstack/react-query';
import * as React from 'react';

import Countdown from '@/components/countdown/Countdown';
import ButtonLink from '@/components/links/ButtonLink';
import Loading from '@/components/Loading';
import StatusPembayaranCard from '@/components/StatusPembayaranCard';
import Typography from '@/components/typography/Typography';
import { CPWahanaSeni } from '@/contents/main-event/wahana-seni/tampilan-awal';
import clsxm from '@/lib/clsxm';
import { WahanaSeniData } from '@/types/entities/main-event/wahana-seni';

type TampilanAwal = {
  isRegister: {
    '2d': boolean;
    '3d': boolean;
  };
  closeDate: Date;
  startDate: Date;
} & React.ComponentPropsWithoutRef<'div'>;

const CONTESTS = ['2d', '3d'] as const;

const pembayaranDescription: Record<string, string> = {
  DEFAULT: 'Status pembayaran tidak diketahui',
  'AWAITING PAYMENT':
    'Mohon melakukan pembayaran supaya pendaftaranmu dapat diverifikasi. Untuk bantuan, peserta dapat menghubungi cp di bawah ini (Line only):',
  'AWAITING VERIFICATION':
    'Mohon menunggu proses verifikasi. Apabila dalam waktu 3x24 jam masih belum terproses, peserta dapat menghubungi cp di bawah ini (Line only):',
  REVISI:
    'Mohon upload ulang bukti pembayaran supaya pendaftaranmu dapat diverifikasi. Untuk bantuan, peserta dapat menghubungi cp di bawah ini (Line only):',
  GAGAL:
    'Mohon menghubungi cp di bawah ini agar pendaftaranmu dapat terverifikasi (Line only):',
  SUCCESS:
    'Pendaftaran peserta telah berhasil. Silakan melihat dashboard dan menunggu event pada timeline',
};

// Static

export default function DeskripsiCard({
  isRegister,
  closeDate,
  startDate,
}: TampilanAwal) {
  const [selectedContest, setSelectedContest] =
    React.useState<(typeof CONTESTS)[number]>('2d');

  const isOpen =
    new Date() < new Date(closeDate) && new Date() > new Date(startDate);

  const { data } = useQuery<WahanaSeniData>(['/main-event/wahana_seni']);

  if (!data) return <Loading />;

  return (
    <div className='flex flex-col-reverse md:flex-row gap-6 font-secondary'>
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
          Apa itu Sayembara Karya Mahasiswa?
        </Typography>
        <Typography
          as='p'
          variant='b1'
          status='secondary'
          className='text-typo-secondary text-justify'
        >
          Sayembara Karya Mahasiswa merupakan salah satu kegiatan dari Wahana
          Seni yang mengajak para mahasiswa untuk menyertakan karyanya dalam
          bentuk karya seni 2D dan 3D, dimana karya-karya tersebut akan dipajang
          pada Exhibition ITS EXPO 2023. Sayembara Karya ini merupakan salah
          satu usaha ITS EXPO 2023 dalam mewadahi minat mahasiswa ITS khususnya
          pada bidang seni.
        </Typography>
      </div>

      <div
        className={clsxm(
          'h-fit flex flex-col items-center rounded-xl',
          'bg-typo-white shadow-pendaftaran p-6 gap-4'
        )}
      >
        <div className='flex flex-row w-full justify-center p-2 bg-typo-light rounded-lg'>
          {CONTESTS.map((contest) => (
            <div
              className={clsxm(
                'flex justify-center items-center w-full ',
                'py-2 cursor-pointer font-semibold rounded-sm text-xs',
                selectedContest === contest &&
                  'bg-typo-white shadow-pendaftaran text-typo-primary'
              )}
              onClick={() => setSelectedContest(contest)}
              key={contest}
            >
              {contest === '2d' && 'Karya Seni 2D'}
              {contest === '3d' && 'Karya Seni 3D'}
            </div>
          ))}
        </div>
        {!isRegister[selectedContest] ? (
          <>
            <Countdown closeDate={closeDate} startDate={startDate} />
            <div className='w-full flex flex-col gap-4'>
              {isOpen && (
                <>
                  {selectedContest === '2d' && (
                    <ButtonLink
                      variant='green'
                      href='/dashboard/main-event/wahana-seni/pendaftaran-2d'
                    >
                      Daftar Sekarang
                    </ButtonLink>
                  )}
                  {selectedContest === '3d' && (
                    <ButtonLink
                      variant='green'
                      href='/dashboard/main-event/wahana-seni/pendaftaran-3d'
                    >
                      Daftar Sekarang
                    </ButtonLink>
                  )}
                </>
              )}
              <ButtonLink
                variant='discolored'
                href='https://drive.google.com/file/d/1I8RuwhjdO8OPeKK7bYS4GOwbjTO3s7Ly/view'
                target='_blank'
              >
                Unduh Guidebook
              </ButtonLink>
            </div>
          </>
        ) : (
          <div className='space-y-4 min-w-72 md:w-72'>
            <StatusPembayaranCard
              status={
                data.main_event.wahana_seni[selectedContest].payment
                  .payment_status
              }
              size='small'
            />

            <Typography
              as='p'
              variant='c'
              className='text-typo-secondary text-justify'
            >
              {
                pembayaranDescription[
                  data.main_event.wahana_seni[selectedContest].payment
                    .payment_status
                ]
              }
            </Typography>

            {data.main_event.wahana_seni[selectedContest].payment
              .payment_status === 'SUCCESS' ? (
              <ButtonLink
                className='w-full'
                variant='green'
                href='/dashboard/main-event/wahana-seni/main'
              >
                Lihat Dashboard
              </ButtonLink>
            ) : (
              <div className='grid grid-cols-2 gap-5'>
                {CPWahanaSeni.map((person, index) => (
                  <div
                    className={clsxm(
                      'border border-outline-base rounded-md',
                      'px-3 py-2'
                    )}
                    key={index}
                  >
                    <Typography
                      variant='c'
                      className='!text-xs font-semibold text-typo-icon'
                    >
                      {person.name}
                    </Typography>
                    <Typography
                      variant='c'
                      className='font-semibold text-typo-primary'
                    >
                      {person.id_line}
                    </Typography>
                  </div>
                ))}
              </div>
            )}
            <ButtonLink
              variant='outline'
              href='https://drive.google.com/file/d/1I8RuwhjdO8OPeKK7bYS4GOwbjTO3s7Ly/view'
              target='_blank'
              className='w-full'
            >
              Unduh Guidebook
            </ButtonLink>
          </div>
        )}
      </div>
    </div>
  );
}
