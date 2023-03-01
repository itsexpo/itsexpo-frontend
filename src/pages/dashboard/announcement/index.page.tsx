import * as React from 'react';

import withAuth from '@/components/hoc/withAuth';
import DashboardLayout from '@/layouts/dashboard/DashboardLayout';

export default withAuth(AnnouncementPage, []);

function AnnouncementPage() {
  return (
    <DashboardLayout>
      <h1>Announcement</h1>
    </DashboardLayout>
  );
}
