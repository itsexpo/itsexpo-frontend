import Breadcrumb from '@/components/Breadcrumb';
import withAuth from '@/components/hoc/withAuth';
import Typography from '@/components/typography/Typography';
import DashboardLayout from '@/layouts/dashboard/DashboardLayout';
import clsxm from '@/lib/clsxm';
import PengumpulanKarya3D from '@/pages/dashboard/main-event/wahana-seni/container/PengumpulanKarya3D';

export default withAuth(WahanaSeniKarya3DPage, ['wahana_3d.store']);

function WahanaSeniKarya3DPage() {
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
              Pengumpulan Karya
            </Typography>
            <Breadcrumb
              crumbs={[
                '/dashboard/main-event/wahana-seni',
                '/dashboard/main-event/wahana-seni/karya',
              ]}
            />
          </div>
        </header>
        <main className='my-6'>
          <PengumpulanKarya3D />
        </main>
      </div>
    </DashboardLayout>
  );
}
