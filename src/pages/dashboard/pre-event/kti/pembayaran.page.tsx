import * as React from 'react';

import Breadcrumb from '@/components/Breadcrumb';
import withAuth from '@/components/hoc/withAuth';
import Typography from '@/components/typography/Typography';
import DashboardLayout from '@/layouts/dashboard/DashboardLayout';
import FormPembayaranKTI from '@/pages/dashboard/pre-event/kti/container/PembayaranFormKTI';

export default withAuth(PembayaranKTI, []);

function PembayaranKTI() {
  return (
    <DashboardLayout>
      <div className='dashboard-layout min-h-screen'>
        <header className=''>
          <div className='flex justify-between items-center'>
            <Typography variant='h5' as='h5' className='font-bold'>
              Pembayaran
            </Typography>
            <Breadcrumb
              crumbs={[
                '/dashboard/pre-event/kti',
                '/dashboard/pre-event/kti/main',
                '/dashboard/pre-event/kti/pembayaran',
              ]}
            />
          </div>
        </header>
        <main>
          <div className='grid grid-rows-2 md:grid-cols-6 mt-4 gap-6'>
            <FormPembayaranKTI />
            <div className='col-span-6 md:col-span-2 h-fit bg-navy-100 shadow-pendaftaran p-4 rounded-xl'>
              <Typography variant='p' className='font-normal text-navy-800'>
                PEMBAYARAN KARYA TULIS ILMIAH
              </Typography>
              <br />
              <Typography variant='p' className='font-normal text-navy-800'>
                BCA: 0882336547 (Nur Azizah)
              </Typography>
              <Typography variant='p' className='font-normal text-navy-800'>
                MANDIRI: 1400020290830 (Adam Alzakky)
              </Typography>
              <Typography variant='p' className='font-normal text-navy-800'>
                GOPAY: 085259659337 (Arika Nur Indrayani)
              </Typography>
            </div>
          </div>
        </main>
      </div>
    </DashboardLayout>
  );
}
// export const getServerSideProps = async (
//   context: GetServerSidePropsContext
// ) => {
//   setApiContext(context);
//   try {
//     const res = await api.get<ApiReturn<PembayaranPreEvent>>(
//       '/pre_event/pembayaran/kti'
//     );
//     return {
//       props: {
//         data: res.data,
//       },
//     };
//   } catch (err) {
//     if ((err as AxiosError<ApiError>)?.response?.data?.code === 6009) {
//       return {
//         props: {
//           data: (err as AxiosError<ApiReturn<{ payment_id: string }>>)?.response
//             ?.data,
//         },
//       };
//     }
//     if ((err as AxiosError<ApiError>)?.response?.data?.code === 6060) {
//       return {
//         redirect: {
//           destination: '/dashboard/pre-event/kti/main',
//           permanent: false,
//         },
//       };
//     }
//     return {
//       redirect: {
//         permanent: false,
//         destination: '/500',
//       },
//     };
//   }
// };
