import FileFetch from '@/components/FileFetch';
import DokumenPendukungCard from '@/components/shared/DokumenPendukungCard';
import Typography from '@/components/typography/Typography';
import clsxm from '@/lib/clsxm';

export default function DokumenPendukung({
  uploadTwibbon,
  buktiRepost,
  followSosmed,
  fileAbstrak,
  fullPaper,
  className,
}: {
  uploadTwibbon: string;
  buktiRepost: string;
  followSosmed: string;
  fileAbstrak: string;
  fullPaper: string;
} & React.ComponentPropsWithRef<'div'>) {
  return (
    <div className={clsxm('grid grid-cols-3 gap-4', className)}>
      <DokumenPendukungCard
        imgPath={uploadTwibbon}
        title='Bukti Upload Twibbon'
        caption='09/03/2023 23:59'
      />
      <DokumenPendukungCard
        imgPath={buktiRepost}
        title='Bukti Repost Poster'
        caption='09/03/2023 23:59'
      />
      <DokumenPendukungCard
        imgPath={followSosmed}
        title='Bukti Follow'
        caption='09/03/2023 23:59'
      />
      <FileFetch filePath={fileAbstrak} label='File Abstrak' alt='Abstrak' />
      {fullPaper === '' ? (
        <Typography className='text-center'>
          Full Paper Belum diupload
        </Typography>
      ) : (
        <FileFetch
          filePath={fullPaper}
          label='File Full Paper'
          alt='Full Paper'
        />
      )}
    </div>
  );
}
