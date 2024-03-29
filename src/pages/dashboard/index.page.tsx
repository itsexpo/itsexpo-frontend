import withAuth from '@/components/hoc/withAuth';
import DashboardLayout from '@/layouts/dashboard/DashboardLayout';

/**
 * Short
 *
 */

export default withAuth(DashboardAdminPage, 'ADMIN');

function DashboardAdminPage() {
  return (
    <DashboardLayout>
      <h1>Admin Page</h1>
    </DashboardLayout>
  );
}
