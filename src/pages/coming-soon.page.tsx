import 'aos/dist/aos.css';

import AOS from 'aos';
import React from 'react';
import { HiOutlineHome } from 'react-icons/hi';

import Button from '@/components/buttons/Button';
import NextImage from '@/components/NextImage';
import SEO from '@/components/SEO';
import Typography from '@/components/typography/Typography';
import Layout from '@/layouts/Layout';

export default function ComingSoon() {
  React.useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <Layout withNavbar={false} withFooter={false}>
      <SEO title='Coming Soon' />
      <main>
        <section>
          <div className='relative h-screen bg-[#FAF2DD] flex justify-center items-center overflow-hidden'>
            <NextImage
              data-aos-delay='300'
              data-aos='fade-up-right'
              data-aos-duration='500'
              data-aos-easing='ease-in-out'
              className='absolute w-[40%] md:w-[32%] bottom-4 md:bottom-0 -left-10 md:left-0 z-10'
              alt='kipas kiri'
              width={886}
              height={1346}
              src={'/comingsoon/kipas-kiri.png'}
            />
            <NextImage
              data-aos-delay='300'
              data-aos='fade-up-left'
              data-aos-duration='500'
              data-aos-easing='ease-in-out'
              className='absolute w-[40%] md:w-[32%] bottom-4 md:bottom-0 -right-[36px] md:right-0 z-10'
              alt='kipas kanan'
              width={858}
              height={1365}
              src={'/comingsoon/kipas-kanan.png'}
            />
            <NextImage
              data-aos-delay='100'
              data-aos='fade-up'
              data-aos-duration='500'
              data-aos-easing='ease-in-out'
              className='absolute hidden md:block w-full md:-bottom-10 right-0 z-[9]'
              alt='gunung'
              width={2160}
              height={791}
              src={'/comingsoon/gunung.png'}
            />
            <NextImage
              className='absolute block md:hidden w-full -bottom-6 right-0 z-[9]'
              alt='gunung mobile'
              width={586}
              height={442}
              src={'/comingsoon/gunung-mobile.png'}
            />
            <NextImage
              className='absolute hidden md:block w-96 top-0 left-0 z-[8]'
              alt='ornamen kiri'
              width={693}
              height={1500}
              src={'/comingsoon/ornamen-kiri.png'}
            />
            <NextImage
              className='absolute hidden md:block w-[26rem] top-0 right-0 z-[8]'
              alt='ornamen kanan'
              width={839}
              height={1523}
              src={'/comingsoon/ornamen-kanan.png'}
            />
            <NextImage
              className='absolute w-16 md:w-20 top-24 left-0 z-[9] blur-sm md:blur-none'
              alt='awan kiri 1'
              width={105}
              height={122}
              src={'/comingsoon/awan-kiri1.png'}
            />
            <NextImage
              className='absolute w-36 md:w-44 top-32 left-4 z-[9] blur-sm md:blur-none'
              alt='awan kiri 2'
              width={314}
              height={157}
              src={'/comingsoon/awan-kiri2.png'}
            />
            <NextImage
              className='absolute w-32 md:w-36 top-24 md:top-44 right-0 z-[9] blur-sm md:blur-none'
              alt='awan kanan 1'
              width={233}
              height={157}
              src={'/comingsoon/awan-kanan1.png'}
            />
            <NextImage
              className='absolute w-36 md:w-36 top-16 md:top-36 right-16 z-[9] blur-sm md:blur-none'
              alt='awan kanan 2'
              width={236}
              height={122}
              src={'/comingsoon/awan-kanan2.png'}
            />
            <NextImage
              className='absolute w-32 md:w-48 xl:w-64 top-[2%] md:top-[4%] left-[20%] z-[9] blur-sm md:blur-none'
              alt='burung'
              width={408}
              height={433}
              src={'/comingsoon/burung.png'}
            />
            <NextImage
              className='absolute w-16 bottom-[20%] md:bottom-[30%] right-[65%] md:right-[30%]'
              alt='bunga 1'
              width={118}
              height={119}
              src={'/comingsoon/bunga-1.png'}
            />
            <NextImage
              className='absolute w-12 md:w-16 top-[3%] md:top-[10%] right-[22%] md:right-[40%]'
              alt='bunga 2'
              width={79}
              height={83}
              src={'/comingsoon/bunga-2.png'}
            />
            <NextImage
              className='absolute hidden md:block w-16 bottom-[40%] left-[25%]'
              alt='bunga 3'
              width={79}
              height={83}
              src={'/comingsoon/bunga-2.png'}
            />

            <div className='relative w-[80%] md:w-[50%] lg:w-[42%] text-center -translate-y-10 z-50'>
              <Typography
                data-aos-delay='100'
                data-aos='fade-up'
                data-aos-duration='300'
                data-aos-easing='ease-in-out'
                variant='h1'
                className='font-primary text-5xl md:text-[80px]'
              >
                coming soon
              </Typography>
              <Typography
                data-aos-delay='200'
                data-aos='fade-up'
                data-aos-duration='300'
                data-aos-easing='ease-in-out'
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
              <Button
                data-aos-delay='300'
                data-aos='fade-up'
                data-aos-duration='400'
                data-aos-easing='ease-in-out'
                variant='green'
                size='large'
                leftIcon={HiOutlineHome}
                className='mt-8'
              >
                Home Page
              </Button>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
