import * as React from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import Button from '@/components/buttons/Button';
import DropzoneInput from '@/components/forms/DropzoneInput';
import SelectInput from '@/components/forms/SelectInput';
import Typography from '@/components/typography/Typography';
import { Jurnalistik } from '@/types/entities/pre-event/jurnalistik';
export default function FormPembayaran() {
  const methods = useForm<Jurnalistik>();

  // tambahkan isLoading
  const [isLoading, setIsLoading] = React.useState(false);
  const { handleSubmit } = methods;

  const onSubmit = async (data: Jurnalistik) => {
    setIsLoading(true); // set isLoading to true before making the API call
    try {
      const response = await fetch(
        'https://itsexpo.dev-its.site/api/store_image_test',
        {
          method: 'POST',
          body: JSON.stringify(data),
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      const responseData = await response.json();
      // eslint-disable-next-line no-console
      console.log(responseData);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error);
    }
    setIsLoading(false); // set isLoading to false after the API call is finished
  };
  return (
    <div className='grid grid-rows-2 md:grid-cols-6'>
      <div className='col-span-6 md:col-span-4 bg-white shadow-pendaftaran p-6 rounded-xl m-5'>
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
            <Typography
              variant='p'
              as='p'
              className='font-bold text-navy-800 -mb-3'
            >
              Harga
            </Typography>
            <div className='flex'>
              <Typography
                variant='p'
                as='p'
                className='font-bold text-typo-primary'
              >
                Rp100.
              </Typography>
              <Typography
                variant='p'
                as='p'
                className='font-bold text-success-600'
              >
                089
              </Typography>
            </div>
            <SelectInput
              id='nama_bank'
              label='Transfer Dari'
              validation={{ required: 'Bank tidak boleh kosong' }}
            >
              <option value=''>Pilih Nama Bank</option>
              <option value='BNI'>BNI</option>
              <option value='DANA'>DANA</option>
              <option value='OVO'>OVO</option>
              <option value='BRI'>BRI</option>
            </SelectInput>
            <DropzoneInput
              id='bukti_transfer'
              label='Upload Bukti Transfer'
              validation={{ required: 'Bukti Transfer tidak boleh kosong' }}
            />

            <div className='flex justify-end'>
              <Button type='submit' variant='green' className='mr-0'>
                {isLoading ? 'Uploading...' : 'Upload Bukti Transfer'}
              </Button>
            </div>
          </form>
        </FormProvider>
      </div>
      <div className='col-span-6 md:col-span-2 max-h-64 bg-navy-100 shadow-pendaftaran p-4 rounded-xl'>
        <Typography variant='p' as='p' className='font-normal text-navy-800'>
          Lakukan pembayaran ke bank di bawah ini
        </Typography>
        <br />
        <Typography variant='p' as='p' className='font-normal text-navy-800'>
          BNI: 2347623 (Tio)
        </Typography>
        <Typography variant='p' as='p' className='font-normal text-navy-800'>
          DANA: 07825674813 (Hanafi)
        </Typography>
        <Typography variant='p' as='p' className='font-normal text-navy-800'>
          OVO: 08135479478322(Satriyo)
        </Typography>
        <Typography variant='p' as='p' className='font-normal text-navy-800'>
          BRI: 346823464 (Setiawan)
        </Typography>
      </div>
    </div>
  );
}
