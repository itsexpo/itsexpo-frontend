import { useMutation } from '@tanstack/react-query';
import * as React from 'react';

import Button from '@/components/buttons/Button';
import ImageFetch from '@/components/ImageFetch';
import Typography from '@/components/typography/Typography';
import useMutationToast from '@/hooks/toast/useMutationToast';
import api from '@/lib/api';
import clsxm from '@/lib/clsxm';
import { ApiReturn } from '@/types/api';
import {
  DetailTimJurnalistik,
  JurnalistikVerification,
} from '@/types/entities/pre-event/jurnalistik';

export default function BuktiPembayaranCard({
  tim,
  uuid,
  onSuccess,
  className,
}: {
  tim?: DetailTimJurnalistik;
  uuid?: string;
  onSuccess: () => void;
  className?: string;
}) {
  const { mutate: verificate, isLoading } = useMutationToast<
    ApiReturn<undefined>,
    JurnalistikVerification
  >(
    useMutation((data) =>
      api.patch('/admin/jurnalistik', data).then((res) => {
        onSuccess();
        return res;
      })
    )
  );

  const onClick = ({
    status,
  }: Omit<JurnalistikVerification, 'id_jurnalistik'>) => {
    const data: JurnalistikVerification = {
      id_jurnalistik: uuid,
      status: status,
    };
    verificate(data);
  };

  return (
    <section
      className={clsxm(
        'space-y-6 p-6 rounded-xl bg-typo-white shadow-pendaftaran',
        className
      )}
    >
      <div className='flex gap-x-6'>
        <Typography
          as='h6'
          variant='t'
          className='font-semibold text-typo-primary'
        >
          Bukti Pembayaran
        </Typography>

        <div className='flex gap-x-2'>
          <Button
            size='small'
            variant={
              tim?.payment.payment_status === 'GAGAL' ||
              tim?.payment.payment_status === 'WAITING_PAYMENT'
                ? 'basic'
                : 'red'
            }
            disabled={
              tim?.payment.payment_status === 'GAGAL' ||
              tim?.payment.payment_status === 'WAITING_PAYMENT'
            }
            className={clsxm(
              (tim?.payment.payment_status === 'GAGAL' ||
                tim?.payment.payment_status === 'WAITING_PAYMENT') &&
                'bg-typo-outline'
            )}
            onClick={() => onClick({ status: 'TERIMA' })}
            isLoading={isLoading}
          >
            Tolak
          </Button>
          <Button
            size='small'
            variant={
              tim?.payment.payment_status === 'SUCCESS' ||
              tim?.payment.payment_status === 'WAITING_PAYMENT'
                ? 'basic'
                : 'green'
            }
            disabled={
              tim?.payment.payment_status === 'SUCCESS' ||
              tim?.payment.payment_status === 'WAITING_PAYMENT'
            }
            className={clsxm(
              (tim?.payment.payment_status === 'SUCCESS' ||
                tim?.payment.payment_status === 'WAITING_PAYMENT') &&
                'bg-typo-outline'
            )}
            onClick={() => onClick({ status: 'TOLAK' })}
            isLoading={isLoading}
          >
            Terima
          </Button>
        </div>
      </div>

      {tim && (
        <ImageFetch
          imgPath={tim.payment.payment_image}
          width={416}
          height={525}
          alt='bukti pembayaran'
          imgClassName='rounded-lg'
        />
      )}
    </section>
  );
}
