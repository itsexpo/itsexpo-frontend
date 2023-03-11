import { useMutation, useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import { serialize } from 'object-to-formdata';
import * as React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { FaUser, FaUsers } from 'react-icons/fa';

import Button from '@/components/buttons/Button';
import DropzoneInput from '@/components/forms/DropzoneInput';
import Input from '@/components/forms/Input';
import SelectInput from '@/components/forms/SelectInput';
import useMutationToast from '@/hooks/toast/useMutationToast';
import api from '@/lib/api';
import TeamRoleRadio from '@/pages/dashboard/pre-event/jurnalistik/components/TeamRoleRadio';
import useAuthStore from '@/store/useAuthStore';
import { ApiReturn } from '@/types/api';
import { Jurnalistik } from '@/types/entities/pre-event/jurnalistik';

export default function FromPendaftaran() {
  const [kabupaten, setKabupaten] = React.useState<
    { id: string; name: string }[]
  >([]);
  const methods = useForm<Jurnalistik>();

  const {
    handleSubmit,
    watch,
    formState: { isDirty },
  } = methods;

  const router = useRouter();

  const user = useAuthStore.useUser();

  const { mutate: SubmitAsKetua, isLoading: KetuaIsLoading } = useMutationToast<
    void,
    FormData
  >(
    useMutation((data) => {
      return api.post('pre_event/jurnalistik/ketua', data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
    })
  );

  const { mutate: SubmitAsMember, isLoading: MemberIsLoading } =
    useMutationToast<void, FormData>(
      useMutation((data) => {
        return api.post('pre_event/jurnalistik/member', data, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
      })
    );

  const onSubmit = (data: Jurnalistik) => {
    const image = {
      id_card: data.id_card[0],
      follow_sosmed: data.follow_sosmed[0],
      share_poster: data.share_poster[0],
    };
    const lomba_category = user?.role_id == '5' ? 'TELEVISION' : 'BLOGGER';

    if (isTeamLead) {
      const body = {
        name: data.name,
        member_type: data.member_type,
        team_name: data.team_name,
        lomba_category: lomba_category,
        jenis_kegiatan: data.jenis_kegiatan,
        provinsi_id: data.provinsi_id,
        kabupaten_id: data.kabupaten_id,
        asal_instansi: data.asal_instansi,
        id_line: data.id_line,
        ...image,
      };
      const formData = serialize(body);
      SubmitAsKetua(formData);
    } else {
      const body = {
        name: data.name,
        member_type: data.member_type,
        provinsi_id: data.provinsi_id,
        kabupaten_id: data.kabupaten_id,
        asal_instansi: data.asal_instansi,
        id_line: data.id_line,
        ...image,
      };
      const formData = serialize(body, { indices: true });
      SubmitAsMember(formData);
    }
    router.push('/dashboard/pre-event/jurnalistik/main');
  };
  const isTeamLead = watch('member_type') === 'ketua';

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
    <div className='grid grid-cols-1 md:grid-cols-5'>
      <div className='col-span-3 bg-white shadow-pendaftaran p-6 rounded-xl'>
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
            <TeamRoleRadio
              id='member_type'
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
              validation={{ required: 'Jenis Kegiatan tidak boleh kosong' }}
            >
              <option value=''>Pilih Jenis Kegiatan</option>
              <option value='KHUSUS'>Kegiatan Khusus</option>
              <option value='UMUM'>Kegiatan Umum</option>
            </SelectInput>
            <SelectInput
              id='provinsi_id'
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
                id='kabupaten_id'
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

            <Button
              type='submit'
              disabled={!isDirty}
              isLoading={KetuaIsLoading || MemberIsLoading}
            >
              Submit
            </Button>
          </form>
        </FormProvider>
      </div>
    </div>
  );
}
