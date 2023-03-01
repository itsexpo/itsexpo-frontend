import * as React from 'react';

import withAuth from '@/components/hoc/withAuth';
import Loading from '@/components/Loading';
import DashboardLayout from '@/layouts/dashboard/DashboardLayout';
import FormPendaftaran from '@/pages/dashboard/pre-event/jurnalistik/container/form-pendaftaran';
import useAuthStore from '@/store/useAuthStore';

export default withAuth(JurnalistikDashboardPage, []);

function JurnalistikDashboardPage() {
  const user = useAuthStore.useUser();

  // TODO: Jika Belum Mendaftar Lomba Jurnalistik
  if (!user) {
    return <Loading />;
  } else if (user)
    return (
      <DashboardLayout>
        <div className='dashboard-layout'>
          <FormPendaftaran />
        </div>
      </DashboardLayout>
    );
  else {
    return (
      <DashboardLayout>
        <div className='dashboard-layout'>
          <p>Hallo</p>
        </div>
      </DashboardLayout>
    );
  }
}
