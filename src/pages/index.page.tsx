import 'aos/dist/aos.css';
import 'swiper/css';
import 'swiper/css/autoplay';

import AOS from 'aos';
import { useEffect } from 'react';
import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';
import { FaChrome } from 'react-icons/fa';
import { IoIosArrowDropdownCircle } from 'react-icons/io';
import { Autoplay } from 'swiper';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';

import ButtonLink from '@/components/links/ButtonLink';
import UnstyledLink from '@/components/links/UnstyledLink';
import NextImage from '@/components/NextImage';
import SEO from '@/components/SEO';
import Typography from '@/components/typography/Typography';
import Layout from '@/layouts/Layout';
import clsxm from '@/lib/clsxm';

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

        {/* PreEvent Section */}
        <section
          id='pre-event'
          className='w-full h-full flex flex-col justify-center items-center bg-gradient-to-b from-[#445F64] to-[#586B61]'
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
