import 'aos/dist/aos.css';
import 'swiper/css';
import 'swiper/css/autoplay';

import AOS from 'aos';
import { useEffect } from 'react';
import React from 'react';
import { IoIosArrowDown } from 'react-icons/io';

import Accordion from '@/components/disclosure/Accordion';
import ShowMoreAccordion from '@/components/disclosure/ShowMoreAccordion';
import ButtonLink from '@/components/links/ButtonLink';
import NextImage from '@/components/NextImage';
import SEO from '@/components/SEO';
import Typography from '@/components/typography/Typography';
import landingTimelineKtiContents from '@/contents/pre-event/kti/landing-timeline';
import { FAQKTIContents } from '@/contents/pre-event/kti/tampilan-awal';
import Layout from '@/layouts/Layout';
import clsxm from '@/lib/clsxm';
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
        title='Karya tulis ilmiah'
        description='Karya Tulis Ilmiah merupakan salah satu ajang lomba bergengsi dari cabang kompetisi ITS Expo 2023 yang ditujukan kepada mahasiswa S1/D4/Sederajat.'
      />
      <main className='flex flex-col scroll-smooth bg-[#fdeeca]'>
        {/* Hero Section */}
        <section
          id='hero'
          className='relative w-full h-screen flex flex-col justify-center bg-tainted-100'
        >
          <HeroBackgroundKti />
          {/* Hero Content */}
          <div
            className={clsxm(
              'flex px-1 md:px-0 w-full sm:w-11/12 flex-col items-center justify-between mx-auto pt-24 sm:pt-32',
              'lg:flex-row lg:pt-0 gap-10 md:gap-4 lg:gap-0'
            )}
          >
            <div
              className='flex flex-col items-center lg:items-start'
              data-aos='fade-up'
            >
              <Typography
                variant='h3'
                className='font-primary text-5xl md:text-[64px]'
              >
                its expo 2023
              </Typography>
              <Typography
                variant='h3'
                className='font-secondary font-semibold text-critical-600 leading-normal sm:leading-tight lg:text-start text-center text-5xl md:text-[64px] '
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
              className='w-[75%] sm:w-[27%]'
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
              'mx-auto w-10 h-10 flex justify-center items-center rounded-full bg-success-600 cursor-pointer mt-12 xl:mt-0 z-10 relative',
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
          className='w-full flex flex-col justify-center items-center bg-gradient-to-b from-[#DD8D00] to-[#804400] relative'
        >
          <NextImage
            src='/kti/hero-bottom.png'
            alt='pattern illustration'
            width='1440'
            height='163'
            className='min-w-full absolute -top-5 sm:-top-10 md:-top-14 lg:-top-[3.5rem] xl:-top-[5.5rem] 2xl:-top-[7rem]'
            priority={true}
          />
          <div className='relative w-full'>
            <AboutBackgroundKti />

            {/* About Content */}
            <div
              className='flex w-full justify-center items-center flex-col pt-14 sm:pt-28 pb-44 sm:pb-80 md::pb-56'
              data-aos='fade-up'
            >
              <div className='flex flex-col space-y-4 text-white items-center'>
                <Typography
                  variant='h2'
                  className='font-primary text-white px-14 sm:px-0 text-center'
                >
                  karya tulis ilmiah
                </Typography>
                <Typography
                  variant='h6'
                  color='tertiary'
                  className='font-secondary font-thin md:max-w-2xl lg:max-w-4xl xl:max-w-6xl text-sm md:text-[22px] leading-relaxed md:leading-normal text-justify sm:text-center px-4 sm:px-8 md:px-0'
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
              </div>
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section
          id='timeline'
          className='relative w-full flex flex-col items-center bg-[#2A607B] pt-16 sm:pt-36 pb-36 sm:pb-60'
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
              className='absolute -left-20 sm:-left-28 md:-left-40 top-20 sm:top-[4.5rem] md:top-4 w-[50%] sm:w-[60%]'
              data-aos='fade-right'
            />
            <NextImage
              src='/kti/timeline-right-flower.png'
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
          <div className='relative w-full pb-16 sm:pb-52'>
            <HadiahKtiBackground />
            {/* Hadiah Content */}
            <div className='flex flex-col w-full justify-center items-center text-center px-4 sm:px-8'>
              <Typography
                variant='h2'
                className='font-primary text-3xl sm:text-5xl'
                data-aos='fade-up'
              >
                hadiah pemenang
              </Typography>
              <div
                data-aos='fade-up'
                className='flex flex-col items-center w-full max-w-[1200px] bg-white rounded-2xl px-4 sm:px-10 pt-6 sm:pt-14 pb-4 sm:pb-10 relative mt-20 sm:mt-64 gap-y-4'
              >
                <NextImage
                  src='/kti/hadiah-icon.png'
                  alt='pattern illustration'
                  width='573'
                  height='306'
                  className='absolute -top-60 z-10 hidden sm:block'
                  priority={true}
                />
                <NextImage
                  src='/kti/hadiah-mobile-icon.png'
                  alt='pattern illustration'
                  width='232'
                  height='126'
                  className='absolute -top-[4.4rem] block sm:hidden z-10'
                  priority={true}
                />
                <div
                  className='relative flex min-h-[48px] sm:min-h-[103px] w-full items-center justify-center rounded-xl bg-gradient-to-r from-[#2A607B] via-[#7DB85C] to-[#7DB85C] overflow-hidden'
                  data-aos='fade-up'
                  aos-delay='100'
                >
                  <NextImage
                    src='/kti/hadiah-medal-1.png'
                    alt='medal illustration'
                    width='52'
                    height='74'
                    className='absolute top-0 sm:block hidden left-14'
                    priority={true}
                  />
                  <NextImage
                    src='/kti/hadiah-mobile-medal-1.png'
                    alt='medal illustration'
                    width='40'
                    height='40'
                    className='absolute top-0 block sm:hidden left-4'
                    priority={true}
                  />
                  <NextImage
                    src='/kti/hadiah-juara-1.png'
                    alt='pattern illustration'
                    width='260'
                    height='78'
                    className='absolute bottom-0 right-0 w-[25%] md:w-[30%] lg:w-[23%]'
                    priority={true}
                  />
                  <Typography
                    variant='h5'
                    className='font-secondary text-white font-semibold sm:font-normal text-base sm:text-[32px]'
                  >
                    Rp.2.500.000,-
                  </Typography>
                </div>
                <div
                  className='relative flex min-h-[48px] sm:min-h-[103px] w-full items-center justify-center rounded-xl bg-gradient-to-r from-[#7DB85C] via-[#E0AC47] to-[#E0AC47] overflow-hidden'
                  data-aos='fade-up'
                  aos-delay='200'
                >
                  <NextImage
                    src='/kti/hadiah-medal-2.png'
                    alt='medal illustration'
                    width='78'
                    height='76'
                    className='absolute top-0 sm:block hidden left-11'
                    priority={true}
                  />
                  <NextImage
                    src='/kti/hadiah-mobile-medal-2.png'
                    alt='medal illustration'
                    width='40'
                    height='40'
                    className='absolute top-0 block sm:hidden left-4'
                    priority={true}
                  />
                  <NextImage
                    src='/kti/hadiah-juara-2.png'
                    alt='pattern illustration'
                    width='260'
                    height='78'
                    className='absolute bottom-0 right-0 w-[25%] md:w-[30%] lg:w-[23%]'
                    priority={true}
                  />
                  <Typography
                    variant='h5'
                    className='font-secondary text-white font-semibold sm:font-normal text-base sm:text-3xl'
                  >
                    Rp.2.000.000,-
                  </Typography>
                </div>
                <div
                  className='relative flex min-h-[48px] sm:min-h-[103px] w-full items-center justify-center rounded-xl bg-gradient-to-r from-[#94391D] via-[#687DA2] to-[#687DA2] overflow-hidden'
                  data-aos='fade-up'
                  aos-delay='300'
                >
                  <NextImage
                    src='/kti/hadiah-medal-3.png'
                    alt='medal illustration'
                    width='76'
                    height='74'
                    className='absolute top-0 sm:block hidden left-11'
                    priority={true}
                  />
                  <NextImage
                    src='/kti/hadiah-mobile-medal-3.png'
                    alt='medal illustration'
                    width='40'
                    height='40'
                    className='absolute top-0 block sm:hidden left-4'
                    priority={true}
                  />
                  <NextImage
                    src='/kti/hadiah-juara-3.png'
                    alt='pattern illustration'
                    width='260'
                    height='78'
                    className='absolute bottom-0 right-0 w-[25%] md:w-[30%] lg:w-[23%]'
                    priority={true}
                  />
                  <Typography
                    variant='h5'
                    className='font-secondary text-white font-semibold sm:font-normal text-base sm:text-3xl'
                  >
                    Rp.1.000.000,-
                  </Typography>
                </div>
                <div
                  className='relative flex min-h-[48px] sm:min-h-[103px] w-full items-center justify-center rounded-xl bg-gradient-to-r from-[#E7C055] via-[#6C915C] to-[#6C915C] overflow-hidden'
                  data-aos='fade-up'
                  aos-delay='400'
                >
                  <NextImage
                    src='/kti/hadiah-juara-1.png'
                    alt='pattern illustration'
                    width='260'
                    height='78'
                    className='absolute bottom-0 right-0 w-[25%] md:w-[30%] lg:w-[23%]'
                    priority={true}
                  />
                  <Typography
                    variant='h6'
                    className='font-secondary text-white font-semibold sm:font-normal text-xs sm:text-3xl absolute left-4 sm:left-11'
                  >
                    Best <br /> Poster
                  </Typography>
                  <Typography
                    variant='h5'
                    className='font-secondary text-white font-semibold sm:font-normal text-base sm:text-3xl'
                  >
                    Rp.500.000,-
                  </Typography>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Guide Section */}
        <section
          id='guide'
          className='relative bg-[#00587A] pt-0 md:pt-28 2xl:pt-36 pb-24 sm:pb-52'
        >
          <div className='relative w-full '>
            <GuideKtiBackground />
            {/* Guide Content */}
            <div className='flex flex-col w-full justify-center items-center relative px-8'>
              <div className='relative z-20'>
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
                  className='absolute -left-20 sm:-left-44 md:-left-52  lg:-left-80 top-20 sm:top-12 md:-top-6 w-[40%] sm:w-[75%]'
                  data-aos='fade-right'
                />
                <NextImage
                  src='/kti/guide-left-vine.png'
                  alt='guide right vine'
                  width='228'
                  height='226'
                  className='absolute -right-20 sm:-right-44 md:-right-52 lg:-right-80 top-20 sm:top-12 md:-top-6 w-[40%] sm:w-[75%]'
                  data-aos='fade-left'
                />
              </div>
              <div className='w-full max-w-[47rem]' data-aos='fade-up'>
                <div className='w-full min-h-[514px] rounded-xl bg-white'></div>
                <ButtonLink
                  variant='yellow'
                  href='/'
                  size='base'
                  className='w-full mt-4 min-h-[25px] md:min-h-[48px]'
                >
                  Download Guidebook
                </ButtonLink>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id='guide' className='relative w-full '>
          <div className='relative w-full bg-tainted-100 pt-0 sm:pt-14 pb-14 sm:pb-32'>
            {/* FAQ Content */}
            <div className='flex flex-col w-full justify-center items-center relative z-20 px-8'>
              <Typography
                variant='h2'
                className='font-primary my-16 2xl:my-20 text-center sm:block hidden'
                data-aos='fade-up'
              >
                frequently asked question
              </Typography>
              <Typography
                variant='h5'
                className='font-primary my-8 sm:my-16 2xl:my-20 text-center text-[32px] block sm:hidden'
                data-aos='fade-up'
              >
                frequently
                <br /> asked question
              </Typography>
              <div
                className='p-6 shadow-pendaftaran rounded-xl bg-typo-white max-w-4xl w-full '
                data-aos='fade-up'
              >
                <div className='space-y-4'>
                  {FAQKTIContents.slice(0, 5).map((faq, index) => (
                    <Accordion
                      key={index}
                      title={faq.title}
                      className='bg-tainted-300 text-tainted-900'
                    >
                      <Typography
                        variant='b2'
                        className='text-tainted-800 text-sm md:text-base'
                      >
                        {faq.content}
                        {faq.winner_prize?.map((prizes, index) => (
                          <li
                            key={index}
                            className='list-item list-disc ml-4 pb-2 text-tainted-800 text-sm md:text-base'
                          >
                            <Typography
                              variant='b2'
                              className='text-tainted-800 text-sm md:text-base pl-2'
                            >
                              {prizes}
                            </Typography>
                          </li>
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
                      {FAQKTIContents.slice(5).map((faq, index) => (
                        <Accordion
                          key={index}
                          title={faq.title}
                          className='bg-tainted-300 text-tainted-900'
                        >
                          <Typography
                            variant='b2'
                            className='text-tainted-800 text-sm md:text-base'
                          >
                            {faq.content}
                            {faq.winner_prize?.map((prizes, index) => (
                              <li
                                key={index}
                                className='list-item list-disc ml-4 pb-2 text-tainted-800 text-sm md:text-base'
                              >
                                <Typography
                                  variant='b2'
                                  className='text-tainted-800 text-sm md:text-base pl-2'
                                >
                                  {prizes}
                                </Typography>
                              </li>
                            ))}
                          </Typography>
                        </Accordion>
                      ))}
                    </div>
                  </ShowMoreAccordion>
                </div>
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
            className='absolute right-0 -bottom-8 z-10 sm:block hidden'
            data-aos='fade-left'
          />
          <NextImage
            src='/kti/faq-left-statue.png'
            alt='statue illustration'
            width='180'
            height='637'
            className='absolute left-0 -bottom-8 z-10 sm:block hidden'
            data-aos='fade-right'
          />
          <NextImage
            src='/kti/footer.png'
            alt='footer'
            width='1440'
            height='87'
            className='min-w-full sm:block hidden'
            data-aos='fade-right'
          />
          <NextImage
            src='/kti/mobile-footer.png'
            alt='footer'
            width='601'
            height='91'
            className='min-w-full block sm:hidden'
            data-aos='fade-right'
          />
        </section>
      </main>
    </Layout>
  );
}
