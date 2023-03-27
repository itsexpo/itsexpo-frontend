import 'swiper/css';
import 'swiper/css/autoplay';
import 'aos/dist/aos.css';

import AOS from 'aos';
import React from 'react';
import { useEffect } from 'react';
import { IoIosArrowDown } from 'react-icons/io';

import ButtonLink from '@/components/links/ButtonLink';
import NextImage from '@/components/NextImage';
import SEO from '@/components/SEO';
import Typography from '@/components/typography/Typography';
import Layout from '@/layouts/Layout';
import clsxm from '@/lib/clsxm';
import { HeroBackground } from '@/pages/pre-event/container/HeroBackground';
function Preevent() {
  useEffect(() => {
    AOS.init();
  }, []);

  const aboutRef = React.useRef<HTMLElement>(null);

  return (
    <Layout>
      <SEO
        title='Pre Event'
        description='Selamat datang di ITS Expo 2023, acara teknologi terbesar di Indonesia yang menghadirkan inovasi dan solusi terbaru untuk dunia bisnis, pendidikan, dan masyarakat umum.'
      />
      <main className='flex flex-col bg-tainted-100 scroll-smooth'>
        <section id='Hero'>
          <HeroBackground />
          <div className='relative overflow-hidden min-h-screen'>
            <div className='justify-center w-fit mx-auto items-center pt-24 z-10 md:pt-32'>
              <div className='flex-col max-w-lg pt-28 relative flex'>
                <Typography
                  variant='h1'
                  as='h1'
                  className='font-primary text-center'
                  data-aos='fade-up'
                >
                  Pre event
                </Typography>
                <Typography
                  variant='h6'
                  className='font-secondary text-center font-semibold text-critical-600'
                >
                  ITS Expo 2023
                </Typography>
                <Typography
                  variant='b1'
                  className='font-secondary text-center text-discolored-500 mt-6'
                >
                  Selamat datang di ITS Expo 2023, acara teknologi terbesar di
                  Indonesia yang menghadirkan inovasi dan solusi terbaru untuk
                  dunia bisnis, pendidikan, dan masyarakat umum.
                </Typography>
                <div
                  onClick={() =>
                    scrollBy({
                      top:
                        (aboutRef.current?.getBoundingClientRect()?.top ?? 0) -
                        100,
                      behavior: 'smooth',
                    })
                  }
                  className={clsxm(
                    'mt-10 w-10 h-10 flex mx-auto justify-center items-center rounded-full bg-critical-600 cursor-pointer',
                    'animate-bounce'
                  )}
                  data-aos='fade-up'
                  data-aos-delay='200'
                >
                  <IoIosArrowDown className='fill-warning-100 w-5 h-5' />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* tentang pre event */}
        <section
          ref={aboutRef}
          id='tentang pre event'
          className='relative w-full flex flex-col items-center bg-preevent-landing overflow-hidden'
        >
          <div className='layout-pre-event my-24'>
            <div className='relative grid grid-cols-3 max-w-6xl justify-center items-center mx-auto'>
              <div className='flex flex-col'>
                <NextImage
                  src='/preevent/about-bunga-left.png'
                  alt='ornamen'
                  width={316}
                  height={204}
                  className='absolute w-1/5 md:w-[15%] md:ml-16'
                />
              </div>

              <div className='relative flex flex-col top-10 sm:top-6 md:top-12'>
                <Typography
                  variant='h4'
                  as='h4'
                  className='text-typo-white text-center font-primary md:-translate-y-3'
                >
                  tentang pre event
                </Typography>
              </div>
              <div className='flex flex-col'>
                <NextImage
                  src='/preevent/about-bunga-right.png'
                  alt='ornamen'
                  width={316}
                  height={204}
                  className='absolute w-1/5 md:w-[15%] right-0 md:mr-20'
                />
              </div>
            </div>

            <div className='flex flex-col bg-card-tentang-preevent rounded-xl space-y-4'>
              <Typography
                variant='t'
                as='t'
                className='relative max-w-[1160px] text-typo-white text-base md:text-xl font-medium font-secondary text-center mt-20 mb-4 md:mb-10 mx-4 md:mx-10 lg:mx-auto'
              >
                Pre-event ITS Expo 2023 akan menjadi ajang yang sangat dinanti
                oleh banyak orang, baik itu pengunjung maupun para pelaku
                industri dan akademisi di bidang teknologi. Acara pre-event ini
                akan memberikan kesempatan bagi para pengunjung untuk
                mendapatkan informasi awal tentang teknologi-teknologi terbaru
                yang akan dipamerkan pada acara utama nanti. Selain itu,
                pre-event ini juga akan menjadi ajang networking yang sangat
                berharga bagi para pelaku industri dan akademisi, karena akan
                ada banyak kesempatan untuk bertemu dengan para pemimpin dan
                ahli di bidang teknologi.
              </Typography>
            </div>
          </div>

          {/* jurnalistik */}
          <div className='layout-pre-event my-12'>
            <div className='grid grid-cols-1 md:grid-cols-2'>
              <div className='relative flex flex-col max-w-full'>
                <Typography
                  variant='h3'
                  as='h3'
                  className='text-typo-white text-6xl text-center md:text-left font-primary'
                >
                  Journalistic
                </Typography>
                <NextImage
                  src='/preevent/jurnalistik-mobile.png'
                  alt='jurnalistik'
                  width={780}
                  height={1373}
                  className='relative block md:hidden w-full scale-[1.10] -top-16'
                />
                <Typography
                  variant='b1'
                  as='b1'
                  className='relative w-full text-typo-white text-base font-secondary text-justify -top-28 md:top-0 md:mt-10 mb-10'
                >
                  Tentang Lomba Jurnalistik di ITS Expo 2023, kamu akan diajak
                  untuk mengikuti sebuah kompetisi menulis artikel yang
                  berkualitas tinggi dan menarik. Dalam lomba ini, para peserta
                  akan diminta untuk membuat karya tulis yang berisi liputan,
                  analisis, dan opini tentang topik yang relevan dengan tema
                  acara.
                  <br />
                  <br />
                  Karya tulis jurnalistik akan dinilai berdasarkan kriteria
                  seperti keakuratan dan kelengkapan informasi, kesan yang
                  dihasilkan pada pembaca, dan kepatuhan terhadap etika
                  jurnalistik. Dapatkan kesempatan untuk memenangkan penghargaan
                  dan hadiah yang menarik serta kesempatan untuk dipublikasikan
                  di media online terkait dengan acara ITS Expo 2023. Yuk,
                  jangan lewatkan kesempatan ini untuk menunjukkan kemampuanmu
                  dan mengembangkan keterampilan jurnalistikmu!
                </Typography>
                <ButtonLink
                  href='/jurnalistik'
                  className='relative md:max-w-[215px] mt-10 -top-32 md:top-0'
                  variant='discolored'
                  size='large'
                >
                  Lihat Selengkapnya
                </ButtonLink>
              </div>
              <NextImage
                src='/preevent/jurnalistik.png'
                alt='jurnalistik'
                width={1281}
                height={1326}
                className='relative hidden md:block w-full lg:-top-28 md:-top-24'
              />
            </div>
          </div>

          {/* robotics */}
          <div className='layout-pre-event my-12'>
            <div className='grid grid-cols-1 md:grid-cols-2'>
              <div className='flex flex-col'>
                <NextImage
                  src='/preevent/robotics.png'
                  alt='robotics'
                  width={1112}
                  height={1522}
                  className='relative hidden md:block w-[85%] lg:-top-24 md:-top-24'
                />
              </div>
              <div className='flex flex-col'>
                <Typography
                  variant='h3'
                  as='h3'
                  className='text-typo-white text-6xl text-center md:text-left font-primary'
                >
                  robotics
                </Typography>
                <NextImage
                  src='/preevent/robotics.png'
                  alt='robotics-mobile'
                  width={1112}
                  height={1522}
                  className='relative block md:hidden w-full scale-[1.30] -left-5'
                />
                <Typography
                  variant='b1'
                  as='b1'
                  className='relative text-typo-white text-base font-secondary text-justify -top-8 md:top-0 md:mt-10 mb-10'
                >
                  Lomba Robotik di ITS Expo 2023 akan menjadi ajang pertarungan
                  robotik yang menakjubkan. Peserta dari seluruh dunia akan
                  menampilkan robot-robot canggih dalam tantangan kreatif dan
                  menarik yang memukau. Selain itu, Lomba Robotik ini juga akan
                  menampilkan pertunjukan tarian dan atraksi robotik yang
                  menggabungkan seni dan teknologi, menawarkan pengalaman
                  menakjubkan bagi para teknologi dan robotikus, serta
                  masyarakat umum yang ingin menikmati keajaiban teknologi
                  modern.
                  <br />
                  <br />
                  Bergabunglah dengan Lomba Robotik di ITS Expo 2023 dan
                  saksikan pertunjukan robotik yang spektakuler! Anda akan
                  dibawa ke dalam dunia masa depan dengan robot-robot canggih
                  yang menakjubkan dan menampilkan serangkaian tantangan kreatif
                  dan menarik yang akan membuat Anda terkagum-kagum. Jangan
                  lewatkan kesempatan ini untuk merasakan pengalaman teknologi
                  modern yang mengesankan. Ayo bergabung dan saksikan Lomba
                  Robotik di ITS Expo 2023!
                </Typography>
                <ButtonLink
                  href='/robotics'
                  className='relative md:max-w-[215px] -top-14 md:top-0  mt-10'
                  variant='discolored'
                  size='large'
                >
                  Lihat Selengkapnya
                </ButtonLink>
              </div>
            </div>
          </div>

          {/* kti */}
          <div className='layout-pre-event my-12'>
            <div className='grid grid-cols-1 md:grid-cols-2'>
              <div className='flex flex-col'>
                <Typography
                  variant='h3'
                  as='h3'
                  className='text-typo-white text-6xl text-center md:text-left font-primary'
                >
                  karya tulis ilmiah
                </Typography>
                <NextImage
                  src='/preevent/kti-mobile.png'
                  alt='kti mobile'
                  width={780}
                  height={1373}
                  className='relative block md:hidden w-full scale-[1.20]'
                />
                <Typography
                  variant='b1'
                  as='b1'
                  className='relative text-typo-white text-base font-secondary text-justify -top-16 md:top-0 md:mt-10 mb-10'
                >
                  ITS Expo 2023 akan menggelar Lomba Karya Tulis Ilmiah yang
                  menantang dan menarik. Lomba ini akan menampilkan karya tulis
                  ilmiah dari para peserta yang berkompetisi dalam
                  mempresentasikan gagasan dan temuan baru dalam berbagai bidang
                  ilmu pengetahuan.
                  <br />
                  <br />
                  Lomba Karya Tulis Ilmiah di ITS Expo 2023 merupakan kesempatan
                  yang sangat baik bagi para peneliti dan mahasiswa untuk
                  memperlihatkan kecakapan mereka dalam meneliti dan menyajikan
                  hasil penelitian. Lomba ini juga memberikan pengalaman yang
                  bermanfaat bagi para peserta, memungkinkan mereka untuk
                  berkomunikasi dengan para peneliti dan ahli di bidang yang
                  sama. Ayo sertai Lomba Karya Tulis Ilmiah di ITS Expo 2023 dan
                  jadilah bagian dari komunitas ilmu pengetahuan yang maju dan
                  inovatif!
                </Typography>
                <ButtonLink
                  href='/kti'
                  className='relative md:max-w-[215px] mt-10 -top-16 md:top-0'
                  variant='discolored'
                  size='large'
                >
                  Lihat Selengkapnya
                </ButtonLink>
              </div>
              <div className='flex flex-col mt-0'>
                <NextImage
                  src='/preevent/kti.png'
                  alt='kti'
                  width={1279}
                  height={1522}
                  className='relative hidden md:block w-11/12 -top-[88px]'
                />
              </div>
            </div>
          </div>

          {/* talkshow */}
          <div className='layout-pre-event my-12'>
            <div className='grid grid-cols-1 md:grid-cols-2'>
              <div className='relative flex flex-col'>
                <NextImage
                  src='/preevent/talkshow.png'
                  alt='talkshow'
                  width={1128}
                  height={1474}
                  className='relative hidden md:block w-11/12 -top-28'
                />
              </div>
              <div className='relative flex flex-col'>
                <Typography
                  variant='h3'
                  as='h3'
                  className='text-typo-white text-6xl text-center md:text-left font-primary'
                >
                  Talk show
                </Typography>
                <NextImage
                  src='/preevent/talkshow-mobile.png'
                  alt='talkshow-mobile'
                  width={780}
                  height={1373}
                  className='relative block md:hidden w-full scale-[1.20]'
                />
                <Typography
                  variant='b1'
                  as='b1'
                  className='relative text-typo-white text-base font-secondary text-justify -top-16 md:top-0 md:mt-10 mb-10'
                >
                  Talk Show di ITS Expo 2023 akan menjadi ajang diskusi yang
                  sangat menarik. Para ahli dan praktisi dari berbagai bidang
                  akan hadir untuk membahas topik-topik yang relevan dan
                  menarik, memberikan wawasan dan pemahaman yang lebih dalam
                  tentang berbagai isu yang dihadapi oleh masyarakat modern.
                  <br />
                  <br />
                  Talk Show di ITS Expo 2023 merupakan kesempatan yang sangat
                  baik bagi para peserta untuk memperluas wawasan mereka,
                  mempelajari pandangan baru, dan mendengarkan pengalaman dari
                  para ahli yang berpengalaman. Selain itu, talk show ini juga
                  akan menjadi tempat yang tepat bagi peserta untuk bertanya dan
                  berdiskusi dengan para ahli dan praktisi, sehingga mereka
                  dapat memperoleh pemahaman yang lebih baik tentang berbagai
                  topik yang dibahas. Ayo bergabung dengan Talk Show di ITS Expo
                  2023 dan jadilah bagian dari diskusi yang menarik dan
                  bermanfaat!
                </Typography>
                <ButtonLink
                  href='/coming-soon'
                  className='relative md:max-w-[215px] mt-10 -top-20 md:top-0'
                  variant='discolored'
                  size='large'
                >
                  Lihat Selengkapnya
                </ButtonLink>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default Preevent;
