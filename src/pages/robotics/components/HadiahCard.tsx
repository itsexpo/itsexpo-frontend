import NextImage from '@/components/NextImage';
import Typography from '@/components/typography/Typography';

type HadiahCard = {
  img: string;
  text: string;
};

export default function HadiahCard({ img, text }: HadiahCard) {
  return (
    // <div
    //   className={clsxm(
    //     'bg-contain bg-no-repeat bg-center relative w-full h-[120px] rounded-xl',
    //     'flex justify-center md:justify-end items-center md:pr-2 lg:pr-4'
    //   )}
    //   style={{
    //     backgroundImage: `url("/images${img}")`,
    //   }}
    // >
    //   <Typography
    //     variant='h5'
    //     as='h5'
    //     className='font-semibold text-white ml-4 sm:text-2xl md:text-lg lg:text-2xl xl:text-4xl 2xl:text-4xl'
    //   >
    //     {text}
    //   </Typography>
    // </div>
    <div className='relative'>
      <NextImage
        src={img}
        alt='hadiah'
        width={549}
        height={155}
        className='w-full mt-3 lg:mt-4'
        imgClassName='rounded-[18px] md:rounded-xl'
      />
      <div className='absolute top-1/2 left-1/2 md:left-1/3 -translate-x-1/4 md:-translate-x-[5%] lg:translate-x-[5%] -translate-y-1/2'>
        <Typography
          variant='b2'
          as='b2'
          className='font-semibold text-lg md:text-lg lg:text-xl xl:text-3xl text-white'
        >
          {text}
        </Typography>
      </div>
    </div>
  );
}
