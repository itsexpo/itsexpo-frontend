import * as React from 'react';

import Tag, { TagColor } from '@/components/tag/Tag';
import { PaymentId, PaymentText } from '@/types/entities/pembayaran';

export const statusPembayaran: Record<
  string,
  { id: number; color: keyof typeof TagColor; text: PaymentText }
> = {
  DEFAULT: {
    id: 0,
    color: 'DEFAULT',
    text: 'Tidak Diketahui',
  },
  'AWAITING PAYMENT': {
    id: 5,
    color: 'purple',
    text: 'Menunggu Pembayaran',
  },
  'AWAITING VERIFICATION': {
    id: 4,
    color: 'warning',
    text: 'Menunggu Verifikasi',
  },
  REVISI: {
    id: 1,
    color: 'skyblue',
    text: 'Menunggu Revisi',
  },
  GAGAL: {
    id: 2,
    color: 'danger',
    text: 'Pembayaran Gagal',
  },
  SUCCESS: {
    id: 3,
    color: 'success',
    text: 'Pembayaran Berhasil',
  },
};

const PaymentTag = React.forwardRef<HTMLDivElement, { color: PaymentId }>(
  ({ color, ...rest }, ref) => {
    return (
      <Tag
        ref={ref}
        {...rest}
        color={color ? statusPembayaran[color].color : 'DEFAULT'}
        size='small'
        className='!text-base'
      >
        {color ? statusPembayaran[color].text : 'Tidak Diketahui'}
      </Tag>
    );
  }
);

export default PaymentTag;
