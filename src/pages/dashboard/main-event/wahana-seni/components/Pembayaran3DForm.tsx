import { useMutation } from '@tanstack/react-query';
import { serialize } from 'object-to-formdata';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import Button from '@/components/buttons/Button';
import DropzoneInput from '@/components/forms/DropzoneInput';
import Input from '@/components/forms/Input';
import SelectInput from '@/components/forms/SelectInput';
import Typography from '@/components/typography/Typography';
import { Bank } from '@/constant/bank';
import useMutationToast from '@/hooks/toast/useMutationToast';
import useDialog from '@/hooks/useDialog';
import api from '@/lib/api';
import formatData from '@/lib/array-to-object';
import use3DStore from '@/store/use3DStore';
import { FileWithPreview } from '@/types/dropzone';

export type Pembayaran3DState = {
  bank_id: string;
  atas_nama: string;
  bukti_bayar: FileWithPreview[];
};

const Pembayaran3DForm = ({
  setStep,
}: {
  setStep: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const biodata = use3DStore.useBiodata();
  const payment = use3DStore.usePayment();
  const setPayment = use3DStore.useSetPayment();

  // Form Init
  const methods = useForm<Pembayaran3DState>({
    defaultValues: payment,
  });
  const dialog = useDialog();
  const { handleSubmit } = methods;

  const { mutate: submit2DFormData, isLoading: submit3DFormDataIsLoading } =
    useMutationToast<void, FormData>(
      useMutation((data) => {
        const res = api.post('/main-event/3d', data, {
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

  const onSubmit = async (data: Pembayaran3DState) => {
    setPayment(data);
    const team_member = formatData(biodata.team_member);
    const finalData = {
      team_name: biodata.team_name,
      deskripsi_karya: biodata.deskripsi_karya,
      name: biodata.name,
      nrp: biodata.nrp,
      departemen_id: biodata.departemen_id,
      kontak: biodata.kontak,
      ktm: biodata.ktm[0],

      mahasiswa: team_member,

      bukti_bayar: data.bukti_bayar[0],
      atas_nama: data.atas_nama,
      bank_id: data.bank_id,
    };
    const formData = serialize(finalData, {
      indices: true,
    });
    openWarningSubmit({ finalData: formData });
  };

  return (
    <div className='bg-typo-white p-6 rounded-xl shadow-pendaftaran'>
      <div className='flex flex-col'>
        <Typography variant='b1' className='font-medium text-typo-icon'>
          Jumlah yang harus dibayar
        </Typography>
        <Typography variant='h5' className='font-semibold text-typo-primary'>
          Rp 30.000
        </Typography>
      </div>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)} className='space-y-4 mt-4'>
          <Input
            id='atas_nama'
            label='Atas Nama'
            validation={{
              required: 'Atas Nama tidak boleh kosong',
            }}
          />
          <SelectInput
            id='bank_id'
            label='Bank'
            validation={{
              required: 'Bank tidak boleh kosong',
            }}
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
              isLoading={submit3DFormDataIsLoading}
            >
              Upload Sekarang
            </Button>
          </div>
        </form>
      </FormProvider>
    </div>
  );
};

export default Pembayaran3DForm;
