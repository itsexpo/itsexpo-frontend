import { AxiosError } from 'axios';
import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';
import { useRouter } from 'next/router';
import React from 'react';

import Breadcrumb from '@/components/Breadcrumb';
import withAuth from '@/components/hoc/withAuth';
import Typography from '@/components/typography/Typography';
import DashboardLayout from '@/layouts/dashboard/DashboardLayout';
import api, { setApiContext } from '@/lib/api';
import DashboardWahanaSeni from '@/pages/dashboard/main-event/wahana-seni/container/dashboard/DashboardWahanaSeni.page';
import DashboardContactPerson from '@/pages/dashboard/pre-event/components/ContactCard';
import { ApiError, ApiReturn } from '@/types/api';
import { WahanaSeniData } from '@/types/entities/main-event/wahana-seni';

export default withAuth(DashboardWahanaSeniPage, ['wahana_seni.index']);

function DashboardWahanaSeniPage({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const router = useRouter();
  const { contest } = router.query as { contest: string };

  return (
    <DashboardLayout>
      <header className='dashboard-layout'>
        <div className='flex justify-between items-center'>
          <Typography as='h5' variant='h5' className='font-bold'>
            Sayembara Karya Mahasiswa
          </Typography>
          <Breadcrumb
            crumbs={[
              '/dashboard/main-event/wahana-seni',
              '/dashboard/main-event/wahana-seni/main',
            ]}
          />
        </div>
      </header>
      <main className='dashboard-layout !pt-8 space-y-6 mb-8'>
        {contest && data && (
          <DashboardWahanaSeni
            data={data || {}}
            constest={contest as '2d' | '3d'}
          />
        )}
        <DashboardContactPerson
          eventCategory='WAHANA_SENI'
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
    const res = await api.get<ApiReturn<WahanaSeniData>>(
      '/main-event/wahana_seni'
    );
    return {
      props: {
        data: res.data.data,
      },
    };
  } catch (err) {
    if ((err as AxiosError<ApiError>)?.response?.data?.code === 6060) {
      return {
        redirect: {
          destination: '/dashboard/main-event/wahana-seni',
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
