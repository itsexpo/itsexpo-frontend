import Typography from '@/components/typography/Typography';

export default function AnggotaCard({
  jabatan,
  nama,
  nrp,
  departemen,
}: {
  jabatan: string;
  nama: string;
  nrp: string;
  departemen: string;
}) {
  return (
    <div className='p-4 rounded-lg border border-typo-outline grid grid-cols-2'>
      <div>
        <Typography as='c' variant='c' className='font-medium text-typo-icon'>
          {jabatan}
        </Typography>
        <Typography className='font-semibold text-typo-primary'>
          {nama}
        </Typography>
      </div>
      <div className='flex items-end flex-col'>
        <Typography className='font-semibold text-success-500' variant='c'>
          {nrp}
        </Typography>
        <Typography className='font-semibold text-typo-primary'>
          {departemen}
        </Typography>
      </div>
    </div>
  );
}
