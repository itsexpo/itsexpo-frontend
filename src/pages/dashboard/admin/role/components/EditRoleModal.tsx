import { useMutation } from '@tanstack/react-query';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import Button from '@/components/buttons/Button';
import Input from '@/components/forms/Input';
import Modal from '@/components/modal/Modal';
import useMutationToast from '@/hooks/toast/useMutationToast';
import api from '@/lib/api';
import { ApiReturn } from '@/types/api';
import { RoleResponse } from '@/types/entities/role';

//#region  //*======== Typing ===========
type DefaultForm = {
  id: string;
  name: string;
};

type EditRoleState = {
  id: string;
  name: string;
};
//#endregion  //*======== Typing ===========

export default function EditRolesModal({
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
        <Modal.Title className='font-semibold'>Edit Roles</Modal.Title>
        <Modal.Body>
          {defaultValues && (
            <EditRoleForm
              roles={defaultValues}
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

function EditRoleForm({
  roles,
  setOpen,
  onSuccess,
}: {
  roles: EditRoleState;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  onSuccess: () => void;
}) {
  //#endregion  //*======== Edit Mutate ===========
  const { mutate: updateRoles } = useMutationToast<
    ApiReturn<undefined>,
    Omit<RoleResponse, 'name' | 'role'>
  >(
    useMutation(async (data) => {
      const res = await api.post('/roles/update', data);
      setOpen(false);
      onSuccess();
      return res;
    })
  );
  //#endregion  //*======== Edit Mutate ===========

  //#region  //*=========== Form ===========
  const methods = useForm<EditRoleState>({
    mode: 'onTouched',
    defaultValues: roles,
  });

  const {
    handleSubmit,
    formState: { isDirty },
  } = methods;
  //#region  //*======== Form ===========

  //#region  //*=========== On Submit ===========
  const onSubmit = (data: EditRoleState) => {
    updateRoles(data);
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
          id='name'
          label='Role Baru'
          placeholder='Masukan Role Baru'
          validation={{ required: 'Role Wajib Diisi' }}
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
            Edit Roles
          </Button>
        </div>
      </form>
    </FormProvider>
  );
}
