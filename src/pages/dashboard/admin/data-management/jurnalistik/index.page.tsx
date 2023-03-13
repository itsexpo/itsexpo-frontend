import { useQuery } from '@tanstack/react-query';
import { ColumnDef } from '@tanstack/react-table';
import { format } from 'date-fns';
import { useRouter } from 'next/router';

import Button from '@/components/buttons/Button';
import withAuth from '@/components/hoc/withAuth';
import ServerTable from '@/components/table/ServerTable';
import Typography from '@/components/typography/Typography';
import useServerTable from '@/hooks/useServerTable';
import DashboardLayout from '@/layouts/dashboard/DashboardLayout';
import clsxm from '@/lib/clsxm';
import { buildPaginatedTableURL } from '@/lib/table';
import { JurnalistikDataRecap } from '@/pages/dashboard/admin/data-management/jurnalistik/components/JurnalistikDataRecap';
import { PaginatedApiResponse } from '@/types/api';
import {
  AdminJurnalistikColumn,
  JurnalistikDataRecapType,
} from '@/types/entities/data-management/jurnalistik';

export default withAuth(AdminJurnalistikDashboardPage, [
  'admin_jurnalistik.index',
]);

function AdminJurnalistikDashboardPage() {
  const router = useRouter();
  const { tableState, setTableState } = useServerTable<AdminJurnalistikColumn>({
    pageSize: 10,
  });

  const columns: ColumnDef<AdminJurnalistikColumn>[] = [
    {
      id: 'index',
      cell: (info) => info.row.index + 1,
      header: 'No.',
      size: 75,
    },
    {
      id: 'ketua_tim',
      accessorKey: 'ketua_tim',
      header: 'Ketua Tim',
      size: 200,
    },
    {
      id: 'nama_tim',
      accessorKey: 'nama_tim',
      header: 'Nama Tim',
      size: 200,
    },
    {
      id: 'kode_tim',
      accessorKey: 'kode_tim',
      header: 'Kode Tim',
      size: 180,
    },
    {
      id: 'created_at',
      accessorFn: (row) => format(new Date(row.created_at), "y'-'MM'-'dd"),
      header: 'Created At',
      size: 200,
    },
    {
      id: 'status_pembayaran',
      cell: (info) => {
        const status = info.row.original.status_pembayaran;

        const color = [
          (status === 'REVISI' ||
            status === 'AWAITING VERIFICATION' ||
            status === 'AWAITING PAYMENT') &&
            'border-warning-400 bg-warning-100 text-warning-700',
          status === 'GAGAL' &&
            'bg-critical-100 border-critical-300 text-critical-700',
          status === 'SUCCESS' &&
            'border-success-300 bg-success-100 text-success-700',
        ];

        const text = [
          status === 'REVISI' && 'Revisi',
          status === 'GAGAL' && 'Gagal',
          status === 'SUCCESS' && 'Sukses',
          status === 'AWAITING VERIFICATION' && 'Menunggu Verifikasi',
          status === 'AWAITING PAYMENT' && 'Menunggu Pembayaran',
        ];

        return (
          <div className='w-full flex justify-center'>
            <div
              className={clsxm(
                'flex justify-center rounded-md min-w-[120px] px-4 py-0.5 border text-sm font-semibold',
                color
              )}
            >
              {text}
            </div>
          </div>
        );
      },
      header: 'Status Pembayaran',
      size: 220,
    },
    {
      id: 'detail_tim',
      cell: (info) => {
        return (
          <div className='flex flex-row justify-center'>
            <Button
              variant='outline'
              size='small'
              className='border-typo-icon !text-typo-icon font-semibold'
              onClick={() =>
                router.push(`jurnalistik/${info.row.original.id_tim}`)
              }
            >
              Lihat Detail
            </Button>
          </div>
        );
      },
      header: 'Detail Tim',
      size: 150,
    },
  ];

  const url = buildPaginatedTableURL({
    baseUrl: '/admin/jurnalistik',
    tableState,
  });

  const { data: queryData } = useQuery<
    PaginatedApiResponse<AdminJurnalistikColumn[]>,
    Error
  >([url], {
    keepPreviousData: true,
  });

  return (
    <DashboardLayout className='bg-typo-surface '>
      <main>
        <section className='dashboard-layout'>
          <div className='min-h-screen flex flex-col gap-6 pb-20'>
            <div>
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
                className='font-bold text-typo-primary'
              >
                Data Management
              </Typography>
            </div>

            <JurnalistikDataRecap
              {...(queryData?.data.meta as unknown as JurnalistikDataRecapType)}
            />
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
        </section>
      </main>
    </DashboardLayout>
  );
}
