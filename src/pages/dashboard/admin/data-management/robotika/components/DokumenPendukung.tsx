import DokumenPendukungCard from '@/components/shared/DokumenPendukungCard';
import clsxm from '@/lib/clsxm';

export default function DokumenPendukung({
  idCard,
  sharePoster,
  followSosmed,
  className,
}: {
  idCard: string;
  sharePoster: string;
  followSosmed: string;
} & React.ComponentPropsWithRef<'div'>) {
  return (
    <div className={clsxm('grid grid-cols-3 gap-x-4', className)}>
      <DokumenPendukungCard
        imgPath={idCard}
        title='Tanda Pengenal'
        caption='09/03/2023 23:59'
      />
      <DokumenPendukungCard
        imgPath={sharePoster}
        title='Bukti Repost Poster'
        caption='09/03/2023 23:59'
      />
      <DokumenPendukungCard
        imgPath={followSosmed}
        title='Bukti Follow'
        caption='09/03/2023 23:59'
      />
    </div>
  );
}
