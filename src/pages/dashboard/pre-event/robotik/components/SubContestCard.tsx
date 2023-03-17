import NextImage from '@/components/NextImage';
import Typography from '@/components/typography/Typography';
import { robotikSubContest } from '@/contents/pre-event/robotik/tampilan-awal';
import clsxm from '@/lib/clsxm';

export default function SubContestCard() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
      {robotikSubContest.map((content, index) => (
        <div key={index} className='relative'>
          <div className='w-full h-52'>
            <NextImage
              {...content.img}
              layout='fill'
              className='w-full h-full'
              imgClassName='object-cover rounded-xl'
            />
          </div>
          <div
            className={clsxm(
              'absolute bottom-0 w-full h-3/4 rounded-b-xl',
              'bg-gradient-to-t from-typo-primary to-transparent'
            )}
          />
          <div className='absolute bottom-0 flex flex-col p-6'>
            <Typography
              as='p'
              variant='t'
              className='font-semibold text-typo-white'
            >
              {content.title}
            </Typography>
            <Typography as='c' variant='c' className='text-typo-white'>
              {content.caption}
            </Typography>
          </div>
        </div>
      ))}
    </div>
  );
}
