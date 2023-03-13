import { useRouter } from 'next/router';
import * as React from 'react';

import DashboardLayout from '@/layouts/dashboard/DashboardLayout';

export default function JoinTeamRobotik() {
  const router = useRouter();

  // eslint-disable-next-line unused-imports/no-unused-vars
  const { query } = router;

  return (
    <DashboardLayout>
      <header className='dashboard-layout'></header>
      <div className='dashboard-layout'></div>
    </DashboardLayout>
  );
}
