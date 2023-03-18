import { useRouter } from 'next/router';
import * as React from 'react';

import Breadcrumb from '@/components/Breadcrumb';
import withAuth from '@/components/hoc/withAuth';
import Loading from '@/components/Loading';
import Typography from '@/components/typography/Typography';
import DashboardLayout from '@/layouts/dashboard/DashboardLayout';
import FormPendaftaran from '@/pages/dashboard/pre-event/kti/container/PendaftaranForm';
import useAuthStore from '@/store/useAuthStore';

export default withAuth(PendaftaranKTIDashboardPage, []);

function PendaftaranKTIDashboardPage() {
  const user = useAuthStore.useUser();
  const router = useRouter();

  if (user?.pre_event[1].KaryaTulisIlmiah.status === true) {
    router.push('/dashboard/pre-event/kti');
  }

  if (!user) {
    return <Loading />;
  } else if (user?.pre_event[1].KaryaTulisIlmiah.status === false) {
    return (
      <DashboardLayout>
        <div className='dashboard-layout min-h-screen'>
          <header className=''>
            <div className='flex justify-between items-center'>
              <Typography variant='h5' className='font-bold'>
                Pendaftaran
              </Typography>
              <Breadcrumb
                crumbs={[
                  '/dashboard/pre-event/kti',
                  '/dashboard/pre-event/kti/pendaftaran',
                ]}
              />
            </div>
          </header>
          <main>
            <FormPendaftaran />
          </main>
        </div>
      </DashboardLayout>
    );
  } else {
    return <Loading />;
  }
}
