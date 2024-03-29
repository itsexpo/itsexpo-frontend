import { AxiosError } from 'axios';
import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';
import React from 'react';

import Breadcrumb from '@/components/Breadcrumb';
import withAuth from '@/components/hoc/withAuth';
import Typography from '@/components/typography/Typography';
import PengumumanEventCard from '@/container/PengumumanEventCard';
import DashboardLayout from '@/layouts/dashboard/DashboardLayout';
import api, { setApiContext } from '@/lib/api';
import DashboardContactPerson from '@/pages/dashboard/pre-event/components/ContactCard';
import DataDiriCard from '@/pages/dashboard/pre-event/jurnalistik/components/dashboard/DataDiriCard';
import TeamCard from '@/pages/dashboard/pre-event/jurnalistik/container/TeamCard';
import { ApiError, ApiReturn } from '@/types/api';
import { DetailPendaftarJurnalistik } from '@/types/entities/pre-event/jurnalistik';

export default withAuth(DashboardJurnalistik, [
  'jurnalistik.index',
  'jurnalistik_team.delete',
]);

function DashboardJurnalistik({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <DashboardLayout>
      <header className='dashboard-layout'>
        <div className='flex justify-between items-center'>
          <Typography as='h5' variant='h5' className='font-bold'>
            Journalistic
          </Typography>
          <Breadcrumb
            crumbs={[
              '/dashboard/pre-event/jurnalistik',
              '/dashboard/pre-event/jurnalistik/main',
            ]}
          />
        </div>
      </header>
      <main className='dashboard-layout !pt-8 space-y-6 mb-8'>
        <PengumumanEventCard id='11' />
        <div className='grid grid-cols-1 md:grid-cols-2 gap-y-4 md:gap-y-0 gap-x-0 md:gap-x-4'>
          {/* Team Card */}
          <TeamCard {...data.data} />
          <DataDiriCard data={data.data.personal} />
        </div>
        <DashboardContactPerson
          eventCategory={data.data.category_jurnalistik}
          contactType='LINE'
        />
      </main>
    </DashboardLayout>
  );
}

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  setApiContext(context);
  try {
    const res = await api.get<ApiReturn<DetailPendaftarJurnalistik>>(
      '/pre_event/jurnalistik'
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
          destination: '/dashboard/pre-event/jurnalistik/join',
          permanent: false,
        },
      };
    }
    // console.log(err);
    return {
      redirect: {
        permanent: false,
        destination: '/500',
      },
    };
  }
};
