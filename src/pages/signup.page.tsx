import { useMutation } from '@tanstack/react-query';
import { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import Button from '@/components/buttons/Button';
import Input from '@/components/forms/Input';
import PasswordInput from '@/components/forms/PasswordInput';
import SelectInput from '@/components/forms/SelectInput';
import withAuth from '@/components/hoc/withAuth';
import PrimaryLink from '@/components/links/PrimaryLink';
import UnstyledLink from '@/components/links/UnstyledLink';
import NextImage from '@/components/NextImage';
import SEO from '@/components/SEO';
import Typography from '@/components/typography/Typography';
import { REG_EMAIL, REG_PHONE } from '@/constant/regex';
import useMutationToast from '@/hooks/toast/useMutationToast';
import Layout from '@/layouts/Layout';
import api from '@/lib/api';
import { SignUp } from '@/types/entities/signup';
import {
  setResendEmailCookies,
  validateResendEmailCookies,
} from '@/utility/resend-email';

export default withAuth(SignupPage, 'auth');

function SignupPage() {
  const methods = useForm<SignUp>();
  const { handleSubmit } = methods;
  const [email, setEmail] = useState('');

  const { mutate: createUser, isLoading: createUserIsLoading } =
    useMutationToast<void, SignUp>(
      useMutation((data) => {
        const res = api.post('/create_user', data);
        return res;
      })
    );

  const { mutate: resendVerification, isLoading: resendVerificationIsLoading } =
    useMutationToast<void, string>(
      useMutation((data) => {
        const res = api.get(`/user_verification?email=${data}`);
        return res;
      })
    );

  const doCreateUser = (data: SignUp) => {
    createUser(data, {
      onSuccess: () => {
        setEmail(data.email);
        setResendEmailCookies();
      },
      onError: (error) => {
        if (error.response?.data.code == 1022) {
          setEmail(data.email);
        }
      },
    });
  };

  const doResendVerification = (data: string) => {
    if (!validateResendEmailCookies()) return false;
    resendVerification(data, {
      onSuccess: () => {
        setResendEmailCookies();
      },
    });
  };

  return (
    <Layout withNavbar={false} withFooter={false}>
      <SEO title='Sign Up' />
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
          <div className='w-full md:w-5/12 md:min-w-[400px] min-h-screen py-16 px-4 md:p-16 flex flex-col justify-center items-center bg-typo-white md:float-right'>
            <div className='w-full md:mb-10 mb-6'>
              <PrimaryLink href='/'>Ke Halaman Awal</PrimaryLink>
            </div>
            {email && (
              <div className='w-full flex flex-col space-y-10'>
                {/* Activate account view */}
                <div className='flex flex-col'>
                  <Typography variant='h5' className='font-semibold'>
                    Aktivasi Akun
                  </Typography>
                  <Typography variant='c' className='font-medium mt-2'>
                    Anda akan menerima tautan di email yang Anda berikan dan
                    memungkinkan Anda memverifikasi resmi akun Anda.
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
                <Button
                  type='button'
                  onClick={() => doResendVerification(email)}
                  variant='green'
                  size='base'
                  className='py-3'
                  isLoading={resendVerificationIsLoading}
                >
                  Kirim Ulang Tautan?
                </Button>
              </div>
            )}
            {!email && (
              <FormProvider {...methods}>
                {/* Form view */}
                <form
                  onSubmit={handleSubmit(doCreateUser)}
                  className='w-full flex flex-col space-y-10'
                >
                  <div className='w-full flex flex-col'>
                    <Typography variant='h5' className='font-semibold'>
                      Daftar
                    </Typography>
                    <Typography variant='p' color='secondary'>
                      Isi kolom di bawah ini untuk daftar
                    </Typography>
                  </div>

                  <div className='w-full flex flex-col space-y-4'>
                    <Input
                      id='name'
                      label='Nama'
                      type='text'
                      placeholder='Masukkan Nama'
                      validation={{
                        required: 'Nama wajib diisi',
                      }}
                    />
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
                    <PasswordInput
                      id='password'
                      label='Kata Sandi'
                      placeholder='Masukkan Kata Sandi'
                      validation={{ required: 'Kata sandi wajib diisi' }}
                    />
                    <Input
                      id='no_telp'
                      label='Nomor Telepon'
                      type='tel'
                      placeholder='Masukkan Nomor Telepon'
                      helperText='Nomor telepon harus diawali +62'
                      validation={{
                        required: 'Nomor telepon wajib diisi',
                        pattern: {
                          value: REG_PHONE,
                          message: 'Nomor telepon tidak valid',
                        },
                      }}
                    />
                    <SelectInput
                      id='status'
                      label='Status'
                      placeholder='Pilih Status'
                      validation={{ required: 'Status wajib diisi' }}
                    >
                      <option value='5'>Mahasiswa</option>
                      <option value='3'>SMP/Sederajat</option>
                      <option value='4'>SMA/Sederajat</option>
                      <option value='6'>Umum</option>
                    </SelectInput>
                  </div>

                  <div className='flex flex-col space-y-4'>
                    <Button
                      type='submit'
                      variant='green'
                      size='base'
                      className='py-3'
                      isLoading={createUserIsLoading}
                    >
                      Daftar
                    </Button>
                    <div className='flex flex-row space-x-2 justify-center'>
                      <Typography variant='c'>Sudah punya akun?</Typography>
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
