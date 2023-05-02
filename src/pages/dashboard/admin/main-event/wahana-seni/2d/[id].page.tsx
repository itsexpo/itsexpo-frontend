import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import * as React from 'react';

import Breadcrumb from '@/components/Breadcrumb';
import withAuth from '@/components/hoc/withAuth';
import Typography from '@/components/typography/Typography';
import DashboardLayout from '@/layouts/dashboard/DashboardLayout';
import BuktiPembayaranCard from '@/pages/dashboard/admin/main-event/wahana-seni/components/2d/BuktiPembayaranCard';
import DetailTimCard from '@/pages/dashboard/admin/main-event/wahana-seni/components/2d/DetailTimCard';
import { ApiReturn } from '@/types/api';
import { TeamDataWahanaSeni2D } from '@/types/entities/main-event/wahana-seni';

export default withAuth(DetailWahanaSeniPage, [
  'admin_2d.index',
  'admin_2d.detail',
]);

function DetailWahanaSeniPage() {
  const { id } = useRouter().query;
  const url = `/admin/2d/${id}`;
  const { data: queryData, refetch: refetchData } = useQuery<
    ApiReturn<TeamDataWahanaSeni2D>
  >([url]);

  return (
    <DashboardLayout className='bg-typo-surface'>
      <div className='dashboard-layout min-h-screen space-y-6'>
        <header>
          <div className='flex justify-between items-center'>
            <Typography as='h5' variant='h5' className='font-bold'>
              Wahana Seni 2D
            </Typography>
            <Breadcrumb
              crumbs={[
                '/dashboard/admin/main-event/wahana-seni',
                '/dashboard/admin/main-event/wahana-seni/2d',
              ]}
            />
          </div>
        </header>

        <main className='space-y-6'>
          <div className='flex flex-col md:flex-row gap-6'>
            {queryData && (
              <DetailTimCard tim={queryData.data} className='flex-1' />
            )}
            {queryData && id && (
              <BuktiPembayaranCard
                tim={queryData.data}
                onSuccess={refetchData}
                className='h-fit'
              />
            )}
          </div>
        </main>
      </div>
    </DashboardLayout>
  );
}
