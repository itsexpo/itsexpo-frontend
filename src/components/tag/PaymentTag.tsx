import * as React from 'react';

import Tag, { TagColor } from '@/components/tag/Tag';

const PAYMENT_ID = [
  'WAITING_PAYMENT',
  'WAITING_REVISION',
  'WAITING_VERIFICATION',
  'GAGAL',
  'SUCCESS',
];

const PAYMENT_TEXT = [
  'Menunggu Pembayaran',
  'Menunggu Revisi',
  'Menunggu Verifikasi',
  'Gagal',
  'Berhasil',
];

export type PaymentId = (typeof PAYMENT_ID)[number];
export type PaymentText = (typeof PAYMENT_TEXT)[number];

export interface PaymentTagProps {
  id: PaymentId;
  name: PaymentText;
}

const colors: Record<
  string,
  { color: keyof typeof TagColor; text: PaymentText }
> = {
  DEFAULT: {
    color: 'DEFAULT',
    text: 'Tidak Diketahui',
  },
  WAITING_PAYMENT: {
    color: 'warning',
    text: 'Menunggu Pembayaran',
  },
  WAITING_REVISION: {
    color: 'warning',
    text: 'Menunggu Revisi',
  },
};

const PaymentTag = React.forwardRef<HTMLDivElement, { color: PaymentId }>(
  ({ color, ...rest }, ref) => {
    return (
      <Tag
        ref={ref}
        {...rest}
        color={color ? colors[color].color : 'DEFAULT'}
        size='small'
        className='!text-base'
      >
        {color ? colors[color].text : 'Tidak Diketahui'}
      </Tag>
    );
  }
);

export default PaymentTag;
