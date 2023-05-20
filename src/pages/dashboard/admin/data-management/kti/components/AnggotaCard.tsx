import Typography from '@/components/typography/Typography';

export default function AnggotaCard({
  jabatan,
  nama,
  no_telp,
}: {
  jabatan: string;
  nama: string;
  no_telp: string;
}) {
  return (
    <div className='p-4 rounded-lg border border-typo-outline'>
      <Typography as='c' variant='c' className='font-medium text-typo-icon'>
        {jabatan}
      </Typography>
      <Typography className='font-semibold text-typo-primary'>
        {nama}
      </Typography>
      <Typography className='text-typo-secondary'>{no_telp}</Typography>
    </div>
  );
}
