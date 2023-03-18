import FileFetch from '@/components/FileFetch';
import Typography from '@/components/typography/Typography';

export default function FetchFileSandbox() {
  const path =
    'kti/file_abstrak/file_abstract_MmVjYzQwMGUtMmVhZS00ZDcwLWI3ZGMtOWI1MWEzZGRlNTYz';
  return (
    <div className='layout py-20'>
      <Typography variant='h1' font='upakarti'>
        File Fetch
      </Typography>
      <div className='md:w-1/2 w-full'>
        <FileFetch filePath={path} label='contoh' alt='' />
      </div>
    </div>
  );
}
