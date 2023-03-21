import * as React from 'react';

import ButtonLink from '@/components/links/ButtonLink';
import Typography from '@/components/typography/Typography';
import AnggotaButton from '@/pages/dashboard/pre-event/kti/components/dashboard/AnggotaButton';

type CardProps = {
  team_name: string;
  lead_name: string;
  payment: {
    payment_status: string;
  };
  members: Array<{
    name: string;
    no_telp: string;
  }>;
} & React.ComponentPropsWithoutRef<'div'>;

export default function TeamCard({
  team_name,
  lead_name,
  payment,
  members,
}: CardProps) {
  return (
    <div className='p-6 rounded-xl border-typo-outline border-[1px] space-y-6'>
      <div>
        <Typography
          as='p'
          variant='caption'
          className='font-medium text-typo-icon'
        >
          Jenis Lomba
        </Typography>
        <Typography
          as='h6'
          variant='h6'
          className='font-bold text-typo-primary'
        >
          Karya Tulis Ilmiah
        </Typography>
      </div>
      <div className='flex flex-col gap-y-6 xl:gap-y-0 xl:flex-row xl:justify-between items-start xl:items-center'>
        <div>
          <Typography
            as='p'
            variant='caption'
            className='font-medium text-typo-icon'
          >
            Nama Tim
          </Typography>
          <Typography
            as='h6'
            variant='h6'
            className='font-bold text-typo-primary'
          >
            {team_name}
          </Typography>
        </div>
      </div>
      <div className='space-y-2'>
        <Typography
          as='p'
          variant='caption'
          className='text-typo-icon font-medium'
        >
          Status Pembayaran
        </Typography>
        {payment.payment_status !== 'AWAITING VERIFICATION' &&
          payment.payment_status !== 'SUCCESS' && (
            <div className='w-full h-11 rounded-lg bg-critical-100 flex justify-center items-center text-center p-6 sm:p-0'>
              <Typography
                as='p'
                variant='b1'
                color='danger'
                className='font-medium'
              >
                Belum Melakukan Pembayaran
              </Typography>
            </div>
          )}
        {payment.payment_status === 'AWAITING VERIFICATION' && (
          <div className='w-full h-11 rounded-lg bg-warning-100 flex justify-center items-center text-center p-6 sm:p-0'>
            <Typography
              as='p'
              variant='b1'
              color='warning'
              className='font-medium'
            >
              Menunggu Verifikasi
            </Typography>
          </div>
        )}
        {payment.payment_status === 'SUCCESS' && (
          <div className='w-full h-11 rounded-lg bg-success-100 flex justify-center items-center text-center p-6 sm:p-0'>
            <Typography
              as='p'
              variant='b1'
              color='success'
              className='font-medium'
            >
              Sudah Melakukan Pembayaran
            </Typography>
          </div>
        )}
      </div>
      <div className='space-y-4'>
        <Typography as='p' variant='caption' className='text-typo-icon'>
          Anggota Tim
        </Typography>
        {members.map((member, index) => (
          <AnggotaButton key={index} {...member} lead_name={lead_name} />
        ))}
      </div>
      {payment.payment_status !== 'AWAITING VERIFICATION' &&
        payment.payment_status !== 'SUCCESS' && (
          <div className='flex justify-end'>
            <ButtonLink
              variant='green'
              className='w-fit'
              href={`/dashboard/pre-event/kti`}
            >
              Lakukan Pembayaran
            </ButtonLink>
          </div>
        )}
    </div>
  );
}
