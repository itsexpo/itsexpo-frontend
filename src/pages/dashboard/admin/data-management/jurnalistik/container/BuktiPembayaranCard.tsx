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
  payment_id,
  onSuccess,
  className,
}: {
  tim: DetailTimJurnalistik;
  payment_id: string;
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

  const handleVerification = ({
    status_pembayaran_id,
  }: Omit<JurnalistikVerification, 'pembayaran_id'>) => {
    const data: JurnalistikVerification = {
      pembayaran_id: payment_id,
      status_pembayaran_id,
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
            variant='green'
            onClick={() => handleVerification({ status_pembayaran_id: 3 })}
            isLoading={isLoading}
          >
            Terima
          </Button>
          <Button
            size='small'
            variant='red'
            onClick={() => handleVerification({ status_pembayaran_id: 1 })}
            isLoading={isLoading}
          >
            Tolak
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
