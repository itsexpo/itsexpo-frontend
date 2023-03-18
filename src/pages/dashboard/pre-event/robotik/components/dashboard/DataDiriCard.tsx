import * as React from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import Input from '@/components/forms/Input';
import Typography from '@/components/typography/Typography';

// mock data for form
const mockData = {
  nama: 'John Doe',
  provinsi: 'Jawa Barat',
  kabupaten: 'Bandung',
  asal_instansi: 'Universitas Bandung',
};

export default function DataDiriCard() {
  const methods = useForm({
    defaultValues: mockData,
  });
  return (
    <div className=' p-6 pb-12 rounded-xl border-typo-outline border-[1px]'>
      <Typography as='h6' variant='h6' className='text-typo-primary font-bold'>
        Data Diri Anda
      </Typography>
      <FormProvider {...methods}>
        <div className='space-y-4 mt-5'>
          <Input id='nama' label='Nama' readOnly />
          <Input id='provinsi' label='Provinsi' readOnly />
          <Input id='kabupaten' label='Kabupaten' readOnly />
          <Input id='asal_instansi' label='Asal Instansi' readOnly />
        </div>
      </FormProvider>
    </div>
  );
}
