import 'aos/dist/aos.css';
import 'swiper/css';
import 'swiper/css/autoplay';

import AOS from 'aos';
import { useEffect, useState } from 'react';
import React from 'react';
import { FiGlobe } from 'react-icons/fi';
import { IoIosArrowDown } from 'react-icons/io';
import { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import Button from '@/components/buttons/Button';
import SwiperButton from '@/components/buttons/SwiperButton';
import ButtonLink from '@/components/links/ButtonLink';
import NextImage from '@/components/NextImage';
import SEO from '@/components/SEO';
import Typography from '@/components/typography/Typography';
import { MainEvent, PreEvent } from '@/contents/pre-event/event';
import landingSwiperContents from '@/contents/pre-event/landing-swiper';
import landingTimelineContents from '@/contents/pre-event/landing-timeline';
import Layout from '@/layouts/Layout';
import clsxm from '@/lib/clsxm';
import MainEventCard from '@/pages/landing/component/MainEventCard';
import PreEventCard from '@/pages/landing/component/PreEventCard';
import { HeroBackground } from '@/pages/landing/container/HeroBackground';
import {
  TimelineBackground1,
  TimelineBackground2,
} from '@/pages/landing/container/TimelineBackground';

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);

  const [preEvent, setPreEvent] = useState<number>(0);

  const aboutRef = React.useRef<HTMLElement>(null);

  return (
    <Layout>
      <SEO />
      <main className='flex flex-col scroll-smooth bg-[#fdeeca]'>
        {/* Hero Section */}
        <section
          id='hero'
          className='relative w-full h-screen flex flex-col justify-center items-center bg-tainted-100'
        >
          <HeroBackground />

          {/* Hero Content */}
          <div className='flex flex-col items-center p-4 gap-y-2'>
            <div
              className='flex flex-col items-center -space-y-4 md:-space-y-6'
              data-aos='fade-up'
            >
              <Typography variant='h1' className='font-primary'>
                its expo 2023
              </Typography>
              <Typography
                variant='h6'
                className='font-secondary font-semibold text-critical-500'
              >
                Gunita Akatara
              </Typography>
            </div>
            <Typography
              variant='b1'
              color='tertiary'
              className='font-secondary max-w-xl mt-6 text-center md:text-justify font-light'
              data-aos='fade-up'
              data-aos-delay='100'
            >
              Salam Seni, Ilmu, dan Budaya
            </Typography>
            <div
              onClick={() =>
                scrollBy({
                  top:
                    (aboutRef.current?.getBoundingClientRect()?.top ?? 0) - 100,
                  behavior: 'smooth',
                })
              }
              className={clsxm(
                'mt-10 w-10 h-10 flex justify-center items-center rounded-full bg-success-600 cursor-pointer',
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
          className='w-full flex flex-col justify-center items-center bg-tainted-100'
        >
          <div className='relative w-full'>
            {/* About Illustration */}
            <NextImage
              src='/landing/about-bg-mobile.png'
              alt='landing about mobile background'
              width='67'
              height='336'
              className='absolute top-0 right-0 block md:hidden pt-10'
            />
            <div className='absolute top-0 w-full h-full hidden md:flex justify-between'>
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
              className={clsxm(
                'w-full flex flex-col xl:flex-row',
                'justify-between items-start lg:items-center',
                'space-y-6 px-4 md:px-24 pt-10 pb-48'
              )}
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
                  Sebuah acara yang mewadahi seluruh Keluarga Mahasiswa ITS
                  untuk mempertunjukan hasil pemikirannya kepada masyarakat umum
                  yang diharapkan membawa kebermanfaatan nyata untuk masyarakat.
                </Typography>
              </div>

              <ButtonLink href='/coming-soon' variant='discolored'>
                Baca Selengkapnya
              </ButtonLink>
            </div>
          </div>

          {/* About Slider */}
          <div className='relative w-full pb-20'>
            <div className='absolute w-full h-full bg-landing-slider' />

            <Swiper
              spaceBetween={24}
              slidesPerView={'auto'}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              loop
              modules={[Autoplay]}
              className='md:w-full -mt-20 md:-mt-32'
              data-aos='fade-left'
            >
              <div className='absolute top-0 left-0 h-full flex items-center px-4 z-10'>
                <SwiperButton direction='prev' size='large' />
              </div>
              <div className='absolute top-0 right-0 h-full flex items-center px-4 z-10'>
                <SwiperButton direction='next' size='large' />
              </div>

              {landingSwiperContents.map((content, index) => (
                <SwiperSlide key={index} className='md:max-w-fit'>
                  <div className='w-full flex justify-center'>
                    <NextImage
                      className='w-3/5 md:w-96'
                      imgClassName='rounded-lg'
                      {...content}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>

        {/* Timeline Section */}
        <section
          id='timeline'
          className='relative w-full flex flex-col items-center bg-[#2A607B]'
        >
          {/* Timeline Background */}
          <TimelineBackground1 />

          <Typography
            variant='h2'
            className='font-primary text-typo-white my-16 md:mt-0 md:mb-40'
            data-aos='fade-up'
          >
            timeline
          </Typography>

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
              {landingTimelineContents.map((content, index) => {
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

          <ButtonLink
            href='/about-us'
            size='large'
            variant='green'
            className='hidden md:block mt-6'
            data-aos='fade-up'
          >
            Lihat Selengkapnya
          </ButtonLink>

          {/* Timeline Illustration */}
          <TimelineBackground2 />
        </section>

        {/* PreEvent Section */}
        <section id='pre-event' className='relative bg-landing-preevent pt-20'>
          <NextImage
            src='/landing/preevent-title-left.png'
            alt='pre-event title left'
            width='793'
            height='512'
            className='absolute left-[7%] lg:left-[13%] md:left-[4%] top-[13%] lg:top-[20%] md:top-[12%] transform -translate-y-1/2 w-[15%] md:w-[10%]'
            data-aos='fade-right'
          />

          <NextImage
            src='/landing/preevent-title-right.png'
            alt='about ctn right'
            width='793'
            height='512'
            className='absolute right-[7%] lg:right-[13%] md:right-[4%] top-[13%] lg:top-[20%] md:top-[12%] transform -translate-y-1/2 w-[15%] md:w-[10%]'
            data-aos='fade-left'
          />
          <div className='layout my-12'>
            <Typography
              variant='h2'
              className='font-primary text-center text-typo-white hidden md:block sm:text-center'
              data-aos='fade-down'
            >
              Pre-Event its expo 2023
            </Typography>
            <Typography
              variant='h2'
              className='font-primary text-center text-typo-white block md:hidden sm:text-center'
              data-aos='fade-down'
            >
              Pre-Event <br /> its expo 2023
            </Typography>
            <div className='grid grid-cols-2 lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-2 gap-4 mt-8 '>
              <Button
                variant='green'
                size='large'
                className={
                  preEvent === 0
                    ? 'border border-white'
                    : 'bg-[#9DBF7D90] z-[1]'
                }
                onClick={() => setPreEvent(0)}
              >
                Robot in Action
              </Button>
              <Button
                variant='green'
                size='large'
                className={
                  preEvent === 1
                    ? 'border border-white'
                    : 'bg-[#9DBF7D90] z-[1]'
                }
                onClick={() => setPreEvent(1)}
              >
                Karya Tulis Ilmiah
              </Button>
              <Button
                variant='green'
                size='large'
                className={
                  preEvent === 2
                    ? 'border border-white'
                    : 'bg-[#9DBF7D90] z-[1]'
                }
                onClick={() => setPreEvent(2)}
              >
                Jurnalistik
              </Button>
              <Button
                variant='green'
                size='large'
                className={
                  preEvent === 3
                    ? 'border border-white'
                    : 'bg-[#9DBF7D90] z-[1]'
                }
                onClick={() => setPreEvent(3)}
              >
                Talkshow
              </Button>
            </div>

            <PreEventCard
              title={PreEvent[preEvent].title}
              description={PreEvent[preEvent].description}
              link={PreEvent[preEvent].link}
              image={PreEvent[preEvent].image}
            />

            {/* PreEvent Background */}
            <NextImage
              src='/landing/preevent-bg-left.png'
              alt='preevent-bg-left'
              width='400'
              height='780'
              imgClassName='object-contain'
              className='absolute z-0 -bottom-[10vw] -left-20 md:-left-0'
            />
            <NextImage
              src='/landing/preevent-bg-right.png'
              alt='preevent-bg-right'
              width='400'
              height='780'
              imgClassName='object-contain'
              className='absolute z-0 -bottom-[10vw] -right-20 md:-right-0'
            />
          </div>
        </section>

        {/* Pattern Section */}
        <section id='pattern' className='w-full h-full bg-[#586B61]'>
          <NextImage
            src='/landing/preevent-footer.png'
            alt='preevent-footer'
            width='1440'
            height='260'
            className='w-full'
          />
        </section>

        {/* About Section */}
        <section id='about' className='relative w-full pb-48 md:pb-0'>
          <NextImage
            src='/landing/about-ctn-left.png'
            alt='about ctn left'
            width='123'
            height='512'
            className='absolute z-0 top-[31%] md:top-1/2 transform -translate-y-1/2 w-[9%] md:w-[5%]'
          />
          <NextImage
            src='/landing/about-ctn-right.png'
            alt='about ctn right'
            width='127'
            height='512'
            className='absolute z-0 right-0 top-[90%] md:top-[60%] transform -translate-y-1/2 w-[8%] md:w-[5%]'
          />

          <div className='layout mt-4'>
            <div
              className={clsxm(
                'grid md:grid-col-1 md:grid-cols-3 md:gap-2 gap-10',
                'z-20'
              )}
            >
              {MainEvent.map((item, index) => (
                <MainEventCard key={index} {...item} />
              ))}
            </div>
          </div>
        </section>

        <section id='contact-support' className='layout my-12'>
          <div className='flex justify-center items-center'>
            <div className='relative md:w-4/6 w-5/6'>
              <NextImage
                src='/landing/contact-title-left.png'
                alt='contact support title left'
                width='834'
                height='721'
                className='absolute left-13 md:-left-14 lg:-left-3 md:top-0 top-1/4 md:w-1/5 sm:w-1/5 lg:w-1/5 w-1/5'
                data-aos='fade-right'
              />
              <Typography
                variant='h1'
                as='h1'
                className='font-primary text-center leading-none hidden md:block'
                data-aos='zoom-in'
              >
                Contact Support
              </Typography>
              <Typography
                variant='h1'
                as='h1'
                className='font-primary text-center leading-none block md:hidden'
                data-aos='zoom-in'
              >
                Contact <br /> Support
              </Typography>
              <NextImage
                src='/landing/contact-title-right.png'
                alt='contact support title left'
                width='834'
                height='721'
                className='absolute right-2 md:-right-14 lg:-right-3 md:top-0 top-1/4 md:w-1/5 sm:w-1/5 lg:w-1/5 w-1/5'
                data-aos='fade-left'
              />
            </div>
          </div>
          <div
            className='grid grid-col-1 md:grid-cols-3 px-14 lg:px-28 py-16 bg-tainted-100 mt-8 rounded-lg'
            data-aos='zoom-in'
          >
            <div className='flex items-center justify-start flex-col'>
              <Typography
                variant='h3'
                as='h3'
                className='font-primary text-center text-5xl md:text-6xl mb-6'
                data-aos='fade-up'
              >
                Pre Event
              </Typography>
              <div className='flex flex-col space-y-5 w-11/12 md:w-4/5 text-center'>
                <ButtonLink
                  href='#'
                  variant='discolored'
                  size='base'
                  leftIcon={FiGlobe}
                  leftIconClassName='text-black'
                  data-aos='fade-up'
                  data-aos-delay='100'
                  className='py-3'
                >
                  Robot in Action
                </ButtonLink>
                <ButtonLink
                  href='#'
                  variant='discolored'
                  size='base'
                  leftIcon={FiGlobe}
                  leftIconClassName='text-black'
                  data-aos='fade-up'
                  data-aos-delay='200'
                  className='py-3'
                >
                  Karya Tulis Ilmiah
                </ButtonLink>
                <ButtonLink
                  href='#'
                  variant='discolored'
                  size='base'
                  leftIcon={FiGlobe}
                  leftIconClassName='text-black'
                  data-aos='fade-up'
                  data-aos-delay='300'
                  className='py-3'
                >
                  Jurnalistik
                </ButtonLink>
                <ButtonLink
                  href='/coming-soon'
                  variant='discolored'
                  size='base'
                  leftIcon={FiGlobe}
                  leftIconClassName='text-black'
                  data-aos='fade-up'
                  data-aos-delay='400'
                  className='py-3'
                >
                  Talkshow
                </ButtonLink>
              </div>
            </div>
            <div className='mt-7 flex flex-col items-center justify-center'>
              <NextImage
                src='/landing/Contact-img.png'
                alt='contact-img'
                width='232'
                height='428'
                className='w-[50%] md:w-[60%] object-contain'
                data-aos='fade-up'
              />
            </div>
            <div className='flex justify-start items-center flex-col'>
              <Typography
                variant='h3'
                as='h3'
                className='font-primary text-center text-5xl md:text-6xl mb-6'
                data-aos='fade-up'
              >
                main event
              </Typography>
              <div className='flex flex-col space-y-5 w-11/12 md:w-4/5 text-center'>
                <ButtonLink
                  href='#'
                  variant='discolored'
                  size='base'
                  leftIcon={FiGlobe}
                  leftIconClassName='text-black'
                  data-aos='fade-up'
                  data-aos-delay='100'
                  className='py-3'
                >
                  Opening ITS EXPO
                </ButtonLink>
                <ButtonLink
                  href='#'
                  variant='discolored'
                  size='base'
                  leftIcon={FiGlobe}
                  leftIconClassName='text-black'
                  data-aos='fade-up'
                  data-aos-delay='200'
                  className='py-3'
                >
                  Exhibition ITS EXPO
                </ButtonLink>
                <ButtonLink
                  href='#'
                  variant='discolored'
                  size='base'
                  leftIcon={FiGlobe}
                  leftIconClassName='text-black'
                  data-aos='fade-up'
                  data-aos-delay='300'
                  className='py-3'
                >
                  Gebyar ITS EXPO
                </ButtonLink>
              </div>
            </div>
          </div>
        </section>

        {/* Pattern Section */}
        <section id='pattern' className='w-full'>
          <NextImage
            src='/landing/contact-footer.png'
            alt='contact-footer'
            width='1440'
            height='370'
            className='w-full'
          />
        </section>

        {/* <section id='sponsor' className={clsxm('relative bg-[#00587A] pb-44')}>
          <NextImage
            src='/landing/sponsor-bg-left.png'
            alt='about sponsor-bg-left'
            width='286'
            height='829'
            className='absolute z-0 lg:top-[40%] md:top-[30%] top-[17%] md:w-[18%] w-[20%] transform -translate-y-1/2 object-contain'
          />
          <NextImage
            src='/landing/sponsor-bg-right.png'
            alt='about sponsor-bg-right'
            width='277'
            height='745'
            className='absolute z-0 right-0 lg:top-[48%] md:top-[68%] top-[70%] md:w-[18%] w-[20%] transform -translate-y-1/2 object-containt'
          />

          <div className='layout my-12'>
            <Typography
              variant='h1'
              as='h1'
              className='font-primary text-center text-white leading-none'
              data-aos='fade-up'
            >
              sponsor
            </Typography>
            <div
              className='grid md:grid-cols-1 grid-cols-1 z-[1] min-h-[500px] bg-tainted-100 rounded-lg p-8 mt-8'
              data-aos='fade-up'
            ></div>
          </div>
        </section> */}
      </main>
    </Layout>
  );
}
