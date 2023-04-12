import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import Button from '@/components/buttons/Button';
import DropzoneInput from '@/components/forms/DropzoneInput';
import Input from '@/components/forms/Input';
import SelectInput from '@/components/forms/SelectInput';
import use2DStore from '@/store/use2DStore';
import { WahanaSeniPendaftaran2D } from '@/types/entities/main-event/wahana-seni';

export type Biodata2DForm = Omit<
  WahanaSeniPendaftaran2D,
  'bukti_pembayaran' | 'bank_id' | 'atas_nama'
>;

export default function BioDataForm2D({
  departemen,
  setStep,
}: {
  departemen: Array<{ id: number; name: string }>;
  setStep: React.Dispatch<React.SetStateAction<number>>;
}) {
  // State
  const bioData = use2DStore.useBioData();
  const setBioData = use2DStore.useSetBioData();
  // State

  // Form handle
  const methods = useForm<Biodata2DForm>({
    defaultValues: bioData,
  });

  const { handleSubmit } = methods;
  // Form handle

  // Handle Submit
  const onSubmit = (data: Biodata2DForm) => {
    setBioData(data);
    setStep(2);
  };
  // Handle Submit

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='space-y-4 bg-typo-white p-6 rounded-xl shadow-pendaftaran mb-4'
      >
        <Input
          id='name'
          label='Nama'
          placeholder='Masukkan Nama'
          validation={{ required: 'Nama tidak boleh kosong' }}
        />
        <Input
          id='nrp'
          label='NRP'
          placeholder='Masukkan NRP'
          validation={{ required: 'NRP tidak boleh kosong' }}
        />
        <SelectInput
          id='departemen_id'
          label='Pilih Departemen'
          placeholder='Pilih Departemen'
          validation={{ required: 'Departemen tidak boleh kosong' }}
        >
          {departemen.map(({ id, name }) => (
            <option key={id} value={id}>
              {name}
            </option>
          ))}
        </SelectInput>
        <Input
          id='kontak'
          label='Kontak Aktif'
          placeholder='Masukkan Kontak Anda'
          helperText='Isilah dengan kontak aktif. Dapat berupa ID Line/No. Whatsapp'
          validation={{ required: 'Kontak aktif tidak boleh kosong' }}
        />
        <DropzoneInput
          id='ktm'
          label='Upload Dokumen Scan KTM/FRS'
          accept={{
            'image/*': ['.jpg', '.jpeg', '.png'],
          }}
          acceptTypes='JPG / JPEG / PNG'
          validation={{
            required: 'Dokumen Scan KTM/FRS tidak boleh kosong',
          }}
        />
        <Button
          size='large'
          variant='green'
          className='flex ml-auto'
          type='submit'
        >
          Selanjutnya
        </Button>
      </form>
    </FormProvider>
  );
}
