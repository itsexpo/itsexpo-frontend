import { useQuery } from '@tanstack/react-query';
import * as React from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import FormAnggota from '@/pages/dashboard/main-event/wahana-seni/container/FormAnggota';
import { ApiReturn } from '@/types/api';
import { WahanaSeniPendaftaranForm } from '@/types/entities/main-event/wahana-seni';

export default function FormPendaftaran3D() {
  const methods = useForm<WahanaSeniPendaftaranForm>({
    defaultValues: {
      team_member: [
        {
          nama: '',
          nrp: '',
          departemen: 0,
          kontak_aktif: '',
          ktm: undefined,
        },
      ],
    },
  });

  const onSubmit = (data: WahanaSeniPendaftaranForm) => {
    // eslint-disable-next-line no-console
    console.log(data);
  };

  const { handleSubmit } = methods;

  const { data: departemen } = useQuery<
    ApiReturn<Array<{ id: number; name: string }>>
  >(['departemen']);

  return (
    <div className='grid grid-cols-1 md:grid-cols-9 gap-6'>
      <div className='col-span-5'>
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit)} className='space-y-6'>
            {departemen && <FormAnggota departemen={departemen.data} />}
          </form>
        </FormProvider>
      </div>
    </div>
  );
}
