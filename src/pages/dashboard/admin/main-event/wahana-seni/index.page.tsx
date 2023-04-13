import { useQuery } from '@tanstack/react-query';
import { ColumnDef } from '@tanstack/react-table';
import clsx from 'clsx';
import { format } from 'date-fns';
import { useRouter } from 'next/router';
import * as React from 'react';
import { BiFileBlank } from 'react-icons/bi';
import { BsFileSpreadsheet } from 'react-icons/bs';

import Button from '@/components/buttons/Button';
import withAuth from '@/components/hoc/withAuth';
import WahanaSeniFilterPopup from '@/components/shared/PembayaranFilterPopup';
import ServerTable from '@/components/table/ServerTable';
import PaymentTag from '@/components/tag/PaymentTag';
import Typography from '@/components/typography/Typography';
import useServerTable from '@/hooks/useServerTable';
import DashboardLayout from '@/layouts/dashboard/DashboardLayout';
import { buildPaginatedTableURL } from '@/lib/table';
import { PaginatedApiResponse } from '@/types/api';
import {
  AdminWahanaSeniColumn,
  WahanaSeniDataRecapType,
} from '@/types/entities/main-event/wahana-seni';

import { WahanaSeniDataRecap } from '../components/WahanaSeniDataRecap';

export default withAuth(AdminWahanaSeniDashboardPage, []);

function AdminWahanaSeniDashboardPage() {
  const router = useRouter();
  const [karyaSeni, setKaryaSeni] = React.useState(0);
  const { tableState, setTableState } = useServerTable<AdminWahanaSeniColumn>({
    pageSize: 10,
  });

  const columns: ColumnDef<AdminWahanaSeniColumn>[] = [
    {
      id: 'index',
      cell: (info) => info.row.index + 1,
      header: 'No.',
      size: 50,
    },
    {
      id: 'name',
      accessorKey: 'name',
      header: 'Nama',
      size: 100,
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
      size: 350,
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
                router.push(`wahanaseni/${info.row.original.id_tim}`)
              }
            >
              Lihat Detail
            </Button>
          </div>
        );
      },
      header: 'Detail Peserta',
      size: 150,
    },
  ];

  const [pembayaranFilter, setPembayaranFilter] = React.useState<string[]>([]);

  const url = buildPaginatedTableURL({
    baseUrl: '/admin/wahanaseni',
    tableState,
    additionalParam: {
      filter: pembayaranFilter,
    },
    option: {
      arrayFormat: 'index',
    },
  });

  const { data: queryData } = useQuery<
    PaginatedApiResponse<AdminWahanaSeniColumn[]>,
    Error
  >([url], {
    keepPreviousData: true,
  });

  return (
    <DashboardLayout className='bg-typo-surface '>
      <main>
        <section className='dashboard-layout'>
          <div className='min-h-screen flex flex-col gap-6 pb-20'>
            <div className='flex gap-x-4 p-2 bg-typo-light rounded-lg'>
              <Button
                variant='basic'
                onClick={() => setKaryaSeni(0)}
                className={clsx([
                  karyaSeni === 0 && 'border shadow-sm bg-white',
                  'w-full text-typo-primary hover:bg-white font-secondary',
                ])}
              >
                Karya Seni 2D
              </Button>
              <Button
                variant='basic'
                onClick={() => setKaryaSeni(1)}
                className={clsx([
                  karyaSeni === 1 && 'border shadow-sm bg-white',
                  ' w-full text-typo-primary hover:bg-white font-secondary',
                ])}
              >
                Karya Seni 3D
              </Button>
            </div>
            <div>
              <Typography variant='b1' className='font-medium text-success-600'>
                ITS EXPO 2023
              </Typography>
              <div className='flex justify-between md:flex-row flex-col items-center'>
                <Typography
                  as='h5'
                  variant='h5'
                  className='font-bold text-typo-primary mr-auto'
                >
                  {karyaSeni === 0 ? 'Karya Seni 2D' : 'Karya Seni 3D'}
                </Typography>
                <div className='flex gap-x-4 w-full md:w-[405px]'>
                  <Button
                    variant='outline'
                    leftIcon={BsFileSpreadsheet}
                    leftIconClassName='text-typo-secondary'
                    className='bg-white w-1/2'
                  >
                    Download as Excel
                  </Button>
                  <Button
                    variant='outline'
                    leftIconClassName='text-typo-secondary'
                    leftIcon={BiFileBlank}
                    className='bg-white w-1/2'
                  >
                    Download as PDF
                  </Button>
                </div>
              </div>
            </div>
            <WahanaSeniDataRecap
              {...(queryData?.data.meta as unknown as WahanaSeniDataRecapType)}
            />
            <ServerTable
              columns={columns}
              data={queryData?.data.data_per_page ?? []}
              meta={queryData?.data.meta}
              tableState={tableState}
              setTableState={setTableState}
              header={
                <WahanaSeniFilterPopup
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
