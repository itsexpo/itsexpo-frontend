import { AxiosError } from 'axios';
import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';
import React from 'react';

import Breadcrumb from '@/components/Breadcrumb';
import withAuth from '@/components/hoc/withAuth';
import Typography from '@/components/typography/Typography';
import DashboardLayout from '@/layouts/dashboard/DashboardLayout';
import api, { setApiContext } from '@/lib/api';
import PengumumanCard from '@/pages/dashboard/pre-event/kti/components/dashboard/PengumumanCard';
import TeamCard from '@/pages/dashboard/pre-event/kti/container/TeamCard';
import { ApiError, ApiReturn } from '@/types/api';
import { DetailTimKTI } from '@/types/entities/pre-event/kti';

export default withAuth(DashboardKTI, ['kti.index']);

function DashboardKTI({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <DashboardLayout>
      <header className='dashboard-layout'>
        <div className='flex justify-between items-center'>
          <Typography as='h5' variant='h5' className='font-bold'>
            Karya Tulis Ilmiah
          </Typography>
          <Breadcrumb
            crumbs={[
              '/dashboard/pre-event/kti',
              '/dashboard/pre-event/kti/main',
            ]}
          />
        </div>
      </header>
      <main className='dashboard-layout !pt-8 space-y-6 mb-8'>
        <PengumumanCard />
        <div className='grid grid-cols-1 md:grid-cols-2 gap-y-4 md:gap-y-0 gap-x-0 md:gap-x-4'>
          {/* Team Card */}
          <TeamCard {...data.data} />
        </div>
      </main>
    </DashboardLayout>
  );
}

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  setApiContext(context);
  try {
    const res = await api.get<ApiReturn<DetailTimKTI>>('/pre_event/kti');
    return {
      props: {
        data: res.data,
      },
    };
  } catch (err) {
    if ((err as AxiosError<ApiError>)?.response?.data?.code === 1005) {
      return {
        redirect: {
          destination: '/dashboard/pre-event/kti/pendaftaran',
          permanent: false,
        },
      };
    }
    return {
      redirect: {
        permanent: false,
        destination: '/500',
      },
    };
  }
};
