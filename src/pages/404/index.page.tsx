// import { FiHome } from 'react-icons/fi';

import 'aos/dist/aos.css';

import AOS from 'aos';
import React, { useEffect } from 'react';
import { AiOutlineHome } from 'react-icons/ai';

import ButtonLink from '@/components/links/ButtonLink';
import SEO from '@/components/SEO';
import Typography from '@/components/typography/Typography';
import Layout from '@/layouts/Layout';
import BackgroundIllustration from '@/pages/404/container/BackgroundIllustration';

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Layout withNavbar={false} withFooter={false}>
      <SEO title='404' description='Halaman tidak ditemukan' />
      <main className=''>
        <section className='flex fixed w-full min-h-screen overflow-hidden items-center justify-center bg-tainted-100'>
          {/* //*#region=========== Background Illustration =========== */}
          <BackgroundIllustration />
          {/* //*endregion=========== Background Illustration =========== */}
          <div
            className='flex relative flex-col items-center text-center'
            data-aos='zoom-in'
            data-aos-duration='1500'
          >
            <Typography variant='h0'>404</Typography>
            <Typography variant='h2' font='upakarti'>
              halaman tidak ditemukan
            </Typography>
            <Typography variant='p' className='my-5'>
              Maaf, halaman yang anda tuju tidak ditemukan.
            </Typography>
            <ButtonLink
              href='/'
              variant='black'
              leftIcon={AiOutlineHome}
              size='large'
            >
              Kembali
            </ButtonLink>
          </div>
        </section>
      </main>
    </Layout>
  );
}
