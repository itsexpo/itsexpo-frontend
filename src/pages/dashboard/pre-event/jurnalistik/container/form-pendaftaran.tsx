import { useQuery } from '@tanstack/react-query';
import * as React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { FaUser, FaUsers } from 'react-icons/fa';

import Button from '@/components/buttons/Button';
import DropzoneInput from '@/components/forms/DropzoneInput';
import Input from '@/components/forms/Input';
import SelectInput from '@/components/forms/SelectInput';
import api from '@/lib/api';
import TeamRoleRadio from '@/pages/dashboard/pre-event/jurnalistik/components/TeamRoleRadio';
import { ApiReturn } from '@/types/api';
import { Jurnalistik } from '@/types/entities/pre-event/jurnalistik';

export default function FromPendaftaran() {
  const [kabupaten, setKabupaten] = React.useState<
    { id: string; name: string }[]
  >([]);
  const methods = useForm<Jurnalistik>();

  const { handleSubmit, watch } = methods;

  const onSubmit = (data: Jurnalistik) => {
    // eslint-disable-next-line no-console
    console.log(data);
  };
  const isTeamLead = watch('team_role') === 'ketua';

  const provinsi = useQuery<ApiReturn<{ id: string; name: string }[]>>([
    '/provinsi',
  ]);

  const getKabupaten = (provinsiId: string) => {
    api
      .get<ApiReturn<{ id: string; name: string }[]>>(
        `/kabupaten?provinsi_id=${provinsiId}`
      )
      .then((res) => {
        setKabupaten(res.data.data);
      });
  };

  return (
    <div className='grid grid-cols-5'>
      <div className='col-span-3 bg-white shadow-pendaftaran p-6 rounded-xl'>
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
            <TeamRoleRadio
              id='team_role'
              label='Daftar Sebagai'
              options={[
                { label: 'Ketua', value: 'ketua', icon: FaUser },
                { label: 'Anggota', value: 'anggota', icon: FaUsers },
              ]}
              validation={{ required: 'Pilih salah satu' }}
            />
            {isTeamLead && (
              <Input
                id='team_name'
                label='Nama Tim'
                placeholder='Nama Tim'
                validation={{ required: 'Nama Tim tidak boleh kosong' }}
              />
            )}
            <Input
              id='name'
              label='Nama'
              placeholder='Nama Lengkap'
              validation={{ required: 'Nama tidak boleh kosong' }}
            />
            <SelectInput
              id='jenis_kegiatan'
              label='Jenis Kegiatan'
              validation={{ required: 'Nama tidak boleh kosong' }}
            >
              <option value=''>Pilih Jenis Kegiatan</option>
              <option value='KHUSUS'>Kegiatan Khusus</option>
              <option value='UMUM'>Kegiatan UMUM</option>
            </SelectInput>
            <SelectInput
              id='provinsi'
              label='Provinsi'
              validation={{ required: 'Provinsi tidak boleh kosong' }}
              onChange={(e) => getKabupaten(e.target.value)}
            >
              {provinsi.data?.data.map((prov) => (
                <option key={prov.id} value={prov.id}>
                  {prov.name}
                </option>
              ))}
            </SelectInput>
            {kabupaten.length > 0 && (
              <SelectInput
                id='kabupaten'
                label='Kabupaten'
                validation={{ required: 'Kabupaten tidak boleh kosong' }}
                onChange={(e) => getKabupaten(e.target.value)}
              >
                {kabupaten.map((prov) => (
                  <option key={prov.id} value={prov.id}>
                    {prov.name}
                  </option>
                ))}
              </SelectInput>
            )}
            <Input
              id='id_line'
              label='ID Line'
              placeholder='ID Line'
              validation={{ required: 'ID Line tidak boleh kosong' }}
            />
            <Input
              id='asal_instansi'
              label='Asal Instansi'
              placeholder='Institut Teknologi Sepuluh Nopember'
              validation={{ required: 'Asal Instansi tidak boleh kosong' }}
            />
            <DropzoneInput
              id='id_card'
              label='Upload Scan Kartu Pelajar / KTP'
              validation={{ required: 'ID Card tidak boleh kosong' }}
            />
            <DropzoneInput
              id='follow_sosmed'
              label='Bukti Follow Media Sosial ITS EXPO 2023'
              validation={{
                required: 'Bukti Follow Media Sosial tidak boleh kosong',
              }}
              helperText='www.instagram.com/ITSEXPO2023'
            />
            <DropzoneInput
              id='share_poster'
              label='Bukti Repost Poster Lomba Jurnalistik'
              validation={{
                required: 'Bukti Poster Lomba Jurnalistik tidak boleh kosong',
              }}
            />

            <Button type='submit'>Submit</Button>
          </form>
        </FormProvider>
      </div>
    </div>
  );
}
