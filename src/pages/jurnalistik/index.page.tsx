import 'aos/dist/aos.css';
import 'swiper/css';
import 'swiper/css/autoplay';

import AOS from 'aos';
import { useEffect } from 'react';
import React from 'react';
import { IoIosArrowDown } from 'react-icons/io';

import ButtonLink from '@/components/links/ButtonLink';
import NextImage from '@/components/NextImage';
import SEO from '@/components/SEO';
import Typography from '@/components/typography/Typography';
import { Frequent } from '@/contents/pre-event/jurnalistik/faq';
import landingTimelineContents from '@/contents/pre-event/jurnalistik/landing-timeline';
import Layout from '@/layouts/Layout';
import clsxm from '@/lib/clsxm';
import {
  AboutBackground,
  AboutPattern,
} from '@/pages/jurnalistik/container/AboutBackground';
import Frequentlyaq from '@/pages/jurnalistik/container/Faq';
import {
  GuidebookBackground,
  GuidebookPattern,
} from '@/pages/jurnalistik/container/GuidebookBg';
import {
  HeroBackground,
  HeroPattern,
} from '@/pages/jurnalistik/container/HeroBackground';
import { HeroImage } from '@/pages/jurnalistik/container/HeroImage';
import { OtherFaq } from '@/pages/jurnalistik/container/OtherFaq';
import { RewardTV } from '@/pages/jurnalistik/container/Reward';
import { RewardVideo } from '@/pages/jurnalistik/container/RewardVideo';
import {
  TimelineBackground1,
  TimelineBackground2,
} from '@/pages/jurnalistik/container/TimelineBackground';

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);

  const aboutRef = React.useRef<HTMLElement>(null);

  return (
    <Layout>
      <SEO title='Jurnalistik' description='This is Jurnalistik page' />
      <main className='scroll-smooth bg-tainted-100'>
        {/* Hero Section */}
        <section
          id='hero'
          className='relative w-full flex flex-col justify-center items-center bg-tainted-100 pt-16'
        >
          <HeroBackground />

          {/* Hero Content */}
          <div className='layout my-24 pt-5'>
            <div className='grid grid-cols-1 md:grid-cols-2 items-center gap-y-2'>
              <div className='items-center' data-aos='fade-up'>
                <Typography
                  variant='h3'
                  as='h3'
                  className='font-primary text-center md:text-left'
                >
                  its expo 2023
                </Typography>
                <Typography
                  variant='h3'
                  as='h3'
                  className='font-secondary font-bold text-4xl md:text-5xl lg:text-[55px] xl:text-6xl text-center md:text-left text-critical-500'
                >
                  JURNALISTIK
                </Typography>
              </div>
              <div className='flex items-center'>
                <HeroImage />
              </div>
            </div>
            <div className='flex justify-center mt-2'>
              <div
                onClick={() =>
                  scrollBy({
                    top:
                      (aboutRef.current?.getBoundingClientRect()?.top ?? 0) -
                      100,
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
                <IoIosArrowDown className='fill-warning-100 text-lg' />
              </div>
            </div>
          </div>
          <HeroPattern />
        </section>

        {/* About Section */}
        <section
          ref={aboutRef}
          id='about-jurnalistik'
          className='relative w-full bg-about-jurnalistik'
        >
          <div className='w-full h-full relative pb-5 md:pb-20'>
            <AboutBackground />

            <div className='w-full'>
              <div
                className='layout justify-center items-center py-10 md:py-24'
                data-aos='fade-up'
              >
                <div className='layout space-y-2'>
                  <Typography
                    variant='h2'
                    className='font-primary text-white text-center'
                  >
                    jurnalistik
                  </Typography>
                  <Typography
                    variant='h6'
                    as='h6'
                    className='font-secondary text-sm md:text-xl text-white text-justify md:text-center'
                  >
                    Journalistic merupakan salah satu ajang lomba bergengsi dari
                    cabang kompetisi ITS Expo 2023 yang mewadahi peserta untuk
                    menuangkan kreativitasnya di bidang fotografi, videografi,
                    penyiaran, dan penulisan. Terbagi menjadi dua kategori
                    lomba, Liputan Televisi ditujukan untuk mahasiswa/umum dan
                    Liputan Video Blogger (V-Log) ditujukan untuk pelajar
                    SMA/SMK Sederajat. Digelar secara luring, peserta akan
                    merasakan bagaimana meliput salah satu rangkaian kegiatan
                    ITS Expo dari pre event hingga closing. Dengan gelora
                    Sepuluh Nopember, kompetisi ini hadir untuk mengapresiasi
                    perkembangan jurnalistik dan media online yang peduli
                    terhadap seni, budaya, dan teknologi.
                  </Typography>
                </div>
              </div>
            </div>
          </div>
          <AboutPattern />
        </section>

        {/* Timeline Section */}
        <section
          id='timeline'
          className='relative w-full flex flex-col items-center bg-[#2A607B] pt-16 md:pt-28'
        >
          {/* Timeline Background */}
          <TimelineBackground1 />

          <NextImage
            src='/landing/preevent-title-left.png'
            alt='pre-event title left'
            width='793'
            height='512'
            className='absolute left-[10%] md:left-[25%] xl:left-[30%] transform -translate-y-1/2 w-[18%] md:w-[10%] pt-16 mt-6 md:mt-0'
            data-aos='fade-right'
          />

          <NextImage
            src='/landing/preevent-title-right.png'
            alt='about ctn right'
            width='793'
            height='512'
            className='absolute right-[10%] md:right-[25%] xl:right-[30%] transform -translate-y-1/2 w-[18%] md:w-[10%] pt-16 mt-6 md:mt-0'
            data-aos='fade-left'
          />
          <Typography
            variant='h2'
            className='font-primary leading-[1.2] md:leading-[0.8] text-typo-white my-16 mt-6 md:mt-0 md:mb-40'
            data-aos='fade-up'
          >
            timeline
          </Typography>

          {/* Timeline Content */}
          <div
            className={clsxm(
              'relative w-full md:w-8/12 lg:w-[60%] 2xl:w-1/2',
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
                        className='font-bold text-typo-white text-lg md:text-2xl'
                      >
                        {content.date}
                      </Typography>
                      <Typography
                        as='p'
                        variant='b1'
                        className='text-navy-100 text-base md:text-xl'
                      >
                        {content.caption}
                      </Typography>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          {/* Timeline Illustration */}
          <TimelineBackground2 />
        </section>

        {/* Reward Section */}
        <section
          id='reward'
          className='relative w-full bg-tainted-100 -top-1 md:-top-32 pb-10 md:pb-0'
        >
          <NextImage
            src='/jurnalistik/hadiah-ornamen-left.png'
            alt='ornamen-left'
            width='1477'
            height='1612'
            className='absolute left-4 bottom-0 w-1/2'
            data-aos='fade-right'
          />
          <NextImage
            src='/jurnalistik/hadiah-ornamen-right.png'
            alt='ornamen-left'
            width='284'
            height='1160'
            className='absolute right-4 top-0 w-[10%]'
            data-aos='fade-right'
          />
          <div className='layout mt-4'>
            <Typography
              variant='h2'
              className='font-primary text-center'
              data-aos='fade-down'
            >
              Hadiah pemenang
            </Typography>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 pb-20'>
              <div>
                <div className='w-[95%] md:w-[80%] mx-auto relative z-[1]'>
                  <NextImage
                    src={'/jurnalistik/title-tv.png'}
                    alt='title tv'
                    width='1146'
                    height='612'
                    className='w-full'
                    data-aos='zoom-in'
                  />
                </div>
                <div className='-translate-y-1/4 bg-white rounded-xl mx-auto w-[90%] md:w-[65%] p-3 xl:p-4'>
                  <RewardTV />
                </div>
              </div>
              <div>
                <div className='w-[95%] md:w-[80%] mx-auto relative z-[1]'>
                  <NextImage
                    src={'/jurnalistik/title-video.png'}
                    alt='title tv'
                    width='1146'
                    height='612'
                    className='w-full'
                    data-aos='zoom-in'
                  />
                </div>
                <div className='-translate-y-1/4 bg-white rounded-xl mx-auto w-[90%] md:w-[65%] p-3 xl:p-4'>
                  <RewardVideo />
                </div>
              </div>
            </div>
          </div>
          <NextImage
            src='/jurnalistik/awan-gbook2.png'
            alt='awan-gbook'
            width='2880'
            height='482'
            className='absolute w-full z-[1] translate-y-4 xl:-translate-y-12'
          />
        </section>

        <section
          id='guidebook'
          className={clsxm('relative bg-[#00587A] pb-10 md:pb-32 pt-10')}
        >
          <div className='layout my-20 justify-center items-center max-w-[294px] md:max-w-[751px] z[2]'>
            <NextImage
              src='/jurnalistik/gbook-title-left.png'
              alt='pre-event title left'
              width='470'
              height='469'
              className='absolute left-[4%] md:left-[20%] top-[4%] md:top-[7%] transform -translate-y-1/2 w-[15%] pt-56 z-[2]'
              data-aos='fade-right'
            />

            <NextImage
              src='/jurnalistik/gbook-title-right.png'
              alt='title-right'
              width='470'
              height='469'
              className='absolute right-[4%] md:right-[20%] top-[4%] md:top-[7%] transform -translate-y-1/2 w-[15%] pt-56 z-[2]'
              data-aos='fade-left'
            />
            <Typography
              variant='h2'
              as='h2'
              className='font-primary text-center text-white leading-none z[2]'
              data-aos='fade-up'
            >
              Guidebook
            </Typography>
            <div
              className='relative grid grid-cols-1 z-[2] min-h-[388px] max-w-[294px] md:max-w-[751px] bg-white rounded-lg p-8 mt-8 mx-auto'
              data-aos='fade-up'
            ></div>
            <div className='relative flex flex-col z-[2] justify-center space-y-5 max-w-[294px] md:max-w-[751px] mx-auto'>
              <ButtonLink
                href='/coming-soon'
                variant='yellow'
                size='large'
                className='mt-8'
                data-aos='fade-up'
                data-aos-delay='100'
              >
                Download Guidebook
              </ButtonLink>
            </div>
          </div>
          <GuidebookBackground />
        </section>

        <section id='faq' className='relative bg-tainted-100 pb-20 md:pb-56'>
          <GuidebookPattern />
          <NextImage
            src='/jurnalistik/bunga-faq-bot.png'
            alt='bunga-faq'
            width='2878'
            height='160'
            className='absolute bottom-0 w-full'
            data-aos='fade-right'
          />

          <NextImage
            src='/jurnalistik/ornamen-faq-center.png'
            alt='ornamen-faq'
            width='2397'
            height='1043'
            className='absolute top-1/3 w-[75%] mx-32'
          />

          <NextImage
            src='/jurnalistik/org-faq-left.png'
            alt='ornamen-faq'
            width='384'
            height='882'
            className='absolute hidden md:block bottom-0 w-[13%]'
            data-aos='fade-right'
          />

          <NextImage
            src='/jurnalistik/org-faq-right.png'
            alt='ornamen-faq'
            width='384'
            height='882'
            className='absolute hidden md:block bottom-0 xl:w-[13%] right-0'
            data-aos='fade-left'
          />
          <div className='relative layout space-y-2 pt-20'>
            <Typography
              variant='h1'
              as='h1'
              className='font-primary text-center leading-none my-9'
              data-aos='fade-up'
            >
              Frequently Asked Question
            </Typography>

            <div
              className='grid grid-cols-1 max-w-[310px] md:max-w-[953px] bg-white rounded-lg p-4 md:p-8 mt-8 mx-auto'
              data-aos='fade-up'
            >
              {Frequent.map((faq, index) => (
                <Frequentlyaq
                  key={index}
                  title={faq.title}
                  description={faq.description}
                />
              ))}
              <OtherFaq />
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
