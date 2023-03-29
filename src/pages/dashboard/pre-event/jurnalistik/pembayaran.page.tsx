import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';
import { useRouter } from 'next/router';
import * as React from 'react';

import Breadcrumb from '@/components/Breadcrumb';
import Button from '@/components/buttons/Button';
import withAuth from '@/components/hoc/withAuth';
import Typography from '@/components/typography/Typography';
import useMutationToast from '@/hooks/toast/useMutationToast';
import DashboardLayout from '@/layouts/dashboard/DashboardLayout';
import api, { setApiContext } from '@/lib/api';
import FormPembayaran from '@/pages/dashboard/pre-event/jurnalistik/container/PembayaranJurnalisitkForm';
import { ApiError, ApiReturn } from '@/types/api';
import { PembayaranPreEvent } from '@/types/entities/pre-event/pembayaran';

export default withAuth(PembayaranJurnalistik, [
  'pembayaran_jurnalistik.store',
]);

function PembayaranJurnalistik({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const router = useRouter();

  const { mutate: updatePembayaran, isLoading: isUpdatePembayaranLoading } =
    useMutationToast<void, { payment_id: string }>(
      useMutation(
        (data) => {
          return api.put('/pre_event/pembayaran', data);
        },
        {
          onSuccess: () => router.push(router.asPath),
        }
      )
    );

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
                '/dashboard/pre-event/jurnalistik',
                '/dashboard/pre-event/jurnalistik/main',
                '/dashboard/pre-event/jurnalistik/pembayaran',
              ]}
            />
          </div>
        </header>
        {data && data?.code !== 6009 ? (
          <main>
            <div className='grid grid-rows-2 md:grid-cols-6 mt-4 gap-6'>
              <FormPembayaran
                data={(data as ApiReturn<PembayaranPreEvent>).data}
              />
              <div className='col-span-6 md:col-span-2 h-fit bg-navy-100 shadow-pendaftaran p-4 rounded-xl'>
                <Typography variant='p' className='font-normal text-navy-800'>
                  PEMBAYARAN JURNALISTIK
                </Typography>
                <br />
                <Typography variant='p' className='font-normal text-navy-800'>
                  BRI: 0908 0104 5864 532 (Navisa Salsabila)
                </Typography>
                <Typography variant='p' className='font-normal text-navy-800'>
                  BNI: 1299871140 (Navisa Salsabila)
                </Typography>
                <Typography variant='p' className='font-normal text-navy-800'>
                  Shopeepay: 087871529729(Navisa Salsabila)
                </Typography>
                <Typography variant='p' className='font-normal text-navy-800'>
                  Dana: 087871529729 (Navisa Salsabila)
                </Typography>
              </div>
            </div>
          </main>
        ) : (
          <main>
            <div className='w-full grid md:grid-cols-2 grid-cols-1'>
              <div className='bg-white shadow-pendaftaran p-6 rounded-lg mt-4'>
                <Typography variant='p' as='p' className='text-justify'>
                  Mohon maaf anda tidak dapat melakukan pembayaran karena waktu
                  sudah pembayaran anda sudah habis atau kuota sudah terpenuhi,
                  silhkan tekan tombol dibawah ini untuk pengajuan pembayaran
                  kembali
                </Typography>

                {data && (
                  <Button
                    variant='green'
                    color='primary'
                    className='w-fit mt-4'
                    isLoading={isUpdatePembayaranLoading}
                    onClick={() =>
                      updatePembayaran({
                        payment_id: (data as ApiReturn<{ payment_id: string }>)
                          .data.payment_id,
                      })
                    }
                  >
                    Lakukan Pembayaran Ulang
                  </Button>
                )}
              </div>
            </div>
          </main>
        )}
      </div>
    </DashboardLayout>
  );
}
export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  setApiContext(context);
  try {
    const res = await api.get<ApiReturn<PembayaranPreEvent>>(
      '/pre_event/pembayaran/jurnalistik'
    );
    return {
      props: {
        data: res.data,
      },
    };
  } catch (err) {
    if (
      (err as AxiosError<ApiReturn<{ payment_id: string }>>)?.response?.data
        ?.code === 6009
    ) {
      return {
        props: {
          data: (err as AxiosError<ApiError>)?.response?.data,
        },
      };
    }

    if ((err as AxiosError<ApiError>)?.response?.data?.code === 6060) {
      return {
        redirect: {
          destination: '/dashboard/pre-event/jurnalistik/main',
          permanent: false,
        },
      };
    }
    return {
      redirect: {
        permanent: false,
        destination: '/500',
      },
    };
  }
};
