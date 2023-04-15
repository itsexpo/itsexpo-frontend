import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import * as React from 'react';

import Breadcrumb from '@/components/Breadcrumb';
import withAuth from '@/components/hoc/withAuth';
import Typography from '@/components/typography/Typography';
import DashboardLayout from '@/layouts/dashboard/DashboardLayout';
import DetailTimCard from '@/pages/dashboard/admin/main-event/wahana-seni/components/3d/DetailTimCard';
import BuktiPembayaranCard from '@/pages/dashboard/admin/main-event/wahana-seni/components/BuktiPembayaranCard';
import DokumenCard from '@/pages/dashboard/admin/main-event/wahana-seni/components/DokumenCard';
import { ApiReturn } from '@/types/api';
import { TeamDataWahanaSeni3D } from '@/types/entities/main-event/wahana-seni';

export default withAuth(DetailWahanaSeniPage, ['admin_jurnalistik.detail']);

function DetailWahanaSeniPage() {
  const { id_team } = useRouter().query;
  const url = `/admin/3d/${id_team}`;
  const { data: queryData, refetch: refetchData } = useQuery<
    ApiReturn<TeamDataWahanaSeni3D>
  >([url]);

  return (
    <DashboardLayout className='bg-typo-surface'>
      <div className='dashboard-layout min-h-screen space-y-6'>
        <header>
          <div className='flex justify-between items-center'>
            <Typography as='h5' variant='h5' className='font-bold'>
              {`${queryData?.data.team_name} Tim`}
            </Typography>
            <Breadcrumb
              crumbs={[
                '/dashboard/admin/main-event/wahana-seni',
                '/dashboard/admin/main-event/wahana-seni/3d',
              ]}
            />
          </div>
        </header>

        <main className='space-y-6'>
          <div className='flex gap-x-6'>
            {queryData && (
              <DetailTimCard tim={queryData.data} className='flex-1' />
            )}
            {queryData && id_team && (
              <BuktiPembayaranCard
                tim={queryData.data}
                onSuccess={refetchData}
                className='h-fit'
              />
            )}
          </div>
          <DokumenCard tim={queryData?.data} />
        </main>
      </div>
    </DashboardLayout>
  );
}
