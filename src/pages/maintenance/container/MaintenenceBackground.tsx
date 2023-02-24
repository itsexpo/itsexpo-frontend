import NextImage from '@/components/NextImage';

export default function MaintenenceBackground() {
  return (
    <div>
      <NextImage
        data-aos-delay='300'
        data-aos='fade-left'
        data-aos-duration='500'
        data-aos-easing='ease-in-out'
        className='absolute w-[40%] md:w-[32%] bottom-0 md:bottom-0 right-0 md:right-0 z-10'
        alt='wayang'
        width={1072}
        height={972}
        priority
        src={'/maintanence/wayang.png'}
      />

      <NextImage
        className='absolute hidden md:block lg:block w-full md:bottom-0 right-0 z-[9]'
        alt='batik'
        width={2692}
        height={214}
        src={'/maintanence/batik.png'}
      />
      <NextImage
        className='absolute block md:hidden w-full bottom-0 right-0 z-[9]'
        alt='batik mobile'
        width={674}
        height={60}
        src={'/maintanence/batik-mobile.png'}
      />

      <NextImage
        data-aos-delay='500'
        data-aos='zoom-in'
        data-aos-duration='800'
        data-aos-easing='ease-in-out'
        className='absolute w-[50%] md:w-[43%] bottom-0 md:-bottom-4 -right-[15%] z-[8]'
        alt='ornamen'
        width={1430}
        height={1726}
        src={'/maintanence/outline1.png'}
      />
    </div>
  );
}
