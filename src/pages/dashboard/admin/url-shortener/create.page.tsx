import { useMutation } from '@tanstack/react-query';
import { FormProvider, useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { FiLink2 } from 'react-icons/fi';
import { MdContentPaste } from 'react-icons/md';

import Breadcrumb from '@/components/Breadcrumb';
import Button from '@/components/buttons/Button';
import Input from '@/components/forms/Input';
import withAuth from '@/components/hoc/withAuth';
import NextImage from '@/components/NextImage';
import { WARNING_TOAST } from '@/components/Toast';
import Typography from '@/components/typography/Typography';
import useMutationToast from '@/hooks/toast/useMutationToast';
import DashboardLayout from '@/layouts/dashboard/DashboardLayout';
import api from '@/lib/api';
import { ApiReturn } from '@/types/api';
import { Shortener } from '@/types/entities/shortener';

export default withAuth(CreateUrlShortenerPage, ['url_shortener.store']);

//#region  //*=========== Typing ===========
type AddShortenerForm = {
  long_url: string;
  short_url: string;
};
//#endregion  //*======== Typing ===========

function CreateUrlShortenerPage() {
  //#region  //*=========== Form ===========
  const methods = useForm<AddShortenerForm>();
  const { handleSubmit, setValue } = methods;
  //#endregion  //*======== Form ===========

  //#region  //*=========== Add Mutate ===========
  const { mutate: addShortener, isLoading: addShortenerIsLoading } =
    useMutationToast<ApiReturn<undefined>, Omit<Shortener, 'url_id'>>(
      useMutation((data) => {
        const res = api.post('/url_shortener', data);
        return res;
      })
    );
  //#endregion  //*======== Add Mutate ===========

  //#region  //*=========== On Submit ===========
  const onSubmit = (data: AddShortenerForm) => {
    addShortener(data);
  };
  //#endregion  //*======== On Submit ===========

  //#region  //*=========== On Click ===========
  const pasteOnClick = () => {
    if (navigator.clipboard) {
      if (navigator.clipboard.readText === undefined) {
        toast('Pastikan anda sudah mengizinkan akses clipboard', WARNING_TOAST);
        return;
      }
      navigator.clipboard.readText().then((text) => {
        setValue('long_url', text, { shouldValidate: true });
      });
    } else {
      toast('Browser tidak mendukung fitur ini', WARNING_TOAST);
    }
  };
  //#endregion  //*======== On Click ===========

  return (
    <DashboardLayout>
      <main>
        <section className='bg-base-surface'>
          <div className='layout min-h-screen py-20'>
            <Breadcrumb
              crumbs={[
                '/dashboard/admin/url-shortener',
                '/dashboard/admin/url-shortener/generate',
              ]}
            />
            <Typography as='h5' variant='h5' className='font-bold'>
              Shorten Link Generate
            </Typography>

            {/* Card */}
            <div className='flex flex-col mt-6 rounded-md bg-white shadow-md'>
              <div className='relative w-full p-8 rounded-t-md bg-turquoise-500'>
                <Typography
                  as='h4'
                  variant='h4'
                  font='upakarti'
                  className='text-white'
                >
                  its expo 2023 link
                </Typography>
                <NextImage
                  src='/dashboard/url-shortener/bg-mobile.png'
                  alt='url shortener background'
                  width='199'
                  height='71'
                  className='absolute md:hidden right-0 bottom-0'
                />
                <NextImage
                  src='/dashboard/url-shortener/bg-desktop.png'
                  alt='url shortener background'
                  width='581'
                  height='114'
                  className='absolute hidden md:block right-0 bottom-0'
                />
              </div>
              <div className='p-4 mt-2'>
                <FormProvider {...methods}>
                  <form onSubmit={handleSubmit(onSubmit)} className='space-y-6'>
                    <div className='space-y-4'>
                      <div className='flex gap-x-4'>
                        <div className='flex-1'>
                          <Input
                            id='long_url'
                            label=''
                            type='url'
                            placeholder='Masukkan link yang panjang di sini yaaa'
                            validation={{
                              required: 'Link tidak boleh kosong',
                            }}
                          />
                        </div>
                        <Button
                          onClick={pasteOnClick}
                          variant='outline'
                          className='space-x-2 border-2 border-success-600'
                        >
                          <MdContentPaste className='w-6 h-6 fill-success-600' />
                          <Typography
                            as='p'
                            variant='b1'
                            className='hidden md:block font-semibold text-success-600'
                          >
                            Paste
                          </Typography>
                        </Button>
                      </div>
                      <div className='flex items-center space-x-1'>
                        <Typography
                          as='p'
                          variant='c'
                          className='ml-3 shrink-0 flex'
                        >
                          <span className='hidden md:block'>https://</span>
                          expo-its.com/go/
                        </Typography>
                        <div className='flex-1'>
                          <Input
                            id='short_url'
                            label=''
                            type='text'
                            validation={{
                              required: 'Custom url tidak boleh kosong',
                            }}
                            placeholder='masukkan url custom'
                          />
                        </div>
                      </div>
                    </div>
                    <Button
                      type='submit'
                      size='large'
                      variant='green'
                      leftIcon={FiLink2}
                      isLoading={addShortenerIsLoading}
                      className='w-full'
                    >
                      Shorten Link
                    </Button>
                  </form>
                </FormProvider>
              </div>
            </div>
          </div>
        </section>
      </main>
    </DashboardLayout>
  );
}
