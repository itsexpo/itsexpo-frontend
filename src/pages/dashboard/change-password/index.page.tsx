import { useMutation } from '@tanstack/react-query';
import { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import Button from '@/components/buttons/Button';
import PasswordInput from '@/components/forms/PasswordInput';
import withAuth from '@/components/hoc/withAuth';
import ButtonLink from '@/components/links/ButtonLink';
import NextImage from '@/components/NextImage';
import SEO from '@/components/SEO';
import Typography from '@/components/typography/Typography';
import useMutationToast from '@/hooks/toast/useMutationToast';
import DashboardLayout from '@/layouts/dashboard/DashboardLayout';
import api from '@/lib/api';
import clsxm from '@/lib/clsxm';
import ChangePasswordBackground from '@/pages/dashboard/change-password/container/ChangePasswordBackground';
import useAuthStore from '@/store/useAuthStore';
import { ChangePassword } from '@/types/entities/change-password';

export default withAuth(ChangePasswordPage, []);

function ChangePasswordPage() {
  const methods = useForm<ChangePassword>();
  const { handleSubmit } = methods;
  const [isSuccess, setSuccess] = useState(false);

  const user = useAuthStore.useUser();

  const { mutate, isLoading } = useMutationToast<void, ChangePassword>(
    useMutation(async (data) => {
      const res = await api.post('/change_password', {
        email: user?.email,
        ...data,
      });
      return res;
    })
  );

  const changePassword = (data: ChangePassword) =>
    mutate(data, {
      onSuccess: () => setSuccess(true),
    });

  return (
    <DashboardLayout>
      <SEO title='Change Password' />
      <main>
        <section className='relative min-h-screen flex flex-col justify-center px-8 md:px-20 py-8 md:py-32 overflow-x-hidden'>
          <ChangePasswordBackground />

          <div className='flex flex-col justify-center'>
            {/* Card */}
            <div className='flex flex-row justify-center items-center'>
              <NextImage
                src='/change-password/left-wing.png'
                alt='left wing'
                width='281'
                height='594'
                layout='fixed'
                priority={true}
                className='hidden md:block translate-x-8'
              />
              {/* Form and Message */}
              <div
                className={clsxm(
                  'relative flex flex-col w-full md:w-2/5',
                  'md:min-w-[400px] max-w-[430px] md:h-[535px]',
                  'px-7 py-7 md:py-10 bg-typo-white',
                  'rounded-3xl md:shadow-md items-center'
                )}
              >
                {!isSuccess && (
                  <FormProvider {...methods}>
                    <form
                      onSubmit={handleSubmit(changePassword)}
                      className='w-full h-full flex flex-col space-y-10 md:space-y-0 md:justify-between items-center'
                    >
                      <div>
                        <Typography
                          variant='h4'
                          className='font-primary leading-none text-4xl'
                        >
                          Ubah Kata Sandi
                        </Typography>
                      </div>
                      <div className='flex flex-col space-y-8 md:space-y-6 w-full'>
                        <PasswordInput
                          id='current_password'
                          label='Kata Sandi Sekarang'
                          placeholder='Kata Sandi Sekarang'
                          validation={{
                            required: 'Kata sandi sekarang wajib diisi',
                          }}
                        />
                        <PasswordInput
                          id='new_password'
                          label='Kata Sandi Baru'
                          placeholder='Kata Sandi Baru'
                          validation={{
                            required: 'Kata sandi Baru wajib diisi',
                          }}
                        />
                        <PasswordInput
                          id='re_password'
                          label='Konfirmasi Kata Sandi Baru'
                          placeholder='Konfirmasi Kata Sandi Baru'
                          validation={{
                            required: 'Konfirmasi kata sandi baru wajib diisi',
                          }}
                        />
                      </div>
                      <Button
                        type='submit'
                        variant='green'
                        size='large'
                        className='w-full'
                        isLoading={isLoading}
                      >
                        Simpan
                      </Button>
                    </form>
                  </FormProvider>
                )}
                {isSuccess && (
                  <div>
                    <div className='flex flex-col items-center space-y-6 md:space-y-10'>
                      <Typography
                        variant='h4'
                        className='font-primary leading-none text-3xl'
                      >
                        Ubah Kata Sandi
                      </Typography>
                      <div className='md:px-6'>
                        <Typography
                          variant='c'
                          className='font-medium text-justify'
                        >
                          Kata sandi akun Anda telah&nbsp;
                          <span className='text-success-600'>
                            berhasil diubah
                          </span>{' '}
                          dan direset untuk keamanan akun Anda. Kamu akan
                          diarahkan kembali ke halaman masuk. Jika Anda
                          mengalami masalah atau kesulitan dalam masuk ke akun
                          Anda, jangan ragu untuk menghubungi tim dukungan kami
                          untuk meminta bantuan
                        </Typography>
                      </div>
                      <ButtonLink
                        href='/dashboard/my'
                        variant='green'
                        size='base'
                        className='w-full md:w-2/5'
                      >
                        Selesai
                      </ButtonLink>
                    </div>

                    <div className='hidden md:block'>
                      <NextImage
                        src='/change-password/wayang.png'
                        alt='wayang'
                        width='119'
                        height='127'
                        priority={true}
                        className='absolute left-0 bottom-0'
                        imgClassName='rounded-bl-3xl'
                      />
                      <NextImage
                        src='/change-password/wayang.png'
                        alt='wayang'
                        width='119'
                        height='127'
                        priority={true}
                        className='absolute right-0 bottom-0'
                        imgClassName='rounded-bl-3xl -scale-x-[1]'
                      />
                    </div>
                  </div>
                )}
              </div>
              <NextImage
                src='/change-password/right-wing.png'
                alt='right wing'
                width='265'
                height='594'
                priority={true}
                layout='fixed'
                className='hidden md:block -translate-x-8'
              />
            </div>
          </div>
        </section>
      </main>
    </DashboardLayout>
  );
}
