import 'swiper/css';
import 'swiper/css/autoplay';
import 'aos/dist/aos.css';

import AOS from 'aos';
import clsx from 'clsx';
import React from 'react';
import { useEffect, useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import Button from '@/components/buttons/Button';
import SwiperButton from '@/components/buttons/SwiperButton';
import UnstyledLink from '@/components/links/UnstyledLink';
import NextImage from '@/components/NextImage';
import SEO from '@/components/SEO';
import Typography from '@/components/typography/Typography';
import {
  aboutUsSwiperContents,
  sejarahITSExpo,
  slogan,
} from '@/contents/about-us';
import Layout from '@/layouts/Layout';
import clsxm from '@/lib/clsxm';
import {
  HeroBackground,
  HeroCaptionBackground,
} from '@/pages/about-us/container/HeroBackground';
import MascotBackground from '@/pages/about-us/container/MascotBackground';
import { SejarahBackground2 } from '@/pages/about-us/container/SejarahBackground';
function AboutUs() {
  useEffect(() => {
    AOS.refresh();
  }, []);
  const [tema, setTema] = useState<number>(0);
  return (
    <Layout>
      <SEO title='About Us' description='This is about us page' />
      <main className='flex flex-col bg-tainted-100 scroll-smooth'>
        {/* About Us */}
        <section id='about-us'>
          <div className='relative overflow-hidden min-h-screen'>
            <div className='relative justify-center space-x-10 w-fit mx-auto items-center hidden md:flex pt-24 z-10'>
              <div className='flex-col pt-28 hidden md:flex'>
                <Typography
                  variant='h1'
                  className='font-primary text-center'
                  data-aos='fade-up'
                >
                  about its expo
                </Typography>
                <UnstyledLink
                  href='#about-itsexpo'
                  className={clsxm(
                    'mt-10 w-10 h-10 flex mx-auto justify-center items-center rounded-full bg-success-600',
                    'animate-bounce'
                  )}
                  data-aos='fade-up'
                  data-aos-delay='200'
                >
                  <IoIosArrowDown className='fill-warning-100 w-5 h-5' />
                </UnstyledLink>
              </div>
              <NextImage
                src='/aboutus/hero-left-bird.png'
                alt='Hero Left Bird Image'
                width={200}
                height={250}
                className='pt-10 -left-72 absolute'
                data-aos='fade-right'
                data-aos-delay='400'
              />
              <NextImage
                src='/aboutus/hero-right-bird.png'
                alt='Hero Right Bird Image'
                width={190}
                height={250}
                className='pt-10 -right-56 absolute'
                data-aos='fade-left'
                data-aos-delay='400'
              />
            </div>
            <div className='flex flex-col md:hidden pt-44'>
              <Typography variant='h3' className='font-primary text-center'>
                about its expo
              </Typography>
              <UnstyledLink
                href='#about'
                className={clsxm(
                  'mt-10 w-10 h-10 flex mx-auto justify-center items-center rounded-full bg-success-600',
                  'animate-bounce'
                )}
                data-aos='fade-up'
                data-aos-delay='200'
              >
                <IoIosArrowDown className='fill-warning-100 w-5 h-5' />
              </UnstyledLink>
            </div>
            {/* Hero Background */}
            <HeroBackground />
          </div>
        </section>

        {/* Apa itu ITS EXPO ? */}
        <section id='about-itsexpo'>
          <div className='bg-gradient-to-b from-[#DD8D00] to-[#804400] pt-10  md:py-16 relative'>
            <div
              className='w-full h-full relative pb-20 md:pb-36
            '
            >
              <HeroCaptionBackground />
              <div
                className='flex flex-col space-y-4 layout md:space-y-10 md:pt-10'
                data-aos='fade-down'
              >
                <Typography
                  variant='h4'
                  className='text-typo-white font-primary text-center '
                  data-aos='fade-down'
                  data-aos-delay='200'
                >
                  apa itu its expo
                </Typography>
                <Typography
                  variant='h6'
                  className='text-typo-white font-normal text-justify md:text-center md:max-w-7xl px-2 mx-auto '
                  data-aos='fade-down'
                  data-aos-delay='300'
                >
                  ITS Expo merupakan sebuah acara yang mewadahi seluruh Keluarga
                  Mahasiswa ITS untuk mempertunjukan hasil pemikirannya kepada
                  masyarakat umum yang diharapkan membawa kebermanfaatan nyata
                  untuk masyarakat, dimana di dalamnya memiliki tiga elemen
                  yaitu Seni, Ilmu, dan Budaya. ITS EXPO 2023 memiliki tujuan
                  utama yaitu Menampilkan dan menunjukkan Karya Mahasiswa ITS di
                  lingkungan masyarakat guna mengikis gap antara mahasiswa dan
                  masyarakat.
                </Typography>
              </div>
            </div>
            <div className='w-full relative pb-32 sm:pb-48 md:pb-0 -bottom-32 md:pt-16 md:top-14 z-50 '>
              <div className='absolute  w-full h-full'>
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

                  {aboutUsSwiperContents.map((content, index) => (
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
            </div>
          </div>
        </section>
        {/* Sejarah */}
        <section
          id='sejarah'
          className='relative w-full flex flex-col items-center bg-[#2A607B] overflow-hidden'
        >
          <Typography
            variant='h4'
            className='text-typo-white font-primary mb-11 mt-52'
          >
            sejarah its expo
          </Typography>

          {/* Sejarah Background */}
          <div className='w-full h-full flex justify-center overflow-y-hidden'>
            <NextImage
              src='/aboutus/background-sejarah-mobile.png'
              alt='sejarah mobile background'
              width='334'
              height='2000'
              className='absolute block h-full md:hidden'
            />
            <NextImage
              src='/aboutus/background-sejarah-desktop.png'
              alt='sejarah desktop background'
              width='688'
              height='2401'
              className='absolute hidden md:block h-full'
            />
            <div className='absolute w-full top-[12%] h-full md:top-[15%] flex justify-between items-end'>
              <NextImage
                src='/aboutus/sejarah-desktop-left-decoration.png'
                alt='sejarah left background'
                width='350'
                height='2000'
                className='hidden md:block h-full'
              />
              <NextImage
                src='/aboutus/sejarah-desktop-right-decoration.png'
                alt='sejarah right background'
                width='300'
                height='1600'
                className='hidden md:block h-full'
              />
              <NextImage
                src='/aboutus/sejarah-mobile-left-decoration.png'
                alt='sejarah left mobile background '
                width='550'
                height='2000'
                className='block md:hidden h-full'
              />
              <NextImage
                src='/aboutus/sejarah-mobile-right-decoration.png'
                alt='sejarah right mobile background '
                width='500'
                height='2000'
                className='block md:hidden h-full'
              />
            </div>

            {/* Sejarah Content */}
            <div
              className={clsxm(
                'relative w-full md:w-8/12 lg:w-5/12',
                'flex flex-col items-center gap-y-10 md:gap-y-20',
                'p-7 md:p-0 font-secondary pt-10'
              )}
            >
              <div
                className={clsxm(
                  'absolute top-0 w-full h-full flex justify-center',
                  'pt-20 sm:pt-16 md:pt-14 pb-24 md:pb-14'
                )}
                data-aos='fade-up'
                data-aos-offset='200'
              >
                <div className='w-1 h-full bg-typo md:mr-0 mr-44 sm:mr-72' />
              </div>

              {sejarahITSExpo.map((content, index) => {
                const parity = index % 2 === 0 ? 'even' : 'odd';

                return (
                  <div
                    key={index}
                    className={clsxm(
                      'grid grid-rows-1 grid-cols-2 md:grid-cols-5 overflow-hidden md:overflow-visible',
                      'md:gap-x-8 gap-y-2 md:gap-y-0',
                      'md:grid-flow-col-dense'
                    )}
                  >
                    <div
                      className='md:col-start-3 flex justify-center items-center '
                      data-aos='fade-up'
                    >
                      <NextImage {...content.img} />
                    </div>
                    <div
                      className={clsxm(
                        'flex flex-col items-center gap-y-2 md:gap-y-0',
                        'text-start md:col-span-1 ',
                        [
                          parity === 'odd' && 'md:col-start-1 md:text-right',
                          parity === 'even' && 'md:col-start-5 md:text-left',
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
                        className='w-full font-bold text-typo-white md:w-96'
                      >
                        {content.year}
                      </Typography>
                      <Typography
                        variant='b2'
                        className='text-typo-white w-44 sm:w-72 md:w-96'
                      >
                        {content.caption}
                      </Typography>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          {/* Sejarah Illustration */}
          <SejarahBackground2 />
        </section>

        {/* Tema section */}
        <section
          id='tema'
          className='relative bg-landing-preevent pt-20 md:pt-8 overflow-hidden'
        >
          <div className='layout my-12'>
            <Typography
              variant='h2'
              className='font-primary text-center text-typo-white hidden md:block sm:text-center'
              data-aos='fade-down'
            >
              tema its expo
            </Typography>
            <Typography
              variant='h2'
              className='font-primary text-center text-typo-white block md:hidden sm:text-center'
              data-aos='fade-down'
            >
              tema its expo
            </Typography>
            <div className='w-full flex flex-col gap-4 mt-8 mb-4 md:flex-row-reverse max-w-lg mx-auto md:max-w-7xl md:gap-x-16 md:pt-16 md:pb-28 z-50'>
              <div
                className='flex flex-col gap-y-4 md:w-1/2 md:gap-y-9 z-50'
                data-aos='fade-left'
              >
                <div className='flex gap-x-6 z-50'>
                  <Button
                    variant='green'
                    size='large'
                    className={clsx([
                      'bg-turquoise-500 text-typo-white  w-1/2  ',
                      tema === 0 && 'border border-white',
                    ])}
                    onClick={() => setTema(0)}
                  >
                    Grand Theme
                  </Button>
                  <Button
                    variant='green'
                    size='large'
                    className={clsx([
                      'bg-turquoise-500 text-typo-white w-1/2 z-50',
                      tema === 1 && 'border border-white',
                    ])}
                    onClick={() => setTema(1)}
                  >
                    Slogan
                  </Button>
                </div>
                <div className='w-full h-80 md:h-full border-4 rounded-lg border-white/95 bg-white bg-opacity-30 overflow-hidden col-span-2 relative'>
                  <NextImage
                    src='/aboutus/tema-bg-card.png'
                    alt='tema card background'
                    width={400}
                    height={400}
                    className='absolute w-full h-full'
                  />
                  {tema && (
                    <div className='px-5 py-7 flex flex-col md:justify-around justify-between sm:justify-around h-full w-full'>
                      <Typography
                        variant='t'
                        className='font-secondary md:hidden font-bold text-navy-100'
                      >
                        Salam Seni, Ilmu, dan Budaya
                      </Typography>
                      <Typography
                        variant='h5'
                        className='font-secondary hidden md:block font-bold text-navy-100 pt-2'
                      >
                        Salam Seni, Ilmu, dan Budaya
                      </Typography>
                      <ul className='pt-5'>
                        {slogan.map((content, index) => (
                          <li
                            className='list-item list-disc mx-4  text-typo-white'
                            key={index}
                          >
                            <Typography
                              variant='t'
                              className='md:hidden font-secondary text-navy-100  '
                            >
                              <span className='font-semibold'>
                                {content.title}
                              </span>
                              {content.caption}
                            </Typography>
                            <Typography
                              variant='h5'
                              className='font-secondary hidden md:block text-navy-100  '
                            >
                              <span className='font-semibold'>
                                {content.title}
                              </span>
                              {content.caption}
                            </Typography>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
              <div
                className='sm:w-full gap-x-4 flex gap-y-4 md:w-1/2 md:gap-x-10'
                data-aos='fade-right'
              >
                <NextImage
                  src='/aboutus/tema-figure.png'
                  alt='tema figure'
                  width={164}
                  height={320}
                  className='w-full h-full z-10'
                />
                <NextImage
                  src='/aboutus/tema-figure2.png'
                  alt='tema figure'
                  width={164}
                  height={320}
                  className=' w-full h-full pt-10 md:pt-20 z-10'
                />
              </div>
            </div>

            {/* Tema Background */}
            <NextImage
              src='/aboutus/tema-bg-left.png'
              alt='tema-bg-left'
              width='260'
              height='471'
              imgClassName='object-contain'
              className='absolute z-0 -bottom-[10vw] -left-20 md:-left-10 md:w-[40%] max-w-2xl'
            />
            <NextImage
              src='/aboutus/tema-bg-right.png'
              alt='tema-bg-right'
              width='260'
              height='471'
              imgClassName='object-contain'
              className='absolute z-0 -bottom-[10vw] -right-20 md:-right-10 md:w-[40%] max-w-2xl'
            />
          </div>
          <NextImage
            src='/aboutus/ourmascot-barrier-desktop.png'
            alt='pattern illustration'
            width='1440'
            height='88'
            className='w-[1440px] min-w-full'
            priority={true}
          />
        </section>

        {/* Mascot */}
        <section id='mascot' className='relative'>
          <Typography
            variant='h4'
            className='font-primary md:hidden text-center pt-10'
            data-aos='fade-down'
          >
            meet our mascot
          </Typography>
          <Typography
            variant='h1'
            className='font-primary hidden md:block text-center pt-10'
            data-aos='fade-down'
          >
            meet our mascot
          </Typography>

          {/* Mascot Background */}
          <MascotBackground />

          <div className='flex flex-col md:flex-row justify-center relative sm:max-w-xl md:max-w-7xl sm:mx-auto lg:gap-x-4 xl:gap-x-48 pb-24'>
            <NextImage
              src='/aboutus/particle2.png'
              height={70}
              width={70}
              className='absolute left-32 -top-16 hidden md:block'
              alt='particle'
              data-aos='fade-right'
              data-aos-delay='100'
            />
            <NextImage
              src='/aboutus/particle3.png'
              height={50}
              width={50}
              className='absolute left-[40%] top-14 hidden md:block'
              alt='particle'
              data-aos='fade-up'
              data-aos-delay='100'
            />
            <div className='flex flex-col justify-center px-6 md:py-10'>
              <NextImage
                src='/aboutus/saka.png'
                className='w-full px-4 pt-10 max-w-[375px] mx-auto md:h-[385px]'
                height={370}
                width={365}
                alt='cloud'
                data-aos='fade-up'
                data-aos-delay='300'
              />
              <div className='flex flex-col pt-10 md:max-w-lg'>
                <div className='relative w-fit mx-auto px-28 md:px-40'>
                  <Typography
                    variant='h4'
                    className='font-primary text-center py-5 md:hidden'
                    data-aos='fade-up'
                    data-aos-delay='200'
                  >
                    saka
                  </Typography>
                  <Typography
                    variant='h3'
                    className='font-primary hidden md:block text-center'
                    data-aos='fade-up'
                    data-aos-delay='200'
                  >
                    saka
                  </Typography>
                  <NextImage
                    className='absolute right-6 bottom-2 md:left-10 md:bottom-8'
                    alt='particle'
                    height={40}
                    width={40}
                    src='/aboutus/particle.png'
                    data-aos='fade-down'
                    data-aos-delay='200'
                  />
                  <NextImage
                    height={30}
                    width={30}
                    className='absolute left-20 top-1 md:left-32 md:top-2'
                    alt='highlight'
                    src='/aboutus/highlight-saka.png'
                    data-aos='fade-down'
                    data-aos-delay='200'
                  />
                </div>
                <Typography
                  variant='c'
                  className='text-discolored-800 font-light md:text-justify '
                  data-aos='fade-up'
                  data-aos-delay='300'
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut etiam sit amet nisl purus in mollis. Phasellus vestibulum
                  lorem sed risus ultricies tristique nulla. Eget magna
                  fermentum iaculis eu. Faucibus scelerisque eleifend donec
                  pretium vulputate sapien. Aliquet eget sit amet tellus cras
                  adipiscing enim eu turpis. Morbi tristique senectus et netus
                  et malesuada fames ac. A diam maecenas sed enim ut sem.
                </Typography>
              </div>
            </div>
            <div className='flex flex-col px-6 md:py-10'>
              <div className='relative'>
                <NextImage
                  src='/aboutus/wana.png'
                  className='w-full px-4 pt-10 md:max-w-[400px] mx-auto md:h-[385px]'
                  height={253}
                  width={325}
                  alt='cloud'
                  data-aos='fade-up'
                  data-aos-delay='300'
                />
                <NextImage
                  className='absolute md:left-56 md:-top-20  top-10 md:w-16 w-10 left-10'
                  alt='particle'
                  height={40}
                  width={40}
                  src='/aboutus/particle.png'
                  data-aos='fade-left'
                  data-aos-delay='200'
                />
              </div>
              <div className='flex-col flex pt-10 md:max-w-lg'>
                <div className='relative w-fit mx-auto px-28 md:px-40'>
                  <Typography
                    variant='h4'
                    className='font-primary text-center py-5 md:hidden'
                    data-aos='fade-up'
                    data-aos-delay='200'
                  >
                    wana
                  </Typography>
                  <Typography
                    variant='h3'
                    className='font-primary hidden md:flex text-center'
                    data-aos='fade-up'
                    data-aos-delay='200'
                  >
                    wana
                  </Typography>
                  <NextImage
                    className='absolute right-10 bottom-6 md:hidden'
                    alt='particle'
                    height={20}
                    width={20}
                    src='/aboutus/particle.png'
                    data-aos='fade-down'
                    data-aos-delay='200'
                  />
                  <NextImage
                    className='absolute md:right-0 md:top-0 hidden md:block top-10 md:w-16 w-10 left-10'
                    alt='particle'
                    height={40}
                    width={40}
                    src='/aboutus/particle.png'
                    data-aos='fade-down'
                    data-aos-delay='200'
                  />
                  <NextImage
                    className='hidden md:block absolute -right-24 -bottom-20'
                    src='/aboutus/particle3.png'
                    alt='particle'
                    height={40}
                    width={40}
                    data-aos='fade-down'
                    data-aos-delay='200'
                  />
                  <NextImage
                    height={30}
                    width={30}
                    className='absolute right-20 md:right-32 top-2'
                    alt='highlight'
                    src='/aboutus/highlight-wana.png'
                    data-aos='fade-down'
                    data-aos-delay='200'
                  />
                </div>
                <Typography
                  variant='c'
                  className='text-discolored-800 font-light  '
                  data-aos='fade-up'
                  data-aos-delay='300'
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut etiam sit amet nisl purus in mollis. Phasellus vestibulum
                  lorem sed risus ultricies tristique nulla. Eget magna
                  fermentum iaculis eu. Faucibus scelerisque eleifend donec
                  pretium vulputate sapien. Aliquet eget sit amet tellus cras
                  adipiscing enim eu turpis. Morbi tristique senectus et netus
                  et malesuada fames ac. A diam maecenas sed enim ut sem.
                </Typography>
              </div>
            </div>
          </div>
          <NextImage
            width={1525}
            height={310}
            className='w-full
          '
            src='/aboutus/mascot-bg-btm.png'
            alt='mascot background'
          />
        </section>

        {/* Past memories */}
        <section
          id='past-memories'
          className={clsxm(
            // Custom Tailwind Class
            'relative bg-[#00587A]'
          )}
        >
          <div className='pt-8'>
            <Typography
              variant='h4'
              className='font-primary md:hidden text-center text-white leading-none mb-36'
              data-aos='fade-down'
            >
              past memories
            </Typography>
            <Typography
              variant='h1'
              className='font-primary hidden md:block text-center text-white leading-none mb-48'
              data-aos='fade-down'
            >
              past memories
            </Typography>

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

              {aboutUsSwiperContents.map((content, index) => (
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
            <Typography
              variant='c'
              className='text-typo-white text-center md:hidden pb-32 pt-28 layout'
              data-aos='fade-up'
              data-aos-delay='200'
            >
              “Saling memahami karena kita seniman, saling menghargai karena
              kita budayawan, saling menyikapi karena kita ilmuwan. Karena kita
              akan mengadakan sebuah pesta, menumbuhkan cinta dan menorehkan
              sebuah cerita di ITS.”
            </Typography>
            <Typography
              variant='h6'
              className='text-typo-white hidden md:block text-center mx-auto max-w-4xl py-32'
              data-aos='fade-up'
              data-aos-delay='200'
            >
              “Saling memahami karena kita seniman, saling menghargai karena
              kita budayawan, saling menyikapi karena kita ilmuwan. Karena kita
              akan mengadakan sebuah pesta, menumbuhkan cinta dan menorehkan
              sebuah cerita di ITS.”
            </Typography>
          </div>

          <NextImage
            src='/aboutus/pm-particle1.png'
            alt='past memories particle'
            height={25}
            width={25}
            className='absolute top-10 left-10'
          />
          <NextImage
            src='/aboutus/pm-particle2.png'
            alt='past memories particle'
            height={40}
            width={40}
            className='absolute top-20 right-10'
          />
          <NextImage
            src='/aboutus/pm-particle3.png'
            alt='past memories particle'
            height={40}
            width={40}
            className='absolute top-72 left-8'
          />
          <NextImage
            src='/aboutus/pm-particle4.png'
            alt='past memories particle'
            height={20}
            width={20}
            className='absolute top-80 right-28'
          />
          <NextImage
            src='/aboutus/memories-flower-right.png'
            height={120}
            width={85}
            className='absolute top-64 right-0 md:hidden'
            alt='flower right'
          />
          <NextImage
            src='/aboutus/memories-flower-left.png'
            height={140}
            width={80}
            className='absolute top-4 left-0 md:hidden'
            alt='flower left'
          />
        </section>
      </main>
    </Layout>
  );
}

export default AboutUs;
