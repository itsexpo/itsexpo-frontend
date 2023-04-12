import * as React from 'react';

import Breadcrumb from '@/components/Breadcrumb';
import withAuth from '@/components/hoc/withAuth';
import Typography from '@/components/typography/Typography';
import DashboardLayout from '@/layouts/dashboard/DashboardLayout';
import FormPendaftaran2D from '@/pages/dashboard/main-event/wahana-seni/container/Pendaftaran2DForm';

export default withAuth(PendaftaranWahanaSeni3DPage, ['wahana_2d.store']);

function PendaftaranWahanaSeni3DPage() {
  return (
    <DashboardLayout className='bg-typo-surface'>
      <div className='dashboard-layout min-h-screen space-y-6'>
        <header className='flex flex-col md:flex-row justify-between items-start md:items-center'>
          <Typography as='h5' variant='h5' className='font-bold'>
            Pendaftaran 2D
          </Typography>
          <Breadcrumb
            crumbs={[
              '/dashboard/main-event/wahana-seni',
              '/dashboard/main-event/wahana-seni/pendaftaran-2d',
            ]}
          />
        </header>
        <main>
          <FormPendaftaran2D />
        </main>
      </div>
    </DashboardLayout>
  );
}
