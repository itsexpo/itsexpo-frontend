import clsx from 'clsx';
import * as React from 'react';
import { BiFileBlank } from 'react-icons/bi';
import { BsFileSpreadsheet } from 'react-icons/bs';

import Button from '@/components/buttons/Button';
import withAuth from '@/components/hoc/withAuth';
import Typography from '@/components/typography/Typography';
import DashboardLayout from '@/layouts/dashboard/DashboardLayout';
import { TableWahanaSeni2D } from '@/pages/dashboard/admin/main-event/wahana-seni/components/TableWahanaSeni2D';
import { TableWahanaSeni3D } from '@/pages/dashboard/admin/main-event/wahana-seni/components/TableWahanaSeni3D';

export default withAuth(AdminWahanaSeniDashboardPage, []);

function AdminWahanaSeniDashboardPage() {
  const [karyaSeni, setKaryaSeni] = React.useState(0);

  return (
    <DashboardLayout className='bg-typo-surface '>
      <main>
        <section className='dashboard-layout'>
          <div className='min-h-screen flex flex-col gap-6 pb-20'>
            <div className='flex gap-x-4 p-2 bg-typo-light rounded-lg'>
              <Button
                variant='basic'
                onClick={() => setKaryaSeni(0)}
                className={clsx([
                  karyaSeni === 0 && 'border shadow-sm bg-white',
                  'w-full text-typo-primary hover:bg-white font-secondary',
                ])}
              >
                Karya Seni 2D
              </Button>
              <Button
                variant='basic'
                onClick={() => setKaryaSeni(1)}
                className={clsx([
                  karyaSeni === 1 && 'border shadow-sm bg-white',
                  ' w-full text-typo-primary hover:bg-white font-secondary',
                ])}
              >
                Karya Seni 3D
              </Button>
            </div>
            <div>
              <Typography variant='b1' className='font-medium text-success-600'>
                ITS EXPO 2023
              </Typography>
              <div className='flex justify-between md:flex-row flex-col items-center'>
                <Typography
                  as='h5'
                  variant='h5'
                  className='font-bold text-typo-primary mr-auto'
                >
                  {karyaSeni === 0 ? 'Karya Seni 2D' : 'Karya Seni 3D'}
                </Typography>
                <div className='flex gap-x-4 w-full md:w-[405px]'>
                  <Button
                    variant='outline'
                    leftIcon={BsFileSpreadsheet}
                    leftIconClassName='text-typo-secondary'
                    className='bg-white w-1/2'
                  >
                    Download as Excel
                  </Button>
                  <Button
                    variant='outline'
                    leftIconClassName='text-typo-secondary'
                    leftIcon={BiFileBlank}
                    className='bg-white w-1/2'
                  >
                    Download as PDF
                  </Button>
                </div>
              </div>
            </div>
            {karyaSeni === 0 && (
              <TableWahanaSeni2D baseURL='/admin/2d' contest='2d' />
            )}
            {karyaSeni === 1 && (
              <TableWahanaSeni3D baseURL='/admin/3d' contest='3d' />
            )}
          </div>
        </section>
      </main>
    </DashboardLayout>
  );
}
