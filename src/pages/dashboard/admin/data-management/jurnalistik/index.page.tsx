import { useQuery } from '@tanstack/react-query';
import { ColumnDef } from '@tanstack/react-table';
import { format } from 'date-fns';
import { useRouter } from 'next/router';
import * as React from 'react';

import Button from '@/components/buttons/Button';
import withAuth from '@/components/hoc/withAuth';
import JurnalistikFilterPopup from '@/components/shared/PembayaranFilterPopup';
import ServerTable from '@/components/table/ServerTable';
import PaymentTag from '@/components/tag/PaymentTag';
import Typography from '@/components/typography/Typography';
import useServerTable from '@/hooks/useServerTable';
import DashboardLayout from '@/layouts/dashboard/DashboardLayout';
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
    },
    {
      id: 'ketua_tim',
      accessorKey: 'ketua_tim',
      header: 'Ketua Tim',
    },
    {
      id: 'nama_tim',
      accessorKey: 'nama_tim',
      header: 'Nama Tim',
    },
    {
      id: 'kode_tim',
      accessorKey: 'kode_tim',
      header: 'Kode Tim',
    },
    {
      id: 'created_at',
      accessorFn: (row) => format(new Date(row.created_at), "y'-'MM'-'dd"),
      header: 'Created At',
    },
    {
      id: 'status_pembayaran',
      header: 'Status Pembayaran',
      cell: (info) => (
        <PaymentTag color={info.row.original.status_pembayaran} />
      ),
      size: 280,
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

  const [pembayaranFilter, setPembayaranFilter] = React.useState<string[]>([]);

  const url = buildPaginatedTableURL({
    baseUrl: '/admin/jurnalistik',
    tableState,
    additionalParam: {
      filter: pembayaranFilter,
    },
    option: {
      arrayFormat: 'index',
    },
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
              <Typography variant='b1' className='font-medium text-success-600'>
                ITS EXPO 2023
              </Typography>
              <Typography
                as='h5'
                variant='h5'
                className='font-bold text-typo-primary'
              >
                Journalistic
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
              header={
                <JurnalistikFilterPopup
                  setPembayaranFilter={setPembayaranFilter}
                />
              }
              withFilter={true}
              className='text-center text-typo-primary font-secondary'
            />
          </div>
        </section>
      </main>
    </DashboardLayout>
  );
}
