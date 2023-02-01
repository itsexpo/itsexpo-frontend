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

type ModalReturnType = {
  openModal: () => void;
};

type AddPermissionsForm = {
  routes: string;
};
//#endregion  //*======== Typing ===========

export default function AddPermissionsModal({
  children,
  onSuccess,
}: {
  children: (props: ModalReturnType) => JSX.Element;
  onSuccess: () => void;
}) {
  const [open, setOpen] = React.useState(false);
  const modalReturn: ModalReturnType = {
    openModal: () => setOpen(true),
  };

  //#region  //*=========== Form ===========
  const methods = useForm<AddPermissionsForm>({
    mode: 'onTouched',
  });

  const {
    handleSubmit,
    formState: { isDirty },
  } = methods;
  //#region  //*======== Form ===========

  //#endregion  //*======== Add Mutate ===========
  const { mutate: addPermissions } = useMutationToast<
    ApiReturn<undefined>,
    Omit<PermissionResponse, 'id'>
  >(
    useMutation((data) =>
      api.post('/permissions', data).then((res) => {
        setOpen(false);
        onSuccess();
        return res;
      })
    )
  );
  //#endregion  //*======== Add Mutate ===========

  //#region  //*=========== On Submit ===========
  const onSubmit = (data: AddPermissionsForm) => {
    addPermissions(data);
  };
  //#endregion  //*======== On Submit ===========

  return (
    <>
      {children(modalReturn)}
      <Modal open={open} setOpen={setOpen}>
        <Modal.Title className='font-semibold'>Add Permissions</Modal.Title>
        <Modal.Body>
          <FormProvider {...methods}>
            <form onSubmit={handleSubmit(onSubmit)} className='space-y-3'>
              <Input
                id='routes'
                label='Routes Baru'
                placeholder='Masukan Routes Baru'
                validation={{ required: 'Routes Wajib Diisi' }}
              />

              <div className='!mt-6 flex items-center'>
                <Button
                  type='button'
                  variant='red'
                  onClick={() => setOpen(false)}
                >
                  Batal
                </Button>
                <Button
                  type='submit'
                  className='ml-3 w-full'
                  disabled={!isDirty}
                  variant='green'
                >
                  Add Permissions
                </Button>
              </div>
            </form>
          </FormProvider>
        </Modal.Body>
      </Modal>
    </>
  );
}
