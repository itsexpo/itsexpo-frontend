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
      <SEO title='Coming Soon' />
      <main>
        <section>
          <div className='relative h-screen bg-[#FAF2DD] flex justify-center items-center overflow-hidden'>
            <NextImage
              className='absolute w-[32%] bottom-0 left-0 z-10'
              alt='kipas kiri'
              width={886}
              height={1346}
              src={'/comingsoon/kipas-kiri.png'}
            />
            <NextImage
              className='absolute w-[32%] bottom-0 right-0 z-10'
              alt='kipas kanan'
              width={858}
              height={1365}
              src={'/comingsoon/kipas-kanan.png'}
            />
            <NextImage
              className='absolute w-full -bottom-10 right-0 z-[9]'
              alt='gunung'
              width={2160}
              height={791}
              src={'/comingsoon/gunung.png'}
            />
            <NextImage
              className='absolute w-96 top-0 left-0 z-[8]'
              alt='ornamen kiri'
              width={693}
              height={1500}
              src={'/comingsoon/ornamen-kiri.png'}
            />
            <NextImage
              className='absolute w-[26rem] top-0 right-0 z-[8]'
              alt='ornamen kanan'
              width={839}
              height={1523}
              src={'/comingsoon/ornamen-kanan.png'}
            />
            <NextImage
              className='absolute w-20 top-24 left-0 z-[9]'
              alt='awan kiri 1'
              width={105}
              height={122}
              src={'/comingsoon/awan-kiri1.png'}
            />
            <NextImage
              className='absolute w-44 top-32 left-4 z-[9]'
              alt='awan kiri 2'
              width={314}
              height={157}
              src={'/comingsoon/awan-kiri2.png'}
            />
            <NextImage
              className='absolute w-36 top-44 right-0 z-[9]'
              alt='awan kanan 1'
              width={233}
              height={157}
              src={'/comingsoon/awan-kanan1.png'}
            />
            <NextImage
              className='absolute w-36 top-36 right-16 z-[9]'
              alt='awan kanan 2'
              width={236}
              height={122}
              src={'/comingsoon/awan-kanan2.png'}
            />
            <NextImage
              className='absolute w-48 xl:w-64 top-[4%] left-[20%] z-[9]'
              alt='burung'
              width={408}
              height={433}
              src={'/comingsoon/burung.png'}
            />
            <NextImage
              className='absolute w-16 bottom-[30%] right-[30%]'
              alt='bunga 1'
              width={118}
              height={119}
              src={'/comingsoon/bunga-1.png'}
            />
            <NextImage
              className='absolute w-16 top-[10%] right-[40%]'
              alt='bunga 2'
              width={79}
              height={83}
              src={'/comingsoon/bunga-2.png'}
            />
            <NextImage
              className='absolute w-16 bottom-[40%] left-[25%]'
              alt='bunga 3'
              width={79}
              height={83}
              src={'/comingsoon/bunga-2.png'}
            />

            <div className='relative w-[50%] lg:w-[42%] text-center -translate-y-10 z-50'>
              <Typography variant='h1' className='font-primary'>
                coming soon
              </Typography>
              <Typography
                variant='p'
                color='secondary'
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
