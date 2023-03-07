import * as React from 'react';

import Breadcrumb from '@/components/Breadcrumb';
import Typography from '@/components/typography/Typography';
import DashboardLayout from '@/layouts/dashboard/DashboardLayout';
import FormPembayaran from '@/pages/dashboard/pre-event/jurnalistik/container/PembayaranForm';

const PembayaranPages = () => {
  return (
    <DashboardLayout>
      <div className='dashboard-layout min-h-screen'>
        <header className=''>
          <div className='flex justify-between items-center'>
            <Typography variant='h5' as='h5' className='font-bold'>
              Pembayaran
            </Typography>
            <Breadcrumb
              crumbs={[
                '/dashboard/pre-event/jurnalistik',
                '/dashboard/pre-event/jurnalistik/pembayaran',
              ]}
            />
          </div>
        </header>
        <main>
          <FormPembayaran />
        </main>
      </div>
    </DashboardLayout>
  );
};

export default PembayaranPages;
