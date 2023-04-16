import * as React from 'react';

import FileFetch from '@/components/FileFetch';
import Loading from '@/components/Loading';
import StatusPembayaranCard from '@/components/StatusPembayaranCard';
import Typography from '@/components/typography/Typography';
import ZipDownload from '@/components/ZipDownload';
import clsxm from '@/lib/clsxm';
import AnggotaCard from '@/pages/dashboard/admin/main-event/wahana-seni/components/3d/AnggotaCard';
import { TeamDataWahanaSeni3D } from '@/types/entities/main-event/wahana-seni';

export default function DetailTimCard({
  tim,
  className,
}: {
  tim: TeamDataWahanaSeni3D;
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
          Seni 3D
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
      <div>
        <Typography as='c' variant='c' className='font-medium text-typo-icon'>
          Deskripsi Karya
        </Typography>
        <Typography as='p' variant='p' className='font-bold'>
          {tim?.deskripsi_karya}
        </Typography>
      </div>

      <StatusPembayaranCard
        size='large'
        status={tim.payment.payment_status}
        withHeader
      />
      <div className='w-full'>
        {tim.upload_karya_url ? (
          <div className='space-y-2'>
            <div className='w-full'>
              <FileFetch
                filePath={tim.form_keaslian_url}
                alt=''
                label='Form Keaslian'
              />
            </div>
            <div className='w-full'>
              <FileFetch
                filePath={tim.deskripsi_karya_url}
                alt=''
                label='Deskripsi Karya'
              />
            </div>
            <ZipDownload url={tim.upload_karya_url} label='Karya 3D' />
          </div>
        ) : (
          <Typography
            as='h6'
            variant='h6'
            className='font-bold text-typo-primary'
          >
            Belum Mengunggah Karya
          </Typography>
        )}
      </div>

      <div className='space-y-4'>
        <Typography as='c' variant='c' className='font-medium text-typo-icon'>
          Anggota Tim
        </Typography>
        {tim?.team_member.map((member, index) => {
          return (
            <AnggotaCard
              key={index}
              nrp={member.nrp}
              departemen={member.department}
              jabatan={member.ketua === true ? 'Ketua Tim' : `Anggota ${index}`}
              nama={member.name}
            />
          );
        })}
      </div>
    </section>
  );
}
