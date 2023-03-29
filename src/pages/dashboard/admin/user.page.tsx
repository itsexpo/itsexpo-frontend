import { Popover, Transition } from '@headlessui/react';
import { useMutation, useQuery } from '@tanstack/react-query';
import { ColumnDef } from '@tanstack/react-table';
import React from 'react';
import { FormProvider, useForm, useWatch } from 'react-hook-form';
import { FiTrash, FiX } from 'react-icons/fi';

import Breadcrumb from '@/components/Breadcrumb';
import Button from '@/components/buttons/Button';
import IconButton from '@/components/buttons/IconButton';
import Checkbox from '@/components/forms/Checkbox';
import withAuth from '@/components/hoc/withAuth';
import ServerTable from '@/components/table/ServerTable';
import Typography from '@/components/typography/Typography';
import useMutationToast from '@/hooks/toast/useMutationToast';
import useDialog from '@/hooks/useDialog';
import useServerTable from '@/hooks/useServerTable';
import DashboardLayout from '@/layouts/dashboard/DashboardLayout';
import api from '@/lib/api';
import { buildPaginatedTableURL } from '@/lib/table';
import { ApiReturn, PaginatedApiResponse } from '@/types/api';
import { UserColumn } from '@/types/entities/user';

type HeaderProps = {
  setLevelFilter: React.Dispatch<React.SetStateAction<string[]>>;
};

type UserForm = {
  user_id: string;
};

const filterOption = [
  {
    id: 'user',
    name: 'User',
  },
  {
    id: 'admin',
    name: 'Admin',
  },
  {
    id: 'SMP/Sederajat',
    name: 'SMP/Sederajat',
  },
  {
    id: 'SMA/Sederajat',
    name: 'SMA/Sederajat',
  },
  {
    id: 'Mahasiswa',
    name: 'Mahasiswa',
  },
  {
    id: 'Umum',
    name: 'Umum',
  },
];

export default withAuth(User, ['users.index']);
function User() {
  const { tableState, setTableState } = useServerTable<UserColumn>({
    pageSize: 10,
  });
  const [levelFilter, setLevelFilter] = React.useState<string[]>([]);

  const columns: ColumnDef<UserColumn>[] = [
    {
      id: 'index',
      cell: (info) => info.row.index + 1,
      header: 'No',
    },
    {
      id: 'id',
      accessorKey: 'id',
      header: 'ID',
    },
    {
      id: 'name',
      accessorKey: 'name',
      header: 'Name',
    },
    {
      id: 'email',
      accessorKey: 'email',
      header: 'Email',
    },
    {
      id: 'no_telp',
      accessorKey: 'no_telp',
      header: 'No. Telp',
    },
    {
      id: 'role',
      accessorKey: 'role',
      header: 'Role',
    },
    {
      id: 'action',
      header: 'Action',
      cell: (info) => {
        return (
          <div className='flex items-center justify-center'>
            <IconButton
              variant='red'
              icon={FiTrash}
              onClick={() =>
                openWarningDelete({
                  id: info.row.original.id,
                  name: info.row.original.name,
                })
              }
            />
          </div>
        );
      },
    },
  ];
  //#endregion  //*======== Table Definition ===========

  //#region  //*=========== Mutate Data ===========
  const { mutate: deleteUser } = useMutationToast<
    ApiReturn<undefined>,
    UserForm
  >(
    useMutation((data) => {
      return api.delete('/users', { data });
    })
  );
  //#endregion  //*=========== Mutate Data ===========

  //#region  //*=========== Delete Dialog ===========
  const dialog = useDialog();
  function openWarningDelete({ id, name }: { id: string; name: string }) {
    dialog({
      title: 'Apakah Anda Yakin!!!',
      description: `Hapus user dengan nama ${name} ?`,
      submitText: 'Delete',
      variant: 'danger',
      catchOnCancel: true,
    })
      .then(() => deleteUser({ user_id: id }))
      .then(() => refetchData());
  }
  //#region  //*=========== Delete Dialog ===========

  //#region  //*=========== Fetch Data ===========
  const url = buildPaginatedTableURL({
    baseUrl: '/users',
    tableState,
    additionalParam: { filter: levelFilter },
  });

  const {
    data: queryData,
    refetch: refetchData,
    isLoading,
  } = useQuery<PaginatedApiResponse<UserColumn[]>, Error>([url], {
    keepPreviousData: true,
  });
  //#endregion  //*=========== Fetch Data ===========

  return (
    <DashboardLayout>
      <section>
        <div className='layout min-h-screen py-20'>
          <div className='flex justify-between'>
            <div>
              <Breadcrumb crumbs={['/dashboard/admin/user']} />
              <Typography as='h4' variant='h4' className=''>
                List Users
              </Typography>
            </div>
          </div>
          <ServerTable
            columns={columns}
            isLoading={isLoading}
            data={queryData?.data.data_per_page ?? []}
            meta={queryData?.data.meta}
            tableState={tableState}
            setTableState={setTableState}
            header={<Header setLevelFilter={setLevelFilter} />}
            withFilter
            className='mt-8'
          />
        </div>
      </section>
    </DashboardLayout>
  );
}

function Header({ setLevelFilter }: HeaderProps) {
  //#region  //*=========== Form ===========
  const methods = useForm({
    mode: 'onTouched',
  });
  const { control, setValue } = methods;

  const filter = useWatch({
    control,
    name: 'filter[]',
  });
  //#endregion  //*======== Form ===========

  React.useEffect(() => {
    setLevelFilter(filter);
  }, [filter, setLevelFilter]);

  const resetFilter = () => setValue('filter[]', []);

  return (
    <Popover className='relative'>
      {({ close }: { close: React.MouseEventHandler<HTMLButtonElement> }) => (
        <>
          <Popover.Button as='div'>
            <Button className='bg-secondary-400'>
              Filter {filter?.length > 0 && `(${filter.length})`}
            </Button>
          </Popover.Button>

          <Transition
            as={React.Fragment}
            enter='transition ease-out duration-200'
            enterFrom='opacity-0 translate-y-1'
            enterTo='opacity-100 translate-y-0'
            leave='transition ease-in duration-150'
            leaveFrom='opacity-100 translate-y-0'
            leaveTo='opacity-0 translate-y-1'
          >
            <Popover.Panel className='absolute left-0 z-10 mt-3 w-screen max-w-xs transform sm:left-1/2 sm:-translate-x-1/2'>
              <div className='overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5'>
                <div className='relative bg-white p-4'>
                  <FormProvider {...methods}>
                    <div className='flex items-center justify-between'>
                      <Typography variant='h6'>Filter by</Typography>
                      <div className='flex items-center gap-3'>
                        <Typography
                          as='button'
                          variant='b3'
                          onClick={resetFilter}
                          className='text-primary-500 cursor-pointer font-semibold underline'
                        >
                          Reset Filter
                        </Typography>
                        <Button leftIcon={FiX} onClick={close} />
                      </div>
                    </div>
                    <Typography variant='s3' color='secondary' className='mt-4'>
                      Filter
                    </Typography>
                    <div className='mt-2 grid grid-cols-2'>
                      {filterOption.map((item) => (
                        <Checkbox
                          key={item.id}
                          size='sm'
                          name='filter'
                          value={item.id}
                          label={item.name}
                        />
                      ))}
                    </div>
                  </FormProvider>
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
}
