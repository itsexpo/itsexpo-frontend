import * as React from 'react';

import Loading from '@/components/Loading';
import StatusPembayaranCard from '@/components/StatusPembayaranCard';
import Typography from '@/components/typography/Typography';
import clsxm from '@/lib/clsxm';
import AnggotaCard from '@/pages/dashboard/admin/data-management/jurnalistik/components/AnggotaCard';
import { DetailTimJurnalistik } from '@/types/entities/pre-event/jurnalistik';

export default function DetailTimCard({
  tim,
  className,
}: {
  tim: DetailTimJurnalistik;
  className?: string;
}) {
  if (!tim) <Loading />;
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

      <StatusPembayaranCard
        size='large'
        status={tim.payment.payment_status}
        withHeader
      />

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
