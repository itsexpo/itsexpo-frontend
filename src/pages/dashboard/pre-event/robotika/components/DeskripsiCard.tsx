import * as React from 'react';

import Countdown from '@/components/countdown/Countdown';
import ButtonLink from '@/components/links/ButtonLink';
import Typography from '@/components/typography/Typography';
import { deskripsiRobotik } from '@/contents/pre-event/robotik/tampilan-awal';
import clsxm from '@/lib/clsxm';

type TampilanAwal = {
  isRegistered: boolean;
  startDate: Date;
  closeDate: Date;
} & React.ComponentPropsWithoutRef<'div'>;

export default function DeskripsiCard({
  isRegistered,
  startDate,
  closeDate,
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
          Apa Itu Robot In Action?
        </Typography>
        <Typography variant='b1' color='secondary' className='text-justify'>
          {deskripsiRobotik}
        </Typography>
      </div>

      <div
        className={clsxm(
          'h-fit flex flex-col items-center rounded-xl',
          'bg-typo-white shadow-pendaftaran p-6 gap-4'
        )}
      >
        {!isRegistered ? (
          <>
            <Countdown closeDate={closeDate} startDate={startDate} />

            <div className='w-full flex flex-col gap-4'>
              {isOpen && (
                <ButtonLink
                  variant='green'
                  href='/dashboard/pre-event/robotika/pendaftaran'
                >
                  Daftar Sekarang
                </ButtonLink>
              )}
              <ButtonLink variant='discolored' href='#' target='_blank'>
                Unduh Guidebook
              </ButtonLink>
            </div>
          </>
        ) : (
          <>
            <div className='space-y-4 w-72'>
              <Typography
                variant='t'
                className='font-semibold text-typo-primary text-center'
              >
                Anda Sudah Terdaftar
              </Typography>
              <Typography
                variant='b1'
                className='text-typo-secondary text-center'
              >
                Terimakasih telah berpartisipasi pada lomba Robot In Action.
                Jangan terlewatkan pengumuman lomba ini dan segera lengkapi tim
                kamu
              </Typography>
            </div>
            <div className='w-full mt-10'>
              <ButtonLink
                className='w-full'
                variant='green'
                href='/dashboard/pre-event/robotika/main'
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
