import { useMutation, useQuery } from '@tanstack/react-query';
import { ColumnDef } from '@tanstack/react-table';
import React from 'react';
import { FiEye } from 'react-icons/fi';

import Breadcrumb from '@/components/Breadcrumb';
import Button from '@/components/buttons/Button';
import withAuth from '@/components/hoc/withAuth';
import useServerTable from '@/components/hooks/useServerTable';
import ServerTable from '@/components/table/ServerTable';
import Typography from '@/components/typography/Typography';
import useMutationToast from '@/hooks/toast/useMutationToast';
import useDialog from '@/hooks/useDialog';
import DashboardLayout from '@/layouts/dashboard/DashboardLayout';
import api from '@/lib/api';
import { buildPaginatedTableURL } from '@/lib/table';
import AddRoleModal from '@/pages/dashboard/admin/role/components/AddRoleModal';
import EditRolesModal from '@/pages/dashboard/admin/role/components/EditRoleModal';
import { ApiReturn, PaginatedApiResponse } from '@/types/api';
import { RoleResponse } from '@/types/entities/role';
import { Role, RoleColumn } from '@/types/entities/role';

export default withAuth(AdminRoles, [
  'roles.index',
  'roles.delete',
  'roles.store',
  'roles.update',
]);

function AdminRoles() {
  const [editModalOpen, setEditModalOpen] = React.useState(false);
  const [selectedData, setSelectedData] = React.useState<{
    id: string;
    name: string;
  }>();

  const { tableState, setTableState } = useServerTable<Role>({
    pageSize: 10,
  });

  const columns: ColumnDef<RoleColumn>[] = [
    {
      id: 'id',
      accessorKey: 'id',
      header: 'Id',
    },
    {
      id: 'role',
      accessorKey: 'role',
      header: 'Roles',
    },
    {
      id: 'action',
      header: 'Action',
      cell: (info) => {
        const value = {
          id: info.row.original.id,
          name: info.row.original.role,
        };
        return (
          <div className='flex items-center justify-center gap-x-4'>
            <Button
              onClick={() => {
                setEditModalOpen(true);
                setSelectedData(value);
              }}
            >
              Edit
            </Button>
            <Button
              leftIcon={FiEye}
              variant='red'
              onClick={() => openWarningDelete({ id: info.row.original.id })}
            >
              Delete
            </Button>
          </div>
        );
      },
    },
  ];
  //#endregion  //*======== Table Definition ===========

  //#region  //*=========== Fetch Data ===========
  const url = buildPaginatedTableURL({
    baseUrl: '/roles',
    tableState,
  });
  const { data: queryData, refetch: refetchData } = useQuery<
    PaginatedApiResponse<RoleResponse[]>,
    Error
  >([url], {
    keepPreviousData: true,
  });
  //#endregion  //*=========== Fetch Data ===========

  //#region  //*=========== Mutate Data ===========
  const { mutate: deleteRoles } = useMutationToast<
    ApiReturn<undefined>,
    Omit<RoleResponse, 'role' | 'name'>
  >(
    useMutation((data) => {
      return api.post('/roles/delete', data);
    })
  );
  //#endregion  //*=========== Mutate Data ===========

  //#region  //*=========== Delete Dialog ===========
  const dialog = useDialog();
  function openWarningDelete({ id }: { id: string }) {
    dialog({
      title: 'Apakah Anda Yakin!!!',
      description: `Hapus role dengan ID: ${id} ?`,
      submitText: 'Delete',
      variant: 'warning',
      catchOnCancel: true,
    })
      .then(() => deleteRoles({ id: id }))
      .then(() => refetchData());
  }
  //#region  //*=========== Delete Dialog ===========

  return (
    <DashboardLayout>
      <h1>Roles</h1>
      <main>
        <section>
          <div className='layout min-h-screen py-20'>
            <div className='flex justify-between'>
              <div>
                <Breadcrumb crumbs={['/admin/role']} />
                <Typography as='h4' variant='h4' className=''>
                  Manajemen Role
                </Typography>
              </div>
              <div>
                <AddRoleModal onSuccess={refetchData}>
                  {({ openModal }) => (
                    <Button
                      variant='green'
                      size='small'
                      onClick={() => openModal()}
                    >
                      Add Roles
                    </Button>
                  )}
                </AddRoleModal>
              </div>
            </div>
            <ServerTable
              columns={columns}
              data={queryData?.data.data_per_page ?? []}
              meta={queryData?.data.meta}
              tableState={tableState}
              setTableState={setTableState}
              className='mt-8'
            />
          </div>
          {selectedData && (
            <EditRolesModal
              open={editModalOpen}
              setOpen={setEditModalOpen}
              defaultValues={selectedData}
              onSuccess={refetchData}
            />
          )}
        </section>
      </main>
    </DashboardLayout>
  );
}
