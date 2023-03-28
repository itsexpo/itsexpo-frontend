import { useQuery } from '@tanstack/react-query';
import { ColumnDef } from '@tanstack/react-table';
import { format } from 'date-fns';
import { useRouter } from 'next/router';
import * as React from 'react';

import Button from '@/components/buttons/Button';
import withAuth from '@/components/hoc/withAuth';
import PembayaranFilterPopup from '@/components/shared/PembayaranFilterPopup';
import ServerTable from '@/components/table/ServerTable';
import PaymentTag from '@/components/tag/PaymentTag';
import Typography from '@/components/typography/Typography';
import useServerTable from '@/hooks/useServerTable';
import DashboardLayout from '@/layouts/dashboard/DashboardLayout';
import { buildPaginatedTableURL } from '@/lib/table';
import RobotikAdminStatistic from '@/pages/dashboard/admin/data-management/robotika/container/RobotikAdminStatistic';
import { PaginatedApiResponse } from '@/types/api';
import {
  AdminRobotikColumn,
  AdminRobotikMeta,
} from '@/types/entities/data-management/robotik';

export default withAuth(AdminRobotikDashboardPage, ['admin_robotik.index']);

function AdminRobotikDashboardPage() {
  const router = useRouter();
  const { tableState, setTableState } = useServerTable<AdminRobotikColumn>({
    pageSize: 10,
  });
  const [pembayaranFilter, setPembayaranFilter] = React.useState<string[]>([]);

  const columns: ColumnDef<AdminRobotikColumn>[] = [
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
      cell: (info) => (
        <PaymentTag color={info.row.original.status_pembayaran} />
      ),
      header: 'Status Pembayaran',
      size: 280,
    },
    {
      id: 'detail_tim',
      cell: (info) => (
        <Button
          variant='outline'
          size='small'
          onClick={() => router.push(`robotika/${info.row.original.id_tim}`)}
        >
          Lihat Detail
        </Button>
      ),
      header: 'Detail Tim',
      size: 150,
    },
  ];

  const url = buildPaginatedTableURL({
    baseUrl: '/admin/robotik',
    tableState,
    additionalParam: {
      filter: pembayaranFilter,
    },
    option: {
      arrayFormat: 'index',
    },
  });

  const { data: queryData } = useQuery<
    PaginatedApiResponse<AdminRobotikColumn[]>,
    Error
  >([url], {
    keepPreviousData: true,
  });

  return (
    <DashboardLayout className='bg-typo-surface'>
      <main className='dashboard-layout min-h-screen space-y-6 pb-20'>
        <section className='space-y-1'>
          <Typography variant='b1' className='font-medium text-success-600'>
            ITS EXPO 2023
          </Typography>
          <Typography
            as='h5'
            variant='h5'
            className='font-bold text-typo-primary'
          >
            Robotika
          </Typography>
        </section>

        <RobotikAdminStatistic
          {...(queryData?.data.meta as AdminRobotikMeta)}
        />

        <ServerTable
          columns={columns}
          data={queryData?.data.data_per_page ?? []}
          meta={queryData?.data.meta}
          tableState={tableState}
          setTableState={setTableState}
          header={
            <PembayaranFilterPopup setPembayaranFilter={setPembayaranFilter} />
          }
          withFilter
          className='text-center font-secondary'
        />
      </main>
    </DashboardLayout>
  );
}
