import { useMutation, useQuery } from '@tanstack/react-query';
import { ColumnDef } from '@tanstack/react-table';
import React from 'react';

import Breadcrumb from '@/components/Breadcrumb';
import Button from '@/components/buttons/Button';
import withAuth from '@/components/hoc/withAuth';
import ServerTable from '@/components/table/ServerTable';
import Typography from '@/components/typography/Typography';
import useMutationToast from '@/hooks/toast/useMutationToast';
import useDialog from '@/hooks/useDialog';
import useServerTable from '@/hooks/useServerTable';
import DashboardLayout from '@/layouts/dashboard/DashboardLayout';
import api from '@/lib/api';
import { buildPaginatedTableURL } from '@/lib/table';
import EditShortenerModal from '@/pages/dashboard/admin/url-shortener/components/EditShortenerModal';
import { ApiReturn, PaginatedApiResponse } from '@/types/api';
import { Shortener, ShortenerColumn } from '@/types/entities/shortener';

export default withAuth(AdminShortener, [
  'all_url_shortener.index',
  'url_shortener.delete',
  'url_shortener.update',
]);

function AdminShortener() {
  const [editModalOpen, setEditModalOpen] = React.useState(false);
  const [selectedData, setSelectedData] = React.useState<Shortener>();

  //#region  //*=========== Table Definition ===========
  const { tableState, setTableState } = useServerTable<ShortenerColumn>({
    pageSize: 10,
  });

  const columns: ColumnDef<ShortenerColumn>[] = [
    {
      id: 'short_url',
      accessorKey: 'short_url',
      header: 'Short URL',
      size: 100,
    },
    {
      id: 'long_url',
      accessorKey: 'long_url',
      header: 'Long URL',
      size: 400,
    },
    {
      id: 'created_at',
      cell: (info) => {
        const date = info.row.original.created_at.split(' ')[0];
        return date;
      },
      header: 'Created At',
      size: 100,
    },
    {
      id: 'visitor',
      accessorKey: 'visitor',
      header: 'Visitor',
      size: 50,
    },
    {
      id: 'action',
      header: 'Action',
      cell: (info) => {
        const value = {
          url_id: info.row.original.url_id,
          long_url: info.row.original.long_url,
          short_url: info.row.original.short_url,
        };

        return (
          <div className='flex justify-center items-center gap-x-2'>
            <Button
              size='small'
              variant='outline'
              onClick={() => {
                setEditModalOpen(true);
                setSelectedData(value);
              }}
            >
              Edit
            </Button>
            <Button
              size='small'
              variant='red'
              onClick={() =>
                openWarningDelete({ url_id: info.row.original.url_id })
              }
            >
              Hapus
            </Button>
          </div>
        );
      },
    },
  ];
  //#endregion  //*======== Table Definition ===========

  //#region  //*=========== Fetch Data ===========
  const url = buildPaginatedTableURL({
    baseUrl: '/all_url_shortener',
    tableState,
  });

  const { data: queryData, refetch: refetchData } = useQuery<
    PaginatedApiResponse<ShortenerColumn[]>,
    Error
  >([url], {
    keepPreviousData: true,
  });
  //#endregion  //*======== Fetch Data ===========

  //#region  //*=========== Mutate Data ===========
  const { mutate: deleteShortener } = useMutationToast<
    ApiReturn<undefined>,
    Omit<Shortener, 'long_url' | 'short_url'>
  >(
    useMutation((data) => {
      return api.delete('/url_shortener', { data });
    })
  );
  //#endregion  //*======== Mutate Data ===========

  //#region  //*=========== Delete Dialog ===========
  const dialog = useDialog();
  function openWarningDelete({ url_id }: { url_id: string }) {
    dialog({
      title: 'Apakah Anda Yakin?',
      description: `Hapus URL Shortener dengan ID: ${url_id}?`,
      submitText: 'Hapus',
      variant: 'warning',
    })
      .then(() => deleteShortener({ url_id }))
      .then(() => refetchData());
  }
  //#endregion  //*======== Delete Dialog ===========

  return (
    <DashboardLayout>
      <main>
        <section className='bg-base-surface'>
          <div className='layout min-h-screen py-20'>
            <div className='flex justify-between items-center'>
              <div>
                <Breadcrumb crumbs={['/dashboard/admin/url-shortener']} />
                <Typography as='h5' variant='h5' className='font-bold'>
                  List Shorten Link
                </Typography>
              </div>
            </div>
            <ServerTable
              columns={columns}
              data={queryData?.data.data_per_page ?? []}
              meta={queryData?.data.meta}
              tableState={tableState}
              setTableState={setTableState}
              withFilter
              className='mt-6'
            />
          </div>
          {selectedData && (
            <EditShortenerModal
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
