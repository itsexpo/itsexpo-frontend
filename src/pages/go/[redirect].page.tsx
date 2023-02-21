import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/router';

import NextImage from '@/components/NextImage';
import SEO from '@/components/SEO';
import Typography from '@/components/typography/Typography';
import Layout from '@/layouts/Layout';
import api from '@/lib/api';

export default function RedirectPage() {
  const router = useRouter();
  const shortUrl = router.query.redirect;

  useQuery({
    queryKey: ['longUrl', shortUrl],
    queryFn: () => {
      return api.get(`/url_shortener?short_url=${shortUrl}`);
    },
    onSuccess: (data) => {
      setTimeout(() => router.push(data.data.message.long_url), 5000);
    },
    onError: () => {
      router.push('/404');
    },
    enabled: !!shortUrl,
  });

  return (
    <Layout withNavbar={false} withFooter={false}>
      <SEO title='Redirect' />
      <main>
        <section className='relative flex items-center w-full h-screen bg-tainted-200 overflow-x-hidden'>
          <div className='absolute w-full h-full'>
            <NextImage
              src='/redirect/flower.png'
              alt='flower mobile'
              width='76'
              height='65'
              priority={true}
              className='absolute top-36 left-20 md:hidden'
            />
            <NextImage
              src='/redirect/flower.png'
              alt='flower mobile'
              width='90'
              height='78'
              priority={true}
              className='absolute bottom-44 -right-6 md:hidden'
            />
            <NextImage
              src='/redirect/flower.png'
              alt='flower'
              width='115'
              height='113'
              priority={true}
              className='absolute top-24 left-[28%] hidden md:block'
            />
            <NextImage
              src='/redirect/flower.png'
              alt='flower'
              width='75'
              height='74'
              priority={true}
              className='absolute bottom-40 right-[22%] hidden md:block'
            />
            <NextImage
              src='/redirect/flake.png'
              alt='flake right'
              width='40'
              height='42'
              priority={true}
              className='absolute top-56 md:top-48 right-7 md:right-[22%]'
            />
            <NextImage
              src='/redirect/flake.png'
              alt='flake'
              width='40'
              height='42'
              priority={true}
              className='absolute bottom-48 md:bottom-56 left-8 md:left-[25%]'
            />
            <NextImage
              src='/redirect/leaf.png'
              alt='right leaf mobile'
              width='149'
              height='102'
              priority={true}
              className='absolute top-5 right-3 md:hidden'
            />
            <NextImage
              src='/redirect/leaf.png'
              alt='right leaf'
              width='239'
              height='159'
              priority={true}
              className='absolute top-4 right-4 hidden md:block'
            />
            <NextImage
              src='/redirect/leaf.png'
              alt='left leaf mobile'
              width='149'
              height='102'
              priority={true}
              className='absolute top-5 left-3 -scale-x-[1] md:hidden'
            />
            <NextImage
              src='/redirect/leaf.png'
              alt='left leaf'
              width='239'
              height='159'
              priority={true}
              className='absolute top-4 left-4 -scale-x-[1] hidden md:block'
            />
            <NextImage
              src='/redirect/mountains-mobile.png'
              alt='mountanus mobile'
              width='390'
              height='108'
              priority={true}
              className='absolute w-full bottom-0 md:hidden'
            />
            <NextImage
              src='/redirect/mountains.png'
              alt='mountanus'
              width='1440'
              height='141'
              priority={true}
              className='absolute w-full bottom-0 hidden md:block'
            />
            <NextImage
              src='/redirect/wayang-cloud.png'
              alt='wayang on cloud left'
              width='303'
              height='472'
              priority={true}
              className='absolute w-[16%] top-1/2 -translate-y-[40%] left-0 hidden md:block'
            />
            <NextImage
              src='/redirect/wayang-cloud.png'
              alt='wayang on cloud right'
              width='303'
              height='472'
              priority={true}
              className='absolute w-[16%] top-1/2 -translate-y-[40%] right-0 -scale-x-[1] hidden md:block'
            />
          </div>
          <div className='flex flex-col items-center w-full z-10'>
            <NextImage
              src='/redirect/logo.png'
              alt='logo mobile'
              width='123'
              height='79'
              priority={true}
              className='md:hidden mb-3'
            />
            <NextImage
              src='/redirect/logo.png'
              alt='logo'
              width='313'
              height='190'
              priority={true}
              className='hidden md:block mb-8'
            />
            <Typography
              variant='h3'
              className='font-primary text-2xl text-critical-700'
            >
              you are being redirected ...
            </Typography>
          </div>
        </section>
      </main>
    </Layout>
  );
}
