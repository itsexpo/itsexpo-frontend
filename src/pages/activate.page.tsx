import { AxiosError } from 'axios';
import { GetServerSideProps } from 'next';

import ButtonLink from '@/components/links/ButtonLink';
import NextImage from '@/components/NextImage';
import SEO from '@/components/SEO';
import Typography from '@/components/typography/Typography';
import Layout from '@/layouts/Layout';
import api from '@/lib/api';
import { UserVerificationReturn } from '@/types/entities/user-verification';

export default function AccountActivationPage({
  data,
}: {
  data: UserVerificationReturn;
}) {
  return (
    <Layout withNavbar={false} withFooter={false}>
      <SEO title='Account Activation' />
      <main>
        <section className='min-h-screen items-stretch font-secondary'>
          {/* Illustration Section */}
          <div className='hidden md:block w-7/12 max-w-[calc(100%-400px)] h-screen bg-gradient-to-b from-warning-200 via-critical-100 to-critical-300 fixed'>
            <NextImage
              src='/signup/waru.png'
              alt='signup illustration spade'
              width='419'
              height='549'
              className='absolute w-2/5 left-0 bottom-0'
              imgClassName='max-h-full min-h-full object-contain object-left'
            />
            <NextImage
              src='/signup/wayang.png'
              alt='signup illustration wayang'
              width='606'
              height='829'
              priority={true}
              className='absolute w-1/2 right-0 bottom-0'
              imgClassName='object-contain object-right-bottom'
            />
            <NextImage
              src='/signup/pegunungan.png'
              alt='signup illustration mountanus'
              width='837'
              height='130'
              priority={true}
              className='absolute w-full bottom-0'
              imgClassName='object-bottom'
            />
            <NextImage
              src='/signup/cloud-left.png'
              alt='signup illustration cloud left'
              width='385'
              height='177'
              priority={true}
              className='absolute w-2/5 left-0 top-0'
              imgClassName='object-contain'
            />
            <NextImage
              src='/signup/cloud-right.png'
              alt='signup illustration cloud right'
              width='353'
              height='104'
              priority={true}
              className='absolute w-2/5 right-0 top-0'
              imgClassName='object-contain'
            />
          </div>
          <div className='w-full md:w-5/12 md:min-w-[400px] min-h-screen py-16 px-4 md:p-16 flex justify-center items-center bg-typo-white md:float-right'>
            {data.success && (
              <div className='w-full flex flex-col space-y-10'>
                <div className='flex flex-col'>
                  <Typography variant='h5' className='font-semibold'>
                    Aktivasi Akun
                  </Typography>
                  <Typography variant='b1' className='font-medium'>
                    Email anda telah&nbsp;
                    <span className='text-success-700'>diverifikasi</span> dan
                    akun anda telah&nbsp;
                    <span className='text-success-700'>diaktivasi</span>.
                  </Typography>
                </div>
                <ButtonLink
                  href='/login'
                  type='button'
                  variant='green'
                  size='base'
                  className='py-3'
                >
                  Selesai
                </ButtonLink>
              </div>
            )}
            {!data.success && (
              <div className='w-full flex flex-col space-y-10'>
                <div className='flex flex-col'>
                  <Typography variant='h5' className='font-semibold'>
                    Aktivasi Akun
                  </Typography>
                  <Typography variant='b1' className='font-medium'>
                    Email anda&nbsp;
                    <span className='text-critical-700'>gagal</span>{' '}
                    diverifikasi
                    {data.code === 1019 && ' karena sudah diaktivasi'}
                    {data.code === 422 && ' karena email tidak valid'}
                    {data.code === 1007 && ' karena token tidak valid'}.
                  </Typography>
                </div>
                <ButtonLink
                  href='/login'
                  type='button'
                  variant='red'
                  size='base'
                  className='py-3'
                >
                  Kembali
                </ButtonLink>
              </div>
            )}
          </div>
        </section>
      </main>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const email = context.query.email as string;
  const token = context.query.token as string;

  try {
    const res = await api.post(`/user_verification`, { email, token });
    return {
      props: {
        data: res.data,
      },
    };
  } catch (e) {
    const error = e as AxiosError;
    if (error.response?.data) {
      return {
        props: {
          data: error.response?.data,
        },
      };
    }
    return {
      props: {
        data: {
          success: false,
          code: 500,
          message: 'Internal Server Error',
        },
      },
    };
  }
};
