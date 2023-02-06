import 'aos/dist/aos.css';
import 'swiper/css';
import 'swiper/css/autoplay';

import AOS from 'aos';
import { useEffect } from 'react';
import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';
import { IoIosArrowDropdownCircle } from 'react-icons/io';
import { Autoplay } from 'swiper';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';

import ButtonLink from '@/components/links/ButtonLink';
import UnstyledLink from '@/components/links/UnstyledLink';
import NextImage from '@/components/NextImage';
import SEO from '@/components/SEO';
import Typography from '@/components/typography/Typography';
import Layout from '@/layouts/Layout';

function SwiperButton({ direction }: { direction: 'prev' | 'next' }) {
  const swiper = useSwiper();
  return (
    <button className='w-10 h-10 flex justify-center items-center cursor-pointer rounded-full bg-warning-200'>
      {direction === 'prev' && (
        <BsArrowLeftShort
          className='w-7 h-7 fill-warning-800'
          onClick={() => swiper.slidePrev()}
        />
      )}

      {direction === 'next' && (
        <BsArrowRightShort
          className='w-7 h-7 fill-warning-800'
          onClick={() => swiper.slideNext()}
        />
      )}
    </button>
  );
}

export default function Home() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <Layout>
      <SEO title='Home' description='This is the home page' />
      <main className='flex flex-col bg-warning-100 scroll-smooth'>
        {/* Hero Section */}
        <section
          id='hero'
          className='relative w-full h-screen flex flex-col justify-center items-center'
        >
          {/* Hero Illustration */}
          <div className='absolute w-full h-full'>
            <NextImage
              src='/landing/hero-bg-left.png'
              alt='landing hero left background'
              width='462'
              height='690'
              priority={true}
              className='absolute w-4/12 left-0 bottom-0'
            />
            <NextImage
              src='/landing/hero-bg-right.png'
              alt='landing hero right background'
              width='559'
              height='675'
              priority={true}
              className='absolute w-5/12 right-0 bottom-0'
            />
            <NextImage
              src='/landing/hero-figure-left.png'
              alt='landing hero left figure'
              width='501'
              height='618'
              className='absolute w-4/12 left-0 bottom-0'
              data-aos='fade-right'
              data-aos-delay='500'
            />
            <NextImage
              src='/landing/hero-figure-right.png'
              alt='landing hero right figure'
              width='485'
              height='604'
              className='absolute w-4/12 right-0 bottom-0'
              data-aos='fade-left'
              data-aos-delay='500'
            />
            <NextImage
              src='/landing/hero-particles.png'
              alt='landing hero particles'
              width='524'
              height='578'
              className='absolute w-4/12 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'
              data-aos='zoom-out'
              data-aos-delay='600'
            />
          </div>

          {/* Hero Content */}
          <div className='flex flex-col items-center p-4'>
            <div
              className='flex flex-col items-center -space-y-6'
              data-aos='fade-up'
            >
              <Typography variant='h1' className='font-primary'>
                its expo 2023
              </Typography>
              <Typography
                variant='h6'
                className='font-secondary font-semibold text-critical-500'
              >
                Gunita Aksara
              </Typography>
            </div>
            <Typography
              variant='b1'
              color='tertiary'
              className='font-secondary max-w-xl mt-6 text-justify'
              data-aos='fade-up'
              data-aos-delay='100'
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero vitae erat.
            </Typography>
            <UnstyledLink
              href='#pattern'
              className='mt-10'
              data-aos='fade-up'
              data-aos-delay='200'
            >
              <IoIosArrowDropdownCircle className='fill-success-500 w-10 h-10' />
            </UnstyledLink>
          </div>
        </section>

        {/* Pattern Section */}
        <section id='pattern' className='w-full'>
          <NextImage
            src='/landing/pattern.png'
            alt='pattern illustration'
            width='1440'
            height='88'
            className='w-full'
          />
        </section>

        {/* About Section */}
        <section
          id='about'
          className='w-full flex flex-col justify-center items-center'
        >
          <div className='relative w-full'>
            {/* About Illustration */}
            <div className='absolute top-0 w-full h-full flex justify-between'>
              <NextImage
                src='/landing/about-bg-left.png'
                alt='landing about left background'
                width='616'
                height='187'
                priority={true}
              />
              <NextImage
                src='/landing/about-bg-right.png'
                alt='landing about right background'
                width='429'
                height='178'
                priority={true}
              />
            </div>

            {/* About Content */}
            <div
              className='w-full flex flex-row justify-between items-center px-24 pt-10 pb-48'
              data-aos='fade-up'
            >
              <div className='flex flex-col space-y-4'>
                <Typography variant='h2' className='font-primary'>
                  apa itu its expo
                </Typography>
                <Typography
                  variant='b1'
                  color='tertiary'
                  className='font-secondary max-w-2xl'
                >
                  ITS EXPO merupakan sebuah wadah yang diperuntukkan untuk
                  mewadahi seluruh kelauarga Mahasiswa ITS guna mempertunjukkan
                  hasil pemikirannya kepada masyarakat yang diharapkan dapat
                  membawa kebermanfaatan yang nyata
                </Typography>
              </div>

              <ButtonLink href='/' variant='yellow'>
                Baca Selengkapnya
              </ButtonLink>
            </div>
          </div>

          {/* About Slider */}
          <div className='relative w-full pb-20'>
            <div className='absolute w-full h-full bg-gradient-to-b from-primary-800 to-primary-700' />

            <Swiper
              spaceBetween={24}
              slidesPerView={'auto'}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              modules={[Autoplay]}
              className='w-full -mt-36'
              data-aos='fade-left'
            >
              <div className='absolute top-0 w-full h-full flex justify-between items-center px-4 z-10'>
                <SwiperButton direction='prev' />
                <SwiperButton direction='next' />
              </div>
              <SwiperSlide className='max-w-fit'>
                <NextImage
                  src='/landing/about-content-1.png'
                  alt='content gallery'
                  width='496'
                  height='344'
                />
              </SwiperSlide>
              <SwiperSlide className='max-w-fit'>
                <NextImage
                  src='/landing/about-content-2.png'
                  alt='content gallery'
                  width='496'
                  height='344'
                />
              </SwiperSlide>
              <SwiperSlide className='max-w-fit'>
                <NextImage
                  src='/landing/about-content-3.png'
                  alt='content gallery'
                  width='496'
                  height='344'
                />
              </SwiperSlide>
              <SwiperSlide className='max-w-fit'>
                <NextImage
                  src='/landing/about-content-1.png'
                  alt='content gallery'
                  width='496'
                  height='344'
                />
              </SwiperSlide>
              <SwiperSlide className='max-w-fit'>
                <NextImage
                  src='/landing/about-content-2.png'
                  alt='content gallery'
                  width='496'
                  height='344'
                />
              </SwiperSlide>
              <SwiperSlide className='max-w-fit'>
                <NextImage
                  src='/landing/about-content-3.png'
                  alt='content gallery'
                  width='496'
                  height='344'
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </section>

        {/* Timeline Section */}
        <section
          id='timeline'
          className='relative w-full flex flex-col items-center bg-primary-700'
        >
          {/* Timeline Background */}
          <div className='absolute w-full h-full flex justify-center overflow-y-hidden'>
            <NextImage
              src='/landing/timeline-bg-main.png'
              alt='timeline main background'
              width='665'
              height='2000'
              className='absolute top-0'
            />
            <div className='absolute w-full top-0 flex justify-between'>
              <NextImage
                src='/landing/timeline-bg-left.png'
                alt='timeline left background'
                width='363'
                height='1294'
              />
              <NextImage
                src='/landing/timeline-bg-right.png'
                alt='timeline right background'
                width='535'
                height='754'
              />
            </div>
          </div>

          <Typography
            variant='h2'
            className='font-primary text-typo-white mb-40'
            data-aos='fade-up'
          >
            timeline
          </Typography>

          {/* Timeline Content */}
          <div className='relative w-5/12 h-fit grid grid-cols-5 gap-x-8 gap-y-20 font-secondary'>
            <div className='absolute w-1 h-5/6 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-typo' />

            {/* #1 timeline */}
            <div
              className='col-start-3 flex flex-col justify-center items-center'
              data-aos='fade-up'
            >
              <NextImage
                src='/landing/timeline-1.png'
                alt='timeline illustration 1'
                width='121'
                height='51'
              />
            </div>
            <div
              className='col-span-2 flex flex-col space-y-2'
              data-aos='fade-right'
              data-aos-delay='300'
            >
              <Typography variant='h6' className='font-bold text-typo-white'>
                12 Februari 2022
              </Typography>
              <Typography variant='t' className='text-typo-white max-w-xs'>
                Open Recruitment Brand Ambasador
              </Typography>
            </div>

            {/* #2 timeline */}
            <div
              className='col-span-2 flex flex-col items-end space-y-2 text-right'
              data-aos='fade-left'
              data-aos-delay='300'
            >
              <Typography variant='h6' className='font-bold text-typo-white'>
                12 Februari 2022
              </Typography>
              <Typography variant='t' className='text-typo-white max-w-xs'>
                Open Recruitment Brand Ambasador
              </Typography>
            </div>
            <div
              className='col-start-3 flex flex-col justify-center items-center'
              data-aos='fade-up'
            >
              <NextImage
                src='/landing/timeline-2.png'
                alt='timeline illustration 2'
                width='107'
                height='53'
              />
            </div>

            {/* #3 timeline */}
            <div
              className='col-start-3 flex flex-col justify-center items-center'
              data-aos='fade-up'
            >
              <NextImage
                src='/landing/timeline-3.png'
                alt='timeline illustration 3'
                width='108'
                height='54'
              />
            </div>
            <div
              className='col-span-2 flex flex-col space-y-2'
              data-aos='fade-left'
              data-aos-delay='300'
            >
              <Typography variant='h6' className='font-bold text-typo-white'>
                12 Februari 2022
              </Typography>
              <Typography variant='t' className='text-typo-white max-w-xs'>
                Open Recruitment Brand Ambasador
              </Typography>
            </div>

            {/* #4 timeline */}
            <div
              className='col-span-2 flex flex-col items-end space-y-2 text-right'
              data-aos='fade-right'
              data-aos-delay='300'
            >
              <Typography variant='h6' className='font-bold text-typo-white'>
                12 Februari 2022
              </Typography>
              <Typography variant='t' className='text-typo-white max-w-xs'>
                Open Recruitment Brand Ambasador
              </Typography>
            </div>
            <div
              className='col-start-3 flex flex-col justify-center items-center'
              data-aos='fade-up'
            >
              <NextImage
                src='/landing/timeline-4.png'
                alt='timeline illustration 4'
                width='67'
                height='66'
              />
            </div>

            {/* #5 timeline */}
            <div
              className='col-start-3 flex flex-col justify-center items-center'
              data-aos='fade-up'
            >
              <NextImage
                src='/landing/timeline-1.png'
                alt='timeline illustration 1'
                width='121'
                height='51'
              />
            </div>
            <div
              className='col-span-2 flex flex-col space-y-2'
              data-aos='fade-left'
              data-aos-delay='300'
            >
              <Typography variant='h6' className='font-bold text-typo-white'>
                12 Februari 2022
              </Typography>
              <Typography variant='t' className='text-typo-white max-w-xs'>
                Open Recruitment Brand Ambasador
              </Typography>
            </div>
          </div>

          <ButtonLink
            href='/'
            variant='green'
            className='mt-6'
            data-aos='fade-up'
          >
            Lihat Selengkapnya
          </ButtonLink>

          {/* Timeline Illustration */}
          <div className='w-full mt-20'>
            <NextImage
              src='/landing/timeline-illustration.png'
              alt='timeline bottom illustration'
              width='1440'
              height='756'
              className='w-full'
            />
          </div>
        </section>

        {/* Media Partner Section */}
        <section
          id='media-partner'
          className='flex flex-row justify-center items-center space-x-12 py-16 bg-landing-medpar'
        >
          <NextImage
            src='/landing/medpar-1.png'
            alt='media partner relume'
            width='140'
            height='57'
          />
          <NextImage
            src='/landing/medpar-2.png'
            alt='media partner webflow'
            width='120'
            height='49'
          />
          <NextImage
            src='/landing/medpar-1.png'
            alt='media partner relume'
            width='140'
            height='57'
          />
          <NextImage
            src='/landing/medpar-2.png'
            alt='media partner webflow'
            width='120'
            height='49'
          />
          <NextImage
            src='/landing/medpar-1.png'
            alt='media partner relume'
            width='140'
            height='57'
          />
          <NextImage
            src='/landing/medpar-2.png'
            alt='media partner webflow'
            width='120'
            height='49'
          />
          <NextImage
            src='/landing/medpar-1.png'
            alt='media partner relume'
            width='140'
            height='57'
          />
        </section>
      </main>
    </Layout>
  );
}
