import 'aos/dist/aos.css';

import { useQuery } from '@tanstack/react-query';
import AOS from 'aos';
import { AxiosError } from 'axios';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

import NextImage from '@/components/NextImage';
import SEO from '@/components/SEO';
import Typography from '@/components/typography/Typography';
import Layout from '@/layouts/Layout';
import BackgroundIllustration from '@/pages/go/container/BackgroundIllustration';
import { ApiError, ApiReturn } from '@/types/api';
import { Redirected } from '@/types/entities/redirected';

export default function RedirectPage() {
  const router = useRouter();
  const shortUrl = router.query.redirect;

  useQuery<ApiReturn<Redirected>, AxiosError<ApiError>>(
    [`/url_shortener?short_url=${shortUrl}`],
    {
      onSuccess: (data) => {
        setTimeout(() => router.push(data.data.long_url), 5000);
      },
      onError: () => {
        router.push('/404');
      },
      enabled: !!shortUrl,
    }
  );

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Layout withNavbar={false} withFooter={false}>
      <SEO title='Redirect' />
      <main>
        <section className='relative flex items-center w-full h-screen bg-tainted-200 overflow-x-hidden'>
          <BackgroundIllustration />
          <div
            className='flex flex-col items-center w-full z-10'
            data-aos='zoom-in'
            data-aos-duration='1500'
          >
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
              as='h3'
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
