import withAuth from "@/components/hoc/withAuth";
import DashboardLayoutAdmin from "@/layouts/dashboard/DashboardLayoutAdmin";

export default withAuth(AdminPage, "public");

function AdminPage() {
  return (
    <DashboardLayoutAdmin>
      <h1>Admin Page</h1>
    </DashboardLayoutAdmin>
  );
}
