import { useMutation } from '@tanstack/react-query';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import Button from '@/components/buttons/Button';
import DropzoneInput from '@/components/forms/DropzoneInput';
import Typography from '@/components/typography/Typography';
import useMutationToast from '@/hooks/toast/useMutationToast';
import useDialog from '@/hooks/useDialog';
import api from '@/lib/api';
import { Biodata2DForm } from '@/pages/dashboard/main-event/wahana-seni/components/BioDataForm2D';
import use2DStore from '@/store/use2DStore';
import { WahanaSeniPendaftaran2D } from '@/types/entities/main-event/wahana-seni';

const PembayaranForm2D = ({
  setStep,
}: {
  setStep: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const bioData = use2DStore.useBioData();
  const methods = useForm<WahanaSeniPendaftaran2D>();
  const dialog = useDialog();
  const { handleSubmit } = methods;

  const { mutate: submit2DFormData, isLoading: submit2DFormDataIsLoading } =
    useMutationToast<void, WahanaSeniPendaftaran2D>(
      useMutation((data) => {
        const res = api.post('/main-event/2d', data);
        return res;
      })
    );

  // Merge bioData and paymentData
  const finalData = ({
    bioData,
    paymentData,
  }: {
    bioData: Biodata2DForm;
    paymentData: WahanaSeniPendaftaran2D;
  }): WahanaSeniPendaftaran2D => {
    const finalData = {
      ...bioData,
      ...paymentData,
    };
    return finalData;
  };
  //

  function openWarningSubmit({
    finalData,
  }: {
    finalData: WahanaSeniPendaftaran2D;
  }) {
    dialog({
      title: 'Apakah Anda Yakin Data Yang Anda Masukan Sudah Benar!!!',
      description: `Cek Kembali apakah data yang anda masukan sudah benar, jika sudah benar silahkan klik tombol kirim.`,
      submitText: 'Kirim',
      variant: 'warning',
      catchOnCancel: true,
    }).then(() => {
      submit2DFormData(finalData, {
        onSuccess: () => setStep(3),
      });
    });
  }

  const onSubmit = (data: WahanaSeniPendaftaran2D) => {
    openWarningSubmit({ finalData: finalData({ bioData, paymentData: data }) });
  };

  return (
    <div className='bg-typo-white p-6 rounded-xl shadow-pendaftaran'>
      <div className='flex flex-col'>
        <Typography variant='b1' className='font-medium text-typo-icon'>
          Jumlah yang harus dibayar
        </Typography>
        <Typography variant='h5' className='font-semibold text-typo-primary'>
          Rp 20.000
        </Typography>
      </div>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)} className='space-y-4 mt-4'>
          <DropzoneInput
            id='bukti_pembayaran'
            label='Upload Bukti Transfer'
            accept={{
              'image/*': ['.jpg', '.jpeg', '.png'],
            }}
            acceptTypes='JPG / JPEG / PNG'
            helperText={'Format nama file: Nama_Kategori_Pembayaran'}
            validation={{
              required: 'Bukti Transfer tidak boleh kosong',
            }}
          />
          <Typography
            variant='c'
            className='text-typo-secondary text-[11.5px] font-secondary -translate-y-4'
          >
            Contoh : Astridea Hasni_2D_Pembayaran
          </Typography>
          <div className='flex gap-x-2 justify-end'>
            <Button size='large' variant='red'>
              Kembali
            </Button>
            <Button
              size='large'
              variant='green'
              type='submit'
              isLoading={submit2DFormDataIsLoading}
            >
              Upload Sekarang
            </Button>
          </div>
        </form>
      </FormProvider>
    </div>
  );
};

export default PembayaranForm2D;
