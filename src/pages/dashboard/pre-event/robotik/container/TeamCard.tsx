import * as React from 'react';
import { toast } from 'react-hot-toast';
import { MdContentCopy } from 'react-icons/md';

import ButtonLink from '@/components/links/ButtonLink';
import StatusPembayaranCard from '@/components/StatusPembayaranCard';
import Typography from '@/components/typography/Typography';
import AnggotaButton from '@/pages/dashboard/pre-event/robotik/components/dashboard/AnggotaButton';
import { DetailPendaftarRobotik } from '@/types/entities/pre-event/robotik';

export default function TeamCard({
  id_tim,
  code_tim,
  name_tim,
  peserta,
  deskripsi_karya,
  ketua_tim,
  payment,
}: DetailPendaftarRobotik) {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(code_tim);
    toast.success('Kode tim berhasil disalin');
  };

  return (
    <div className='bg-white p-6 rounded-xl border-typo-outline border-[1px] space-y-6'>
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
            {name_tim}
          </Typography>
        </div>
        <div>
          <Typography
            as='p'
            variant='caption'
            className='text-typo-icon font-medium'
          >
            Kode Tim
          </Typography>
          <div className='flex items-center justify-center space-x-2'>
            <Typography
              as='h6'
              variant='h6'
              className='font-bold text-success-600'
            >
              {code_tim}
            </Typography>
            <MdContentCopy
              className='inline-block text-xl cursor-pointer'
              onClick={copyToClipboard}
            />
          </div>
        </div>
      </div>
      <StatusPembayaranCard status={payment.status} />
      <div>
        <Typography as='p' variant='caption' className='text-typo-icon'>
          Deskripsi Karya
        </Typography>
        <Typography as='p' variant='body1' className='text-typo-primary'>
          {deskripsi_karya}
        </Typography>
      </div>
      <div className='space-y-4'>
        <div>
          <Typography as='p' variant='caption' className='text-typo-icon'>
            Anggota Tim
          </Typography>
        </div>

        {peserta.map((anggota, index) => (
          <AnggotaButton
            key={index}
            {...anggota}
            id_team={id_tim}
            isTeamLead={ketua_tim}
          />
        ))}
      </div>
      {ketua_tim &&
        payment.status !== 'AWAITING VERIFICATION' &&
        payment.status !== 'SUCCESS' && (
          <div className='flex justify-end'>
            <ButtonLink
              variant='green'
              className='w-fit'
              href={`/dashboard/pre-event/robotik/pembayaran?code=${id_tim}`}
            >
              Lakukan Pembayaran
            </ButtonLink>
          </div>
        )}
    </div>
  );
}
