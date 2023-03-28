import Typography from '@/components/typography/Typography';

export default function AnggotaCard({
  jabatan,
  nama,
}: {
  jabatan: string;
  nama: string;
}) {
  return (
    <div className='p-4 rounded-lg border border-typo-outline'>
      <Typography as='c' variant='c' className='font-medium text-typo-icon'>
        {jabatan}
      </Typography>
      <Typography className='font-semibold text-typo-primary'>
        {nama}
      </Typography>
    </div>
  );
}
