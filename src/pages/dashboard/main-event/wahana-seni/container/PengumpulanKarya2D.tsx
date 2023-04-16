import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import { serialize } from 'object-to-formdata';
import * as React from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import Button from '@/components/buttons/Button';
import DropzoneInput from '@/components/forms/DropzoneInput';
import Typography from '@/components/typography/Typography';
import useMutationToast from '@/hooks/toast/useMutationToast';
import useDialog from '@/hooks/useDialog';
import api from '@/lib/api';
import { PengumpulanKaryaData } from '@/types/entities/main-event/wahana-seni';

export default function PengumpulanKarya2D() {
  // Form Initialization
  const methods = useForm<PengumpulanKaryaData>();
  const { handleSubmit } = methods;

  // Router Initialization
  const router = useRouter();

  // Dialog Initialization
  const dialog = useDialog();

  // Success Dialog
  function openSuccessDialog() {
    dialog({
      title: 'Karyamu berhasil terkumpul! ',
      description: `Jangan lupa untuk menunggu informasi lebih lanjut melalui instagram ITS EXPO 2023. Sampai jumpa di Exhibition ITS EXPO 2023!`,
      submitText: 'Kembali Ke Dashboard',
      variant: 'success',
      catchOnCancel: true,
    }).then(() => router.push('/dashboard/main-event/wahana-seni'));
  }

  // Mutate
  const { mutate: submitKarya2D, isLoading: submitKarya2DIsLoading } =
    useMutationToast<void, FormData>(
      useMutation((data) => {
        const res = api.post('/main-event/2d/upload-berkas', data, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        return res;
      })
    );

  // Warning Submit Dialog
  function openWarningSubmit({ formData }: { formData: FormData }) {
    dialog({
      title: 'Apakah Anda Yakin Data Yang Anda Masukan Sudah Benar!!!',
      description: `Cek Kembali apakah data yang anda masukan sudah benar, jika sudah benar silahkan klik tombol kirim.`,
      submitText: 'Kirim',
      variant: 'warning',
      catchOnCancel: true,
    }).then(() => {
      submitKarya2D(formData, {
        onSuccess: () => openSuccessDialog(),
      });
    });
  }

  // Handle Submit
  const onSubmit = (_data: PengumpulanKaryaData) => {
    const data = {
      upload_karya: _data.upload_karya[0],
      deskripsi: _data.deskripsi[0],
      form_keaslian: _data.form_keaslian[0],
    };
    const formdata = serialize(data, {
      indices: true,
    });
    openWarningSubmit({ formData: formdata as FormData });
  };

  return (
    <div className='grid grid-cols-4 md:grid-cols-9 rounded-xl bg-white shadow-pendaftaran p-6'>
      <div className='flex flex-col col-span-9'>
        <Typography variant='t' className='font-semibold'>
          Tema
        </Typography>
        <div className='bg-success-100 mt-2 p-4 rounded-md'>
          <Typography
            variant='t'
            className='font-semibold text-success-700 text-sm md:text-[20px] leading-tight'
          >
            &quot;Aku menginjak tanah baru, dengan kejutan menyadari bahwa
            ketakutan ku hanyalah khayalan semu yang pernah terbesit dalam
            pikiranku.&quot;
          </Typography>
        </div>
        <Typography variant='p' className='mt-4 md:mt-6'>
          Pada kesempatan kali ini, Sayembara Karya Mahasiswa mengusung tema
          yang diambil dari perjalanan kisah Saka dan Wana yang bertualang di
          Dunia Fantasi. Harapannya peserta dapat menciptakan karya berdasarkan
          tema dari sudut pandang dan memiliki unique pointnya masing-masing
        </Typography>
        <hr className='my-6' />
        <div>
          <Typography variant='t' className='font-semibold'>
            Pengumpulan
          </Typography>
          <FormProvider {...methods}>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className='grid grid-cols-3 md:grid-cols-9 gap-6 mt-6'
            >
              <div className='col-span-9 md:col-span-3'>
                <DropzoneInput
                  id='upload_karya'
                  label='Upload Karya'
                  accept={{
                    'application/zip': ['.zip'],
                  }}
                  // maxsize 15 mb
                  maxSize={15000000}
                  acceptTypes='.zip'
                  validation={{
                    required: 'Upload Karya tidak boleh kosong',
                  }}
                />
                <Typography
                  variant='c'
                  className='text-typo-secondary font-normal break-all'
                >
                  Penamaan file: Nama Ketua_Kategori_Nama Karya_Foto Karya
                  <br />
                  Contoh : Astridea Hasni_3D_Perjalanan Saka dan Wana_Foto Karya
                </Typography>
              </div>
              <div className='col-span-9 md:col-span-3'>
                <DropzoneInput
                  id='deskripsi'
                  label='Upload Deskripsi Karya'
                  accept={{
                    'application/pdf': ['.pdf'],
                  }}
                  acceptTypes='PDF'
                  validation={{
                    required: 'Upload Karya tidak boleh kosong',
                  }}
                />
                <Typography
                  variant='c'
                  className='text-typo-secondary font-normal break-all'
                >
                  Penamaan file: Nama Ketua_Kategori_Nama Karya_Deskripsi Karya
                  <br />
                  Contoh : Astridea Hasni_3D_Perjalanan Saka dan Wana_Deskripsi
                  Karya
                </Typography>
              </div>
              <div className='col-span-9 md:col-span-3'>
                <DropzoneInput
                  id='form_keaslian'
                  label='Upload Form Keaslian Karya'
                  accept={{
                    'application/pdf': ['.pdf'],
                  }}
                  acceptTypes='PDF'
                  validation={{
                    required: 'Upload Karya tidak boleh kosong',
                  }}
                />
                <Typography
                  variant='c'
                  className='text-typo-secondary font-normal break-all'
                >
                  Penamaan file: Nama Ketua_Kategori_Nama Karya_Form Keaslian
                  Karya
                  <br />
                  Contoh : Astridea Hasni_3D_Perjalanan Saka dan Wana_Form
                  Keaslian Karya
                </Typography>
              </div>
              <div className='col-span-9 md:col-span-3 col-start-1 md:col-start-7 flex justify-end'>
                <Button
                  variant='green'
                  size='large'
                  isLoading={submitKarya2DIsLoading}
                  type='submit'
                  className=''
                >
                  Upload Sekarang
                </Button>
              </div>
            </form>
          </FormProvider>
        </div>
      </div>
    </div>
  );
}
