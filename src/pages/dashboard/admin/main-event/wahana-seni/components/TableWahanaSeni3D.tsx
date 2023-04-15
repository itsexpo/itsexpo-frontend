import { useQuery } from '@tanstack/react-query';
import { ColumnDef } from '@tanstack/react-table';
import { format } from 'date-fns';
import React from 'react';

import ButtonLink from '@/components/links/ButtonLink';
import WahanaSeniFilterPopup from '@/components/shared/PembayaranFilterPopup';
import ServerTable from '@/components/table/ServerTable';
import PaymentTag from '@/components/tag/PaymentTag';
import useServerTable from '@/hooks/useServerTable';
import { buildPaginatedTableURL } from '@/lib/table';
import { WahanaSeniDataRecap } from '@/pages/dashboard/admin/main-event/wahana-seni/components/WahanaSeniDataRecap';
import { PaginatedApiResponse } from '@/types/api';
import {
  AdminWahanaSeni3DColumn,
  WahanaSeniDataRecapType,
} from '@/types/entities/main-event/wahana-seni';

export const TableWahanaSeni3D = ({
  baseURL,
  contest,
}: {
  baseURL: string;
  contest: '2d' | '3d';
}) => {
  const { tableState, setTableState } = useServerTable<AdminWahanaSeni3DColumn>(
    {
      pageSize: 10,
    }
  );

  const columns: ColumnDef<AdminWahanaSeni3DColumn>[] = [
    {
      id: 'index',
      cell: (info) => info.row.index + 1,
      header: 'No.',
      size: 10,
    },
    {
      id: contest === '3d' ? 'ketua_tim' : 'nama',
      accessorKey: contest === '3d' ? 'ketua_tim' : 'nama',
      header: 'Nama',
      size: 40,
    },
    {
      id: 'created_at',
      accessorFn: (row) => format(new Date(row.created_at), "y'-'MM'-'dd"),
      header: 'Dibuat',
      size: 10,
    },
    {
      id: 'status_pembayaran',
      header: 'Status Pembayaran',
      cell: (info) => (
        <PaymentTag color={info.row.original.status_pembayaran} />
      ),
      size: 20,
    },
    {
      id: 'detail_tim',
      cell: (info) => {
        return (
          <div className='flex flex-row justify-center'>
            <ButtonLink
              variant='outline'
              size='small'
              className='border-typo-icon !text-typo-icon font-semibold'
              href={`wahana-seni/${contest}/${info.row.original.id_tim}`}
              openNewTab={true}
            >
              Lihat Detail
            </ButtonLink>
          </div>
        );
      },
      header: 'Detail Peserta',
      size: 10,
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

  const { data: queryData, isLoading } = useQuery<
    PaginatedApiResponse<AdminWahanaSeni3DColumn[]>,
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
        isLoading={isLoading}
        withFilter={true}
        className='pt-10 text-center text-typo-primary font-secondary'
      />
    </div>
  );
};
