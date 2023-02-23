import React from 'react';

import SEO from '@/components/SEO';
import Layout from '@/layouts/Layout';
import ComingSoon from '@/pages/coming-soon/components/coming-soon';
import ComingSoonBackground from '@/pages/coming-soon/container/ComingSoonBackground';

export default function ComingSoonPage() {
  return (
    <Layout withNavbar={false} withFooter={false}>
      <SEO title='Coming Soon' />
      <main>
        <section>
          <div className='relative h-screen bg-tainted-100 flex justify-center items-center overflow-hidden'>
            <ComingSoonBackground />
            <div className='relative w-[80%] md:w-[50%] lg:w-[42%] text-center -translate-y-10 z-50'>
              <ComingSoon />
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
