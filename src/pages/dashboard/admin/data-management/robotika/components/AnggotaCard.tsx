import Typography from '@/components/typography/Typography';

export default function AnggotaCard({
  jabatan,
  nama,
  phone_number,
}: {
  jabatan: string;
  nama: string;
  phone_number: string;
}) {
  return (
    <div className='p-4 rounded-lg border border-typo-outline'>
      <Typography as='p' variant='c' className='font-medium text-typo-icon'>
        {jabatan}
      </Typography>
      <Typography className='font-semibold text-typo-primary'>
        {nama}
      </Typography>
      <Typography as='p' className='text-typo-secondary text-[11px]'>
        {phone_number}
      </Typography>
    </div>
  );
}
