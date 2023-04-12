import { useMutation } from '@tanstack/react-query';
import { serialize } from 'object-to-formdata';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import Button from '@/components/buttons/Button';
import DropzoneInput from '@/components/forms/DropzoneInput';
import Input from '@/components/forms/Input';
import SelectInput from '@/components/forms/SelectInput';
import withAuth from '@/components/hoc/withAuth';
import Typography from '@/components/typography/Typography';
import { Bank } from '@/constant/bank';
import useMutationToast from '@/hooks/toast/useMutationToast';
import useDialog from '@/hooks/useDialog';
import api from '@/lib/api';
import use2DStore from '@/store/use2DStore';
import { PembayaranWahanaSeniData } from '@/types/entities/main-event/wahana-seni';

export default withAuth(PembayaranForm2D, []);
function PembayaranForm2D({
  setStep,
}: {
  setStep: React.Dispatch<React.SetStateAction<number>>;
}) {
  const bioData = use2DStore.useBioData();
  const payment = use2DStore.usePaymentData();
  const setPayment = use2DStore.useSetPaymentData();

  const methods = useForm<PembayaranWahanaSeniData>({
    defaultValues: payment,
  });
  const dialog = useDialog();
  const { handleSubmit } = methods;

  const { mutate: submit2DFormData, isLoading: submit2DFormDataIsLoading } =
    useMutationToast<void, FormData>(
      useMutation((data) => {
        const res = api.post('/main-event/2d', data, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        return res;
      })
    );

  function openWarningSubmit({ finalData }: { finalData: FormData }) {
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

  const onSubmit = (_data: PembayaranWahanaSeniData) => {
    setPayment(_data);

    const finalData = {
      nrp: bioData.nrp,
      name: bioData.name,
      departemen_id: bioData.departemen_id,
      kontak: bioData.kontak,
      ktm: bioData.ktm[0],

      bank_id: _data.bank_id,
      atas_nama: _data.atas_nama,
      bukti_bayar: _data.bukti_bayar[0],
    };
    const formdata = serialize(finalData, {
      indices: true,
    });

    openWarningSubmit({ finalData: formdata });
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
          <Input
            id='atas_nama'
            label='Atas Nama'
            placeholder='Atas nama'
            validation={{
              required: 'Atas nama tidak boleh kosong',
            }}
          />
          <SelectInput
            id='bank_id'
            label='Transfer Dari'
            validation={{ required: 'Bank tidak boleh kosong' }}
          >
            {Bank.map((bank) => (
              <option key={bank.id} value={bank.id}>
                {bank.name}
              </option>
            ))}
          </SelectInput>
          <DropzoneInput
            id='bukti_bayar'
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
            <Button size='large' variant='red' onClick={() => setStep(1)}>
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
}
