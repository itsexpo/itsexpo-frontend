import { useMutation, useQuery } from '@tanstack/react-query';
import { ColumnDef } from '@tanstack/react-table';
import React from 'react';
import { FiEye } from 'react-icons/fi';

import Button from '@/components/buttons/Button';
import withAuth from '@/components/hoc/withAuth';
import useServerTable from '@/components/hooks/useServerTable';
import ServerTable from '@/components/table/ServerTable';
import Typography from '@/components/typography/Typography';
import useMutationToast from '@/hooks/toast/useMutationToast';
import useDialog from '@/hooks/useDialog';
import DashboardLayoutAdmin from '@/layouts/dashboard/DashboardLayoutAdmin';
import api from '@/lib/api';
import { buildPaginatedTableURL } from '@/lib/table';
import AddPermissionsModal from '@/pages/dashboard/permissions/components/AddPermissionsModal';
import EditPermissionsModal from '@/pages/dashboard/permissions/components/EditPermissionsModal';
import { PaginatedApiResponse } from '@/types/api';
import { Permission, PermissionResponse } from '@/types/entities/permission';
import { Role, RoleColumn } from '@/types/entities/role';

/**
 * Short
 *
 */

export default withAuth(AdminPermissions, []);

function AdminPermissions() {
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
      id: 'routes',
      accessorKey: 'routes',
      header: 'Routes',
    },
    {
      id: 'action',
      header: 'Action',
      cell: (info) => {
        const defaultValues = {
          id: info.row.original.id,
          routes: info.row.original.routes,
        };
        return (
          <div>
            <EditPermissionsModal
              defaultValues={defaultValues}
              onSuccess={refetchData}
            >
              {({ openModal }) => (
                <Button variant='red' size='small' onClick={() => openModal()}>
                  Edit
                </Button>
              )}
            </EditPermissionsModal>
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
    void,
    Omit<Permission, 'name'>
  >(
    useMutation((data) => {
      return api.post('/permissions/delete', data);
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
      variant: 'warning',
      catchOnCancel: true,
    })
      .then(() => deletePermissions({ id: id }))
      .then(() => refetchData());
  }
  //#region  //*=========== Delete Dialog ===========

  return (
    <DashboardLayoutAdmin>
      <h1>Permissions</h1>
      <main>
        <section>
          <div className='layout min-h-screen py-20'>
            <div className='flex justify-between'>
              <Typography as='h4' variant='h4' className='mt-4'>
                Basic Table
              </Typography>
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
            <ServerTable
              columns={columns}
              data={queryData?.data.data_per_page ?? []}
              meta={queryData?.data.meta}
              tableState={tableState}
              setTableState={setTableState}
              className='mt-8'
            />
          </div>
        </section>
      </main>
    </DashboardLayoutAdmin>
  );
}
