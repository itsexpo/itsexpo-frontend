import * as React from 'react';

import withAuth from '@/components/hoc/withAuth';
import Typography from '@/components/typography/Typography';
import { MainEventBannerContent } from '@/contents/dashboard/main-event/TampilanAwal';
import { PreEventBannerContent } from '@/contents/dashboard/TampilanAwal';
import DashboardLayout from '@/layouts/dashboard/DashboardLayout';
import MainEventBanner from '@/pages/dashboard/main-event/components/MainEventBanner';
import PreEventBanner from '@/pages/dashboard/pre-event/components/PreEventBanner';

export default withAuth(DashboardUserPage, 'USER');

function DashboardUserPage() {
  return (
    <DashboardLayout className='bg-typo-surface'>
      <div className='dashboard-layout min-h-screen'>
        <header className='mt-10'>
          <div className='flex flex-col items-start'>
            <Typography variant='b1' className='font-medium text-success-600'>
              ITS EXPO 2023
            </Typography>
            <Typography variant='h5' className='font-bold'>
              Dashboard
            </Typography>
          </div>
        </header>
        <main className='mt-6'>
          <div className='bg-typo-white w-full p-4 rounded-xl'>
            <Typography variant='h6' className='font-bold'>
              Pre Event
            </Typography>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-6'>
              {PreEventBannerContent.map(({ ...v }, i) => (
                <PreEventBanner {...v} key={i} />
              ))}
            </div>
          </div>
        </main>
        <main className='mt-6 mb-4'>
          <div className='bg-typo-white w-full p-4 rounded-xl'>
            <Typography variant='h6' className='font-bold'>
              Main Event
            </Typography>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-6'>
              {MainEventBannerContent.map(({ ...v }, i) => (
                <MainEventBanner {...v} key={i} />
              ))}
            </div>
          </div>
        </main>
      </div>
    </DashboardLayout>
  );
}
