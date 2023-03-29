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
                  Sebuah pengantar sebelum acara puncak yang akan menyajikan
                  beragam ajang lomba dan acara menarik.
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
          <div className='layout mt-24'>
            <div className='relative grid grid-cols-3 max-w-6xl justify-center items-center mx-auto'>
              <div className='flex flex-col'>
                <NextImage
                  src='/preevent/about-bunga-left.png'
                  alt='ornamen'
                  width={316}
                  height={204}
                  className='absolute w-1/5 md:w-[12%] md:ml-28'
                />
              </div>

              <div className='relative flex flex-col top-10 sm:top-6 md:top-12'>
                <Typography
                  variant='h3'
                  as='h3'
                  className='text-typo-white text-center md:-translate-y-3'
                  font='upakarti'
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
                  className='absolute w-1/5 md:w-[12%] right-0 md:mr-28'
                />
              </div>
            </div>

            <div className='flex flex-col bg-card-tentang-preevent rounded-xl space-y-4'>
              <Typography
                variant='t'
                as='t'
                className='relative max-w-[1160px] text-typo-white text-base md:text-xl font-medium font-secondary text-center mt-20 mb-4 md:mb-10 mx-4 md:mx-10 lg:mx-auto'
              >
                Pre Event ITS Expo 2023 akan menyajikan beragam kompetisi dan
                acara menarik sebagai pengantar sebelum puncak acara. Terdapat
                ajang lomba seperti Journalistic yang mewadahi peserta untuk
                menunjukkan kreativitas di bidang jurnalistik dan media online,
                Robot in Action yang mengembangkan minat dan bakat siswa dalam
                bidang robotika, dan Karya Tulis Ilmiah yang ditujukan untuk
                mahasiswa S1/D4/Sederajat untuk menyalurkan inovasi dan
                regenerasi budaya Indonesia. Selain itu, akan diadakan talkshow
                inspiratif dengan public figure yang sukses dan penuh prestasi.
              </Typography>
            </div>
          </div>

          {/* jurnalistik */}
          <div className='layout mt-10'>
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
                  className='relative w-full text-typo-white text-base font-secondary text-justify -top-28 md:top-0 md:mt-10 mb-10'
                >
                  Journalistic merupakan salah satu ajang lomba bergengsi dari
                  cabang kompetisi ITS Expo 2023 yang mewadahi peserta untuk
                  menuangkan kreativitasnya di bidang fotografi, videografi,
                  penyiaran, dan penulisan. Terbagi menjadi dua kategori lomba,
                  Liputan Televisi ditujukan untuk mahasiswa/umum dan Liputan
                  Video Blogger (V-Log) ditujukan untuk pelajar SMA/SMK
                  Sederajat. Digelar secara luring, peserta akan merasakan
                  bagaimana meliput salah satu rangkaian kegiatan ITS Expo dari
                  pre event hingga closing. Dengan gelora Sepuluh Nopember,
                  kompetisi ini hadir untuk mengapresiasi perkembangan
                  jurnalistik dan media online yang peduli terhadap seni,
                  budaya, dan teknologi.
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
          <div className='layout mt-10'>
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
                  robotika
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
                  className='relative text-typo-white text-base font-secondary text-justify -top-8 md:top-0 md:mt-10 mb-10'
                >
                  Robot in Action merupakan salah satu cabang kompetisi dalam
                  serangkaian Acara ITS EXPO 2023. Kompetisi ini merupakan wadah
                  bagi siswa siswi SMP maupun SMA sederajat dalam mengembangkan
                  minat dan bakatnya dibidang teknologi khusunya bidang
                  robotika. Robot in Action terbagi menjadi dua kategori
                  perlombaan, yakni kompetisi Robot Line Tracer dan Open
                  Category (Robot Bentengan). Robot Line Tracer merupakan
                  kompetisi membuat robot yang tidak menggunakan bahasa
                  pemrograman atau menggunakan mikrokontroler. Sedangkan, Open
                  Category merupakan kompetisi membuat robot manual untuk
                  memenangkan permainan Bentengan dengan cara sebanyak mungkin
                  menawan warga milik lawan. Rangkaian kegiatan kompetisi Robot
                  in Action ini dilaksanakan secara luring.
                </Typography>
                <ButtonLink
                  href='/robotika'
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
          <div className='layout mt-10'>
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
                  className='relative text-typo-white text-base font-secondary text-justify -top-16 md:top-0 md:mt-10 mb-10'
                >
                  Karya Tulis Ilmiah merupakan salah satu ajang lomba bergengsi
                  dari cabang kompetisi ITS Expo 2023 yang ditujukan kepada
                  mahasiswa S1/D4/Sederajat. Lomba KTI akan dilaksanakan secara
                  luring sehingga peserta akan mendapatkan pengalaman untuk
                  menyampaikan inovasinya di hadapan dewan juri dan peserta
                  lain, serta kesempatan ini dapat dimanfaatkan untuk menambah
                  relasi baru. Peserta juga dapat merasakan dan ikut serta dalam
                  serangkaian acara ITS Expo 2023. Dengan adanya lomba KTI ITS
                  Expo 2023 ini, diharapkan para peserta dapat menyalurkan
                  inovasinya untuk regenerasi budaya Indonesia melalui
                  implementasi bidang keilmuan yang ditekuni kepada masyarakat.
                  LKTI ITS Expo 2023 memiliki tema “Peran Generasi Muda untuk
                  Mendukung Regenerasi Budaya Nasional Melalui Pendekatan Ilmu
                  Pengetahuan Interdisipliner Teknologi
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
          <div className='layout mt-10'>
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
                  className='relative text-typo-white text-base font-secondary text-justify -top-16 md:top-0 md:mt-10 mb-10'
                >
                  Jangan lewatkan Talkshow spektakuler ITS EXPO 2023! Hadirkan
                  inspirasi dan motivasi baru dengan public figure yang sukses
                  dan penuh prestasi. Diskusi menarik yang akan merubah
                  pandanganmu tentang masa depan Indonesia. Ayo, bergabunglah
                  dengan kami dan jadilah bagian dari perubahan!
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
