import * as React from 'react';
import { toast } from 'react-hot-toast';
import { MdContentCopy } from 'react-icons/md';

import ButtonLink from '@/components/links/ButtonLink';
import Typography from '@/components/typography/Typography';
import AnggotaButton from '@/pages/dashboard/pre-event/robotik/components/dashboard/AnggotaButton';

export default function TeamCard() {
  const copyToClipboard = () => {
    navigator.clipboard.writeText('TES');
    toast.success('Kode tim berhasil disalin');
  };

  return (
    <div className='p-6 rounded-xl border-typo-outline border-[1px] space-y-6'>
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
            Local Love
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
              JR-CITS-001
            </Typography>
            <MdContentCopy
              className='inline-block text-xl cursor-pointer'
              onClick={copyToClipboard}
            />
          </div>
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

        <div className='w-full h-11 rounded-lg bg-success-100 flex justify-center items-center text-center p-6 sm:p-0'>
          <Typography
            as='p'
            variant='b1'
            className='text-success-800 font-medium'
          >
            Sudah Melakukan Pembayaran
          </Typography>
        </div>
      </div>
      <div className='space-y-4'>
        <Typography as='p' variant='caption' className='text-typo-icon'>
          Anggota Tim
        </Typography>

        <AnggotaButton
          user_id='1234'
          name='Tigo S Yoga'
          id='1234'
          key={1}
          ketua={true}
          id_team={'1234'}
          isTeamLead={true}
        />
        <AnggotaButton
          user_id='1234'
          name='Darren Prasetya'
          id='1234'
          key={1}
          ketua={false}
          id_team={'1234'}
          isTeamLead={true}
        />
        <AnggotaButton
          user_id='1234'
          name='Robby Pambudi'
          id='1234'
          key={1}
          ketua={false}
          id_team={'1234'}
          isTeamLead={true}
        />
      </div>

      <div className='flex justify-end'>
        <ButtonLink
          variant='green'
          className='w-fit'
          href='/dashboard/pre-event/jurnalistik/pembayaran'
        >
          Lakukan Pembayaran
        </ButtonLink>
      </div>
    </div>
  );
}
