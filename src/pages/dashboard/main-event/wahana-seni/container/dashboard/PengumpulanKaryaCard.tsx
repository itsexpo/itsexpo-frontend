import * as React from 'react';

import ButtonLink from '@/components/links/ButtonLink';
import Typography from '@/components/typography/Typography';
import { PaymentStatusWahanaSeni } from '@/pages/dashboard/main-event/wahana-seni/container/dashboard/InformasiCard';

export default function PengumpulanKaryaCard({
  payment,
  contest,
}: {
  contest: '2d' | '3d';
  payment: PaymentStatusWahanaSeni;
}) {
  return (
    <div>
      <Typography as='h6' variant='h6' className={'font-bold'}>
        Pengumpulan Karya
      </Typography>
      <div className='mt-4'>
        {payment.payment_status === 'SUCCESS' ? (
          <div>
            <Typography as='p' className='text-typo-secondary'>
              Silahkan mengumpulkan karya anda melalui link berikut ini:
            </Typography>
            <div className='mt-4 flex justify-end'>
              <ButtonLink
                href={`/dashboard/main-event/wahana-seni/karya-${contest}`}
                variant='green'
              >
                Lakukan Pengumpulan
              </ButtonLink>
            </div>
          </div>
        ) : (
          <Typography as='p' className='text-typo-secondary'>
            Mohon menunggu tim panitia untuk mengkonfirmasi pembayaran anda.
          </Typography>
        )}
      </div>
    </div>
  );
}
