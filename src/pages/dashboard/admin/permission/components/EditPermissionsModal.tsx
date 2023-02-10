import { useMutation } from '@tanstack/react-query';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import Button from '@/components/buttons/Button';
import Input from '@/components/forms/Input';
import Modal from '@/components/modal/Modal';
import useMutationToast from '@/hooks/toast/useMutationToast';
import api from '@/lib/api';
import { ApiReturn } from '@/types/api';
import { PermissionResponse } from '@/types/entities/permission';

//#region  //*======== Typing ===========
type DefaultForm = {
  id: string;
  routes: string;
};

type EditPermissionsState = {
  id: string;
  routes: string;
};
//#endregion  //*======== Typing ===========

export default function EditPermissionsModal({
  defaultValues,
  onSuccess,
  setOpen,
  open,
}: {
  defaultValues: DefaultForm;
  onSuccess: () => void;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  open: boolean;
}) {
  return (
    <>
      <Modal open={open} setOpen={setOpen}>
        <Modal.Title className='font-semibold'>Edit Permissions</Modal.Title>
        <Modal.Body>
          {defaultValues && (
            <EditPermissionsForm
              permissions={defaultValues}
              setOpen={setOpen}
              onSuccess={onSuccess}
            />
          )}
        </Modal.Body>
      </Modal>
    </>
  );
}

// Dipangil ketika defaultValues ada datanya

function EditPermissionsForm({
  permissions,
  setOpen,
  onSuccess,
}: {
  permissions: EditPermissionsState;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  onSuccess: () => void;
}) {
  //#endregion  //*======== Edit Mutate ===========
  const { mutate: updatePermissions } = useMutationToast<
    ApiReturn<undefined>,
    PermissionResponse
  >(
    useMutation(async (data) => {
      const res = await api.put('/permissions', data);
      setOpen(false);
      onSuccess();
      return res;
    })
  );
  //#endregion  //*======== Edit Mutate ===========

  //#region  //*=========== Form ===========
  const methods = useForm<EditPermissionsState>({
    mode: 'onTouched',
    defaultValues: permissions,
  });

  const {
    handleSubmit,
    formState: { isDirty },
  } = methods;
  //#region  //*======== Form ===========

  //#region  //*=========== On Submit ===========
  const onSubmit = (data: EditPermissionsState) => {
    updatePermissions(data);
  };
  //#endregion  //*======== On Submit ===========

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)} className='space-y-3'>
        <Input
          id='id'
          label='ID'
          placeholder='Masukan ID Baru'
          validation={{ required: 'ID Wajib Diisi' }}
          disabled={true}
        />
        <Input
          id='routes'
          label='Routes Baru'
          placeholder='Masukan Routes Baru'
          validation={{ required: 'Routes Wajib Diisi' }}
        />

        <div className='!mt-6 flex items-center'>
          <Button type='button' variant='red' onClick={() => setOpen(false)}>
            Batal
          </Button>
          <Button
            type='submit'
            className='ml-3 w-full'
            disabled={!isDirty}
            variant='green'
          >
            Edit Permissions
          </Button>
        </div>
      </form>
    </FormProvider>
  );
}
