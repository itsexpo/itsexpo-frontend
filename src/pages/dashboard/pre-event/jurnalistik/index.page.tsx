import * as React from 'react';

import Breadcrumb from '@/components/Breadcrumb';
import withAuth from '@/components/hoc/withAuth';
import Typography from '@/components/typography/Typography';
import DashboardLayout from '@/layouts/dashboard/DashboardLayout';
import TampilanAwal from '@/pages/dashboard/pre-event/jurnalistik/container/TampilanAwal';
import useAuthStore from '@/store/useAuthStore';

export default withAuth(JurnalistikDashboardPage, ['jurnalistik.index'], true);

function JurnalistikDashboardPage() {
  const user = useAuthStore.useUser();

  return (
    <DashboardLayout className='bg-typo-surface'>
      <div className='dashboard-layout min-h-screen'>
        <header className=''>
          <div className='flex justify-between items-center'>
            <Typography variant='h5' className='font-bold'>
              Journalistic
            </Typography>
            <Breadcrumb crumbs={['/dashboard/pre-event/jurnalistik']} />
          </div>
        </header>
        <main className='mt-8'>{user && <TampilanAwal user={user} />}</main>
      </div>
    </DashboardLayout>
  );
}
