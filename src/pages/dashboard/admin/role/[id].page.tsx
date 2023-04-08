import { useMutation } from '@tanstack/react-query';
import { useQuery } from '@tanstack/react-query';
import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';
import { useRouter } from 'next/router';
import { serialize } from 'object-to-formdata';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { BsCheckCircle } from 'react-icons/bs';
import { FiTrash } from 'react-icons/fi';

import Breadcrumb from '@/components/Breadcrumb';
import Button from '@/components/buttons/Button';
import IconButton from '@/components/buttons/IconButton';
import Checkbox from '@/components/forms/Checkbox';
import SelectInput from '@/components/forms/SelectInput';
import withAuth from '@/components/hoc/withAuth';
import Typography from '@/components/typography/Typography';
import useMutationToast from '@/hooks/toast/useMutationToast';
import useDialog from '@/hooks/useDialog';
import DashboardLayout from '@/layouts/dashboard/DashboardLayout';
import api, { setApiContext } from '@/lib/api';
import { ApiReturn } from '@/types/api';
import { PermissionResponse } from '@/types/entities/permission';
import {
  AssignRolePermission,
  DetailRolePermission,
  RoleDetail,
} from '@/types/entities/role';

export default withAuth(DetailRolePage, [
  'permissions.index',
  'roles_unassign.store',
  'roles_assign.store',
  'roles.detail',
]);

export async function getServerSideProps(context: GetServerSidePropsContext) {
  setApiContext(context);
  const res = await api.get<ApiReturn<PermissionResponse[]>>('/permissions');
  return {
    props: {
      res: res.data.data,
    },
  };
}

