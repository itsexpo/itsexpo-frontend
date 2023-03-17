import * as React from 'react';

import Breadcrumb from '@/components/Breadcrumb';
import withAuth from '@/components/hoc/withAuth';
import Typography from '@/components/typography/Typography';
import DashboardLayout from '@/layouts/dashboard/DashboardLayout';
import TampilanAwal from '@/pages/dashboard/pre-event/kti/container/TampilanAwal';
import useAuthStore from '@/store/useAuthStore';

export default withAuth(KTIDashboardPage, []);

function KTIDashboardPage() {
  const user = useAuthStore.useUser();

  return (
    <DashboardLayout className='bg-typo-surface'>
      <div className='dashboard-layout min-h-screen'>
        <header className=''>
          <div className='flex justify-between items-center'>
            <Typography variant='h5' className='font-bold'>
              Karya Tulis Ilmiah
            </Typography>
            <Breadcrumb crumbs={['/dashboard/pre-event/kti']} />
          </div>
        </header>
        <main className='mt-8'>{user && <TampilanAwal user={user} />}</main>
      </div>
    </DashboardLayout>
  );
}
