import { useQuery } from '@tanstack/react-query';
import { ColumnDef } from '@tanstack/react-table';
import { format } from 'date-fns';
import { useRouter } from 'next/router';
import { AiOutlinePlus } from 'react-icons/ai';

import Button from '@/components/buttons/Button';
import withAuth from '@/components/hoc/withAuth';
import ServerTable from '@/components/table/ServerTable';
import Typography from '@/components/typography/Typography';
import { EVENT_ID } from '@/constant/event';
import useDialog from '@/hooks/useDialog';
import useServerTable from '@/hooks/useServerTable';
import DashboardLayout from '@/layouts/dashboard/DashboardLayout';
import api from '@/lib/api';
import { buildPaginatedTableURL } from '@/lib/table';
import { PaginatedApiResponse } from '@/types/api';
import { AnnouncementColumns } from '@/types/entities/announcement';

export default withAuth(AnnouncementDashboard, ['pengumuman.index']);

function AnnouncementDashboard() {
  const router = useRouter();

  const { tableState, setTableState } = useServerTable<AnnouncementColumns>({
    pageSize: 10,
  });

  const dialog = useDialog();
  function openWarningDelete({ id }: { id: string }) {
    dialog({
      title: 'Apakah Anda Yakin!!!',
      description: `Hapus Pengumuman dengan ID: ${id} ?`,
      submitText: 'Delete',
      variant: 'warning',
      catchOnCancel: true,
    })
      .then(() => api.delete(`/pengumuman?id=${id}`))
      .then(() => refetchData());
  }

  const columns: ColumnDef<AnnouncementColumns>[] = [
    {
      id: 'index',
      cell: (info) => info.row.index + 1,
      header: 'No.',
      size: 50,
    },
    {
      id: 'title',
      accessorKey: 'title',
      header: 'Title',
    },
    {
      id: 'description',
      accessorKey: 'description',
      header: 'Description',
    },
    {
      id: 'event',
      accessorKey: 'event',
      header: 'Event',
      accessorFn: (row) => EVENT_ID[Number(row.list_event_id)],
    },
    {
      id: 'created_at',
      accessorFn: (row) => format(new Date(row.created_at), "y'-'MM'-'dd"),
      header: 'Created At',
    },
    {
      id: 'action',
      cell: (info) => {
        return (
          <div className='flex flex-row justify-center gap-2'>
            <Button
              variant='outline'
              size='small'
              className='border-typo-icon !text-typo-secondary font-semibold'
              onClick={() =>
                router.push(`announcement/update/${info.row.original.id}`)
              }
            >
              Update
            </Button>
            <Button
              variant='red'
              size='small'
              className='border-typo-icon text-white font-semibold'
              onClick={() => openWarningDelete({ id: info.row.original.id })}
            >
              Hapus
            </Button>
          </div>
        );
      },
      header: 'Action',
      size: 180,
    },
  ];

  const url = buildPaginatedTableURL({
    baseUrl: '/pengumuman',
    tableState,
  });

  const { data: queryData, refetch: refetchData } = useQuery<
    PaginatedApiResponse<AnnouncementColumns[]>,
    Error
  >([url], {
    keepPreviousData: true,
  });

  return (
    <DashboardLayout className='bg-typo-surface'>
      <main>
        <section className='dashboard-layout'>
          <div className='min-h-screen flex flex-col gap-6 pb-20'>
            <section className='md:flex md:justify-between md:items-center'>
              <span>
                <Typography
                  as='b1'
                  variant='b1'
                  className='font-medium text-success-600'
                >
                  ITS EXPO 2023
                </Typography>
                <Typography
                  as='h5'
                  variant='h5'
                  className='font-bold text-typo-primary text-[32px]'
                >
                  Pengumuman
                </Typography>
              </span>
              <div className='mt-7 w-full md:w-auto'>
                <Button
                  leftIcon={AiOutlinePlus}
                  variant='green'
                  size='large'
                  className='w-full'
                  onClick={() => router.push(`announcement/create`)}
                >
                  Buat Pengumuman Baru
                </Button>
              </div>
            </section>
            <div className='mx-4 md:mx-0'>
              <ServerTable
                columns={columns}
                data={queryData?.data.data_per_page ?? []}
                meta={queryData?.data.meta}
                tableState={tableState}
                setTableState={setTableState}
                withFilter={true}
                className='text-center text-typo-primary font-secondary'
              />
            </div>
          </div>
        </section>
      </main>
    </DashboardLayout>
  );
}
