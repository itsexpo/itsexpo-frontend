import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import * as React from 'react';

import Breadcrumb from '@/components/Breadcrumb';
import withAuth from '@/components/hoc/withAuth';
import Typography from '@/components/typography/Typography';
import DashboardLayout from '@/layouts/dashboard/DashboardLayout';
import BuktiPembayaranCard from '@/pages/dashboard/admin/data-management/jurnalistik/container/BuktiPembayaranCard';
import DetailTimCard from '@/pages/dashboard/admin/data-management/jurnalistik/container/DetailTimCard';
import DokumenCard from '@/pages/dashboard/admin/data-management/jurnalistik/container/DokumenCard';
import { ApiReturn } from '@/types/api';
import { DetailTimJurnalistik } from '@/types/entities/pre-event/jurnalistik';

export default withAuth(DetailTimJurnalistik, ['admin_jurnalistik.detail']);

function DetailTimJurnalistik() {
  const { uuid } = useRouter().query;
  const url = `/admin/jurnalistik/${uuid}`;
  const { data: queryData, refetch: refetchData } = useQuery<
    ApiReturn<DetailTimJurnalistik>
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
                '/dashboard/admin/data-management/jurnalistik',
                '/dashboard/admin/data-management/jurnalistik/detail',
              ]}
            />
          </div>
        </header>

        <main className='space-y-6'>
          <div className='flex gap-x-6'>
            {queryData && (
              <DetailTimCard tim={queryData.data} className='flex-1' />
            )}
            {queryData && uuid && (
              <BuktiPembayaranCard
                tim={queryData.data}
                payment_id={queryData.data.payment.payment_id}
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
