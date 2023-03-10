import * as React from 'react';

import Breadcrumb from '@/components/Breadcrumb';
import withAuth from '@/components/hoc/withAuth';
import Loading from '@/components/Loading';
import Typography from '@/components/typography/Typography';
import DashboardLayout from '@/layouts/dashboard/DashboardLayout';
import FormPendaftaran from '@/pages/dashboard/pre-event/jurnalistik/container/PendaftaranForm';
import useAuthStore from '@/store/useAuthStore';

export default withAuth(PendaftaranJurnalistikDashboardPage, [
  'jurnalistik_ketua.store',
  'jurnalistik_member.store',
]);

function PendaftaranJurnalistikDashboardPage() {
  const user = useAuthStore.useUser();

  // TODO: Jika Belum Mendaftar Lomba Jurnalistik
  if (!user) {
    return <Loading />;
  } else
    return (
      <DashboardLayout>
        <div className='dashboard-layout min-h-screen'>
          <header className=''>
            <div className='flex justify-between items-center'>
              <Typography variant='h5' className='font-bold'>
                Jurnalistik
              </Typography>
              <Breadcrumb
                crumbs={[
                  '/dashboard/pre-event/jurnalistik',
                  '/dashboard/pre-event/jurnalistik/pendaftaran',
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
}
