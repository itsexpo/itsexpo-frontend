import ImageFetch from '@/components/ImageFetch';
import Typography from '@/components/typography/Typography';

export default function DokumenPendukungCard({
  imgPath,
  title,
  caption,
}: {
  imgPath: string;
  title: string;
  caption: string;
}) {
  return (
    <div className='flex items-center gap-x-4 p-4 rounded-xl border border-typo-outline group'>
      <ImageFetch
        imgPath={imgPath}
        alt='id card ketua'
        width={80}
        height={80}
        className='w-20'
        imgClassName='rounded-md'
      />
      <div className='space-y-2'>
        <Typography variant='b1' className='font-semibold text-typo-primary'>
          {title}
        </Typography>
        <Typography as='c' variant='c' className='text-typo-icon'>
          {caption}
        </Typography>
      </div>
    </div>
  );
}
