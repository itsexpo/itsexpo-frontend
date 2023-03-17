import * as React from 'react';

import Breadcrumb from '@/components/Breadcrumb';
import withAuth from '@/components/hoc/withAuth';
import Typography from '@/components/typography/Typography';
import DashboardLayout from '@/layouts/dashboard/DashboardLayout';
import TampilanAwal from '@/pages/dashboard/pre-event/robotik/container/TampilanAwal';
import useAuthStore from '@/store/useAuthStore';

export default withAuth(RobotikDashboardPage, []);

function RobotikDashboardPage() {
  const user = useAuthStore.useUser();

  return (
    <DashboardLayout className='bg-typo-surface'>
      <div className='dashboard-layout min-h-screen'>
        <header className='flex justify-between items-center'>
          <Typography
            as='h5'
            variant='h5'
            className='font-bold text-typo-primary'
          >
            Robot In Action
          </Typography>
          <Breadcrumb
            crumbs={['/dashboard/pre-event/robotik']}
            className='hidden md:block'
          />
        </header>
        <main className='mt-8'>{user && <TampilanAwal user={user} />}</main>
      </div>
    </DashboardLayout>
  );
}
