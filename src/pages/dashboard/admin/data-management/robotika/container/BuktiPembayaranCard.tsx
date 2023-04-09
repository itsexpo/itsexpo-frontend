import { useMutation } from '@tanstack/react-query';
import * as React from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import Button from '@/components/buttons/Button';
import Input from '@/components/forms/Input';
import ImageFetch from '@/components/ImageFetch';
import Typography from '@/components/typography/Typography';
import useMutationToast from '@/hooks/toast/useMutationToast';
import api from '@/lib/api';
import clsxm from '@/lib/clsxm';
import { formatToRupiah } from '@/lib/currency';
import { ApiReturn } from '@/types/api';
import {
  DetailTimRobotik,
  RobotikVerification,
} from '@/types/entities/pre-event/robotik';

export default function BuktiPembayaranCard({
  tim,
  onSuccess,
  className,
}: {
  tim: DetailTimRobotik;
  onSuccess: () => void;
  className?: string;
}) {
  const methods = useForm();

  const { mutate: verificate, isLoading } = useMutationToast<
    ApiReturn<undefined>,
    RobotikVerification
  >(
    useMutation((data) =>
      api.patch('/admin/robotik', data).then((res) => {
        onSuccess();
        return res;
      })
    )
  );

  const handleVerification = ({
    status_pembayaran_id,
  }: Omit<RobotikVerification, 'pembayaran_id'>) => {
    const data: RobotikVerification = {
      pembayaran_id: tim.payment.payment_id,
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
            disabled={tim.payment.payment_status == 'AWAITING PAYMENT'}
          >
            Terima
          </Button>
          <Button
            size='small'
            variant='red'
            onClick={() => handleVerification({ status_pembayaran_id: 1 })}
            isLoading={isLoading}
            disabled={tim.payment.payment_status == 'AWAITING PAYMENT'}
          >
            Tolak
          </Button>
        </div>
      </div>
      {tim.payment.payment_status == 'AWAITING PAYMENT' && (
        <Typography variant='c' className='text-typo-icon'>
          Belum ada pembayaran
        </Typography>
      )}

      {tim.payment.payment_status != 'AWAITING PAYMENT' && (
        <FormProvider {...methods}>
          <div className='flex flex-col gap-0'>
            <Input
              label='Atas Nama'
              value={tim.payment.payment_atas_nama}
              readOnly
              id='atasNama'
              inputClassName='text-black'
            />
            <Input
              label='Bank'
              value={tim.payment.payment_bank}
              readOnly
              id='bank'
              inputClassName='text-black'
            />
            <Input
              label='Harga'
              value={formatToRupiah(tim.payment.payment_harga)}
              readOnly
              id='harga'
              inputClassName='text-black'
            />
            <div>
              <Typography variant='c' className='font-semibold my-2'>
                Bukti Pembayaran
              </Typography>
              {tim && (
                <ImageFetch
                  imgPath={tim.payment.payment_image}
                  width={416}
                  height={525}
                  alt='bukti pembayaran'
                  imgClassName='rounded-lg object-left'
                />
              )}
            </div>
          </div>
        </FormProvider>
      )}
    </section>
  );
}
