import { useQuery } from '@tanstack/react-query';
import * as React from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import DropzoneInput from '@/components/forms/DropzoneInput';
import Input from '@/components/forms/Input';
import SelectInput from '@/components/forms/SelectInput';
import TextArea from '@/components/forms/TextArea';
import clsxm from '@/lib/clsxm';
import Anggota3DArrayField from '@/pages/dashboard/main-event/wahana-seni/container/fields/Anggota3DArrayField';
import use3DStore from '@/store/use3DStore';
import { ApiReturn } from '@/types/api';
import { WahanaSeniPendaftaran3DForm } from '@/types/entities/main-event/wahana-seni';

type BioDataForm3DProps = {
  setStep: React.Dispatch<React.SetStateAction<number>>;
} & React.ComponentPropsWithoutRef<'div'>;

export default function BioDataForm3D({ setStep }: BioDataForm3DProps) {
  // Default values
  const biodata = use3DStore.useBiodata();
  const setBiodata = use3DStore.useSetBiodata();

  // Form Init
  const methods = useForm<WahanaSeniPendaftaran3DForm>({
    defaultValues: biodata,
  });

  const onSubmit = (data: WahanaSeniPendaftaran3DForm) => {
    setBiodata(data);
    setStep(2);
  };

  const { handleSubmit } = methods;

  const { data: departemen } = useQuery<
    ApiReturn<Array<{ id: number; name: string }>>
  >(['departemen']);

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)} className='space-y-6'>
        <div
          className={clsxm(
            'space-y-3 p-6 rounded-xl bg-white shadow-pendaftaran'
          )}
        >
          <Input
            id='team_name'
            label='Nama Kelompok'
            placeholder='Masukkan Nama Kelompok'
            validation={{ required: 'Nama kelompok tidak boleh kosong' }}
          />
          <TextArea
            id='deskripsi_karya'
            label='Deskripsi Karya'
            placeholder='Masukkan Deskripsi Karya'
            validation={{ required: 'Deskripsi Karya tidak boleh kosong' }}
          />
          <Input
            id='name'
            label='Nama Ketua'
            placeholder='Masukkan Ketua Kelompok'
            validation={{ required: 'Nama ketua tidak boleh kosong' }}
          />
          <Input
            id='nrp'
            label='NRP Ketua'
            placeholder='Masukkan NRP Ketua'
            helperText='Hanya untuk mahasiswa Institut Teknologi Sepuluh Nopember Surabaya'
            validation={{
              required: 'NRP Ketua tidak boleh kosong',
              pattern: {
                value: /^[0-9]*$/,
                message: 'NRP harus berupa angka',
              },
            }}
          />
          {departemen && (
            <SelectInput
              id='departemen_id'
              label='Departemen'
              validation={{ required: 'Departemen tidak boleh kosong' }}
            >
              {departemen.data.map((departemen) => (
                <option key={departemen.id} value={departemen.id}>
                  {departemen.name}
                </option>
              ))}
            </SelectInput>
          )}
          <Input
            id='kontak'
            label='Kontak Ketua'
            placeholder='Masukkan Kontak Ketua'
            helperText='Isilah dengan kontak aktif. Dapat berupa ID Line/No. Whatsapp'
            validation={{ required: 'Kontak Ketua tidak boleh kosong' }}
          />
          <DropzoneInput
            id={`ktm`}
            label='Upload Dokumen Scan KTM/FRS'
            accept={{
              'image/*': ['.jpg', '.jpeg', '.png'],
            }}
            acceptTypes='JPG / JPEG / PNG'
            validation={{
              required: 'Dokumen Scan KTM/FRS tidak boleh kosong',
            }}
          />
          {departemen && <Anggota3DArrayField departemen={departemen.data} />}
        </div>
      </form>
    </FormProvider>
  );
}
