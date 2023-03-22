import Typography from '@/components/typography/Typography';
import clsxm from '@/lib/clsxm';

type HadiahCard = {
  img: string;
  text: string;
};

export default function HadiahCard({ img, text }: HadiahCard) {
  return (
    <div
      className={clsxm(
        'bg-contain bg-no-repeat bg-center relative w-full h-[120px] rounded-xl',
        'flex justify-center md:justify-end items-center md:pr-2 lg:pr-4'
      )}
      style={{
        backgroundImage: `url("/images${img}")`,
      }}
    >
      <Typography
        variant='h5'
        as='h5'
        className='font-semibold text-white ml-4 sm:text-2xl md:text-lg lg:text-2xl xl:text-4xl 2xl:text-4xl'
      >
        {text}
      </Typography>
    </div>
  );
}
