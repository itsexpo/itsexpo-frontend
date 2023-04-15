import * as React from 'react';

import FileFetch from '@/components/FileFetch';
import Loading from '@/components/Loading';
import StatusPembayaranCard from '@/components/StatusPembayaranCard';
import Typography from '@/components/typography/Typography';
import ZipDownload from '@/components/ZipDownload';
import clsxm from '@/lib/clsxm';
import { TeamDataWahanaSeni2D } from '@/types/entities/main-event/wahana-seni';

export default function DetailTimCard({
  tim,
  className,
}: {
  tim: TeamDataWahanaSeni2D;
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
          Seni 2D
        </Typography>
      </div>

      <div className='flex justify-between gap-6'>
        <div>
          <Typography as='c' variant='c' className='font-medium text-typo-icon'>
            Nama
          </Typography>
          <Typography
            as='h6'
            variant='h6'
            className='font-bold text-typo-primary'
          >
            {tim.name}
          </Typography>
        </div>
        <div>
          <Typography as='c' variant='c' className='font-medium text-typo-icon'>
            NRP
          </Typography>
          <Typography
            as='h6'
            variant='h6'
            className='font-bold text-success-600'
          >
            {tim.nrp}
          </Typography>
        </div>
      </div>
      <div>
        <Typography as='c' variant='c' className='font-medium text-typo-icon'>
          Kontak
        </Typography>
        <Typography
          as='h6'
          variant='h6'
          className='font-bold text-typo-primary'
        >
          {tim.kontak}
        </Typography>
      </div>
      <div>
        <Typography as='c' variant='c' className='font-medium text-typo-icon'>
          Departemen
        </Typography>
        <Typography
          as='h6'
          variant='h6'
          className='font-bold text-typo-primary'
        >
          {tim.department}
        </Typography>
      </div>

      <StatusPembayaranCard
        size='large'
        status={tim.payment.payment_status}
        withHeader
      />
      <div className='w-full'>
        <FileFetch
          filePath={tim.form_keaslian_url}
          alt=''
          label='Form Keaslian'
        />
      </div>
      <div className='w-full'>
        <FileFetch
          filePath={tim.deskripsi_url}
          alt=''
          label='Deskripsi Karya'
        />
      </div>
      <div className='w-full'>
        {tim.upload_karya_url ? (
          <ZipDownload url={tim.upload_karya_url} label='Karya 2D' />
        ) : (
          <Typography
            as='h6'
            variant='h6'
            className='font-bold text-typo-primary'
          >
            Belum Upload Karya (Zip)
          </Typography>
        )}
      </div>
    </section>
  );
}
