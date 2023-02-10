import * as React from 'react';

import withAuth from '@/components/hoc/withAuth';
import DashboardLayout from '@/layouts/dashboard/DashboardLayout';

export default withAuth(DashboardUserPage, 'USER');

function DashboardUserPage() {
  return (
    <DashboardLayout>
      <h1>Dashboard Layout</h1>
    </DashboardLayout>
  );
}
