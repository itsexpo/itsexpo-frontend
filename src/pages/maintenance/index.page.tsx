import React from 'react';

import SEO from '@/components/SEO';
import Typography from '@/components/typography/Typography';
import Layout from '@/layouts/Layout';
import MaintenanceBackground from '@/pages/maintenance/container/MaintenanceBackground';

export default function Maintenance() {
  return (
    <Layout withNavbar={false} withFooter={false}>
      <SEO title='Maintenance' />
      <main>
        <section>
          <div className='relative h-screen bg-maintenance flex items-center overflow-hidden'>
            <MaintenanceBackground />
            <div className='layout'>
              <div className='flex flex-col max-w-[527px]'>
                {/* jangan lupa rebase karena ada penyempurnaan lagi  */}
                <Typography
                  variant='h1'
                  as='h1'
                  font='upakarti'
                  className='text-6xl md:text-8xl text-center md:text-left'
                >
                  sedang dalam perbaikan
                </Typography>
                <Typography variant='p' as='p' className='text-justify mt-5'>
                  Dalam upaya meningkatkan kualitas layanan, ITS EXPO saat ini
                  sedang melakukan perbaikan.
                </Typography>

                <Typography variant='p' as='p' className='text-justify mt-5'>
                  Selama masa perbaikan, website ITS EXPO tidak dapat diakses
                  untuk sementara waktu. Mohon maaf atas ketidaknyamanannya.
                  Terima kasih atas pengertiannya.
                </Typography>

                <Typography variant='p' as='p' className='mt-5'>
                  Kami akan segera kembali,
                  <br /> ITS EXPO 2023.
                </Typography>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
