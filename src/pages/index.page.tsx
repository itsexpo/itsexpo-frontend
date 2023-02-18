import 'aos/dist/aos.css';
import 'swiper/css';
import 'swiper/css/autoplay';

import AOS from 'aos';
import { useEffect, useState } from 'react';
import { FiGlobe } from 'react-icons/fi';
import { IoIosArrowDown } from 'react-icons/io';
import { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import Button from '@/components/buttons/Button';
import SwiperButton from '@/components/buttons/SwiperButton';
import ButtonLink from '@/components/links/ButtonLink';
import UnstyledLink from '@/components/links/UnstyledLink';
import NextImage from '@/components/NextImage';
import SEO from '@/components/SEO';
import Typography from '@/components/typography/Typography';
import { PreEvent } from '@/contents/pre-event/event';
import landingSwiperContents from '@/contents/pre-event/landing-swiper';
import landingTimelineContents from '@/contents/pre-event/landing-timeline';
import Layout from '@/layouts/Layout';
import clsxm from '@/lib/clsxm';
import PreEventCard from '@/pages/component/PreEventCard';

export default function Home() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const [preEvent, setPreEvent] = useState<number>(1);

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
          <div className='absolute flex flex-col w-full h-full'>
            <div className='relative flex-1'>
              <NextImage
                src='/landing/hero-bg-left.png'
                alt='landing hero left background'
                width='720'
                height='690'
                priority={true}
                className='absolute hidden md:block w-1/2 left-0 bottom-0'
              />
              <NextImage
                src='/landing/hero-bg-right.png'
                alt='landing hero right background'
                width='720'
                height='675'
                priority={true}
                className='absolute hidden md:block w-1/2 right-0 bottom-0'
              />
              <NextImage
                src='/landing/hero-figure-left.png'
                alt='landing hero left figure'
                width='720'
                height='457'
                className='absolute w-full md:w-1/2 left-0 bottom-0 -translate-x-10'
                data-aos='fade-right'
                data-aos-delay='500'
              />
              <NextImage
                src='/landing/hero-cloud-left.png'
                alt='landing hero left figure'
                width='195'
                height='135'
                className='absolute block md:hidden w-1/2 left-0 top-0 mt-16'
                data-aos='fade-right'
                data-aos-delay='700'
              />
              <NextImage
                src='/landing/hero-clouds-left.png'
                alt='landing hero left figure'
                width='720'
                height='618'
                className='absolute hidden md:block w-1/2 left-0 top-0 mt-16'
                data-aos='fade-right'
                data-aos-delay='700'
              />
              <NextImage
                src='/landing/hero-bird-left.png'
                alt='landing hero left figure'
                width='720'
                height='607'
                className='absolute hidden md:block w-1/2 left-0 top-0 mt-16'
                data-aos='fade-right'
                data-aos-delay='800'
              />
              <NextImage
                src='/landing/hero-particles-left.png'
                alt='landing hero particles'
                width='720'
                height='170'
                className='absolute hidden md:block w-1/2 left-0 bottom-0'
                data-aos='fade-right'
                data-aos-delay='1000'
              />
              <NextImage
                src='/landing/hero-figure-right.png'
                alt='landing hero right figure'
                width='720'
                height='462'
                className='absolute w-full md:w-1/2 right-0 bottom-0 translate-x-10'
                data-aos='fade-left'
                data-aos-delay='500'
              />
              <NextImage
                src='/landing/hero-cloud-right.png'
                alt='landing hero right figure'
                width='195'
                height='141'
                className='absolute block md:hidden w-1/2 right-0 top-0 mt-16'
                data-aos='fade-left'
                data-aos-delay='700'
              />
              <NextImage
                src='/landing/hero-clouds-right.png'
                alt='landing hero right figure'
                width='720'
                height='618'
                className='absolute hidden md:block w-1/2 right-0 top-0 mt-16'
                data-aos='fade-left'
                data-aos-delay='700'
              />
              <NextImage
                src='/landing/hero-bird-right.png'
                alt='landing hero right figure'
                width='720'
                height='604'
                className='absolute hidden md:block w-1/2 right-0 top-0 mt-16'
                data-aos='fade-left'
                data-aos-delay='800'
              />
              <NextImage
                src='/landing/hero-particles-left.png'
                alt='landing hero particles'
                width='720'
                height='170'
                className='absolute hidden md:block w-1/2 right-0 bottom-0'
                data-aos='fade-left'
                data-aos-delay='1000'
              />
            </div>
            <NextImage
              src='/landing/hero-pattern.png'
              alt='pattern illustration'
              width='1440'
              height='88'
              className='w-[1440px] min-w-full'
              priority={true}
            />
          </div>

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
                Gunita Aksara
              </Typography>
            </div>
            <Typography
              variant='b1'
              color='tertiary'
              className='font-secondary max-w-xl mt-6 text-center md:text-justify'
              data-aos='fade-up'
              data-aos-delay='100'
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero vitae erat.
            </Typography>
            <UnstyledLink
              href='#about'
              className={clsxm(
                'mt-10 w-10 h-10 flex justify-center items-center rounded-full bg-success-600',
                'animate-bounce'
              )}
              data-aos='fade-up'
              data-aos-delay='200'
            >
              <IoIosArrowDown className='fill-warning-100 w-5 h-5' />
            </UnstyledLink>
          </div>
        </section>

        {/* About Section */}
        <section
          id='about'
          className='w-full flex flex-col justify-center items-center'
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
                'w-full flex flex-col md:flex-row',
                'justify-between items-start md:items-center',
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
          <div className='absolute w-full h-full flex justify-center overflow-y-hidden'>
            <NextImage
              src='/landing/timeline-bg-desktop.png'
              alt='timeline desktop background'
              width='665'
              height='2000'
              className='absolute hidden md:block top-0'
            />
            <NextImage
              src='/landing/timeline-bg-mobile.png'
              alt='timeline mobile background'
              width='334'
              height='1034'
              className='absolute block md:hidden top-0'
            />
            <div className='absolute w-full top-0 flex justify-between items-end'>
              <NextImage
                src='/landing/timeline-bg-left.png'
                alt='timeline left background'
                width='363'
                height='1294'
                className='hidden md:block'
              />
              <NextImage
                src='/landing/timeline-bg-right.png'
                alt='timeline right background'
                width='535'
                height='754'
                className='hidden md:block'
              />
              <NextImage
                src='/landing/timeline-bg-mobile-left.png'
                alt='timeline mobile background'
                width='91'
                height='624'
                className='block md:hidden'
              />
              <NextImage
                src='/landing/timeline-bg-mobile-right.png'
                alt='timeline mobile background'
                width='112'
                height='1092'
                className='block md:hidden'
              />
            </div>
          </div>

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
              'relative w-full md:w-8/12 lg:w-5/12',
              'flex flex-col items-center gap-y-10 md:gap-y-20',
              'p-7 md:p-0 font-secondary'
            )}
          >
            <div
              className={clsxm(
                'absolute top-0 w-full h-full flex justify-center',
                'pt-10 md:pt-14 pb-40 md:pb-14'
              )}
              data-aos='fade-up'
              data-aos-offset='200'
            >
              <div className='w-1 h-full bg-typo' />
            </div>

            {landingTimelineContents.map((content, index) => {
              const parity = index % 2 === 0 ? 'even' : 'odd';

              return (
                <div
                  key={index}
                  className={clsxm(
                    'last:hidden last:md:grid grid grid-rows-1 md:grid-cols-5',
                    'md:gap-x-8 gap-y-2 md:gap-y-0',
                    'md:grid-flow-col-dense'
                  )}
                >
                  <div
                    className='md:col-start-3 flex justify-center items-center'
                    data-aos='fade-up'
                  >
                    <NextImage {...content.img} />
                  </div>
                  <div
                    className={clsxm(
                      'flex flex-col items-center gap-y-2 md:gap-y-0',
                      'text-center md:col-span-2',
                      [
                        parity === 'odd' && 'md:col-start-1 md:text-right',
                        parity === 'even' && 'md:col-start-4 md:text-left',
                      ]
                    )}
                    data-aos={
                      (parity === 'odd' && 'fade-left') ||
                      (parity === 'even' && 'fade-right')
                    }
                    data-aos-delay='300'
                  >
                    <Typography
                      variant='h6'
                      className='w-full font-bold text-typo-white'
                    >
                      {content.date}
                    </Typography>
                    <Typography
                      variant='t'
                      className='text-typo-white w-48 md:w-full md:max-w-xs'
                    >
                      {content.caption}
                    </Typography>
                  </div>
                </div>
              );
            })}
          </div>

          <ButtonLink
            href='/'
            size='large'
            variant='green'
            className='hidden md:block mt-6'
            data-aos='fade-up'
          >
            Lihat Selengkapnya
          </ButtonLink>

          {/* Timeline Illustration */}
          <div className='relative min-h-fit w-full mt-20'>
            <NextImage
              src='/landing/timeline-illustration-0.png'
              alt='timeline bottom illustration'
              width='2880'
              height='1522'
              className='w-full'
            />
            <NextImage
              src='/landing/timeline-illustration-1.png'
              alt='timeline bottom illustration'
              width='2880'
              height='1522'
              className='absolute bottom-0 w-full'
              data-aos='fade-up'
            />
            <NextImage
              src='/landing/timeline-illustration-2.png'
              alt='timeline bottom illustration'
              width='2879'
              height='718'
              className='absolute bottom-0 w-full'
              data-aos='fade-up'
            />
            <NextImage
              src='/landing/timeline-illustration-3.png'
              alt='timeline bottom illustration'
              width='2880'
              height='554'
              className='absolute bottom-0 w-full'
              data-aos='fade-up'
              data-aos-delay='200'
            />
            <NextImage
              src='/landing/timeline-illustration-4.png'
              alt='timeline bottom illustration'
              width='2880'
              height='1219'
              className='absolute bottom-0 w-full'
              data-aos='fade-up'
              data-aos-offset='300'
            />
            <NextImage
              src='/landing/timeline-illustration-5.png'
              alt='timeline bottom illustration'
              width='2880'
              height='497'
              className='absolute bottom-0 w-full'
            />
          </div>
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
                  preEvent == 1 ? 'with-border' : 'bg-[#9DBF7D90] z-[1]'
                }
                onClick={() => setPreEvent(1)}
                data-aos='zoom-in'
              >
                Robot in Action
              </Button>
              <Button
                variant='green'
                size='large'
                className={
                  preEvent == 2 ? 'with-border' : 'bg-[#9DBF7D90] z-[1]'
                }
                onClick={() => setPreEvent(2)}
                data-aos='zoom-in'
              >
                Karya Tulis Ilmiah
              </Button>
              <Button
                variant='green'
                size='large'
                className={
                  preEvent == 3 ? 'with-border' : 'bg-[#9DBF7D90] z-[1]'
                }
                onClick={() => setPreEvent(3)}
                data-aos='zoom-in'
              >
                Jurnalistik
              </Button>
              <Button
                variant='green'
                size='large'
                className={
                  preEvent == 4 ? 'with-border' : 'bg-[#9DBF7D90] z-[1]'
                }
                onClick={() => setPreEvent(4)}
                data-aos='zoom-in'
              >
                Talkshow
              </Button>
            </div>

            {preEvent == 1 && (
              <PreEventCard
                title={PreEvent[0].title}
                description={PreEvent[0].description}
                link={PreEvent[0].link}
                image={PreEvent[0].image}
              />
            )}
            {preEvent == 2 && (
              <PreEventCard
                title={PreEvent[1].title}
                description={PreEvent[1].description}
                link={PreEvent[1].link}
                image={PreEvent[1].image}
              />
            )}
            {preEvent == 3 && (
              <PreEventCard
                title={PreEvent[2].title}
                description={PreEvent[2].description}
                link={PreEvent[2].link}
                image={PreEvent[2].image}
              />
            )}
            {preEvent == 4 && (
              <PreEventCard
                title={PreEvent[3].title}
                description={PreEvent[3].description}
                link={PreEvent[3].link}
                image={PreEvent[3].image}
              />
            )}
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
              <div
                className='bg-tainted-100 z-[1] md:max-w-[380px] rounded-lg'
                data-aos='fade-up'
              >
                <div
                  className={clsxm(
                    'flex flex-col justify-start px-10 py-8 rounded-lg group',
                    'hover:bg-[url(/landing/pattern-background.png)] hover:bg-cover hover:bg-no-repeat min-h-[350px] md:min-h-[380px]'
                  )}
                >
                  <Typography
                    variant='h4'
                    as='h4'
                    className='font-primary text-left text-4xl md:text-5xl mb-4 group-hover:text-white'
                  >
                    opening its expo
                  </Typography>
                  <Typography
                    variant='b'
                    as='b'
                    className='group-hover:text-white font-normal text-sm md:text-lg'
                  >
                    Eu hendrerit turpis purus venenatis nibh id vitae quis.
                    Viverra mi in morbi turpis tristique mi ut. Vehicula gravida
                    pellentesque vestibulum nisi fames faucibus. Ornare lectus
                    nisl diam euismod tristique quam egestas. Condimentum ut
                    volutpat tempus.
                  </Typography>
                  <div className='hidden group-hover:block'>
                    <ButtonLink
                      href='#'
                      variant='yellow'
                      size='base'
                      className='md:mt-4 mt-11'
                    >
                      Baca Selengkapnya
                    </ButtonLink>
                  </div>
                </div>
              </div>
              <div
                className='bg-tainted-100 z-[1] md:max-w-[380px] rounded-lg'
                data-aos='fade-up'
              >
                <div
                  className={clsxm(
                    'flex flex-col justify-start px-10 py-8 rounded-lg group',
                    'hover:bg-[url(/landing/pattern-background.png)] hover:bg-cover hover:bg-no-repeat min-h-[350px] md:min-h-[380px]'
                  )}
                >
                  <Typography
                    variant='h4'
                    as='h4'
                    className='font-primary text-left text-4xl md:text-5xl mb-4 group-hover:text-white'
                  >
                    exhibition its expo
                  </Typography>
                  <Typography
                    variant='b'
                    as='b'
                    className='group-hover:text-white font-normal text-sm md:text-lg'
                  >
                    Eu hendrerit turpis purus venenatis nibh id vitae quis.
                    Viverra mi in morbi turpis tristique mi ut. Vehicula gravida
                    pellentesque vestibulum nisi fames faucibus. Ornare lectus
                    nisl diam euismod tristique quam egestas. Condimentum ut
                    volutpat tempus.
                  </Typography>
                  <div className='hidden group-hover:block'>
                    <ButtonLink
                      href='#'
                      variant='yellow'
                      size='base'
                      className='md:mt-4 mt-11'
                    >
                      Baca Selengkapnya
                    </ButtonLink>
                  </div>
                </div>
              </div>
              <div
                className='bg-tainted-100 z-[1] md:max-w-[380px] rounded-lg'
                data-aos='fade-up'
              >
                <div
                  className={clsxm(
                    'flex flex-col justify-start px-10 py-8 rounded-lg group',
                    'hover:bg-[url(/landing/pattern-background.png)] hover:bg-cover hover:bg-no-repeat min-h-[350px] md:min-h-[380px]'
                  )}
                >
                  <Typography
                    variant='h4'
                    as='h4'
                    className='font-primary text-left text-4xl md:text-5xl mb-4 group-hover:text-white'
                  >
                    gebyar its expo
                  </Typography>
                  <Typography
                    variant='b'
                    as='b'
                    className='group-hover:text-white font-normal text-sm md:text-lg'
                  >
                    Eu hendrerit turpis purus venenatis nibh id vitae quis.
                    Viverra mi in morbi turpis tristique mi ut. Vehicula gravida
                    pellentesque vestibulum nisi fames faucibus. Ornare lectus
                    nisl diam euismod tristique quam egestas. Condimentum ut
                    volutpat tempus.
                  </Typography>
                  <div className='hidden group-hover:block'>
                    <ButtonLink
                      href='#'
                      variant='yellow'
                      size='base'
                      className='md:mt-4 mt-11'
                    >
                      Baca Selengkapnya
                    </ButtonLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Support Section */}
        <section id='contact-support' className='layout my-12 '>
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
              <div className='flex flex-col space-y-5 w-11/12 md:w-4/5'>
                <ButtonLink
                  href='/'
                  variant='yellow'
                  size='base'
                  leftIcon={FiGlobe}
                  data-aos='fade-up'
                  data-aos-delay='100'
                  className='py-3'
                >
                  Robot in Action
                </ButtonLink>
                <ButtonLink
                  href='/'
                  variant='yellow'
                  size='base'
                  leftIcon={FiGlobe}
                  data-aos='fade-up'
                  data-aos-delay='200'
                  className='py-3'
                >
                  Karya Tulis Ilmiah
                </ButtonLink>
                <ButtonLink
                  href='/'
                  variant='yellow'
                  size='base'
                  leftIcon={FiGlobe}
                  data-aos='fade-up'
                  data-aos-delay='300'
                  className='py-3'
                >
                  Jurnalistik
                </ButtonLink>
                <ButtonLink
                  href='/'
                  variant='yellow'
                  size='base'
                  leftIcon={FiGlobe}
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
              <div className='flex flex-col space-y-5 w-11/12 md:w-4/5'>
                <ButtonLink
                  href='/'
                  variant='yellow'
                  size='base'
                  leftIcon={FiGlobe}
                  data-aos='fade-up'
                  data-aos-delay='100'
                  className='py-3'
                >
                  Opening ITS EXPO
                </ButtonLink>
                <ButtonLink
                  href='/'
                  variant='yellow'
                  size='base'
                  leftIcon={FiGlobe}
                  data-aos='fade-up'
                  data-aos-delay='200'
                  className='py-3'
                >
                  Exhibition ITS EXPO
                </ButtonLink>
                <ButtonLink
                  href='/'
                  variant='yellow'
                  size='base'
                  leftIcon={FiGlobe}
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

        {/* Sponsor Section */}
        <section
          id='sponsor'
          className={clsxm(
            // Custom Tailwind Class
            'relative bg-[#00587A] pb-44'
          )}
        >
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
        </section>
      </main>
    </Layout>
  );
}
