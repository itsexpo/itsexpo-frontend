import NextImage from '@/components/NextImage';
import Typography from '@/components/typography/Typography';

type HadiahCard = {
  img: string;
  text: string;
};

export default function HadiahCard({ img, text }: HadiahCard) {
  return (
    <div className='relative'>
      <NextImage
        src={img}
        alt='hadiah'
        width={549}
        height={155}
        className='w-[90%] mx-auto my-5'
        imgClassName='rounded-[18px] md:rounded-[25px]'
      />
      <div className='absolute top-1/2 left-1/2 md:left-1/3 -translate-x-1/4 md:-translate-x-[5%] lg:translate-x-[5%] -translate-y-1/2'>
        <Typography
          variant='b2'
          as='b2'
          className='font-semibold text-base md:text-2xl text-white'
        >
          {text}
        </Typography>
      </div>
    </div>
  );
}
