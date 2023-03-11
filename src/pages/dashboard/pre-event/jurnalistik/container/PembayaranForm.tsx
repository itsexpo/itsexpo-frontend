import { useMutation } from '@tanstack/react-query';
import * as React from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import Button from '@/components/buttons/Button';
import DropzoneInput from '@/components/forms/DropzoneInput';
import SelectInput from '@/components/forms/SelectInput';
import Typography from '@/components/typography/Typography';
import useMutationToast from '@/hooks/toast/useMutationToast';
import api from '@/lib/api';
import { Jurnalistik } from '@/types/entities/pre-event/jurnalistik';
export default function FormPembayaran() {
  const methods = useForm<Jurnalistik>();

  const { handleSubmit } = methods;
  // gunakan useMutation untuk mengirim data ke API
  const { mutate, isLoading } = useMutationToast<void, Jurnalistik>(
    useMutation(async (data) => {
      const res = await api.post('/store_image_test', {
        ...data,
      });
      return res;
    })
  );

  const onSubmit = (data: Jurnalistik) => mutate(data);

  return (
    <div className='grid grid-rows-2 md:grid-cols-6'>
      <div className='col-span-6 md:col-span-4 bg-white shadow-pendaftaran p-6 rounded-xl m-5'>
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
            <div>
              <Typography variant='p' className='font-bold text-navy-800'>
                Harga
              </Typography>
              <div className='flex'>
                <Typography variant='p' className='font-bold text-typo-primary'>
                  Rp100.
                </Typography>
                <Typography variant='p' className='font-bold text-success-600'>
                  089
                </Typography>
              </div>
            </div>
            <SelectInput
              id='nama_bank'
              label='Transfer Dari'
              validation={{ required: 'Bank tidak boleh kosong' }}
            >
              <option value=''>Pilih Nama Bank</option>
              <option value='BRI'>BRI</option>
              <option value='BNI'>BNI</option>
              <option value='Shopeepay'>Shopeepay</option>
              <option value='DANA'>DANA</option>
            </SelectInput>
            <DropzoneInput
              id='bukti_transfer'
              label='Upload Bukti Transfer'
              validation={{ required: 'Bukti Transfer tidak boleh kosong' }}
            />

            <div className='flex justify-end'>
              <Button
                type='submit'
                variant='green'
                className='mr-0'
                isLoading={isLoading}
              >
                Upload Bukti Transfer
              </Button>
            </div>
          </form>
        </FormProvider>
      </div>
      <div className='col-span-6 md:col-span-2 max-h-64 bg-navy-100 shadow-pendaftaran p-4 rounded-xl'>
        <Typography variant='p' className='font-normal text-navy-800'>
          PEMBAYARAN JURNALISTIK
        </Typography>
        <br />
        <Typography variant='p' className='font-normal text-navy-800'>
          BRI: 0908 0104 5864 532 (Navisa Salsabila)
        </Typography>
        <Typography variant='p' className='font-normal text-navy-800'>
          BNI: 1299871140 (Navisa Salsabila)
        </Typography>
        <Typography variant='p' className='font-normal text-navy-800'>
          Shopeepay: 087871529729(Navisa Salsabila)
        </Typography>
        <Typography variant='p' className='font-normal text-navy-800'>
          Dana: 087871529729 (Navisa Salsabila)
        </Typography>
      </div>
    </div>
  );
}
