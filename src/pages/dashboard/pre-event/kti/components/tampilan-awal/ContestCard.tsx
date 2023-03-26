import NextImage from '@/components/NextImage';
import Typography from '@/components/typography/Typography';
import clsxm from '@/lib/clsxm';

export default function ContestCard() {
  return (
    <div className='grid gap-6'>
      <div className='relative'>
        <div className='w-full h-64'>
          <NextImage
            src='/dashboard/pre-event/kti/tampilan-awal/contest-card.png'
            alt='Karya Tulis Ilmiah Mahasiswa S1/D4/Sederajat'
            width={1525}
            height={1024}
            layout='fill'
            className='w-full h-full'
            imgClassName='object-cover rounded-xl'
            useSkeleton
            blurClassName='bg-typo-secondary object-cover rounded-xl z-10'
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
            Karya Tulis Ilmiah
          </Typography>
          <Typography as='c' variant='c' className='text-typo-white'>
            Mahasiswa S1/D4/Sederajat
          </Typography>
        </div>
      </div>
    </div>
  );
}
