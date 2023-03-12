import * as React from 'react';

import Typography from '@/components/typography/Typography';
import clsxm from '@/lib/clsxm';
import { DetailTimJurnalistik } from '@/types/entities/pre-event/jurnalistik';

export default function DetailTimCard({
  tim,
  className,
}: {
  tim?: DetailTimJurnalistik;
  className?: string;
}) {
  return (
    <section
      className={clsxm(
        'space-y-6 p-6 rounded-xl bg-typo-white shadow-pendaftaran',
        className
      )}
    >
      <div>
        <Typography as='c' variant='c' className='font-medium text-typo-icon'>
          Jenis Lomba
        </Typography>
        <Typography
          as='h6'
          variant='h6'
          className='font-bold text-typo-primary'
        >
          Liputan Video Blog
        </Typography>
      </div>

      <div>
        <Typography as='c' variant='c' className='font-medium text-typo-icon'>
          Jenis Kegiatan
        </Typography>
        <Typography
          as='h6'
          variant='h6'
          className='font-bold text-typo-primary'
        >
          Kegiatan Khusus
        </Typography>
      </div>

      <div className='flex justify-between gap-4'>
        <div>
          <Typography as='c' variant='c' className='font-medium text-typo-icon'>
            Nama Tim
          </Typography>
          <Typography
            as='h6'
            variant='h6'
            className='font-bold text-typo-primary'
          >
            {tim?.team_name}
          </Typography>
        </div>
        <div>
          <Typography as='c' variant='c' className='font-medium text-typo-icon'>
            Kode Tim
          </Typography>
          <Typography
            as='h6'
            variant='h6'
            className='font-bold text-success-600'
          >
            {tim?.team_code}
          </Typography>
        </div>
      </div>

      <div className='space-y-2'>
        <Typography as='c' variant='c' className='font-medium text-typo-icon'>
          Status Pembayaran
        </Typography>
        <div
          className={clsxm('px-4 py-2 rounded-lg bg-warning-100', [
            tim?.payment.payment_status === 'SUCCESS' && 'bg-success-100',
            tim?.payment.payment_status === 'GAGAL' && 'bg-critical-100',
          ])}
        >
          <Typography
            className={clsxm('text-center font-semibold text-warning-700', [
              tim?.payment.payment_status === 'SUCCESS' && 'text-success-700',
              tim?.payment.payment_status === 'GAGAL' && 'text-critical-700',
            ])}
          >
            {[
              tim?.payment.payment_status === 'WAITING_PAYMENT' &&
                'Menunggu Pembayaran',
              tim?.payment.payment_status === 'REVISI' && 'Menunggu Revisi',
              tim?.payment.payment_status === 'WAITING_VERIFICATION' &&
                'Belum Terverifikasi',
              tim?.payment.payment_status === 'SUCCESS' &&
                'Pembayaran Terverifikasi',
              tim?.payment.payment_status === 'GAGAL' && 'Verifikasi Ditolak',
            ]}
          </Typography>
        </div>
      </div>

      <div className='space-y-4'>
        <Typography as='c' variant='c' className='font-medium text-typo-icon'>
          Anggota Tim
        </Typography>
        {tim?.team_member.map((member, index) => {
          return (
            <AnggotaCard
              key={index}
              jabatan={
                member.ketua === 'KETUA' ? 'Ketua Tim' : `Anggota ${index}`
              }
              nama={member.name}
            />
          );
        })}
      </div>
    </section>
  );
}

function AnggotaCard({ jabatan, nama }: { jabatan: string; nama: string }) {
  return (
    <div className='p-4 rounded-lg border border-typo-outline'>
      <Typography as='c' variant='c' className='font-medium text-typo-icon'>
        {jabatan}
      </Typography>
      <Typography className='font-semibold text-typo-primary'>
        {nama}
      </Typography>
    </div>
  );
}
