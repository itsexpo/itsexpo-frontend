import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';
import React from 'react';

import withAuth from '@/components/hoc/withAuth';
import Typography from '@/components/typography/Typography';
import DashboardLayout from '@/layouts/dashboard/DashboardLayout';
import api, { setApiContext } from '@/lib/api';
import DataDiriCard from '@/pages/dashboard/pre-event/jurnalistik/components/dashboard/DataDiriCard';
import TeamCard from '@/pages/dashboard/pre-event/jurnalistik/container/TeamCard';
import { ApiReturn } from '@/types/api';
import { DetailPendaftarJurnalistik } from '@/types/entities/pre-event/jurnalistik';

export default withAuth(DashboardJurnalistik, []);

export async function getServerSideProps(context: GetServerSidePropsContext) {
  setApiContext(context);
  const res = await api.get<ApiReturn<DetailPendaftarJurnalistik>>(
    '/pre_event/jurnalistik'
  );
  return {
    props: {
      data: res.data.data,
    },
  };
}

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
        </div>
      </header>
      <main className='dashboard-layout !pt-8 space-y-6 mb-8'>
        <div className='w-full p-6 bg-typo-white rounded-xl space-y-4 border-typo-outline border-[1px]'>
          <Typography
            as='h6'
            variant='h6'
            className='text-typo-primary font-bold'
          >
            Pengumuman
          </Typography>
          <div className='border-typo-outline border-[1px] rounded-md px-3 py-4 space-y-2'>
            <div className='flex items-center justify-between'>
              <div className='flex items-center space-x-2'>
                <Typography
                  as='p'
                  variant='p'
                  className='text-typo-primary font-semibold'
                >
                  Judul Notifikasi
                </Typography>
                <div className='py-1 px-3 rounded-2xl bg-success-600 w-fit'>
                  <Typography
                    as='p'
                    variant='c'
                    className='text-typo-white font-medium'
                  >
                    NEW!
                  </Typography>
                </div>
              </div>
              <Typography as='p' variant='c' className='text-typo-icon'>
                18 Agustus 2021
              </Typography>
            </div>
            <Typography as='p' variant='b1' className='text-typo-secondary'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum
              ad, suscipit aliquid vitae possimus praesentium? Nesciunt
              reprehenderit velit repudiandae. Perspiciatis, ad.
            </Typography>

            <Typography
              as='p'
              variant='p'
              className='text-success-600 underline font-semibold'
            >
              Lihat detail
            </Typography>
          </div>
        </div>
        <div className='grid grid-cols-2'>
          {/* Team Card */}
          <TeamCard {...data} />
          <DataDiriCard data={data.personal} />
        </div>
      </main>
    </DashboardLayout>
  );
}
