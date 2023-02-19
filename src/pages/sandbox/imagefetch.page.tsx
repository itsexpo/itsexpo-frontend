import ImageFetch from '@/components/ImageFetch';
import Typography from '@/components/typography/Typography';

export default function ImageFetchSandbox() {
  const path = 'Testing/b9WQL1PSo86Jqf61';
  return (
    <div className='layout py-20'>
      <Typography variant='h1' font='upakarti'>
        Image Fetch
      </Typography>
      <div className='md:w-1/2 w-full'>
        <ImageFetch imgPath={path} tag='' label='contoh' alt='' />
      </div>
    </div>
  );
}
