import * as React from 'react';

import Countdown from '@/components/countdown/Countdown';
import ButtonLink from '@/components/links/ButtonLink';
import Typography from '@/components/typography/Typography';
import clsxm from '@/lib/clsxm';

type TampilanAwal = {
  isRegister: boolean;
  closeDate: Date;
  startDate: Date;
} & React.ComponentPropsWithoutRef<'div'>;

export default function DeskripsiCard({
  isRegister,
  closeDate,
  startDate,
}: TampilanAwal) {
  const isOpen =
    new Date() < new Date(closeDate) && new Date() > new Date(startDate);
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
          Apa Itu Karya Tulis Ilmiah?
        </Typography>
        <Typography
          as='p'
          variant='b1'
          color='secondary'
          className='text-justify '
        >
          Karya Tulis Ilmiah merupakan salah satu ajang lomba bergengsi dari
          cabang kompetisi ITS Expo 2023 yang ditujukan kepada mahasiswa
          S1/D4/Sederajat. Lomba KTI akan dilaksanakan secara luring sehingga
          peserta akan mendapatkan pengalaman untuk menyampaikan inovasinya di
          hadapan dewan juri dan peserta lain, serta kesempatan ini dapat
          dimanfaatkan untuk menambah relasi baru. Peserta juga dapat merasakan
          dan ikut serta dalam serangkaian acara ITS Expo 2023. Dengan adanya
          lomba KTI ITS Expo 2023 ini, diharapkan para peserta dapat menyalurkan
          inovasinya untuk regenerasi budaya Indonesia melalui implementasi
          bidang keilmuan yang ditekuni kepada masyarakat. LKTI ITS Expo 2023
          memiliki tema “Peran Generasi Muda untuk Mendukung Regenerasi Budaya
          Nasional Melalui Pendekatan Ilmu Pengetahuan Interdisipliner
          Teknologi”
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
            <Countdown closeDate={closeDate} startDate={startDate} />

            <div className='w-full flex flex-col gap-4'>
              {isOpen && (
                <ButtonLink
                  variant='green'
                  href='/dashboard/pre-event/kti/pendaftaran'
                >
                  Daftar Sekarang
                </ButtonLink>
              )}
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
                Terimakasih telah berpartisipasi pada lomba Karya Tulis Ilmiah.
                Jangan terlewatkan pengumuman lomba ini dan segera lengkapi tim
                kamu
              </Typography>
            </div>
            <div className='w-full mt-10'>
              <ButtonLink
                className='w-full'
                variant='green'
                href='/dashboard/pre-event/kti/main'
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
