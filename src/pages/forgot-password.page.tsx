import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import * as React from 'react';
import { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import Button from '@/components/buttons/Button';
import Input from '@/components/forms/Input';
import PasswordInput from '@/components/forms/PasswordInput';
import withAuth from '@/components/hoc/withAuth';
import UnstyledLink from '@/components/links/UnstyledLink';
import NextImage from '@/components/NextImage';
import SEO from '@/components/SEO';
import Typography from '@/components/typography/Typography';
import { REG_EMAIL } from '@/constant/regex';
import useMutationToast from '@/hooks/toast/useMutationToast';
import Layout from '@/layouts/Layout';
import api from '@/lib/api';
import {
  ForgotPassword,
  ForgotPasswordRequest,
} from '@/types/entities/forgot-password';
import { ExtractTypeForm } from '@/types/helper';

export default withAuth(ForgotPasswordPage, 'auth');
function ForgotPasswordPage() {
  // Query methods
  const router = useRouter();
  const { token } = router.query;

  // Form methods
  const methods =
    useForm<ExtractTypeForm<ForgotPassword, ForgotPasswordRequest>>();
  const { handleSubmit } = methods;
  const [email, setEmail] = useState('');

  // Request Token Change Password
  const {
    mutate: requestForgotPassword,
    isLoading: requestForgotPasswordLoading,
  } = useMutationToast<void, ForgotPasswordRequest>(
    useMutation((data) => {
      const res = api.post('/forgot_password/request', data);
      return res;
    })
  );

  const reqForgotPassword = (_data: ForgotPasswordRequest) => {
    const data = {
      email: _data.email,
    } as ForgotPasswordRequest;

    requestForgotPassword(data, {
      onSuccess: () => setEmail(data.email),
    });
  };
  // End Request Token Change Password

  // Change Password
  const { mutate: changePassword, isLoading: changePasswordisLoading } =
    useMutationToast<void, ForgotPassword>(
      useMutation((data) => {
        const res = api.post('/forgot_password/change', data);
        return res;
      })
    );

  const onChangePassword = (_data: ForgotPassword) => {
    const data = {
      password: _data.password,
      token,
    } as ForgotPassword;
    changePassword(data, {
      onSuccess: () => setTimeout(() => router.replace('/login'), 1000),
    });
  };
  // End Change Password

  return (
    <Layout withNavbar={false} withFooter={false}>
      <SEO title='Forgot Password' />
      <main>
        <section className='min-h-screen items-stretch font-secondary'>
          {/* Illustration Section */}
          <div className='hidden md:block w-7/12 max-w-[calc(100%-400px)] min-h-screen bg-forgot-password fixed'>
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
              className='absolute w-1/2 right-0 bottom-0 '
              imgClassName='object-contain object-right-bottom'
            />
            <NextImage
              src='/signup/pegunungan.png'
              alt='signup illustration mountanus'
              width='837'
              height='130'
              priority={true}
              className='absolute w-full bottom-0'
              imgClassName='max-h-full min-h-full object-bottom'
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
            {token && (
              <FormProvider {...methods}>
                {/* Form view */}
                <form
                  onSubmit={handleSubmit(onChangePassword)}
                  className='w-full flex flex-col space-y-7'
                >
                  <div className='w-full flex flex-col'>
                    <Typography variant='h5' className='font-semibold'>
                      Atur Ulang Kata Sandi
                    </Typography>
                  </div>

                  <div className='w-full flex flex-col space-y-4'>
                    <PasswordInput
                      id='password'
                      label='Password'
                      placeholder='Masukkan Password'
                      validation={{
                        required: 'Password wajib diisi',
                      }}
                    />
                  </div>

                  <div className='flex flex-col space-y-4'>
                    <Button
                      type='submit'
                      variant='green'
                      size='base'
                      className='py-3'
                      isLoading={changePasswordisLoading}
                    >
                      Ubah Kata Sandi
                    </Button>
                  </div>
                </form>
              </FormProvider>
            )}
            {!token && email && (
              <div className='w-full flex flex-col space-y-10'>
                {/* Activate account view */}
                <div className='flex flex-col'>
                  <Typography variant='h5' className='font-semibold'>
                    Periksa Email Anda
                  </Typography>
                  <Typography variant='c' className='font-medium mt-2'>
                    Anda akan menerima tautan di email yang Anda berikan dan
                    memungkinkan Anda mengatur ulang kata sandi akun Anda.
                  </Typography>
                  <Typography variant='c' className='font-bold mt-4'>
                    {email}
                  </Typography>
                  <Typography variant='c' className='font-medium mt-4'>
                    Jika Anda tidak melihat email tersebut, periksa tempat lain
                    yang mungkin ada, seperti folder sampah, spam, sosial, atau
                    lainnya.
                  </Typography>
                </div>
                <div className='flex flex-col items-center justify-center space-y-4'>
                  <div className='flex flex-row space-x-2 justify-center'>
                    <Typography variant='c'>Kembali ke</Typography>
                    <button onClick={() => setEmail('')}>
                      <Typography
                        variant='c'
                        className='font-semibold underline underline-offset-2 text-success-500 hover:text-success-600'
                      >
                        Atur Ulang Kata Sandi
                      </Typography>
                    </button>
                    <Typography variant='c'>atau</Typography>
                    <Typography variant='c'>
                      <UnstyledLink
                        href='/login'
                        className='font-semibold underline underline-offset-2 text-success-500 hover:text-success-600'
                      >
                        Masuk
                      </UnstyledLink>
                    </Typography>
                  </div>
                </div>
              </div>
            )}
            {!token && !email && (
              <FormProvider {...methods}>
                {/* Form view */}
                <form
                  onSubmit={handleSubmit(reqForgotPassword)}
                  className='w-full flex flex-col space-y-7'
                >
                  <div className='w-full flex flex-col'>
                    <Typography variant='h5' className='font-semibold'>
                      Atur Ulang Kata Sandi
                    </Typography>
                    <Typography variant='p' color='secondary'>
                      Isi kolom di bawah ini untuk atur ulang kata sandi
                    </Typography>
                  </div>

                  <div className='w-full flex flex-col space-y-4'>
                    <Input
                      id='email'
                      label='Email'
                      type='email'
                      placeholder='Masukkan Email'
                      validation={{
                        required: 'Email wajib diisi',
                        pattern: {
                          value: REG_EMAIL,
                          message: 'Alamat email tidak valid',
                        },
                      }}
                    />
                  </div>

                  <div className='flex flex-col space-y-4'>
                    <Button
                      type='submit'
                      variant='green'
                      size='base'
                      className='py-3'
                      isLoading={requestForgotPasswordLoading}
                    >
                      Kirim
                    </Button>
                    <div className='flex flex-row space-x-2 justify-center'>
                      <Typography variant='c'>
                        Ingat kata sandi Anda?
                      </Typography>
                      <Typography variant='c'>
                        <UnstyledLink
                          href='/login'
                          className='font-semibold underline underline-offset-2 text-success-500 hover:text-success-600'
                        >
                          Masuk
                        </UnstyledLink>
                      </Typography>
                    </div>
                  </div>
                </form>
              </FormProvider>
            )}
          </div>
        </section>
      </main>
    </Layout>
  );
}
