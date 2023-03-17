import { useMutation } from '@tanstack/react-query';
import { serialize } from 'object-to-formdata';
import * as React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';

import Button from '@/components/buttons/Button';
import DropzoneInput from '@/components/forms/DropzoneInput';
import Input from '@/components/forms/Input';
import useMutationToast from '@/hooks/toast/useMutationToast';
import useDialog from '@/hooks/useDialog';
import api from '@/lib/api';
import Informasi from '@/pages/dashboard/pre-event/kti/components/pendaftaran/Informasi';
import KTIFieldArray from '@/pages/dashboard/pre-event/kti/components/pendaftaran/KTIFieldArray';
import { KTIPendaftaranForm } from '@/types/entities/pre-event/kti';

export default function FormPendaftaran() {
  const methods = useForm<KTIPendaftaranForm>();
  const dialog = useDialog();
  const {
    handleSubmit,
    formState: { isDirty },
  } = methods;

  const { mutate: daftarKTI, isLoading: daftarKTIIsLoading } = useMutationToast<
    void,
    FormData
  >(
    useMutation((data) => {
      return api.post('pre_event/kti', data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
    })
  );

  // Dialog
  function openWarningPendaftaran({ formdata }: { formdata: FormData }) {
    dialog({
      title: 'Apakah Anda Yakin!!!',
      description: 'Cek kembali data yang anda masukan, apakah sudah benar?',
      submitText: 'Kirim',
      variant: 'warning',
      catchOnCancel: true,
    }).then(() => {
      daftarKTI(formdata);
    });
  }

  const onSubmit = (data: KTIPendaftaranForm) => {
    if (data.team_member.length < 2) {
      toast.error('Anggota minimal 2 orang');
      return;
    }
    const body = {
      team_name: data.team_name,
      asal_instansi: data.asal_instansi,
      nama_ketua: data.nama_ketua,
      no_telp_ketua: data.no_telp_ketua,

      team_member: data.team_member,

      abstrak: data.abstrak[0],
      follow_sosmed: data.follow_sosmed[0],
      bukti_repost: data.bukti_repost[0],
      twibbon: data.twibbon[0],
    };
    const formdata = serialize(body, { indices: true });
    openWarningPendaftaran({ formdata });
  };

  return (
    <div className='grid grid-cols-1 md:grid-cols-5 md:gap-x-5 gap-y-5'>
      <div className='col-span-3 bg-white shadow-pendaftaran p-6 rounded-xl'>
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
            <Input
              id='name'
              label='Nama Tim'
              placeholder='Sentinels'
              validation={{ required: 'Nama tidak boleh kosong' }}
            />
            <Input
              id='asal_universitas'
              label='Asal Universitas'
              placeholder='Institut Teknologi Sepuluh Nopember'
              validation={{ required: 'Universitas tidak boleh kosong' }}
            />
            <Input
              id='name_ketua'
              label='Nama Ketua'
              placeholder='Hanafi Satriyo Utomo Setiawan'
              validation={{ required: 'Nama Ketua tidak boleh kosong' }}
            />
            <Input
              id='no_telp'
              label='No. Telp Ketua'
              placeholder='+6212345678990'
              helperText='Nomor telepon harus diawali +62'
              validation={{ required: 'No. Telp tidak boleh kosong' }}
            />
            <Input
              id='nama_anggota'
              label='Nama Anggota 1'
              placeholder='Hanafi Satriyo Utomo Setiawan'
              validation={{ required: 'Nama Anggota 1 tidak boleh kosong' }}
            />
            <Input
              id='no_telp_anggota1'
              label='No. Telp Anggota 1'
              placeholder='+6212345678990'
              helperText='Nomor telepon harus diawali +62'
              validation={{ required: 'Nama Anggota 1 tidak boleh kosong' }}
            />
            <KTIFieldArray />
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
              label='Bukti Repost Poster Lomba Karya Tulis Ilmiah'
              validation={{
                required:
                  'Bukti Poster Lomba Karya Tulis Ilmiah tidak boleh kosong',
              }}
            />
            <DropzoneInput
              id='twibbon'
              label='Bukti Upload Twibbon'
              validation={{
                required: 'Bukti Upload Twibbon tidak boleh kosong',
              }}
            />
            <DropzoneInput
              id='file_abstrak'
              label='Pengumpulan File Abstrak'
              validation={{
                required: 'Bukti Upload File Abstrak tidak boleh kosong',
              }}
            />
            <Button
              type='submit'
              disabled={!isDirty}
              isLoading={daftarKTIIsLoading}
            >
              Daftar
            </Button>
          </form>
        </FormProvider>
      </div>
      <Informasi />
    </div>
  );
}
