import { useMutation } from '@tanstack/react-query';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import Button from '@/components/buttons/Button';
import Input from '@/components/forms/Input';
import Modal from '@/components/modal/Modal';
import useMutationToast from '@/hooks/toast/useMutationToast';
import api from '@/lib/api';
import { ApiReturn } from '@/types/api';
import { Role } from '@/types/entities/role';

//#region  //*======== Typing ===========

type ModalReturnType = {
  openModal: () => void;
};

type AddRolesForm = {
  name: string;
};
//#endregion  //*======== Typing ===========

export default function AddRolesModal({
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
  const methods = useForm<AddRolesForm>({
    mode: 'onTouched',
  });

  const {
    handleSubmit,
    formState: { isDirty },
  } = methods;
  //#region  //*======== Form ===========

  //#endregion  //*======== Add Mutate ===========
  const { mutate: addRoles } = useMutationToast<
    ApiReturn<undefined>,
    Omit<Role, 'id' | 'permissions' | 'level'>
  >(
    useMutation((data) =>
      api.post('/roles', data).then((res) => {
        setOpen(false);
        onSuccess();
        return res;
      })
    )
  );
  //#endregion  //*======== Add Mutate ===========

  //#region  //*=========== On Submit ===========
  const onSubmit = (data: AddRolesForm) => {
    addRoles(data);
  };
  //#endregion  //*======== On Submit ===========

  return (
    <>
      {children(modalReturn)}
      <Modal open={open} setOpen={setOpen}>
        <Modal.Title className='font-semibold'>Add Role</Modal.Title>
        <Modal.Body>
          <FormProvider {...methods}>
            <form onSubmit={handleSubmit(onSubmit)} className='space-y-3'>
              <Input
                id='name'
                label='Role Baru'
                placeholder='Masukan Role Baru'
                validation={{ required: 'Role Wajib Diisi' }}
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
                  Add Roles
                </Button>
              </div>
            </form>
          </FormProvider>
        </Modal.Body>
      </Modal>
    </>
  );
}
