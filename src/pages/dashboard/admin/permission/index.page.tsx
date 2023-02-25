import { useMutation, useQuery } from '@tanstack/react-query';
import { ColumnDef } from '@tanstack/react-table';
import React from 'react';
import { FiEdit, FiTrash } from 'react-icons/fi';

import Breadcrumb from '@/components/Breadcrumb';
import Button from '@/components/buttons/Button';
import IconButton from '@/components/buttons/IconButton';
import withAuth from '@/components/hoc/withAuth';
import ServerTable from '@/components/table/ServerTable';
import Typography from '@/components/typography/Typography';
import useMutationToast from '@/hooks/toast/useMutationToast';
import useDialog from '@/hooks/useDialog';
import useServerTable from '@/hooks/useServerTable';
import DashboardLayout from '@/layouts/dashboard/DashboardLayout';
import api from '@/lib/api';
import { buildPaginatedTableURL } from '@/lib/table';
import AddPermissionsModal from '@/pages/dashboard/admin/permission/components/AddPermissionsModal';
import EditPermissionsModal from '@/pages/dashboard/admin/permission/components/EditPermissionsModal';
import { ApiReturn, PaginatedApiResponse } from '@/types/api';
import {
  Permission,
  PermissionColumn,
  PermissionResponse,
} from '@/types/entities/permission';

export default withAuth(AdminPermissions, [
  'permissions.index',
  'permissions.delete',
  'permissions.store',
  'permissions.update',
]);

function AdminPermissions() {
  const [editModalOpen, setEditModalOpen] = React.useState(false);
  const [selectedData, setSelectedData] = React.useState<{
    id: string;
    routes: string;
  }>();

  const { tableState, setTableState } = useServerTable<Permission>({
    pageSize: 10,
  });

  const columns: ColumnDef<PermissionColumn>[] = [
    {
      id: 'id',
      accessorKey: 'id',
      header: 'Id',
    },
    {
      id: 'routes',
      accessorKey: 'routes',
      header: 'Routes',
    },
    {
      id: 'action',
      header: 'Action',
      cell: (info) => {
        const value = {
          id: info.row.original.id,
          routes: info.row.original.routes,
        };
        return (
          <div className='flex items-center justify-center gap-x-4'>
            <IconButton
              icon={FiEdit}
              variant='yellow'
              onClick={() => {
                setEditModalOpen(true);
                setSelectedData(value);
              }}
            />
            <IconButton
              icon={FiTrash}
              variant='red'
              onClick={() => openWarningDelete({ id: info.row.original.id })}
            />
          </div>
        );
      },
    },
  ];
  //#endregion  //*======== Table Definition ===========

  //#region  //*=========== Fetch Data ===========
  const url = buildPaginatedTableURL({
    baseUrl: '/permissions',
    tableState,
  });

  const { data: queryData, refetch: refetchData } = useQuery<
    PaginatedApiResponse<PermissionResponse[]>,
    Error
  >([url], {
    keepPreviousData: true,
  });
  //#endregion  //*=========== Fetch Data ===========

  //#region  //*=========== Mutate Data ===========
  const { mutate: deletePermissions } = useMutationToast<
    ApiReturn<undefined>,
    Omit<Permission, 'name'>
  >(
    useMutation((data) => {
      return api.delete('/permissions', { data });
    })
  );
  //#endregion  //*=========== Mutate Data ===========

  //#region  //*=========== Delete Dialog ===========
  const dialog = useDialog();
  function openWarningDelete({ id }: { id: string }) {
    dialog({
      title: 'Apakah Anda Yakin!!!',
      description: `Hapus permissions dengan ID: ${id} ?`,
      submitText: 'Delete',
      variant: 'danger',
      catchOnCancel: true,
    })
      .then(() => deletePermissions({ id: id }))
      .then(() => refetchData());
  }
  //#region  //*=========== Delete Dialog ===========

  return (
    <DashboardLayout>
      <section>
        <div className='layout min-h-screen py-20'>
          <div className='flex justify-between'>
            <div>
              <Breadcrumb crumbs={['/dashboard/admin/permission']} />
              <Typography as='h4' variant='h4' className=''>
                Manajemen Permission
              </Typography>
            </div>
            <div>
              <AddPermissionsModal onSuccess={refetchData}>
                {({ openModal }) => (
                  <Button
                    variant='green'
                    size='small'
                    onClick={() => openModal()}
                  >
                    Add Permissions
                  </Button>
                )}
              </AddPermissionsModal>
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
          <EditPermissionsModal
            open={editModalOpen}
            setOpen={setEditModalOpen}
            defaultValues={selectedData}
            onSuccess={refetchData}
          />
        )}
      </section>
    </DashboardLayout>
  );
}
