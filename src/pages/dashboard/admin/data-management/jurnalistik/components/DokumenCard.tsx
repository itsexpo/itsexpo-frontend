import * as React from 'react';

import ImageFetch from '@/components/ImageFetch';
import Typography from '@/components/typography/Typography';
import clsxm from '@/lib/clsxm';
import { DetailTimJurnalistik } from '@/types/entities/pre-event/jurnalistik';

export default function DokumenCard({
  tim,
  className,
}: {
  tim?: DetailTimJurnalistik;
  className?: string;
}) {
  const [selected, setSelected] = React.useState(0);

  return (
    <section
      className={clsxm(
        'space-y-6 p-6 rounded-xl bg-typo-white shadow-pendaftaran',
        className
      )}
    >
      <Typography
        as='h6'
        variant='h6'
        className='font-semibold text-typo-primary'
      >
        Dokumen Pendukung
      </Typography>

      <div className='grid grid-cols-3 gap-x-2 p-2 rounded-lg bg-typo-light'>
        {tim?.team_member.map((member, index) => (
          <div
            key={index}
            className={clsxm(
              'p-2 cursor-pointer rounded-md',
              selected === index
                ? 'bg-typo-white shadow-sm'
                : 'hover:bg-typo-outline',
              'transition-colors duration-200 ease-out'
            )}
            onClick={() => setSelected(index)}
          >
            <Typography
              className={clsxm(
                'text-center font-semibold text-typo-secondary',
                selected === index && 'text-typo-primary',
                'transition-colors duration-200 ease-out'
              )}
            >
              {member.ketua === 'KETUA' ? 'Ketua Tim' : `Anggota ${index}`}
            </Typography>
          </div>
        ))}
      </div>

      {tim?.team_member.map((member, index) => (
        <DokumenPendukung
          key={index}
          idCard={member.id_card_url}
          sharePoster={member.share_poster_url}
          followSosmed={member.follow_sosmed_url}
          className={clsxm(selected !== index && 'hidden')}
        />
      ))}
    </section>
  );
}

function DokumenPendukung({
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
        title='Foto KTP'
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

function DokumenPendukungCard({
  imgPath,
  title,
  caption,
}: {
  imgPath: string;
  title: string;
  caption: string;
}) {
  return (
    <div className='flex items-center gap-x-4 p-4 rounded-xl border border-typo-outline'>
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
