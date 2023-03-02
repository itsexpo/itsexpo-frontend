import * as React from 'react';

import Breadcrumb from '@/components/Breadcrumb';
import withAuth from '@/components/hoc/withAuth';
import ButtonLink from '@/components/links/ButtonLink';
import Typography from '@/components/typography/Typography';
import DashboardLayout from '@/layouts/dashboard/DashboardLayout';
import useAuthStore from '@/store/useAuthStore';

export default withAuth(JurnalistikDashboardPage, []);

function JurnalistikDashboardPage() {
  const user = useAuthStore.useUser();

  return (
    <DashboardLayout>
      <div className='dashboard-layout min-h-screen'>
        <header className=''>
          <div className='flex justify-between items-center'>
            <Typography variant='h5' className='font-bold'>
              Jurnalistik
            </Typography>
            <Breadcrumb crumbs={['/dashboard/pre-event/jurnalistik']} />
          </div>
        </header>
        <main>
          {!user?.pre_event ? (
            <ButtonLink
              href='/dashboard/pre-event/jurnalistik/pendaftaran'
              className='bg-primary-500 hover:bg-primary-600 text-white'
            >
              Pendaftaran
            </ButtonLink>
          ) : (
            <p>Anda sudah mendaftar</p>
          )}
        </main>
      </div>
    </DashboardLayout>
  );
}
