import Breadcrumb from '@/components/Breadcrumb';
import withAuth from '@/components/hoc/withAuth';
import Typography from '@/components/typography/Typography';
import DashboardLayout from '@/layouts/dashboard/DashboardLayout';
import clsxm from '@/lib/clsxm';
import TampilanAwal from '@/pages/dashboard/main-event/wahana-seni/container/TampilanAwal';

export default withAuth(WahanaSeniDashboardPage, [], true);

function WahanaSeniDashboardPage() {
  return (
    <DashboardLayout className='bg-typo-surface'>
      <div className='dashboard-layout min-h-screen'>
        <header>
          <div
            className={clsxm(
              'flex flex-col-reverse items-start',
              'md:flex-row justify-between md:items-center'
            )}
          >
            <Typography variant='h5' className='font-bold'>
              Sayembara Karya Mahasiswa
            </Typography>
            <Breadcrumb crumbs={['/dashboard/main-event/wahana-seni']} />
          </div>
        </header>
        <main className='my-8'>
          <TampilanAwal />
        </main>
      </div>
    </DashboardLayout>
  );
}
