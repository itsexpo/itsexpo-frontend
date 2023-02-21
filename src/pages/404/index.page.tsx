import 'aos/dist/aos.css';

import AOS from 'aos';
import React, { useEffect } from 'react';

import SEO from '@/components/SEO';
import ErrorInfo from '@/components/shared/ErrorInfo';
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
          <ErrorInfo
            status={404}
            title='halaman tidak ditemukan'
            desc='Maaf, halaman yang anda tuju tidak ditemukan.'
          />
        </section>
      </main>
    </Layout>
  );
}
