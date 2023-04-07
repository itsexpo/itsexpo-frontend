import * as React from 'react';

import Breadcrumb from '@/components/Breadcrumb';
import Typography from '@/components/typography/Typography';
import DashboardLayout from '@/layouts/dashboard/DashboardLayout';
import FormPendaftaran3D from '@/pages/dashboard/main-event/wahana-seni/container/FormPendaftaran3D';

export default PendaftaranWahanaSeni3DPage;

function PendaftaranWahanaSeni3DPage() {
  return (
    <DashboardLayout className='bg-typo-surface'>
      <div className='dashboard-layout min-h-screen space-y-6'>
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
