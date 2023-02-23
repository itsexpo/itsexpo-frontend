import * as React from 'react';

import withAuth from '@/components/hoc/withAuth';
import DashboardLayout from '@/layouts/dashboard/DashboardLayout';
import ComingSoon from '@/pages/coming-soon/components/coming-soon';

export default withAuth(DashboardUserPage, 'USER');

function DashboardUserPage() {
  return (
    <DashboardLayout>
      <div className='flex items-center justify-center h-screen'>
        <div className='w-1/2 text-center'>
          <ComingSoon />
        </div>
      </div>
    </DashboardLayout>
  );
}
