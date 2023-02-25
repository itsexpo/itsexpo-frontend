import * as React from 'react';

import withAuth from '@/components/hoc/withAuth';
import DashboardLayout from '@/layouts/dashboard/DashboardLayout';

export default withAuth(JurnalistikDashboardPage, []);

function JurnalistikDashboardPage() {
  return (
    <DashboardLayout>
      <div>
        <p>Hallo</p>
      </div>
    </DashboardLayout>
  );
}
