import 'aos/dist/aos.css';
import 'swiper/css';
import 'swiper/css/autoplay';

import AOS from 'aos';
import { useEffect } from 'react';
import React from 'react';
import { BiChevronDown } from 'react-icons/bi';
import { IoIosArrowDown } from 'react-icons/io';

import ButtonLink from '@/components/links/ButtonLink';
import NextImage from '@/components/NextImage';
import SEO from '@/components/SEO';
import Typography from '@/components/typography/Typography';
import landingTimelineKtiContents from '@/contents/pre-event/kti/landing-timeline';
import { FAQKTIContents } from '@/contents/pre-event/kti/tampilan-awal';
import Layout from '@/layouts/Layout';
import clsxm from '@/lib/clsxm';
import AccordionKti from '@/pages/kti/components/AccordionKti';
import { AboutBackgroundKti } from '@/pages/kti/container/AboutBackgroundKti';
import { GuideKtiBackground } from '@/pages/kti/container/GuidebookBackgroundKti';
import { HadiahKtiBackground } from '@/pages/kti/container/HadiahKtiBackground';
import { HeroBackgroundKti } from '@/pages/kti/container/HeroBackgroundKti';
import { TimelineBackground } from '@/pages/kti/container/TimelineBackgroundKti';

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);

  const aboutRef = React.useRef<HTMLElement>(null);

  return (
    <Layout>
      <SEO
        title='Karya Tulis Ilmiah'
        description='This is Karya Tulis Ilmiah page'
      />
      <main className='flex flex-col scroll-smooth bg-[#fdeeca]'>
        {/* Hero Section */}
        <section
          id='hero'
          className='relative w-full h-screen flex flex-col justify-center bg-tainted-100'
        >
          <HeroBackgroundKti />
          {/* Hero Content */}
          <div className='flex flex-col w-10/12 md:flex-row items-center justify-between mx-auto'>
            <div className='flex flex-col md:items-start' data-aos='fade-up'>
              <Typography variant='h3' className='font-primary'>
                its expo 2023
              </Typography>
              <Typography
                variant='h3'
                className='font-secondary font-semibold text-critical-600 leading-tight'
              >
                KARYA TULIS <br /> ILMIAH
              </Typography>
            </div>
            <NextImage
              src='/kti/hero-logo.png'
              alt='landing hero left background'
              width='407'
              height='439'
              priority={true}
              className=''
            />
          </div>
          <div
            onClick={() =>
              scrollBy({
                top:
                  (aboutRef.current?.getBoundingClientRect()?.top ?? 0) - 100,
                behavior: 'smooth',
              })
            }
            className={clsxm(
              'mx-auto w-10 h-10 flex justify-center items-center rounded-full bg-success-600 cursor-pointer',
              'animate-bounce'
            )}
            data-aos='fade-up'
            data-aos-delay='200'
          >
            <IoIosArrowDown className='fill-warning-100 w-5 h-5' />
          </div>
        </section>

        {/* About Section */}
        <section
          ref={aboutRef}
          className='w-full flex flex-col justify-center items-center bg-gradient-to-b from-[#DD8D00] to-[#804400] relative '
        >
          <div className='relative w-full'>
            <AboutBackgroundKti />

            {/* About Content */}
            <div
              className='flex w-full justify-center items-center flex-col pt-28 pb-56'
              data-aos='fade-up'
            >
              <div className='flex flex-col space-y-4 text-white items-center'>
                <Typography variant='h2' className='font-primary text-white'>
                  karya tulis ilmiah
                </Typography>
                <Typography
                  variant='h6'
                  color='tertiary'
                  className='font-secondary md:max-w-4xl xl:max-w-6xl text-[22px] text-center'
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
              </div>
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section
          id='timeline'
          className='relative w-full flex flex-col items-center bg-[#2A607B] pt-36 pb-60'
        >
          <TimelineBackground />
          {/* Timeline Content */}
          <div className='relative'>
            <Typography
              variant='h2'
              className='font-primary text-typo-white my-16 md:mt-0 md:mb-40'
              data-aos='fade-up'
            >
              timeline
            </Typography>
            <NextImage
              src='/kti/timeline-left-flower.png'
              alt='timeline left flower'
              width='118'
              height='77'
              className='absolute -left-40 top-4'
            />
            <NextImage
              src='/kti/timeline-right-flower.png'
              alt='timeline right flower'
              width='118'
              height='77'
              className='absolute -right-40 top-4'
            />
          </div>

          {/* Timeline Content */}
          <div
            className={clsxm(
              'relative w-full md:w-8/12 lg:w-6/12',
              'flex flex-col items-center gap-y-10 md:gap-y-20',
              'p-7 md:p-0 font-secondary'
            )}
          >
            <div
              className={clsxm(
                'absolute top-0 w-full h-full',
                'flex justify-center gap-8 py-14'
              )}
              data-aos='fade-up'
              data-aos-offset='200'
            >
              <div className='w-0.5 h-full bg-typo' />
              <div className='block md:hidden max-w-[152px] flex-1' />
            </div>

            <div className='w-full flex flex-col gap-24'>
              {landingTimelineKtiContents.map((content, index) => {
                const parity = index % 2 === 0 ? 'even' : 'odd';

                return (
                  <div
                    key={index}
                    className={clsxm(
                      'w-full flex justify-center items-center gap-8',
                      [parity === 'odd' && 'md:flex-row-reverse']
                    )}
                    data-aos='fade-up'
                  >
                    <div className='hidden md:block md:max-w-[248px] md:flex-1' />
                    <NextImage {...content.img} />
                    <div
                      className={clsxm(
                        'max-w-[152px] md:max-w-[248px] flex-1 flex flex-col gap-2',
                        [parity === 'odd' && 'md:text-right']
                      )}
                    >
                      <Typography
                        as='p'
                        variant='p'
                        className='font-bold text-typo-white'
                      >
                        {content.date}
                      </Typography>
                      <Typography as='p' variant='b1' className='text-navy-100'>
                        {content.caption}
                      </Typography>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Hadiah Section */}
        <section id='hadiah' className='relative bg-tainted-100'>
          <div className='relative w-full pb-52'>
            <HadiahKtiBackground />
            {/* Hadiah Content */}
            <div className='flex flex-col w-full justify-center items-center text-center'>
              <Typography variant='h2' className='font-primary'>
                hadiah pemenang
              </Typography>
              <div
                data-aos='fade-up'
                className='flex flex-col items-center w-[1200px] bg-white rounded-2xl px-10 pt-14 pb-10 relative mt-64 gap-y-4'
              >
                <NextImage
                  src='/kti/hadiah-icon.png'
                  alt='pattern illustration'
                  width='573'
                  height='306'
                  className='absolute -top-60 z-10'
                  priority={true}
                />
                <div className='relative flex min-h-[103px] w-full items-center justify-center rounded-xl bg-gradient-to-r from-[#2A607B] via-[#7DB85C] to-[#7DB85C] overflow-hidden'>
                  <NextImage
                    src='/kti/hadiah-medal-1.png'
                    alt='medal illustration'
                    width='52'
                    height='74'
                    className='absolute top-0 left-14'
                    priority={true}
                  />
                  <NextImage
                    src='/kti/hadiah-juara-1.png'
                    alt='pattern illustration'
                    width='260'
                    height='78'
                    className='absolute bottom-0 right-0'
                    priority={true}
                  />
                  <Typography
                    variant='h5'
                    className='font-secondary text-white'
                  >
                    Rp.1.500.000,-
                  </Typography>
                </div>
                <div className='relative flex min-h-[103px] w-full items-center justify-center rounded-xl bg-gradient-to-r from-[#7DB85C] via-[#E0AC47] to-[#E0AC47] overflow-hidden'>
                  <NextImage
                    src='/kti/hadiah-medal-2.png'
                    alt='medal illustration'
                    width='78'
                    height='76'
                    className='absolute top-0 left-11'
                    priority={true}
                  />
                  <NextImage
                    src='/kti/hadiah-juara-2.png'
                    alt='pattern illustration'
                    width='260'
                    height='78'
                    className='absolute bottom-0 right-0'
                    priority={true}
                  />
                  <Typography
                    variant='h5'
                    className='font-secondary text-white'
                  >
                    Rp.1.000.000,-
                  </Typography>
                </div>
                <div className='relative flex min-h-[103px] w-full items-center justify-center rounded-xl bg-gradient-to-r from-[#94391D] via-[#687DA2] to-[#687DA2] overflow-hidden'>
                  <NextImage
                    src='/kti/hadiah-medal-3.png'
                    alt='medal illustration'
                    width='76'
                    height='74'
                    className='absolute top-0 left-11'
                    priority={true}
                  />
                  <NextImage
                    src='/kti/hadiah-juara-3.png'
                    alt='pattern illustration'
                    width='260'
                    height='78'
                    className='absolute bottom-0 right-0'
                    priority={true}
                  />
                  <Typography
                    variant='h5'
                    className='font-secondary text-white'
                  >
                    Rp.800.000,-
                  </Typography>
                </div>
                <div className='relative flex min-h-[103px] w-full items-center justify-center rounded-xl bg-gradient-to-r from-[#E7C055] via-[#6C915C] to-[#6C915C] overflow-hidden'>
                  <NextImage
                    src='/kti/hadiah-juara-1.png'
                    alt='pattern illustration'
                    width='260'
                    height='78'
                    className='absolute bottom-0 right-0'
                    priority={true}
                  />
                  <Typography
                    variant='h6'
                    className='font-secondary text-white absolute left-11'
                  >
                    Best <br /> Poster
                  </Typography>
                  <Typography
                    variant='h5'
                    className='font-secondary text-white'
                  >
                    Rp.500.000,-
                  </Typography>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Guide Section */}
        <section id='guide' className='relative bg-[#00587A] pt-28 pb-52'>
          <div className='relative w-full '>
            <GuideKtiBackground />
            {/* Guide Content */}
            <div className='flex flex-col w-full justify-center items-center relative'>
              <div className='relative'>
                <Typography
                  variant='h2'
                  className='font-primary text-typo-white my-16 md:mt-0 md:mb-20'
                  data-aos='fade-up'
                >
                  guidebook
                </Typography>
                <NextImage
                  src='/kti/guide-right-vine.png'
                  alt='guide left vine'
                  width='228'
                  height='226'
                  className='absolute -left-80 -top-10'
                />
                <NextImage
                  src='/kti/guide-left-vine.png'
                  alt='guide right vine'
                  width='228'
                  height='226'
                  className='absolute -right-80 -top-10'
                />
              </div>
              <div className='w-full max-w-[47rem] '>
                <div className='w-full min-h-[514px] rounded-xl bg-white'></div>
                <ButtonLink
                  variant='yellow'
                  href='/'
                  size='base'
                  className='w-full mt-4'
                >
                  Download Guidebook
                </ButtonLink>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id='about' className='relative w-full '>
          <div className='relative w-full bg-tainted-100 pt-14 pb-32'>
            {/* Guide Content */}
            <div className='flex flex-col w-full justify-center items-center relative'>
              <Typography
                variant='h2'
                className='font-primary my-16 2xl:my-20'
                data-aos='fade-up'
              >
                frequently asked question
              </Typography>
              <div className='p-6 shadow-pendaftaran rounded-xl bg-typo-white max-w-4xl w-full'>
                <div className='mt-6 flex flex-col'>
                  {FAQKTIContents.slice(0, 5).map((faq, index) => (
                    <AccordionKti {...faq} key={index} />
                  ))}
                </div>
                <ButtonLink
                  variant='discolored'
                  size='large'
                  href='/'
                  className='w-full text-tainted-100 text-center bg-tainted-900'
                >
                  Lihat Lebih Lanjut <BiChevronDown />
                </ButtonLink>
              </div>
            </div>
          </div>
        </section>

        {/* Pattern Section */}
        <section id='pattern' className='w-full bg-tainted-100 relative'>
          <NextImage
            src='/kti/faq-right-statue.png'
            alt='statue illustration'
            width='280'
            height='441'
            className='absolute right-0 -bottom-8 z-10'
          />
          <NextImage
            src='/kti/faq-left-statue.png'
            alt='statue illustration'
            width='180'
            height='637'
            className='absolute left-0 -bottom-8 z-10'
          />
          <NextImage
            src='/kti/footer.png'
            alt='footer'
            width='1440'
            height='87'
            className='w-full'
          />
        </section>
      </main>
    </Layout>
  );
}
