import React from 'react';

import Breadcrumb from '@/components/Breadcrumb';
import withAuth from '@/components/hoc/withAuth';
import Typography from '@/components/typography/Typography';
import DashboardLayout from '@/layouts/dashboard/DashboardLayout';
import PengumumanCard from '@/pages/dashboard/pre-event/jurnalistik/components/dashboard/PengumumanCard';
import DataDiriCard from '@/pages/dashboard/pre-event/robotik/components/dashboard/DataDiriCard';
import TeamCard from '@/pages/dashboard/pre-event/robotik/container/TeamCard';

export default withAuth(DashboardRobotikLineTracer, []);

function DashboardRobotikLineTracer() {
  return (
    <DashboardLayout>
      <header className='dashboard-layout'>
        <div className='flex justify-between items-center'>
          <Typography as='h5' variant='h5' className='font-bold'>
            Robot Line Tracer
          </Typography>
          <Breadcrumb
            crumbs={[
              '/dashboard/pre-event/robotik',
              '/dashboard/pre-event/robotik/line-tracer',
            ]}
          />
        </div>
      </header>
      <main className='dashboard-layout !pt-8 space-y-6 mb-8'>
        <PengumumanCard />
        <div className='grid grid-cols-1 md:grid-cols-2 gap-y-4 md:gap-y-0 gap-x-0 md:gap-x-4'>
          <TeamCard />
          <DataDiriCard />
        </div>
      </main>
    </DashboardLayout>
  );
}
