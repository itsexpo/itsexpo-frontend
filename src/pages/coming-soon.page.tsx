import React from 'react';
import { HiOutlineHome } from 'react-icons/hi';

import Button from '@/components/buttons/Button';
import NextImage from '@/components/NextImage';
import SEO from '@/components/SEO';
import Typography from '@/components/typography/Typography';
import Layout from '@/layouts/Layout';

export default function ComingSoon() {
  return (
    <Layout withNavbar={false} withFooter={false}>
      <SEO title='Login' />
      <main>
        <section>
          <div className='h-screen bg-[#FAF2DD] flex justify-center items-center'>
            <NextImage src={'/comingsoon/kipas-kiri.png'} />
            <div className='w-[42%] text-center'>
              <Typography variant='h1' className='font-primary'>
                coming soon
              </Typography>
              <Typography
                variant='b1'
                color='tertiary'
                className='text-justify'
              >
                Website kami sedang dalam proses penyempurnaan dan akan segera
                hadir untuk Anda. Kami berkomitmen untuk menyediakan pengalaman
                pengguna yang luar biasa dan kami yakin Anda akan senang dengan
                hasil akhir. Kami meminta maaf atas ketidaknyamanan sementara
                ini dan berjanji untuk segera memperkenalkan fitur-fitur baru
                dan desain yang menakjubkan. Terima kasih telah bersabar dan
                nantikan kehadiran website kami yang akan mengejutkan anda.
              </Typography>
              <Button variant='green' leftIcon={HiOutlineHome} className='mt-4'>
                Home Page
              </Button>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
