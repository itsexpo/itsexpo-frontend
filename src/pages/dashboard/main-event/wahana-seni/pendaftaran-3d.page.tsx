import * as React from 'react';

import Breadcrumb from '@/components/Breadcrumb';
import withAuth from '@/components/hoc/withAuth';
import SEO from '@/components/SEO';
import Typography from '@/components/typography/Typography';
import DashboardLayout from '@/layouts/dashboard/DashboardLayout';
import FormPendaftaran3D from '@/pages/dashboard/main-event/wahana-seni/container/Pendaftaran3DForm';

export default withAuth(PendaftaranWahanaSeni3DPage, ['wahana_3d.store']);

function PendaftaranWahanaSeni3DPage() {
  return (
    <DashboardLayout className='bg-typo-surface'>
      <SEO title='Pendaftaran Wahana Seni 3D' />
      <div className='dashboard-layout min-h-screen space-y-6 pb-6'>
        <header className='flex justify-between items-center'>
          <Typography as='h5' variant='h5' className='font-bold'>
            Pendaftaran 3D
          </Typography>
          <Breadcrumb
            crumbs={[
              '/dashboard/main-event/wahana-seni',
              '/dashboard/main-event/wahana-seni/pendaftaran-3d',
            ]}
          />
        </header>
        <main>
          <FormPendaftaran3D />
        </main>
      </div>
    </DashboardLayout>
  );
}
