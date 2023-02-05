import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import { serialize } from 'object-to-formdata';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';

import Breadcrumb from '@/components/Breadcrumb';
import Button from '@/components/buttons/Button';
import Checkbox from '@/components/forms/Checkbox';
import SelectInput from '@/components/forms/SelectInput';
import withAuth from '@/components/hoc/withAuth';
import Typography from '@/components/typography/Typography';
import useMutationToast from '@/hooks/toast/useMutationToast';
import useDialog from '@/hooks/useDialog';
import DashboardLayout from '@/layouts/dashboard/DashboardLayout';
import api from '@/lib/api';
import { ApiReturn } from '@/types/api';
import {
  AssignRolePermission,
  DetailRolePermission,
} from '@/types/entities/role';

function objectToFormdata(
  data: Omit<AssignRolePermission, 'id'> | DetailRolePermission
) {
  const options = {
    indices: true,
  };
  const formData = serialize(data, options);
  return formData;
}

export default withAuth(DetailRolePage, []);

function DetailRolePage() {
  const { id } = useRouter().query;
  const methodsDelete = useForm<DetailRolePermission>();
  const methodsAssign = useForm<AssignRolePermission>();
  const { handleSubmit, getValues, register } = methodsDelete;
  const { handleSubmit: handleSubmitAssign } = methodsAssign;

  //#region  //*=========== Dialog ===========
  const dialog = useDialog();
  function openWarningDelete({ id }: { id: string }) {
    dialog({
      title: 'Apakah Anda Yakin ?!',
      description: `Hapus Permission ${id} pada Role ini`,
      submitText: 'Delete',
      variant: 'warning',
      catchOnCancel: true,
    }).then(() =>
      OnDelete({ permission_id: id as DetailRolePermission['permission_id'] })
    );
  }
  //#end region  //*=========== Dialog ===========

  //#region  //*=========== Mutate Assign Permission ===========

  const { mutate: assignPermission, isLoading: assignPermissionLoading } =
    useMutationToast<ApiReturn<undefined>, FormData>(
      useMutation((data) => {
        return api.post('/roles_assign', data, {
          headers: { 'Content-Type': 'multipart/form-data' },
        });
      })
    );
  //#end region  //*=========== Mutate Assign Permission ===========

  //#region //*=========== Mutate Delete Permission ===========

  const { mutate: unassignPermission, isLoading: unassignPermissionLoading } =
    useMutationToast<ApiReturn<undefined>, FormData>(
      useMutation((data) => {
        return api.post('/roles_unassign', data, {
          headers: { 'Content-Type': 'multipart/form-data' },
        });
      })
    );

  const OnDelete: SubmitHandler<Omit<DetailRolePermission, 'role_id'>> = async (
    _data
  ) => {
    const data: DetailRolePermission = {
      role_id: id as string,
      permission_id: _data.permission_id,
    };
    const formData = objectToFormdata(data);
    unassignPermission(formData);
  };

  //#end region  //*=========== Mutate Delete Permission ===========

  //#region  //*=========== OnSubmit ===========

  const OnSubmit: SubmitHandler<AssignRolePermission> = async (_data) => {
    const data: Omit<AssignRolePermission, 'id'> = {
      role_permission: [],
    };
    _data.id.map((permission_id) => {
      const obj: DetailRolePermission = {
        role_id: id as string,
        permission_id: permission_id,
      };
      data.role_permission.push(obj);
    });

    const formData = objectToFormdata(data);
    assignPermission(formData);
  };
  //#endregion  //*=========== OnSubmit ===========

  return (
    <DashboardLayout>
      <main>
        <section>
          <div className='layout min-h-screen'>
            <div>
              <Breadcrumb crumbs={['/admin/role', '/admin/role/detail']} />
              <Typography as='h4' variant='h4'>
                Assign Permission to Role
              </Typography>
            </div>
            <FormProvider {...methodsAssign}>
              <form onSubmit={handleSubmitAssign(OnSubmit)}>
                <Checkbox name='id' label='create_user.store' value='1' />
                <Checkbox name='id' label='login_user.store' value='2' />
                <Checkbox name='id' label='admin.index' value='3' />
                <Checkbox name='id' label='roles_unassign.delete' value='11' />
                <Button type='submit' isLoading={assignPermissionLoading}>
                  Submit
                </Button>
              </form>
            </FormProvider>
            <FormProvider {...methodsDelete}>
              <form onSubmit={handleSubmit(OnDelete)}>
                <SelectInput
                  id='permission_id'
                  label='Unassign Permission'
                  {...register('permission_id')}
                >
                  <option value='1'>create_user.store</option>
                  <option value='2'>login_user.store</option>
                  <option value='3'>admin.index</option>
                </SelectInput>
                <Button
                  isLoading={unassignPermissionLoading}
                  onClick={() => {
                    openWarningDelete({ id: getValues('permission_id') });
                  }}
                >
                  Delete
                </Button>
              </form>
            </FormProvider>
          </div>
        </section>
      </main>
    </DashboardLayout>
  );
}
