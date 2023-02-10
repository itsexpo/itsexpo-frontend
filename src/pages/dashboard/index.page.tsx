import withAuth from '@/components/hoc/withAuth';
import DashboardLayout from '@/layouts/dashboard/DashboardLayout';

/**
 * Short
 *
 */

export default withAuth(AdminPage, []);

function AdminPage() {
  return (
    <DashboardLayout>
      <h1>Admin Page</h1>
    </DashboardLayout>
  );
}
