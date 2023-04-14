import { useQuery } from '@tanstack/react-query';
import { ColumnDef } from '@tanstack/react-table';
import { format } from 'date-fns';
import { useRouter } from 'next/router';
import React from 'react';

import Button from '@/components/buttons/Button';
import WahanaSeniFilterPopup from '@/components/shared/PembayaranFilterPopup';
import ServerTable from '@/components/table/ServerTable';
import PaymentTag from '@/components/tag/PaymentTag';
import useServerTable from '@/hooks/useServerTable';
import { buildPaginatedTableURL } from '@/lib/table';
import { WahanaSeniDataRecap } from '@/pages/dashboard/admin/main-event/wahana-seni/components/WahanaSeniDataRecap';
import { PaginatedApiResponse } from '@/types/api';
import {
  AdminWahanaSeniColumn,
  WahanaSeniDataRecapType,
} from '@/types/entities/main-event/wahana-seni';

export const TableWahanaSeni = ({ baseURL }: { baseURL: string }) => {
  const router = useRouter();
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
      size: 125,
    },
    {
      id: 'created_at',
      accessorFn: (row) => format(new Date(row.created_at), "y'-'MM'-'dd"),
      header: 'Created At',
      size: 150,
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
      size: 125,
    },
  ];

  const [pembayaranFilter, setPembayaranFilter] = React.useState<string[]>([]);

  const url = buildPaginatedTableURL({
    baseUrl: baseURL,
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
    <div>
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
          <WahanaSeniFilterPopup setPembayaranFilter={setPembayaranFilter} />
        }
        withFilter={true}
        className='pt-10 text-center text-typo-primary font-secondary'
      />
    </div>
  );
};
