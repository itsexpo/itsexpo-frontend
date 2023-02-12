import 'aos/dist/aos.css';
import 'swiper/css';
import 'swiper/css/autoplay';

import AOS from 'aos';
import { useEffect } from 'react';
import { FaChrome } from 'react-icons/fa';
import { IoIosArrowDown } from 'react-icons/io';
import { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import SwiperButton from '@/components/buttons/SwiperButton';
import ButtonLink from '@/components/links/ButtonLink';
import UnstyledLink from '@/components/links/UnstyledLink';
import NextImage from '@/components/NextImage';
import SEO from '@/components/SEO';
import Typography from '@/components/typography/Typography';
import landingSwiperContents from '@/contents/pre-event/landing-swiper';
import landingTimelineContents from '@/contents/pre-event/landing-timeline';
import Layout from '@/layouts/Layout';
import clsxm from '@/lib/clsxm';

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
          <div className='absolute flex flex-col w-full h-full border'>
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
              width='390'
              height='1116'
              className='absolute block md:hidden top-0'
            />
            <div className='absolute w-full top-0 hidden md:flex md:justify-between'>
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
        <section
          id='pre-event'
          className='w-full h-full flex flex-col justify-center items-center bg-landing-preevent pt-20'
        >
          <div className='relative w-full mb-[100px]'>
            {/* PreEvent Content */}
            <div
              className='
              relative flex flex-col items-center p-4 z-10'
            >
              <div
                className='flex flex-col items-center -space-y-6'
                data-aos='fade-up'
              >
                <div className='flex flex-row space-x-4'>
                  <NextImage
                    src='/landing/preevent-title-left.png'
                    alt='content gallery'
                    width='157.85'
                    height='101.63'
                  />
                  <Typography
                    variant='h1'
                    className='font-primary text-typo-white mb-10'
                  >
                    Pre-Event its expo 2023
                  </Typography>
                  <NextImage
                    src='/landing/preevent-title-right.png'
                    alt='content gallery'
                    width='157.85'
                    height='101.63'
                  />
                </div>
              </div>

              <div className='flex flex-row space-x-4 mb-[40px]'>
                <ButtonLink
                  href='/'
                  variant='green'
                  size='large'
                  data-aos='fade-up'
                >
                  Robot in Action
                </ButtonLink>

                <ButtonLink
                  href='/'
                  variant='green'
                  size='large'
                  data-aos='fade-up'
                >
                  Karya Tulis Ilmiah
                </ButtonLink>

                <ButtonLink
                  href='/'
                  variant='green'
                  size='large'
                  data-aos='fade-up'
                >
                  Jurnalistik
                </ButtonLink>

                <ButtonLink
                  href='/'
                  variant='green'
                  size='large'
                  data-aos='fade-up'
                >
                  Talkshow
                </ButtonLink>
              </div>

              {/* <div className='h-[40px]'></div> */}

              <div className='flex flex-col space-y-4'>
                <div
                  className='bg-white w-[1240px] h-[380px] rounded-3xl '
                  data-aos='fade-up'
                >
                  <div className='flex space-x-4'>
                    <div className='w-[396px] flex flex-col space-y-4'>
                      <NextImage
                        src='/landing/preevent-frame.png'
                        alt='content gallery'
                        width='396'
                        height='380'
                      />
                    </div>

                    <div className='flex flex-col'>
                      <div className='h-[10px]'></div>
                      <Typography
                        variant='h5'
                        className='font-secondary font-semibold text-black'
                      >
                        Karya Tulis Ilmiah
                      </Typography>
                      <Typography
                        variant='b1'
                        color='tertiary'
                        className='font-secondary max-w-2xl'
                      >
                        Consequat donec risus mollis feugiat. Imperdiet vitae
                        suspendisse at massa. Maecenas nec sed habitant cras.
                        Mauris pellentesque turpis sed mi et pulvinar tortor
                        elementum. Eu tincidunt urna id mattis. Fermentum et ut
                        a ut tortor aliquam. In mi porttitor imperdiet dignissim
                        sed tristique lectus et. Consectetur in eu augue eget.
                        Dolor nec pellentesque at est suspendisse cursus elit.
                        Sodales faucibus vulputate euismod magna eget nulla
                        ornare. Egestas scelerisque porttitor integer sit auctor
                        dolor gravida. Vitae nulla enim posuere et vestibulum
                        mauris. Ut ligula dis habitasse id ipsum eget donec
                        semper sollicitudin. Mauris nibh at morbi netus elit
                        morbi egestas lectus risus. Pharetra arcu enim eget
                        pretium morbi justo pulvinar tristique arcu.
                      </Typography>
                      <UnstyledLink href='/'>
                        <Typography
                          variant='c'
                          color='theme'
                          className='font-secondary font-semibold underline text-success-500'
                        >
                          Baca Selengkapnya
                        </Typography>
                      </UnstyledLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Preevent Illustration */}
          <div className='absolute w-full h-full'>
            <NextImage
              src='/landing/preevent-bg-left.png'
              alt='landing preevent left background'
              width='462'
              height='690'
              priority={true}
              className='absolute w-4/12 left-0 bottom-0'
            />
            <NextImage
              src='/landing/preevent-bg-right.png'
              alt='landing preevent right background'
              width='559'
              height='675'
              priority={true}
              className='absolute w-5/12 right-0 bottom-0'
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
        <section
          id='about'
          className='w-full h-full flex flex-col justify-center items-center'
        >
          <div className='relative w-full'>
            {/* About Content */}
            <div className='relative flex flex-col items-center p-4 z-10'>
              <div className='flex flex-row space-x-4'>
                <NextImage
                  src='/landing/about-ctn-left.png'
                  alt='about content left'
                  width='103'
                  height='290'
                  className='absolute left-0 top-50%'
                  data-aos='fade-right'
                />
                {/* Three Card entitled opening its expo, exhibition its expo, gebyar its expo */}
                <div className='flex flex-row space-x-9'>
                  <div
                    className='bg-gradient-to-b from-tainted-600 to-warning-800 w-[397px] h-[432px] rounded-xl'
                    data-aos='fade-up'
                  >
                    <div className='h-[30px]'></div>
                    <Typography
                      variant='h5'
                      className='font-primary text-center text-white'
                    >
                      Opening its expo
                    </Typography>
                    <Typography
                      variant='b1'
                      color='tertiary'
                      className='font-secondary max-w-2xl text-white ml-[20px] mr-[20px]'
                      // style={{ marginLeft: '20px', marginRight: '20px' }}
                    >
                      Eu hendrerit turpis purus venenatis nibh id vitae quis.
                      Viverra mi in morbi turpis tristique mi ut. Vehicula
                      gravida pellentesque vestibulum nisi fames faucibus.
                      Ornare lectus nisl diam euismod tristique quam egestas.
                      Condimentum ut volutpat tempus.
                    </Typography>

                    <div className='h-[30px]'></div>
                    <ButtonLink
                      href='/'
                      variant='yellow'
                      size='base'
                      data-aos='flip-left'
                      className='mx-[20px]'
                      // style={{ marginLeft: '20px', marginRight: '20px' }}
                    >
                      Baca Selengkapnya
                    </ButtonLink>
                  </div>

                  {/* <div className='w-[15px]'></div> */}

                  <div
                    className='bg-surface-base w-[397px] h-[432px] rounded-xl'
                    data-aos='fade-up'
                  >
                    <div className='h-[30px]'></div>
                    <Typography
                      variant='h5'
                      className='font-primary text-center'
                    >
                      Exhibition its expo
                    </Typography>
                    <Typography
                      variant='b1'
                      color='tertiary'
                      className='font-secondary max-w-2xl mx-[20px]'
                      // style={{ marginLeft: '20px', marginRight: '20px' }}
                    >
                      Eu hendrerit turpis purus venenatis nibh id vitae quis.
                      Viverra mi in morbi turpis tristique mi ut. Vehicula
                      gravida pellentesque vestibulum nisi fames faucibus.
                      Ornare lectus nisl diam euismod tristique quam egestas.
                      Condimentum ut volutpat tempus.
                    </Typography>

                    <div className='h-[30px]'></div>
                    {/* <ButtonLink href='/' variant='yellow' size='base' data-aos="flip-left" style={{ marginLeft: '20px',marginRight: '20px' }}>
                      Baca Selengkapnya
                    </ButtonLink> */}
                  </div>

                  {/* <div className='w-[15px]'></div> */}

                  <div
                    className='bg-surface-base w-[397px] h-[432px] rounded-xl'
                    data-aos='fade-up'
                  >
                    <div className='h-[30px]'></div>
                    <Typography
                      variant='h5'
                      className='font-primary text-center'
                    >
                      Gebyar its expo
                    </Typography>
                    <Typography
                      variant='b1'
                      color='tertiary'
                      className='font-secondary max-w-2xl text'
                      style={{ marginLeft: '20px', marginRight: '20px' }}
                    >
                      Eu hendrerit turpis purus venenatis nibh id vitae quis.
                      Viverra mi in morbi turpis tristique mi ut. Vehicula
                      gravida pellentesque vestibulum nisi fames faucibus.
                      Ornare lectus nisl diam euismod tristique quam egestas.
                      Condimentum ut volutpat tempus.
                    </Typography>

                    <div className='h-[30px]'></div>
                    {/* <ButtonLink href='/' variant='yellow' size='base' data-aos="flip-left" style={{ marginLeft: '20px',marginRight: '20px' }}>
                      Baca Selengkapnya
                    </ButtonLink> */}
                  </div>
                </div>

                <NextImage
                  src='/landing/about-ctn-right.png'
                  alt='about content right'
                  width='103'
                  height='290'
                  className='absolute right-0 bottom-0'
                  data-aos='fade-left'
                />
              </div>
            </div>
          </div>
        </section>

        {/* Contact Support Section */}
        <section
          id='contact-support'
          className='w-full h-full flex flex-col justify-center items-center mt-14'
        >
          {/* Title Contact Support */}
          <div className='flex flex-row space-x-4'>
            <NextImage
              src='/landing/contact-title-left.png'
              alt='contact title left'
              width='103'
              height='180'
              className='responsive'
              data-aos='fade-right'
            />
            <Typography
              variant='h1'
              className='font-primary text-center'
              data-aos='fade-up'
            >
              Contact Support
            </Typography>
            <NextImage
              src='/landing/contact-title-right.png'
              alt='contact title right'
              width='103'
              height='180'
              className='responsive'
              data-aos='fade-left'
            />
          </div>

          {/* Card Contact Support */}
          <div className='flex flex-col space-y-4'>
            <div className='flex flex-col space-y-9'>
              <div
                className='bg-[#FAF2DD] w-[1240px] h-[500px] rounded-xl'
                data-aos='zoom-in'
              >
                <div className='flex flex-row space-x-4'>
                  <div
                    className='w-[406px] flex flex-col space-y-4 mt-[30px] ml-[50px]'
                    // style={{ marginLeft: '70px' }}
                  >
                    <div className='w-[291px] flex flex-col space-y-4'>
                      {/* <div className='h-[30px]'></div> */}
                      <Typography
                        variant='h4'
                        className='font-primary text-center'
                        data-aos='flip-left'
                      >
                        Pre-event
                      </Typography>
                      <ButtonLink
                        href='/'
                        variant='yellow'
                        size='base'
                        leftIcon={FaChrome}
                        data-aos='flip-left'
                      >
                        Robot in Action
                      </ButtonLink>
                      <ButtonLink
                        href='/'
                        variant='yellow'
                        size='base'
                        leftIcon={FaChrome}
                        data-aos='flip-left'
                      >
                        Karya Tulis Ilmiah
                      </ButtonLink>
                      <ButtonLink
                        href='/'
                        variant='yellow'
                        size='base'
                        leftIcon={FaChrome}
                        data-aos='flip-left'
                      >
                        Jurnalistik
                      </ButtonLink>
                      <ButtonLink
                        href='/'
                        variant='yellow'
                        size='base'
                        leftIcon={FaChrome}
                        data-aos='flip-left'
                      >
                        Talkshow
                      </ButtonLink>
                    </div>
                  </div>

                  <div
                    className='w-[406px] flex flex-col space-y-4 ml-[60px] mt-[40px]'
                    // style={{ marginLeft: '60px' }}
                  >
                    {/* <div className='h-[30px]'></div> */}
                    <NextImage
                      src='/landing/Contact-img.png'
                      alt='contact image'
                      width='231.03'
                      height='440.4'
                      objectPosition={'center center'}
                      data-aos='flip-up'
                    />
                  </div>

                  <div className='w-[406px] flex flex-col space-y-4'>
                    <div className='w-[291px] flex flex-col space-y-4 mt-[30px]'>
                      {/* <div className='h-[30px]'></div> */}
                      <Typography
                        variant='h4'
                        className='font-primary text-center'
                        data-aos='flip-right'
                      >
                        Main Event
                      </Typography>
                      <ButtonLink
                        href='/'
                        variant='yellow'
                        size='base'
                        leftIcon={FaChrome}
                        data-aos='flip-right'
                      >
                        Opening ITS EXPO
                      </ButtonLink>
                      <ButtonLink
                        href='/'
                        variant='yellow'
                        size='base'
                        leftIcon={FaChrome}
                        data-aos='flip-right'
                      >
                        Exhibition ITS EXPO
                      </ButtonLink>
                      <ButtonLink
                        href='/'
                        variant='yellow'
                        size='base'
                        leftIcon={FaChrome}
                        data-aos='flip-right'
                      >
                        Gebyar ITS EXPO
                      </ButtonLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* make some space for footer */}
          <div className='h-[40px]'></div>
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
            'w-full h-full flex flex-col justify-center items-center',
            // Custom Tailwind Class
            ' bg-[#00587A]'
          )}
        >
          <div className='absolute w-full h-full flex justify-center overflow-y-hidden'>
            <div className='absolute w-full top-0 flex justify-between'>
              <NextImage
                src='/landing/sponsor bg left.png'
                alt='sponsor left background'
                width='286'
                height='829'
                data-aos='fade-right'
              />
              <NextImage
                src='/landing/sponsor bg right.png'
                alt='sponsor right background'
                width='277'
                height='745'
                data-aos='fade-left'
              />
            </div>
          </div>

          <div className='flex flex-row space-x-4'>
            <Typography
              variant='h1'
              className='font-primary text-typo-white mb-10'
              data-aos='fade-up'
            >
              Sponsor
            </Typography>
          </div>

          <div className='relative flex flex-col items-center p-4 z-10'>
            <div className='flex flex-row space-x-4'>
              <div className='flex flex-col space-y-9'>
                <div
                  className='bg-[#FAF2DD] w-[1240px] h-[500px] rounded-xl'
                  data-aos='zoom-in'
                ></div>
              </div>
            </div>
            <div className='h-[100px]'></div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
