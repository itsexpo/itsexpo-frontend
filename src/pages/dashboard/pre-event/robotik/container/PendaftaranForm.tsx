import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import { serialize } from 'object-to-formdata';
import * as React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { FaUser, FaUsers } from 'react-icons/fa';

import Button from '@/components/buttons/Button';
import DropzoneInput from '@/components/forms/DropzoneInput';
import Input from '@/components/forms/Input';
import TextArea from '@/components/forms/TextArea';
import { REG_PHONE } from '@/constant/regex';
import useMutationToast from '@/hooks/toast/useMutationToast';
import api from '@/lib/api';
import TeamRoleRadio from '@/pages/dashboard/pre-event/components/TeamRoleRadio';
import Informasi from '@/pages/dashboard/pre-event/robotik/components/pendaftaran/Informasi';
import { RobotikPendaftaranForm } from '@/types/entities/pre-event/robotik';

export default function FormPendaftaran() {
  const methods = useForm<RobotikPendaftaranForm>({
    defaultValues: {
      member_type: 'KETUA',
    },
  });

  const {
    handleSubmit,
    watch,
    formState: { isDirty },
  } = methods;

  const router = useRouter();

  const { mutate: submitRegistration, isLoading: submitIsLoading } =
    useMutationToast<void, FormData>(
      useMutation((data) => {
        return api.post('pre_event/robotik', data, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
      })
    );

  const isTeamLead = watch('member_type') === 'KETUA';

  const onSubmit = (data: RobotikPendaftaranForm) => {
    const memberData = {
      member_type: data.member_type,
      name: data.name,
      no_telp: data.no_telp,
      asal_sekolah: data.asal_sekolah,
      id_card: data.id_card[0],
      follow_sosmed: data.follow_sosmed[0],
      share_poster: data.share_poster[0],
    };

    if (isTeamLead) {
      const body = {
        team_name: data.team_name,
        deskripsi_karya: data.deskripsi_karya,
        ...memberData,
      };
      const formData = serialize(body);
      submitRegistration(formData, {
        onSuccess: () => router.push('/dashboard/pre-event/robotik/main'),
      });
    } else {
      const body = memberData;
      const formData = serialize(body, { indices: true });
      submitRegistration(formData, {
        onSuccess: () => router.push('/dashboard/pre-event/robotik/join'),
      });
    }
  };

  return (
    <div className='grid grid-cols-1 md:grid-cols-5 md:gap-x-5 gap-y-5'>
      <div className='col-span-3 bg-white shadow-pendaftaran p-6 rounded-xl'>
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
            <TeamRoleRadio
              id='member_type'
              label='Daftar Sebagai'
              options={[
                { label: 'Ketua', value: 'KETUA', icon: FaUser },
                { label: 'Anggota', value: 'MEMBER', icon: FaUsers },
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
            <Input
              id='asal_sekolah'
              label='Asal Instansi'
              placeholder='Institut Teknologi Sepuluh Nopember'
              validation={{ required: 'Asal Instansi tidak boleh kosong' }}
            />
            <Input
              id='no_telp'
              label='Nomor Telepon'
              type='tel'
              placeholder='Masukkan Nomor Telepon'
              helperText='Nomor telepon harus diawali +62'
              validation={{
                required: 'Nomor telepon wajib diisi',
                pattern: {
                  value: REG_PHONE,
                  message: 'Nomor telepon tidak valid',
                },
              }}
            />
            {isTeamLead && (
              <TextArea
                id='deskripsi_karya'
                label='Deskripsi Singkat tentang Karya'
                placeholder='Robot Line Tracer merupakan kompetisi membuat robot yang tidak menggunakan bahasa pemrograman atau menggunakan mikrokontroler ...'
                validation={{ required: 'Deskripsi Karya tidak boleh kosong' }}
              />
            )}
            <DropzoneInput
              id='id_card'
              accept={{
                image: ['image/png', 'image/jpeg', 'image/jpg'],
              }}
              label='Upload Scan Kartu Pelajar / Sejenisnya'
              validation={{ required: 'ID Card tidak boleh kosong' }}
            />
            <DropzoneInput
              id='follow_sosmed'
              accept={{
                image: ['image/png', 'image/jpeg', 'image/jpg'],
              }}
              label='Bukti Follow Media Sosial ITS EXPO 2023'
              validation={{
                required: 'Bukti Follow Media Sosial tidak boleh kosong',
              }}
              helperText='www.instagram.com/ITSEXPO2023'
            />
            <DropzoneInput
              id='share_poster'
              accept={{
                image: ['image/png', 'image/jpeg', 'image/jpg'],
              }}
              label='Bukti Repost Poster Lomba Robot In Action'
              validation={{
                required:
                  'Bukti Poster Lomba Robot In Action tidak boleh kosong',
              }}
            />

            <Button
              type='submit'
              disabled={!isDirty}
              isLoading={submitIsLoading}
            >
              Submit
            </Button>
          </form>
        </FormProvider>
      </div>
      <Informasi />
    </div>
  );
}
