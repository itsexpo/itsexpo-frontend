import { AxiosError } from 'axios';
import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';
import React from 'react';

import Breadcrumb from '@/components/Breadcrumb';
import withAuth from '@/components/hoc/withAuth';
import Typography from '@/components/typography/Typography';
import PengumumanEventCard from '@/container/PengumumanEventCard';
import DashboardLayout from '@/layouts/dashboard/DashboardLayout';
import api, { setApiContext } from '@/lib/api';
import DataDiriCard from '@/pages/dashboard/pre-event/robotik/components/dashboard/DataDiriCard';
import TeamCard from '@/pages/dashboard/pre-event/robotik/container/TeamCard';
import { ApiError, ApiReturn } from '@/types/api';
import { DetailPendaftarRobotik } from '@/types/entities/pre-event/robotik';

export default withAuth(DashboardRobotikLineTracer, ['robotik.index']);

function DashboardRobotikLineTracer({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <DashboardLayout>
      <header className='dashboard-layout'>
        <div className='flex justify-between items-center'>
          <Typography as='h5' variant='h5' className='font-bold'>
            {data.data.competition_status === 'BENTENGAN'
              ? 'Open Category (Bentengan)'
              : 'Line Tracer'}
          </Typography>
          <Breadcrumb
            crumbs={[
              '/dashboard/pre-event/robotik',
              '/dashboard/pre-event/robotik/main',
            ]}
          />
        </div>
      </header>
      <main className='dashboard-layout !pt-8 space-y-6 mb-8'>
        <PengumumanEventCard id='13' />
        <div className='grid grid-cols-1 md:grid-cols-2 gap-y-4 md:gap-y-0 gap-x-0 md:gap-x-4'>
          <TeamCard {...data.data} />
          <DataDiriCard data={data.data.personal} />
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
    const res = await api.get<ApiReturn<DetailPendaftarRobotik>>(
      '/pre_event/robotik'
    );
    return {
      props: {
        data: res.data,
      },
    };
  } catch (err) {
    if ((err as AxiosError<ApiError>)?.response?.data?.code === 6060) {
      return {
        redirect: {
          destination: '/dashboard/pre-event/robotik/join',
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
