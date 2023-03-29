import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import { serialize } from 'object-to-formdata';
import * as React from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import Button from '@/components/buttons/Button';
import PaymentCountdown from '@/components/countdown/PaymentCountdown';
import DropzoneInput from '@/components/forms/DropzoneInput';
import Input from '@/components/forms/Input';
import SelectInput from '@/components/forms/SelectInput';
import PaymentCode from '@/components/shared/PaymentCode';
import { Bank } from '@/constant/bank';
import useMutationToast from '@/hooks/toast/useMutationToast';
import useDialog from '@/hooks/useDialog';
import api from '@/lib/api';
import { formatToRupiah } from '@/lib/currency';
import { FileWithPreview } from '@/types/dropzone';
import { PembayaranPreEvent } from '@/types/entities/pre-event/pembayaran';

type CreatePembayaranJurnalistik = {
  atas_nama: string;
  bank_id: number;
  bukti_pembayaran: FileWithPreview[];
  kti_team_id: string;
  harga: number;
};

export default function FormPembayaranKTI({
  data,
}: {
  data: PembayaranPreEvent;
}) {
  const methods = useForm<CreatePembayaranJurnalistik>();
  const router = useRouter();
  const { code } = router.query;
  const { handleSubmit } = methods;

  //#region  //*=========== Pembayaran ===========
  const { mutate: SubmitPembayaran, isLoading } = useMutationToast<
    void,
    FormData
  >(
    useMutation(async (data) => {
      return api.post('/pre_event/pembayaran/kti', data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
    })
  );
  //#endregion  //*=========== Pembayaran ===========

  //#region  //*=========== Bayar Dialog ===========
  const dialog = useDialog();
  function openWarningBayar({
    harga,
    formdata,
  }: {
    harga: number;
    formdata: FormData;
  }) {
    dialog({
      title: 'Apakah Anda Yakin Data Yang Anda Masukan Sudah Benar!!!',
      description: `Cek Kembali apakah nominal yang anda masukan sudah benar sebesar : ${formatToRupiah(
        harga
      )}`,
      submitText: 'Kirim',
      variant: 'warning',
      catchOnCancel: true,
    }).then(() => {
      SubmitPembayaran(formdata, {
        onSuccess: () => router.push('/dashboard/pre-event/kti/main'),
      });
    });
  }
  //#region  //*=========== Bayar Dialog ===========

  const harga = parseInt(data.harga) + parseInt(data.kode_unik);

  const onSubmit = (data: CreatePembayaranJurnalistik) => {
    const body = {
      atas_nama: data.atas_nama,
      kti_team_id: code as string,
      bukti_pembayaran: data.bukti_pembayaran[0],
      bank_id: 1,
      jurnalistik_team_id: code as string,
      harga: harga,
    };
    const formdata = serialize(body);
    openWarningBayar({ harga, formdata });
  };

  return (
    <div className='col-span-6 md:col-span-4 bg-white shadow-pendaftaran rounded-xl p-4'>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
          <div className='flex items-center justify-between flex-wrap'>
            <div>
              <PaymentCode
                code={data.kode_unik}
                price={data.harga}
                label='Harga'
              />
            </div>
            <div className='!text-end'>
              <PaymentCountdown closeDate={data.tanggal_pembayaran} />
            </div>
          </div>
          <Input
            id='atas_nama'
            label='Atas Nama'
            placeholder='Atas nama'
            validation={{
              required: 'Atas nama tidak boleh kosong',
            }}
          />
          <SelectInput
            id='nama_bank'
            label='Transfer Dari'
            validation={{ required: 'Bank tidak boleh kosong' }}
          >
            {Object.entries(Bank).map(([key, value]) => (
              <option key={key} value={value}>
                {key}
              </option>
            ))}
          </SelectInput>
          <DropzoneInput
            id='bukti_pembayaran'
            label='Upload Bukti Transfer'
            validation={{ required: 'Bukti Transfer tidak boleh kosong' }}
          />

          <div className='flex justify-end'>
            <Button
              type='submit'
              variant='green'
              className='mr-0'
              isLoading={isLoading}
            >
              Upload Bukti Transfer
            </Button>
          </div>
        </form>
      </FormProvider>
    </div>
  );
}
