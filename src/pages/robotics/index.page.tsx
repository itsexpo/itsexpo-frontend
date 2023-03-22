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
import landingTimelineRoboticsContents from '@/contents/pre-event/robotik/landing-timeline';
import { FAQRobotikContents } from '@/contents/pre-event/robotik/tampilan-awal';
import Layout from '@/layouts/Layout';
import clsxm from '@/lib/clsxm';
import AccordionRobotik from '@/pages/robotics/components/AccordionRobotik';
import { AboutBackgroundRobotics } from '@/pages/robotics/container/AboutBackgroundRobotics';
import { GuidebookBackgroundrobotics } from '@/pages/robotics/container/GuidebookBackgroundrobotics';
import { HadiahRobotikBackground } from '@/pages/robotics/container/HadiahRobotikBackground';
import { HeroBackgroundrobotics } from '@/pages/robotics/container/HeroBackgroundrobotics';
import { Reward1 } from '@/pages/robotics/container/Reward1';
import { Reward2 } from '@/pages/robotics/container/Reward2';
import { TimelineBackground } from '@/pages/robotics/container/TimelineBackgroundRobotics';

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);

  const aboutRef = React.useRef<HTMLElement>(null);

  return (
    <Layout>
      <SEO
        title='Robot in Action'
        description='Robotiks merupakan salah satu ajang lomba bergengsi dari cabang kompetisi ITS Expo 2023 yang ditujukan kepada mahasiswa S1/D4/Sederajat.'
      />
      <main className='flex flex-col scroll-smooth bg-[#fdeeca]'>
        {/* Hero Section */}
        <section
          id='hero'
          className='relative w-full h-screen flex flex-col justify-center bg-tainted-100'
        >
          <HeroBackgroundrobotics />
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
                className='font-primary text-5xl md:text-[64px] mb-2 md:mb-0'
              >
                its expo 2023
              </Typography>
              <Typography
                variant='h3'
                className='font-secondary font-semibold text-critical-600 leading-normal sm:leading-tight lg:text-start text-center text-4xl md:text-[64px] '
              >
                Robot in Action
              </Typography>
            </div>
            <NextImage
              src='/robotics/hero.png'
              alt='landing hero right background'
              width='1195'
              height='908'
              priority={true}
              className='w-[80%] sm:w-[40%]'
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
            src='/robotics/hero-bottom.png'
            alt='pattern illustration'
            width='1440'
            height='163'
            className='min-w-full absolute -top-6 hidden sm:block sm:-top-10 md:-top-14 lg:-top-[3.5rem] xl:-top-[5.5rem] 2xl:-top-[7rem]'
            priority={true}
          />
          <NextImage
            src='/robotics/hero-bottom-mobile.png'
            alt='pattern illustration'
            width='586'
            height='116'
            className='min-w-full absolute -top-8 xs:-top-14 block sm:hidden'
            priority={true}
          />
          <div className='relative w-full'>
            <AboutBackgroundRobotics />

            {/* About Content */}
            <div
              className='layout flex justify-center items-center flex-col pt-14 sm:pt-28 pb-44 sm:pb-80 md:pb-48'
              data-aos='fade-up'
            >
              <div className='layout flex flex-col space-y-4 text-white items-center'>
                <Typography
                  variant='h4'
                  className='font-primary text-white text-3xl md:text-7xl px-14 sm:px-0 text-center'
                >
                  Robot in Action
                </Typography>
                <Typography
                  variant='h6'
                  color='tertiary'
                  className='font-secondary font-thin md:max-w-2xl lg:max-w-4xl xl:max-w-6xl text-sm md:text-[22px] leading-relaxed md:leading-normal text-center px-4 sm:px-8 md:px-0'
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
              </div>
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section
          id='timeline'
          className='relative w-full flex flex-col items-center bg-[#2A607B] pt-16 sm:pt-36 pb-28 sm:pb-60'
        >
          <TimelineBackground />
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
              src='/robotics/timeline-left-flower.png'
              alt='timeline left flower'
              width='118'
              height='77'
              className='absolute -left-20 sm:-left-28 md:-left-40 top-20 sm:top-[4.5rem] md:top-4 w-[50%] sm:w-[60%]'
              data-aos='fade-right'
            />
            <NextImage
              src='/robotics/timeline-right-flower.png'
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
              {landingTimelineRoboticsContents.map((content, index) => {
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
            <HadiahRobotikBackground />
            {/* Hadiah Content */}
            <div className='flex flex-col w-full justify-center items-center text-center px-4 sm:px-8'>
              <Typography
                variant='h2'
                className='font-primary text-3xl sm:text-5xl'
                data-aos='fade-up'
              >
                hadiah pemenang
              </Typography>
            </div>
            <div className='layout grid grid-cols-1 md:grid-cols-2 gap-4 pb-10'>
              <div>
                <div className='relative left-[18%] md:left-[10%] top-10 sm:top-0 md:top-14 lg:top-6'>
                  <NextImage
                    src='/robotics/hadiah-title-1.png'
                    alt='medal'
                    width='1146'
                    height='612'
                    className='absolute w-4/5 hidden md:block z-[1]'
                    data-aos='zoom-in'
                  />
                  <NextImage
                    src='/robotics/hadiah-title-mobile-1.png'
                    alt='title'
                    width='447'
                    height='253'
                    className='absolute w-2/3 block md:hidden z-[1]'
                    data-aos='zoom-in'
                  />
                </div>
                <div
                  className='grid grid-cols-1 items-center justify-center rounded-xl bg-white md:mx-20 mt-[118px] xs:mt-44 sm:mt-36 md:mt-40 lg:mt-44 xl:mt-48 2xl:mt-48'
                  data-aos='fade-down'
                >
                  <Reward1 />
                </div>
              </div>

              <div>
                <div className='relative left-[18%] md:left-[10%] top-10 sm:top-0 md:top-14 lg:top-6'>
                  <NextImage
                    src='/robotics/hadiah-title-2.png'
                    alt='title'
                    width='1146'
                    height='612'
                    className='absolute w-4/5 hidden md:block z-[1]'
                    data-aos='zoom-in'
                  />
                  <NextImage
                    src='/robotics/hadiah-title-mobile-2.png'
                    alt='title'
                    width='447'
                    height='253'
                    className='absolute w-2/3 block md:hidden z-[1]'
                    data-aos='zoom-in'
                  />
                </div>
                <div
                  className='relative grid grid-cols-1 justify-center rounded-xl bg-white md:mx-20 mt-[118px] xs:mt-44 sm:mt-36 md:mt-40 lg:mt-44 xl:mt-48 2xl:mt-48'
                  data-aos='fade-down'
                >
                  <Reward2 />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Guide Section */}
        <section
          id='guide'
          className='relative bg-[#00587A] pt-0 md:pt-28 2xl:pt-36 pb-20 sm:pb-24 md:pb-44'
        >
          <div className='relative w-full '>
            <GuidebookBackgroundrobotics />
            {/* Guide Content */}
            <div className='flex flex-col w-full justify-center items-center relative px-8'>
              <div className='relative z-20'>
                <Typography
                  variant='h2'
                  className='font-primary text-typo-white my-7 md:mt-0 md:mb-14'
                  data-aos='fade-up'
                >
                  guidebook
                </Typography>
                <NextImage
                  src='/robotics/guide-right-vine.png'
                  alt='guide left vine'
                  width='228'
                  height='226'
                  className='absolute -left-20 sm:-left-40 md:-left-52 lg:-left-80 top-10 sm:top-12 md:-top-6 w-[40%] sm:w-[50%] md:w-[75%]'
                  data-aos='fade-right'
                />
                <NextImage
                  src='/robotics/guide-left-vine.png'
                  alt='guide right vine'
                  width='228'
                  height='226'
                  className='absolute -right-20 sm:-right-40 md:-right-52 lg:-right-80 top-10 sm:top-12 md:-top-6 w-[40%] sm:w-[50%] md:w-[75%]'
                  data-aos='fade-left'
                />
              </div>
              <div className='w-full max-w-[47rem] z-50' data-aos='fade-up'>
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
        <section id='guide' className='relative w-full '>
          <div className='relative w-full bg-tainted-100 pt-0 sm:pt-14 pb-14 sm:pb-32'>
            {/* FAQ Content */}
            <div className='flex flex-col w-full justify-center items-center relative z-20 px-8'>
              <Typography
                variant='h2'
                className='font-primary my-10 text-center sm:block hidden'
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
                <div className='sm:mt-6 flex flex-col'>
                  {FAQRobotikContents.slice(0, 5).map((faq, index) => (
                    <AccordionRobotik {...faq} key={index} />
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
            src='/robotics/faq-right-statue.png'
            alt='statue illustration'
            width='280'
            height='441'
            className='absolute right-0 -bottom-8 z-10 sm:block hidden'
            data-aos='fade-left'
          />
          <NextImage
            src='/robotics/faq-left-statue.png'
            alt='statue illustration'
            width='180'
            height='637'
            className='absolute left-0 -bottom-8 z-10 sm:block hidden'
            data-aos='fade-right'
          />
          <NextImage
            src='/robotics/footer.png'
            alt='footer'
            width='1440'
            height='87'
            className='min-w-full sm:block hidden'
            data-aos='fade-right'
          />
          <NextImage
            src='/robotics/mobile-footer.png'
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
