import { useMutation } from '@tanstack/react-query';
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
import { setToken } from '@/lib/cookies';
import useAuthStore from '@/store/useAuthStore';
import { ApiReturn } from '@/types/api';
import { Login } from '@/types/entities/login';
import { LoginRespond } from '@/types/entities/user';

export default withAuth(LoginPage, 'auth');

function LoginPage() {
  const methods = useForm<Login>();
  const { handleSubmit } = methods;
  const login = useAuthStore.useLogin();

  const { mutate, isLoading } = useMutationToast<void, Login>(
    useMutation(async (data) => {
      const res = await api.post('/login_user', data);
      const { token } = res.data.data;
      setToken(token);

      const user = await api.get<ApiReturn<LoginRespond>>('/me');
      const permissions = user.data.data.permission;
      login({
        name: user.data.data.name,
        email: user.data.data.email,
        role_id: permissions.role_id,
        role: permissions.role,
        permissions: permissions.routes,
        token: token,
      });

      return res;
    })
  );

  const onSubmit = (data: Login) => mutate(data);

  return (
    <Layout withNavbar={false} withFooter={false}>
      <SEO title='Login' />
      <main>
        <section className='font-secondary'>
          {/* Illustration Section */}
          <div className='hidden md:block w-7/12 max-w-[calc(100%-400px)] h-screen fixed left-0 bg-warning-100'>
            <NextImage
              src='/login/background.png'
              alt='login illustration background'
              width='837'
              height='1024'
              className='absolute w-full h-full'
              imgClassName='max-h-full min-h-full object-cover'
            />
            <NextImage
              src='/login/supergrafis-2-1.png'
              alt='login illustration top left'
              width='586'
              height='586'
              priority={true}
              className='absolute w-3/4 h-3/5 top-0 left-0'
              imgClassName='max-h-full min-h-full object-contain object-left-top'
            />
            <NextImage
              src='/login/supergrafis-2-2.png'
              alt='login illustration bottom right'
              width='586'
              height='586'
              priority={true}
              className='absolute w-3/4 h-3/5 bottom-0 right-0'
              imgClassName='max-h-full min-h-full object-contain object-right-bottom'
            />
            <NextImage
              src='/login/supergrafis-1-1.png'
              alt='login illustration center'
              width='757'
              height='1071'
              priority={true}
              className='absolute w-11/12 h-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
              imgClassName='max-h-full min-h-full object-contain'
            />
          </div>

          {/* Form Section */}
          <div className='w-full md:w-5/12 md:min-w-[400px] min-h-screen float-right px-4 md:px-16 py-16 flex flex-col justify-center items-center bg-typo-white'>
            <FormProvider {...methods}>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className='w-full flex flex-col space-y-10'
              >
                {/* Header Form */}
                <div className='flex flex-col'>
                  <Typography variant='h5' className='font-semibold'>
                    Masuk
                  </Typography>
                  <Typography variant='p' color='secondary'>
                    Silahkan masuk dengan akun anda
                  </Typography>
                </div>
                {/* Input Form */}
                <div className='flex flex-col space-y-4'>
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
                  <Typography variant='c' className='flex justify-end'>
                    <UnstyledLink
                      href='/forgot-password'
                      className='w-fit font-semibold underline underline-offset-2 text-success-500 hover:text-success-600'
                    >
                      Lupa Kata Sandi?
                    </UnstyledLink>
                  </Typography>
                </div>
                {/* Submit Form */}
                <div className='flex flex-col space-y-4'>
                  <Button
                    type='submit'
                    variant='green'
                    size='large'
                    isLoading={isLoading}
                  >
                    Masuk
                  </Button>
                  <div className='flex flex-row justify-center space-x-2'>
                    <Typography variant='c'>Belum punya akun?</Typography>
                    <Typography variant='c'>
                      <UnstyledLink
                        href='/signup'
                        className='font-semibold underline underline-offset-2 text-success-500 hover:text-success-600'
                      >
                        Daftar
                      </UnstyledLink>
                    </Typography>
                  </div>
                </div>
              </form>
            </FormProvider>
          </div>
        </section>
      </main>
    </Layout>
  );
}
