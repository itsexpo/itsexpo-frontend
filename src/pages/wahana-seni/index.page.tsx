import 'aos/dist/aos.css';

import AOS from 'aos';
import React, { useEffect } from 'react';
import { IoIosArrowDown } from 'react-icons/io';

import Accordion from '@/components/disclosure/Accordion';
import ShowMoreAccordion from '@/components/disclosure/ShowMoreAccordion';
import ButtonLink from '@/components/links/ButtonLink';
import NextImage from '@/components/NextImage';
import PDFFlipBook from '@/components/PdfFlipBook';
import SEO from '@/components/SEO';
import Typography from '@/components/typography/Typography';
import { FAQWahanaContents } from '@/contents/wahana-seni/faq-wahana';
import landingTimelineWahanaContents from '@/contents/wahana-seni/landing-timeline';
import Layout from '@/layouts/Layout';
import clsxm from '@/lib/clsxm';
import { AboutBackgroundWahanaSeni } from '@/pages/wahana-seni/container/AboutBackground';
import FaqBackground from '@/pages/wahana-seni/container/FaqBackground';
import HadiahBackground from '@/pages/wahana-seni/container/HadiahBackground';
import { HeroBackgroundWahanaSeni } from '@/pages/wahana-seni/container/HeroBackgroundWahanaSeni';
import { TimelineWahanaBackground } from '@/pages/wahana-seni/container/TimelineBackgroud';

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);

  const aboutRef = React.useRef<HTMLDivElement>(null);

  return (
    <Layout>
      <SEO title='Wahana Seni' />
      <main className='flex flex-col scroll-smooth bg-tainted-100'>
        <section
          id='hero'
          className='relative w-full h-screen flex flex-col justify-center bg-tainted-100'
        >
          <HeroBackgroundWahanaSeni />
          <div className='flex flex-col items-center p-4 gap-y-2'>
            <div
              className='flex flex-col items-center -space-y-4 md:-space-y-6 md:mt-10'
              data-aos='fade-up'
            >
              <Typography variant='h2' className='font-primary'>
                its expo 2023
              </Typography>
              <Typography
                variant='h2'
                className='font-bold text-center text-[#00587A]'
                font='secondary'
              >
                Sayembara Karya Mahasiswa
              </Typography>
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
                'mt-16 md:mt-40 w-10 h-10 flex justify-center items-center rounded-full bg-success-800 cursor-pointer',
                'animate-bounce'
              )}
              data-aos='fade-up'
              data-aos-delay='200'
            >
              <IoIosArrowDown className='fill-warning-100 w-5 h-5' />
            </div>
          </div>
        </section>

        {/* About Section */}
        <section
          ref={aboutRef}
          className='w-full flex flex-col justify-center items-center relative bg-tainted-100'
        >
          <NextImage
            src='/wahana-seni/hero-bottom.png'
            alt='pattern illustration'
            width='2880'
            height='175'
            className='w-[1440px] min-w-full'
            priority={true}
          />
          <div className='relative w-full'>
            {/* About Content */}
            <div
              className='layout flex justify-center items-center flex-col pt-14 sm:pt-28 pb-32 sm:pb-80 md:pb-48'
              data-aos='fade-up'
            >
              <div className='relative grid grid-cols-3 max-w-full justify-center items-center mx-auto mb-10'>
                <div className='flex flex-col'>
                  <NextImage
                    src='/landing/contact-title-left.png'
                    alt='contact support title left'
                    width='834'
                    height='721'
                    className='absolute w-1/5 sm:w-[18%] md:w-[12%] ml-6 md:ml-40 top-1/2 sm:top-1/4 md:top-1/3'
                    data-aos='fade-right'
                  />
                </div>

                <div className='relative flex flex-col top-6 sm:top-6 md:top-12'>
                  <Typography
                    variant='h2'
                    as='h2'
                    className='text-typo-black text-center md:-translate-y-3'
                    font='upakarti'
                  >
                    Selamat Datang!
                  </Typography>
                </div>
                <div className='flex flex-col'>
                  <NextImage
                    src='/landing/contact-title-right.png'
                    alt='contact support title left'
                    width='834'
                    height='721'
                    className='absolute w-1/5 sm:w-[18%] md:w-[12%] right-0 mr-6 md:mr-40 top-1/2 sm:top-1/4 md:top-1/3'
                    data-aos='fade-left'
                  />
                </div>
              </div>
              <div className='flex flex-col space-y-4 text-white items-center'>
                <Typography
                  variant='h6'
                  color='tertiary'
                  className='font-secondary text-black leading-relaxed md:leading-normal text-justify md:text-center px-4 sm:px-8 md:px-0 pt-10 pb-16 md:pb-28'
                >
                  Sayembara Karya Mahasiswa merupakan salah satu kegiatan dari
                  Wahana Seni yang mengajak para mahasiswa untuk menyertakan
                  karyanya dalam bentuk karya seni 2D dan 3D, dimana karya-karya
                  tersebut akan dipajang pada Exhibition ITS EXPO 2023.
                  Sayembara Karya ini merupakan salah satu usaha ITS EXPO 2023
                  dalam mewadahi minat mahasiswa ITS khususnya pada bidang seni
                </Typography>
              </div>
            </div>
          </div>
          <AboutBackgroundWahanaSeni />
          <NextImage
            src='/wahana-seni/about-bottom.png'
            alt='hadiah illustration'
            width='2880'
            height='270'
            className='w-full absolute -bottom-[1rem] xs:-bottom-6 sm:-bottom-7 md:-bottom-10 lg:-bottom-10 xl:-bottom-[3.25rem] 2xl:-bottom-[3.5rem] z-10'
            priority={true}
          />
        </section>

        {/* Timeline Section */}
        <section
          id='timeline'
          className='relative w-full flex flex-col items-center bg-[#2A607B] pt-16 sm:pt-36 pb-28 sm:pb-96'
        >
          <TimelineWahanaBackground />
          {/* Timeline Content */}
          <div className='relative'>
            <Typography
              variant='h2'
              className='font-primary text-typo-white my-16 md:mt-0 md:mb-20'
              data-aos='fade-up'
            >
              timeline
            </Typography>
            <NextImage
              src='/wahana-seni/timeline-left-flower.png'
              alt='timeline left flower'
              width='118'
              height='77'
              className='absolute -left-20 sm:-left-28 md:-left-40 top-20 sm:top-[4.5rem] md:top-4 w-[50%] sm:w-[60%]'
              data-aos='fade-right'
            />
            <NextImage
              src='/wahana-seni/timeline-right-flower.png'
              alt='timeline right flower'
              width='118'
              height='77'
              className='absolute -right-20 sm:-right-28 md:-right-40 top-20 sm:top-[4.5rem] md:top-4 w-[50%] sm:w-[60%]'
              data-aos='fade-left'
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
              {landingTimelineWahanaContents.map((content, index) => {
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
                        className='font-bold text-typo-white text-[18px]'
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
          <NextImage
            src='/wahana-seni/timeline-bottom1.png'
            alt='pattern'
            width='1440'
            height='260'
            className='absolute w-full bottom-0 z-[1]'
          />
        </section>

        {/* Hadiah Section */}
        <section
          id='hadiah'
          className='relative bg-tainted-100 -top-1 sm:top-0 z-10'
        >
          <HadiahBackground />
          <div className='relative w-full py-16 sm:pb-52'>
            {/* Hadiah Content */}
            <div className='flex flex-col w-full justify-center items-center text-center px-4 sm:px-8'>
              <Typography
                variant='h2'
                className='font-primary text-[32px] sm:text-7xl mb-5 sm:mb-0'
                data-aos='fade-up'
              >
                hadiah pemenang
              </Typography>
              <div
                data-aos='fade-up'
                className='flex flex-col items-center w-full max-w-[1200px] bg-white rounded-2xl px-4 sm:px-10 pt-6 sm:pt-14 pb-4 sm:pb-10 relative mt-20 sm:mt-64 gap-y-4'
              >
                <NextImage
                  src='/wahana-seni/hadiah-icon.png'
                  alt='pattern illustration'
                  width='573'
                  height='306'
                  className='absolute -top-60 z-10 hidden sm:block'
                  priority={true}
                />
                <NextImage
                  src='/wahana-seni/hadiah-mobile-icon.png'
                  alt='pattern illustration'
                  width='223'
                  height='126'
                  className='absolute -top-[6rem] block sm:hidden z-10'
                  priority={true}
                />
                <div
                  className='relative flex min-h-[48px] sm:min-h-[103px] w-full items-center justify-center rounded-xl bg-gradient-to-r from-[#2A607B] via-[#7DB85C] to-[#7DB85C] overflow-hidden'
                  data-aos='fade-up'
                  aos-delay='100'
                >
                  <NextImage
                    src='/wahana-seni/hadiah-juara-1.png'
                    alt='pattern illustration'
                    width='260'
                    height='78'
                    className='absolute bottom-0 right-0 w-[25%] md:w-[30%] lg:w-[23%]'
                    priority={true}
                  />
                  <div className='flex flex-col items-center justify-center'>
                    <Typography
                      variant='h6'
                      className='font-secondary text-white font-bold text-xs sm:text-3xl'
                    >
                      Winner
                    </Typography>
                    <Typography
                      variant='h5'
                      className='font-secondary text-white font-semibold text-base sm:text-3xl'
                    >
                      Rp 1.000.000,-
                    </Typography>
                  </div>
                </div>
                <div
                  className='relative flex min-h-[48px] sm:min-h-[103px] w-full items-center justify-center rounded-xl bg-gradient-to-r from-[#F66433] via-[#E0AC47] to-[#E0AC47] overflow-hidden'
                  data-aos='fade-up'
                  aos-delay='200'
                >
                  <NextImage
                    src='/wahana-seni/hadiah-juara-2.png'
                    alt='pattern illustration'
                    width='260'
                    height='78'
                    className='absolute bottom-0 right-0 w-[25%] md:w-[30%] lg:w-[23%]'
                    priority={true}
                  />
                  <div className='flex flex-col items-center justify-center'>
                    <Typography
                      variant='h6'
                      className='font-secondary text-white font-bold text-xs sm:text-3xl'
                    >
                      Runner-Up
                    </Typography>
                    <Typography
                      variant='h5'
                      className='font-secondary text-white font-semibold text-base sm:text-3xl'
                    >
                      Rp 500.000,-
                    </Typography>
                  </div>
                </div>
                <div
                  className='relative flex min-h-[48px] sm:min-h-[103px] w-full items-center justify-center rounded-xl bg-gradient-to-r from-[#94391D] via-[#687DA2] to-[#687DA2] overflow-hidden'
                  data-aos='fade-up'
                  aos-delay='300'
                >
                  <NextImage
                    src='/wahana-seni/hadiah-juara-3.png'
                    alt='pattern illustration'
                    width='260'
                    height='78'
                    className='absolute bottom-0 right-0 w-[25%] md:w-[30%] lg:w-[23%]'
                    priority={true}
                  />
                  <div className='flex flex-col items-center justify-center'>
                    <Typography
                      variant='h6'
                      className='font-secondary text-white font-bold text-xs sm:text-3xl'
                    >
                      Karya Favorit
                    </Typography>
                    <Typography
                      variant='h5'
                      className='font-secondary text-white font-semibold text-base sm:text-3xl'
                    >
                      -
                    </Typography>
                  </div>
                </div>
                <div
                  className='relative flex min-h-[48px] sm:min-h-[103px] w-full items-center justify-center rounded-xl bg-gradient-to-r from-[#E7C055] via-[#6C915C] to-[#6C915C] overflow-hidden'
                  data-aos='fade-up'
                  aos-delay='400'
                >
                  <NextImage
                    src='/wahana-seni/hadiah-juara-1.png'
                    alt='pattern illustration'
                    width='260'
                    height='78'
                    className='absolute bottom-0 right-0 w-[25%] md:w-[30%] lg:w-[23%]'
                    priority={true}
                  />
                  <div className='flex flex-col items-center justify-center'>
                    <Typography
                      variant='h6'
                      className='font-secondary text-white font-bold text-xs sm:text-3xl'
                    >
                      Honorable Mention
                    </Typography>
                    <Typography
                      variant='h5'
                      className='font-secondary text-white font-semibold text-base sm:text-3xl'
                    >
                      -
                    </Typography>
                  </div>
                </div>
              </div>
              <div className='w-full max-w-[42rem] items-center justify-center sm:mt-8 gap-4'>
                <Typography
                  variant='h3'
                  className='font-primary text-[32px] sm:text-5xl mt-10 md:mt-24'
                  data-aos='fade-up'
                >
                  Daftarkan Dirimu Sekarang!
                </Typography>
                <div className='flex flex-row items-center justify-center mt-8 gap-8'>
                  <ButtonLink
                    variant='green'
                    href='/dashboard/main-event/wahana-seni/pendaftaran-2d'
                    size='base'
                    className='w-full mt-4 md:min-h-[48px] font-bold'
                  >
                    Daftar 2D
                  </ButtonLink>
                  <ButtonLink
                    variant='green'
                    href='/dashboard/main-event/wahana-seni/pendaftaran-3d'
                    size='base'
                    className='w-full mt-4 md:min-h-[48px] font-bold'
                  >
                    Daftar 3D
                  </ButtonLink>
                </div>
              </div>
            </div>
          </div>

          <NextImage
            src='/wahana-seni/about-bottom.png'
            alt='hadiah illustration'
            width='2880'
            height='270'
            className='w-full absolute -bottom-[1rem] xs:-bottom-6 sm:-bottom-7 md:-bottom-10 lg:-bottom-10 xl:-bottom-[3.25rem] 2xl:-bottom-[3.5rem] z-10'
            priority={true}
          />
        </section>

        {/* Guidebook Section */}
        <section
          id='guide'
          className='relative w-full flex flex-col items-center bg-[#00587A] pt-0 md:pt-28 2xl:pt-36 pb-20 sm:pb-24 md:pb-44'
        >
          <div className='md:relative md:w-full'>
            <NextImage
              src='/wahana-seni/gdbook-left.png'
              alt='guide left vine'
              width='474'
              height='1142'
              className='absolute left-0 w-1/6 hidden sm:block'
              data-aos='fade-right'
            />
            <NextImage
              src='/wahana-seni/gdbook-right.png'
              alt='guide right vine'
              width='541'
              height='1036'
              className='absolute right-0 w-1/6 hidden sm:block'
              data-aos='fade-left'
            />
            <NextImage
              src='/wahana-seni/gdbook-mobile-bot.png'
              alt='guide bottom vine'
              width='375'
              height='373'
              className='absolute bottom-5 ml-2 block sm:hidden'
            />

            {/* Guide Content */}
            <div className='flex flex-col w-full justify-center items-center relative px-8'>
              <div className='relative z-20 mt-5 md:mt-0'>
                <Typography
                  variant='h2'
                  as='h2'
                  className='font-primary text-typo-white my-7 md:mt-0 md:mb-14'
                  data-aos='fade-up'
                >
                  guidebook
                </Typography>
                <NextImage
                  src='/wahana-seni/bunga-guidebook-1.png'
                  alt='guide left vine'
                  width='112'
                  height='112'
                  className='absolute -left-20 sm:-left-40 md:-left-52 lg:-left-24 top-10 md:top-7 w-[30%] md:w-[20%]'
                  data-aos='fade-right'
                />
                <NextImage
                  src='/wahana-seni/bunga-guidebook-2.png'
                  alt='guide right vine'
                  width='112'
                  height='112'
                  className='absolute -right-20 sm:-right-40 md:-right-52 lg:-right-24 top-10 md:top-7 w-[30%] md:w-[20%]'
                  data-aos='fade-left'
                />
              </div>
            </div>
          </div>
          <div className='relative grid grid-cols-1 gap-y-12 justify-center items-center'>
            <div
              className='w-full min-w-[294px] md:w-[47rem] z-50'
              data-aos='fade-up'
            >
              <div className='w-full rounded-xl'>
                <PDFFlipBook pdfUrl='/pdf/wahana-seni/Guidebook Sayembara Karya Mahasiswa 1.pdf' />
              </div>
              <ButtonLink
                variant='yellow'
                href='https://its.id/m/GUIDEBOOKSayembaraKaryaMahasiswa'
                size='base'
                className='w-full mt-4 md:min-h-[48px] font-bold'
              >
                Download Guidebook
              </ButtonLink>
            </div>
          </div>
        </section>

        {/* faq section */}
        <section id='faq' className='relative bg-tainted-100 pb-20 md:pb-56'>
          <FaqBackground />
          <div className='relative layout space-y-2 py-20'>
            <Typography
              variant='h2'
              as='h2'
              className='mt-0 mb-14 text-center sm:block hidden'
              font='upakarti'
              data-aos='fade-up'
            >
              frequently asked question
            </Typography>
            <Typography
              variant='h3'
              className='my-8 sm:my-16 2xl:my-20 text-center text-[32px] block sm:hidden'
              font='upakarti'
              data-aos='fade-up'
            >
              frequently
              <br /> asked question
            </Typography>
            <div
              className='grid grid-cols-1 h-fit overflow-auto max-w-[310px] md:max-w-[953px] bg-white rounded-lg p-4 md:p-8 mt-8 mx-auto '
              data-aos='fade-up'
            >
              <div className='space-y-4'>
                {FAQWahanaContents.slice(0, 5).map((faq, index) => (
                  <Accordion
                    key={index}
                    title={faq.title}
                    className='bg-tainted-300 text-tainted-900'
                  >
                    <Typography
                      variant='b2'
                      className='text-tainted-800 text-sm md:text-base'
                    >
                      {faq.description}
                      {faq.karya?.map((karya, index) => (
                        <ul
                          key={index}
                          className='list-item list-disc ml-4 pb-2 text-tainted-800 text-sm md:text-base'
                        >
                          <Typography
                            variant='b2'
                            className='text-tainted-800 text-sm md:text-base pl-2'
                          >
                            {karya}
                          </Typography>
                        </ul>
                      ))}
                    </Typography>
                    <Typography
                      variant='b2'
                      className='text-tainted-800 text-sm md:text-base'
                    >
                      {faq.detail_description}
                      {faq.karya2?.map((karya, index) => (
                        <ul
                          key={index}
                          className='list-item list-disc ml-4 pb-2 text-tainted-800 text-sm md:text-base'
                        >
                          <Typography
                            variant='b2'
                            className='text-tainted-800 text-sm md:text-base pl-2'
                          >
                            {karya}
                          </Typography>
                        </ul>
                      ))}
                    </Typography>
                  </Accordion>
                ))}

                <ShowMoreAccordion
                  openTitle='Tampilkan Lebih Sedikit'
                  closedTitle='Tampilkan Lebih Banyak'
                  titleClassName='px-6 py-4 rounded-lg bg-tainted-900 text-tainted-100 fill-tainted-100'
                >
                  <div className='space-y-4'>
                    {FAQWahanaContents.slice(5).map((faq, index) => (
                      <Accordion
                        key={index}
                        title={faq.title}
                        className='bg-tainted-300 text-tainted-900'
                      >
                        <Typography
                          variant='b2'
                          className='text-tainted-800 text-sm md:text-base'
                        >
                          {faq.description}
                        </Typography>
                      </Accordion>
                    ))}
                  </div>
                </ShowMoreAccordion>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
