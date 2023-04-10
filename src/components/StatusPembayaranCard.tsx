import * as React from 'react';

import { TagColor } from '@/components/tag/Tag';
import Typography from '@/components/typography/Typography';
import clsxm from '@/lib/clsxm';
import { PaymentId, PaymentText } from '@/types/entities/pembayaran';

const colors: Record<
  string,
  { color: keyof typeof TagColor; background: string; text: PaymentText }
> = {
  DEFAULT: {
    color: 'DEFAULT',
    background: 'bg-critical-100',
    text: 'Tidak Diketahui',
  },
  'AWAITING PAYMENT': {
    color: 'purple',
    background: 'bg-[#F1EBFB]',
    text: 'Menunggu Pembayaran',
  },
  'AWAITING VERIFICATION': {
    color: 'warning',
    background: 'bg-warning-100',
    text: 'Menunggu Verifikasi',
  },
  REVISI: {
    color: 'skyblue',
    background: 'bg-blue-100',
    text: 'Upload Ulang Bukti Pembayaran',
  },
  GAGAL: {
    color: 'danger',
    background: 'bg-critical-100',
    text: 'Pembayaran Gagal/Dibatalkan',
  },
  SUCCESS: {
    color: 'success',
    background: 'bg-success-100',
    text: 'Pembayaran Berhasil',
  },
};

enum StatusPembayaranCardSize {
  'small',
  'base',
  'large',
}

type StatusPembayaranCardProps = {
  status: PaymentId;
  size?: keyof typeof StatusPembayaranCardSize;
};

export default function StatusPembayaranCard({
  status,
  size = 'base',
}: StatusPembayaranCardProps) {
  return (
    <div className='space-y-2'>
      <Typography
        as='p'
        variant='caption'
        className='text-typo-icon font-medium'
      >
        Status Pembayaran
      </Typography>
      <div
        className={clsxm(
          'rounded-lg flex justify-center items-center text-center',
          colors[status].background,
          [
            size === 'large' && [
              'min-h-[34px] md:min-h-[38px] py-2 md:py-2.5 px-[18px] md:px-6',
            ],
            size === 'base' && [
              'min-h-[30px] md:min-h-[34px] py-1.5 md:py-2 px-[14px] md:px-5',
            ],
            size === 'small' && [
              'min-h-[26px] md:min-h-[30px] py-0.5 md:p-1.5 px-[10px] md:px-4',
            ],
          ]
        )}
      >
        <Typography
          as='p'
          color={colors[status].color}
          className={clsxm([
            size === 'large' && 'md:text-lg',
            size === 'base' && 'text-sm md:text-base font-medium',
            size === 'small' && 'text-sm font-semibold',
          ])}
        >
          {colors[status].text}
        </Typography>
      </div>
    </div>
  );
}