function DetailRolePage({
  res,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const { id, name } = useRouter().query;
  const url = `/roles/${id}`;
  const { data: queryData, refetch: refetchData } = useQuery<
    ApiReturn<RoleDetail>
  >([url]);

  const unselectedRoles: PermissionResponse[] = res.filter(
    (a) => !queryData?.data.permission.some((b) => a.id === b.id)
  );
  const methodsDelete = useForm<DetailRolePermission>();
  const methodsAssign = useForm<AssignRolePermission>();
  const {
    handleSubmit,
    getValues,
    formState: { isDirty },
    reset: resetDelete,
  } = methodsDelete;
  const {
    handleSubmit: handleSubmitAssign,
    formState: { isDirty: assignIsDirty },
    reset: resetAssign,
  } = methodsAssign;

  //#region  //*=========== Dialog ===========
  const dialog = useDialog();
  function openWarningDelete({ id }: { id: string }) {
    dialog({
      title: 'Apakah Anda Yakin ?!',
      description: `Hapus Permission ${id} pada Role ini`,
      submitText: 'Delete',
      variant: 'danger',
      catchOnCancel: true,
    }).then(() =>
      OnDelete({
        permission_id: id as DetailRolePermission['permission_id'],
      })
    );
  }
  //#end region  //*=========== Dialog ===========

  //#region  //*=========== Mutate Assign Permission ===========
  const { mutate: assignPermission, isLoading: assignPermissionLoading } =
    useMutationToast<ApiReturn<undefined>, FormData>(
      useMutation(async (data) => {
        await api
          .post('/roles_assign', data, {
            headers: { 'Content-Type': 'multipart/form-data' },
          })
          .then(() => {
            refetchData();
            resetAssign({ id: [] });
          });
      })
    );
  //#end region  //*=========== Mutate Assign Permission ===========

  //#region //*=========== Mutate Delete Permission ===========

  const { mutate: unassignPermission } = useMutationToast<
    ApiReturn<undefined>,
    DetailRolePermission
  >(
    useMutation(async (data) => {
      await api.delete('/roles_unassign', { data }).then(() => {
        refetchData();
        resetDelete();
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
    unassignPermission(data);
  };

  //#end region  //*=========== Mutate Delete Permission ===========

  //#region  //*=========== OnSubmit ===========

  const OnSubmit = (_data: AssignRolePermission) => {
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
    const formData = serialize(data, { indices: true });
    assignPermission(formData);
  };

  //#endregion  //*=========== OnSubmit ===========
  return (
    <DashboardLayout>
      <div className='bg-surface-background py-5'>
        <section id='header' className='layout bg-surface-background pb-4'>
          <div>
            <Breadcrumb
              crumbs={['/dashboard/admin/role', '/dashboard/admin/role/detail']}
            />
          </div>
        </section>
        <section
          id='body'
          className='layout p-6 rounded-2xl shadow-xl bg-white'
        >
          <section id='user-permission'>
            <Typography variant='h5' className='font-bold pb-4'>
              {name} Data
            </Typography>
            <Typography variant='b2' className='font-semibold'>
              PERMISSION
            </Typography>
            <div className='flex justify-between flex-col gap-4 md:flex-row pt-4'>
              <div className='rounded-xl grid gap-3 md:grid-cols-1 xl:grid-cols-2 w-full'>
                {queryData?.data.permission.map(({ routes }, index) => (
                  <div
                    key={index}
                    className='flex items-center gap-x-6 md:gap-x-3 cols-span-1'
                  >
                    <BsCheckCircle className='text-green-500 w-4 flex-none' />
                    <Typography variant='title'>{routes}</Typography>
                  </div>
                ))}
              </div>
              <div className='pt-4'>
                <FormProvider {...methodsDelete}>
                  <form onSubmit={handleSubmit(OnDelete)}>
                    <div className='flex items-center space-x-4'>
                      <div className='w-full'>
                        <SelectInput
                          id='permission_id'
                          label='UNASSIGN PERMISSION'
                          placeholder='select permission'
                        >
                          {queryData?.data.permission.map(
                            ({ id, routes }, index) => (
                              <option value={id} key={index}>
                                {routes}
                              </option>
                            )
                          )}
                        </SelectInput>
                      </div>
                      <div className='mt-4'>
                        <IconButton
                          disabled={!isDirty}
                          size='large'
                          variant='red'
                          icon={FiTrash}
                          onClick={() => {
                            openWarningDelete({
                              id: getValues('permission_id'),
                            });
                          }}
                        ></IconButton>
                      </div>
                    </div>
                  </form>
                </FormProvider>
              </div>
            </div>
          </section>
          <section id='body' className='pt-10'>
            <Typography variant='b2' className='font-semibold pb-4'>
              ALL ROLES
            </Typography>
            <div className='grid md:grid-cols-2 gap-y-2 '>
              {unselectedRoles.map(({ routes }, index) => (
                <div className='flex items-center gap-x-6' key={index}>
                  <BsCheckCircle className='text-slate-300' />
                  <Typography>{routes}</Typography>
                </div>
              ))}
            </div>
          </section>
          <section className='pt-10'>
            <Typography variant='b2' className='pb-4 font-semibold'>
              ASSIGN PERMISSION TO {name}
            </Typography>
            <FormProvider {...methodsAssign}>
              <form onSubmit={handleSubmitAssign(OnSubmit)}>
                <div className='rounded-xl grid gap-3 md:grid-cols-2 w-full'>
                  {unselectedRoles.map(({ id, routes }) => (
                    <Checkbox key={id} name='id' label={routes} value={id} />
                  ))}
                  {!unselectedRoles.length && (
                    <div className='bg-slate-400 p-3 w-fit rounded-xl'>
                      <Typography variant='h6' className='font-bold'>
                        This user granted all permissions
                      </Typography>
                    </div>
                  )}
                </div>
                <Button
                  className='mt-5'
                  disabled={!assignIsDirty}
                  type='submit'
                  isLoading={assignPermissionLoading}
                >
                  Submit
                </Button>
              </form>
            </FormProvider>
          </section>
        </section>
      </div>
    </DashboardLayout>
  );
}
