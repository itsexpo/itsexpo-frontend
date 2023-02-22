import { useMutation } from '@tanstack/react-query';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import Button from '@/components/buttons/Button';
import Input from '@/components/forms/Input';
import Modal from '@/components/modal/Modal';
import useMutationToast from '@/hooks/toast/useMutationToast';
import api from '@/lib/api';
import { ApiReturn } from '@/types/api';
import { Shortener } from '@/types/entities/shortener';

export default function EditShortenerModal({
  defaultValues,
  onSuccess,
  setOpen,
  open,
}: {
  defaultValues: Shortener;
  onSuccess: () => void;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  open: boolean;
}) {
  return (
    <Modal open={open} setOpen={setOpen}>
      <Modal.Title className='font-semibold'>Edit Shortener</Modal.Title>
      <Modal.Body>
        {defaultValues && (
          <EditShortener
            shortener={defaultValues}
            setOpen={setOpen}
            onSuccess={onSuccess}
          />
        )}
      </Modal.Body>
    </Modal>
  );
}

function EditShortener({
  shortener,
  setOpen,
  onSuccess,
}: {
  shortener: Shortener;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  onSuccess: () => void;
}) {
  //#region  //*=========== Edit Mutate ===========
  const { mutate: updateShortener } = useMutationToast<
    ApiReturn<undefined>,
    Shortener
  >(
    useMutation(async (data) => {
      const res = await api.put('/url_shortener', data);
      setOpen(false);
      onSuccess();
      return res;
    })
  );
  //#endregion  //*======== Edit Mutate ===========

  //#region  //*=========== Form ===========
  const methods = useForm<Shortener>({
    mode: 'onTouched',
    defaultValues: shortener,
  });

  const {
    handleSubmit,
    formState: { isDirty },
  } = methods;
  //#endregion  //*======== Form ===========

  //#region  //*=========== On Submit ===========
  const onSubmit = (data: Shortener) => {
    updateShortener(data);
  };
  //#endregion  //*======== On Submit ===========

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)} className='space-y-6'>
        <div className='space-y-3'>
          <Input
            id='long_url'
            label='Long URL'
            placeholder='Masukan Long URL baru'
            validation={{ required: 'Long URL wajib diisi' }}
          />
          <Input
            id='short_url'
            label='Short URL'
            placeholder='Masukan Short URL baru'
            validation={{ required: 'Short URL wajib diisi' }}
          />
        </div>
        <div className='flex items-center gap-x-3'>
          <Button type='button' variant='red' onClick={() => setOpen(false)}>
            Batal
          </Button>
          <Button
            type='submit'
            className='flex-1'
            disabled={!isDirty}
            variant='green'
          >
            Edit Shortner
          </Button>
        </div>
      </form>
    </FormProvider>
  );
}
