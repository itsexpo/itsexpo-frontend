import * as React from 'react';

import withAuth from '@/components/hoc/withAuth';

export default withAuth(AnnouncementDashboardPage, []);

function AnnouncementDashboardPage() {
  return <div>Announcement</div>;
}
